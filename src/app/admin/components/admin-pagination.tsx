"use client";

import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface AdminPaginationProps {
  page: number;
  totalPages: number;
  total: number;
  limit: number;
  onPageChange: (newPage: number) => void;
  onLimitChange: (newLimit: number) => void;
  colorTheme?: "rose" | "amber" | "purple" | "sky" | "emerald";
  itemLabel?: string;
}

export default function AdminPagination({
  page,
  totalPages,
  total,
  limit,
  onPageChange,
  onLimitChange,
  colorTheme = "rose",
  itemLabel = "mục",
}: AdminPaginationProps) {
  if (total === 0) return null;

  const safeTotalPages = Math.max(1, totalPages);
  const startItem = total > 0 ? (page - 1) * limit + 1 : 0;
  const endItem = Math.min(page * limit, total);

  // Theme colors configuration
  const themeClasses: Record<string, { activeBg: string; borderFocus: string; text: string }> = {
    rose: {
      activeBg: "bg-rose-500 text-white shadow-xs shadow-rose-500/30",
      borderFocus: "focus:border-rose-500",
      text: "text-rose-500",
    },
    amber: {
      activeBg: "bg-amber-500 text-white shadow-xs shadow-amber-500/30",
      borderFocus: "focus:border-amber-500",
      text: "text-amber-500",
    },
    purple: {
      activeBg: "bg-purple-500 text-white shadow-xs shadow-purple-500/30",
      borderFocus: "focus:border-purple-500",
      text: "text-purple-500",
    },
    sky: {
      activeBg: "bg-sky-500 text-white shadow-xs shadow-sky-500/30",
      borderFocus: "focus:border-sky-500",
      text: "text-sky-500",
    },
    emerald: {
      activeBg: "bg-emerald-500 text-white shadow-xs shadow-emerald-500/30",
      borderFocus: "focus:border-emerald-500",
      text: "text-emerald-500",
    },
  };

  const currentTheme = themeClasses[colorTheme] || themeClasses.rose;

  // Tính toán danh sách số trang hiển thị gọn gàng (VD: 1, 2, 3... 10)
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (safeTotalPages <= 5) {
      for (let i = 1; i <= safeTotalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, 4, "...", safeTotalPages);
      } else if (page >= safeTotalPages - 2) {
        pages.push(1, "...", safeTotalPages - 3, safeTotalPages - 2, safeTotalPages - 1, safeTotalPages);
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", safeTotalPages);
      }
    }
    return pages;
  };

  return (
    <div className="p-3.5 bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
      {/* Thông tin số lượng & chọn Limit */}
      <div className="flex flex-wrap items-center gap-3 text-neutral-500">
        <div>
          Đang hiển thị <strong className="text-foreground">{startItem} - {endItem}</strong> trên tổng số{" "}
          <strong className="text-foreground">{total}</strong> {itemLabel}
        </div>

        <div className="flex items-center gap-1.5 pl-2 border-l border-neutral-200 dark:border-neutral-800">
          <span className="text-[11px]">Mỗi trang:</span>
          <select
            value={limit}
            onChange={(e) => {
              onLimitChange(Number(e.target.value));
              onPageChange(1);
            }}
            className={`px-2 py-1 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-background text-foreground text-xs font-semibold cursor-pointer outline-hidden ${currentTheme.borderFocus}`}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      {/* Điều khiển chuyển trang */}
      <div className="flex items-center gap-1 self-center sm:self-auto">
        {/* Nút về trang đầu */}
        <button
          type="button"
          onClick={() => onPageChange(1)}
          disabled={page <= 1}
          className="p-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
          title="Trang đầu tiên"
        >
          <ChevronsLeft className="w-3.5 h-3.5" />
        </button>

        {/* Nút lùi 1 trang */}
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page <= 1}
          className="p-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
          title="Trang trước"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Danh sách các số trang */}
        <div className="flex items-center gap-1 mx-1">
          {getPageNumbers().map((p, idx) => {
            if (typeof p === "string") {
              return (
                <span key={`ellipsis-${idx}`} className="px-1.5 text-neutral-400 select-none">
                  ...
                </span>
              );
            }

            const isActive = p === page;
            return (
              <button
                key={`page-${p}`}
                type="button"
                onClick={() => onPageChange(p)}
                className={`min-w-[28px] h-7 px-2 rounded-lg font-bold text-xs transition cursor-pointer ${
                  isActive
                    ? currentTheme.activeBg
                    : "border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>

        {/* Nút tiến 1 trang */}
        <button
          type="button"
          onClick={() => onPageChange(Math.min(safeTotalPages, page + 1))}
          disabled={page >= safeTotalPages}
          className="p-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
          title="Trang sau"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {/* Nút đến trang cuối */}
        <button
          type="button"
          onClick={() => onPageChange(safeTotalPages)}
          disabled={page >= safeTotalPages}
          className="p-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
          title="Trang cuối cùng"
        >
          <ChevronsRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
