import PlaylistsClient from "./playlists-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playlists | Những list mà tớ chọn giúp bạn",
  description:
    "Playlist theo mùa xuân, hè, thu, đông và theo cả những sự kiện đặc biệt đối với tớ.",
  keywords: [
    "Moe",
    "playlist âm nhạc",
    "âm nhạc theo tâm trạng",
    "danh sách phát",
    "nhạc theo chủ đề",
    "lofi",
    "pop",
    "rock",
  ],
  alternates: {
    canonical: "https://moe.io.vn/pages/playlists",
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
    url: "https://moe.io.vn/pages/playlists",
    title: "Playlists | Những list mà tớ chọn giúp bạn",
    description:
      "Playlist theo mùa xuân, hè, thu, đông và theo cả những sự kiện đặc biệt đối với tớ.",
    siteName: "Moe",
    images: [
      {
        url: "/logo.png", // Đảm bảo file này tồn tại trong public
        width: 1200,
        height: 630,
        alt: "Moe Playlists - Âm nhạc theo tâm trạng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playlists | Những list mà tớ chọn giúp bạn",
    description:
      "Playlist theo mùa xuân, hè, thu, đông và theo cả những sự kiện đặc biệt đối với tớ.",
    images: ["/logo.png"], // Đảm bảo file này tồn tại trong public
  },
};

export default function PlaylistsPage() {
  return <PlaylistsClient />;
}
