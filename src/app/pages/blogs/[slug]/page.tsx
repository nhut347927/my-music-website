import { blogData } from "@/app/data/blog-data";
import { BlogsPost } from "@/app/types/type";
import BlogsDetailClient from "./blogs-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Định nghĩa interface cho params
interface BlogsDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Hàm tái sử dụng để lấy description
const getBlogDescription = (blog: BlogsPost): string =>
  blog.paragraphs
    .find((p) => p.type === "text")
    ?.content.slice(0, 160)
    .replace(/[\n\r]+|[\s]{2,}/g, " ") ||
  "Khám phá bài viết sâu sắc về trải nghiệm và cuộc sống.";

// Metadata động
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

  const blog: BlogsPost | undefined = blogData.find((b) => b.slug === slug);
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
      publishedTime: blog.date ?? undefined,
      modifiedTime: blog.date ?? undefined,
      images: [
        {
          url: blog.image || "/logo.png",
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
      images: [blog.image || "/logo.png"],
    },
  };
}

// Tạo các params tĩnh cho SSG
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

// Server Component chính
export default async function BlogsDetailPage({
  params,
}: BlogsDetailPageProps) {
  const { slug } = await params;
  if (!slug || typeof slug !== "string") {
    notFound();
  }

  const blog: BlogsPost | undefined = blogData.find((b) => b.slug === slug);
  if (!blog) {
    notFound();
  }

  // Schema.org (Article)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://moe.io.vn/pages/blogs/${slug}`,
    },
    headline: blog.title,
    description: getBlogDescription(blog),
    image: blog.image || "/logo.png",
    author: {
      "@type": "Person",
      name: blog.userNameComment || "Anonymous",
    },
    publisher: {
      "@type": "Organization",
      name: "Moe",
      logo: {
        "@type": "ImageObject",
        url: "https://moe.io.vn/logo.png",
      },
    },
    datePublished: blog.date,
    dateModified: blog.date,
    articleSection: blog.categories.map((cat) => cat.name),
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