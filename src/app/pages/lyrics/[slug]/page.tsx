import { lyricsData } from "@/app/data/lyrics-data";
import { LyricPost } from "@/app/types/type";
import LyricsDetailClient from "./lyrics-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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

  const song = lyricsData.find((s) => s.slug === slug);
  if (!song) {
    return {
      title: "Bài hát không tồn tại | Moe",
      description: "Không tìm thấy bài hát.",
      icons: defaultIcons,
    };
  }

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
      },
    },
    icons: defaultIcons,
    openGraph: {
      type: "music.song",
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
  return lyricsData.map((song) => ({
    slug: song.slug,
  }));
}

export default async function LyricsDetailPage({
  params,
}: LyricsDetailPageProps) {
  const { slug } = await params;
  if (!slug || typeof slug !== "string") notFound();

  const song = lyricsData.find((s) => s.slug === slug);
  if (!song) notFound();

  const canonicalUrl = `https://moe.io.vn/pages/lyrics/${slug}`;
  const imageUrl = song.image || "https://moe.io.vn/logo.png";
  const publishDate = getPublishDate(song);

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
        "@type": "MusicRecording",
        "@id": `${canonicalUrl}#song`,
        url: canonicalUrl,
        name: song.title,
        description: getSongDescription(song),
        byArtist: {
          "@type": "MusicGroup",
          name: song.artist,
          // Nếu có artist slug hoặc url thì thêm: url: "..."
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
          .join("\n\n"), // full lyrics cho schema (Google Music hỗ trợ)
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