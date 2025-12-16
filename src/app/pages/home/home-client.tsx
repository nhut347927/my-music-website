"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroBanner from "../../asset/hero-banner.jpg";

import { allPosts } from "@/app/data/index";
import { Post } from "@/app/types/type";
import PostCard from "@/app/components/items/post-card";
import tree1 from "../../asset/tree1.jpg";
import tree2 from "../../asset/tree2.jpg";
import tree3 from "../../asset/tree3.jpg";
import tree4 from "../../asset/tree4.jpg";
import tree5 from "../../asset/tree5.jpg";
import tree6 from "../../asset/tree6.jpg";
const getLatestPosts = (type: Post["type"], limit = 3) =>
  allPosts
    .filter((post) => post.type === type)
    .sort(
      (a, b) =>
        new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
    )
    .slice(0, limit);

export default function HomeClient() {
  const latestLyrics = getLatestPosts("lyrics");
  const latestPlaylists = getLatestPosts("playlists");
  const latestBlogs = getLatestPosts("blogs");

  return (
    <div className="space-y-24 mt-6">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden h-[60vh] rounded-4xl bg-black text-white pt-40 px-6 text-center">
        <div className="absolute inset-0">
          <Image
            src={heroBanner}
            alt="Moe Hero Banner"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Chào mừng bạn đến với <span className="text-pink-400">Moe</span>
          </h1>
          <p className="text-neutral-200 max-w-2xl mx-auto">
            Một góc nhỏ để lưu lại âm nhạc, giai điệu mà bạn đã nhớ, đã quên.
          </p>
        </motion.div>
      </section>
      {/* GIỚI THIỆU */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
  {/* TEXT */}
  <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
    <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
      Về <span className="text-pink-500">Moe</span>
    </h2>

    <p>
      <strong className="text-neutral-900 dark:text-white">Moe</strong> là
      một cái tên mình nghĩ ra cách đây khoảng hai năm. Khi tìm hiểu thì
      biết trong văn hoá Nhật, “Moe” mang ý nghĩa về sự hạnh phúc, dễ
      thương và cảm giác được truyền cảm hứng. Nghe thấy cũng hợp tai nên
      mình quyết định chọn luôn làm tên cho trang web này.
    </p>

    <p>
      Logo được lấy cảm hứng từ phong cách tối giản của GitHub, kết hợp
      thêm một chút vibe công nghệ hiện đại vào đúng thời điểm AI của Bing
      (tiền thân của Copilot) vừa ra mắt. À, nói trước cho khỏi hiểu lầm:
      logo này không phải mèo đen đâu nha.
    </p>

    <p>
      Trên{" "}
      <strong className="text-neutral-900 dark:text-white">Moe</strong>,
      mình chia sẻ các nội dung xoay quanh âm nhạc như lời bài hát kèm
      đoạn nghe thử khoảng 30 giây, các playlist được chọn lọc theo từng
      chủ đề, cùng những bài blog tổng hợp danh sách bài hát hay nhất theo
      từng năm, các ca sĩ nổi tiếng và những ca khúc tiêu biểu của họ.
    </p>

    <p className="text-sm text-neutral-500 dark:text-neutral-400">
      Cảm ơn bạn đã ghé thăm và dành thời gian đọc tới đây ✨
    </p>
  </div>

  {/* IMAGE */}
  <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden">
    <Image
      src={tree6}
      alt="About Moe"
      fill
      className="object-cover hover:scale-105 transition-transform duration-700"
      priority={false}
    />
    {/* overlay nhẹ cho hợp theme */}
    <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
  </div>
</section>


      {/* ================= LYRICS ================= */}
      <section className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold">🎵 Lyrics mới nhất</h2>
          <Link
            href="/pages/lyrics"
            className="text-sm text-neutral-500 hover:text-foreground"
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestLyrics.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* ================= PLAYLISTS ================= */}
      <section className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold">🎧 Playlist nổi bật</h2>
          <Link
            href="/pages/playlists"
            className="text-sm text-neutral-500 hover:text-foreground"
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPlaylists.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* ================= BLOGS ================= */}
      <section className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold">📊 Blog gần đây</h2>
          <Link
            href="/pages/blogs"
            className="text-sm text-neutral-500 hover:text-foreground"
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestBlogs.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      {/* 🎨 GALLERY CUỐI TRANG */}
      <section className="w-full pb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 max-w-6xl mx-auto text-center sm:text-left">
          Chỗ trưng bài ảnh thôi !
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
          <div className="relative w-full h-80 sm:h-[500px] lg:h-auto rounded-xl overflow-hidden">
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
