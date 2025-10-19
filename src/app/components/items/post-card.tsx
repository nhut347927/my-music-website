"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eye } from "lucide-react";
import dayjs from "dayjs";
import { Post } from "@/app/types/type";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, y: -2 }}
      transition={{ type: "spring", stiffness: 180, damping: 15 }}
      className="
        p-3 rounded-2xl overflow-hidden 
        bg-white dark:bg-neutral-900 
        shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
        hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] 
        transition-all duration-300
      "
    >
      {/* ẢNH */}
      <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* NỘI DUNG */}
      <div className="mt-3 mb-1">
        {/* 🏷️ CATEGORY (hiển thị tối đa 3) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.slice(0, 3).map((cat, i) => (
            <span
              key={i}
              className="inline-block text-[11px] border border-neutral-300 dark:border-neutral-700 
                px-2.5 py-[3px] rounded-full text-neutral-500 dark:text-neutral-400 tracking-tight"
            >
              {cat.name}
            </span>
          ))}
        </div>

        {/* TIÊU ĐỀ */}
        <Link href={post.id ? `/pages/${post.type}/detail?id=${post.id}` : "#"}>
        <h3 className="text-sm sm:text-base font-medium mb-3 text-neutral-900 dark:text-neutral-100 leading-tight line-clamp-2 hover:underline">
          {post.title}
        </h3></Link>

        {/* HIỂN THỊ THEO LOẠI */}
        {post.type === "lyrics" && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
            {post.artist}
          </p>
        )}

        {post.type === "playlists" && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
            {post.songs.length} bài hát {post.mood ? `• ${post.mood}` : ""}
          </p>
        )}

        {post.type === "blogs" && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
            {post.userNameComment ? `Tác giả: ${post.userNameComment}` : "Bài viết blog"}
          </p>
        )}

        {/* NGÀY & LƯỢT XEM */}
        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-3">
          <span>
            {post.date && dayjs(post.date).isValid()
              ? dayjs(post.date).format("MMM DD, YYYY")
              : "Unknown date"}
          </span>

          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span>{post.views}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
