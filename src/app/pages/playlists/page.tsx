import PlaylistsClient from "./playlists-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playlists | Những list mà tớ chọn giúp bạn",
  description:
    "Playlist theo mùa xuân, hè, thu, đông và theo cả những sự kiện đặc biệt đối với tớ.",
  keywords: [
    "Moe",
    "playlist âm nhạc",
    "âm nhạc theo tâm trạng",
    "danh sách phát",
    "nhạc theo chủ đề",
    "lofi",
    "pop",
    "rock",
  ],
  alternates: {
    canonical: "https://moe.io.vn/pages/playlists",
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
    url: "https://moe.io.vn/pages/playlists",
    title: "Playlists | Những list mà tớ chọn giúp bạn",
    description:
      "Playlist theo mùa xuân, hè, thu, đông và theo cả những sự kiện đặc biệt đối với tớ.",
    siteName: "Moe",
    images: [
      {
        url: "https://moe.io.vn/logo.png", // Đảm bảo file này tồn tại trong public
        width: 1200,
        height: 630,
        alt: "Moe Playlists - Âm nhạc theo tâm trạng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playlists | Những list mà tớ chọn giúp bạn",
    description:
      "Playlist theo mùa xuân, hè, thu, đông và theo cả những sự kiện đặc biệt đối với tớ.",
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

export default function PlaylistsPage() {
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
        "@id": "https://moe.io.vn/playlists#collectionpage",
        url: "https://moe.io.vn/playlists",
        name: "Playlists | Những list mà tớ chọn giúp bạn",
        isPartOf: { "@id": "https://moe.io.vn/#website" },
        description:
          "Playlist theo mùa xuân, hè, thu, đông và theo cả những sự kiện đặc biệt đối với tớ.",
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
              name: "Playlists",
              item: "https://moe.io.vn/pages/playlists",
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
      <PlaylistsClient />
    </>
  );
}
