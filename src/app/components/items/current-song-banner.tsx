"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Play, Pause, Music, Disc, Sparkles, ChevronDown, ChevronUp, Radio, ExternalLink } from "lucide-react";
import { getCurrentSong, SongLyricRecord } from "@/services/music-supabase-service";

interface CurrentSongBannerProps {
  initialSong?: SongLyricRecord | null;
}

export default function CurrentSongBanner({ initialSong = null }: CurrentSongBannerProps = {}) {
  const [song, setSong] = useState<SongLyricRecord | null>(initialSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadCurrent() {
      try {
        const current = await getCurrentSong();
        if (isMounted && current) {
          setSong(current);
        }
      } catch (err) {
        console.warn("Could not load current song:", err);
      }
    }

    // Nếu đã có initialSong, có thể kiểm tra nền hoặc chỉ tải nếu chưa có
    if (!song) {
      loadCurrent();
    }
    return () => {
      isMounted = false;
    };
  }, [song]);

  const isDirectAudio = Boolean(
    song?.audio_url &&
      song.audio_url.trim() !== "" &&
      !song.audio_url.startsWith("spotify:") &&
      !song.audio_url.includes("open.spotify.com") &&
      (song.audio_url.endsWith(".mp3") ||
        song.audio_url.endsWith(".wav") ||
        song.audio_url.endsWith(".m4a") ||
        song.audio_url.endsWith(".ogg") ||
        song.audio_url.includes("/audio/") ||
        song.audio_url.includes("supabase.co/storage"))
  );

  const hasCover = Boolean(song?.image_base64 && song.image_base64.trim() !== "");

  let cleanTitle = song?.title || "";
  cleanTitle = cleanTitle.replace(/^(lyric|lyrics|lời bài hát|loi bai hat)\s*[:-]?\s*/i, "");
  if (song?.artist) {
    const escapedArtist = song.artist.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    cleanTitle = cleanTitle.replace(new RegExp(`\\s*[-–—|•]\\s*${escapedArtist}.*$`, "i"), "");
  }
  cleanTitle = cleanTitle.trim() || song?.title || "";

  const spotifyUrl =
    song?.spotify_url && !song.spotify_url.includes("/search/")
      ? song.spotify_url
      : song
      ? `https://open.spotify.com/search/${encodeURIComponent(`${cleanTitle} ${song.artist}`.trim())}`
      : "";

  const togglePlay = () => {
    if (isDirectAudio && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    } else if (song?.slug) {
      window.location.href = `/pages/lyrics/${song.slug}`;
    } else if (spotifyUrl) {
      window.open(spotifyUrl, "_blank");
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (!song) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 p-6 md:p-8 backdrop-blur-xl shadow-xs transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 my-8">
      {/* Audio element ngầm chỉ khi có file direct stream */}
      {isDirectAudio && song.audio_url && (
        <audio
          ref={audioRef}
          src={song.audio_url}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {/* Decorative subtle ambient backdrop */}
      <div className="absolute -right-20 -top-20 w-60 h-60 bg-neutral-200/40 dark:bg-neutral-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left: Cover art & Basic info */}
        <div className="flex items-center gap-5 w-full lg:w-auto">
          <div className="relative group shrink-0">
            <div className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-md border border-neutral-200 dark:border-neutral-700 bg-neutral-900 flex items-center justify-center ${isPlaying ? 'ring-2 ring-neutral-900 dark:ring-white' : ''}`}>
              {hasCover && song.image_base64 ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={song.image_base64}
                  alt={song.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <Disc className={`w-12 h-12 text-neutral-400 ${isPlaying ? 'animate-spin' : ''}`} />
              )}
            </div>

            {/* Play button overlay - LUÔN HIỂN THỊ */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-neutral-900/90 hover:bg-neutral-800 dark:bg-white/90 dark:hover:bg-white text-white dark:text-neutral-900 flex items-center justify-center shadow-lg transition-all duration-300 scale-90 group-hover:scale-105 cursor-pointer"
              title={isPlaying ? "Tạm dừng" : "Phát 30s nghe thử"}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-current" />
              ) : (
                <Play className="w-6 h-6 fill-current ml-0.5" />
              )}
            </button>
          </div>

          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Giai điệu nổi bật</span>
            </div>

            <Link href={`/pages/lyrics/${song.slug}`}>
              <h2 className="text-xl md:text-2xl font-bold truncate text-foreground hover:underline underline-offset-4 transition-all">
                {song.title}
              </h2>
            </Link>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate mt-0.5 flex items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">{song.artist}</span>
              {song.year && <span>• {song.year}</span>}
              {song.composer && <span>• Sáng tác: {song.composer}</span>}
            </p>

            {/* Mini audio progress bar (nếu có direct stream) */}
            {isDirectAudio && (
              <div className="mt-3 flex items-center gap-3 max-w-md">
                <span className="text-xs text-neutral-500 font-mono">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={(e) => {
                    const time = parseFloat(e.target.value);
                    if (audioRef.current) {
                      audioRef.current.currentTime = time;
                      setCurrentTime(time);
                    }
                  }}
                  className="flex-1 h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-neutral-900 dark:accent-white"
                />
                <span className="text-xs text-neutral-500 font-mono">
                  {duration ? formatTime(duration) : song.duration || "--:--"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right action buttons */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
          {spotifyUrl && (
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background hover:bg-neutral-100 dark:hover:bg-neutral-800 text-foreground font-semibold text-xs transition shadow-2xs"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Spotify</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          )}

          <button
            onClick={() => setShowLyrics(!showLyrics)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm font-medium transition shadow-2xs text-foreground"
          >
            <Music className="w-4 h-4 text-neutral-500" />
            <span>{showLyrics ? "Thu gọn lời" : "Xem trích đoạn"}</span>
            {showLyrics ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <Link
            href={`/pages/lyrics/${song.slug}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 font-medium text-sm shadow-xs transition"
          >
            <span>Chi tiết</span>
          </Link>
        </div>
      </div>

      {/* Expanded Lyrics Drawer */}
      {showLyrics && (
        <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 max-h-72 overflow-y-auto pr-2 space-y-4 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
          {song.lyrics && song.lyrics.length > 0 ? (
            song.lyrics.map((sec, idx) => (
              <div key={idx} className="bg-background/80 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono block mb-1.5">
                  {sec.type}
                </span>
                <p className="whitespace-pre-line text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans font-normal">
                  {sec.content}
                </p>
              </div>
            ))
          ) : (
            <p className="text-neutral-500 italic">Chưa có dữ liệu lời bài hát chi tiết.</p>
          )}
        </div>
      )}
    </div>
  );
}
