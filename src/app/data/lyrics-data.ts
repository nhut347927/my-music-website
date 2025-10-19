import tree1 from "../asset/tree1.jpg";
import tree2 from "../asset/tree2.jpg";
import { LyricPost } from "../types/type";
import { categoriesData } from "./category-data";

export const lyricsData: LyricPost[] = [
  {
    id: 1,
    title: "Koi (恋) – Gen Hoshino",
    categories: [categoriesData[3], categoriesData[8], categoriesData[10]],
    image: tree1.src,
    date: "2024-08-20",
    views: 1200,
    type: "lyrics",
    artist: "Gen Hoshino",
    lyrics: [
      { type: "Verse 1", content: "Aisaretai to omou koto wa..." },
      { type: "Chorus", content: "Koi wa itsumo..." },
    ],
    year: "2016",
    duration: "04:13",
    singerPhoto: tree1.src,
    composer: "Gen Hoshino",
    producer: "Studio XYZ",
    otherSongs: ["Family Song", "Pop Virus", "Sun"],
    userCommentAvatar: tree1.src,
    userNameComment: "Nguyen Van A",
    userRoleComment: "Admin",
    comment: "Bài hát này thực sự chạm đến trái tim tôi mỗi khi nghe.",
  },
  {
    id: 2,
    title: "Lemon – Kenshi Yonezu",
    categories: [categoriesData[12], categoriesData[3], categoriesData[13]],
    image: tree2.src,
    date: "2024-07-02",
    views: 1750,
    type: "lyrics",
    artist: "Kenshi Yonezu",
    lyrics: [
      { type: "Verse 1", content: "Yurusenai mama no sayonara..." },
      { type: "Chorus", content: "Lemon no nioi ga shita..." },
    ],
    year: "2018",
    duration: "04:31",
    singerPhoto: tree2.src,
    composer: "Kenshi Yonezu",
    producer: "Studio ABC",
    otherSongs: ["Paprika", "Peace Sign", "Uma to Shika"],
    userCommentAvatar: tree2.src,
    userNameComment: "Tran Thi B",
    userRoleComment: "Admin",
    comment: "Lời bài hát rất sâu sắc và ý nghĩa.",
  },
];
