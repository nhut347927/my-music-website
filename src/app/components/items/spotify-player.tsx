"use client";

import React, { useState } from "react";
import { Radio, ExternalLink, Search, Maximize2, Minimize2 } from "lucide-react";
import { resolveSpotifyEmbedUrl, extractSpotifyTrackId } from "@/lib/spotify-api";

interface Spotify30sPlayerProps {
  audioUrl?: string | null;
  spotifyTrackId?: string;
  spotifyUrl?: string;
  title?: string;
  artist?: string;
  coverImage?: string;
  compact?: boolean;
}

/**
 * Chuẩn hóa tên bài hát để tạo từ khóa tìm kiếm Spotify chuẩn xác
 */
function cleanSongTitle(title: string, artist: string): string {
  let clean = title || "";
  clean = clean.replace(/^(lyric|lyrics|lời bài hát|loi bai hat)\s*[:-]?\s*/i, "");
  if (artist) {
    const escapedArtist = artist.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    clean = clean.replace(new RegExp(`\\s*[-–—|•]\\s*${escapedArtist}.*$`, "i"), "");
  }
  return clean.trim() || title;
}

export default function Spotify30sPlayer({
  audioUrl,
  spotifyTrackId,
  spotifyUrl,
  title = "Bài hát",
  artist = "Nghệ sĩ",
  compact = false,
}: Spotify30sPlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Phân tích và tạo Spotify Embed URL chuẩn xác nhất
  const embedUrl =
    resolveSpotifyEmbedUrl(spotifyUrl) ||
    resolveSpotifyEmbedUrl(spotifyTrackId) ||
    resolveSpotifyEmbedUrl(audioUrl);

  const cleanTitle = cleanSongTitle(title, artist);
  const searchKeywords = `${cleanTitle} ${artist}`.trim();
  const encodedQuery = encodeURIComponent(searchKeywords);

  // Đường link trực tiếp mở Spotify
  const trackId = spotifyTrackId ? extractSpotifyTrackId(spotifyTrackId) : "";
  const directSpotifyUrl =
    spotifyUrl && !spotifyUrl.includes("<iframe") && !spotifyUrl.includes("/search/")
      ? spotifyUrl
      : trackId && trackId.length >= 10
      ? `https://open.spotify.com/track/${trackId}`
      : `https://open.spotify.com/search/${encodedQuery}`;

  return (
    <div className="w-full space-y-2">
      {embedUrl ? (
        <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-[#1DB954]/30 bg-neutral-950/80 backdrop-blur-xl transition-all duration-300 group hover:border-[#1DB954]/50">
          {/* Thanh tiêu đề & điều khiển nhanh */}
          <div className="px-4 py-2.5 bg-gradient-to-r from-[#1DB954]/15 via-neutral-900/90 to-neutral-900 flex items-center justify-between gap-3 border-b border-[#1DB954]/20">
            <div className="flex items-center gap-2 min-w-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1DB954]/20 text-[#1DB954] text-[11px] font-bold uppercase tracking-wider border border-[#1DB954]/30 shrink-0">
                <Radio className="w-3.5 h-3.5 animate-pulse text-[#1DB954]" />
                <span>Spotify Embed</span>
              </span>
              <span className="text-xs text-neutral-300 truncate hidden sm:inline">
                {cleanTitle} • <strong className="text-white">{artist}</strong>
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {!compact && (
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-[#1DB954] px-2.5 py-1 rounded-lg hover:bg-neutral-800/80 transition cursor-pointer"
                  title={isExpanded ? "Chuyển sang dạng nhỏ gọn (152px)" : "Chuyển sang dạng mở rộng (352px)"}
                >
                  {isExpanded ? (
                    <>
                      <Minimize2 className="w-3 h-3" />
                      <span>Dạng nhỏ (152px)</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-3 h-3" />
                      <span>Dạng lớn (352px)</span>
                    </>
                  )}
                </button>
              )}

              {directSpotifyUrl && (
                <a
                  href={directSpotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black text-xs font-bold transition transform hover:scale-105 shadow-xs"
                  title="Mở ứng dụng hoặc trang web Spotify"
                >
                  <Radio className="w-3 h-3" />
                  <span>Mở Spotify</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
            </div>
          </div>

          {/* Khung nhúng Spotify iframe chính thức */}
          <div className="p-1.5 bg-neutral-950">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src={embedUrl}
              width="100%"
              height={compact ? "80" : isExpanded ? "352" : "152"}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full transition-all duration-300 border-0 block"
            />
          </div>
        </div>
      ) : (
        <div className="w-full p-4 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-md shadow-md text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#1DB954]/20 text-[#1DB954] shrink-0">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Nghe bài hát &quot;{cleanTitle}&quot; trên Spotify
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Mở ứng dụng hoặc trang web Spotify để thưởng thức bản thu đầy đủ và chất lượng cao.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={directSpotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-black text-xs font-bold transition shadow-xs"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Tìm trên Spotify</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
