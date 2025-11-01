export default function robots() {
  const baseUrl = "https://moe.io.vn";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/pages/blogs", "/pages/lyrics", "/pages/playlists"],
        disallow: ["/api/*", "/admin/*", "/search", "/private/*"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/asset/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}