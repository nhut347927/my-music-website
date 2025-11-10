// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';
import { allPosts } from '@/app/data/index';

const baseUrl = 'https://moe.io.vn';
const BUILD_TIME = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Trang tĩnh
const staticUrls = [
  { loc: '/', changefreq: 'daily', priority: '1.0', lastmod: BUILD_TIME },
  { loc: '/pages/blogs', changefreq: 'weekly', priority: '0.8', lastmod: BUILD_TIME },
  { loc: '/pages/lyrics', changefreq: 'weekly', priority: '0.8', lastmod: BUILD_TIME },
  { loc: '/pages/playlists', changefreq: 'weekly', priority: '0.8', lastmod: BUILD_TIME },
];

function generateDynamicUrl(post: typeof allPosts[0]) {
  const typeMap: Record<string, string> = {
    lyrics: '/pages/lyrics',
    playlists: '/pages/playlists',
    blogs: '/pages/blogs',
  };
  return `${typeMap[post.type]}/${post.slug}`;
}

function getMetadata(post: typeof allPosts[0]) {
  const lastmod = post.date ? new Date(post.date).toISOString().split('T')[0] : BUILD_TIME;
  const config: Record<string, { changefreq: string; priority: string }> = {
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

function generateSitemap() {
  const dynamicUrls = allPosts.map((post) => {
    const url = generateDynamicUrl(post);
    const { lastmod, changefreq, priority } = getMetadata(post);
    return { loc: url, lastmod, changefreq, priority };
  });

  const allUrls = [...staticUrls, ...dynamicUrls];

  const xmlItems = allUrls
    .map(
      (u) => `  <url>
    <loc>${baseUrl}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');

  // DÒNG NÀY PHẢI LIỀN MẠCH – KHÔNG XUỐNG DÒNG
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSitemap();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}