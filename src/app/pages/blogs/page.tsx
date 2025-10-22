import BlogsClient from "./blogs-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Moe - Chia sẻ câu chuyện & cảm xúc",
  description:
    "Khám phá những bài viết sâu sắc về cuộc sống, âm nhạc và cảm xúc cùng Moe. Đọc các câu chuyện truyền cảm hứng và tâm sự chân thành.",
  keywords: [
    "Moe",
    "blog cuộc sống",
    "chia sẻ cảm xúc",
    "tâm sự",
    "blog âm nhạc",
    "nhật ký Moe",
    "câu chuyện cuộc sống",
  ],
  alternates: {
    canonical: "https://www.moechan.top/pages/blogs",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://www.moechan.top/pages/blogs",
    title: "Blogs | Moe - Nơi chia sẻ cảm xúc & câu chuyện cuộc sống",
    description:
      "Khám phá những bài viết đầy cảm xúc về âm nhạc, cuộc sống và tâm sự cùng Moe. Đọc ngay để tìm nguồn cảm hứng!",
    siteName: "Moe",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Moe Blogs - Chia sẻ câu chuyện & cảm xúc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Moe - Chia sẻ câu chuyện & cảm xúc",
    description:
      "Đọc những bài viết sâu sắc về cuộc sống và âm nhạc tại Moe. Khám phá ngay!",
    images: ["/logo.png"], // Kiểm tra file này tồn tại
  },
};

export default function BlogPage() {
  return <BlogsClient />;
}
