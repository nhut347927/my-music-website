import LyricsClient from "./lyrics-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lyrics | Những bài hát tới hiện tại tớ  vẫn nghe",
  description:
    "Những bài hát không chỉ hay về giai điệu mà còn có chiều sâu trong lời, nếu bạn muốn tìm một người không ngại nghe lại những bài cũ xưa thì tớ luôn ở dây.",
  keywords: [
    "Moe",
    "lời bài hát",
    "lyrics",
    "lời",
    "bài hát ý nghĩa",
    "nhạc hay",
    "mọi người nghe gì?",
  ],
  alternates: {
    canonical: "https://moe.io.vn/pages/lyrics",
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
    url: "https://moe.io.vn/pages/lyrics",
    title: "Lyrics | Những bài hát tới hiện tại tớ vẫn nghe",
    description:
      "Những bài hát không chỉ hay về giai điệu mà còn có chiều sâu trong lời, nếu bạn muốn tìm một người không ngại nghe lại những bài cũ xưa thì tớ luôn ở dây.",
    siteName: "Moe",
    images: [
      {
        url: "https://moe.io.vn/logo.png", // Đảm bảo file này tồn tại trong public
        width: 1200,
        height: 630,
        alt: "Moe Lyrics - Lời bài hát ý nghĩa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyrics | Những bài hát tới hiện tại tớ  vẫn nghe",
    description:
      "Những bài hát không chỉ hay về giai điệu mà còn có chiều sâu trong lời, nếu bạn muốn tìm một người không ngại nghe lại những bài cũ xưa thì tớ luôn ở dây.",
    images: ["https://moe.io.vn/logo.png"], // Đảm bảo file này tồn tại trong public
  },
  robots: {
    index: true, // Cho phép index
    follow: true, // Cho phép bot theo link
    nocache: false, // Cho phép Google lưu cache
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

import { getSongs, getCurrentSong, SongLyricRecord } from "@/services/music-supabase-service";
import { LyricPost } from "@/app/types/type";

export const revalidate = 60;

export default async function LyricsPage() {
  let initialSongs: LyricPost[] = [];
  let initialCurrentSong: SongLyricRecord | null = null;

  try {
    const [songsRes, currentSong] = await Promise.all([
      getSongs({ page: 1, limit: 200, onlyActive: true }),
      getCurrentSong(),
    ]);

    if (songsRes && songsRes.data && songsRes.data.length > 0) {
      initialSongs = songsRes.data.map((item) => ({
        id: item.id || 0,
        type: "lyrics" as const,
        slug: item.slug,
        title: item.title,
        artist: item.artist,
        composer: item.composer || item.artist,
        producer: item.producer || "",
        year: item.year || "2024",
        duration: item.duration || "03:45",
        desc: item.desc || "",
        keywords: [],
        categories: item.categories && item.categories.length > 0 ? item.categories : [],
        image: item.image_base64 || "",
        singerPhoto: item.singer_photo_base64 || "",
        audio: item.audio_url || item.spotify_url || "",
        spotifyUrl: item.spotify_url,
        spotifyTrackId: item.spotify_track_id,
        vibe: item.vibe,
        genre: item.genre,
        mood: item.mood,
        story: item.story,
        instruments: item.instruments,
        lyrics: item.lyrics || [],
        views: item.views || 0,
        date: item.created_at || "2025-01-01",
        otherSongs: [],
        userNameComment: "Admin",
        userRoleComment: "Music Editor",
        comment: "",
      }));
    }
    initialCurrentSong = currentSong;
  } catch (err) {
    console.warn("Notice server pre-fetching for lyrics page:", err);
  }

  // Schema.org (Article)
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
        publisher: {
          "@type": "Organization",
          "@id": "https://moe.io.vn/#organization",
        },
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
        "@type": "CollectionPage",
        "@id": "https://moe.io.vn/lyrics#collectionpage",
        url: "https://moe.io.vn/lyrics",
        name: "Lyrics | Những bài hát tới hiện tại tớ  vẫn nghe",
        isPartOf: { "@id": "https://moe.io.vn/#website" },
        description:
          "Những bài hát không chỉ hay về giai điệu mà còn có chiều sâu trong lời, nếu bạn muốn tìm một người không ngại nghe lại những bài cũ xưa thì tớ luôn ở dây.",
      breadcrumb: {
          "@type": "BreadcrumbList",
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
              name: "Lyrics",
              item: "https://moe.io.vn/pages/lyrics",
            },
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
      <LyricsClient initialSongs={initialSongs} initialCurrentSong={initialCurrentSong} />
    </>
  );
}
