const fs = require('fs');
const path = require('path');

function escapeSql(str) {
  if (str === null || str === undefined) return "''";
  return "'" + String(str).replace(/'/g, "''") + "'";
}

function escapeJson(obj) {
  if (!obj) return "'[]'::jsonb";
  return "'" + JSON.stringify(obj).replace(/'/g, "''") + "'::jsonb";
}

// Read raw files
const lyricsFile = fs.readFileSync(path.join(__dirname, '../src/app/data/lyrics-data.ts'), 'utf8');
const playlistsFile = fs.readFileSync(path.join(__dirname, '../src/app/data/playlists-data.ts'), 'utf8');
const blogsFile = fs.readFileSync(path.join(__dirname, '../src/app/data/blog-data.ts'), 'utf8');

let sql = `-- =====================================================================
-- MOE MUSIC WEBSITE - FULL SUPABASE DATABASE SETUP & COMPLETE DATA SEED
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
    story TEXT DEFAULT '',          -- Câu chuyện & hoàn cảnh bài hát
    lyrics JSONB NOT NULL DEFAULT '[]'::jsonb, -- Trích đoạn 1/4 lời bài hát
    categories JSONB DEFAULT '[]'::jsonb,
    views INT DEFAULT 0,
    is_current BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_lyrics_music_slug ON public.lyrics_music(slug);
CREATE INDEX IF NOT EXISTS idx_lyrics_music_is_current ON public.lyrics_music(is_current);

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
`;

const outputPath = path.resolve(process.cwd(), 'supabase-setup.sql');
fs.writeFileSync(outputPath, sql, 'utf8');
console.log('Saved setup SQL script to:', outputPath);
