"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBanner from "./asset/hero-banner.jpg";
import { ArrowRight } from "lucide-react";
import tree1 from "./asset/tree1.jpg";
import tree2 from "./asset/tree2.jpg";
import tree3 from "./asset/tree3.jpg";
import tree4 from "./asset/tree4.jpg";
import tree5 from "./asset/tree5.jpg";
import { lyricsData } from "./data/lyrics-data";
import { playlistsData } from "./data/playlists-data";
import { blogData } from "./data/blog-data";
import PostCard from "./components/items/post-card";

export default function HomePage() {
  const sections = [
    {
      title: "🎵 Lời bài hát nổi bật",
      link: "/pages/lyrics",
      data: lyricsData,
    },
    {
      title: "🎧 Playlist hay hôm nay",
      link: "/pages/playlists",
      data: playlistsData,
    },
    {
      title: "📊 Bài blogs đáng chú ý",
      link: "/pages/blog",
      data: blogData,
    },
  ];

  return (
    <div className="space-y-20">
      {/* 🌟 HERO SECTION */}
      <section className="relative overflow-hidden rounded-[2rem] bg-black text-white py-24 px-6 text-center">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <Image
            src={heroBanner}
            alt="Moe Music Hero"
            fill
            className="object-cover scale-105 transition-transform duration-[3000ms] ease-out"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            Vì tớ thích nhạc nên tạo ra{" "}
            <span className="text-pink-400">Moe</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 mb-8 max-w-2xl mx-auto">
            Ờ thì ở đây sẽ chia sẻ những góc nhìn không bình thường lắm về nhạc,
            ca sĩ và cảm xúc.
          </p>

          <Button
            asChild
            className="bg-white text-black/70 font-medium h-12 w-56 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:scale-105 hover:bg-white/90 hover:text-black transition-all duration-300"
          >
            <Link
              href="/pages/playlists"
              className="flex items-center justify-center gap-2"
            >
              Bắt đầu tham quan thôi <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* 🪄 SECTIONS */}
      {sections.map((section) => (
        <section
          key={section.title}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">
              {section.title}
            </h2>
            <Link
              href={section.link}
              className="text-sm text-neutral-500 hover:text-foreground transition-colors"
            >
              Xem thêm →
            </Link>
          </div>

          {/* Posts Grid */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              gap-5 sm:gap-6
            "
          >
            {section.data.slice(0, 6).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      ))}

      {/* 🎨 GALLERY CUỐI TRANG */}
      <section className="w-full px-4 sm:px-6 pb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 max-w-6xl mx-auto text-center sm:text-left">
          📸 Mấy tấm ảnh đẹp đẹp mà không liên quan
        </h2>

        <div
          className="
      grid 
      grid-cols-1 
      lg:grid-cols-2 
      gap-4
    "
        >
          {/* Cột trái: 4 ảnh vuông */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {[tree1, tree2, tree3, tree4].map((img, i) => (
              <div
                key={i}
                className="relative w-full aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Ảnh ${i + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Cột phải: ảnh cao */}
          <div
            className="
      relative 
      w-full 
      h-80 
      sm:h-[500px] 
      lg:h-auto 
      rounded-xl 
      overflow-hidden
    "
          >
            <Image
              src={tree5}
              alt="Ảnh lớn"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
