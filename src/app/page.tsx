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
import lr from "./asset/lyric.jpg";
import pl from "./asset/playlist.jpg";
import blog from "./asset/blog.jpg";

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* 🌟 HERO SECTION */}
      <section className="relative overflow-hidden rounded-[2rem] bg-black text-white py-24 px-6 text-center">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <Image
            src={heroBanner}
            alt="Moe Hero Banner"
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
            Vì định mệnh nói tớ tạo ra{" "}
            <span className="text-pink-400">Moe</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 mb-8 max-w-2xl mx-auto">
            Ở đây, tớ sẽ viết những thứ mà chắc chắn trong dòng chảy thời gian
            bạn nhất định sẽ đọc được.
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

      {/* 🎵 LYRICS SECTION */}
      <section className="max-w-6xl mx-auto ">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">
            🎵 Lời bài hát nổi bật
          </h2>
          <Link
            href="/pages/lyrics"
            className="text-sm text-neutral-500 hover:text-foreground transition-colors"
          >
            Xem chi tiết →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={lr}
              alt="Lời bài hát nổi bật"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2">Lời bài hát chọn lọc</h3>
            <p className="text-neutral-600 text-justify">
              Khám phá những ca từ đầy cảm xúc, từ những bài hát trending đến
              các tác phẩm kinh điển. Mỗi lời bài hát là một câu chuyện, chờ bạn
              cảm nhận! Ở đây, bạn có thể đọc, hiểu và đồng cảm với từng câu chữ
              – nơi mỗi ca từ đều mang một ý nghĩa riêng, phản ánh tâm trạng,
              tình yêu và những trải nghiệm của người nghệ sĩ. Dù là những bản
              hit đang được yêu thích hay những ca khúc đã sống mãi với thời
              gian, từng lời hát đều chứa đựng cảm xúc chân thật. Chúng tôi giúp
              bạn kết nối với âm nhạc theo cách sâu sắc hơn – không chỉ nghe, mà
              còn cảm nhận từng câu từng chữ. Hãy để lời bài hát trở thành cầu
              nối giữa cảm xúc và tâm hồn, giúp bạn tìm thấy chính mình trong âm
              nhạc.
            </p>
          </div>
        </div>
      </section>

      {/* 🎧 PLAYLISTS SECTION */}
      <section className="max-w-6xl mx-auto ">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">
            🎧 Playlist hay hôm nay
          </h2>
          <Link
            href="/pages/playlists"
            className="text-sm text-neutral-500 hover:text-foreground transition-colors"
          >
            Xem chi tiết →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={pl}
              alt="Playlist hay hôm nay"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2">
              Playlist được yêu thích
            </h3>
            <p className="text-neutral-600 text-justify">
              Thưởng thức những playlist được tuyển chọn kỹ lưỡng, phù hợp với
              mọi tâm trạng và khoảnh khắc. Từ chill đến sôi động, tất cả đều ở
              đây! Mỗi playlist được tạo nên từ sự kết hợp hài hòa giữa cảm xúc
              và giai điệu, giúp bạn dễ dàng tìm thấy bản nhạc đồng điệu với
              mình. Dù bạn đang thư giãn sau một ngày dài, tìm chút năng lượng
              cho buổi sáng, hay chỉ muốn nghe vài giai điệu quen thuộc giữa đêm
              yên tĩnh — chúng tôi đều có playlist dành riêng cho bạn. Hãy để âm
              nhạc đồng hành cùng mọi khoảnh khắc trong ngày, giúp bạn tập trung
              hơn, vui vẻ hơn, và đôi khi chỉ đơn giản là sống chậm lại một chút
              giữa nhịp đời vội vã. Cứ mở nhạc lên, và để cảm xúc dẫn lối.
            </p>
          </div>
        </div>
      </section>

      {/* <section>

        thử gửi chính mình
      </section> */}

      {/* 📊 BLOGS SECTION */}
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">
            📊 Bài blogs đáng chú ý
          </h2>
          <Link
            href="/pages/blog"
            className="text-sm text-neutral-500 hover:text-foreground transition-colors"
          >
            Xem chi tiết →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={blog}
              alt="Bài blogs đáng chú ý"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2">
              Blog trải nghiệm của chính tôi
            </h3>
            <p className="text-neutral-600 text-justify">
             Đây là nơi tôi ghi lại những suy nghĩ, cảm xúc và trải nghiệm của mình – đôi khi là về âm nhạc, đôi khi chỉ là những điều vụn vặt trong cuộc sống. Mỗi bài viết là một lát cắt nhỏ trong hành trình học hỏi, trưởng thành và khám phá chính bản thân. Tôi chia sẻ những bài hát khiến tôi suy ngẫm, những khoảnh khắc khiến tôi thay đổi, và cả những bài học tôi rút ra sau mỗi lần vấp ngã.

Có những ngày tôi viết để hiểu mình hơn, có những ngày chỉ để trút hết những điều chất chứa trong lòng. Âm nhạc, cảm xúc và những trải nghiệm nhỏ bé ấy dần trở thành tấm gương phản chiếu tâm hồn – giúp tôi nhận ra điều gì thực sự quan trọng. Hy vọng khi bạn đọc, bạn cũng sẽ tìm thấy một phần cảm xúc quen thuộc, hoặc ít nhất là một chút bình yên giữa những dòng chữ này.
            </p>
          </div>
        </div>
      </section>

      {/* 🎨 GALLERY CUỐI TRANG */}
      <section className="w-full px-4 sm:px-6 pb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 max-w-6xl mx-auto text-center sm:text-left">
          📸 Mấy tấm ảnh đẹp đẹp hợp tâm trạng
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
