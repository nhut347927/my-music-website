"use client";

import React, { useState } from "react";
import { Copy, Check, Type, Minus, Plus, RefreshCw } from "lucide-react";

interface LyricReaderControlsProps {
  fontSize: "sm" | "base" | "lg" | "xl";
  setFontSize: (size: "sm" | "base" | "lg" | "xl") => void;
  onCopyExcerpt: () => void;
  copied: boolean;
}

export default function LyricReaderControls({
  fontSize,
  setFontSize,
  onCopyExcerpt,
  copied,
}: LyricReaderControlsProps) {
  const fontSizes: Array<"sm" | "base" | "lg" | "xl"> = ["sm", "base", "lg", "xl"];
  const currentIdx = fontSizes.indexOf(fontSize);

  const decreaseFontSize = () => {
    if (currentIdx > 0) {
      setFontSize(fontSizes[currentIdx - 1]);
    }
  };

  const increaseFontSize = () => {
    if (currentIdx < fontSizes.length - 1) {
      setFontSize(fontSizes[currentIdx + 1]);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-neutral-100/60 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/60 text-xs">
      <div className="flex items-center gap-2">
        <span className="text-neutral-500 flex items-center gap-1 font-medium">
          <Type className="w-3.5 h-3.5 text-neutral-400" />
          <span>Cỡ chữ:</span>
        </span>
        <div className="flex items-center gap-1 bg-background/80 rounded-xl p-1 border border-neutral-200 dark:border-neutral-700">
          <button
            type="button"
            onClick={decreaseFontSize}
            disabled={currentIdx === 0}
            className="p-1 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
            title="Thu nhỏ chữ"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-2 font-mono font-bold uppercase text-[11px] text-neutral-900 dark:text-white">
            {fontSize}
          </span>
          <button
            type="button"
            onClick={increaseFontSize}
            disabled={currentIdx === fontSizes.length - 1}
            className="p-1 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
            title="Phóng to chữ"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={onCopyExcerpt}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-background/80 hover:border-neutral-900 hover:text-neutral-900 dark:hover:border-white dark:hover:text-white transition cursor-pointer font-medium text-foreground"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
            <span className="text-neutral-900 dark:text-white font-bold">Đã chép trích đoạn</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-neutral-500" />
            <span>Chép đoạn trích</span>
          </>
        )}
      </button>
    </div>
  );
}
