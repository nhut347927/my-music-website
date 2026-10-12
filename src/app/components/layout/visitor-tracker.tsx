"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { recordVisitorEntrance } from "@/services/music-supabase-service";

/**
 * VisitorTracker Component
 * Tự động ghi nhận lượt truy cập của khách vào website:
 * - Lưu IP vào bảng `visitor_ips_music` (mỗi IP 1 dòng, tăng số lần truy cập, cập nhật thời gian vào)
 * - Ghi nhật ký vào `visits_log_music` để vẽ biểu đồ thống kê
 */
export default function VisitorTracker() {
  const pathname = usePathname();
  const trackedSessionRef = useRef<boolean>(false);

  useEffect(() => {
    // Chỉ ghi nhận 1 lần mỗi phiên duyệt web trong tab để tối ưu hiệu năng
    const sessionKey = "moe_visited_session";
    const alreadyTracked = typeof window !== "undefined" && window.sessionStorage.getItem(sessionKey);

    if (!alreadyTracked && !trackedSessionRef.current) {
      trackedSessionRef.current = true;
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(sessionKey, Date.now().toString());
      }

      // Ghi nhận IP khách vào Supabase không làm chậm giao diện (background async)
      recordVisitorEntrance({ page: pathname || "/" }).catch((err) => {
        console.debug("Visitor logging suppressed:", err);
      });
    }
  }, [pathname]);

  return null;
}
