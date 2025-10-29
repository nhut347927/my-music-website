import LyricsClient from "./lyrics-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lyrics | Những bài hát tới hiện tại tớ  vẫn nghe",
  description:
    "Những bài hát không chỉ hay về giai điệu mà còn có chiều sâu trong lời, nếu bạn muốn tìm một người không ngại nghe lại những bài cũ xưa thì tớ luôn ở dây.",
  keywords: [
    "Moe",
    "lời bài hát",
    "lyrics",
    "lời",
    "bài hát ý nghĩa",
    "nhạc hay",
    "mọi người nghe gì?",
  ],
  alternates: {
    canonical: "https://moe.io.vn/pages/lyrics",
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
    url: "https://moe.io.vn/pages/lyrics",
    title: "Lyrics | Những bài hát tới hiện tại tớ vẫn nghe",
    description:
      "Những bài hát không chỉ hay về giai điệu mà còn có chiều sâu trong lời, nếu bạn muốn tìm một người không ngại nghe lại những bài cũ xưa thì tớ luôn ở dây.",
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
    title: "Lyrics | Những bài hát tới hiện tại tớ  vẫn nghe",
    description:
      "Những bài hát không chỉ hay về giai điệu mà còn có chiều sâu trong lời, nếu bạn muốn tìm một người không ngại nghe lại những bài cũ xưa thì tớ luôn ở dây.",
    images: ["/logo.png"], // Đảm bảo file này tồn tại trong public
  },
};

export default function LyricsPage() {
  return <LyricsClient />;
}
