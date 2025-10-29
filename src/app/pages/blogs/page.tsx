import BlogsClient from "./blogs-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Nơi tớ viết về những tâm đắc & câu chuyện cuộc sống",
  description:
    "Nhưng trải nghiệm cuộc sống, những vấp ngã tuổi dôi mươi và cách mà tớ đúng lên từ những khó khắn đó.",
  keywords: [
    "Moe",
    "blog cuộc sống",
    "chia sẻ cảm xúc",
    "tâm sự",
    "blog âm nhạc",
    "nhật ký",
    "câu chuyện cuộc sống",
  ],
  alternates: {
    canonical: "https://moe.io.vn/pages/blogs",
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
    url: "https://moe.io.vn/pages/blogs",
    title: "Blogs | Nơi tớ viết về những tâm đắc & câu chuyện cuộc sống",
    description:
      "Nhưng trải nghiệm cuộc sống, những vấp ngã tuổi dôi mươi và cách mà tớ đúng lên từ những khó khắn đó.",
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
    title: "Blogs | Nơi tớ viết về những tâm đắc & câu chuyện cuộc sống",
    description:
      "Nhưng trải nghiệm cuộc sống, những vấp ngã tuổi dôi mươi và cách mà tớ đúng lên từ những khó khắn đó.",
    images: ["/logo.png"], // Kiểm tra file này tồn tại
  },
};

export default function BlogPage() {
  return <BlogsClient />;
}
