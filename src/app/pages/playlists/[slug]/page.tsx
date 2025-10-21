import { playlistsData } from "@/app/data/playlists-data";
import { PlaylistPost } from "@/app/types/type";
import PlaylistDetailClient from "./playlist-detail-client";

interface PlaylistDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PlaylistDetailPageProps) {
  const { slug } = await params;
  const playlist: PlaylistPost | undefined = playlistsData.find(
    (p) => p.slug === slug
  );

  if (!playlist) {
    return {
      title: "Playlist không tồn tại | Moe",
      description: "Không tìm thấy playlist.",
    };
  }

  return {
    title: `${playlist.title} | Moe`,
    description:
      playlist.description.slice(0, 160) ||
      "Khám phá các playlist âm nhạc đa dạng tại Moe.",
    openGraph: {
      title: `${playlist.title} | Moe`,
      description:
        playlist.description.slice(0, 160) ||
        "Khám phá các playlist âm nhạc đa dạng tại Moe.",
      images: [playlist.banner || "/asset/playlist/default-playlist-banner.jpg"],
      type: "music.playlist",
    },
  };
}

export default async function PlaylistDetailPage({ params }: PlaylistDetailPageProps) {
  const { slug } = await params;
  const playlist: PlaylistPost | undefined = playlistsData.find(
    (p) => p.slug === slug
  );

  if (!playlist) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Playlist không tồn tại.
        </p>
      </div>
    );
  }

  return <PlaylistDetailClient playlist={playlist} />;
}