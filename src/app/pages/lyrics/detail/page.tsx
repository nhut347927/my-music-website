import React, { Suspense } from "react";
import { DetailLyricPage } from "./lyrics-detail-client";

// --------------------- Meta data ---------------------
export const metadata = {
  title: "Nghe nhạc và xem lời bài hát | MyMusic",
  description:
    "Nghe các bài hát yêu thích và xem lời bài hát chi tiết cùng các bài hát khác từ nhiều ca sĩ.",
  openGraph: {
    title: "Nghe nhạc và xem lời bài hát | MyMusic",
    description:
      "Nghe các bài hát yêu thích và xem lời bài hát chi tiết cùng các bài hát khác từ nhiều ca sĩ.",
    images: ["/asset/lyric-img/default-lyric.jpg"], // ảnh chung cho tất cả bài hát
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
