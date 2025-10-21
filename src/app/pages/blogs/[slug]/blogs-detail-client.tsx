"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogsPost } from "@/app/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogsDetailClientProps {
  blog: BlogsPost;
}

export default function BlogsDetailClient({ blog }: BlogsDetailClientProps) {
  return (
    <div className="max-w-6xl mx-auto mt-14 space-y-16">
      {/* Ảnh banner */}
      <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center p-8 sm:p-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center drop-shadow-md">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Thông tin cơ bản */}
      <div className="text-center space-y-3">
        <div className="flex flex-wrap justify-center gap-2">
          {blog.categories.map((cat, idx) => (
            <span
              key={idx}
              className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {cat?.name}
            </span>
          ))}
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm">
          👁 {blog.views.toLocaleString()} lượt xem
          {blog.date &&
            ` • 🗓 ${new Date(blog.date).toLocaleDateString("vi-VN")}`}
        </p>
      </div>

      {/* Nội dung bài viết */}
      <article className="space-y-8 leading-relaxed text-gray-800 dark:text-gray-300">
        {blog.paragraphs.map((para, idx) => {
          if (para.type === "title") {
            return (
              <h2
                key={idx}
                className="text-2xl sm:text-3xl font-bold my-6 text-center"
              >
                {para.content}
              </h2>
            );
          }
          if (para.type === "text") {
            return (
              <p
                key={idx}
                className="text-base sm:text-lg text-justify leading-relaxed"
              >
                {para.content}
              </p>
            );
          }
          if (para.type === "image") {
            return (
              <div key={idx} className="relative w-full h-80 sm:h-96 my-6">
                <Image
                  src={para.content}
                  alt={`Hình ảnh ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            );
          }
          if (para.type === "link") {
            return (
              <p key={idx} className="text-center my-4">
                <Link
                  href={para.content}
                  className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700"
                  target="_blank"
                >
                  {para.content}
                </Link>
              </p>
            );
          }
          return null;
        })}
      </article>

      {/* Section 3: Cảm nghĩ */}
      <div className="flex items-start gap-6 my-16 rounded-2xl max-w-6xl py-4">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src={blog?.userCommentAvatar}
            alt={blog?.userNameComment || "User"}
          />
          <AvatarFallback>{blog?.userNameComment?.[0] || "N"}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="text-xl font-bold text-black dark:text-white">
            {blog?.userNameComment}
            <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
              {blog?.userRoleComment && ` (${blog.userRoleComment})`}
            </span>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-800 dark:text-gray-200 relative pl-6">
            <span className="absolute -left-4 top-0 text-4xl text-gray-300 dark:text-gray-600 select-none">
              “
            </span>
            {blog?.comment}
            <span className="absolute -right-4 bottom-0 text-4xl text-gray-300 dark:text-gray-600 select-none">
              ”
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}