import React, { Suspense } from "react";
import { DetailLyricPage } from "./lyrics-detail-client";

// --------------------- Meta data ---------------------
export const metadata = {
  title: "Ấm - Sweet Liquor | MyMusic",
  description:
    "Nghe nhạc Ấm của Sweet Liquor, xem lời bài hát và các bài hát khác cùng ca sĩ.",
  openGraph: {
    title: "Ấm - Sweet Liquor | MyMusic",
    description:
      "Nghe nhạc Ấm của Sweet Liquor, xem lời bài hát và các bài hát khác cùng ca sĩ.",
    images: ["/asset/lyric-img/sweet-liquor-am.jpg"],
    type: "music.song",
  },
};

// --------------------- Trang ---------------------
export default function LyricsPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Đang tải...</div>}>
      <DetailLyricPage />
    </Suspense>
  );
}
