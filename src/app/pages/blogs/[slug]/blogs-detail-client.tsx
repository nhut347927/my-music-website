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
      {/* Phần 50:50 - Thông tin bên TRÁI + Ảnh bên PHẢI */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Bên TRÁI: Tiêu đề + Danh mục + Lượt xem + Đoạn đầu */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Tiêu đề */}
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {blog.title}
          </h1>

          {/* Danh mục */}
          <div className="flex flex-wrap gap-2">
            {blog.categories.map((cat, idx) => (
              <span
                key={idx}
                className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
              >
                {cat?.name}
              </span>
            ))}
          </div>

          {/* Lượt xem + ngày */}
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            👁 {blog.views.toLocaleString()} lượt xem
            {blog.date &&
              ` • 🗓 ${new Date(blog.date).toLocaleDateString("vi-VN")}`}
          </p>

          {/* Đoạn văn đầu tiên (paragraphs[0]) - chỉ nếu là text */}
          {blog.paragraphs[0]?.type === "text" && (
            <p
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: blog.paragraphs[0].content }}
            />
          )}
        </div>

        {/* Bên PHẢI: Hình ảnh banner */}
        <div className="relative w-full h-full min-h-[20rem] rounded-2xl overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Nội dung bài viết - từ paragraphs[1] trở đi */}
      <article className="space-y-8 leading-relaxed text-gray-800 dark:text-gray-300">
        {blog.paragraphs.slice(1).map((para, idx) => {
          const originalIdx = idx + 1;

          if (para.type === "title") {
            return (
              <h2
                key={originalIdx}
                className="text-2xl sm:text-3xl font-bold my-6 text-center"
              >
                {para.content}
              </h2>
            );
          }
          if (para.type === "text") {
            return (
              <p
                key={originalIdx}
                className="text-base sm:text-lg text-justify leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: para.content }}
              />
            );
          }
          if (para.type === "image") {
            return (
              <div
                key={originalIdx}
                className="relative w-full h-80 sm:h-[80vh] my-6"
              >
                <Image
                  src={para.content}
                  alt={`Hình ảnh ${originalIdx}`}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            );
          }
          if (para.type === "link") {
            return (
              <p key={originalIdx} className="text-center my-4">
                <Link
                  href={para.content}
                  className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 break-words whitespace-pre-wrap"
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

      {/* Section: Cảm nghĩ */}
      <div className="flex items-start gap-6 my-16 rounded-2xl max-w-6xl py-4">
        <Avatar className="w-16 h-16 flex-shrink-0">
          <AvatarImage
            className="object-cover"
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

            <span dangerouslySetInnerHTML={{ __html: blog?.comment }} />
            <span className="absolute -right-4 bottom-0 text-4xl text-gray-300 dark:text-gray-600 select-none">
              ”
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
