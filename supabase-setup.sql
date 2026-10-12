-- =====================================================================
-- SUPABASE DATABASE SETUP SCRIPT FOR MY-MUSIC (Moe Website)
-- All tables use the common suffix '_music' to distinguish from other projects
-- =====================================================================

-- 1. BẢNG BÀI HÁT & LỜI BÀI HÁT HIỆN TẠI (lyrics_music)
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
    image_base64 TEXT,              -- Ảnh Cover WebP Base64 (tối đa chuẩn HD)
    singer_photo_base64 TEXT,       -- Ảnh Ca sĩ WebP Base64
    audio_url TEXT DEFAULT '',      -- Link Spotify / Audio
    spotify_url TEXT DEFAULT '',    -- Link trực tiếp Spotify
    spotify_track_id TEXT DEFAULT '',
    vibe TEXT DEFAULT '',           -- Vibe cảm xúc
    genre TEXT DEFAULT '',          -- Thể loại âm nhạc
    mood TEXT DEFAULT '',           -- Tâm trạng
    story TEXT DEFAULT '',          -- Câu chuyện & hoàn cảnh bài hát
    instruments JSONB DEFAULT '[]'::jsonb,
    lyrics JSONB NOT NULL DEFAULT '[]'::jsonb, -- Trích đoạn 1/4 lời bài hát (Fair Use)
    categories JSONB DEFAULT '[]'::jsonb,
    views INT DEFAULT 0,            -- Lượt xem / nghe bài hát
    is_current BOOLEAN DEFAULT false, -- Đánh dấu bài hát hiện tại
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
    image TEXT DEFAULT '',          -- Ảnh đại diện / WebP Base64
    banner TEXT DEFAULT '',         -- Ảnh banner / WebP Base64
    songs JSONB NOT NULL DEFAULT '[]'::jsonb, -- Danh sách bài hát: [{"name": "...", "desc": "...", "youtube": "..."}, ...]
    mood TEXT DEFAULT '',
    final TEXT DEFAULT '',
    views INT DEFAULT 0,            -- Lượt xem playlist
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
    image TEXT DEFAULT '',          -- Ảnh đại diện bài viết / WebP Base64
    paragraphs JSONB NOT NULL DEFAULT '[]'::jsonb, -- Mảng đoạn văn: [{"type": "text"|"title", "content": "..."}, ...]
    user_comment_avatar TEXT DEFAULT '',
    user_name_comment TEXT DEFAULT '',
    user_role_comment TEXT DEFAULT '',
    comment TEXT DEFAULT '',
    views INT DEFAULT 0,            -- Lượt đọc bài blog
    date TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_blogs_music_slug ON public.blogs_music(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_music_views ON public.blogs_music(views DESC);


-- 4. BẢNG LƯU IP ĐÃ VÀO WEB (visitor_ips_music)
-- Mỗi IP chỉ 1 dòng duy nhất, tăng số lần và cập nhật thời gian vào
CREATE TABLE IF NOT EXISTS public.visitor_ips_music (
    ip_address TEXT PRIMARY KEY,
    visit_count INT DEFAULT 1 NOT NULL,
    first_visited_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    last_visited_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    user_agent TEXT DEFAULT '',
    device_type TEXT DEFAULT 'desktop', -- desktop, mobile, tablet
    browser TEXT DEFAULT '',            -- Chrome, Safari, Firefox, Edge, etc.
    os TEXT DEFAULT '',                 -- Windows, Android, iOS, macOS, Linux
    city TEXT DEFAULT '',
    country TEXT DEFAULT ''
);

CREATE INDEX IF NOT EXISTS idx_visitor_ips_music_last_visited ON public.visitor_ips_music(last_visited_at DESC);
CREATE INDEX IF NOT EXISTS idx_visitor_ips_music_count ON public.visitor_ips_music(visit_count DESC);


-- 5. BẢNG LOG LỊCH SỬ TRUY CẬP (visits_log_music)
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


-- 7. HÀM TĂNG VIEW BÀI VIẾT & GHI VẾT TRUY CẬP (increment_post_view_music)
-- Tự động tăng lượt xem cho Lyrics, Playlist, hoặc Blog + ghi nhận IP khách vào
CREATE OR REPLACE FUNCTION public.increment_post_view_music(
    p_type TEXT,        -- 'lyrics', 'playlists', 'blogs'
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
    -- 1. Tăng view theo loại bài viết
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

    -- 2. Tự động ghi vết IP khách truy cập và cập nhật số lần vào web
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


-- 9. THIẾT LẬP ROW LEVEL SECURITY (RLS) & PHÂN QUYỀN
ALTER TABLE public.lyrics_music ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.playlists_music ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs_music ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_ips_music ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visits_log_music ENABLE ROW LEVEL SECURITY;

-- Cho phép đọc công khai
CREATE POLICY "Public read lyrics_music" ON public.lyrics_music FOR SELECT USING (true);
CREATE POLICY "Public read playlists_music" ON public.playlists_music FOR SELECT USING (true);
CREATE POLICY "Public read blogs_music" ON public.blogs_music FOR SELECT USING (true);
CREATE POLICY "Public read visitor_ips_music" ON public.visitor_ips_music FOR SELECT USING (true);
CREATE POLICY "Public read visits_log_music" ON public.visits_log_music FOR SELECT USING (true);

-- Cho phép ghi thông qua API anon key
CREATE POLICY "Anon insert/update lyrics_music" ON public.lyrics_music FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Anon insert/update playlists_music" ON public.playlists_music FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Anon insert/update blogs_music" ON public.blogs_music FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Anon insert/update visitor_ips_music" ON public.visitor_ips_music FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Anon insert visits_log_music" ON public.visits_log_music FOR ALL USING (true) WITH CHECK (true);

-- Cấp quyền thực thi hàm
GRANT EXECUTE ON FUNCTION public.upsert_visitor_ip_music TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.increment_post_view_music TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.set_current_song_music TO anon, authenticated, service_role;
