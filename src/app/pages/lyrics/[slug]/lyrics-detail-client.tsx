"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Clock,
  Music,
  Disc,
  Sparkles,
  ShieldAlert,
  ExternalLink,
  Headphones,
  Compass,
  ChevronRight,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LyricPost } from "@/app/types/type";
import { usePostViewTracker } from "@/hooks/use-post-view-tracker";
import { getSongBySlug, getSongs } from "@/services/music-supabase-service";
import {
  getCopyrightSafeLyricsExcerpt,
  getSpotifyInfo,
  getSongVibeProfile,
  getSongsByComposer,
  getArtistDiscography,
  getSimilarVibeSongs,
} from "@/lib/song-vibe-helper";
import Spotify30sPlayer from "@/app/components/items/spotify-player";
import ReadingProgressBar from "@/app/components/items/reading-progress-bar";
import ShareActions from "@/app/components/items/share-actions";
import EmotionReactions from "@/app/components/items/emotion-reactions";
import LyricReaderControls from "@/app/components/items/lyric-reader-controls";

interface LyricsDetailClientProps {
  song: LyricPost;
}

export default function LyricsDetailClient({ song }: LyricsDetailClientProps) {
  const [liveSong, setLiveSong] = useState<LyricPost>(song);
  const [allSongs, setAllSongs] = useState<LyricPost[]>([]);

  // Cập nhật dữ liệu mới nhất từ Supabase Cloud khi vào trang
  useEffect(() => {
    async function loadFreshSong() {
      try {
        const record = await getSongBySlug(song.slug);
        if (record && !record.isLocalFallback) {
          setLiveSong((prev) => ({
            ...prev,
            spotifyUrl: record.spotify_url || prev.spotifyUrl,
            spotifyTrackId: record.spotify_track_id || prev.spotifyTrackId,
            audio: record.audio_url || record.spotify_url || prev.audio,
            title: record.title || prev.title,
            artist: record.artist || prev.artist,
            composer: record.composer || prev.composer,
            producer: record.producer || prev.producer,
            views: record.views || prev.views,
            lyrics: record.lyrics && record.lyrics.length > 0 ? record.lyrics : prev.lyrics,
          }));
        }
      } catch (err) {
        console.warn("Could not load dynamic song updates:", err);
      }
    }

    async function loadAllSongs() {
      try {
        const res = await getSongs({ limit: 100, onlyActive: true });
        if (res && res.data) {
          const mapped: LyricPost[] = res.data.map((item) => ({
            id: item.id || 0,
            type: "lyrics" as const,
            slug: item.slug,
            title: item.title,
            artist: item.artist,
            composer: item.composer || item.artist,
            producer: item.producer || "",
            year: item.year || "2024",
            duration: item.duration || "03:45",
            desc: item.desc || "",
            keywords: [],
            categories: item.categories || [],
            image: item.image_base64 || "",
            singerPhoto: item.singer_photo_base64 || "",
            audio: item.audio_url || item.spotify_url || "",
            spotifyUrl: item.spotify_url,
            spotifyTrackId: item.spotify_track_id,
            vibe: item.vibe,
            genre: item.genre,
            mood: item.mood,
            story: item.story,
            instruments: item.instruments,
            lyrics: item.lyrics || [],
            views: item.views || 0,
            date: item.created_at || "2025-01-01",
            otherSongs: [],
            userNameComment: "Admin",
            userRoleComment: "Music Editor",
            comment: "",
          }));
          setAllSongs(mapped);
        }
      } catch (err) {
        console.warn("Could not load all songs for sidebar/relations:", err);
      }
    }

    loadFreshSong();
    loadAllSongs();
  }, [song.slug]);

  const { views } = usePostViewTracker({
    type: "lyrics",
    slug: liveSong.slug,
    initialViews: liveSong.views || 0,
  });

  // Cỡ chữ lời bài hát
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");
  const [excerptCopied, setExcerptCopied] = useState(false);

  // 1/4 Lời bài hát tuân thủ bản quyền
  const { excerpt, totalOriginalCount, shownCount, percentageText } =
    getCopyrightSafeLyricsExcerpt(liveSong.lyrics);

  // Spotify info
  const { searchUrl } = getSpotifyInfo(liveSong);

  // Vibe profile
  const vibeProfile = getSongVibeProfile(liveSong);

  // Bài hát cùng nhạc sĩ & danh mục bài hát ca sĩ
  const composerSongs = getSongsByComposer(liveSong.composer, liveSong.slug, allSongs);
  const artistDiscography = getArtistDiscography(liveSong, allSongs);

  // Bài hát cùng vibe
  const similarSongs = getSimilarVibeSongs(liveSong, allSongs);

  // Bài hát trước / sau
  const currentIndex = allSongs.findIndex((l) => l.slug === liveSong.slug);
  const prevSong = currentIndex > 0 ? allSongs[currentIndex - 1] : undefined;
  const nextSong =
    currentIndex !== -1 && currentIndex < allSongs.length - 1 ? allSongs[currentIndex + 1] : undefined;

  // Xử lý sao chép trích đoạn lời
  const handleCopyExcerpt = async () => {
    const textToCopy = `"${excerpt.map((e) => `[${e.type.toUpperCase()}]\n${e.content}`).join("\n\n")}"\n\n— Bài hát "${liveSong.title}" - Ca sĩ: ${liveSong.artist}${liveSong.composer ? ` (Sáng tác: ${liveSong.composer})` : ""} | Nguồn: Moe Music`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setExcerptCopied(true);
      setTimeout(() => setExcerptCopied(false), 2200);
    } catch {
      const input = document.createElement("textarea");
      input.value = textToCopy;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setExcerptCopied(true);
      setTimeout(() => setExcerptCopied(false), 2200);
    }
  };

  const fontSizeClass = {
    sm: "text-sm sm:text-base leading-relaxed",
    base: "text-base sm:text-lg leading-relaxed",
    lg: "text-lg sm:text-xl leading-loose",
    xl: "text-xl sm:text-2xl leading-loose",
  }[fontSize];

  return (
    <div className="max-w-6xl mx-auto space-y-12 my-8 animate-in fade-in duration-300">
      {/* Scroll Reading Progress Bar */}
      <ReadingProgressBar colorClassName="from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500" />

      {/* BREADCRUMB */}
      <nav className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
        <Link href="/" className="hover:text-foreground transition">
          Trang chủ
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <Link href="/pages/lyrics" className="hover:text-foreground transition">
          Lyrics
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <span className="text-foreground font-semibold truncate max-w-xs sm:max-w-md">
          {liveSong.title}
        </span>
      </nav>

      {/* ========================================================================= */}
      {/* SECTION 1: HEADER & SPOTIFY PLAYER (FULL-WIDTH EMBED) */}
      {/* ========================================================================= */}
      <div className="p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-linear-to-br from-background via-neutral-50/50 to-neutral-100/50 dark:via-neutral-900/30 dark:to-neutral-900/60 backdrop-blur-xl shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          {/* Cover Image */}
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700 shrink-0 bg-neutral-900 mx-auto md:mx-0">
            {Boolean(
              liveSong.image &&
                (typeof liveSong.image === "object" ||
                  (typeof liveSong.image === "string" && liveSong.image.trim() !== ""))
            ) ? (
              <Image
                src={liveSong.image}
                alt={`${liveSong.title} - ${liveSong.artist}`}
                width={260}
                height={260}
                className="object-cover w-full h-full"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-neutral-400">
                <Music className="w-16 h-16" />
              </div>
            )}
          </div>

          {/* Info Details */}
          <div className="flex-1 flex flex-col justify-center w-full space-y-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold uppercase tracking-wider">
                  {vibeProfile.genre}
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  {liveSong.year || "2024"}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                {liveSong.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-neutral-600 dark:text-neutral-300 mt-1.5">
                <span>
                  Ca sĩ: <strong className="text-foreground">{liveSong.artist}</strong>
                </span>
                {liveSong.composer && (
                  <span>
                    • Sáng tác: <strong className="text-foreground">{liveSong.composer}</strong>
                  </span>
                )}
                {liveSong.producer && (
                  <span className="hidden sm:inline">
                    • Sản xuất: <strong className="text-foreground">{liveSong.producer}</strong>
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {liveSong.categories?.map((cat, i) => (
                  <Link
                    key={i}
                    href={`/pages/lyrics?category=${encodeURIComponent(cat.name)}`}
                    className="inline-block text-[11px] border border-neutral-200 dark:border-neutral-800 bg-background/80 hover:border-neutral-900 hover:text-neutral-900 dark:hover:border-white dark:hover:text-white px-2.5 py-0.5 rounded-full text-neutral-600 dark:text-neutral-400 transition"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-5 text-xs text-neutral-500 mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                  <span>{views.toLocaleString("vi-VN")} lượt nghe/xem</span>
                </span>
                {liveSong.duration && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                    <span>{liveSong.duration}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SPOTIFY 30S AUDIO & EMBED PLAYER (FULL NGANG 100%) */}
        <div className="w-full pt-1">
          <Spotify30sPlayer
            audioUrl={liveSong.audio}
            spotifyTrackId={liveSong.spotifyTrackId}
            spotifyUrl={liveSong.spotifyUrl}
            title={liveSong.title}
            artist={liveSong.artist}
            coverImage={typeof liveSong.image === "string" ? liveSong.image : undefined}
            compact={false}
          />
        </div>
      </div>

      {/* SHARE ACTIONS BAR */}
      <ShareActions
        type="lyrics"
        slug={liveSong.slug}
        title={liveSong.title}
        artistOrDesc={liveSong.artist}
      />

      {/* ========================================================================= */}
      {/* 2 CỘT CHÍNH: NỘI DUNG BÀI HÁT & CỘT BÊN */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* CỘT TRÁI (2/3): TRÍCH ĐOẠN LỜI 1/4 + VIBE & MÔ TẢ */}
        <div className="lg:col-span-2 space-y-8">
          {/* SECTION 2: LỜI BÀI HÁT (1/4 TRÍCH ĐOẠN - FAIR USE) */}
          <div className="p-6 sm:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <Music className="w-5 h-5 text-foreground" />
                  <span>Trích đoạn Lời bài hát ({percentageText})</span>
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Trích dẫn {shownCount} / {totalOriginalCount} đoạn tiêu biểu nhằm giới thiệu &amp; cảm nhận nghệ thuật.
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 text-xs font-semibold self-start sm:self-auto">
                <span>Tuân thủ bản quyền</span>
              </span>
            </div>

            {/* Lyric controls (font size & copy excerpt) */}
            <LyricReaderControls
              fontSize={fontSize}
              setFontSize={setFontSize}
              onCopyExcerpt={handleCopyExcerpt}
              copied={excerptCopied}
            />

            {/* Nội dung 1/4 lời */}
            <div className="space-y-6">
              {excerpt.map((lyric, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/60 space-y-2 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider font-mono">
                      {lyric.type}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-medium">Trích đoạn</span>
                  </div>
                  <p className={`${fontSizeClass} text-foreground whitespace-pre-line font-sans font-normal`}>
                    {lyric.content}
                  </p>
                </div>
              ))}
            </div>

            {/* HỘP BẢN QUYỀN & LỜI KÊU GỌI NGHE BẢN ĐẦY ĐỦ */}
            <div className="p-5 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100/50 dark:bg-neutral-900/40 backdrop-blur-sm space-y-3">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-neutral-700 dark:text-neutral-300 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-xs sm:text-sm text-foreground">
                    Thông tin bản quyền &amp; Lời bài hát đầy đủ
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Toàn bộ bản quyền tác phẩm âm nhạc và ca từ thuộc về tác giả{" "}
                    <strong>{liveSong.composer || liveSong.artist}</strong> và các bên phân phối được ủy quyền. Trang web thực hiện trích dẫn ngắn 1/4 theo chuẩn mực Fair Use nhằm tôn trọng quyền sở hữu trí tuệ của nghệ sĩ.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 text-xs font-bold transition shadow-xs"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Nghe bản nhạc đầy đủ trên Spotify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* EMOTION REACTIONS */}
          <EmotionReactions type="lyrics" slug={liveSong.slug} title={liveSong.title} />

          {/* SECTION 3: MÔ TẢ & CÂU CHUYỆN BÀI HÁT */}
          <div className="p-6 sm:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-foreground" />
              <span>Câu chuyện &amp; Cảm nhận âm nhạc</span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {vibeProfile.story
                .split(/\n\s*\n/)
                .filter((p) => p.trim() !== "")
                .map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
            </div>

            {liveSong.comment && (
              <div className="mt-4 p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 flex items-start gap-4">
                <Avatar className="w-12 h-12 shrink-0 border border-neutral-300 dark:border-neutral-700">
                  {Boolean(
                    liveSong.userCommentAvatar &&
                      typeof liveSong.userCommentAvatar === "string" &&
                      liveSong.userCommentAvatar.trim() !== ""
                  ) && (
                    <AvatarImage
                      className="object-cover"
                      src={liveSong.userCommentAvatar}
                      alt={liveSong.userNameComment || "Admin"}
                    />
                  )}
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-foreground">
                      {liveSong.userNameComment || "Moe Music Curation"}
                    </span>
                    <span className="text-[11px] px-2 py-0.2 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium">
                      {liveSong.userRoleComment || "Editor"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
                    &ldquo;{liveSong.comment}&rdquo;
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 4: GỢI Ý BÀI HÁT TƯƠNG TỰ / CÙNG VIBE */}
          {similarSongs.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                    <Compass className="w-5 h-5 text-foreground" />
                    <span>Bài hát tương tự &amp; Cùng Vibe</span>
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium">
                    Những giai điệu đồng điệu với cảm xúc bài hát này
                  </p>
                </div>
                <Link
                  href="/pages/lyrics"
                  className="text-xs font-bold text-foreground hover:underline underline-offset-4"
                >
                  Xem tất cả
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {similarSongs.slice(0, 4).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/pages/lyrics/${s.slug}`}
                    className="p-3.5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-background/80 hover:border-neutral-400 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 transition flex items-center gap-3.5 group shadow-2xs"
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-neutral-200 dark:border-neutral-700">
                      {Boolean(
                        s.image &&
                          (typeof s.image === "object" ||
                            (typeof s.image === "string" && s.image.trim() !== ""))
                      ) ? (
                        <Image
                          src={s.image}
                          alt={s.title}
                          width={60}
                          height={60}
                          className="object-cover w-full h-full group-hover:scale-105 transition"
                        />
                      ) : (
                        <Disc className="w-6 h-6 text-neutral-600 m-auto mt-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-foreground truncate group-hover:underline underline-offset-2 transition">
                        {s.title}
                      </h4>
                      <p className="text-xs text-neutral-500 truncate mt-0.5 font-medium">
                        {s.artist}
                      </p>
                      <span className="inline-block mt-1 text-[10px] px-2 py-0.2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono border border-neutral-200 dark:border-neutral-700">
                        {s.year || "Nhạc Việt"}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ĐIỀU HƯỚNG BÀI HÁT TRƯỚC / SAU */}
          {(prevSong || nextSong) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {prevSong ? (
                <Link
                  href={`/pages/lyrics/${prevSong.slug}`}
                  className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 hover:border-neutral-400 transition flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center shrink-0 text-xs font-bold">
                    ←
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-neutral-400 block uppercase font-mono">
                      Bài trước
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-foreground truncate block group-hover:underline transition">
                      {prevSong.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextSong && (
                <Link
                  href={`/pages/lyrics/${nextSong.slug}`}
                  className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 hover:border-neutral-400 transition flex items-center justify-end text-right gap-3 group"
                >
                  <div className="min-w-0">
                    <span className="text-[11px] text-neutral-400 block uppercase font-mono">
                      Bài tiếp theo
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-foreground truncate block group-hover:underline transition">
                      {nextSong.title}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center shrink-0 text-xs font-bold">
                    →
                  </div>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* CỘT PHẢI (1/3): VIBE PROFILE & TÁC PHẨM CỦA NHẠC SĨ / CA SĨ */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          {/* CARD 1: HỒ SƠ VIBE & KHÔNG GIAN ÂM NHẠC */}
          <div className="p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md space-y-4 shadow-xs">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-200 dark:border-neutral-800">
              <Sparkles className="w-4 h-4 text-foreground" />
              <h3 className="font-bold text-sm text-foreground uppercase tracking-wider">
                Vibe &amp; Không Gian Cảm Xúc
              </h3>
            </div>

            <div className="space-y-3.5 text-xs">
              {/* Vibe cảm xúc */}
              <div>
                <span className="text-neutral-400 block mb-1 font-medium">Cảm xúc chủ đạo:</span>
                <p className="font-semibold text-foreground bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-2.5 rounded-xl">
                  {vibeProfile.mood}
                </p>
              </div>

              {/* Nhạc cụ đặc trưng */}
              <div>
                <span className="text-neutral-400 block mb-1.5 font-medium">Nhạc cụ &amp; Hòa âm:</span>
                <div className="flex flex-wrap gap-1.5">
                  {vibeProfile.instruments.map((ins, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px] font-mono border border-neutral-200/60 dark:border-neutral-700/60"
                    >
                      {ins}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vibe tags */}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <span className="text-neutral-400 block mb-1.5 font-medium">Tags cảm xúc:</span>
                <div className="flex flex-wrap gap-1.5">
                  {vibeProfile.vibeTags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[10px] font-mono border border-neutral-200 dark:border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: BÀI HÁT CÙNG NHẠC SĨ (COMPOSER) */}
          {liveSong.composer && (
            <div className="p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-foreground" />
                  <h3 className="font-bold text-sm text-foreground">
                    Sáng tác bởi {liveSong.composer}
                  </h3>
                </div>
              </div>

              {composerSongs.length > 0 ? (
                <ul className="space-y-2 text-xs">
                  {composerSongs.map((cs) => (
                    <li key={cs.slug}>
                      <Link
                        href={`/pages/lyrics/${cs.slug}`}
                        className="p-2.5 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition flex items-center justify-between group"
                      >
                        <span className="font-medium text-foreground group-hover:underline transition truncate">
                          {cs.title}
                        </span>
                        <span className="text-[11px] text-neutral-400 font-mono shrink-0 ml-2">
                          {cs.artist}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-neutral-500 italic">
                  Các tác phẩm tiêu biểu của nhạc sĩ: {liveSong.title}, các bản ballad tự sự Việt Nam.
                </p>
              )}
            </div>
          )}

          {/* CARD 3: THÔNG TIN NGHỆ SĨ & CÁC BÀI HÁT NỔI BẬT CỦA CA SĨ */}
          <div className="p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-background/60 backdrop-blur-md space-y-4 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-900 shrink-0 border-2 border-neutral-300 dark:border-neutral-700">
                {Boolean(
                  liveSong.singerPhoto &&
                    (typeof liveSong.singerPhoto === "object" ||
                      (typeof liveSong.singerPhoto === "string" &&
                        liveSong.singerPhoto.trim() !== ""))
                ) ? (
                  <Image
                    src={liveSong.singerPhoto}
                    alt={liveSong.artist}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-500">
                    <User className="w-6 h-6" />
                  </div>
                )}
              </div>
              <div>
                <h4 className="font-bold text-base text-foreground">{liveSong.artist}</h4>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">
                  Nghệ sĩ thể hiện
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
              <span className="text-xs font-semibold text-neutral-500 block">
                Các bài hát nổi bật của nghệ sĩ:
              </span>
              <ul className="space-y-2 text-xs">
                {artistDiscography.map((item, idx) => (
                  <li key={idx}>
                    {item.isInternal && item.slug ? (
                      <Link
                        href={`/pages/lyrics/${item.slug}`}
                        className="p-2.5 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition flex items-center justify-between group"
                      >
                        <span className="font-medium text-foreground group-hover:underline transition truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-mono shrink-0 ml-2">
                          Trên Moe
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={item.spotifySearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition flex items-center justify-between group"
                        title="Nghe bài hát này trên Spotify"
                      >
                        <span className="font-medium text-foreground group-hover:underline transition truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-background text-foreground font-semibold flex items-center gap-1 shrink-0 ml-2">
                          <span>Spotify</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}