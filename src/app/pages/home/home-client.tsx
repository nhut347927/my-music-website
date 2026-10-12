"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Music,
  Disc,
  BookOpen,
  Search,
  Sparkles,
  ArrowRight,
  Headphones,
  Heart,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import heroBanner from "../../asset/hero-banner.jpg";

import { Post, LyricPost, PlaylistPost, BlogsPost } from "@/app/types/type";
import PostCard from "@/app/components/items/post-card";
import tree1 from "../../asset/tree1.jpg";
import tree2 from "../../asset/tree2.jpg";
import tree3 from "../../asset/tree3.jpg";
import tree4 from "../../asset/tree4.jpg";
import tree5 from "../../asset/tree5.jpg";
import tree6 from "../../asset/tree6.jpg";
import CategoryMarquee from "@/app/components/items/category-marquee";
import CurrentSongBanner from "@/app/components/items/current-song-banner";
import {
  getSongs,
  getPlaylists,
  getBlogs,
  recordVisitorEntranceNonBlocking,
  SongLyricRecord,
} from "@/services/music-supabase-service";

// Cấu trúc trích dẫn âm nhạc nghệ thuật
export interface MusicalQuote {
  quote: string;
  song: string;
  artist: string;
  slug: string;
  mood: string;
}

// Tuyển tập trích dẫn âm nhạc nghệ thuật, sâu lắng từ các bài hát chọn lọc
const curatedQuotes: MusicalQuote[] = [
  {
    quote: "Ai trong đời cũng từng muốn làm một người phi thường, cho đến khi nhận ra bình thường mới là điều can đảm nhất.",
    song: "Người Bình Thường",
    artist: "Vũ Cát Tường",
    slug: "lyric-nguoi-binh-thuong-vu-cat-tuong",
    mood: "Trưởng thành",
  },
  {
    quote: "Dưới bóng hoàng hôn buông lơi, ta tìm thấy sự bình yên giữa những ngày chênh vênh nhất của tuổi trẻ.",
    song: "Bình Yên",
    artist: "Vũ ft. Binz",
    slug: "lyric-binh-yen-vu-ft-binz",
    mood: "Bình yên",
  },
  {
    quote: "Nơi bão dừng sau cánh cửa, nơi những vết thương của năm tháng được sưởi ấm trong vòng tay người.",
    song: "Ấm",
    artist: "Sweet Liquor",
    slug: "lyric-am-sweet-liquor",
    mood: "Ấm áp",
  },
  {
    quote: "Tại vì sao bao nhiêu lâu nay anh vẫn luôn tìm kiếm... Một cảm giác dịu êm và nguyên vẹn như khi ở cạnh em.",
    song: "Chìm Sâu",
    artist: "RPT MCK ft. Trung Trần",
    slug: "lyric-chim-sau-rpt-mck-ft-trung-tran",
    mood: "Say đắm",
  },
  {
    quote: "Bao tiền một mớ bình yên? Bán cho tôi một chút nhẹ nhõm để tự vỗ về sau những mỏi mệt.",
    song: "Bao Tiền Một Mớ Bình Yên",
    artist: "14 Casper & Bon",
    slug: "lyric-bao-tien-mot-mo-binh-yen",
    mood: "Chữa lành",
  },
  {
    quote: "Cơn mưa ngoài kia rồi sẽ tạnh, chỉ có những kỷ niệm đẹp đẽ là ở lại vẹn nguyên trong ký ức.",
    song: "Vết Mưa",
    artist: "Vũ Cát Tường",
    slug: "lyric-vet-mua-vu-cat-tuong",
    mood: "Lắng đọng",
  },
  {
    quote: "Cứ mỉm cười cùng ngàn tia nắng, dẫu ngoài kia thế giới có quay cuồng đổi thay muôn vàn sắc thái.",
    song: "Thằng Điên",
    artist: "JustaTee ft. Phương Ly",
    slug: "lyric-thang-dien-justatee-ft-phuong-ly",
    mood: "Tự do",
  },
  {
    quote: "Dẫu ngày mai có ra sao, thì khoảnh khắc chúng ta sống hết mình cho hiện tại vẫn là điều rực rỡ nhất.",
    song: "Chúng Ta Của Hiện Tại",
    artist: "Sơn Tùng M-TP",
    slug: "lyric-chung-ta-cua-hien-tai-son-tung-m-tp",
    mood: "Hoài niệm",
  },
  {
    quote: "Có những điều chỉ khi chậm lại một nhịp, ta mới nhận ra mình đã từng nâng niu đến nhường nào.",
    song: "Tình Yêu Chậm Trễ",
    artist: "Grey D",
    slug: "lyric-tinh-yeu-cham-tre-grey-d",
    mood: "Chậm rãi",
  },
  {
    quote: "Lạc vào khu vườn ký ức bồng bềnh như mây, nơi ta cất giữ những rung cảm trong trẻo thuở ban đầu.",
    song: "Vườn Mây Vừa Hay",
    artist: "An Ngo",
    slug: "lyric-vuon-may-vua-hay-an-ngo",
    mood: "Mộng mơ",
  },
  {
    quote: "Một góc vườn nhỏ, một khoảng trời êm, gom nhặt những niềm vui dung dị thường ngày.",
    song: "Vườn Hoa Con Cá",
    artist: "O.lew ft. Ngân",
    slug: "lyric-vuon-hoa-con-ca-olew-ngan",
    mood: "Dịu dàng",
  },
  {
    quote: "Những giai điệu không lời đôi khi lại nói thay trọn vẹn những tâm tư sâu thẳm khó thành lời.",
    song: "id 072019",
    artist: "W/n",
    slug: "lyric-id-072019-wn",
    mood: "Sâu lắng",
  },
];

interface HomeClientProps {
  initialLyrics?: Post[];
  initialPlaylists?: Post[];
  initialBlogs?: Post[];
  initialCurrentSong?: SongLyricRecord | null;
  initialCounts?: { songs: number; playlists: number; blogs: number };
}

export default function HomeClient({
  initialLyrics = [],
  initialPlaylists = [],
  initialBlogs = [],
  initialCurrentSong = null,
  initialCounts = { songs: 59, playlists: 8, blogs: 7 },
}: HomeClientProps = {}) {
  const router = useRouter();
  const [latestLyrics, setLatestLyrics] = useState<Post[]>(initialLyrics);
  const [latestPlaylists, setLatestPlaylists] = useState<Post[]>(initialPlaylists);
  const [latestBlogs, setLatestBlogs] = useState<Post[]>(initialBlogs);
  const [totalCounts, setTotalCounts] = useState(initialCounts);
  const [heroSearch, setHeroSearch] = useState("");
  const [quoteList, setQuoteList] = useState<MusicalQuote[]>(curatedQuotes);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const currentQuote = quoteList[quoteIndex % quoteList.length] || curatedQuotes[0];

  // Random quote shuffle
  const handleShuffleQuote = () => {
    setQuoteIndex((prev) => {
      if (quoteList.length <= 1) return 0;
      let next = Math.floor(Math.random() * quoteList.length);
      while (next === prev && quoteList.length > 1) {
        next = Math.floor(Math.random() * quoteList.length);
      }
      return next;
    });
  };

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      router.push(`/pages/lyrics?search=${encodeURIComponent(heroSearch.trim())}`);
    }
  };

  useEffect(() => {
    // Randomize initial quote on client mount to prevent SSR hydration mismatch
    setQuoteIndex(Math.floor(Math.random() * curatedQuotes.length));

    // 1. Ghi nhận lượt truy cập của khách vào trang chủ (bất đồng bộ)
    recordVisitorEntranceNonBlocking({ page: "/" });

    // 2. Tải dữ liệu mới nhất từ Supabase Cloud (làm mới ngầm hoặc nạp nếu chưa có)
    async function loadDynamicContent() {
      try {
        const [songsRes, playlistsRes, blogsRes] = await Promise.all([
          getSongs({ page: 1, limit: 12, onlyActive: true }),
          getPlaylists({ page: 1, limit: 3 }),
          getBlogs({ page: 1, limit: 3 }),
        ]);

        if (songsRes && songsRes.data && songsRes.data.length > 0) {
          const mappedLyrics: LyricPost[] = songsRes.data.slice(0, 3).map((item) => {
            return {
              id: item.id || 0,
              type: "lyrics" as const,
              slug: item.slug,
              title: item.title,
              artist: item.artist,
              composer: item.composer || item.artist,
              producer: item.producer || "",
              year: item.year || "2024",
              duration: item.duration || "03:45",
              desc: item.desc || "",
              keywords: [],
              categories: item.categories || [],
              image: item.image_base64 || "",
              singerPhoto: item.singer_photo_base64 || "",
              audio: item.audio_url || item.spotify_url || "",
              spotifyUrl: item.spotify_url,
              spotifyTrackId: item.spotify_track_id,
              vibe: item.vibe,
              genre: item.genre,
              mood: item.mood,
              story: item.story,
              instruments: item.instruments,
              lyrics: item.lyrics || [],
              views: item.views || 0,
              date: item.created_at || "2025-01-01",
              otherSongs: [],
              userNameComment: "Admin",
              userRoleComment: "Music Editor",
              comment: "",
            };
          });
          setLatestLyrics(mappedLyrics);
        }

        if (playlistsRes && playlistsRes.data && playlistsRes.data.length > 0) {
          const mappedPlaylists: PlaylistPost[] = playlistsRes.data.map((item) => {
            return {
              id: item.id || 0,
              type: "playlists" as const,
              slug: item.slug,
              title: item.title,
              desc: item.desc || "",
              description: item.description || item.desc || "",
              keywords: item.keywords || [],
              categories: item.categories || [],
              image: item.image || "",
              banner: item.banner || item.image || "",
              songs: item.songs || [],
              mood: item.mood || "",
              final: item.final || "",
              views: item.views || 0,
              date: item.date || item.created_at || "2025-01-01",
            };
          });
          setLatestPlaylists(mappedPlaylists);
        }

        if (blogsRes && blogsRes.data && blogsRes.data.length > 0) {
          const mappedBlogs: BlogsPost[] = blogsRes.data.map((item) => {
            return {
              id: item.id || 0,
              type: "blogs" as const,
              slug: item.slug,
              title: item.title,
              desc: item.desc || "",
              keywords: item.keywords || [],
              categories: item.categories || [],
              image: item.image || "",
              paragraphs: (item.paragraphs as any) || [],
              userCommentAvatar: item.user_comment_avatar,
              userNameComment: item.user_name_comment || "Admin",
              userRoleComment: item.user_role_comment || "Editor",
              comment: item.comment || "",
              views: item.views || 0,
              date: item.date || item.created_at || "2025-01-01",
            };
          });
          setLatestBlogs(mappedBlogs);
        }

        setTotalCounts({
          songs: songsRes?.total || (songsRes?.data ? songsRes.data.length : 59),
          playlists: playlistsRes?.total || (playlistsRes?.data ? playlistsRes.data.length : 8),
          blogs: blogsRes?.total || (blogsRes?.data ? blogsRes.data.length : 7),
        });
      } catch (err) {
        console.warn("Notice loading dynamic content for home:", err);
      }
    }

    loadDynamicContent();
  }, []);

  return (
    <div className="space-y-28 md:space-y-36 my-6 md:my-10">
      {/* ================= HERO BANNER ================= */}
      <section className="relative overflow-hidden min-h-[500px] sm:min-h-[560px] rounded-4xl bg-black text-white flex flex-col justify-center items-center px-4 sm:px-8 py-20 text-center shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src={heroBanner}
            alt="Moe Hero Banner"
            fill
            className="object-cover opacity-60 scale-105 transition-transform duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide text-neutral-200">
            <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
            <span>Thế giới giai điệu &amp; Cảm nhận âm nhạc sâu lắng</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            !"Ước được gặp nhau mỗi ngày!"
          </h1>

          <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Khám phá {totalCounts.songs}+ bài hát chọn lọc, những trích đoạn ca từ chạm đến trái tim và tuyển tập playlist theo từng cung bậc tâm trạng của bạn.
          </p>

          {/* Interactive Live Search Form */}
          <form
            onSubmit={handleHeroSearchSubmit}
            className="relative max-w-xl mx-auto flex items-center bg-white/10 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 rounded-2xl p-1.5 shadow-2xl transition-all focus-within:border-white focus-within:ring-2 focus-within:ring-white/30"
          >
            <Search className="w-5 h-5 text-neutral-300 ml-3.5 shrink-0" />
            <input
              type="text"
              placeholder="Tìm kiếm bài hát, ca sĩ, playlist hoặc tâm trạng..."
              value={heroSearch}
              onChange={(e) => setHeroSearch(e.target.value)}
              className="flex-1 bg-transparent border-none text-white text-sm sm:text-base px-3 py-2 outline-none placeholder:text-neutral-300 font-medium"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-neutral-200 transition shadow-md cursor-pointer shrink-0"
            >
              Khám phá
            </button>
          </form>

          {/* Quick Mood Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs text-neutral-300 font-medium">Tâm trạng:</span>
            {[
              { label: "☕ Thư giãn", query: "chill" },
              { label: "🌧️ Lắng đọng", query: "buồn" },
              { label: "🎸 Acoustic", query: "acoustic" },
              { label: "✨ Yêu đời", query: "tình yêu" },
              { label: "🌙 Đêm muộn", query: "đêm" },
              { label: "🌱 Chữa lành", query: "chữa lành" },
            ].map((m) => (
              <Link
                key={m.label}
                href={`/pages/lyrics?search=${encodeURIComponent(m.query)}`}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 hover:bg-white/25 border border-white/20 text-neutral-200 hover:text-white backdrop-blur-md transition-all hover:scale-105"
              >
                {m.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= BÀI HÁT HIỆN TẠI (FEATURED SPOTIFY BANNER) ================= */}
      <CurrentSongBanner initialSong={initialCurrentSong} />

      {/* ================= QUOTE OF THE DAY / TRÍCH DẪN ÂM NHẠC ================= */}
      <section className="p-8 sm:p-10 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-background/70 backdrop-blur-xl shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-[11px] font-bold uppercase tracking-wider font-mono">
                ✨ Trích dẫn âm nhạc
              </span>
              <span className="text-xs text-neutral-400 font-medium">• Tâm trạng: {currentQuote.mood}</span>
            </div>

            <blockquote className="text-lg sm:text-2xl font-medium text-foreground italic leading-relaxed">
              &ldquo;{currentQuote.quote}&rdquo;
            </blockquote>

            <p className="text-xs text-neutral-500 font-medium">
              Trích từ ca khúc <strong className="text-foreground">{currentQuote.song}</strong> — {currentQuote.artist}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleShuffleQuote}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-foreground text-xs font-semibold transition cursor-pointer"
              title="Đổi câu trích dẫn khác"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Đổi câu hát</span>
            </button>

            <Link
              href={`/pages/lyrics/${currentQuote.slug}`}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 text-xs font-semibold transition shadow-xs"
            >
              <Music className="w-3.5 h-3.5" />
              <span>Xem lời &amp; Nghe thử</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY MARQUEE ================= */}
      <CategoryMarquee />

      {/* ================= LYRICS SECTION ================= */}
      <section className="space-y-8">
        <div className="flex justify-between items-center px-1">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700">
                <Music className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Lyrics &amp; Lời ca Mới nhất
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-medium">
              Trích đoạn ca từ sâu lắng kèm phân tích câu chuyện sáng tác và Spotify preview.
            </p>
          </div>

          <Link
            href="/pages/lyrics"
            className="inline-flex items-center gap-1 text-xs font-bold text-foreground hover:underline underline-offset-4 shrink-0"
          >
            <span>Xem tất cả ({totalCounts.songs})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestLyrics.map((post) => (
            <PostCard key={post.id || post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* ================= PLAYLISTS SECTION ================= */}
      <section className="space-y-8">
        <div className="flex justify-between items-center px-1">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700">
                <Disc className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Tuyển tập Playlist Theo Tâm Trạng
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-medium">
              Những danh sách phát được chọn lọc kỹ càng cho từng khoảnh khắc trong ngày.
            </p>
          </div>

          <Link
            href="/pages/playlists"
            className="inline-flex items-center gap-1 text-xs font-bold text-foreground hover:underline underline-offset-4 shrink-0"
          >
            <span>Xem tất cả ({totalCounts.playlists})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestPlaylists.map((post) => (
            <PostCard key={post.id || post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* ================= BLOGS SECTION ================= */}
      <section className="space-y-8">
        <div className="flex justify-between items-center px-1">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Góc Cảm Nhận &amp; Nhật Ký Âm Nhạc
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-medium">
              Bài viết chuyên sâu về đời sống âm nhạc, nghệ sĩ tiêu biểu và xu hướng văn hóa nghe.
            </p>
          </div>

          <Link
            href="/pages/blogs"
            className="inline-flex items-center gap-1 text-xs font-bold text-foreground hover:underline underline-offset-4 shrink-0"
          >
            <span>Xem tất cả ({totalCounts.blogs})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestBlogs.map((post) => (
            <PostCard key={post.id || post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* ================= GIỚI THIỆU & THƯ VIỆN ẢNH NGHỆ THUẬT ================= */}
      <section className="p-8 sm:p-12 rounded-4xl border border-neutral-200/80 dark:border-neutral-800/80 bg-background/60 backdrop-blur-xl space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-neutral-700 dark:text-neutral-300">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold">
              <Heart className="w-3.5 h-3.5" />
              <span>Về không gian Moe</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Âm nhạc xoa dịu tâm hồn và lưu giữ những kỷ niệm
            </h2>

            <p className="text-sm leading-relaxed">
              Trong văn hóa Nhật, “Moe” mang ý nghĩa về sự hạnh phúc, dễ thương và cảm giác được truyền cảm hứng. Trang web được xây dựng như một góc nhỏ bình yên, nơi bạn có thể gác lại những xô bồ, lắng nghe những bản nhạc mộc mạc và tìm thấy sự đồng điệu trong tâm hồn.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200/60 dark:border-neutral-700/60 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono">
                  {totalCounts.songs}+
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Ca khúc &amp; Lời</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200/60 dark:border-neutral-700/60 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono">
                  {totalCounts.playlists}+
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Tuyển tập Mood</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200/60 dark:border-neutral-700/60 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono">
                  {totalCounts.blogs}+
                </div>
                <div className="text-[11px] text-neutral-500 font-medium mt-0.5">Bài viết cảm nhận</div>
              </div>
            </div>
          </div>

          {/* Right Aesthetic Gallery */}
          <div className="grid grid-cols-2 gap-3">
            {[tree1, tree2, tree3, tree4].map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 group"
              >
                <Image
                  src={img}
                  alt={`Aesthetic vibe ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
