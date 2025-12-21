import { playlistsData } from "@/app/data/playlists-data";
import { PlaylistPost } from "@/app/types/type";
import PlaylistDetailClient from "./playlist-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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

  const playlist = playlistsData.find((p) => p.slug === slug);
  if (!playlist) {
    return {
      title: "Playlist không tồn tại | Moe",
      description: "Không tìm thấy playlist.",
      icons: defaultIcons,
    };
  }

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
        image: {
          "@type": "ImageObject",
          url: imageUrl,
        },
        datePublished: publishDate,
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
              byArtist: {
                "@type": "MusicGroup",
                name: song.name || "Unknown Artist", // fallback nếu có artist
              },
              url: song.youtube,
            },
          })),
        },
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