"use client";

import { useEffect, useState } from "react";
import { incrementPostView } from "@/services/music-supabase-service";

interface UsePostViewTrackerProps {
  type: "lyrics" | "playlists" | "blogs";
  slug: string;
  initialViews?: number;
}

/**
 * Hook tự động ghi vết lượt truy cập và tăng view trên Supabase
 * khi user mở xem bất cứ bài Lyrics, Playlist, hay Blog nào.
 */
export function usePostViewTracker({
  type,
  slug,
  initialViews = 0,
}: UsePostViewTrackerProps) {
  const [views, setViews] = useState<number>(initialViews);

  useEffect(() => {
    if (!slug) return;

    let isMounted = true;
    const sessionKey = `viewed_${type}_${slug}`;
    const alreadyViewed =
      typeof window !== "undefined" && window.sessionStorage.getItem(sessionKey);

    async function recordView() {
      try {
        if (!alreadyViewed) {
          if (typeof window !== "undefined") {
            window.sessionStorage.setItem(sessionKey, Date.now().toString());
          }

          // Gọi Supabase tăng view & ghi vết IP truy cập
          const newViews = await incrementPostView(type, slug);
          if (isMounted && typeof newViews === "number" && newViews > 0) {
            setViews(newViews);
          } else if (isMounted) {
            setViews((prev) => prev + 1);
          }
        }
      } catch (err) {
        console.debug("Post view tracking suppressed:", err);
      }
    }

    recordView();

    return () => {
      isMounted = false;
    };
  }, [type, slug]);

  return { views };
}
