import { BlogsPost } from "@/app/types/type";
import BlogsDetailClient from "./blogs-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getStaticBlogBySlug,
  getStaticBlogs,
  recordToBlogPost,
  toAbsoluteSiteUrl,
} from "@/services/static-music-data";

export const dynamicParams = false;

interface BlogsDetailPageProps {
  params: Promise<{ slug: string }>;
}

const defaultIcons = {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
  other: [{ rel: "manifest", url: "/site.webmanifest" }],
};

const getBlogDescription = (blog: BlogsPost): string =>
  blog.desc?.trim() || "Khám phá bài viết về âm nhạc và xếp hạng âm nhạc tại Moe.";

const getBlogDate = (blog: BlogsPost): string =>
  blog.date ? new Date(blog.date).toISOString() : new Date().toISOString();

export async function generateMetadata({
  params,
}: BlogsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || typeof slug !== "string") {
    return {
      title: "Lỗi | Moe",
      description: "Slug không hợp lệ.",
      icons: defaultIcons,
    };
  }

  const record = getStaticBlogBySlug(slug);

  if (!record) {
    return {
      title: "Bài viết không tồn tại | Moe",
      description: "Không tìm thấy bài viết.",
      icons: defaultIcons,
    };
  }

  const blog = recordToBlogPost(record);
  const description = getBlogDescription(blog);
  const canonicalUrl = `https://moe.io.vn/pages/blogs/${slug}`;
  const imageUrl = toAbsoluteSiteUrl(typeof blog.image === "string" ? blog.image : "");

  return {
    title: `${blog.title} | Moe`,
    keywords: blog.keywords,
    description,
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
      type: "article",
      url: canonicalUrl,
      title: `${blog.title} | Moe`,
      description,
      siteName: "Moe",
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const res = getStaticBlogs({ limit: 1000 });
  return res.data.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogsDetailPage({
  params,
}: BlogsDetailPageProps) {
  const { slug } = await params;
  if (!slug || typeof slug !== "string") notFound();

  const record = getStaticBlogBySlug(slug);
  if (!record) notFound();

  const blog = recordToBlogPost(record);
  const allBlogs = getStaticBlogs({ limit: 500 }).data;
  const currentIndex = allBlogs.findIndex((b) => b.slug === blog.slug);
  const prevBlog =
    currentIndex > 0
      ? { slug: allBlogs[currentIndex - 1].slug, title: allBlogs[currentIndex - 1].title }
      : undefined;
  const nextBlog =
    currentIndex !== -1 && currentIndex < allBlogs.length - 1
      ? { slug: allBlogs[currentIndex + 1].slug, title: allBlogs[currentIndex + 1].title }
      : undefined;

  const canonicalUrl = `https://moe.io.vn/pages/blogs/${slug}`;
  const imageUrl = toAbsoluteSiteUrl(typeof blog.image === "string" ? blog.image : "");
  const publishDate = getBlogDate(blog);

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
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        url: canonicalUrl,
        headline: blog.title,
        description: getBlogDescription(blog),
        image: {
          "@type": "ImageObject",
          url: imageUrl,
        },
        datePublished: publishDate,
        dateModified: publishDate,
        author: {
          "@type": "Person",
          name: blog.userNameComment || "Moe Music",
        },
        publisher: {
          "@id": "https://moe.io.vn/#organization",
        },
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
            name: "Blogs",
            item: "https://moe.io.vn/pages/blogs",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
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
      <BlogsDetailClient blog={blog} prevBlog={prevBlog} nextBlog={nextBlog} />
    </>
  );
}