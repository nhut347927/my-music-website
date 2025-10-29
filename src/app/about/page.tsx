// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import heroBanner from "../asset/hero-banner.jpg";
export const metadata = {
  title: "Giới thiệu & Thông báo bản quyền | Blog Demo SEO",
  description:
    "Trang giới thiệu về mục đích demo SEO, hình ảnh sưu tầm từ Pinterest và nội dung do AI hỗ trợ. Vui lòng liên hệ gỡ bỏ nếu có vi phạm bản quyền.",
  keywords: "demo SEO, blog Next.js, bản quyền hình ảnh, AI content, Pinterest",
  openGraph: {
    title: "Giới thiệu & Bản quyền",
    description:
      "Trang demo sử dụng hình ảnh từ Pinterest và nội dung AI. Liên hệ gỡ bỏ nếu cần.",
    url: "https://moe.io.vn/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={heroBanner}
          alt="Giới thiệu blog demo SEO với Next.js"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Giới thiệu & Bản quyền
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Trang web này được xây dựng nhằm mục đích <strong>demo SEO</strong> và thử nghiệm công nghệ
            <strong> Next.js App Router</strong>.
          </p>
        </div>
      </section>

      {/* Nội dung chính */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Mục đích trang web */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Mục đích của trang web
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Trang blog này được tạo ra với mục tiêu chính là <strong>demo khả năng SEO</strong> của
              framework <strong>Next.js</strong> (App Router + SSR), đồng thời thử nghiệm:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Tối ưu hóa hình ảnh với <code>next/image</code></li>
              <li>Metadata động và Open Graph</li>
              <li>Structured Data (JSON-LD)</li>
              <li>Hiệu suất tải trang (LCP, CLS, FID)</li>
              <li>Responsive design với Tailwind CSS</li>
            </ul>
            <p className="mt-4">
              Toàn bộ nội dung văn bản được <strong>AI hỗ trợ soạn thảo</strong> (Grok, ChatGPT, v.v.)
              và chỉ mang tính chất minh họa.
            </p>
          </div>
        </div>

        {/* Hình ảnh từ Pinterest */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Về hình ảnh sử dụng
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Tất cả <strong>hình ảnh minh họa</strong> trên trang web đều được{" "}
              <strong>sưu tầm từ Pinterest</strong> và các nguồn công cộng khác. Chúng tôi{" "}
              <strong>không sở hữu bản quyền</strong> của những hình ảnh này.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-6">
              <p className="font-semibold text-amber-900 dark:text-amber-100">
                Nếu bạn là chủ sở hữu bản quyền và muốn gỡ bỏ hình ảnh:
              </p>
              <p className="mt-2">
                Vui lòng gửi email đến:{" "}
                <a
                  href="mailto:nhut2846@gmail.com"
                  className="font-medium text-blue-600 dark:text-blue-400 underline"
                >
                  nhut2846@gmail.com
                </a>
              </p>
              <p className="mt-2 text-sm">
                <strong>Yêu cầu bắt buộc:</strong> Vui lòng đính kèm:
              </p>
              <ul className="list-disc pl-6 text-sm mt-1 space-y-1">
                <li>Link trang chứa hình ảnh cần gỡ</li>
                <li>URL hình ảnh cụ thể</li>
                <li>Chứng minh quyền sở hữu (nếu có)</li>
              </ul>
              <p className="mt-3 text-sm font-medium">
                Chúng tôi cam kết <strong>gỡ bỏ ngay lập tức</strong> trong vòng 24h.
              </p>
            </div>
          </div>
        </div>

        {/* Liên hệ */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Cần hỗ trợ hoặc báo cáo?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Đừng ngần ngại liên hệ với chúng tôi.
          </p>
          <Link
            href="mailto:nhut2846@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Gửi email ngay
          </Link>
        </div>
      </section>

      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Giới thiệu & Bản quyền",
            description:
              "Trang giới thiệu về blog demo SEO sử dụng Next.js, hình ảnh từ Pinterest và nội dung AI. Hỗ trợ gỡ bỏ bản quyền nhanh chóng.",
            url: "https://moe.io.vn/about",
            publisher: {
              "@type": "Person",
              name: "Nhut2846",
              email: "nhut2846@gmail.com",
            },
          }),
        }}
      />
    </>
  );
}