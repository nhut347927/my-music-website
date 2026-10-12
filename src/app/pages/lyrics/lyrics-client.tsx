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
import { Search, Filter, SortAsc, Heart, X, Sparkles, Loader2 } from "lucide-react";

import PostCard from "@/app/components/items/post-card";
import { Post, LyricPost } from "@/app/types/type";
import { categoriesData } from "@/lib/constants/category-data";
import CurrentSongBanner from "@/app/components/items/current-song-banner";
import { getSongs, recordVisitorEntranceNonBlocking, SongLyricRecord } from "@/services/music-supabase-service";

interface LyricsClientProps {
  initialSongs?: LyricPost[];
  initialCurrentSong?: SongLyricRecord | null;
}

function LyricsContent({ initialSongs = [], initialCurrentSong = null }: LyricsClientProps): JSX.Element {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "Tất cả";
  const initialQuery = searchParams.get("q") || "";

  const [songsList, setSongsList] = useState<LyricPost[]>(initialSongs);
  const [loading, setLoading] = useState<boolean>(initialSongs.length === 0);
  const [search, setSearch] = useState<string>(initialQuery);
  const [category, setCategory] = useState<string>(initialCategory);
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState<number>(1);
  const pageSize = 12;

  // Cập nhật khi searchParams thay đổi
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
    const q = searchParams.get("q");
    if (q) setSearch(q);
  }, [searchParams]);

  useEffect(() => {
    // 1. Ghi vết truy cập bất đồng bộ (không block render)
    recordVisitorEntranceNonBlocking({ page: "/pages/lyrics" });

    // 2. Tải bài hát từ Supabase (nếu chưa có dữ liệu ban đầu hoặc làm mới ngầm)
    async function fetchSupabaseSongs() {
      try {
        if (songsList.length === 0) {
          setLoading(true);
        }
        const res = await getSongs({ page: 1, limit: 200, onlyActive: true });
        if (res && res.data && res.data.length > 0) {
          const mapped: LyricPost[] = res.data.map((item) => {
            return {
              id: item.id || 0,
              type: "lyrics" as const,
              slug: item.slug,
              title: item.title,
              artist: item.artist,
              composer: item.composer || item.artist,
              producer: item.producer || "",
              year: item.year || "2024",
              duration: item.duration || "03:45",
              desc: item.desc || "",
              keywords: [],
              categories: item.categories && item.categories.length > 0 ? item.categories : [],
              image: item.image_base64 || "",
              singerPhoto: item.singer_photo_base64 || "",
              audio: item.audio_url || item.spotify_url || "",
              spotifyUrl: item.spotify_url,
              spotifyTrackId: item.spotify_track_id,
              vibe: item.vibe,
              genre: item.genre,
              mood: item.mood,
              story: item.story,
              instruments: item.instruments,
              lyrics: item.lyrics || [],
              views: item.views || 0,
              date: item.created_at || "2025-01-01",
              otherSongs: [],
              userNameComment: "Admin",
              userRoleComment: "Music Editor",
              comment: "",
            };
          });
          setSongsList(mapped);
        }
      } catch (err) {
        console.warn("Notice loading songs for lyrics page:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSupabaseSongs();
  }, []);

  // 🔍 Lọc dữ liệu
  const filtered: Post[] = useMemo(() => {
    let result: Post[] = [...songsList];

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          ((p as LyricPost).artist && (p as LyricPost).artist.toLowerCase().includes(q)) ||
          ((p as LyricPost).composer && (p as LyricPost).composer.toLowerCase().includes(q))
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
          return localStorage.getItem(`fav_lyrics_${p.slug}`) === "true";
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
  }, [songsList, search, category, onlyFavorites, sort]);

  const totalPages: number = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated: Post[] = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    if (typeof window !== "undefined") {
      const gridEl = document.getElementById("lyrics-grid-start");
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
            <span>Kho Tàng Lời Bài Hát</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground tracking-tight">
            Lyrics &amp; Cảm Nhận
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-medium">
            Khám phá trích đoạn lời bài hát ý nghĩa, câu chuyện sáng tác và giai điệu cùng vibe cảm xúc.
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
              placeholder="Tìm theo bài hát, ca sĩ, nhạc sĩ..."
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

      {/* Bài hát hiện tại (Supabase) */}
      <CurrentSongBanner initialSong={initialCurrentSong} />

      {/* Anchor để scroll mượt khi đổi trang */}
      <div id="lyrics-grid-start" className="scroll-mt-6" />

      {/* Thống kê số lượng kết quả */}
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-6 px-1">
        <div>
          Đang hiển thị <strong className="text-foreground">{filtered.length > 0 ? (page - 1) * pageSize + 1 : 0} - {Math.min(page * pageSize, filtered.length)}</strong> trên tổng số <strong className="text-foreground">{filtered.length}</strong> bài hát
        </div>
        <div>
          Trang <strong className="text-foreground font-bold">{page}</strong> / {totalPages}
        </div>
      </div>

      {/* Danh sách bài viết */}
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
            Không tìm thấy bài hát nào phù hợp với bộ lọc hiện tại.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 text-xs font-bold transition cursor-pointer"
          >
            Làm mới bộ lọc
          </button>
        </div>
      )}

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-2 rounded-xl text-xs font-semibold border border-neutral-200 dark:border-neutral-800 bg-background hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            Trước
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => {
                if (totalPages <= 7) return true;
                if (p === 1 || p === totalPages) return true;
                if (Math.abs(p - page) <= 1) return true;
                return false;
              })
              .map((p, idx, arr) => {
                const prev = arr[idx - 1];
                const showEllipsis = prev && p - prev > 1;

                return (
                  <span key={p} className="flex items-center">
                    {showEllipsis && (
                      <span className="px-2 text-neutral-400 text-xs">...</span>
                    )}
                    <button
                      type="button"
                      onClick={() => handlePageChange(p)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition ${
                        page === p
                          ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                          : "border border-neutral-200 dark:border-neutral-800 bg-background hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      }`}
                    >
                      {p}
                    </button>
                  </span>
                );
              })}
          </div>

          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-2 rounded-xl text-xs font-semibold border border-neutral-200 dark:border-neutral-800 bg-background hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            Sau
          </button>
        </div>
      )}
    </section>
  );
}

export default function LyricsClient(props: LyricsClientProps): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-neutral-900 dark:text-white" />
        </div>
      }
    >
      <LyricsContent {...props} />
    </Suspense>
  );
}
