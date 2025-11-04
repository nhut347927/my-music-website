import BlogsClient from "./blogs-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Nơi tớ viết về những tâm đắc & câu chuyện cuộc sống",
  description:
    "Nhưng trải nghiệm cuộc sống, những vấp ngã tuổi dôi mươi và cách mà tớ đúng lên từ những khó khắn đó.",
  keywords: [
    "Moe",
    "blog cuộc sống",
    "chia sẻ cảm xúc",
    "tâm sự",
    "blog âm nhạc",
    "nhật ký",
    "câu chuyện cuộc sống",
  ],
  alternates: {
    canonical: "https://moe.io.vn/pages/blogs",
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
    url: "https://moe.io.vn/pages/blogs",
    title: "Blogs | Nơi tớ viết về những tâm đắc & câu chuyện cuộc sống",
    description:
      "Nhưng trải nghiệm cuộc sống, những vấp ngã tuổi dôi mươi và cách mà tớ đúng lên từ những khó khắn đó.",
    siteName: "Moe",
    images: [
      {
        url: "https://moe.io.vn/logo.png",
        width: 1200,
        height: 630,
        alt: "Moe Blogs - Chia sẻ câu chuyện & cảm xúc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Nơi tớ viết về những tâm đắc & câu chuyện cuộc sống",
    description:
      "Nhưng trải nghiệm cuộc sống, những vấp ngã tuổi dôi mươi và cách mà tớ đúng lên từ những khó khắn đó.",
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

export default function BlogPage() {
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
        "@id": "https://moe.io.vn/blogs#collectionpage",
        url: "https://moe.io.vn/blogs",
        name: "Blogs | Nơi tớ viết về những tâm đắc & câu chuyện cuộc sống",
        isPartOf: { "@id": "https://moe.io.vn/#website" },
        description:
          "Nhưng trải nghiệm cuộc sống, những vấp ngã tuổi dôi mươi và cách mà tớ đúng lên từ những khó khắn đó.",
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
              name: "Blogs",
              item: "https://moe.io.vn/pages/blogs",
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
      <BlogsClient />
    </>
  );
}
