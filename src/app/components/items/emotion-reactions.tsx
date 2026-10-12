"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export type ReactionType = "lyrics" | "playlists" | "blogs";

interface ReactionItem {
  id: string;
  emoji: string;
  label: string;
  baseCount: number;
}

const DEFAULT_REACTIONS: Record<ReactionType, ReactionItem[]> = {
  lyrics: [
    { id: "love", emoji: "❤️", label: "Yêu thích", baseCount: 18 },
    { id: "chill", emoji: "☕", label: "Thư giãn", baseCount: 12 },
    { id: "deep", emoji: "🌧️", label: "Lắng đọng", baseCount: 15 },
    { id: "inspire", emoji: "✨", label: "Cảm hứng", baseCount: 9 },
  ],
  playlists: [
    { id: "love", emoji: "❤️", label: "Yêu thích", baseCount: 22 },
    { id: "vibes", emoji: "🔥", label: "Cuốn hút", baseCount: 16 },
    { id: "focus", emoji: "🎧", label: "Tập trung", baseCount: 14 },
    { id: "chill", emoji: "🌿", label: "Chữa lành", baseCount: 11 },
  ],
  blogs: [
    { id: "useful", emoji: "💡", label: "Hữu ích", baseCount: 14 },
    { id: "love", emoji: "❤️", label: "Yêu thích", baseCount: 19 },
    { id: "inspire", emoji: "✨", label: "Cảm hứng", baseCount: 13 },
    { id: "resonate", emoji: "💬", label: "Đồng cảm", baseCount: 17 },
  ],
};

interface EmotionReactionsProps {
  type: ReactionType;
  slug: string;
  title?: string;
}

export default function EmotionReactions({
  type,
  slug,
  title,
}: EmotionReactionsProps) {
  const reactionList = DEFAULT_REACTIONS[type] || DEFAULT_REACTIONS.lyrics;
  const [userReactions, setUserReactions] = useState<string[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [floatingEmoji, setFloatingEmoji] = useState<{ id: string; emoji: string } | null>(null);

  // Generate deterministic stable base counts based on slug hash
  const getSlugOffset = (s: string, idx: number) => {
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
      hash = (hash << 5) - hash + s.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs((hash + idx * 7) % 25) + 5;
  };

  const initialBaseCounts = useMemo(() => {
    const map: Record<string, number> = {};
    reactionList.forEach((r, idx) => {
      map[r.id] = r.baseCount + getSlugOffset(slug, idx);
    });
    return map;
  }, [reactionList, slug]);

  useEffect(() => {
    const updated = { ...initialBaseCounts };
    try {
      const stored = localStorage.getItem(`reactions_${type}_${slug}`);
      if (stored) {
        const parsed = JSON.parse(stored) as string[];
        setUserReactions(parsed);
        parsed.forEach((rId) => {
          if (updated[rId] !== undefined) {
            updated[rId] += 1;
          }
        });
      }
    } catch {}

    setCounts(updated);
  }, [type, slug, initialBaseCounts]);

  const handleToggleReaction = (rId: string, emoji: string) => {
    const isSelected = userReactions.includes(rId);
    let nextReactions: string[];

    if (isSelected) {
      nextReactions = userReactions.filter((id) => id !== rId);
      setCounts((prev) => ({
        ...prev,
        [rId]: Math.max(0, (prev[rId] ?? (initialBaseCounts[rId] || 1)) - 1),
      }));
    } else {
      nextReactions = [...userReactions, rId];
      setCounts((prev) => ({
        ...prev,
        [rId]: (prev[rId] ?? (initialBaseCounts[rId] || 0)) + 1,
      }));

      // Trigger floating animation
      setFloatingEmoji({ id: `${Date.now()}`, emoji });
      setTimeout(() => setFloatingEmoji(null), 1000);
    }

    setUserReactions(nextReactions);
    try {
      localStorage.setItem(`reactions_${type}_${slug}`, JSON.stringify(nextReactions));
    } catch {}
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl border border-neutral-200/90 dark:border-neutral-800/90 bg-linear-to-br from-background/90 via-neutral-50/40 to-neutral-100/40 dark:via-neutral-900/30 dark:to-neutral-900/60 backdrop-blur-md shadow-xs space-y-4 relative overflow-hidden">
      {/* Floating emoji animation on click */}
      <AnimatePresence>
        {floatingEmoji && (
          <motion.div
            key={floatingEmoji.id}
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -60, scale: 1.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl pointer-events-none z-30 select-none"
          >
            {floatingEmoji.emoji}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-neutral-400" />
          <h4 className="text-sm font-bold text-foreground">
            Cảm xúc của bạn với {type === "lyrics" ? "bài hát" : type === "playlists" ? "playlist" : "bài viết"} này?
          </h4>
        </div>
        <span className="text-[11px] text-neutral-400 font-mono">
          {userReactions.length > 0 ? "Đã thả cảm xúc ✨" : "Nhấn để thả cảm xúc"}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        {reactionList.map((reaction, idx) => {
          const isSelected = userReactions.includes(reaction.id);
          const count = counts[reaction.id] ?? (reaction.baseCount + getSlugOffset(slug, idx));

          return (
            <motion.button
              key={reaction.id}
              whileTap={{ scale: 0.94 }}
              onClick={() => handleToggleReaction(reaction.id, reaction.emoji)}
              type="button"
              className={`
                relative flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 cursor-pointer text-left
                ${
                  isSelected
                    ? "border-neutral-900 bg-neutral-900/10 dark:border-white dark:bg-white/10 shadow-xs ring-1 ring-neutral-900/20 dark:ring-white/20"
                    : "border-neutral-200/80 dark:border-neutral-800 bg-background/60 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 hover:border-neutral-400 dark:hover:border-neutral-600"
                }
              `}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xl shrink-0 select-none">{reaction.emoji}</span>
                <span
                  className={`text-xs font-semibold truncate ${
                    isSelected ? "text-foreground font-bold" : "text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {reaction.label}
                </span>
              </div>
              <span
                className={`text-xs font-mono font-bold ml-1.5 px-2 py-0.5 rounded-full ${
                  isSelected
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                }`}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
