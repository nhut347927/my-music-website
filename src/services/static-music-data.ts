import lyricsJson from '@/data/lyrics.json';
import playlistsJson from '@/data/playlists.json';
import blogsJson from '@/data/blogs.json';
import { LyricPost, PlaylistPost, BlogsPost } from '@/app/types/type';
import type {
  SongLyricRecord,
  PlaylistRecord,
  BlogRecord,
} from '@/services/music-supabase-service';

export const SITE_BASE_URL = 'https://moe.io.vn';
const DEFAULT_FALLBACK_IMAGE = `${SITE_BASE_URL}/logo.png`;

const allSongsRaw = lyricsJson as SongLyricRecord[];
const allPlaylistsRaw = playlistsJson as PlaylistRecord[];
const allBlogsRaw = blogsJson as BlogRecord[];

function sortByCreatedAtDesc<T extends { created_at?: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const ta = a.created_at ? new Date(a.created_at).getTime() : 0;
    const tb = b.created_at ? new Date(b.created_at).getTime() : 0;
    return tb - ta;
  });
}

const sortedSongs = [...allSongsRaw].sort((a, b) => {
  const curDiff = Number(Boolean(b.is_current)) - Number(Boolean(a.is_current));
  if (curDiff !== 0) return curDiff;
  const ta = a.created_at ? new Date(a.created_at).getTime() : 0;
  const tb = b.created_at ? new Date(b.created_at).getTime() : 0;
  return tb - ta;
});

const sortedPlaylists = sortByCreatedAtDesc(allPlaylistsRaw);
const sortedBlogs = sortByCreatedAtDesc(allBlogsRaw);

/**
 * Chuẩn hóa URL ảnh sang dạng tuyệt đối để phục vụ OpenGraph / Twitter / JSON-LD.
 * Tránh đưa chuỗi data:image Base64 vào metadata SEO.
 */
export function toAbsoluteSiteUrl(pathOrUrl?: string): string {
  if (!pathOrUrl || typeof pathOrUrl !== 'string') return DEFAULT_FALLBACK_IMAGE;
  const trimmed = pathOrUrl.trim();
  if (!trimmed || trimmed.startsWith('data:')) return DEFAULT_FALLBACK_IMAGE;
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
  return trimmed.startsWith('/')
    ? `${SITE_BASE_URL}${trimmed}`
    : `${SITE_BASE_URL}/${trimmed}`;
}

export function recordToLyricPost(record: SongLyricRecord): LyricPost {
  return {
    id: record.id || 0,
    type: 'lyrics',
    slug: record.slug,
    title: record.title || '',
    artist: record.artist || '',
    composer: record.composer || record.artist || '',
    producer: record.producer || '',
    year: record.year || '2024',
    duration: record.duration || '03:45',
    desc: record.desc || '',
    keywords: [],
    categories: record.categories && record.categories.length > 0 ? record.categories : [],
    image: record.image_base64 || '',
    singerPhoto: record.singer_photo_base64 || '',
    audio: record.audio_url || record.spotify_url || '',
    spotifyUrl: record.spotify_url,
    spotifyTrackId: record.spotify_track_id,
    vibe: record.vibe,
    genre: record.genre,
    mood: record.mood,
    story: record.story,
    instruments: record.instruments,
    lyrics: record.lyrics && record.lyrics.length > 0 ? record.lyrics : [],
    views: record.views || 0,
    date: record.created_at || '2025-01-01',
    otherSongs: [],
    userNameComment: 'Admin',
    userRoleComment: 'Music Editor',
    comment: '',
  };
}

export function recordToLyricCard(record: SongLyricRecord): LyricPost {
  return {
    ...recordToLyricPost(record),
    story: '',
    lyrics: [],
  };
}

export function recordToPlaylistPost(record: PlaylistRecord): PlaylistPost {
  return {
    id: record.id || 0,
    type: 'playlists',
    slug: record.slug,
    title: record.title,
    desc: record.desc || record.description || '',
    description: record.description || record.desc || '',
    keywords: record.keywords || [],
    categories: record.categories || [],
    image: record.image || '',
    banner: record.banner || record.image || '',
    songs: record.songs || [],
    mood: record.mood || '',
    final: record.final || '',
    views: record.views || 0,
    date: record.date || record.created_at || '2025-01-01',
  };
}

export function recordToBlogPost(record: BlogRecord): BlogsPost {
  return {
    id: record.id || 0,
    type: 'blogs',
    slug: record.slug,
    title: record.title,
    desc: record.desc || '',
    keywords: record.keywords || [],
    categories: record.categories || [],
    image: record.image || '',
    paragraphs: (record.paragraphs as any) || [],
    userCommentAvatar: record.user_comment_avatar || '',
    userNameComment: record.user_name_comment || 'Admin',
    userRoleComment: record.user_role_comment || 'Music Editor',
    comment: record.comment || '',
    views: record.views || 0,
    date: record.date || record.created_at || '2025-01-01',
  };
}

export function recordToBlogCard(record: BlogRecord): BlogsPost {
  return {
    ...recordToBlogPost(record),
    paragraphs: [],
  };
}

export function getStaticCurrentSong(): SongLyricRecord | null {
  const activeSongs = sortedSongs.filter((s) => s.is_active !== false);
  return activeSongs.find((s) => s.is_current) || activeSongs[0] || null;
}

export function getStaticSongs({
  page = 1,
  limit = 20,
  search = '',
  onlyActive = false,
}: {
  page?: number;
  limit?: number;
  search?: string;
  onlyActive?: boolean;
} = {}): {
  data: SongLyricRecord[];
  total: number;
  totalPages: number;
} {
  let list = onlyActive
    ? sortedSongs.filter((s) => s.is_active !== false)
    : sortedSongs;

  if (search && search.trim()) {
    const q = search.trim().toLowerCase();
    list = list.filter(
      (s) =>
        s.title?.toLowerCase().includes(q) ||
        s.artist?.toLowerCase().includes(q) ||
        s.composer?.toLowerCase().includes(q)
    );
  }

  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const from = Math.max(0, (page - 1) * limit);
  return {
    data: list.slice(from, from + limit),
    total,
    totalPages,
  };
}

export function getStaticSongBySlug(slug: string): SongLyricRecord | null {
  return sortedSongs.find((s) => s.slug === slug) || null;
}

export function getStaticPlaylists({
  page = 1,
  limit = 20,
  search = '',
}: {
  page?: number;
  limit?: number;
  search?: string;
} = {}): {
  data: PlaylistRecord[];
  total: number;
  totalPages: number;
} {
  let list = sortedPlaylists;

  if (search && search.trim()) {
    const q = search.trim().toLowerCase();
    list = list.filter(
      (p) =>
        p.title?.toLowerCase().includes(q) ||
        p.desc?.toLowerCase().includes(q)
    );
  }

  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const from = Math.max(0, (page - 1) * limit);
  return {
    data: list.slice(from, from + limit),
    total,
    totalPages,
  };
}

export function getStaticPlaylistBySlug(slug: string): PlaylistRecord | null {
  return sortedPlaylists.find((p) => p.slug === slug) || null;
}

export function getStaticBlogs({
  page = 1,
  limit = 20,
  search = '',
}: {
  page?: number;
  limit?: number;
  search?: string;
} = {}): {
  data: BlogRecord[];
  total: number;
  totalPages: number;
} {
  let list = sortedBlogs;

  if (search && search.trim()) {
    const q = search.trim().toLowerCase();
    list = list.filter(
      (b) =>
        b.title?.toLowerCase().includes(q) ||
        b.desc?.toLowerCase().includes(q)
    );
  }

  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const from = Math.max(0, (page - 1) * limit);
  return {
    data: list.slice(from, from + limit),
    total,
    totalPages,
  };
}

export function getStaticBlogBySlug(slug: string): BlogRecord | null {
  return sortedBlogs.find((b) => b.slug === slug) || null;
}
