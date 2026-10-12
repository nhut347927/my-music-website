import { PlaylistPost } from "@/app/types/type";
import PlaylistDetailClient from "./playlist-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPlaylistBySlug, getPlaylists, PlaylistRecord } from "@/services/music-supabase-service";

interface PlaylistDetailPageProps {
  params: Promise<{ slug: string }>;
}

const defaultIcons = {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
  other: [{ rel: "manifest", url: "/site.webmanifest" }],
};

const getPlaylistDescription = (playlist: PlaylistPost): string => {
  return (
    playlist.desc?.trim() || "Khám phá những playlist âm nhạc đa dạng và cảm xúc tại Moe."
  );
};

const getPublishDate = (playlist: PlaylistPost): string =>
  playlist.date ? new Date(playlist.date).toISOString() : new Date().toISOString();

function recordToPlaylistPost(record: PlaylistRecord): PlaylistPost {
  return {
    id: record.id || 0,
    type: "playlists" as const,
    slug: record.slug,
    title: record.title,
    desc: record.desc || "",
    description: record.description || record.desc || "",
    keywords: record.keywords || [],
    categories: record.categories || [],
    image: record.image || "",
    banner: record.banner || record.image || "",
    songs: record.songs || [],
    mood: record.mood || "",
    final: record.final || "",
    views: record.views || 0,
    date: record.date || "2025-01-01",
  };
}

export async function generateMetadata({
  params,
}: PlaylistDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || typeof slug !== "string") {
    return {
      title: "Lỗi | Moe",
      description: "Slug không hợp lệ.",
      icons: defaultIcons,
    };
  }

  const record = await getPlaylistBySlug(slug);

  if (!record) {
    return {
      title: "Playlist không tồn tại | Moe",
      description: "Không tìm thấy playlist.",
      icons: defaultIcons,
    };
  }

  const playlist = recordToPlaylistPost(record);
  const description = getPlaylistDescription(playlist);
  const canonicalUrl = `https://moe.io.vn/pages/playlists/${slug}`;
  const imageUrl = playlist.banner || playlist.image || "https://moe.io.vn/logo.png";

  return {
    title: `${playlist.title} | Moe`,
    description,
    keywords: playlist.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    icons: defaultIcons,
    openGraph: {
      type: "music.playlist",
      url: canonicalUrl,
      title: `${playlist.title} | Moe`,
      description,
      siteName: "Moe",
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  try {
    const res = await getPlaylists({ limit: 1000, onlyActive: true });
    return (res.data || []).map((playlist) => ({
      slug: playlist.slug,
    }));
  } catch {
    return [];
  }
}

export default async function PlaylistDetailPage({
  params,
}: PlaylistDetailPageProps) {
  const { slug } = await params;
  if (!slug || typeof slug !== "string") notFound();

  const record = await getPlaylistBySlug(slug);
  if (!record) notFound();

  const playlist = recordToPlaylistPost(record);
  const canonicalUrl = `https://moe.io.vn/pages/playlists/${slug}`;
  const imageUrl = playlist.banner || playlist.image || "https://moe.io.vn/logo.png";
  const publishDate = getPublishDate(playlist);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://moe.io.vn/#website",
        url: "https://moe.io.vn/",
        name: "Moe",
        description:
          "Nơi lưu giữ lời bài hát, playlist và những cảm xúc được viết nên từ âm nhạc.",
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
        "@id": `${canonicalUrl}#playlist`,
        url: canonicalUrl,
        name: playlist.title,
        description: getPlaylistDescription(playlist),
        numTracks: playlist.songs.length,
        image: {
          "@type": "ImageObject",
          url: imageUrl,
        },
        datePublished: publishDate,
        track: playlist.songs.map((song, index) => ({
          "@type": "MusicRecording",
          position: index + 1,
          name: song.name,
          description: song.desc,
          url: song.youtube,
        })),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        breadcrumb: {
          "@id": `${canonicalUrl}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Trang chủ",
            item: "https://moe.io.vn/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Playlists",
            item: "https://moe.io.vn/pages/playlists",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: playlist.title,
            item: canonicalUrl,
          },
        ],
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