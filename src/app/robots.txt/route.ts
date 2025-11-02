import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-Agent: *
Allow: /
Disallow: /api/*
Disallow: /admin/*
Disallow: /private/*

User-Agent: Googlebot-Image
Allow: /asset/*

Sitemap: https://moe.io.vn/sitemap.xml`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}