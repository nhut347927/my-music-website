import BlogsClient from "./blogs-client";

export const metadata = {
  title: "Blogs | Moe",
  description: "Cùng tơi suy nghĩ về một vấn đề gì đó trong cuộc sống",
};

export default function BlogPage() {
  return <BlogsClient />;
}
