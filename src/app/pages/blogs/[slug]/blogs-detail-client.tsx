"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogsPost } from "@/app/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { blogData } from "@/app/data/blog-data";

interface BlogsDetailClientProps {
  blog: BlogsPost;
}

export default function BlogsDetailClient({ blog }: BlogsDetailClientProps) {
  const [isTocOpen, setIsTocOpen] = useState(true);
  function generateSlug(title: string): string {
    return title
      .toLowerCase()
      .trim()
      .normalize("NFD") // Tách dấu
      .replace(/[\u0300-\u036f]/g, "") // Xóa dấu
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .replace(/[^a-z0-9\s-]/g, "") // Xóa ký tự đặc biệt
      .replace(/\s+/g, "-") // Space -> -
      .replace(/-+/g, "-"); // Nhiều - thành 1
  }
  const headings = blog.paragraphs
    .filter((para) => para.type === "title")
    .map((para) => ({
      title: para.content,
      slug: generateSlug(para.content),
    }));

  // Giả sử bạn có mảng allBlogs
  const currentIndex = blogData.findIndex((b) => b.slug === blog.slug);

  const prevBlog =
    currentIndex > 0
      ? {
          slug: blogData[currentIndex - 1].slug,
          title: blogData[currentIndex - 1].title,
        }
      : undefined;

  const nextBlog =
    currentIndex < blogData.length - 1
      ? {
          slug: blogData[currentIndex + 1].slug,
          title: blogData[currentIndex + 1].title,
        }
      : undefined;

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

      {/* MỤC LỤC */}
      {headings.length > 0 && (
        <div className="my-12 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Mục lục
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
              {headings.map((heading, index) => (
                <li key={index} className="ml-4">
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

      {/* Nội dung bài viết - từ paragraphs[1] trở đi */}
      <article className="space-y-8 leading-relaxed text-gray-800 dark:text-gray-300">
        {blog.paragraphs.slice(1).map((para, idx) => {
          const originalIdx = idx + 1;

          const slug =
            para.type === "title" ? generateSlug(para.content) : undefined;

          if (para.type === "title") {
            return (
              <h2
                key={originalIdx}
                id={slug} // ← Thêm id để link nhảy đến
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
                className="w-full my-8 max-h-screen rounded-2xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={para.content}
                  alt={`Hình ảnh ${originalIdx + 1}`}
                  layout="responsive" // quan trọng: thay fill bằng responsive
                  width={1920} // bất kỳ số nào cũng được, chỉ để khai báo tỉ lệ
                  height={1080} // giữ nguyên tỉ lệ ảnh gốc càng tốt
                  className="object-contain object-top"
                  sizes="100vw"
                  quality={90}
                  priority={originalIdx <= 1}
                  style={{ maxHeight: "100vh", width: "100%", height: "auto" }}
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
                  rel="noopener noreferrer nofollow" // Thêm nofollow cho link ngoài để tránh pass link juice không cần thiết, đồng thời noopener noreferrer cho bảo mật và privacy
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
      {/* NAVIGATION: Bài trước & Bài tiếp theo */}
      {(prevBlog || nextBlog) && (
        <div className="flex flex-col sm:flex-row gap-6 my-20 border-t border-gray-200 dark:border-gray-700 pt-10">
          {/* Bài trước - Bên trái */}
          {prevBlog && (
            <Link
              href={`/pages/blogs/${prevBlog.slug}`}
              className="group flex-1 flex items-center gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
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
                  Bài trước
                </p>
                <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 transition-colors">
                  {prevBlog.title}
                </p>
              </div>
            </Link>
          )}

          {/* Placeholder để căn giữa khi chỉ có 1 bên */}
          {!prevBlog && !nextBlog && <div className="flex-1" />}

          {/* Bài tiếp theo - Bên phải */}
          {nextBlog && (
            <Link
              href={`/pages/blogs/${nextBlog.slug}`}
              className="group flex-1 flex flex-row-reverse items-center gap-4 p-6  rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 justify-end text-right"
            >
              <div className="order-2 text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Bài tiếp theo
                </p>
                <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 transition-colors">
                  {nextBlog.title}
                </p>
              </div>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
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
