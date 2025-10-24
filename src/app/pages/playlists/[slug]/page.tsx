import { playlistsData } from "@/app/data/playlists-data";
import { PlaylistPost } from "@/app/types/type";
import PlaylistDetailClient from "./playlist-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Định nghĩa interface cho params
interface PlaylistDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Hàm tái sử dụng để lấy description
const getPlaylistDescription = (playlist: PlaylistPost): string =>
  playlist.description?.slice(0, 160).replace(/[\n\r]+|[\s]{2,}/g, " ") ||
  playlist.final?.slice(0, 160).replace(/[\n\r]+|[\s]{2,}/g, " ") ||
  "Khám phá các playlist âm nhạc đa dạng tại Moe.";

// Metadata động
export async function generateMetadata({
  params,
}: PlaylistDetailPageProps): Promise<Metadata> {
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

  const description = getPlaylistDescription(playlist);

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
      canonical: `https://moechan.top/pages/playlists/${slug}`,
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
      type: "music.playlist",
      url: `https://moechan.top/pages/playlists/${slug}`,
      title: `${playlist.title} | Moe`,
      description,
      siteName: "Moe",
      songs: playlist.songs.map((song) => ({
        url: song.youtube,
        name: song.name,
      })),
      images: [
        {
          url: playlist.banner || playlist.image || "/logo.png",
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
      images: [playlist.banner || playlist.image || "/logo.png"],
    },
  };
}

// Tạo các params tĩnh cho SSG
export async function generateStaticParams() {
  return playlistsData.map((playlist) => ({
    slug: playlist.slug,
  }));
}

// Server Component chính
export default async function PlaylistDetailPage({
  params,
}: PlaylistDetailPageProps) {
  const { slug } = await params;
  if (!slug || typeof slug !== "string") {
    notFound();
  }

  const playlist: PlaylistPost | undefined = playlistsData.find(
    (p) => p.slug === slug
  );
  if (!playlist) {
    notFound();
  }

  // Schema.org (MusicPlaylist)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MusicPlaylist",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://moechan.top/pages/playlists/${slug}`,
    },
    name: playlist.title,
    description: getPlaylistDescription(playlist),
    image: playlist.banner || playlist.image || "/logo.png",
    datePublished: playlist.date,
    genre: playlist.categories?.map((cat) => cat.name) || [],
    track: playlist.songs.map((song, index) => ({
      "@type": "MusicRecording",
      position: index + 1,
      name: song.name,
      url: song.youtube,
    })),
    publisher: {
      "@type": "Organization",
      name: "Moe",
      logo: {
        "@type": "ImageObject",
        url: "https://moechan.top/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PlaylistDetailClient playlist={playlist} />
    </>
  );
}
