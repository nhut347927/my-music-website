"use client";

import React, { useEffect, useState } from "react";

interface ReadingProgressBarProps {
  colorClassName?: string;
}

export default function ReadingProgressBar({
  colorClassName = "from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500",
}: ReadingProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
      <div
        className={`h-full bg-linear-to-r ${colorClassName} transition-all duration-150 ease-out shadow-[0_0_8px_rgba(0,0,0,0.3)] dark:shadow-[0_0_8px_rgba(255,255,255,0.4)]`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
