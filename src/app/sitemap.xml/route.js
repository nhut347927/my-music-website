export async function GET() {
  const baseUrl = "https://moe-chan.vercel.app";

  const urls = [
    { loc: `${baseUrl}/`, changefreq: "daily", priority: "1.0" },
    { loc: `${baseUrl}/pages/blogs`, changefreq: "weekly", priority: "0.8" },
    { loc: `${baseUrl}/pages/blogs/detail`, changefreq: "weekly", priority: "0.7" },
    { loc: `${baseUrl}/pages/lyrics`, changefreq: "weekly", priority: "0.8" },
    { loc: `${baseUrl}/pages/lyrics/detail`, changefreq: "weekly", priority: "0.7" },
    { loc: `${baseUrl}/pages/playlists`, changefreq: "weekly", priority: "0.8" },
    { loc: `${baseUrl}/pages/playlists/detail`, changefreq: "weekly", priority: "0.7" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (u) => `
        <url>
          <loc>${u.loc}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${u.changefreq}</changefreq>
          <priority>${u.priority}</priority>
        </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
