import { lyricsData } from "@/app/data/lyrics-data";
import { LyricPost } from "@/app/types/type";
import LyricsDetailClient from "./lyrics-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Định nghĩa interface cho params
interface LyricsDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Hàm tái sử dụng để lấy description
const getSongDescription = (song: LyricPost): string =>
  song.comment?.slice(0, 160).replace(/[\n\r]+|[\s]{2,}/g, " ") ||
  song.lyrics
    .find((l) => l.type.toLowerCase().startsWith("verse"))
    ?.content.slice(0, 160).replace(/[\n\r]+|[\s]{2,}/g, " ") ||
  "Nghe nhạc và xem lời bài hát ý nghĩa tại Moe.";

// Metadata động
export async function generateMetadata({
  params,
}: LyricsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug || typeof slug !== "string") {
    return {
      title: "Lỗi | Moe",
      description: "Slug không hợp lệ.",
      icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        other: [{ rel: "manifest", url: "/site.webmanifest" }],
      },
    };
  }

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

  const description = getSongDescription(song);

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
      canonical: `https://moe.io.vn/pages/lyrics/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      other: [{ rel: "manifest", url: "/site.webmanifest" }],
    },
    openGraph: {
      type: "music.song",
      url: `https://moe.io.vn/pages/lyrics/${slug}`,
      title: `${song.title} - ${song.artist} | Moe`,
      description,
      siteName: "Moe",
      images: [
        {
          url: song.image || "/logo.png",
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
      images: [song.image || "/logo.png"],
    },
  };
}

// Tạo các params tĩnh cho SSG
export async function generateStaticParams() {
  return lyricsData.map((song) => ({
    slug: song.slug,
  }));
}

// Server Component chính
export default async function LyricsDetailPage({
  params,
}: LyricsDetailPageProps) {
  const { slug } = await params;
  if (!slug || typeof slug !== "string") {
    notFound();
  }

  const song: LyricPost | undefined = lyricsData.find((s) => s.slug === slug);
  if (!song) {
    notFound();
  }

  // Schema.org (MusicRecording)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://moe.io.vn/pages/lyrics/${slug}`,
    },
    name: song.title,
    description: getSongDescription(song),
    byArtist: {
      "@type": "MusicGroup",
      name: song.artist,
    },
    image: song.image || "/logo.png",
    datePublished: song.date,
    duration: song.duration !== " — " ? song.duration : "PT0M0S",
    genre: song.categories?.map((cat) => cat.name) || [],
    publisher: {
      "@type": "Organization",
      name: "Moe",
      logo: {
        "@type": "ImageObject",
        url: "https://moe.io.vn/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <LyricsDetailClient song={song} />
    </>
  );
}