"use client";

import { useState, useMemo, useEffect, JSX, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Heart, X, BookOpen, Sparkles, Loader2 } from "lucide-react";

import PostCard from "@/app/components/items/post-card";
import { Post, BlogsPost } from "@/app/types/type";
import { categoriesData } from "@/lib/constants/category-data";
import { getBlogs, recordVisitorEntranceNonBlocking } from "@/services/music-supabase-service";

interface BlogsClientProps {
  initialBlogs?: BlogsPost[];
}

function BlogsContent({ initialBlogs = [] }: BlogsClientProps): JSX.Element {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "Tất cả";
  const initialQuery = searchParams.get("q") || "";

  const [blogsList, setBlogsList] = useState<BlogsPost[]>(initialBlogs);
  const [loading, setLoading] = useState<boolean>(initialBlogs.length === 0);
  const [search, setSearch] = useState<string>(initialQuery);
  const [category, setCategory] = useState<string>(initialCategory);
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState<number>(1);
  const pageSize = 12;

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
    const q = searchParams.get("q");
    if (q) setSearch(q);
  }, [searchParams]);

  useEffect(() => {
    recordVisitorEntranceNonBlocking({ page: "/pages/blogs" });

    async function fetchSupabaseBlogs() {
      try {
        if (blogsList.length === 0) {
          setLoading(true);
        }
        const res = await getBlogs({ page: 1, limit: 100 });
        if (res && res.data && res.data.length > 0) {
          const mapped: BlogsPost[] = res.data.map((item) => {
            return {
              id: item.id || 0,
              type: "blogs" as const,
              slug: item.slug,
              title: item.title,
              desc: item.desc || "",
              keywords: item.keywords || [],
              categories: item.categories || [],
              image: item.image || "",
              paragraphs: (item.paragraphs as any) || [],
              userCommentAvatar: item.user_comment_avatar || "",
              userNameComment: item.user_name_comment || "Anonymous",
              userRoleComment: item.user_role_comment || "Music Editor",
              comment: item.comment || "",
              views: item.views || 0,
              date: item.date || item.created_at || "2025-01-01",
            };
          });
          setBlogsList(mapped);
        }
      } catch (err) {
        console.warn("Notice loading blogs from Supabase:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSupabaseBlogs();
  }, []);

  // 🔍 Lọc dữ liệu
  const filtered: Post[] = useMemo(() => {
    let result: Post[] = [...blogsList];

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.desc && p.desc.toLowerCase().includes(q))
      );
    }

    if (category !== "Tất cả") {
      result = result.filter((p) =>
        p.categories?.some((c) => c.name.toLowerCase() === category.toLowerCase())
      );
    }

    if (onlyFavorites) {
      result = result.filter((p) => {
        try {
          return localStorage.getItem(`fav_blogs_${p.slug}`) === "true";
        } catch {
          return false;
        }
      });
    }

    result.sort((a, b) => {
      const da = new Date(a.date || "").getTime();
      const db = new Date(b.date || "").getTime();
      return sort === "newest" ? db - da : da - db;
    });

    return result;
  }, [blogsList, search, category, onlyFavorites, sort]);

  const totalPages: number = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated: Post[] = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    if (typeof window !== "undefined") {
      const gridEl = document.getElementById("blogs-grid-start");
      if (gridEl) {
        gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 400, behavior: "smooth" });
      }
    }
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("Tất cả");
    setOnlyFavorites(false);
    setPage(1);
  };

  const hasActiveFilters = search.trim() !== "" || category !== "Tất cả" || onlyFavorites;

  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-0 py-12 sm:py-16 mb-20 space-y-12">
      <div className="flex flex-col items-center w-full space-y-8 text-center">
        {/* Tiêu đề & Giới thiệu */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Góc Nhìn Âm Nhạc</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground tracking-tight">
            Blog &amp; Tản Văn
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-medium">
            Những góc nhìn sâu sắc, tản mạn về bài hát, câu chuyện nghệ sĩ và thông điệp phía sau giai điệu.
          </p>
        </div>

        {/* Khối lọc + tìm kiếm */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-3xl">
          {/* Tìm kiếm */}
          <div className="flex-1 relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
              <Search className="w-4 h-4" />
            </div>
            <Input
              placeholder="Tìm theo tiêu đề bài viết, tản văn..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full h-11 pl-10 pr-8 text-sm sm:text-base rounded-2xl bg-background/80"
            />
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setPage(1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Bộ lọc Category Dropdown */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Select
              value={category}
              onValueChange={(val) => {
                setCategory(val);
                setPage(1);
              }}
            >
              <SelectTrigger className="w-full sm:w-44 h-11 rounded-2xl">
                <SelectValue placeholder="Thể loại" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tất cả">Tất cả thể loại</SelectItem>
                {categoriesData.map((c) => (
                  <SelectItem key={c.name} value={c.name}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Bộ lọc thời gian */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Select
              value={sort}
              onValueChange={(val) => setSort(val as "newest" | "oldest")}
            >
              <SelectTrigger className="w-full sm:w-36 h-11 rounded-2xl">
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mới nhất</SelectItem>
                <SelectItem value="oldest">Cũ nhất</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Category Pill Quick Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-4xl">
          <button
            type="button"
            onClick={() => {
              setCategory("Tất cả");
              setOnlyFavorites(false);
              setPage(1);
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
              category === "Tất cả" && !onlyFavorites
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                : "border border-neutral-200 dark:border-neutral-800 bg-background/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            }`}
          >
            Tất cả
          </button>

          <button
            type="button"
            onClick={() => {
              setOnlyFavorites(!onlyFavorites);
              setPage(1);
            }}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
              onlyFavorites
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                : "border border-neutral-200 dark:border-neutral-800 bg-background/80 hover:border-neutral-400 text-neutral-600 dark:text-neutral-300"
            }`}
          >
            <Heart className={`w-3 h-3 ${onlyFavorites ? "fill-current" : "text-neutral-500"}`} />
            <span>Yêu thích</span>
          </button>

          {categoriesData.slice(0, 8).map((c) => {
            const isActive = category === c.name && !onlyFavorites;
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => {
                  setCategory(c.name);
                  setOnlyFavorites(false);
                  setPage(1);
                }}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
                  isActive
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                    : "border border-neutral-200 dark:border-neutral-800 bg-background/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                }`}
              >
                {c.name}
              </button>
            );
          })}

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-neutral-900 dark:text-white hover:underline transition cursor-pointer"
            >
              <X className="w-3 h-3" />
              <span>Xóa bộ lọc</span>
            </button>
          )}
        </div>
      </div>

      <div id="blogs-grid-start" className="scroll-mt-6" />

      {/* Thống kê số lượng kết quả */}
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-6 px-1">
        <div>
          Đang hiển thị <strong className="text-foreground">{filtered.length > 0 ? (page - 1) * pageSize + 1 : 0} - {Math.min(page * pageSize, filtered.length)}</strong> trên tổng số <strong className="text-foreground">{filtered.length}</strong> bài viết
        </div>
        <div>
          Trang <strong className="text-foreground font-bold">{page}</strong> / {totalPages}
        </div>
      </div>

      {/* Danh sách Blogs */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-80 rounded-3xl border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-100/50 dark:bg-neutral-900/30 animate-pulse"
            />
          ))}
        </div>
      ) : paginated.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginated.map((post: Post) => (
            <PostCard key={post.id || post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 px-4 rounded-3xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 space-y-4">
          <p className="text-neutral-500 text-sm font-medium">
            Không tìm thấy bài viết nào phù hợp với bộ lọc hiện tại.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 font-bold text-xs transition cursor-pointer"
          >
            Xem tất cả bài viết
          </button>
        </div>
      )}

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex items-center gap-1.5 p-1 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-background/80 backdrop-blur-md shadow-xs">
            <button
              type="button"
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              disabled={page <= 1}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
            >
              &larr; Trang trước
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                const isActive = p === page;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handlePageChange(p)}
                    className={`min-w-[34px] h-8 px-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      isActive
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                        : "border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              disabled={page >= totalPages}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
            >
              Trang sau &rarr;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default function BlogsClient(props: BlogsClientProps): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-neutral-900 dark:text-white" />
        </div>
      }
    >
      <BlogsContent {...props} />
    </Suspense>
  );
}
