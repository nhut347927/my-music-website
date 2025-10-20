// 🎵 Cấu trúc chung cho Post
// 🏷️ Category Type — tách riêng để có thể tái sử dụng và mở rộng
export interface Category {
  name: string;
}

// 🎵 Cấu trúc cơ bản của mọi bài post
export interface BasePost {
  id: number;
  title: string;
  categories: Category[]; // ✅ Dùng Category[]
  image: string;
  date?: string | null; // ngày tạo bài viết
  views: number;
  type: "lyrics" | "playlists" | "blogs";
}

//#####################################################################
// 🎧 1. Lyric Post
export interface LyricPost extends BasePost {
  type: "lyrics";
  artist: string; // tên ca sĩ hoặc nhóm nhạc
  duration?: string; // ví dụ "03:45"
  year: string; // năm phát hành
  lyrics: Lyric[]; // mảng lời bài hát
  singerPhoto: string | any; // ảnh ca sĩ
  composer: string; // tên nhạc sĩ
  producer: string; // tên nhà sản xuất
  otherSongs: string[];
  userCommentAvatar?: string;
  userNameComment: string;
  userRoleComment: string;
  comment: string;
}

export interface Lyric {
  type: string;
  content: string;
}

//#####################################################################
// 🎧 2. Playlist Post
export interface PlaylistPost extends BasePost {
  type: "playlists";
  banner: string | any; // Ảnh banner
  description: string; // Mô tả playlist
  songs: PlaylistSong[]; // Danh sách bài hát trong playlist
  mood: string; // cảm nhận về playlist
  final: string; // lời kết cho playlist
}

export interface PlaylistSong {
  name: string; // Tên bài hát
  desc: string; // Mô tả ngắn về bài hát
  youtube: string; // Link YouTube
}

//#####################################################################
// 📊 3. Blogs Post
export interface BlogsPost extends BasePost {
  type: "blogs";

  userCommentAvatar?: string;
  userNameComment: string;
  userRoleComment: string;
  paragraphs: paragraph[];
  comment: string;
}

export interface paragraph {
  type: "text" | "image" | "link"|"title";
  content: string;
}

// 🧱 Union Type tổng
export type Post = LyricPost | PlaylistPost | BlogsPost;
