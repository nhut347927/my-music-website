import { Metadata } from "next";
import HomeClient from "./pages/home/home-client";

export const metadata: Metadata = {
  title: "Moe | Lời bài hát, Playlist hay & Blog",
  description:
    "Nơi có những bài hát, playlist và những thứ hữu ích mà tớ sưu tầm.",
  keywords: [
    "Moe",
    "lời bài hát",
    "playlist nhạc",
    "âm nhạc cảm xúc",
    "nghe nhạc trực tuyến",
    "blog âm nhạc",
    "tâm sự cùng âm nhạc",
    "ca sĩ Việt Nam",
    "Vpop",
    "chill music",
    "nhạc buồn",
    "nhạc lofi",
    "Moe io vn",
  ],

  alternates: {
    canonical: "https://moe.io.vn/",
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
    url: "https://moe.io.vn/",
    title: "Moe | Lời bài hát, Playlist hay & Blog",
    description:
      "Nơi có những bài hát, playlist và những thứ hữu ích mà tớ sưu tầm.",
    siteName: "Moe",
    images: [
      {
        url: "https://moe.io.vn/logo.png",
        width: 1200,
        height: 630,
        alt: "Nơi có những bài hát, playlist và những thứ hữu ích mà tớ sưu tầm.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moe | Lời bài hát, Playlist hay & Blog",
    description:
      "Nơi có những bài hát, playlist và những thứ hữu ích mà tớ sưu tầm.",
    images: ["https://moe.io.vn/logo.png"], // Kiểm tra file này tồn tại
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
import {
  getSongs,
  getPlaylists,
  getBlogs,
  getCurrentSong,
  SongLyricRecord,
} from "@/services/music-supabase-service";
import { Post, LyricPost, PlaylistPost, BlogsPost } from "@/app/types/type";

export const revalidate = 60;

export default async function HomePage() {
  let initialLyrics: Post[] = [];
  let initialPlaylists: Post[] = [];
  let initialBlogs: Post[] = [];
  let initialCurrentSong: SongLyricRecord | null = null;
  let initialCounts = { songs: 59, playlists: 8, blogs: 7 };

  try {
    const [songsRes, playlistsRes, blogsRes, currentSong] = await Promise.all([
      getSongs({ page: 1, limit: 12, onlyActive: true }),
      getPlaylists({ page: 1, limit: 3 }),
      getBlogs({ page: 1, limit: 3 }),
      getCurrentSong(),
    ]);

    if (songsRes && songsRes.data && songsRes.data.length > 0) {
      initialLyrics = songsRes.data.slice(0, 3).map((item) => ({
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
        categories: item.categories || [],
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
      initialCounts.songs = songsRes.total || 59;
    }

    if (playlistsRes && playlistsRes.data && playlistsRes.data.length > 0) {
      initialPlaylists = playlistsRes.data.map((item) => ({
        id: item.id || 0,
        type: "playlists" as const,
        slug: item.slug,
        title: item.title,
        desc: item.desc || item.description || "",
        description: item.description || item.desc || "",
        keywords: item.keywords || [],
        categories: item.categories || [],
        image: item.image || "",
        banner: item.banner || item.image || "",
        songs: item.songs || [],
        mood: item.mood || "",
        final: item.final || "",
        views: item.views || 0,
        date: item.date || item.created_at || "2025-01-01",
      }));
      initialCounts.playlists = playlistsRes.total || 8;
    }

    if (blogsRes && blogsRes.data && blogsRes.data.length > 0) {
      initialBlogs = blogsRes.data.map((item) => ({
        id: item.id || 0,
        type: "blogs" as const,
        slug: item.slug,
        title: item.title,
        desc: item.desc || "",
        keywords: item.keywords || [],
        categories: item.categories || [],
        image: item.image || "",
        paragraphs: (item.paragraphs as any) || [],
        userCommentAvatar: item.user_comment_avatar || "",
        userNameComment: item.user_name_comment || "Anonymous",
        userRoleComment: item.user_role_comment || "Music Editor",
        comment: item.comment || "",
        views: item.views || 0,
        date: item.date || item.created_at || "2025-01-01",
      }));
      initialCounts.blogs = blogsRes.total || 7;
    }

    initialCurrentSong = currentSong;
  } catch (err) {
    console.warn("Notice server pre-fetching for home page:", err);
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
        description: "Nơi lưu giữ lời bài hát, playlist và những cảm xúc được viết nên từ âm nhạc.",
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
        "@id": "https://moe.io.vn/#collectionpage",
        url: "https://moe.io.vn/",
        name: "Moe - Lời bài hát, Playlist hay & Blog",
        isPartOf: { "@id": "https://moe.io.vn/#website" },
        description: "Khám phá lời bài hát, playlist hay và blog cảm xúc về âm nhạc.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Trang chủ",
              item: "https://moe.io.vn/",
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
      <HomeClient
        initialLyrics={initialLyrics}
        initialPlaylists={initialPlaylists}
        initialBlogs={initialBlogs}
        initialCurrentSong={initialCurrentSong}
        initialCounts={initialCounts}
      />
    </>
  );
}
