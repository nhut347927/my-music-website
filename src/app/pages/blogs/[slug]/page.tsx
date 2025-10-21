import { blogData } from "@/app/data/blog-data";
import { BlogsPost } from "@/app/types/type";
import BlogsDetailClient from "./blogs-detail-client";
import { Metadata } from "next";

// Định nghĩa interface cho params
interface BlogsDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Metadata động
export async function generateMetadata({
  params,
}: BlogsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
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

  const description =
    blog.paragraphs.find((p) => p.type === "text")?.content.slice(0, 160) ||
    "Khám phá bài viết sâu sắc về âm nhạc và cuộc sống tại Moe.";

  return {
    title: `${blog.title} | Moe`,
    description,
    keywords: [
      "Moe",
      "blog âm nhạc",
      "câu chuyện cuộc sống",
      "chia sẻ cảm xúc",
      ...blog.categories.map((cat) => cat.name.toLowerCase()), // Thêm từ khóa từ categories
      ...blog.title.toLowerCase().split(" "), // Thêm từ khóa từ tiêu đề
    ],
    alternates: {
      canonical: `https://moe-chan.vercel.app/pages/blogs/${slug}`,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      other: [{ rel: "manifest", url: "/site.webmanifest" }],
    },
    openGraph: {
      type: "article",
      url: `https://moe-chan.vercel.app/pages/blogs/${slug}`,
      title: `${blog.title} | Moe`,
      description,
      siteName: "Moe",
      images: [
        {
          url: blog.image || "/logo.png", // Sử dụng blog.image, fallback là /logo.png
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
      images: [blog.image || "/logo.png"], // Sử dụng blog.image, fallback là /logo.png
    },
  };
}

// Server Component chính
export default async function BlogsDetailPage({
  params,
}: BlogsDetailPageProps) {
  const { slug } = await params;
  const blog: BlogsPost | undefined = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Bài viết không tồn tại.
        </p>
      </div>
    );
  }

  return <BlogsDetailClient blog={blog} />;
}
