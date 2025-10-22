import LyricsClient from "./lyrics-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lyrics | Moe - Lời bài hát ý nghĩa & cảm xúc",
  description:
    "Khám phá bộ sưu tập lời bài hát hay, ý nghĩa và đầy cảm xúc tại Moe. Tìm cảm hứng từ những giai điệu yêu thích!",
  keywords: [
    "Moe",
    "lời bài hát",
    "lyrics",
    "âm nhạc",
    "bài hát ý nghĩa",
    "cảm xúc âm nhạc",
    "tâm sự qua lời hát",
  ],
  alternates: {
    canonical: "https://www.moechan.top/pages/lyrics",
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
    url: "https://www.moechan.top/pages/lyrics",
    title: "Lyrics | Moe - Lời bài hát ý nghĩa & cảm xúc",
    description:
      "Khám phá bộ sưu tập lời bài hát hay, ý nghĩa và đầy cảm xúc tại Moe. Tìm cảm hứng từ những giai điệu yêu thích!",
    siteName: "Moe",
    images: [
      {
        url: "/logo.png", // Đảm bảo file này tồn tại trong public
        width: 1200,
        height: 630,
        alt: "Moe Lyrics - Lời bài hát ý nghĩa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyrics | Moe - Lời bài hát ý nghĩa & cảm xúc",
    description:
      "Tìm lời bài hát yêu thích và cảm xúc sâu sắc tại Moe. Khám phá ngay!",
    images: ["/logo.png"], // Đảm bảo file này tồn tại trong public
  },
};

export default function LyricsPage() {
  return <LyricsClient />;
}