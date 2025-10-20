import React, { Suspense } from "react";
import { PlaylistDetailPage } from "./playlist-detail-client";

// --------------------- Meta data ---------------------
export const metadata = {
  title: "Khám phá các playlist âm nhạc | Moe",
  description:
    "Khám phá các playlist âm nhạc đa dạng từ nhiều thể loại – lofi, remix, pop, rock, và những giai điệu hay nhất cho mọi tâm trạng.",
  openGraph: {
    title: "Khám phá các playlist âm nhạc | Moe",
    description:
      "Khám phá các playlist âm nhạc đa dạng từ nhiều thể loại – lofi, remix, pop, rock, và những giai điệu hay nhất cho mọi tâm trạng.",
    images: ["/asset/playlist/default-playlist-banner.jpg"], // ảnh chung cho tất cả playlist
    type: "music.playlist",
  },
};


// --------------------- Trang ---------------------
export default function PlaylistPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Đang tải...</div>}>
      <PlaylistDetailPage />
    </Suspense>
  );
}
