import { LyricPost } from "@/app/types/type";
import LyricsDetailClient from "./lyrics-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSongBySlug, getSongs, SongLyricRecord } from "@/services/music-supabase-service";

interface LyricsDetailPageProps {
  params: Promise<{ slug: string }>;
}

const defaultIcons = {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
  other: [{ rel: "manifest", url: "/site.webmanifest" }],
};

const getSongDescription = (song: LyricPost): string => {
  return (
    song.desc?.trim() || "Khám phá lời bài hát, thông tin ca sĩ và những cảm xúc âm nhạc tại Moe."
  );
};

const getPublishDate = (song: LyricPost): string =>
  song.date ? new Date(song.date).toISOString() : new Date().toISOString();

function recordToLyricPost(record: SongLyricRecord): LyricPost {
  return {
    id: record.id || 0,
    type: "lyrics" as const,
    slug: record.slug,
    title: record.title || "",
    artist: record.artist || "",
    composer: record.composer || record.artist || "",
    producer: record.producer || "",
    year: record.year || "2024",
    duration: record.duration || "03:45",
    desc: record.desc || "",
    keywords: [],
    categories: record.categories && record.categories.length > 0 ? record.categories : [],
    image: record.image_base64 || "",
    singerPhoto: record.singer_photo_base64 || "",
    audio: record.audio_url || record.spotify_url || "",
    spotifyUrl: record.spotify_url,
    spotifyTrackId: record.spotify_track_id,
    vibe: record.vibe,
    genre: record.genre,
    mood: record.mood,
    story: record.story,
    instruments: record.instruments,
    lyrics: record.lyrics && record.lyrics.length > 0 ? record.lyrics : [],
    views: record.views || 0,
    date: record.created_at || "2025-01-01",
    otherSongs: [],
    userNameComment: "Admin",
    userRoleComment: "Music Editor",
    comment: "",
  };
}

export async function generateMetadata({
  params,
}: LyricsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || typeof slug !== "string") {
    return {
      title: "Lỗi | Moe",
      description: "Slug không hợp lệ.",
      icons: defaultIcons,
    };
  }

  const record = await getSongBySlug(slug);

  if (!record) {
    return {
      title: "Bài hát không tồn tại | Moe",
      description: "Không tìm thấy bài hát.",
      icons: defaultIcons,
    };
  }

  const song = recordToLyricPost(record);
  const description = getSongDescription(song);
  const canonicalUrl = `https://moe.io.vn/pages/lyrics/${slug}`;
  const imageUrl = song.image || "https://moe.io.vn/logo.png";

  return {
    title: `${song.title} - ${song.artist} | Moe`,
    description,
    keywords: song.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: `${song.title} - ${song.artist} | Moe`,
      description,
      siteName: "Moe",
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  try {
    const res = await getSongs({ limit: 1000, onlyActive: true });
    return (res.data || []).map((song) => ({
      slug: song.slug,
    }));
  } catch {
    return [];
  }
}

export default async function LyricsDetailPage({
  params,
}: LyricsDetailPageProps) {
  const { slug } = await params;

  if (!slug || typeof slug !== "string") {
    notFound();
  }

  const record = await getSongBySlug(slug);

  if (!record) {
    notFound();
  }

  const song = recordToLyricPost(record);
  const canonicalUrl = `https://moe.io.vn/pages/lyrics/${slug}`;
  const publishDate = getPublishDate(song);
  const imageUrl =
    typeof song.image === "string" ? song.image : "https://moe.io.vn/logo.png";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://moe.io.vn/#website",
        url: "https://moe.io.vn/",
        name: "Moe",
        publisher: {
          "@type": "Organization",
          "@id": "https://moe.io.vn/#organization",
        },
      },
      {
        "@type": "MusicRecording",
        "@id": `${canonicalUrl}#song`,
        url: canonicalUrl,
        name: song.title,
        description: getSongDescription(song),
        byArtist: {
          "@type": "MusicGroup",
          name: song.artist,
        },
        image: {
          "@type": "ImageObject",
          url: imageUrl,
        },
        datePublished: publishDate,
        duration: song.duration !== " — " ? song.duration : "PT0M0S",
        genre: song.categories?.map((cat) => cat.name) || [],
        lyrics: song.lyrics
          .map((l) => `${l.type}: ${l.content}`)
          .join("\n\n"),
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
            name: "Lyrics",
            item: "https://moe.io.vn/pages/lyrics",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${song.title} - ${song.artist}`,
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
      <LyricsDetailClient song={song} />
    </>
  );
}