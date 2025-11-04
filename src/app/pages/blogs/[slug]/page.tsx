import { blogData } from "@/app/data/blog-data";
import { BlogsPost } from "@/app/types/type";
import BlogsDetailClient from "./blogs-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogsDetailPageProps {
  params: Promise<{ slug: string }>;
}

const getBlogDescription = (blog: BlogsPost): string =>
  blog.paragraphs
    .find((p) => p.type === "text")
    ?.content.slice(0, 160)
    .replace(/[\n\r]+|[\s]{2,}/g, " ") ||
  "Khám phá bài viết sâu sắc về trải nghiệm và cuộc sống.";

export async function generateMetadata({
  params,
}: BlogsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug || typeof slug !== "string") {
    return {
      title: "Lỗi | Moe",
      description: "Slug không hợp lệ.",
      icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        other: [{ rel: "manifest", url: "/site.webmanifest" }],
      },
    };
  }

  const blog = blogData.find((b) => b.slug === slug);
  if (!blog) {
    return {
      title: "Bài viết không tồn tại | Moe",
      description: "Không tìm thấy bài viết.",
      icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        other: [{ rel: "manifest", url: "/site.webmanifest" }],
      },
    };
  }

  const description = getBlogDescription(blog);

  return {
    title: `${blog.title} | Moe`,
    description,
    keywords: [
      "Moe",
      "blog cá nhân",
      "câu chuyện cuộc sống",
      "chia sẻ cảm xúc",
      ...blog.categories.map((cat) => cat.name.toLowerCase()),
      ...blog.title.toLowerCase().split(" "),
    ],
    alternates: {
      canonical: `https://moe.io.vn/pages/blogs/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      other: [{ rel: "manifest", url: "/site.webmanifest" }],
    },
    openGraph: {
      type: "article",
      url: `https://moe.io.vn/pages/blogs/${slug}`,
      title: `${blog.title} | Moe`,
      description,
      siteName: "Moe",
      images: [
        {
          url: blog.image || "https://moe.io.vn/logo.png", // ƯU TIÊN ẢNH BÀI VIẾT
          width: 1200,
          height: 630,
          alt: `${blog.title} - Moe`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Moe`,
      description,
      images: [blog.image || "https://moe.io.vn/logo.png"], // ĐẦY ĐỦ DOMAIN
    },
  };
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogsDetailPage({
  params,
}: BlogsDetailPageProps) {
  const { slug } = await params;
  if (!slug || typeof slug !== "string") notFound();

  const blog = blogData.find((b) => b.slug === slug);
  if (!blog) notFound();

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://moe.io.vn/#website",
        url: "https://moe.io.vn/",
        name: "Moe",
        description: "Nơi lưu giữ lời bài hát, playlist và những cảm xúc được viết nên từ âm nhạc.",
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
        "@type": "BlogPosting",
        "@id": `https://moe.io.vn/pages/blogs/${slug}#post`,
        url: `https://moe.io.vn/pages/blogs/${slug}`,
        headline: blog.title,
        description: getBlogDescription(blog),
        image: blog.image || "https://moe.io.vn/logo.png",
        author: {
          "@type": "Person",
          name: blog.userNameComment || "Anonymous",
        },
        datePublished: blog.date,
        dateModified: blog.date,
        articleSection: blog.categories.map((c) => c.name).join(", "), // STRING, KHÔNG PHẢI MẢNG
        isPartOf: { "@id": "https://moe.io.vn/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://moe.io.vn/" },
            { "@type": "ListItem", position: 2, name: "Blogs", item: "https://moe.io.vn/pages/blogs" },
            { "@type": "ListItem", position: 3, name: blog.title, item: `https://moe.io.vn/pages/blogs/${slug}` },
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
      <BlogsDetailClient blog={blog} />
    </>
  );
}