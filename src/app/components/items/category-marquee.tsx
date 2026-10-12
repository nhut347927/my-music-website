"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { categoriesData } from "@/lib/constants/category-data";

export default function CategoryMarquee() {
  const displayCategories = categoriesData.slice(0, 24);

  return (
    <div className="py-2 overflow-hidden relative group">
      {/* Left and Right Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap gap-3 hover:[animation-play-state:paused]">
        {[...displayCategories, ...displayCategories].map((cat, index) => (
          <Link
            key={index}
            href={`/pages/lyrics?category=${encodeURIComponent(cat.name)}`}
            className="
              inline-flex items-center gap-1.5
              px-4 py-2 rounded-full text-xs font-semibold
              bg-background/80 text-neutral-700 dark:text-neutral-300
              border border-neutral-200/80 dark:border-neutral-800/80
              hover:border-neutral-900 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:border-white dark:hover:text-white dark:hover:bg-neutral-800
              transition-all duration-300 shadow-2xs backdrop-blur-md
              select-none shrink-0 cursor-pointer
            "
          >
            <Sparkles className="w-3 h-3 text-neutral-400" />
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
