import { playlistsData } from "@/app/data/playlists-data";
import { PlaylistPost } from "@/app/types/type";
import PlaylistDetailClient from "./playlist-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PlaylistDetailPageProps {
  params: Promise<{ slug: string }>;
}

const getPlaylistDescription = (playlist: PlaylistPost): string =>
  playlist.description?.slice(0, 160).replace(/[\n\r]+|[\s]{2,}/g, " ") ||
  playlist.final?.slice(0, 160).replace(/[\n\r]+|[\s]{2,}/g, " ") ||
  "Khám phá các playlist âm nhạc đa dạng tại Moe.";

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

  const playlist = playlistsData.find((p) => p.slug === slug);
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
      canonical: `https://moe.io.vn/pages/playlists/${slug}`,
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
      url: `https://moe.io.vn/pages/playlists/${slug}`,
      title: `${playlist.title} | Moe`,
      description,
      siteName: "Moe",
      images: [
        {
          url: playlist.banner || playlist.image || "https://moe.io.vn/logo.png",
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
      images: [playlist.banner || playlist.image || "https://moe.io.vn/logo.png"], // ĐẦY ĐỦ DOMAIN
    },
  };
}

export async function generateStaticParams() {
  return playlistsData.map((playlist) => ({
    slug: playlist.slug,
  }));
}

export default async function PlaylistDetailPage({
  params,
}: PlaylistDetailPageProps) {
  const { slug } = await params;
  if (!slug || typeof slug !== "string") notFound();

  const playlist = playlistsData.find((p) => p.slug === slug);
  if (!playlist) notFound();

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://moe.io.vn/#website",
        url: "https://moe.io.vn/",
        name: "Moe",
        description: "Nơi lưu giữ lời bài hát, playlist và những cảm xúc được viết nên từ âm nhạc.",
        publisher: { "@id": "https://moe.io.vn/#organization" },
      },
      {
        "@type": "Organization",
        "@id": "https://moe.io.vn/#organization",
        name: "Moe",
        url: "https://moe.io.vn/",
        logo: {
          "@type": "ImageObject",
          url: "https://moe.io.vn/logo.png",
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "MusicPlaylist",
        "@id": `https://moe.io.vn/pages/playlists/${slug}#playlist`,
        url: `https://moe.io.vn/pages/playlists/${slug}`,
        name: playlist.title,
        description: getPlaylistDescription(playlist),
        image: playlist.banner || playlist.image || "https://moe.io.vn/logo.png",
        datePublished: playlist.date,
        genre: playlist.categories?.map((cat) => cat.name) || [],
        numTracks: playlist.songs.length,
        track: {
          "@type": "ItemList",
          itemListElement: playlist.songs.map((song, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "MusicRecording",
              name: song.name,
              url: song.youtube,
            },
          })),
        },
        isPartOf: { "@id": "https://moe.io.vn/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://moe.io.vn/" },
            { "@type": "ListItem", position: 2, name: "Playlists", item: "https://moe.io.vn/pages/playlists" },
            { "@type": "ListItem", position: 3, name: playlist.title, item: `https://moe.io.vn/pages/playlists/${slug}` },
          ],
        },
      },
    ],
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