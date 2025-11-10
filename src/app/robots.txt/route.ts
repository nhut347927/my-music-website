// app/robots.txt/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/
Disallow: /private/

User-agent: Googlebot-Image
Allow: /asset/

# === CHO PHÉP AI CRAWLERS (gộp từ llms.txt) ===
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: FacebookBot
Allow: /

Sitemap: https://moe.io.vn/sitemap.xml`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}