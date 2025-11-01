import { Metadata } from "next";
import HomeClient from "./pages/home/home-client";

export const metadata: Metadata = {
  title: "Moe | Trang này có những lời ngớ ngẩn",
  description:
    "Nơi có những bài hát, playlist và những thứ hữu ích mà tớ sưu tầm.",
  keywords: [
    "Moe",
    "lời bài hát",
    "playlist nhạc",
    "âm nhạc cảm xúc",
    "nghe nhạc trực tuyến",
    "blog âm nhạc",
    "tâm sự cùng âm nhạc",
    "ca sĩ Việt Nam",
    "Vpop",
    "chill music",
    "nhạc buồn",
    "nhạc lofi",
    "Moe io vn",
  ],

  alternates: {
    canonical: "https://moe.io.vn/",
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
    url: "https://moe.io.vn/",
    title: "Moe | Trang này có những lời ngớ ngẩn",
    description:
      "Nơi có những bài hát, playlist và những thứ hữu ích mà tớ sưu tầm.",
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
    title: "Moe | Trang này có những lời ngớ ngẩn",
    description:
      "Nơi có những bài hát, playlist và những thứ hữu ích mà tớ sưu tầm.",
    images: ["/logo.png"], // Kiểm tra file này tồn tại
  },
};
export default function HomePage() {
  return (
   <HomeClient />
  );
}
