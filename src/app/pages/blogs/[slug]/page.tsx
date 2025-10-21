import { blogData } from "@/app/data/blog-data";
import { BlogsPost } from "@/app/types/type";
import BlogsDetailClient from "./blogs-detail-client";

// Định nghĩa interface cho params
interface BlogsDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Metadata động
export async function generateMetadata({ params }: BlogsDetailPageProps) {
  const { slug } = await params;
  const blog: BlogsPost | undefined = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Bài viết không tồn tại | Moe",
      description: "Không tìm thấy bài viết.",
    };
  }

  return {
    title: `${blog.title} | Moe`,
    description:
      blog.paragraphs.find((p) => p.type === "text")?.content.slice(0, 160) ||
      "Khám phá bài viết về âm nhạc tại Moe.",
    openGraph: {
      title: `${blog.title} | Moe`,
      description:
        blog.paragraphs.find((p) => p.type === "text")?.content.slice(0, 160) ||
        "Khám phá bài viết về âm nhạc tại Moe.",
      images: [blog.image || "/asset/blog/default-blog-banner.jpg"],
      type: "article",
    },
  };
}

// Server Component chính
export default async function BlogsDetailPage({ params }: BlogsDetailPageProps) {
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