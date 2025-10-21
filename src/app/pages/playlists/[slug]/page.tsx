import { playlistsData } from "@/app/data/playlists-data";
import { PlaylistPost } from "@/app/types/type";
import PlaylistDetailClient from "./playlist-detail-client";
import { Metadata } from "next";

interface PlaylistDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PlaylistDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const playlist: PlaylistPost | undefined = playlistsData.find(
    (p) => p.slug === slug
  );

  if (!playlist) {
    return {
      title: "Playlist không tồn tại | Moe",
      description: "Không tìm thấy playlist.",
      icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        other: [{ rel: "manifest", url: "/site.webmanifest" }],
      },
    };
  }

  const description =
    playlist.description?.slice(0, 160) ||
    playlist.final?.slice(0, 160) ||
    "Khám phá các playlist âm nhạc đa dạng tại Moe.";

  return {
    title: `${playlist.title} | Moe`,
    description,
    keywords: [
      "Moe",
      "playlist âm nhạc",
      "âm nhạc theo tâm trạng",
      "danh sách phát",
      ...(playlist.categories?.map((cat) => cat.name.toLowerCase()) || []),
      ...(playlist.mood ? [playlist.mood.toLowerCase()] : []),
      ...playlist.title.toLowerCase().split(" "),
    ],
    alternates: {
      canonical: `https://moe-chan.vercel.app/pages/playlists/${slug}`,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      other: [{ rel: "manifest", url: "/site.webmanifest" }],
    },
    openGraph: {
      type: "music.playlist",
      url: `https://moe-chan.vercel.app/pages/playlists/${slug}`,
      title: `${playlist.title} | Moe`,
      description,
      siteName: "Moe",
      images: [
        {
          url: playlist.banner || "/logo.png", // Sử dụng playlist.banner, fallback là /logo.png
          width: 1200,
          height: 630,
          alt: `${playlist.title} - Moe`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${playlist.title} | Moe`,
      description,
      images: [playlist.banner || "/logo.png"], // Sử dụng playlist.banner, fallback là /logo.png
    },
  };
}

export default async function PlaylistDetailPage({
  params,
}: PlaylistDetailPageProps) {
  const { slug } = await params;
  const playlist: PlaylistPost | undefined = playlistsData.find(
    (p) => p.slug === slug
  );

  if (!playlist) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Playlist không tồn tại.
        </p>
      </div>
    );
  }

  return <PlaylistDetailClient playlist={playlist} />;
}
