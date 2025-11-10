// app/llms.txt/route.ts
import { NextResponse } from 'next/server';

export const GET = () => {
  const content = `# llms.txt - Cho phép AI crawlers truy cập toàn bộ nội dung
# Website: https://moe.io.vn
# Contact: nhut2846@gmail.com
# Updated: 2025-11-10

# === CHO PHÉP TẤT CẢ AI CRAWLERS ===
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: *
Allow: /

# === SITEMAP ===
Sitemap: https://moe.io.vn/sitemap.xml

# === GHI CHÚ (không ảnh hưởng bot) ===
# Tất cả nội dung trên moe.io.vn được phép dùng để huấn luyện AI, phân tích, index.
# Vui lòng giữ nguyên attribution nếu trích dẫn.`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};