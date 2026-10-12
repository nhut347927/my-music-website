"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Search, Sparkles } from "lucide-react";
import GlobalSearchModal from "./global-search-modal";

export default function FloatingActions() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;

      if (totalScroll > 0) {
        setScrollProgress((currentProgress / totalScroll) * 100);
      }

      if (currentProgress > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Floating Action Button Cluster at Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2.5">
        {/* Quick Search Floating Trigger */}
        <button
          type="button"
          onClick={() => setIsSearchOpen(true)}
          className="w-11 h-11 rounded-2xl bg-background/80 hover:bg-background border border-neutral-200 dark:border-neutral-800 backdrop-blur-md shadow-lg flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Tìm kiếm nhanh (Ctrl+K)"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Scroll To Top Button with Circular Progress */}
        {showButton && (
          <button
            type="button"
            onClick={scrollToTop}
            className="relative w-11 h-11 rounded-2xl bg-background/80 hover:bg-background border border-neutral-200 dark:border-neutral-800 backdrop-blur-md shadow-lg flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer animate-in fade-in duration-200"
            title="Cuộn lên đầu trang"
          >
            {/* Circular Progress SVG */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
              <circle
                cx="22"
                cy="22"
                r="18"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="transparent"
                className="text-neutral-200 dark:text-neutral-800"
              />
              <circle
                cx="22"
                cy="22"
                r="18"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="transparent"
                strokeDasharray="113"
                strokeDashoffset={113 - (113 * scrollProgress) / 100}
                strokeLinecap="round"
                className="text-neutral-900 dark:text-white transition-all duration-100"
              />
            </svg>

            <ArrowUp className="w-4 h-4 relative z-10" />
          </button>
        )}
      </div>
    </>
  );
}
