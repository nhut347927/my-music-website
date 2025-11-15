"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Calendar, Eye, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LyricPost } from "@/app/types/type";

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

  // Xử lý khi nhấn Play/Pause
  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Cập nhật thời gian khi audio đang chạy
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Cập nhật thanh range khi kéo
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Khi metadata load xong → lấy duration
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Reset khi đổi bài (nếu cần)
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
  }, [song.audio]);

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
        {/* Section 1 */}
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
                  <Eye className="w-4 h-4" /> {song.views}
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

              {/* Nút Play/Pause */}
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
        <div className="max-w-6xl mx-auto px-4 space-y-4">
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
      </div>

      {/* Phần phụ */}
      <div className="flex-1 max-w-sm mx-auto space-y-8">
        <div className="flex flex-col items-center space-y-8">
          <Image
            src={song.singerPhoto}
            alt={song.artist}
            width={192}
            height={192}
            className="object-cover rounded-full aspect-square"
          />
          <div className="space-y-3 w-full px-4">
            <p className="text-2xl font-bold text-black dark:text-white">{song.title}</p>
            <p className="text-gray-500 dark:text-gray-400 text-lg">{song.artist}</p>
            <p className="text-gray-500 dark:text-gray-400 text-base">Composer: {song.composer}</p>
            <p className="text-gray-500 dark:text-gray-400 text-base">Producer: {song.producer}</p>
          </div>
        </div>

        <div className="space-y-2 ps-4">
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