import { NextResponse } from 'next/server';
import { allPosts } from '@/app/data/index';

const baseUrl = 'https://moe.io.vn';

// Trang tĩnh
const staticUrls = [
  { loc: '/', changefreq: 'daily', priority: '1.0', lastmod: new Date().toISOString() },
  { loc: '/pages/blogs', changefreq: 'weekly', priority: '0.8', lastmod: new Date().toISOString() },
  { loc: '/pages/lyrics', changefreq: 'weekly', priority: '0.8', lastmod: new Date().toISOString() },
  { loc: '/pages/playlists', changefreq: 'weekly', priority: '0.8', lastmod: new Date().toISOString() },
];

// Hàm tạo URL động từ slug + type
function generateDynamicUrl(post: typeof allPosts[0]) {
  const typeMap = {
    lyrics: '/pages/lyrics',
    playlists: '/pages/playlists',
    blogs: '/pages/blogs',
  };

  const path = typeMap[post.type];
  return `${path}/${post.slug}`;
}

// Ưu tiên & tần suất thay đổi theo loại
function getMetadata(post: typeof allPosts[0]) {
  const now = new Date().toISOString();
  const lastmod = post.date ? new Date(post.date).toISOString() : now;

  const config = {
    lyrics: { changefreq: 'monthly', priority: '0.7' },
    playlists: { changefreq: 'weekly', priority: '0.7' },
    blogs: { changefreq: 'weekly', priority: '0.8' },
  };

  return {
    lastmod,
    changefreq: config[post.type].changefreq,
    priority: config[post.type].priority,
  };
}

// Tạo XML
function generateSitemap() {
  const dynamicUrls = allPosts.map((post) => {
    const url = generateDynamicUrl(post);
    const { lastmod, changefreq, priority } = getMetadata(post);

    return { loc: url, lastmod, changefreq, priority };
  });

  const allUrls = [...staticUrls, ...dynamicUrls];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (u) => `
  <url>
    <loc>${baseUrl}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;
}

// API Route
export async function GET() {
  const sitemap = generateSitemap();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      // Cache 1 giờ
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}