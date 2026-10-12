// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';
import { getSongs, getPlaylists, getBlogs } from '@/services/music-supabase-service';

export const revalidate = 3600;

const baseUrl = 'https://moe.io.vn';
const BUILD_TIME = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Trang tĩnh
const staticUrls = [
  { loc: '', changefreq: 'daily', priority: '1.0', lastmod: BUILD_TIME },
  { loc: '/pages/blogs', changefreq: 'weekly', priority: '0.8', lastmod: BUILD_TIME },
  { loc: '/pages/lyrics', changefreq: 'weekly', priority: '0.8', lastmod: BUILD_TIME },
  { loc: '/pages/playlists', changefreq: 'weekly', priority: '0.8', lastmod: BUILD_TIME },
];

export async function GET() {
  const [songsRes, playlistsRes, blogsRes] = await Promise.all([
    getSongs({ limit: 1000, onlyActive: true }).catch(() => ({ data: [] })),
    getPlaylists({ limit: 1000, onlyActive: true }).catch(() => ({ data: [] })),
    getBlogs({ limit: 1000, onlyActive: true }).catch(() => ({ data: [] })),
  ]);

  const dynamicUrls: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }> = [];

  (songsRes.data || []).forEach((song) => {
    if (song.slug) {
      const lastmod = song.updated_at || song.created_at ? new Date(song.updated_at || song.created_at!).toISOString().split('T')[0] : BUILD_TIME;
      dynamicUrls.push({
        loc: `/pages/lyrics/${song.slug}`,
        lastmod,
        changefreq: 'monthly',
        priority: '0.7',
      });
    }
  });

  (playlistsRes.data || []).forEach((pl) => {
    if (pl.slug) {
      const lastmod = pl.updated_at || pl.created_at ? new Date(pl.updated_at || pl.created_at!).toISOString().split('T')[0] : BUILD_TIME;
      dynamicUrls.push({
        loc: `/pages/playlists/${pl.slug}`,
        lastmod,
        changefreq: 'weekly',
        priority: '0.7',
      });
    }
  });

  (blogsRes.data || []).forEach((blog) => {
    if (blog.slug) {
      const lastmod = blog.updated_at || blog.created_at ? new Date(blog.updated_at || blog.created_at!).toISOString().split('T')[0] : BUILD_TIME;
      dynamicUrls.push({
        loc: `/pages/blogs/${blog.slug}`,
        lastmod,
        changefreq: 'weekly',
        priority: '0.8',
      });
    }
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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}