// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  Music,
  Sparkles,
  Mail,
  ShieldCheck,
  FlaskConical,
  Compass,
  HeartHandshake,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import heroBanner from "../asset/hero-banner.jpg";

export const metadata = {
  title: "Giới thiệu & Tôn chỉ Hoạt động | Moe Music",
  description:
    "Moe Music - Không gian cảm nhận âm nhạc, phân tích giai điệu và dự án nghiên cứu thói quen tiếp cận truyền thông số tại thị trường Việt Nam.",
  keywords:
    "Moe Music, cảm nhận âm nhạc, nghiên cứu truyền thông số, affiliate marketing Việt Nam, playlist theo tâm trạng, Spotify Embed",
  openGraph: {
    title: "Giới thiệu & Tôn chỉ Hoạt động | Moe Music",
    description:
      "Khám phá sứ mệnh kết nối cảm xúc qua âm nhạc và định hướng nghiên cứu truyền thông số tại Moe Music.",
    url: "https://moe.io.vn/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[50vh] min-h-[380px] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={heroBanner}
          alt="Giới thiệu về Moe Music - Không gian cảm nhận âm nhạc"
          fill
          className="object-cover brightness-[0.65]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 md:p-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold w-fit mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Âm nhạc • Cảm xúc • Nghiên cứu Truyền thông số</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Về chúng tôi &amp; Tôn chỉ hoạt động
          </h1>
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-2xl">
            Moe Music là không gian lưu giữ cảm xúc, phân tích bối cảnh nghệ thuật và dự án nghiên cứu độc lập về hành vi nghe nhạc số cùng tiềm năng phát triển nội dung số tại Việt Nam.
          </p>
        </div>
      </section>

      {/* ================= NỘI DUNG CHÍNH ================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-14">
        {/* 1. SỨ MỆNH & ĐỊNH HƯỚNG NỘI DUNG */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 space-y-3">
            <div className="inline-flex p-3 rounded-2xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
              <Music className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Không gian Cảm xúc Âm nhạc
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Tạo dựng sự đồng điệu giữa ca từ, giai điệu và tâm trạng của người nghe.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>
              Tại <strong>Moe Music</strong>, mỗi bản nhạc không chỉ đơn thuần là giai điệu giải trí mà là một câu chuyện đời thường, một ký ức thanh xuân hay một liều thuốc tinh thần xoa dịu tâm hồn.
            </p>
            <p>
              Chúng tôi tập trung xây dựng các tuyển tập bài hát theo tâm trạng (*Mood Playlists*), phân tích bối cảnh sáng tác (*Storytelling*) và trích dẫn các câu hát lay động lòng người, giúp bạn đọc tìm lại những rung cảm chân thành nhất trong cuộc sống hiện đại.
            </p>
          </div>
        </div>

        {/* 2. NGHIÊN CỨU & THỬ NGHIỆM MÔ HÌNH TRUYỀN THÔNG SỐ */}
        <div className="p-7 sm:p-10 rounded-3xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-500">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Nghiên cứu &amp; Thử nghiệm Mô hình Truyền thông Số
              </h2>
              <p className="text-xs text-neutral-500">
                Định hướng khảo nghiệm công nghệ và hành vi người dùng tại thị trường Việt Nam.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              Bên cạnh tình yêu dành cho âm nhạc, Moe Music còn hoạt động như một <strong>dự án nghiên cứu độc lập</strong> nhằm theo dõi, đánh giá và thử nghiệm các xu hướng vận hành nội dung số đương đại, bao gồm:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-background/80 border border-neutral-200 dark:border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                  <Compass className="w-4 h-4 text-purple-500" />
                  <span>1. Khảo sát Hành vi &amp; Thói quen Nghe</span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Tìm hiểu cách thức độc giả trẻ tiếp nhận âm nhạc thông qua các nền tảng Streaming thế hệ mới, sự chuyển dịch từ tìm kiếm thụ động sang thưởng thức theo tâm trạng và bối cảnh cảm xúc.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-background/80 border border-neutral-200 dark:border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4 text-purple-500" />
                  <span>2. Tiềm năng Tiếp thị Liên kết &amp; Quảng cáo</span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Thử nghiệm tính hiệu quả và mức độ thân thiện của các mô hình quảng cáo tự động (*Programmatic Ads*) cùng tiềm năng kết nối tiếp thị liên kết (*Affiliate Marketing*) trong ngành sản phẩm âm thanh, nhạc cụ và thiết bị phong cách sống tại Việt Nam.
                </p>
              </div>
            </div>

            <p className="pt-2 text-xs text-neutral-500 italic">
              * Chúng tôi cam kết mọi thử nghiệm công nghệ hay giải pháp hiển thị đối tác đều tuân thủ nguyên tắc tôn trọng trải nghiệm người dùng, đảm bảo tốc độ tải trang tối ưu và hoàn toàn không làm gián đoạn cảm xúc nghe nhạc của bạn.
            </p>
          </div>
        </div>

        {/* 3. TÔN TRỌNG BẢN QUYỀN & CHÍNH SÁCH NỘI DUNG */}
        <div className="p-7 sm:p-10 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Tôn trọng Bản quyền &amp; Sở hữu Trí tuệ
              </h2>
              <p className="text-xs text-neutral-500">
                Đồng hành và ủng hộ quyền lợi chính đáng của các nhạc sĩ, ca sĩ và nhà sản xuất.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed divide-y divide-neutral-200 dark:divide-neutral-800">
            <div className="pt-2 space-y-2">
              <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Trình phát chính thống (Spotify &amp; YouTube Embeds)</span>
              </h3>
              <p>
                Website không lưu trữ hay phân phối trực tiếp bất kỳ tệp tin âm thanh nào. Tất cả lượt phát nhạc đều được thực hiện qua tiện ích nhúng chính thức của Spotify và YouTube. Nhờ đó, lượt nghe và quyền lợi bản quyền được chuyển giao nguyên vẹn về nghệ sĩ.
              </p>
            </div>

            <div className="pt-4 space-y-2">
              <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Trích đoạn Lời &amp; Phân tích Phê bình (Fair Use)</span>
              </h3>
              <p>
                Việc trích dẫn một phần ngắn ca từ được thực hiện trên tinh thần bình luận, cảm nhận và lan tỏa vẻ đẹp nghệ thuật theo <strong>Điều 25 Luật Sở hữu trí tuệ Việt Nam</strong>. Chúng tôi luôn ghi nhận đầy đủ tên tác giả và hướng dẫn người nghe ủng hộ bản nhạc đầy đủ trên kênh phát hành chính thức.
              </p>
            </div>
          </div>
        </div>

        {/* 4. KÊNH TIẾP NHẬN PHẢN HỒI & ĐÓNG GÓP */}
        <div className="p-8 rounded-3xl bg-linear-to-r from-rose-500/10 via-purple-500/10 to-amber-500/10 border border-neutral-200 dark:border-neutral-800 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            Đồng hành &amp; Kết nối cùng Moe Music
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Chúng tôi luôn lắng nghe mọi ý kiến đóng góp, phản hồi về nội dung hoặc yêu cầu liên quan đến quyền tác giả để hoàn thiện website ngày một văn minh và hữu ích hơn.
          </p>
          <div className="pt-2">
            <Link
              href="mailto:nhutnm379.work@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground text-background font-semibold text-xs sm:text-sm hover:opacity-90 transition shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Liên hệ: nhutnm379.work@gmail.com</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Giới thiệu & Tôn chỉ Hoạt động Moe Music",
            description:
              "Không gian cảm nhận âm nhạc và dự án nghiên cứu thói quen truyền thông số tại thị trường Việt Nam.",
            url: "https://moe.io.vn/about",
            publisher: {
              "@type": "Organization",
              name: "Moe Music",
              email: "nhutnm379.work@gmail.com",
              url: "https://moe.io.vn",
            },
          }),
        }}
      />
    </div>
  );
}