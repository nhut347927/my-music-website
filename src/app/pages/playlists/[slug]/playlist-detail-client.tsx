"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlaylistPost } from "@/app/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { playlistsData } from "@/app/data/playlists-data";

interface PlaylistDetailClientProps {
  playlist: PlaylistPost;
}

export default function PlaylistDetailClient({
  playlist,
}: PlaylistDetailClientProps) {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Tạo mục lục từ tên các bài hát trong playlist (tương tự heading trong blog)
  const headings = playlist.songs.map((song, index) => ({
    index: index + 1,
    title: song.name,
    slug: `song-${index + 1}`,
  }));

  // Tìm bài playlist trước/sau để gợi ý liên quan
  const currentIndex = playlistsData.findIndex((p) => p.slug === playlist.slug);

  const prevPlaylist =
    currentIndex > 0
      ? {
          slug: playlistsData[currentIndex - 1].slug,
          title: playlistsData[currentIndex - 1].title,
        }
      : undefined;

  const nextPlaylist =
    currentIndex < playlistsData.length - 1
      ? {
          slug: playlistsData[currentIndex + 1].slug,
          title: playlistsData[currentIndex + 1].title,
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
      
      {/* Description đầy đủ */}
      <div className="text-justify space-y-6 leading-relaxed text-gray-800 dark:text-gray-300">
        <p className="text-base sm:text-lg whitespace-pre-line">
          {playlist.description}
        </p>
      </div>

      {/* MỤC LỤC - Danh sách bài hát */}
      {headings.length > 0 && (
        <div className="my-12 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Danh sách bài hát ({headings.length} bài)
            </h3>
            <button
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              {isTocOpen ? "Ẩn" : "Hiện"}
            </button>
          </div>

          {isTocOpen && (
            <ol className="space-y-3 list-decimal list-inside text-base text-gray-700 dark:text-gray-300">
              {headings.map((heading) => (
                <li key={heading.index} className="ml-4">
                  <a
                    href={`#${heading.slug}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
                  >
                    {heading.title}
                  </a>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}

      {/* Danh sách bài hát chi tiết */}
      <div className="space-y-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white text-center tracking-tight">
          Nghe playlist ngay
        </h2>

        <ul className="space-y-20">
          {playlist.songs.map((song, idx) => (
            <li
              key={idx}
              id={`song-${idx + 1}`} // Anchor cho mục lục nhảy đến
              className="space-y-6 scroll-mt-24"
            >
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white leading-tight">
                  {idx + 1}. {song.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                  {song.desc}
                </p>
              </div>

              <div className="w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-gray-200/30 dark:ring-gray-700/50 shadow-lg">
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
        <div className="text-justify my-20 py-10 border-t border-gray-200 dark:border-gray-700">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal whitespace-pre-line">
            {playlist.final}
          </p>
        </div>
      )}

      {/* NAVIGATION: Playlist trước & Playlist tiếp theo */}
      {(prevPlaylist || nextPlaylist) && (
        <div className="flex flex-col sm:flex-row gap-6 my-20 border-t border-gray-200 dark:border-gray-700 pt-10">
          {/* Playlist trước */}
          {prevPlaylist && (
            <Link
              href={`/pages/playlists/${prevPlaylist.slug}`}
              className="group flex-1 flex items-center gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Playlist trước
                </p>
                <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 transition-colors">
                  {prevPlaylist.title}
                </p>
              </div>
            </Link>
          )}

          {/* Placeholder để căn giữa khi chỉ có 1 bên */}
          {!prevPlaylist && nextPlaylist && <div className="flex-1" />}

          {/* Playlist tiếp theo */}
          {nextPlaylist && (
            <Link
              href={`/pages/playlists/${nextPlaylist.slug}`}
              className="group flex-1 flex  items-center gap-4 p-6  rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 justify-end text-right"
            >
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Playlist tiếp theo
                </p>
                <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 transition-colors">
                  {nextPlaylist.title}
                </p>
              </div>
              <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
