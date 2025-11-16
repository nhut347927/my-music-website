"use client";

import Image from "next/image";
import { PlaylistPost } from "@/app/types/type";

interface PlaylistDetailClientProps {
  playlist: PlaylistPost;
}

export default function PlaylistDetailClient({
  playlist,
}: PlaylistDetailClientProps) {
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

  return (
    <div className="max-w-6xl mx-auto mt-14 space-y-16">
      {/* Banner */}
      <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden">
        <Image
          src={playlist.banner}
          alt={playlist.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center p-8 sm:p-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center drop-shadow-md">
            {playlist.title}
          </h1>
        </div>
      </div>
  {/* Thông tin cơ bản */}
      <div className="text-center space-y-3">
        <div className="flex flex-wrap justify-center gap-2">
          {playlist.categories.map((cat, idx) => (
            <span
              key={idx}
              className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {cat?.name}
            </span>
          ))}
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm">
          👁 {playlist.views.toLocaleString()} lượt xem
          {playlist.date &&
            ` • 🗓 ${new Date(playlist.date).toLocaleDateString("vi-VN")}`}
        </p>
      </div>
      {/* Description */}
      <div className="text-justify space-y-4">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal whitespace-pre-line">
          {playlist.description}
        </p>
      </div>

      {/* Song List */}
      <div className="space-y-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white text-center tracking-tight">
          Danh sách bài hát
        </h2>

        <ul className="space-y-16">
          {playlist.songs.map((song, idx) => (
            <li key={idx} className="space-y-6">
              <div className="space-y-3 text-justify">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white leading-tight">
                  {song.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                  {song.desc}
                </p>
              </div>
              <div className="w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-gray-200/30 dark:ring-gray-700/50">
                <iframe
                  src={getEmbedUrl(song.youtube)}
                  title={song.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Final Note */}
      {playlist.final && (
        <div className="text-justify my-20">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal whitespace-pre-line">
  {playlist.final}
</p>

        </div>
      )}
    </div>
  );
}