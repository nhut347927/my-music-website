export default function robots() {
  const baseUrl = "https://moechan.top";
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/pages/blogs", "/pages/lyrics", "/pages/playlists"],
        disallow: [
          "/api/*", // Chặn API routes
          "/admin/*", // Chặn trang admin (nếu có)
          "/search", // Chặn trang tìm kiếm nội bộ (nếu có)
          "/private/*", // Chặn các trang riêng tư (nếu có)
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/asset/*"], // Cho phép crawl hình ảnh trong public/asset
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}