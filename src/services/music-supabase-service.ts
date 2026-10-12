/**
 * Supabase Service for Moe Music Website
 * Uses common suffix '_music' for all tables to avoid conflict with other projects:
 * - lyrics_music: bài hát, lời bài hát, bài hát hiện tại, ảnh WebP Base64 (max HD)
 * - playlists_music: toàn bộ danh sách playlists và bài hát kèm link youtube
 * - blogs_music: toàn bộ bài viết blog âm nhạc và đoạn văn paragraphs
 * - visitor_ips_music: lưu IP khách truy cập, mỗi IP chỉ 1 dòng, tăng số lần và cập nhật thời gian
 * - visits_log_music: nhật ký truy cập theo thời gian phục vụ biểu đồ thống kê
 */

import { LyricPost, PlaylistPost, BlogsPost } from '@/app/types/type';
import {
  getCopyrightSafeLyricsExcerpt,
  getSpotifyInfo,
  getSongVibeProfile,
} from '@/lib/song-vibe-helper';

export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://dgqfrzwxxkkbuddtwjpc.supabase.co';

export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'sb_publishable_tyoe7Ju7BIQ1ioArGi4jpw_gr0Pgnzt';

export const defaultHeaders = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
};

// =========================================================================
// MULTI-TIER CLIENT & SERVER CACHE SYSTEM
// =========================================================================
const memoryCache = new Map<string, { data: any; timestamp: number }>();
const DEFAULT_TTL_MS = 3 * 60 * 1000; // 3 minutes cache validity

/**
 * Xóa toàn bộ bộ nhớ đệm client (khi thêm/sửa/xóa bài hát hoặc playlist)
 */
export function clearSupabaseClientCache(): void {
  memoryCache.clear();
  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith('moe_cache_')) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((k) => sessionStorage.removeItem(k));
    } catch {}
  }
}

// Cached public IP of the current visitor in memory
let cachedVisitorIp: string | null = null;

export interface VisitorIpRecord {
  ip_address: string;
  visit_count: number;
  first_visited_at: string;
  last_visited_at: string;
  user_agent?: string;
  device_type?: 'desktop' | 'mobile' | 'tablet';
  browser?: string;
  os?: string;
  city?: string;
  country?: string;
}

export interface VisitLogRecord {
  id?: number;
  ip_address: string;
  page_url?: string;
  user_agent?: string;
  device_type?: string;
  browser?: string;
  os?: string;
  visited_at: string;
}

export interface SongLyricRecord {
  id?: number;
  slug: string;
  title: string;
  artist: string;
  composer?: string;
  producer?: string;
  year?: string;
  duration?: string;
  desc?: string;
  image_base64?: string; // WebP Base64 HD hoặc Image URL
  singer_photo_base64?: string; // WebP Base64
  audio_url?: string;
  spotify_url?: string;
  spotify_track_id?: string;
  vibe?: string;
  genre?: string;
  mood?: string;
  story?: string;
  instruments?: string[];
  quote?: string;
  lyrics: Array<{ type: string; content: string }>;
  categories?: Array<{ name: string }>;
  views?: number;
  is_current?: boolean;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
  isLocalFallback?: boolean;
}

export interface PlaylistRecord {
  id?: number;
  slug: string;
  title: string;
  desc?: string;
  description?: string;
  keywords?: string[];
  categories?: Array<{ name: string }>;
  image?: string;
  banner?: string;
  songs: Array<{ name: string; desc: string; youtube: string }>;
  mood?: string;
  final?: string;
  views?: number;
  date?: string;
  created_at?: string;
  updated_at?: string;
  isLocalFallback?: boolean;
}

export interface BlogRecord {
  id?: number;
  slug: string;
  title: string;
  desc?: string;
  keywords?: string[];
  categories?: Array<{ name: string }>;
  image?: string;
  paragraphs: Array<{ type: string; content: string }>;
  user_comment_avatar?: string;
  user_name_comment?: string;
  user_role_comment?: string;
  comment?: string;
  views?: number;
  date?: string;
  created_at?: string;
  updated_at?: string;
  isLocalFallback?: boolean;
}

export interface AnalyticsStats {
  totalHits: number;
  uniqueIps: number;
  todayVisits: number;
  totalLyrics: number;
  totalPlaylists: number;
  totalBlogs: number;
  totalContentViews: number;
  currentSong: SongLyricRecord | null;
  dailyTraffic: Array<{ date: string; hits: number; uniqueIps: number }>;
  deviceBreakdown: { desktop: number; mobile: number; tablet: number };
  browserBreakdown: Record<string, number>;
  topIps: VisitorIpRecord[];
  isUsingFallback?: boolean;
}

/**
 * Trích xuất URL ảnh an toàn từ StaticImageData hoặc string
 */
export function extractImageSrc(img: any): string {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (typeof img === 'object' && img?.src) return img.src;
  return '';
}

/**
 * Helper chuyển đổi dữ liệu LyricPost nội bộ sang SongLyricRecord
 */
export function convertLyricPostToRecord(
  post: LyricPost,
  isCurrent = false
): SongLyricRecord {
  const spotifyInfo = getSpotifyInfo(post);
  const vibeProfile = getSongVibeProfile(post);
  const safeLyrics = getCopyrightSafeLyricsExcerpt(post.lyrics || []);

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    artist: post.artist,
    composer: post.composer || post.artist,
    producer: post.producer || '',
    year: post.year || '2024',
    duration: post.duration || '03:45',
    desc: post.desc || '',
    image_base64: extractImageSrc(post.image),
    singer_photo_base64: extractImageSrc(post.singerPhoto),
    audio_url: post.audio || '',
    spotify_url: post.spotifyUrl || spotifyInfo.searchUrl,
    spotify_track_id: post.spotifyTrackId || spotifyInfo.trackId || '',
    vibe: post.vibe || vibeProfile.vibeTags.join(', '),
    genre: post.genre || vibeProfile.genre,
    mood: post.mood || vibeProfile.mood,
    story: post.story || vibeProfile.story,
    instruments: post.instruments || vibeProfile.instruments,
    quote: post.quote || '',
    lyrics: safeLyrics.excerpt.length > 0 ? safeLyrics.excerpt : post.lyrics || [],
    categories: post.categories || [],
    views: post.views || 0,
    is_current: isCurrent || post.id === 1,
    is_active: true,
    created_at: new Date().toISOString(),
    isLocalFallback: true,
  };
}

/**
 * Helper chuyển đổi dữ liệu PlaylistPost nội bộ sang PlaylistRecord
 */
export function convertPlaylistPostToRecord(
  post: PlaylistPost
): PlaylistRecord {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    desc: post.desc || '',
    description: post.description || post.desc || '',
    keywords: post.keywords || [],
    categories: post.categories || [],
    image: extractImageSrc(post.image),
    banner: extractImageSrc(post.banner || post.image),
    songs: post.songs || [],
    mood: post.mood || '',
    final: post.final || '',
    views: post.views || 0,
    date: post.date || '2025-01-01',
    created_at: new Date().toISOString(),
    isLocalFallback: true,
  };
}

/**
 * Helper chuyển đổi dữ liệu BlogsPost nội bộ sang BlogRecord
 */
export function convertBlogPostToRecord(post: BlogsPost): BlogRecord {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    desc: post.desc || '',
    keywords: post.keywords || [],
    categories: post.categories || [],
    image: extractImageSrc(post.image),
    paragraphs: post.paragraphs || [],
    user_comment_avatar: extractImageSrc(post.userCommentAvatar),
    user_name_comment: post.userNameComment || 'Anonymous',
    user_role_comment: post.userRoleComment || 'Admin',
    comment: post.comment || '',
    views: post.views || 0,
    date: post.date || '2025-01-01',
    created_at: new Date().toISOString(),
    isLocalFallback: true,
  };
}

/**
 * Lấy IP công khai của khách truy cập (hỗ trợ Wi-Fi, 4G, Laptop, Điện thoại)
 */
export async function getVisitorIp(): Promise<string> {
  if (cachedVisitorIp) return cachedVisitorIp;
  try {
    const res = await fetch('https://api.ipify.org?format=json', {
      signal:
        typeof AbortSignal !== 'undefined' && AbortSignal.timeout
          ? AbortSignal.timeout(3000)
          : undefined,
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.ip) {
        cachedVisitorIp = data.ip;
        return data.ip;
      }
    }
  } catch {
    try {
      const res2 = await fetch('https://icanhazip.com', {
        signal:
          typeof AbortSignal !== 'undefined' && AbortSignal.timeout
            ? AbortSignal.timeout(3000)
            : undefined,
      });
      if (res2.ok) {
        const ip = (await res2.text()).trim();
        if (ip) {
          cachedVisitorIp = ip;
          return ip;
        }
      }
    } catch {}
  }
  return '127.0.0.1';
}

/**
 * Phân tích User-Agent để xác định Thiết bị, Trình duyệt và Hệ điều hành
 */
export function parseUserAgent(uaString?: string): {
  deviceType: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  os: string;
} {
  const ua =
    uaString || (typeof navigator !== 'undefined' ? navigator.userAgent : '');

  let deviceType: 'desktop' | 'mobile' | 'tablet' = 'desktop';
  if (/iPad|tablet|PlayBook/i.test(ua)) {
    deviceType = 'tablet';
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated/i.test(
      ua
    )
  ) {
    deviceType = 'mobile';
  }

  let os = 'Other';
  if (/Windows NT/i.test(ua)) os = 'Windows';
  else if (/Macintosh|Mac OS X/i.test(ua)) os = 'macOS';
  else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/Linux/i.test(ua)) os = 'Linux';

  let browser = 'Other';
  if (/Edg\//i.test(ua)) browser = 'Edge';
  else if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) browser = 'Chrome';
  else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) browser = 'Safari';
  else if (/Firefox\//i.test(ua)) browser = 'Firefox';
  else if (/Opera|OPR\//i.test(ua)) browser = 'Opera';

  return { deviceType, browser, os };
}

/**
 * Ghi nhận lượt truy cập của khách vào website
 */
export async function recordVisitorEntrance({
  page = '/',
}: { page?: string } = {}): Promise<{
  success: boolean;
  ip: string;
  isNew?: boolean;
}> {
  try {
    const ip = await getVisitorIp();
    const ua =
      typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown';
    const { deviceType, browser, os } = parseUserAgent(ua);

    // Thử gọi hàm RPC atomic
    try {
      const rpcRes = await fetch(
        `${SUPABASE_URL}/rest/v1/rpc/upsert_visitor_ip_music`,
        {
          method: 'POST',
          headers: defaultHeaders,
          body: JSON.stringify({
            p_ip: ip,
            p_ua: ua,
            p_device: deviceType,
            p_browser: browser,
            p_os: os,
            p_page: page,
          }),
        }
      );
      if (rpcRes.ok) {
        return { success: true, ip };
      }
    } catch {}

    // Fallback REST API
    const checkRes = await fetch(
      `${SUPABASE_URL}/rest/v1/visitor_ips_music?ip_address=eq.${encodeURIComponent(
        ip
      )}`,
      { headers: defaultHeaders }
    );

    const now = new Date().toISOString();

    if (checkRes.ok) {
      const existing = await checkRes.json();
      if (Array.isArray(existing) && existing.length > 0) {
        const currentCount = Number(existing[0].visit_count || 1);
        await fetch(
          `${SUPABASE_URL}/rest/v1/visitor_ips_music?ip_address=eq.${encodeURIComponent(
            ip
          )}`,
          {
            method: 'PATCH',
            headers: defaultHeaders,
            body: JSON.stringify({
              visit_count: currentCount + 1,
              last_visited_at: now,
              user_agent: ua,
              device_type: deviceType,
              browser,
              os,
            }),
          }
        );
      } else {
        await fetch(`${SUPABASE_URL}/rest/v1/visitor_ips_music`, {
          method: 'POST',
          headers: defaultHeaders,
          body: JSON.stringify({
            ip_address: ip,
            visit_count: 1,
            first_visited_at: now,
            last_visited_at: now,
            user_agent: ua,
            device_type: deviceType,
            browser,
            os,
          }),
        });
      }
    }

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/visits_log_music`, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify({
          ip_address: ip,
          page_url: page,
          user_agent: ua,
          device_type: deviceType,
          browser,
          os,
          visited_at: now,
        }),
      });
    } catch {}

    return { success: true, ip };
  } catch (err: any) {
    console.warn(
      '[Supabase Tracker] Notice recording visitor:',
      err?.message || err
    );
    return { success: false, ip: '127.0.0.1' };
  }
}

/**
 * Ghi vết truy cập bất đồng bộ ngầm, không block render của trang
 */
export function recordVisitorEntranceNonBlocking(params: { page?: string } = {}): void {
  if (typeof window === 'undefined') return;
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      recordVisitorEntrance(params).catch(() => {});
    });
  } else {
    setTimeout(() => {
      recordVisitorEntrance(params).catch(() => {});
    }, 1000);
  }
}

/**
 * TĂNG VIEW BÀI VIẾT & GHI VẾT TRUY CẬP (Khi user vào xem bất cứ bài Lyrics, Playlist, hay Blog nào)
 */
export async function incrementPostView(
  type: 'lyrics' | 'playlists' | 'blogs',
  slug: string
): Promise<number | null> {
  try {
    const ip = await getVisitorIp();
    const ua =
      typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown';
    const { deviceType, browser, os } = parseUserAgent(ua);

    // 1. Thử gọi RPC atomic increment_post_view_music
    try {
      const rpcRes = await fetch(
        `${SUPABASE_URL}/rest/v1/rpc/increment_post_view_music`,
        {
          method: 'POST',
          headers: defaultHeaders,
          body: JSON.stringify({
            p_type: type,
            p_slug: slug,
            p_ip: ip,
            p_ua: ua,
            p_device: deviceType,
            p_browser: browser,
            p_os: os,
          }),
        }
      );

      if (rpcRes.ok) {
        const newViews = await rpcRes.json();
        return typeof newViews === 'number' ? newViews : null;
      }
    } catch {}

    // 2. Fallback REST: Cập nhật views tương ứng theo bảng
    const tableName = `${type}_music`;
    const getRes = await fetch(
      `${SUPABASE_URL}/rest/v1/${tableName}?slug=eq.${encodeURIComponent(
        slug
      )}&select=views`,
      { headers: defaultHeaders }
    );

    if (getRes.ok) {
      const records = await getRes.json();
      if (Array.isArray(records) && records.length > 0) {
        const updatedViews = (Number(records[0].views) || 0) + 1;
        await fetch(
          `${SUPABASE_URL}/rest/v1/${tableName}?slug=eq.${encodeURIComponent(
            slug
          )}`,
          {
            method: 'PATCH',
            headers: defaultHeaders,
            body: JSON.stringify({
              views: updatedViews,
              updated_at: new Date().toISOString(),
            }),
          }
        );

        // Ghi vết IP vào visitor_ips_music & visits_log_music
        recordVisitorEntrance({ page: `/pages/${type}/${slug}` }).catch(
          () => {}
        );
        return updatedViews;
      }
    }
  } catch (err) {
    console.warn(
      `[Supabase Tracker] Notice incrementing views for ${type}/${slug}:`,
      err
    );
  }
  return null;
}

/**
 * =========================================================================
 * 1. QUẢN LÝ BÀI HÁT (LYRICS) - BẢNG lyrics_music
 * =========================================================================
 */
export async function getCurrentSong(): Promise<SongLyricRecord | null> {
  const cacheKey = 'current_song';
  const isServer = typeof window === 'undefined';

  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < DEFAULT_TTL_MS) {
    return cached.data;
  }

  if (!isServer && window.sessionStorage) {
    try {
      const stored = sessionStorage.getItem(`moe_cache_${cacheKey}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && Date.now() - parsed.timestamp < DEFAULT_TTL_MS) {
          memoryCache.set(cacheKey, parsed);
          return parsed.data;
        }
      }
    } catch {}
  }

  try {
    const fetchOptions: any = { headers: defaultHeaders };
    if (isServer) {
      fetchOptions.next = { revalidate: 60 };
    }

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/lyrics_music?is_current=eq.true&is_active=eq.true&limit=1`,
      fetchOptions
    );

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const result = data[0];
        const entry = { data: result, timestamp: Date.now() };
        memoryCache.set(cacheKey, entry);
        if (!isServer && window.sessionStorage) {
          try {
            sessionStorage.setItem(`moe_cache_${cacheKey}`, JSON.stringify(entry));
          } catch {}
        }
        return result;
      }
    }

    const fallbackRes = await fetch(
      `${SUPABASE_URL}/rest/v1/lyrics_music?is_active=eq.true&order=created_at.desc&limit=1`,
      fetchOptions
    );
    if (fallbackRes.ok) {
      const data = await fallbackRes.json();
      if (Array.isArray(data) && data.length > 0) {
        const result = data[0];
        const entry = { data: result, timestamp: Date.now() };
        memoryCache.set(cacheKey, entry);
        return result;
      }
    }
  } catch (err) {
    console.warn('Notice fetching current song from Supabase:', err);
  }

  if (cached) return cached.data;
  return null;
}

export async function setCurrentSong(songId: number): Promise<boolean> {
  clearSupabaseClientCache();
  try {
    try {
      const rpcRes = await fetch(
        `${SUPABASE_URL}/rest/v1/rpc/set_current_song_music`,
        {
          method: 'POST',
          headers: defaultHeaders,
          body: JSON.stringify({ p_song_id: songId }),
        }
      );
      if (rpcRes.ok) return true;
    } catch {}

    await fetch(`${SUPABASE_URL}/rest/v1/lyrics_music?is_current=eq.true`, {
      method: 'PATCH',
      headers: defaultHeaders,
      body: JSON.stringify({ is_current: false }),
    });

    const updateRes = await fetch(
      `${SUPABASE_URL}/rest/v1/lyrics_music?id=eq.${songId}`,
      {
        method: 'PATCH',
        headers: defaultHeaders,
        body: JSON.stringify({
          is_current: true,
          updated_at: new Date().toISOString(),
        }),
      }
    );

    return updateRes.ok;
  } catch (err) {
    console.warn('Notice setting current song:', err);
    return false;
  }
}

export const SONG_LIGHTWEIGHT_SELECT =
  'id,slug,title,artist,composer,producer,year,duration,image_base64,audio_url,spotify_url,spotify_track_id,views,categories,is_current,is_active,created_at,updated_at';

export async function getSongs({
  page = 1,
  limit = 20,
  search = '',
  onlyActive = false,
  full = false,
}: {
  page?: number;
  limit?: number;
  search?: string;
  onlyActive?: boolean;
  full?: boolean;
} = {}): Promise<{
  data: SongLyricRecord[];
  total: number;
  totalPages: number;
  isFallback?: boolean;
}> {
  const isServer = typeof window === 'undefined';
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const cacheKey = `songs_${page}_${limit}_${search}_${onlyActive}_${full}`;
  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < DEFAULT_TTL_MS) {
    return cached.data;
  }

  if (!isServer && window.sessionStorage) {
    try {
      const stored = sessionStorage.getItem(`moe_cache_${cacheKey}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && Date.now() - parsed.timestamp < DEFAULT_TTL_MS) {
          memoryCache.set(cacheKey, parsed);
          return parsed.data;
        }
      }
    } catch {}
  }

  try {
    // Tối ưu tải trang: Mặc định chỉ lấy các cột thông tin nhẹ
    const selectFields = full ? '*' : SONG_LIGHTWEIGHT_SELECT;
    let url = `${SUPABASE_URL}/rest/v1/lyrics_music?select=${selectFields}&order=is_current.desc,created_at.desc`;
    if (onlyActive) url += `&is_active=eq.true`;
    if (search && search.trim()) {
      const q = encodeURIComponent(search.trim());
      url += `&or=(title.ilike.*${q}*,artist.ilike.*${q}*,composer.ilike.*${q}*)`;
    }

    const fetchOptions: any = {
      headers: {
        ...defaultHeaders,
        Range: `${from}-${to}`,
        Prefer: 'count=exact',
      },
    };
    if (isServer) {
      fetchOptions.next = { revalidate: 60 };
    }

    const res = await fetch(url, fetchOptions);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        const contentRange = res.headers.get('content-range');
        const total = contentRange
          ? parseInt(contentRange.split('/')[1], 10) || data.length
          : data.length;
        const totalPages = Math.max(1, Math.ceil(total / limit));
        const result = { data, total, totalPages, isFallback: false };

        const entry = { data: result, timestamp: Date.now() };
        memoryCache.set(cacheKey, entry);
        if (!isServer && window.sessionStorage) {
          try {
            sessionStorage.setItem(`moe_cache_${cacheKey}`, JSON.stringify(entry));
          } catch {}
        }

        return result;
      }
    }
  } catch (err) {
    console.warn('Notice fetching songs from Supabase:', err);
  }

  if (cached) return cached.data;
  return { data: [], total: 0, totalPages: 1, isFallback: false };
}

/**
 * Lấy toàn bộ thông tin chi tiết của 1 bài hát bao gồm Base64, Lyrics, Story (Dùng khi nhấn Chỉnh sửa)
 */
export async function getSongById(id: number): Promise<SongLyricRecord | null> {
  const cacheKey = `song_id_${id}`;
  const isServer = typeof window === 'undefined';
  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < DEFAULT_TTL_MS) {
    return cached.data;
  }

  try {
    const fetchOptions: any = { headers: defaultHeaders };
    if (isServer) {
      fetchOptions.next = { revalidate: 60 };
    }

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/lyrics_music?id=eq.${id}&select=*&limit=1`,
      fetchOptions
    );
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const result = data[0];
        memoryCache.set(cacheKey, { data: result, timestamp: Date.now() });
        return result;
      }
    }
  } catch (err) {
    console.warn('Notice fetching song by id from Supabase:', err);
  }

  if (cached) return cached.data;
  return null;
}

export async function getSongBySlug(slug: string): Promise<SongLyricRecord | null> {
  const cacheKey = `song_slug_${slug}`;
  const isServer = typeof window === 'undefined';
  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < DEFAULT_TTL_MS) {
    return cached.data;
  }

  try {
    const fetchOptions: any = { headers: defaultHeaders };
    if (isServer) {
      fetchOptions.next = { revalidate: 60 };
    }

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/lyrics_music?slug=eq.${encodeURIComponent(slug)}&select=*&limit=1`,
      fetchOptions
    );
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const result = data[0];
        memoryCache.set(cacheKey, { data: result, timestamp: Date.now() });
        return result;
      }
    }
  } catch (err) {
    console.warn('Notice fetching song by slug from Supabase:', err);
  }

  if (cached) return cached.data;
  return null;
}

export async function saveSong(
  song: SongLyricRecord
): Promise<{ success: boolean; data?: SongLyricRecord; error?: string }> {
  clearSupabaseClientCache();
  try {
    const payload = {
      slug: song.slug,
      title: song.title,
      artist: song.artist,
      composer: song.composer || song.artist,
      producer: song.producer || '',
      year: song.year || new Date().getFullYear().toString(),
      duration: song.duration || '03:45',
      desc: song.desc || '',
      image_base64: song.image_base64 || '',
      singer_photo_base64: song.singer_photo_base64 || '',
      audio_url: song.audio_url || song.spotify_url || '',
      spotify_url: song.spotify_url || song.audio_url || '',
      spotify_track_id: song.spotify_track_id || '',
      vibe: song.vibe || '',
      genre: song.genre || '',
      mood: song.mood || '',
      story: song.story || '',
      instruments: song.instruments || [],
      lyrics: song.lyrics || [],
      categories: song.categories || [],
      views: song.views || 0,
      is_current: song.is_current || false,
      is_active: song.is_active !== undefined ? song.is_active : true,
      updated_at: new Date().toISOString(),
    };

    if (song.id && typeof song.id === 'number' && song.id > 0) {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/lyrics_music?id=eq.${song.id}`,
        {
          method: 'PATCH',
          headers: { ...defaultHeaders, Prefer: 'return=representation' },
          body: JSON.stringify(payload),
        }
      );
      if (res.ok) {
        const data = await res.json();
        return { success: true, data: Array.isArray(data) ? data[0] : data };
      }
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/lyrics_music`, {
      method: 'POST',
      headers: {
        ...defaultHeaders,
        Prefer: 'resolution=merge-duplicates,return=representation',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      return { success: true, data: Array.isArray(data) ? data[0] : data };
    }

    const errorMsg = await res.text();
    return {
      success: false,
      error: errorMsg || 'Không thể lưu bài hát vào Supabase.',
    };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Lỗi khi lưu bài hát' };
  }
}

export async function deleteSong(id: number): Promise<boolean> {
  clearSupabaseClientCache();
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/lyrics_music?id=eq.${id}`,
      {
        method: 'DELETE',
        headers: defaultHeaders,
      }
    );
    return res.ok;
  } catch (err) {
    console.warn('Notice deleting song:', err);
    return false;
  }
}

export async function seedSampleSongsToSupabase(
  sampleSongs: LyricPost[]
): Promise<{ added: number; errors: number }> {
  clearSupabaseClientCache();
  let added = 0;
  let errors = 0;
  for (const song of sampleSongs) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/lyrics_music`, {
        method: 'POST',
        headers: { ...defaultHeaders, Prefer: 'resolution=ignore-duplicates' },
        body: JSON.stringify({
          slug: song.slug,
          title: song.title,
          artist: song.artist,
          composer: song.composer || '',
          producer: song.producer || '',
          year: song.year || '2024',
          duration: song.duration || '',
          desc: song.desc || '',
          image_base64: extractImageSrc(song.image),
          singer_photo_base64: extractImageSrc(song.singerPhoto),
          audio_url: song.audio || '',
          spotify_url: song.spotifyUrl || (song.spotifyTrackId ? `https://open.spotify.com/track/${song.spotifyTrackId}` : ''),
          spotify_track_id: song.spotifyTrackId || '',
          vibe: song.vibe || '',
          story: song.story || '',
          genre: song.genre || '',
          mood: song.mood || '',
          lyrics: song.lyrics || [],
          categories: song.categories || [],
          views: song.views || 0,
          is_current: song.id === 1,
          is_active: true,
        }),
      });
      if (res.ok) added++;
      else errors++;
    } catch {
      errors++;
    }
  }
  return { added, errors };
}

/**
 * =========================================================================
 * 2. QUẢN LÝ PLAYLISTS - BẢNG playlists_music
 * =========================================================================
 */
export const PLAYLIST_LIGHTWEIGHT_SELECT =
  'id,slug,title,desc,description,keywords,categories,image,banner,mood,final,views,date,created_at,updated_at';

export async function getPlaylists({
  page = 1,
  limit = 20,
  search = '',
  onlyActive = false,
  full = false,
}: {
  page?: number;
  limit?: number;
  search?: string;
  onlyActive?: boolean;
  full?: boolean;
} = {}): Promise<{
  data: PlaylistRecord[];
  total: number;
  totalPages: number;
  isFallback?: boolean;
}> {
  const isServer = typeof window === 'undefined';
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const cacheKey = `playlists_${page}_${limit}_${search}_${onlyActive}_${full}`;
  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < DEFAULT_TTL_MS) {
    return cached.data;
  }

  if (!isServer && window.sessionStorage) {
    try {
      const stored = sessionStorage.getItem(`moe_cache_${cacheKey}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && Date.now() - parsed.timestamp < DEFAULT_TTL_MS) {
          memoryCache.set(cacheKey, parsed);
          return parsed.data;
        }
      }
    } catch {}
  }

  try {
    const selectFields = full ? '*' : PLAYLIST_LIGHTWEIGHT_SELECT;
    let url = `${SUPABASE_URL}/rest/v1/playlists_music?select=${selectFields}&order=created_at.desc`;
    if (search && search.trim()) {
      const q = encodeURIComponent(search.trim());
      url += `&or=(title.ilike.*${q}*,desc.ilike.*${q}*)`;
    }

    const fetchOptions: any = {
      headers: {
        ...defaultHeaders,
        Range: `${from}-${to}`,
        Prefer: 'count=exact',
      },
    };
    if (isServer) {
      fetchOptions.next = { revalidate: 60 };
    }

    const res = await fetch(url, fetchOptions);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const contentRange = res.headers.get('content-range');
        const total = contentRange
          ? parseInt(contentRange.split('/')[1], 10) || data.length
          : data.length;
        const totalPages = Math.max(1, Math.ceil(total / limit));
        const result = { data, total, totalPages, isFallback: false };

        const entry = { data: result, timestamp: Date.now() };
        memoryCache.set(cacheKey, entry);
        if (!isServer && window.sessionStorage) {
          try {
            sessionStorage.setItem(`moe_cache_${cacheKey}`, JSON.stringify(entry));
          } catch {}
        }

        return result;
      }
    }
  } catch (err) {
    console.warn('Notice fetching playlists from Supabase:', err);
  }

  if (cached) return cached.data;
  return { data: [], total: 0, totalPages: 1, isFallback: false };
}

export async function getPlaylistById(id: number): Promise<PlaylistRecord | null> {
  const cacheKey = `playlist_id_${id}`;
  const isServer = typeof window === 'undefined';
  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < DEFAULT_TTL_MS) {
    return cached.data;
  }

  try {
    const fetchOptions: any = { headers: defaultHeaders };
    if (isServer) {
      fetchOptions.next = { revalidate: 60 };
    }

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/playlists_music?id=eq.${id}&select=*&limit=1`,
      fetchOptions
    );
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const result = data[0];
        memoryCache.set(cacheKey, { data: result, timestamp: Date.now() });
        return result;
      }
    }
  } catch (err) {
    console.warn('Notice fetching playlist by id from Supabase:', err);
  }

  if (cached) return cached.data;
  return null;
}

export async function getPlaylistBySlug(slug: string): Promise<PlaylistRecord | null> {
  const cacheKey = `playlist_slug_${slug}`;
  const isServer = typeof window === 'undefined';
  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < DEFAULT_TTL_MS) {
    return cached.data;
  }

  try {
    const fetchOptions: any = { headers: defaultHeaders };
    if (isServer) {
      fetchOptions.next = { revalidate: 60 };
    }

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/playlists_music?slug=eq.${encodeURIComponent(slug)}&limit=1`,
      fetchOptions
    );
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const result = data[0];
        memoryCache.set(cacheKey, { data: result, timestamp: Date.now() });
        return result;
      }
    }
  } catch (err) {
    console.warn('Notice fetching playlist by slug from Supabase:', err);
  }

  if (cached) return cached.data;
  return null;
}

export async function savePlaylist(
  playlist: PlaylistRecord
): Promise<{ success: boolean; data?: PlaylistRecord; error?: string }> {
  clearSupabaseClientCache();
  try {
    const payload = {
      slug: playlist.slug,
      title: playlist.title,
      desc: playlist.desc || '',
      description: playlist.description || playlist.desc || '',
      keywords: playlist.keywords || [],
      categories: playlist.categories || [],
      image: playlist.image || '',
      banner: playlist.banner || playlist.image || '',
      songs: playlist.songs || [],
      mood: playlist.mood || '',
      final: playlist.final || '',
      views: playlist.views || 0,
      date: playlist.date || new Date().toISOString().slice(0, 10),
      updated_at: new Date().toISOString(),
    };

    if (playlist.id && typeof playlist.id === 'number' && playlist.id > 0) {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/playlists_music?id=eq.${playlist.id}`,
        {
          method: 'PATCH',
          headers: { ...defaultHeaders, Prefer: 'return=representation' },
          body: JSON.stringify(payload),
        }
      );
      if (res.ok) {
        const data = await res.json();
        return { success: true, data: Array.isArray(data) ? data[0] : data };
      }
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/playlists_music`, {
      method: 'POST',
      headers: {
        ...defaultHeaders,
        Prefer: 'resolution=merge-duplicates,return=representation',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      return { success: true, data: Array.isArray(data) ? data[0] : data };
    }

    const errorMsg = await res.text();
    return {
      success: false,
      error: errorMsg || 'Không thể lưu playlist vào Supabase.',
    };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Lỗi khi lưu playlist' };
  }
}

export async function deletePlaylist(id: number): Promise<boolean> {
  clearSupabaseClientCache();
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/playlists_music?id=eq.${id}`,
      {
        method: 'DELETE',
        headers: defaultHeaders,
      }
    );
    return res.ok;
  } catch (err) {
    console.warn('Notice deleting playlist:', err);
    return false;
  }
}

/**
 * =========================================================================
 * 3. QUẢN LÝ BLOGS - BẢNG blogs_music
 * =========================================================================
 */
export const BLOG_LIGHTWEIGHT_SELECT =
  'id,slug,title,desc,keywords,categories,image,user_comment_avatar,user_name_comment,user_role_comment,comment,views,date,created_at,updated_at';

export async function getBlogs({
  page = 1,
  limit = 20,
  search = '',
  onlyActive = false,
  full = false,
}: {
  page?: number;
  limit?: number;
  search?: string;
  onlyActive?: boolean;
  full?: boolean;
} = {}): Promise<{
  data: BlogRecord[];
  total: number;
  totalPages: number;
  isFallback?: boolean;
}> {
  const isServer = typeof window === 'undefined';
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const cacheKey = `blogs_${page}_${limit}_${search}_${onlyActive}_${full}`;
  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < DEFAULT_TTL_MS) {
    return cached.data;
  }

  if (!isServer && window.sessionStorage) {
    try {
      const stored = sessionStorage.getItem(`moe_cache_${cacheKey}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && Date.now() - parsed.timestamp < DEFAULT_TTL_MS) {
          memoryCache.set(cacheKey, parsed);
          return parsed.data;
        }
      }
    } catch {}
  }

  try {
    const selectFields = full ? '*' : BLOG_LIGHTWEIGHT_SELECT;
    let url = `${SUPABASE_URL}/rest/v1/blogs_music?select=${selectFields}&order=created_at.desc`;
    if (search && search.trim()) {
      const q = encodeURIComponent(search.trim());
      url += `&or=(title.ilike.*${q}*,desc.ilike.*${q}*)`;
    }

    const fetchOptions: any = {
      headers: {
        ...defaultHeaders,
        Range: `${from}-${to}`,
        Prefer: 'count=exact',
      },
    };
    if (isServer) {
      fetchOptions.next = { revalidate: 60 };
    }

    const res = await fetch(url, fetchOptions);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const contentRange = res.headers.get('content-range');
        const total = contentRange
          ? parseInt(contentRange.split('/')[1], 10) || data.length
          : data.length;
        const totalPages = Math.max(1, Math.ceil(total / limit));
        const result = { data, total, totalPages, isFallback: false };

        const entry = { data: result, timestamp: Date.now() };
        memoryCache.set(cacheKey, entry);
        if (!isServer && window.sessionStorage) {
          try {
            sessionStorage.setItem(`moe_cache_${cacheKey}`, JSON.stringify(entry));
          } catch {}
        }

        return result;
      }
    }
  } catch (err) {
    console.warn('Notice fetching blogs from Supabase:', err);
  }

  if (cached) return cached.data;
  return { data: [], total: 0, totalPages: 1, isFallback: false };
}

export async function getBlogById(id: number): Promise<BlogRecord | null> {
  const cacheKey = `blog_id_${id}`;
  const isServer = typeof window === 'undefined';
  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < DEFAULT_TTL_MS) {
    return cached.data;
  }

  try {
    const fetchOptions: any = { headers: defaultHeaders };
    if (isServer) {
      fetchOptions.next = { revalidate: 60 };
    }

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blogs_music?id=eq.${id}&select=*&limit=1`,
      fetchOptions
    );
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const result = data[0];
        memoryCache.set(cacheKey, { data: result, timestamp: Date.now() });
        return result;
      }
    }
  } catch (err) {
    console.warn('Notice fetching blog by id from Supabase:', err);
  }

  if (cached) return cached.data;
  return null;
}

export async function getBlogBySlug(slug: string): Promise<BlogRecord | null> {
  const cacheKey = `blog_slug_${slug}`;
  const isServer = typeof window === 'undefined';
  const cached = memoryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < DEFAULT_TTL_MS) {
    return cached.data;
  }

  try {
    const fetchOptions: any = { headers: defaultHeaders };
    if (isServer) {
      fetchOptions.next = { revalidate: 60 };
    }

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blogs_music?slug=eq.${encodeURIComponent(slug)}&limit=1`,
      fetchOptions
    );
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const result = data[0];
        memoryCache.set(cacheKey, { data: result, timestamp: Date.now() });
        return result;
      }
    }
  } catch (err) {
    console.warn('Notice fetching blog by slug from Supabase:', err);
  }

  if (cached) return cached.data;
  return null;
}

export async function saveBlog(
  blog: BlogRecord
): Promise<{ success: boolean; data?: BlogRecord; error?: string }> {
  clearSupabaseClientCache();
  try {
    const payload = {
      slug: blog.slug,
      title: blog.title,
      desc: blog.desc || '',
      keywords: blog.keywords || [],
      categories: blog.categories || [],
      image: blog.image || '',
      paragraphs: blog.paragraphs || [],
      user_comment_avatar: blog.user_comment_avatar || '',
      user_name_comment: blog.user_name_comment || 'Anonymous',
      user_role_comment: blog.user_role_comment || 'Admin',
      comment: blog.comment || '',
      views: blog.views || 0,
      date: blog.date || new Date().toISOString().slice(0, 10),
      updated_at: new Date().toISOString(),
    };

    if (blog.id && typeof blog.id === 'number' && blog.id > 0) {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/blogs_music?id=eq.${blog.id}`,
        {
          method: 'PATCH',
          headers: { ...defaultHeaders, Prefer: 'return=representation' },
          body: JSON.stringify(payload),
        }
      );
      if (res.ok) {
        const data = await res.json();
        return { success: true, data: Array.isArray(data) ? data[0] : data };
      }
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/blogs_music`, {
      method: 'POST',
      headers: {
        ...defaultHeaders,
        Prefer: 'resolution=merge-duplicates,return=representation',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      return { success: true, data: Array.isArray(data) ? data[0] : data };
    }

    const errorMsg = await res.text();
    return {
      success: false,
      error: errorMsg || 'Không thể lưu blog vào Supabase.',
    };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message || 'Lỗi khi lưu bài viết blog',
    };
  }
}

export async function deleteBlog(id: number): Promise<boolean> {
  clearSupabaseClientCache();
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blogs_music?id=eq.${id}`,
      {
        method: 'DELETE',
        headers: defaultHeaders,
      }
    );
    return res.ok;
  } catch (err) {
    console.warn('Notice deleting blog:', err);
    return false;
  }
}

/**
 * =========================================================================
 * 4. ĐỒNG BỘ TOÀN BỘ NỘI DUNG LÊN SUPABASE (Lyrics, Playlists, Blogs)
 * =========================================================================
 */
export async function seedAllContentToSupabase({
  lyrics,
  playlists,
  blogs,
}: {
  lyrics: LyricPost[];
  playlists: PlaylistPost[];
  blogs: BlogsPost[];
}): Promise<{
  lyricsAdded: number;
  playlistsAdded: number;
  blogsAdded: number;
  errors: number;
}> {
  let lyricsAdded = 0;
  let playlistsAdded = 0;
  let blogsAdded = 0;
  let errors = 0;

  // 1. Đồng bộ Lyrics (100% Spotify & 1/4 Excerpt Fair-Use)
  for (const item of lyrics) {
    try {
      const safeLyrics = getCopyrightSafeLyricsExcerpt(item.lyrics || []);
      const spotifyInfo = getSpotifyInfo(item);
      const vibeProfile = getSongVibeProfile(item);

      const res = await fetch(`${SUPABASE_URL}/rest/v1/lyrics_music`, {
        method: 'POST',
        headers: { ...defaultHeaders, Prefer: 'resolution=merge-duplicates' },
        body: JSON.stringify({
          slug: item.slug,
          title: item.title,
          artist: item.artist,
          composer: item.composer || item.artist,
          producer: item.producer || '',
          year: item.year || '2024',
          duration: item.duration || '03:45',
          desc: item.desc || '',
          image_base64: extractImageSrc(item.image),
          singer_photo_base64: extractImageSrc(item.singerPhoto),
          audio_url: spotifyInfo.searchUrl,
          spotify_url: item.spotifyUrl || spotifyInfo.searchUrl,
          spotify_track_id: item.spotifyTrackId || '',
          vibe: item.vibe || vibeProfile.vibeTags.join(', '),
          genre: item.genre || vibeProfile.genre,
          mood: item.mood || vibeProfile.mood,
          story: item.story || vibeProfile.story,
          instruments: item.instruments || vibeProfile.instruments,
          lyrics: safeLyrics.excerpt.length > 0 ? safeLyrics.excerpt : item.lyrics || [],
          categories: item.categories || [],
          views: item.views || 0,
          is_current: item.id === 1,
          is_active: true,
        }),
      });
      if (res.ok) lyricsAdded++;
      else errors++;
    } catch {
      errors++;
    }
  }

  // 2. Đồng bộ Playlists
  for (const item of playlists) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/playlists_music`, {
        method: 'POST',
        headers: { ...defaultHeaders, Prefer: 'resolution=merge-duplicates' },
        body: JSON.stringify({
          slug: item.slug,
          title: item.title,
          desc: item.desc || '',
          description: item.description || item.desc || '',
          keywords: item.keywords || [],
          categories: item.categories || [],
          image: extractImageSrc(item.image),
          banner: extractImageSrc(item.banner || item.image),
          songs: item.songs || [],
          mood: item.mood || '',
          final: item.final || '',
          views: item.views || 0,
          date: item.date || '2025-01-01',
        }),
      });
      if (res.ok) playlistsAdded++;
      else errors++;
    } catch {
      errors++;
    }
  }

  // 3. Đồng bộ Blogs
  for (const item of blogs) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/blogs_music`, {
        method: 'POST',
        headers: { ...defaultHeaders, Prefer: 'resolution=merge-duplicates' },
        body: JSON.stringify({
          slug: item.slug,
          title: item.title,
          desc: item.desc || '',
          keywords: item.keywords || [],
          categories: item.categories || [],
          image: extractImageSrc(item.image),
          paragraphs: item.paragraphs || [],
          user_comment_avatar: extractImageSrc(item.userCommentAvatar),
          user_name_comment: item.userNameComment || 'Anonymous',
          user_role_comment: item.userRoleComment || 'Admin',
          comment: item.comment || '',
          views: item.views || 0,
          date: item.date || '2025-01-01',
        }),
      });
      if (res.ok) blogsAdded++;
      else errors++;
    } catch {
      errors++;
    }
  }

  return { lyricsAdded, playlistsAdded, blogsAdded, errors };
}

/**
 * =========================================================================
 * 5. QUẢN LÝ IP & THỐNG KÊ (visitor_ips_music, visits_log_music)
 * =========================================================================
 */
export async function getVisitorIps({
  page = 1,
  limit = 20,
  search = '',
  sortBy = 'last_visited',
}: {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: 'last_visited' | 'most_visited' | 'first_visited';
} = {}): Promise<{
  data: VisitorIpRecord[];
  total: number;
  totalPages: number;
}> {
  try {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let order = 'last_visited_at.desc';
    if (sortBy === 'most_visited')
      order = 'visit_count.desc,last_visited_at.desc';
    else if (sortBy === 'first_visited') order = 'first_visited_at.desc';

    let url = `${SUPABASE_URL}/rest/v1/visitor_ips_music?select=*&order=${order}`;
    if (search && search.trim()) {
      const q = encodeURIComponent(search.trim());
      url += `&or=(ip_address.ilike.*${q}*,browser.ilike.*${q}*,os.ilike.*${q}*)`;
    }

    const res = await fetch(url, {
      headers: {
        ...defaultHeaders,
        Range: `${from}-${to}`,
        Prefer: 'count=exact',
      },
    });

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        const contentRange = res.headers.get('content-range');
        const total = contentRange
          ? parseInt(contentRange.split('/')[1], 10) || data.length
          : data.length;
        const totalPages = Math.max(1, Math.ceil(total / limit));
        return { data, total, totalPages };
      }
    }
  } catch (err) {
    console.warn('Notice fetching visitor IPs:', err);
  }
  return { data: [], total: 0, totalPages: 1 };
}

export async function deleteVisitorIp(ip: string): Promise<boolean> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/visitor_ips_music?ip_address=eq.${encodeURIComponent(
        ip
      )}`,
      {
        method: 'DELETE',
        headers: defaultHeaders,
      }
    );
    return res.ok;
  } catch (err) {
    console.warn('Notice deleting visitor IP:', err);
    return false;
  }
}

export async function getAdminDashboardStats(): Promise<AnalyticsStats> {
  try {
    // 1. Thống kê bài hát (Lyrics)
    let totalLyrics = 0;
    try {
      const lyricsRes = await fetch(
        `${SUPABASE_URL}/rest/v1/lyrics_music?select=id,views`,
        {
          headers: { ...defaultHeaders, Range: '0-0', Prefer: 'count=exact' },
        }
      );
      if (lyricsRes.ok) {
        const count = parseInt(
          lyricsRes.headers.get('content-range')?.split('/')[1] || '0',
          10
        );
        if (count > 0) totalLyrics = count;
      }
    } catch {}

    // 2. Thống kê Playlists
    let totalPlaylists = 0;
    try {
      const playlistsRes = await fetch(
        `${SUPABASE_URL}/rest/v1/playlists_music?select=id,views`,
        {
          headers: { ...defaultHeaders, Range: '0-0', Prefer: 'count=exact' },
        }
      );
      if (playlistsRes.ok) {
        const count = parseInt(
          playlistsRes.headers.get('content-range')?.split('/')[1] || '0',
          10
        );
        if (count > 0) totalPlaylists = count;
      }
    } catch {}

    // 3. Thống kê Blogs
    let totalBlogs = 0;
    try {
      const blogsRes = await fetch(
        `${SUPABASE_URL}/rest/v1/blogs_music?select=id,views`,
        {
          headers: { ...defaultHeaders, Range: '0-0', Prefer: 'count=exact' },
        }
      );
      if (blogsRes.ok) {
        const count = parseInt(
          blogsRes.headers.get('content-range')?.split('/')[1] || '0',
          10
        );
        if (count > 0) totalBlogs = count;
      }
    } catch {}

    // Bài hát hiện tại
    const currentSong = await getCurrentSong();

    // 4. Thống kê IP khách truy cập từ visitor_ips_music
    let ipsData: VisitorIpRecord[] = [];
    try {
      const ipsRes = await fetch(
        `${SUPABASE_URL}/rest/v1/visitor_ips_music?select=*&order=visit_count.desc&limit=100`,
        { headers: { ...defaultHeaders, Prefer: 'count=exact' } }
      );
      if (ipsRes.ok) {
        const resJson = await ipsRes.json();
        if (Array.isArray(resJson)) ipsData = resJson;
      }
    } catch {}

    const uniqueIps = ipsData.length;
    const totalHits = ipsData.reduce(
      (acc, curr) => acc + (Number(curr.visit_count) || 1),
      0
    );

    // 5. Nhật ký truy cập gần đây
    let logsData: VisitLogRecord[] = [];
    try {
      const logsRes = await fetch(
        `${SUPABASE_URL}/rest/v1/visits_log_music?select=*&order=visited_at.desc&limit=1000`,
        { headers: defaultHeaders }
      );
      if (logsRes.ok) {
        const resJson = await logsRes.json();
        if (Array.isArray(resJson)) logsData = resJson;
      }
    } catch {}

    const todayStr = new Date().toISOString().slice(0, 10);
    const todayVisits = logsData.filter((l) =>
      l.visited_at?.startsWith(todayStr)
    ).length;

    // Biểu đồ 7 ngày
    const dailyMap: Record<string, { hits: number; ips: Set<string> }> = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateKey = d.toISOString().slice(5, 10);
      dailyMap[dateKey] = { hits: 0, ips: new Set() };
    }

    logsData.forEach((log) => {
      const dateKey = log.visited_at ? log.visited_at.slice(5, 10) : '';
      if (dailyMap[dateKey]) {
        dailyMap[dateKey].hits += 1;
        if (log.ip_address) dailyMap[dateKey].ips.add(log.ip_address);
      }
    });

    const dailyTraffic = Object.entries(dailyMap).map(([date, val]) => ({
      date,
      hits: val.hits,
      uniqueIps: val.ips.size,
    }));

    // Phân bổ thiết bị
    const deviceBreakdown = { desktop: 0, mobile: 0, tablet: 0 };
    const browserBreakdown: Record<string, number> = {};

    const sourceData = logsData.length > 0 ? logsData : ipsData;
    sourceData.forEach((item: any) => {
      const dev = (item.device_type || 'desktop').toLowerCase();
      if (dev.includes('mobile')) deviceBreakdown.mobile += 1;
      else if (dev.includes('tablet')) deviceBreakdown.tablet += 1;
      else deviceBreakdown.desktop += 1;

      const br = item.browser || 'Chrome';
      browserBreakdown[br] = (browserBreakdown[br] || 0) + 1;
    });

    return {
      totalHits: Math.max(totalHits, logsData.length),
      uniqueIps,
      todayVisits: todayVisits || Math.min(uniqueIps, 1),
      totalLyrics,
      totalPlaylists,
      totalBlogs,
      totalContentViews: totalHits,
      currentSong,
      dailyTraffic,
      deviceBreakdown,
      browserBreakdown,
      topIps: ipsData.slice(0, 10),
    };
  } catch (err) {
    console.warn('Notice building admin dashboard stats:', err);
    return {
      totalHits: 0,
      uniqueIps: 0,
      todayVisits: 0,
      totalLyrics: 0,
      totalPlaylists: 0,
      totalBlogs: 0,
      totalContentViews: 0,
      currentSong: null,
      dailyTraffic: [],
      deviceBreakdown: { desktop: 0, mobile: 0, tablet: 0 },
      browserBreakdown: {},
      topIps: [],
    };
  }
}
