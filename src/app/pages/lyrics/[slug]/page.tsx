import { lyricsData } from "@/app/data/lyrics-data";
import { LyricPost } from "@/app/types/type";
import LyricsDetailClient from "./lyrics-detail-client";
import { Metadata } from "next";

// Định nghĩa interface cho params
interface LyricsDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Metadata động
export async function generateMetadata({
  params,
}: LyricsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const song: LyricPost | undefined = lyricsData.find((s) => s.slug === slug);

  if (!song) {
    return {
      title: "Bài hát không tồn tại | Moe",
      description: "Không tìm thấy bài hát.",
      icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        other: [{ rel: "manifest", url: "/site.webmanifest" }],
      },
    };
  }

  const description =
    song.comment?.slice(0, 160) ||
    song.lyrics
      .find((l) => l.type.toLowerCase().includes("verse"))
      ?.content.slice(0, 160) ||
    "Nghe nhạc và xem lời bài hát ý nghĩa tại Moe.";

  return {
    title: `${song.title} - ${song.artist} | Moe`,
    description,
    keywords: [
      "Moe",
      "lời bài hát",
      "lyrics",
      "âm nhạc",
      ...(song.categories?.map((cat) => cat.name.toLowerCase()) || []),
      ...song.title.toLowerCase().split(" "),
      ...song.artist.toLowerCase().split(" "),
    ],
    alternates: {
      canonical: `https://moe-chan.vercel.app/pages/lyrics/${slug}`,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      other: [{ rel: "manifest", url: "/site.webmanifest" }],
    },
    openGraph: {
      type: "music.song",
      url: `https://moe-chan.vercel.app/pages/lyrics/${slug}`,
      title: `${song.title} - ${song.artist} | Moe`,
      description,
      siteName: "Moe",
      images: [
        {
          url: song.image || "/logo.png", // Sử dụng song.image, fallback là /logo.png
          width: 1200,
          height: 630,
          alt: `${song.title} - ${song.artist}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${song.title} - ${song.artist} | Moe`,
      description,
      images: [song.image || "/logo.png"], // Sử dụng song.image, fallback là /logo.png
    },
  };
}

// Server Component chính
export default async function LyricsDetailPage({
  params,
}: LyricsDetailPageProps) {
  const { slug } = await params;
  const song: LyricPost | undefined = lyricsData.find((s) => s.slug === slug);

  if (!song) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Bài hát không tồn tại.
        </p>
      </div>
    );
  }

  return <LyricsDetailClient song={song} />;
}
