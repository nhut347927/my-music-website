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
export default function HomePage() {
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
      <HomeClient />
    </>
  );
}
