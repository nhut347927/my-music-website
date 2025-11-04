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

export default function LyricsPage() {
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
      <LyricsClient />
    </>
  );
}
