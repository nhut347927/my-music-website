import { LyricPost } from "@/app/types/type";
import LyricsDetailClient from "./lyrics-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getStaticSongBySlug,
  getStaticSongs,
  recordToLyricPost,
  recordToLyricCard,
  toAbsoluteSiteUrl,
} from "@/services/static-music-data";
import {
  getSongsByComposer,
  getArtistDiscography,
  getSimilarVibeSongs,
} from "@/lib/song-vibe-helper";

export const dynamicParams = false;

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

  const record = getStaticSongBySlug(slug);

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
  const imageUrl = toAbsoluteSiteUrl(typeof song.image === "string" ? song.image : "");

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
  const res = getStaticSongs({ limit: 1000, onlyActive: true });
  return res.data.map((song) => ({
    slug: song.slug,
  }));
}

export default async function LyricsDetailPage({
  params,
}: LyricsDetailPageProps) {
  const { slug } = await params;

  if (!slug || typeof slug !== "string") {
    notFound();
  }

  const record = getStaticSongBySlug(slug);

  if (!record) {
    notFound();
  }

  const song = recordToLyricPost(record);
  const allSongCards = getStaticSongs({ limit: 500, onlyActive: true }).data.map(recordToLyricCard);
  const composerSongs = getSongsByComposer(song.composer, song.slug, allSongCards);
  const artistDiscography = getArtistDiscography(song, allSongCards);
  const similarSongs = getSimilarVibeSongs(song, allSongCards);
  const currentIndex = allSongCards.findIndex((s) => s.slug === song.slug);
  const prevSong =
    currentIndex > 0
      ? { slug: allSongCards[currentIndex - 1].slug, title: allSongCards[currentIndex - 1].title }
      : undefined;
  const nextSong =
    currentIndex !== -1 && currentIndex < allSongCards.length - 1
      ? { slug: allSongCards[currentIndex + 1].slug, title: allSongCards[currentIndex + 1].title }
      : undefined;

  const canonicalUrl = `https://moe.io.vn/pages/lyrics/${slug}`;
  const publishDate = getPublishDate(song);
  const imageUrl = toAbsoluteSiteUrl(typeof song.image === "string" ? song.image : "");

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
      <LyricsDetailClient
        song={song}
        composerSongs={composerSongs}
        artistDiscography={artistDiscography}
        similarSongs={similarSongs}
        prevSong={prevSong}
        nextSong={nextSong}
      />
    </>
  );
}