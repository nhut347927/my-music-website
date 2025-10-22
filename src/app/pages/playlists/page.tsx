import PlaylistsClient from "./playlists-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playlists | Moe - Âm nhạc theo tâm trạng & chủ đề",
  description:
    "Khám phá các playlist âm nhạc được tuyển chọn theo chủ đề và tâm trạng tại Moe. Tìm giai điệu phù hợp với mọi khoảnh khắc!",
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
    canonical: "https://www.moechan.top/pages/playlists",
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
    url: "https://www.moechan.top/pages/playlists",
    title: "Playlists | Moe - Âm nhạc theo tâm trạng & chủ đề",
    description:
      "Khám phá các playlist âm nhạc được tuyển chọn theo chủ đề và tâm trạng tại Moe. Tìm giai điệu phù hợp với mọi khoảnh khắc!",
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
    title: "Playlists | Moe - Âm nhạc theo tâm trạng & chủ đề",
    description:
      "Tìm playlist âm nhạc phù hợp tâm trạng và chủ đề tại Moe. Khám phá ngay!",
    images: ["/logo.png"], // Đảm bảo file này tồn tại trong public
  },
};

export default function PlaylistsPage() {
  return <PlaylistsClient />;
}