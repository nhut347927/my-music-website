import { lyricsData } from "@/app/data/lyrics-data";
import { LyricPost } from "@/app/types/type";
import LyricsDetailClient from "./lyrics-detail-client";

// Định nghĩa interface cho params
interface LyricsDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Metadata động
export async function generateMetadata({ params }: LyricsDetailPageProps) {
  const { slug } = await params;
  const song: LyricPost | undefined = lyricsData.find((s) => s.slug === slug);

  if (!song) {
    return {
      title: "Bài hát không tồn tại | MyMusic",
      description: "Không tìm thấy bài hát.",
    };
  }

  return {
    title: `${song.title} - ${song.artist} | MyMusic`,
    description: `${song.lyrics.find((l) => l.type === "verse")?.content.slice(0, 160) || "Nghe nhạc và xem lời bài hát tại MyMusic."}`,
    openGraph: {
      title: `${song.title} - ${song.artist} | MyMusic`,
      description: `${song.lyrics.find((l) => l.type === "verse")?.content.slice(0, 160) || "Nghe nhạc và xem lời bài hát tại MyMusic."}`,
      images: [song.image || "/asset/lyric-img/default-lyric.jpg"],
      type: "music.song",
    },
  };
}

// Server Component chính
export default async function LyricsDetailPage({ params }: LyricsDetailPageProps) {
  const { slug } = await params;
  const song: LyricPost | undefined = lyricsData.find((s) => s.slug === slug);

  if (!song) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Bài hát không tồn tại.
        </p>
      </div>
    );
  }

  return <LyricsDetailClient song={song} />;
}