import { Post } from "../types/type";
import { blogData } from "./blog-data";
import { lyricsData } from "./lyrics-data";
import { playlistsData } from "./playlists-data";


export const allPosts: Post[] = [
  ...lyricsData,
  ...playlistsData,
  ...blogData,
];
