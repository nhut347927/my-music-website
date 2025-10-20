// src/app/sitemap.js

export default async function sitemap() {
  const baseUrl = "https://moe-chan.vercel.app";

  return [
    // Trang chính
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },

    // Trang blogs
    {
      url: `${baseUrl}/pages/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pages/blogs/detail`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Trang lyrics
    {
      url: `${baseUrl}/pages/lyrics`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pages/lyrics/detail`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Trang playlists
    {
      url: `${baseUrl}/pages/playlists`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pages/playlists/detail`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
