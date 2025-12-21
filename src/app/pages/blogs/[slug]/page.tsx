import { blogData } from "@/app/data/blog-data";
import { BlogsPost } from "@/app/types/type";
import BlogsDetailClient from "./blogs-detail-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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

  const blog = blogData.find((b) => b.slug === slug);
  if (!blog) {
    return {
      title: "Bài viết không tồn tại | Moe",
      description: "Không tìm thấy bài viết.",
      icons: defaultIcons,
    };
  }

  const description = getBlogDescription(blog);
  const canonicalUrl = `https://moe.io.vn/pages/blogs/${slug}`;
  const imageUrl = blog.image || "https://moe.io.vn/logo.png";

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

  const canonicalUrl = `https://moe.io.vn/pages/blogs/${slug}`;
  const imageUrl = blog.image || "https://moe.io.vn/logo.png";
  const publishDate = getBlogDate(blog);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://moe.io.vn/#website",
        url: "https://moe.io.vn/",
        name: "Moe",
        description: "Khám phá âm nhạc và xếp hạng âm nhạc",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://moe.io.vn/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://moe.io.vn/#organization",
        name: "Moe",
        url: "https://moe.io.vn/",
        logo: "https://moe.io.vn/logo.png",
      },
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#blogposting`,
        headline: blog.title,
        description: getBlogDescription(blog),
        datePublished: publishDate,
        dateModified: publishDate, // nếu có dateModified riêng thì dùng
        author: {
          "@type": "Person",
          name: blog.userNameComment || "Moe Team",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://moe.io.vn/#organization",
          name: "Moe",
          logo: {
            "@type": "ImageObject",
            url: "https://moe.io.vn/logo.png",
          },
        },
        image: {
          "@type": "ImageObject",
          url: imageUrl,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        url: canonicalUrl,
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
      <BlogsDetailClient blog={blog} />
    </>
  );
}