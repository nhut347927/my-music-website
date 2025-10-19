import React, { Suspense } from "react";
import { PlaylistDetailPage } from "./playlist-detail-client";

// --------------------- Meta data ---------------------
export const metadata = {
  title: "Tuyển tập nhạc Anime TikTok | MyMusic",
  description:
    "Tuyển tập 20 bài nhạc Anime TikTok hay nhất mọi thời đại – lofi, remix và những giai điệu gợi nhớ tuổi thơ.",
  openGraph: {
    title: "Tuyển tập nhạc Anime TikTok | MyMusic",
    description:
      "Tuyển tập 20 bài nhạc Anime TikTok hay nhất mọi thời đại – lofi, remix và những giai điệu gợi nhớ tuổi thơ.",
    images: ["/asset/playlist/anime-tiktok-banner.jpg"],
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
