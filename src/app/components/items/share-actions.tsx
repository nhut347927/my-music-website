"use client";

import React, { useState, useEffect } from "react";
import { Heart, Link2, Check, Share2 } from "lucide-react";

interface ShareActionsProps {
  type: "lyrics" | "playlists" | "blogs";
  slug: string;
  title: string;
  artistOrDesc?: string;
}

export default function ShareActions({
  type,
  slug,
  title,
  artistOrDesc,
}: ShareActionsProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`fav_${type}_${slug}`);
      if (saved === "true") setIsFavorite(true);
    } catch {}
  }, [type, slug]);

  const toggleFavorite = () => {
    const next = !isFavorite;
    setIsFavorite(next);
    try {
      if (next) {
        localStorage.setItem(`fav_${type}_${slug}`, "true");
      } else {
        localStorage.removeItem(`fav_${type}_${slug}`);
      }
    } catch {}
  };

  const canonicalUrl = `https://moe.io.vn/pages/${type}/${slug}`;

  const handleCopyLink = async () => {
    if (typeof window === "undefined") return;
    const urlToCopy = window.location.href || canonicalUrl;
    try {
      await navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      const input = document.createElement("input");
      input.value = urlToCopy;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const shareText = encodeURIComponent(
    `${title}${artistOrDesc ? ` - ${artistOrDesc}` : ""} | Moe Music`
  );

  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    canonicalUrl
  )}`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(
    canonicalUrl
  )}`;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-background/70 backdrop-blur-md">
      <div className="flex flex-wrap items-center gap-2">
        {/* Nút Yêu thích */}
        <button
          type="button"
          onClick={toggleFavorite}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer whitespace-nowrap
            ${
              isFavorite
                ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900 shadow-xs"
                : "border-neutral-200 dark:border-neutral-700 bg-background/80 text-foreground hover:border-neutral-900 dark:hover:border-white"
            }
          `}
        >
          <Heart
            className={`w-4 h-4 ${
              isFavorite ? "fill-current" : "text-neutral-500"
            }`}
          />
          <span>{isFavorite ? "Đã lưu yêu thích" : "Lưu yêu thích"}</span>
        </button>

        {/* Nút Sao chép Link */}
        <button
          type="button"
          onClick={handleCopyLink}
          className="relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-neutral-200 dark:border-neutral-700 bg-background/80 text-foreground hover:border-neutral-900 dark:hover:border-white transition cursor-pointer whitespace-nowrap"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-neutral-900 dark:text-white" />
              <span className="text-neutral-900 dark:text-white font-bold">Đã sao chép!</span>
            </>
          ) : (
            <>
              <Link2 className="w-4 h-4 text-neutral-500" />
              <span>Sao chép link</span>
            </>
          )}
        </button>
      </div>

      {/* Chia sẻ mạng xã hội */}
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap select-none">
          <Share2 className="w-3.5 h-3.5 shrink-0 text-neutral-400" />
          <span>Chia sẻ:</span>
        </div>

        {/* Facebook */}
        <a
          href={fbShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/70 text-foreground hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          title="Chia sẻ lên Facebook"
        >
          <span>Facebook</span>
        </a>

        {/* X / Twitter */}
        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/70 text-foreground hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          title="Chia sẻ lên X"
        >
          <span>X</span>
        </a>
      </div>
    </div>
  );
}
