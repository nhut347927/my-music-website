"use client";

import React, { useState } from "react";
import { Database, Copy, Check, Terminal, ShieldCheck, AlertCircle, RefreshCw } from "lucide-react";
import { SUPABASE_URL, defaultHeaders } from "@/services/music-supabase-service";

const SQL_MIGRATION_SCRIPT = `-- =====================================================================
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

-- 4. BẢNG LƯU IP ĐÃ VÀO WEB (visitor_ips_music)
-- Mỗi IP chỉ 1 dòng duy nhất, tăng số lần và cập nhật thời gian vào
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

export default function SupabaseConfigTab() {
  const [copied, setCopied] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message: string;
    tablesFound: string[];
  } | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(SQL_MIGRATION_SCRIPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTestConnection = async () => {
    try {
      setTesting(true);
      setTestResult(null);

      const tables = [
        "lyrics_music",
        "playlists_music",
        "blogs_music",
        "visitor_ips_music",
        "visits_log_music",
      ];
      const tablesFound: string[] = [];

      for (const tbl of tables) {
        try {
          const res = await fetch(`${SUPABASE_URL}/rest/v1/${tbl}?limit=1`, {
            headers: defaultHeaders,
          });
          if (res.ok) {
            tablesFound.push(tbl);
          }
        } catch {}
      }

      if (tablesFound.length === tables.length) {
        setTestResult({
          success: true,
          message: `Kết nối thành công! Đã tìm thấy đầy đủ cả ${tables.length} bảng với hậu tố '_music'.`,
          tablesFound,
        });
      } else if (tablesFound.length > 0) {
        setTestResult({
          success: true,
          message: `Kết nối thành công tới Supabase, tìm thấy ${tablesFound.length}/${tables.length} bảng.`,
          tablesFound,
        });
      } else {
        setTestResult({
          success: false,
          message:
            "Kết nối tới Supabase thành công nhưng chưa tìm thấy các bảng mới. Vui lòng mở Supabase SQL Editor và chạy đoạn mã SQL phía dưới!",
          tablesFound: [],
        });
      }
    } catch (e: any) {
      setTestResult({
        success: false,
        message: `Lỗi kết nối: ${e?.message || "Không thể kết nối tới Supabase URL"}`,
        tablesFound: [],
      });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Khối trạng thái kết nối */}
      <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base">Cấu hình CSDL Supabase Toàn diện</h3>
              <p className="text-xs text-neutral-500">
                Toàn bộ bảng dự án sử dụng hậu tố chung: <strong className="text-rose-500">_music</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleTestConnection}
              disabled={testing}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${testing ? "animate-spin" : ""}`} />
              <span>{testing ? "Đang kiểm tra..." : "Kiểm tra kết nối"}</span>
            </button>
          </div>
        </div>

        {/* Thông tin 5 bảng */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 font-mono">
            <span className="text-neutral-500 block mb-1">SUPABASE_URL</span>
            <span className="text-foreground truncate block">{SUPABASE_URL}</span>
          </div>

          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 font-mono">
            <span className="text-neutral-500 block mb-1">5 Bảng CSDL (Hậu tố: _music)</span>
            <span className="text-rose-500 font-bold block truncate">
              lyrics_music, playlists_music, blogs_music, visitor_ips_music, visits_log_music
            </span>
          </div>
        </div>

        {/* Kết quả test kết nối */}
        {testResult && (
          <div
            className={`p-4 rounded-xl border text-xs space-y-2 ${
              testResult.success
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-300"
            }`}
          >
            <div className="flex items-center gap-2 font-semibold">
              {testResult.success ? <ShieldCheck className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              <span>{testResult.message}</span>
            </div>

            {testResult.tablesFound.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1 font-mono text-[11px]">
                <span>Bảng đã sẵn sàng:</span>
                {testResult.tablesFound.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Khối hướng dẫn chạy SQL */}
      <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-rose-500" />
              <h4 className="font-bold text-base">Mã SQL tạo đầy đủ Bảng, Functions & Views Counter</h4>
            </div>
            <p className="text-xs text-neutral-500 mt-1">
              Chạy mã này 1 lần duy nhất trong Supabase SQL Editor để khởi tạo tất cả các bảng và hàm ghi vết lượt truy cập.
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-linear-to-r from-rose-500 to-amber-500 text-white text-xs font-semibold shadow-xs hover:opacity-95 transition cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Đã sao chép!" : "Sao chép mã SQL"}</span>
          </button>
        </div>

        {/* Khung hiển thị mã SQL */}
        <div className="relative rounded-xl overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-neutral-950 text-neutral-200 font-mono text-xs">
          <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800 text-[11px] text-neutral-400">
            <span>supabase-setup.sql (Toàn bộ 5 bảng và hàm tăng view ghi vết)</span>
            <button onClick={handleCopy} className="hover:text-white transition flex items-center gap-1 cursor-pointer">
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </button>
          </div>
          <pre className="p-4 max-h-96 overflow-y-auto overflow-x-auto leading-relaxed text-[11px]">
            {SQL_MIGRATION_SCRIPT}
          </pre>
        </div>
      </div>
    </div>
  );
}
