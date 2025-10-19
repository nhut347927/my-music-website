import PlaylistsClient from "./playlists-client";

export const metadata = {
  title: "Playlists | MyMusic",
  description: "Những bài hát theo chủ đề và tâm trạng khác nhau",
};

export default function PlaylistsPage() {
  return <PlaylistsClient />;
}
