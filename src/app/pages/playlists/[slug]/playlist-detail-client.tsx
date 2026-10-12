"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Disc, Eye, Calendar, ChevronRight, ListMusic, Sparkles, Music2, Share2 } from "lucide-react";
import { PlaylistPost } from "@/app/types/type";
import { getPlaylists } from "@/services/music-supabase-service";
import { usePostViewTracker } from "@/hooks/use-post-view-tracker";
import defaultTree from "@/app/asset/tree1.jpg";
import ReadingProgressBar from "@/app/components/items/reading-progress-bar";
import ShareActions from "@/app/components/items/share-actions";
import EmotionReactions from "@/app/components/items/emotion-reactions";

interface PlaylistDetailClientProps {
  playlist: PlaylistPost;
}

export default function PlaylistDetailClient({
  playlist,
}: PlaylistDetailClientProps) {
  const { views } = usePostViewTracker({
    type: "playlists",
    slug: playlist.slug,
    initialViews: playlist.views || 0,
  });

  const [isTocOpen, setIsTocOpen] = useState(true);
  const [allPlaylists, setAllPlaylists] = useState<Array<{ slug: string; title: string }>>([]);

  useEffect(() => {
    async function loadPlaylists() {
      try {
        const res = await getPlaylists({ limit: 100, onlyActive: true });
        if (res && res.data) {
          setAllPlaylists(res.data.map((p) => ({ slug: p.slug, title: p.title })));
        }
      } catch (err) {
        console.warn("Notice loading playlists list:", err);
      }
    }
    loadPlaylists();
  }, []);

  // Tạo mục lục từ tên các bài hát trong playlist
  const headings = playlist.songs.map((song, index) => ({
    index: index + 1,
    title: song.name,
    slug: `song-${index + 1}`,
  }));

  // Tìm bài playlist trước/sau để gợi ý liên quan
  const currentIndex = allPlaylists.findIndex((p) => p.slug === playlist.slug);

  const prevPlaylist =
    currentIndex > 0
      ? {
          slug: allPlaylists[currentIndex - 1].slug,
          title: allPlaylists[currentIndex - 1].title,
        }
      : undefined;

  const nextPlaylist =
    currentIndex !== -1 && currentIndex < allPlaylists.length - 1
      ? {
          slug: allPlaylists[currentIndex + 1].slug,
          title: allPlaylists[currentIndex + 1].title,
        }
      : undefined;

  const getEmbedUrl = (url: string) => {
    if (!url) return "";

    try {
      const u = new URL(url);
      let videoId = "";

      if (u.hostname.includes("youtu.be")) {
        videoId = u.pathname.slice(1);
      } else if (u.hostname.includes("youtube.com")) {
        videoId = u.searchParams.get("v") || "";
      }

      const query = u.search ? u.search : "";
      return videoId ? `https://www.youtube.com/embed/${videoId}${query}` : url;
    } catch {
      return url;
    }
  };

  const imageSrc = Boolean(
    playlist.banner &&
      (typeof playlist.banner === "object" ||
        (typeof playlist.banner === "string" && playlist.banner.trim() !== ""))
  )
    ? playlist.banner
    : playlist.image &&
      (typeof playlist.image === "object" ||
        (typeof playlist.image === "string" && playlist.image.trim() !== ""))
    ? playlist.image
    : defaultTree;

  return (
    <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20 my-8 md:my-12 animate-in fade-in duration-300">
      {/* Scroll Reading Progress Bar */}
      <ReadingProgressBar colorClassName="from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500" />

      {/* BREADCRUMB */}
      <nav className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
        <Link href="/" className="hover:text-foreground transition">
          Trang chủ
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <Link href="/pages/playlists" className="hover:text-foreground transition">
          Playlists
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <span className="text-foreground font-semibold truncate max-w-xs sm:max-w-md">
          {playlist.title}
        </span>
      </nav>

      {/* BANNER & HEADER */}
      <div className="relative w-full rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-xl">
        <div className="relative w-full h-72 sm:h-96">
          <Image
            src={imageSrc}
            alt={playlist.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 flex flex-col justify-end p-6 sm:p-10 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Disc className="w-3.5 h-3.5" />
                <span>Playlist Tuyển Chọn</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold">
                {playlist.songs?.length || 0} bài hát
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 drop-shadow-md">
              {playlist.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-300">
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-neutral-300" />
                <span>{views.toLocaleString("vi-VN")} lượt xem</span>
              </span>
              {playlist.date && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-neutral-400" />
                  <span>{new Date(playlist.date).toLocaleDateString("vi-VN")}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORIES & SHARE */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {playlist.categories.map((cat, idx) => (
            <Link
              key={idx}
              href={`/pages/playlists?category=${encodeURIComponent(cat?.name || "")}`}
              className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full text-neutral-700 dark:text-neutral-300 transition border border-neutral-200 dark:border-neutral-700 font-medium"
            >
              {cat?.name}
            </Link>
          ))}
        </div>
      </div>

      {/* SHARE ACTIONS BAR */}
      <ShareActions
        type="playlists"
        slug={playlist.slug}
        title={playlist.title}
        artistOrDesc={playlist.desc}
      />

      {/* DESCRIPTION */}
      {playlist.description && (
        <div className="p-6 sm:p-8 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-background/60 backdrop-blur-md space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-neutral-200 dark:border-neutral-800">
            <Sparkles className="w-4 h-4 text-foreground" />
            <h3 className="font-bold text-sm text-foreground uppercase tracking-wider">
              Về Playlist này
            </h3>
          </div>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line font-normal">
            {playlist.description}
          </p>
        </div>
      )}

      {/* MỤC LỤC - DANH SÁCH BÀI HÁT */}
      {headings.length > 0 && (
        <div className="rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-background/80 backdrop-blur-md p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <ListMusic className="w-5 h-5 text-foreground" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Danh sách bài hát ({headings.length} bài)
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="text-xs font-semibold px-3 py-1 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition cursor-pointer"
            >
              {isTocOpen ? "Thu gọn ▲" : "Mở rộng ▼"}
            </button>
          </div>

          {isTocOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {headings.map((heading) => (
                <a
                  key={heading.index}
                  href={`#${heading.slug}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition group text-sm"
                >
                  <span className="w-6 h-6 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {heading.index}
                  </span>
                  <span className="truncate text-neutral-700 dark:text-neutral-300 group-hover:underline font-medium">
                    {heading.title}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* DANH SÁCH BÀI HÁT CHI TIẾT */}
      <div className="space-y-12">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center justify-center gap-2">
            <Music2 className="w-7 h-7 text-foreground" />
            <span>Thưởng thức âm nhạc</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-medium">
            Nghe trọn vẹn từng giai điệu với video chính thức chất lượng cao
          </p>
        </div>

        <div className="space-y-12">
          {playlist.songs.map((song, idx) => (
            <div
              key={idx}
              id={`song-${idx + 1}`}
              className="p-6 sm:p-8 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-background/60 backdrop-blur-md space-y-6 scroll-mt-24 shadow-xs"
            >
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-extrabold text-lg flex items-center justify-center shrink-0 shadow-xs">
                  {idx + 1}
                </span>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                    {song.name}
                  </h3>
                  {song.desc && (
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {song.desc}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-md bg-neutral-900">
                <iframe
                  src={getEmbedUrl(song.youtube)}
                  title={song.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL NOTE */}
      {playlist.final && (
        <div className="p-6 sm:p-8 rounded-3xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100/50 dark:bg-neutral-900/40 backdrop-blur-sm space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-foreground" />
            <h3 className="font-bold text-base text-foreground">Lời kết từ Moe</h3>
          </div>
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal whitespace-pre-line italic">
            &ldquo;{playlist.final}&rdquo;
          </p>
        </div>
      )}

      {/* EMOTION REACTIONS */}
      <EmotionReactions type="playlists" slug={playlist.slug} title={playlist.title} />

      {/* NAVIGATION: Playlist trước & Playlist tiếp theo */}
      {(prevPlaylist || nextPlaylist) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          {prevPlaylist ? (
            <Link
              href={`/pages/playlists/${prevPlaylist.slug}`}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 hover:border-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition flex items-center gap-3.5 group shadow-2xs"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center shrink-0 text-xs font-bold">
                ←
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-neutral-400 block uppercase font-mono">
                  Playlist trước
                </span>
                <span className="font-bold text-sm text-foreground truncate block group-hover:underline transition">
                  {prevPlaylist.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextPlaylist && (
            <Link
              href={`/pages/playlists/${nextPlaylist.slug}`}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 hover:border-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition flex items-center justify-end text-right gap-3.5 group shadow-2xs"
            >
              <div className="min-w-0">
                <span className="text-[11px] text-neutral-400 block uppercase font-mono">
                  Playlist tiếp theo
                </span>
                <span className="font-bold text-sm text-foreground truncate block group-hover:underline transition">
                  {nextPlaylist.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center shrink-0 text-xs font-bold">
                →
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
