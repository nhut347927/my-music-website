"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  Music,
  Disc,
  BookOpen,
  ArrowRight,
  CornerDownLeft,
  Sparkles,
  Loader2,
} from "lucide-react";
import { getSongs, getPlaylists, getBlogs } from "@/services/music-supabase-service";

interface SearchResultItem {
  id: string | number;
  type: "lyrics" | "playlists" | "blogs";
  title: string;
  subtitle: string;
  url: string;
  badge: string;
  badgeColor: string;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({
  isOpen,
  onClose,
}: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [allItems, setAllItems] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Reset & focus on open + fetch data dynamically from Supabase
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);

      if (allItems.length === 0) {
        setLoading(true);
        Promise.all([
          getSongs({ limit: 1000, onlyActive: true }).catch(() => ({ data: [] })),
          getPlaylists({ limit: 1000, onlyActive: true }).catch(() => ({ data: [] })),
          getBlogs({ limit: 1000, onlyActive: true }).catch(() => ({ data: [] })),
        ])
          .then(([songsRes, playlistsRes, blogsRes]) => {
            const list: SearchResultItem[] = [];

            (songsRes.data || []).forEach((song) => {
              list.push({
                id: `lyric-${song.slug}`,
                type: "lyrics",
                title: song.title,
                subtitle: `${song.artist || ""}${song.composer ? ` • Sáng tác: ${song.composer}` : ""}`,
                url: `/pages/lyrics/${song.slug}`,
                badge: "Bài hát",
                badgeColor: "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700",
              });
            });

            (playlistsRes.data || []).forEach((pl) => {
              list.push({
                id: `pl-${pl.slug}`,
                type: "playlists",
                title: pl.title,
                subtitle: `${pl.songs?.length || 0} bài hát • ${pl.desc || pl.description || ""}`,
                url: `/pages/playlists/${pl.slug}`,
                badge: "Playlist",
                badgeColor: "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700",
              });
            });

            (blogsRes.data || []).forEach((bl) => {
              list.push({
                id: `blog-${bl.slug}`,
                type: "blogs",
                title: bl.title,
                subtitle: bl.desc || "Bài viết cảm nhận âm nhạc",
                url: `/pages/blogs/${bl.slug}`,
                badge: "Blog",
                badgeColor: "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700",
              });
            });

            setAllItems(list);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
      }
    }
  }, [isOpen, allItems.length]);

  // Filter results
  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return allItems.slice(0, 6); // Top suggestions
    }
    const q = query.trim().toLowerCase();
    return allItems
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q)
      )
      .slice(0, 10);
  }, [query, allItems]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredResults.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredResults.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          const item = filteredResults[selectedIndex];
          router.push(item.url);
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-background/95 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in zoom-in-95 duration-150">
        {/* Search Header Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-200 dark:border-neutral-800">
          {loading ? (
            <Loader2 className="w-5 h-5 text-neutral-400 animate-spin shrink-0" />
          ) : (
            <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          )}
          <input
            ref={inputRef}
            type="text"
            placeholder="Tìm theo tên bài hát, ca sĩ, playlist, bài blog..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 bg-transparent border-none text-sm sm:text-base outline-none text-foreground placeholder:text-neutral-400 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-neutral-400 hover:text-foreground transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded-lg text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-5 py-2.5 bg-neutral-50/50 dark:bg-neutral-900/30 border-b border-neutral-200/50 dark:border-neutral-800/50 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-neutral-400 text-[11px] shrink-0 font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-neutral-400" /> Gợi ý:
          </span>
          {["Vết Mưa", "Ấm", "Tháng Năm", "Indie", "Lofi", "Sơn Tùng"].map(
            (tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 hover:text-neutral-900 dark:hover:border-white dark:hover:text-white bg-background text-neutral-600 dark:text-neutral-300 text-[11px] shrink-0 transition cursor-pointer font-medium"
              >
                {tag}
              </button>
            )
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-neutral-100 dark:divide-neutral-800/50">
          {loading && allItems.length === 0 ? (
            <div className="py-14 text-center text-neutral-400 space-y-2">
              <Loader2 className="w-6 h-6 animate-spin mx-auto text-neutral-900 dark:text-white" />
              <p className="text-xs">Đang tải dữ liệu tìm kiếm...</p>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="py-14 text-center text-neutral-500 space-y-1">
              <p className="text-sm font-medium">Không tìm thấy kết quả cho &quot;{query}&quot;</p>
              <p className="text-xs text-neutral-400">
                Thử tìm bằng tên ca sĩ, nhạc sĩ hoặc thể loại khác
              </p>
            </div>
          ) : (
            filteredResults.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    router.push(item.url);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition ${
                    isSelected
                      ? "bg-neutral-100 dark:bg-neutral-800/80 shadow-xs"
                      : "hover:bg-neutral-50 dark:hover:bg-neutral-900/40"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-700"
                    >
                      {item.type === "lyrics" && <Music className="w-4 h-4" />}
                      {item.type === "playlists" && <Disc className="w-4 h-4" />}
                      {item.type === "blogs" && <BookOpen className="w-4 h-4" />}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground text-sm truncate">
                          {item.title}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full border font-medium shrink-0 ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isSelected && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-neutral-400 font-mono">
                        <span>Mở</span>
                        <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-2.5 bg-neutral-100/50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Di chuyển</span>
            <span>↵ Chọn</span>
            <span>ESC Đóng</span>
          </div>
          <span>Moe Music Finder</span>
        </div>
      </div>
    </div>
  );
}
