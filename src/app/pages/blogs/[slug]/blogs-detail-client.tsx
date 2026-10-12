"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Eye,
  Calendar,
  Clock,
  ChevronRight,
  ListOrdered,
  Sparkles,
  Quote,
} from "lucide-react";
import { BlogsPost } from "@/app/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getBlogs } from "@/services/music-supabase-service";
import { usePostViewTracker } from "@/hooks/use-post-view-tracker";
import defaultTree from "@/app/asset/tree1.jpg";
import ReadingProgressBar from "@/app/components/items/reading-progress-bar";
import ShareActions from "@/app/components/items/share-actions";
import EmotionReactions from "@/app/components/items/emotion-reactions";

interface BlogsDetailClientProps {
  blog: BlogsPost;
}

export default function BlogsDetailClient({ blog }: BlogsDetailClientProps) {
  const { views } = usePostViewTracker({
    type: "blogs",
    slug: blog.slug,
    initialViews: blog.views || 0,
  });

  const [isTocOpen, setIsTocOpen] = useState(true);
  const [allBlogs, setAllBlogs] = useState<Array<{ slug: string; title: string }>>([]);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const res = await getBlogs({ limit: 100, onlyActive: true });
        if (res && res.data) {
          setAllBlogs(res.data.map((b) => ({ slug: b.slug, title: b.title })));
        }
      } catch (err) {
        console.warn("Notice loading blogs list:", err);
      }
    }
    loadBlogs();
  }, []);

  function generateSlug(title: string): string {
    return title
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  const headings = blog.paragraphs
    .filter((para) => para.type === "title")
    .map((para) => ({
      title: para.content,
      slug: generateSlug(para.content),
    }));

  // Ước tính thời gian đọc
  const totalWords = blog.paragraphs
    .filter((p) => p.type === "text")
    .map((p) => p.content.replace(/<[^>]*>?/gm, ""))
    .join(" ")
    .split(/\s+/).length;
  const readTimeMinutes = Math.max(1, Math.ceil(totalWords / 180));

  const currentIndex = allBlogs.findIndex((b) => b.slug === blog.slug);

  const prevBlog =
    currentIndex > 0
      ? {
          slug: allBlogs[currentIndex - 1].slug,
          title: allBlogs[currentIndex - 1].title,
        }
      : undefined;

  const nextBlog =
    currentIndex !== -1 && currentIndex < allBlogs.length - 1
      ? {
          slug: allBlogs[currentIndex + 1].slug,
          title: allBlogs[currentIndex + 1].title,
        }
      : undefined;

  const imageSrc = Boolean(
    blog.image &&
      (typeof blog.image === "object" ||
        (typeof blog.image === "string" && blog.image.trim() !== ""))
  )
    ? blog.image
    : defaultTree;

  return (
    <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20 my-8 md:my-12 animate-in fade-in duration-300">
      {/* Scroll Reading Progress Bar */}
      <ReadingProgressBar colorClassName="from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500" />

      {/* BREADCRUMB */}
      <nav className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
        <Link href="/" className="hover:text-foreground transition">
          Trang chủ
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <Link href="/pages/blogs" className="hover:text-foreground transition">
          Blogs
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <span className="text-foreground font-semibold truncate max-w-xs sm:max-w-md">
          {blog.title}
        </span>
      </nav>

      {/* HERO SECTION 50:50 */}
      <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-linear-to-br from-background via-neutral-50/50 to-neutral-100/50 dark:via-neutral-900/30 dark:to-neutral-900/60 backdrop-blur-xl shadow-xs">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Bên TRÁI (7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Blog Âm Nhạc</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs font-mono flex items-center gap-1 border border-neutral-200/60 dark:border-neutral-700/60">
                <Clock className="w-3 h-3 text-neutral-400" />
                <span>~{readTimeMinutes} phút đọc</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-2 pt-1">
              {blog.categories.map((cat, idx) => (
                <Link
                  key={idx}
                  href={`/pages/blogs?category=${encodeURIComponent(cat?.name || "")}`}
                  className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full text-neutral-700 dark:text-neutral-300 transition border border-neutral-200 dark:border-neutral-700 font-medium"
                >
                  {cat?.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 pt-2 border-t border-neutral-200 dark:border-neutral-800">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                <span>{views.toLocaleString("vi-VN")} lượt xem</span>
              </span>
              {blog.date && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{new Date(blog.date).toLocaleDateString("vi-VN")}</span>
                </span>
              )}
            </div>

            {/* Đoạn dẫn dắt đầu tiên */}
            {blog.paragraphs[0]?.type === "text" && (
              <p
                className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed italic pt-2"
                dangerouslySetInnerHTML={{ __html: blog.paragraphs[0].content }}
              />
            )}
          </div>

          {/* Bên PHẢI (5 cols): Ảnh đại diện */}
          <div className="md:col-span-5 relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-900">
            <Image
              src={imageSrc}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* SHARE ACTIONS BAR */}
      <ShareActions
        type="blogs"
        slug={blog.slug}
        title={blog.title}
        artistOrDesc={blog.desc}
      />

      {/* MỤC LỤC */}
      {headings.length > 0 && (
        <div className="rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-background/80 backdrop-blur-md p-6 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-foreground" />
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                Mục lục bài viết ({headings.length} phần)
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="text-xs font-semibold px-3 py-1 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition cursor-pointer"
            >
              {isTocOpen ? "Thu gọn ▲" : "Mở rộng ▼"}
            </button>
          </div>

          {isTocOpen && (
            <ol className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              {headings.map((heading, index) => (
                <li key={index} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <a
                    href={`#${heading.slug}`}
                    className="hover:underline transition truncate font-medium text-foreground"
                  >
                    {heading.title}
                  </a>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}

      {/* NỘI DUNG BÀI VIẾT */}
      <article className="p-6 sm:p-10 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-background/60 backdrop-blur-md space-y-8 leading-relaxed shadow-xs">
        {blog.paragraphs.slice(1).map((para, idx) => {
          const originalIdx = idx + 1;
          const slug =
            para.type === "title" ? generateSlug(para.content) : undefined;

          if (para.type === "title") {
            return (
              <h2
                key={originalIdx}
                id={slug}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 scroll-mt-24 first:border-0 first:pt-0"
              >
                {para.content}
              </h2>
            );
          }

          if (para.type === "text") {
            return (
              <p
                key={originalIdx}
                className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line font-normal"
                dangerouslySetInnerHTML={{ __html: para.content }}
              />
            );
          }

          if (para.type === "image") {
            return (
              <div
                key={originalIdx}
                className="w-full my-8 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md bg-neutral-900"
              >
                <Image
                  src={para.content}
                  alt={`Minh họa ${originalIdx}`}
                  width={1200}
                  height={675}
                  className="object-cover w-full h-auto"
                  quality={90}
                />
              </div>
            );
          }

          if (para.type === "link") {
            return (
              <p key={originalIdx} className="my-4">
                <Link
                  href={para.content}
                  className="text-foreground underline hover:opacity-80 break-words font-medium"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {para.content}
                </Link>
              </p>
            );
          }

          return null;
        })}
      </article>

      {/* CẢM NGHĨ & BÌNH LUẬN TỪ TÁC GIẢ */}
      {blog.comment && (
        <div className="p-6 sm:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-800/40 backdrop-blur-md flex items-start gap-4 sm:gap-6 shadow-xs">
          <Avatar className="w-14 h-14 shrink-0 border-2 border-neutral-300 dark:border-neutral-700">
            {Boolean(
              blog?.userCommentAvatar &&
                typeof blog.userCommentAvatar === "string" &&
                blog.userCommentAvatar.trim() !== ""
            ) && (
              <AvatarImage
                className="object-cover"
                src={blog.userCommentAvatar}
                alt={blog?.userNameComment || "User"}
              />
            )}
            <AvatarFallback>{blog?.userNameComment?.[0] || "M"}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-foreground">
                {blog?.userNameComment || "Moe Curation"}
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium">
                {blog?.userRoleComment || "Editor"}
              </span>
            </div>
            <div className="relative pl-6 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 italic leading-relaxed">
              <Quote className="w-4 h-4 text-neutral-400 absolute left-0 top-0.5" />
              <span dangerouslySetInnerHTML={{ __html: blog.comment }} />
            </div>
          </div>
        </div>
      )}

      {/* EMOTION REACTIONS */}
      <EmotionReactions type="blogs" slug={blog.slug} title={blog.title} />

      {/* NAVIGATION: Bài trước & Bài tiếp theo */}
      {(prevBlog || nextBlog) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          {prevBlog ? (
            <Link
              href={`/pages/blogs/${prevBlog.slug}`}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 hover:border-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition flex items-center gap-3.5 group shadow-2xs"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center shrink-0 text-xs font-bold">
                ←
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-neutral-400 block uppercase font-mono">
                  Bài trước
                </span>
                <span className="font-bold text-sm text-foreground truncate block group-hover:underline transition">
                  {prevBlog.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextBlog && (
            <Link
              href={`/pages/blogs/${nextBlog.slug}`}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/60 hover:border-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition flex items-center justify-end text-right gap-3.5 group shadow-2xs"
            >
              <div className="min-w-0">
                <span className="text-[11px] text-neutral-400 block uppercase font-mono">
                  Bài tiếp theo
                </span>
                <span className="font-bold text-sm text-foreground truncate block group-hover:underline transition">
                  {nextBlog.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center shrink-0 text-xs font-bold">
                →
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
