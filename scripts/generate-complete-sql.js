const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const fileToBase64 = (filePath) => {
  if (!filePath || !fs.existsSync(filePath)) return '';
  const ext = path.extname(filePath).toLowerCase();
  let mime = 'image/jpeg';
  if (ext === '.png') mime = 'image/png';
  else if (ext === '.webp') mime = 'image/webp';
  else if (ext === '.svg') mime = 'image/svg+xml';
  const buffer = fs.readFileSync(filePath);
  return `data:${mime};base64,${buffer.toString('base64')}`;
};

const mockAsset = (module, filename) => {
  const b64 = fileToBase64(filename);
  module.exports = { src: b64, default: { src: b64 } };
};

['.jpg', '.jpeg', '.png', '.webp', '.svg'].forEach((ext) => {
  require.extensions[ext] = mockAsset;
});

['.mp3', '.MP3'].forEach((ext) => {
  require.extensions[ext] = (module) => {
    module.exports = '';
  };
});

// Custom resolver for @/ -> src/
const Module = require('module');
const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, isMain, options) {
  if (request.startsWith('@/')) {
    const resolvedPath = path.resolve(__dirname, '../src', request.slice(2));
    if (fs.existsSync(resolvedPath)) return resolvedPath;
    if (fs.existsSync(resolvedPath + '.ts')) return resolvedPath + '.ts';
    if (fs.existsSync(resolvedPath + '.tsx')) return resolvedPath + '.tsx';
    if (fs.existsSync(path.join(resolvedPath, 'index.ts'))) return path.join(resolvedPath, 'index.ts');
  }
  return originalResolveFilename.call(this, request, parent, isMain, options);
};

// Require hook for typescript
require.extensions['.ts'] = (module, filename) => {
  const content = fs.readFileSync(filename, 'utf8');
  const compiled = ts.transpileModule(content, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  });
  module._compile(compiled.outputText, filename);
};

require.extensions['.tsx'] = require.extensions['.ts'];

// Import the data and helper functions
const { lyricsData } = require('../src/app/data/lyrics-data.ts');
const { playlistsData } = require('../src/app/data/playlists-data.ts');
const { blogData } = require('../src/app/data/blog-data.ts');
const {
  getCopyrightSafeLyricsExcerpt,
  getSpotifyInfo,
  getSongVibeProfile,
} = require('../src/lib/song-vibe-helper.ts');

function escapeSql(str) {
  if (str === null || str === undefined) return "''";
  return "'" + String(str).replace(/'/g, "''") + "'";
}

function escapeJson(obj) {
  if (!obj) return "'[]'::jsonb";
  return "'" + JSON.stringify(obj).replace(/'/g, "''") + "'::jsonb";
}

function getAssetPath(img) {
  if (!img) return '';
  if (typeof img === 'string') return img.replace(/\\/g, '/');
  if (typeof img === 'object' && img.src) return img.src.replace(/\\/g, '/');
  return '';
}

console.log(`Read ${lyricsData.length} lyrics, ${playlistsData.length} playlists, ${blogData.length} blogs.`);

let sql = `-- =====================================================================
-- MOE MUSIC WEBSITE - FULL SUPABASE DATABASE SETUP & COMPLETE DATA SEED
-- Tables: lyrics_music, playlists_music, blogs_music, visitor_ips_music, visits_log_music
-- All tables use the common suffix '_music' to avoid conflict with other projects
-- Audio: 100% Spotify Search & Stream links
-- Lyrics: 1/4 Fair-Use Copyright Compliant Excerpts
-- =====================================================================

-- 1. BẢNG BÀI HÁT & LỜI BÀI HÁT (lyrics_music)
CREATE TABLE IF NOT EXISTS public.lyrics_music (
    id BIGSERIAL PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    composer TEXT DEFAULT '',
    producer TEXT DEFAULT '',
    year TEXT DEFAULT '',
    duration TEXT DEFAULT '',
    "desc" TEXT DEFAULT '',
    image_base64 TEXT,              -- Ảnh Cover WebP Base64 hoặc Image URL
    singer_photo_base64 TEXT,       -- Ảnh Ca sĩ WebP Base64 hoặc URL
    audio_url TEXT DEFAULT '',      -- Link Spotify Search / Stream
    spotify_url TEXT DEFAULT '',    -- Link trực tiếp Spotify
    spotify_track_id TEXT DEFAULT '',
    vibe TEXT DEFAULT '',           -- Vibe cảm xúc
    genre TEXT DEFAULT '',          -- Thể loại nhạc
    mood TEXT DEFAULT '',           -- Tâm trạng
    story TEXT DEFAULT '',          -- Câu chuyện & hoàn cảnh bài hát
    instruments JSONB DEFAULT '[]'::jsonb,
    lyrics JSONB NOT NULL DEFAULT '[]'::jsonb, -- Trích đoạn 1/4 lời bài hát (Fair Use)
    categories JSONB DEFAULT '[]'::jsonb,
    views INT DEFAULT 0,
    is_current BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_lyrics_music_slug ON public.lyrics_music(slug);
CREATE INDEX IF NOT EXISTS idx_lyrics_music_is_current ON public.lyrics_music(is_current);
CREATE INDEX IF NOT EXISTS idx_lyrics_music_created_at ON public.lyrics_music(created_at DESC);

-- 2. BẢNG PLAYLISTS (playlists_music)
CREATE TABLE IF NOT EXISTS public.playlists_music (
    id BIGSERIAL PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    "desc" TEXT DEFAULT '',
    description TEXT DEFAULT '',
    keywords JSONB DEFAULT '[]'::jsonb,
    categories JSONB DEFAULT '[]'::jsonb,
    image TEXT DEFAULT '',
    banner TEXT DEFAULT '',
    songs JSONB NOT NULL DEFAULT '[]'::jsonb,
    mood TEXT DEFAULT '',
    final TEXT DEFAULT '',
    views INT DEFAULT 0,
    date TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_playlists_music_slug ON public.playlists_music(slug);
CREATE INDEX IF NOT EXISTS idx_playlists_music_views ON public.playlists_music(views DESC);

-- 3. BẢNG BLOGS (blogs_music)
CREATE TABLE IF NOT EXISTS public.blogs_music (
    id BIGSERIAL PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    "desc" TEXT DEFAULT '',
    keywords JSONB DEFAULT '[]'::jsonb,
    categories JSONB DEFAULT '[]'::jsonb,
    image TEXT DEFAULT '',
    paragraphs JSONB NOT NULL DEFAULT '[]'::jsonb,
    user_comment_avatar TEXT DEFAULT '',
    user_name_comment TEXT DEFAULT '',
    user_role_comment TEXT DEFAULT '',
    comment TEXT DEFAULT '',
    views INT DEFAULT 0,
    date TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_blogs_music_slug ON public.blogs_music(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_music_views ON public.blogs_music(views DESC);

-- 4. BẢNG LƯU IP KHÁCH VÀO WEB (visitor_ips_music)
CREATE TABLE IF NOT EXISTS public.visitor_ips_music (
    ip_address TEXT PRIMARY KEY,
    visit_count INT DEFAULT 1 NOT NULL,
    first_visited_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    last_visited_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    user_agent TEXT DEFAULT '',
    device_type TEXT DEFAULT 'desktop',
    browser TEXT DEFAULT '',
    os TEXT DEFAULT '',
    city TEXT DEFAULT '',
    country TEXT DEFAULT ''
);

CREATE INDEX IF NOT EXISTS idx_visitor_ips_music_last_visited ON public.visitor_ips_music(last_visited_at DESC);
CREATE INDEX IF NOT EXISTS idx_visitor_ips_music_count ON public.visitor_ips_music(visit_count DESC);

-- 5. BẢNG LOG NHẬT KÝ TRUY CẬP (visits_log_music)
CREATE TABLE IF NOT EXISTS public.visits_log_music (
    id BIGSERIAL PRIMARY KEY,
    ip_address TEXT NOT NULL,
    page_url TEXT DEFAULT '/',
    user_agent TEXT DEFAULT '',
    device_type TEXT DEFAULT 'desktop',
    browser TEXT DEFAULT '',
    os TEXT DEFAULT '',
    visited_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_visits_log_music_visited_at ON public.visits_log_music(visited_at DESC);
CREATE INDEX IF NOT EXISTS idx_visits_log_music_ip ON public.visits_log_music(ip_address);

-- 6. HÀM ATOMIC GHI NHẬN LƯỢT TRUY CẬP IP (upsert_visitor_ip_music)
CREATE OR REPLACE FUNCTION public.upsert_visitor_ip_music(
    p_ip TEXT,
    p_ua TEXT DEFAULT '',
    p_device TEXT DEFAULT 'desktop',
    p_browser TEXT DEFAULT '',
    p_os TEXT DEFAULT '',
    p_page TEXT DEFAULT '/'
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    INSERT INTO public.visitor_ips_music (
        ip_address,
        visit_count,
        first_visited_at,
        last_visited_at,
        user_agent,
        device_type,
        browser,
        os
    )
    VALUES (
        p_ip,
        1,
        timezone('utc'::text, now()),
        timezone('utc'::text, now()),
        p_ua,
        p_device,
        p_browser,
        p_os
    )
    ON CONFLICT (ip_address) DO UPDATE SET
        visit_count = public.visitor_ips_music.visit_count + 1,
        last_visited_at = timezone('utc'::text, now()),
        user_agent = EXCLUDED.user_agent,
        device_type = EXCLUDED.device_type,
        browser = EXCLUDED.browser,
        os = EXCLUDED.os;

    INSERT INTO public.visits_log_music (
        ip_address,
        page_url,
        user_agent,
        device_type,
        browser,
        os,
        visited_at
    )
    VALUES (
        p_ip,
        p_page,
        p_ua,
        p_device,
        p_browser,
        p_os,
        timezone('utc'::text, now())
    );
END;
$$;

-- 7. HÀM TĂNG VIEW & GHI VẾT TRUY CẬP (increment_post_view_music)
CREATE OR REPLACE FUNCTION public.increment_post_view_music(
    p_type TEXT,
    p_slug TEXT,
    p_ip TEXT DEFAULT '127.0.0.1',
    p_ua TEXT DEFAULT '',
    p_device TEXT DEFAULT 'desktop',
    p_browser TEXT DEFAULT '',
    p_os TEXT DEFAULT ''
)
RETURNS INT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    new_views INT := 0;
BEGIN
    IF p_type = 'lyrics' THEN
        UPDATE public.lyrics_music
        SET views = views + 1, updated_at = timezone('utc'::text, now())
        WHERE slug = p_slug
        RETURNING views INTO new_views;
    ELSIF p_type = 'playlists' THEN
        UPDATE public.playlists_music
        SET views = views + 1, updated_at = timezone('utc'::text, now())
        WHERE slug = p_slug
        RETURNING views INTO new_views;
    ELSIF p_type = 'blogs' THEN
        UPDATE public.blogs_music
        SET views = views + 1, updated_at = timezone('utc'::text, now())
        WHERE slug = p_slug
        RETURNING views INTO new_views;
    END IF;

    PERFORM public.upsert_visitor_ip_music(
        p_ip,
        p_ua,
        p_device,
        p_browser,
        p_os,
        CONCAT('/pages/', p_type, '/', p_slug)
    );

    RETURN COALESCE(new_views, 0);
END;
$$;

-- 8. HÀM ĐẶT BÀI HÁT HIỆN TẠI (set_current_song_music)
CREATE OR REPLACE FUNCTION public.set_current_song_music(p_song_id BIGINT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    UPDATE public.lyrics_music SET is_current = false WHERE is_current = true;
    UPDATE public.lyrics_music SET is_current = true, updated_at = timezone('utc'::text, now()) WHERE id = p_song_id;
END;
$$;

-- 9. PHÂN QUYỀN RLS
ALTER TABLE public.lyrics_music ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.playlists_music ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs_music ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_ips_music ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visits_log_music ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read lyrics_music" ON public.lyrics_music;
DROP POLICY IF EXISTS "Public read playlists_music" ON public.playlists_music;
DROP POLICY IF EXISTS "Public read blogs_music" ON public.blogs_music;
DROP POLICY IF EXISTS "Public read visitor_ips_music" ON public.visitor_ips_music;
DROP POLICY IF EXISTS "Public read visits_log_music" ON public.visits_log_music;

DROP POLICY IF EXISTS "Anon insert/update lyrics_music" ON public.lyrics_music;
DROP POLICY IF EXISTS "Anon insert/update playlists_music" ON public.playlists_music;
DROP POLICY IF EXISTS "Anon insert/update blogs_music" ON public.blogs_music;
DROP POLICY IF EXISTS "Anon insert/update visitor_ips_music" ON public.visitor_ips_music;
DROP POLICY IF EXISTS "Anon insert visits_log_music" ON public.visits_log_music;

CREATE POLICY "Public read lyrics_music" ON public.lyrics_music FOR SELECT USING (true);
CREATE POLICY "Public read playlists_music" ON public.playlists_music FOR SELECT USING (true);
CREATE POLICY "Public read blogs_music" ON public.blogs_music FOR SELECT USING (true);
CREATE POLICY "Public read visitor_ips_music" ON public.visitor_ips_music FOR SELECT USING (true);
CREATE POLICY "Public read visits_log_music" ON public.visits_log_music FOR SELECT USING (true);

CREATE POLICY "Anon insert/update lyrics_music" ON public.lyrics_music FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Anon insert/update playlists_music" ON public.playlists_music FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Anon insert/update blogs_music" ON public.blogs_music FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Anon insert/update visitor_ips_music" ON public.visitor_ips_music FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Anon insert visits_log_music" ON public.visits_log_music FOR ALL USING (true) WITH CHECK (true);

GRANT EXECUTE ON FUNCTION public.upsert_visitor_ip_music TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.increment_post_view_music TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.set_current_song_music TO anon, authenticated, service_role;

-- =====================================================================
-- 10. DỮ LIỆU BÀI HÁT (34 Bài hát - 100% Spotify Audio & Trích đoạn 1/4 Lời Fair-Use)
-- =====================================================================
`;

lyricsData.forEach((song, idx) => {
  const safeExcerpt = getCopyrightSafeLyricsExcerpt(song.lyrics);
  const spotifyInfo = getSpotifyInfo(song);
  const vibeProfile = getSongVibeProfile(song);
  const coverPath = getAssetPath(song.image);
  const singerPath = getAssetPath(song.singerPhoto);

  const isCurrent = idx === 0;

  sql += `
INSERT INTO public.lyrics_music (
    slug, title, artist, composer, producer, year, duration, "desc",
    image_base64, singer_photo_base64, audio_url, spotify_url, spotify_track_id,
    vibe, genre, mood, story, instruments, lyrics, categories, views, is_current, is_active
) VALUES (
    ${escapeSql(song.slug)},
    ${escapeSql(song.title)},
    ${escapeSql(song.artist)},
    ${escapeSql(song.composer || song.artist)},
    ${escapeSql(song.producer || '')},
    ${escapeSql(song.year || '2024')},
    ${escapeSql(song.duration || '03:45')},
    ${escapeSql(song.desc || '')},
    ${escapeSql(coverPath)},
    ${escapeSql(singerPath)},
    ${escapeSql(spotifyInfo.searchUrl)},
    ${escapeSql(spotifyInfo.searchUrl)},
    ${escapeSql(song.spotifyTrackId || '')},
    ${escapeSql(vibeProfile.vibeTags.join(', '))},
    ${escapeSql(vibeProfile.genre)},
    ${escapeSql(vibeProfile.mood)},
    ${escapeSql(vibeProfile.story)},
    ${escapeJson(vibeProfile.instruments)},
    ${escapeJson(safeExcerpt.excerpt)},
    ${escapeJson(song.categories || [])},
    ${Number(song.views) || 0},
    ${isCurrent ? 'true' : 'false'},
    true
)
ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    artist = EXCLUDED.artist,
    composer = EXCLUDED.composer,
    producer = EXCLUDED.producer,
    year = EXCLUDED.year,
    duration = EXCLUDED.duration,
    "desc" = EXCLUDED."desc",
    image_base64 = EXCLUDED.image_base64,
    singer_photo_base64 = EXCLUDED.singer_photo_base64,
    audio_url = EXCLUDED.audio_url,
    spotify_url = EXCLUDED.spotify_url,
    spotify_track_id = EXCLUDED.spotify_track_id,
    vibe = EXCLUDED.vibe,
    genre = EXCLUDED.genre,
    mood = EXCLUDED.mood,
    story = EXCLUDED.story,
    instruments = EXCLUDED.instruments,
    lyrics = EXCLUDED.lyrics,
    categories = EXCLUDED.categories,
    updated_at = timezone('utc'::text, now());
`;
});

sql += `
-- =====================================================================
-- 11. DỮ LIỆU PLAYLISTS (8 Playlists Đầy Đủ)
-- =====================================================================
`;

playlistsData.forEach((pl) => {
  const coverPath = getAssetPath(pl.image);
  const bannerPath = getAssetPath(pl.banner || pl.image);

  sql += `
INSERT INTO public.playlists_music (
    slug, title, "desc", description, keywords, categories,
    image, banner, songs, mood, final, views, date
) VALUES (
    ${escapeSql(pl.slug)},
    ${escapeSql(pl.title)},
    ${escapeSql(pl.desc || '')},
    ${escapeSql(pl.description || pl.desc || '')},
    ${escapeJson(pl.keywords || [])},
    ${escapeJson(pl.categories || [])},
    ${escapeSql(coverPath)},
    ${escapeSql(bannerPath)},
    ${escapeJson(pl.songs || [])},
    ${escapeSql(pl.mood || '')},
    ${escapeSql(pl.final || '')},
    ${Number(pl.views) || 0},
    ${escapeSql(pl.date || '2025-01-01')}
)
ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    "desc" = EXCLUDED."desc",
    description = EXCLUDED.description,
    keywords = EXCLUDED.keywords,
    categories = EXCLUDED.categories,
    image = EXCLUDED.image,
    banner = EXCLUDED.banner,
    songs = EXCLUDED.songs,
    mood = EXCLUDED.mood,
    final = EXCLUDED.final,
    date = EXCLUDED.date,
    updated_at = timezone('utc'::text, now());
`;
});

sql += `
-- =====================================================================
-- 12. DỮ LIỆU BLOGS (7 Bài Viết Đầy Đủ)
-- =====================================================================
`;

blogData.forEach((blog) => {
  const coverPath = getAssetPath(blog.image);
  const avatarPath = getAssetPath(blog.userCommentAvatar);

  sql += `
INSERT INTO public.blogs_music (
    slug, title, "desc", keywords, categories,
    image, paragraphs, user_comment_avatar, user_name_comment,
    user_role_comment, comment, views, date
) VALUES (
    ${escapeSql(blog.slug)},
    ${escapeSql(blog.title)},
    ${escapeSql(blog.desc || '')},
    ${escapeJson(blog.keywords || [])},
    ${escapeJson(blog.categories || [])},
    ${escapeSql(coverPath)},
    ${escapeJson(blog.paragraphs || [])},
    ${escapeSql(avatarPath)},
    ${escapeSql(blog.userNameComment || 'Admin')},
    ${escapeSql(blog.userRoleComment || 'Music Editor')},
    ${escapeSql(blog.comment || '')},
    ${Number(blog.views) || 0},
    ${escapeSql(blog.date || '2025-01-01')}
)
ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    "desc" = EXCLUDED."desc",
    keywords = EXCLUDED.keywords,
    categories = EXCLUDED.categories,
    image = EXCLUDED.image,
    paragraphs = EXCLUDED.paragraphs,
    user_comment_avatar = EXCLUDED.user_comment_avatar,
    user_name_comment = EXCLUDED.user_name_comment,
    user_role_comment = EXCLUDED.user_role_comment,
    comment = EXCLUDED.comment,
    date = EXCLUDED.date,
    updated_at = timezone('utc'::text, now());
`;
});

const outputPath = path.resolve(process.cwd(), 'supabase-complete-setup-and-seed.sql');
fs.writeFileSync(outputPath, sql, 'utf8');
console.log('Successfully generated complete SQL script:', outputPath);
console.log('Total file size:', (sql.length / 1024).toFixed(2), 'KB');
