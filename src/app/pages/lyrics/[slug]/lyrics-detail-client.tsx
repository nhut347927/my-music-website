"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, Calendar, Eye, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LyricPost } from "@/app/types/type";
import { lyricsData } from "@/app/data/lyrics-data"; // Import danh sách lyrics để tìm gợi ý

interface LyricsDetailClientProps {
  song: LyricPost;
}

export default function LyricsDetailClient({ song }: LyricsDetailClientProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Format thời gian: giây → mm:ss
  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Xử lý Play/Pause
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Cập nhật thời gian
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Kéo thanh seek
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Lấy duration khi metadata load
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Reset khi đổi bài hát
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
  }, [song.audio]);

  // Tìm bài hát trước/sau để gợi ý liên quan
  const currentIndex = lyricsData.findIndex((l) => l.slug === song.slug);

  const prevSong =
    currentIndex > 0
      ? {
          slug: lyricsData[currentIndex - 1].slug,
          title: lyricsData[currentIndex - 1].title,
          artist: lyricsData[currentIndex - 1].artist,
        }
      : undefined;

  const nextSong =
    currentIndex < lyricsData.length - 1
      ? {
          slug: lyricsData[currentIndex + 1].slug,
          title: lyricsData[currentIndex + 1].title,
          artist: lyricsData[currentIndex + 1].artist,
        }
      : undefined;

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-6">
      {/* Ẩn audio element */}
      <audio
        ref={audioRef}
        src={song.audio}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Phần chính */}
      <div className="flex-2 space-y-8">
        {/* Section 1: Info + Player */}
        <div className="flex flex-col sm:flex-row items-start gap-8 relative">
          <div className="w-56 h-56 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-xl">
            <Image
              src={song.image}
              alt={`${song.title} - ${song.artist}`}
              width={250}
              height={250}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between h-full">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-black dark:text-white">
                {song.title}
              </h1>
              <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mb-4">
                {song.artist}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {song?.categories?.map((cat, i) => (
                  <span
                    key={i}
                    className="inline-block text-[11px] border border-neutral-300 dark:border-neutral-700
                      px-2.5 py-[3px] rounded-full text-neutral-500 dark:text-neutral-400 tracking-tight"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-6">
                <p className="text-gray-500 dark:text-gray-400 text-base flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" /> {song.year}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4" /> {song.views.toLocaleString()}
                </p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-base flex items-center gap-2">
                <Clock className="w-4 h-4" /> {song.duration}
              </p>
            </div>

            {/* Thanh phát nhạc */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm text-gray-600 dark:text-gray-400 w-12">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-2 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                style={{ accentColor: "black" }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-400 w-12">
                {formatTime(duration)}
              </span>
              <button
                onClick={togglePlayPause}
                className="h-14 aspect-square flex items-center justify-center rounded-full border border-gray-700 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 text-black dark:text-white" />
                ) : (
                  <Play className="ml-1 w-7 h-7 text-black dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Lời bài hát */}
        <div className="max-w-6xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Lời bài hát
          </h2>
          <div className="space-y-6">
            {song.lyrics.map((lyric, idx) => (
              <div key={idx} className="space-y-4">
                <p className="font-semibold text-gray-700 dark:text-gray-300 text-lg">
                  {lyric.type}
                </p>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line text-base">
                  {lyric.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Cảm nghĩ */}
        <div className="flex items-start gap-6 my-16 max-w-3xl py-4">
          <Avatar className="w-16 h-16">
            <AvatarImage className="object-cover" src={song.userCommentAvatar} alt={song.userNameComment || "User"} />
            <AvatarFallback>{song.userNameComment?.[0] || "N"}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-xl font-bold text-black dark:text-white">
              {song.userNameComment}
              <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
                {song.userRoleComment && ` (${song.userRoleComment})`}
              </span>
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200 relative pl-6">
              <span className="absolute -left-4 top-0 text-4xl text-gray-300 dark:text-gray-600 select-none">
                “
              </span>
              {song.comment}
              <span className="absolute -right-4 bottom-0 text-4xl text-gray-300 dark:text-gray-600 select-none">
                ”
              </span>
            </p>
          </div>
        </div>

        {/* GỢI Ý LIÊN QUAN: Bài hát trước & Bài hát tiếp theo */}
        {(prevSong || nextSong) && (
          <div className="flex flex-col sm:flex-row gap-6 my-20 border-t border-gray-200 dark:border-gray-700 pt-10">
            {/* Bài hát trước */}
            {prevSong && (
              <Link
                href={`/pages/lyrics/${prevSong.slug}`}
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
                    Bài hát trước
                  </p>
                  <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 transition-colors">
                    {prevSong.title} - {prevSong.artist}
                  </p>
                </div>
              </Link>
            )}

            {/* Placeholder để căn giữa nếu chỉ có một bên */}
            {!prevSong && nextSong && <div className="flex-1" />}

            {/* Bài hát tiếp theo */}
            {nextSong && (
              <Link
                href={`/pages/lyrics/${nextSong.slug}`}
                className="group flex-1 flex  items-center gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 justify-end text-right"
              >
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Bài hát tiếp theo
                  </p>
                  <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 transition-colors">
                    {nextSong.title} - {nextSong.artist}
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

      {/* Phần phụ (giữ nguyên) */}
      <div className="flex-1 max-w-sm mx-auto space-y-8">
        <div className="flex flex-col items-center space-y-8">
          <Image
            src={song.singerPhoto}
            alt={song.artist}
            width={192}
            height={192}
            className="object-cover rounded-full aspect-square"
          />
          <div className="space-y-3 w-full">
            <p className="text-2xl font-bold text-black dark:text-white">{song.title}</p>
            <p className="text-gray-500 dark:text-gray-400 text-lg">{song.artist}</p>
            <p className="text-gray-500 dark:text-gray-400 text-base">Composer: {song.composer}</p>
            <p className="text-gray-500 dark:text-gray-400 text-base">Producer: {song.producer}</p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
            Bài hát khác của ca sĩ
          </h3>
          <ul className="space-y-2">
            {song.otherSongs.map((title, idx) => (
              <li
                key={idx}
                className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer text-base font-medium border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2"
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}