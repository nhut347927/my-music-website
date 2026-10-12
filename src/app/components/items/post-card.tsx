"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Music, Disc, BookOpen, Heart } from "lucide-react";
import dayjs from "dayjs";
import { Post } from "@/app/types/type";
import Link from "next/link";
import defaultTree from "@/app/asset/tree2.jpg";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`fav_${post.type}_${post.slug}`);
      if (saved === "true") setIsFavorite(true);
    } catch {}
  }, [post.slug, post.type]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const next = !isFavorite;
    setIsFavorite(next);
    try {
      if (next) {
        localStorage.setItem(`fav_${post.type}_${post.slug}`, "true");
      } else {
        localStorage.removeItem(`fav_${post.type}_${post.slug}`);
      }
    } catch {}
  };

  const hasValidImage = Boolean(
    post.image &&
      (typeof post.image === "object" ||
        (typeof post.image === "string" && post.image.trim() !== ""))
  );

  const imageSrc = hasValidImage ? post.image : defaultTree;

  // Type badge styling (Minimalist Monochrome)
  const typeBadgeConfig = {
    lyrics: {
      label: "Lyrics",
      icon: Music,
      color: "bg-neutral-900/90 text-white border-neutral-700 dark:bg-white/90 dark:text-neutral-900 dark:border-neutral-300",
    },
    playlists: {
      label: "Playlist",
      icon: Disc,
      color: "bg-neutral-900/90 text-white border-neutral-700 dark:bg-white/90 dark:text-neutral-900 dark:border-neutral-300",
    },
    blogs: {
      label: "Blog",
      icon: BookOpen,
      color: "bg-neutral-900/90 text-white border-neutral-700 dark:bg-white/90 dark:text-neutral-900 dark:border-neutral-300",
    },
  }[post.type] || {
    label: "Bài viết",
    icon: Music,
    color: "bg-neutral-900/90 text-white border-neutral-700 dark:bg-white/90 dark:text-neutral-900 dark:border-neutral-300",
  };

  const TypeIcon = typeBadgeConfig.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.018, y: -3 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="
        group p-3 sm:p-3.5 rounded-3xl overflow-hidden 
        bg-background/80 dark:bg-neutral-900/80 
        border border-neutral-200/80 dark:border-neutral-800/80
        shadow-[0_4px_20px_rgba(0,0,0,0.03)] 
        hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] 
        transition-all duration-300 backdrop-blur-md flex flex-col justify-between
      "
    >
      <div>
        {/* ẢNH & BADGE TRÊN ẢNH */}
        <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-108"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Type Badge on Top-Left */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md shadow-md ${typeBadgeConfig.color}`}
            >
              <TypeIcon className="w-3 h-3" />
              <span>{typeBadgeConfig.label}</span>
            </span>
          </div>

          {/* Favorite Heart Button on Top-Right */}
          <button
            type="button"
            onClick={toggleFavorite}
            className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
              isFavorite
                ? "bg-white text-black dark:bg-neutral-900 dark:text-white shadow-md scale-110"
                : "bg-black/40 hover:bg-black/70 text-white/80 hover:text-white"
            }`}
            title={isFavorite ? "Đã lưu yêu thích" : "Lưu vào danh sách yêu thích"}
          >
            <Heart
              className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`}
            />
          </button>
        </div>

        {/* NỘI DUNG */}
        <div className="mt-3.5 mb-1 px-1">
          {/* 🏷️ CATEGORY (hiển thị tối đa 3) */}
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {post?.categories?.slice(0, 3).map((cat, i) => (
              <span
                key={i}
                className="inline-block text-[10.5px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-800/60 px-2 py-0.5 rounded-full text-neutral-600 dark:text-neutral-400 font-medium tracking-tight"
              >
                {cat.name}
              </span>
            ))}
          </div>

          {/* TIÊU ĐỀ */}
          <Link href={post.id ? `/pages/${post.type}/${post.slug}` : "#"}>
            <h3 className="text-sm sm:text-base font-bold mb-1.5 text-foreground leading-snug line-clamp-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
              {post.title}
            </h3>
          </Link>

          {/* HIỂN THỊ THEO LOẠI */}
          {post.type === "lyrics" && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 font-medium">
              Ca sĩ: <strong className="text-foreground font-semibold">{post.artist}</strong>
            </p>
          )}

          {post.type === "playlists" && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 font-medium">
              {post.songs?.length || 0} bài hát {post.mood ? `• ${post.mood}` : ""}
            </p>
          )}

          {post.type === "blogs" && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 font-medium">
              {post.userNameComment ? `Tác giả: ${post.userNameComment}` : "Bài viết cảm nhận âm nhạc"}
            </p>
          )}
        </div>
      </div>

      {/* NGÀY & LƯỢT XEM */}
      <div className="flex items-center justify-between text-[11px] text-neutral-400 dark:text-neutral-500 mt-3 pt-2.5 border-t border-neutral-200/60 dark:border-neutral-800/60 px-1">
        <span>
          {post.date && dayjs(post.date).isValid()
            ? dayjs(post.date).format("MMM DD, YYYY")
            : "2025-01-01"}
        </span>

        <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 font-mono">
          <Eye className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
          <span>{(post.views || 0).toLocaleString("vi-VN")}</span>
        </div>
      </div>
    </motion.div>
  );
}
