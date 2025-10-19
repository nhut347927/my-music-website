import { PlaylistPost } from "../types/type";
import { categoriesData } from "./category-data";
import tree3 from "../asset/tree3.jpg";
import tree4 from "../asset/tree4.jpg";

export const playlistsData: PlaylistPost[] = [
  {
    id: 1,
    title: "Chill buổi tối cùng nhạc Lo-fi Nhật",
    categories: [categoriesData[24], categoriesData[22], categoriesData[10]],
    image: tree3.src,
    banner: tree3.src,
    description:
      "Một playlist mang âm hưởng Nhật Bản nhẹ nhàng, hoàn hảo cho những buổi tối thư giãn, nhâm nhi trà và tận hưởng không khí bình yên.",
    songs: [
      {
        name: "Blue Night",
        desc: "Giai điệu nhẹ nhàng, du dương của Snail’s House giúp bạn thả lỏng tâm trí.",
        youtube: "https://youtu.be/9UcQ7ddVjoc?si=u3oZ8ejqTG3RpqeJ",
      },
      {
        name: "Rainy Tokyo",
        desc: "Tiếng mưa hòa quyện cùng nhịp Lo-fi từ Idealism, mang lại cảm giác cô đơn nhưng dễ chịu.",
        youtube: "https://youtu.be/9UcQ7ddVjoc?si=u3oZ8ejqTG3RpqeJ",
      },
      {
        name: "Dreams",
        desc: "Một bản nhạc kinh điển của Jinsang – êm dịu, sâu lắng, gợi cảm giác yên bình.",
        youtube: "https://youtu.be/9UcQ7ddVjoc?si=u3oZ8ejqTG3RpqeJ",
      },
    ],
    date: "2024-09-15",
    views: 980,
    type: "playlists",
    mood: "Chill",
    final:
      "Hy vọng playlist này đã mang đến cho bạn những khoảnh khắc thư giãn và bình yên trong buổi tối. Hãy để âm nhạc là người bạn đồng hành, giúp bạn xua tan căng thẳng và tận hưởng cuộc sống một cách trọn vẹn hơn.",
  },
  {
    id: 2,
    title: "Những bản OST Anime khiến bạn nhớ mãi",
    categories: [categoriesData[10], categoriesData[9], categoriesData[13]],
    image: tree4.src,
    banner: tree4.src,
    description:
      "Tuyển tập những bản nhạc phim Anime đi vào huyền thoại, gắn liền với cảm xúc và kỷ niệm của nhiều thế hệ fan.",
    songs: [
      {
        name: "Unravel",
        desc: "Bản nhạc mở đầu đầy cảm xúc từ Tokyo Ghoul, gợi nhớ đến những nỗi đau và khát khao được sống thật.",
        youtube: "https://youtu.be/9UcQ7ddVjoc?si=n0SiOCxgCSYapedr",
      },
      {
        name: "Again",
        desc: "Ca khúc mở đầu huyền thoại của Fullmetal Alchemist – mạnh mẽ, truyền cảm hứng và sâu sắc.",
        youtube: "https://youtu.be/9UcQ7ddVjoc?si=n0SiOCxgCSYapedr",
      },
      {
        name: "Crossing Field",
        desc: "Bản nhạc mở đầu cho Sword Art Online, mang tinh thần phiêu lưu và quyết tâm không bỏ cuộc.",
        youtube: "https://youtu.be/9UcQ7ddVjoc?si=n0SiOCxgCSYapedr",
      },
    ],
    date: "2024-06-10",
    views: 2300,
    type: "playlists",
    mood: "Nostalgic",

    final:
      "Những bản OST này không chỉ là âm nhạc, mà còn là những ký ức sống động về những câu chuyện và nhân vật đã chạm đến trái tim chúng ta. Hãy để âm nhạc Anime tiếp tục là nguồn cảm hứng và niềm vui trong cuộc sống của bạn.",
  },
];
