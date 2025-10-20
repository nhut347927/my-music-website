import React, { Suspense } from "react";
import { BlogsDetailPage } from "./blogs-detail-client";

// --------------------- Meta data ---------------------
export const metadata = {
  title: "Blog âm nhạc | Moe",
  description:
    "Khám phá các bài viết về âm nhạc, playlist, tin tức, và những câu chuyện thú vị xoay quanh thế giới nhạc Việt và quốc tế.",
  openGraph: {
    title: "Blog âm nhạc | Moe",
    description:
      "Khám phá các bài viết về âm nhạc, playlist, tin tức, và những câu chuyện thú vị xoay quanh thế giới nhạc Việt và quốc tế.",
    images: ["/asset/blog/default-blog-banner.jpg"], // ảnh chung cho blog
    type: "website",
  },
};


// --------------------- Trang ---------------------
export default function BlogsPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Đang tải...</div>}>
      <BlogsDetailPage />
    </Suspense>
  );
}
