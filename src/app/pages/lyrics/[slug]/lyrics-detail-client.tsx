"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Play, Calendar, Eye, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LyricPost } from "@/app/types/type";

interface LyricsDetailClientProps {
  song: LyricPost;
}

export default function LyricsDetailClient({ song }: LyricsDetailClientProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 mt-6">
      {/* Phần chính */}
      <div className="flex-2 space-y-8">
        {/* Section 1 */}
        <div className="flex flex-col sm:flex-row items-start gap-8 relative">
          <span className="absolute right-8 text-gray-500 dark:text-gray-400 text-base flex items-center">
            <Eye className="w-4 h-4 mr-2" />
            {song.views}
          </span>
          <div className="w-56 h-56 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-xl">
            <Image
              src={song.image}
              alt={`${song.title} - ${song.artist}`}
              width={224}
              height={224}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between h-full">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-black dark:text-white my-3">
                {song.title}
              </h1>
              <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mb-8">
                {song.artist}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4" /> {song.year}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base flex items-center gap-2">
                <Clock className="w-4 h-4" /> {song.duration}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={0}
                max={30}
                step={0.1}
                defaultValue={0}
                className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                style={{ accentColor: "black" }}
              />
              <span>00:30</span>
              <span className="h-14 aspect-square flex items-center justify-center rounded-full border border-gray-700 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                <Play className="-mr-0.5 w-7 h-7 text-black dark:text-white" />
              </span>
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
        <div className="flex items-start gap-6 my-16 rounded-2xl max-w-3xl py-4">
          <Avatar className="w-16 h-16">
            <AvatarImage
              src={song.userCommentAvatar}
              alt={song.userNameComment || "User"}
            />
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
            <p className="text-2xl font-bold text-black dark:text-white">
              {song.title}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {song.artist}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-base">
              Composer: {song.composer}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-base">
              Producer: {song.producer}
            </p>
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