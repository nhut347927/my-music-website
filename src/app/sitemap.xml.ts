import { NextResponse } from 'next/server';

// Định nghĩa danh sách URL tĩnh
const baseUrl = 'https://moe-chan.vercel.app';
const urls = [
  { loc: '/', changefreq: 'daily', priority: '1.0' },
  { loc: '/pages/blogs', changefreq: 'weekly', priority: '0.8' },
  { loc: '/pages/blogs/detail', changefreq: 'weekly', priority: '0.7' },
  { loc: '/pages/lyrics', changefreq: 'weekly', priority: '0.8' },
  { loc: '/pages/lyrics/detail', changefreq: 'weekly', priority: '0.7' },
  { loc: '/pages/playlists', changefreq: 'weekly', priority: '0.8' },
  { loc: '/pages/playlists/detail', changefreq: 'weekly', priority: '0.7' },
];

// Hàm tạo nội dung sitemap XML
function generateSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (u) => `
    <url>
      <loc>${baseUrl}${u.loc}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${u.changefreq}</changefreq>
      <priority>${u.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;
}

// API Route trả về sitemap.xml
export async function GET() {
  const sitemap = generateSitemap();
  
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}