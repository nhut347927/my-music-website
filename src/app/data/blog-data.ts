import tree5 from "../asset/tree5.jpg";
import tree1 from "../asset/tree1.jpg";
import { BlogsPost } from "../types/type";
import { categoriesData } from "./category-data";

export const blogData: BlogsPost[] = [
  {
    id: 1,
    title: "Giải mã vì sao ‘Lemon’ chạm đến cảm xúc người nghe",
    categories: [categoriesData[5], categoriesData[7], categoriesData[9]],
    image: tree5.src,
    date: "2024-10-05",
    views: 3100,
    type: "blogs",

    // 👇 phần bình luận/ghi chú người viết
    userCommentAvatar: tree1.src,
    userNameComment: "Minh Nhật",
    userRoleComment: "Nhà phân tích âm nhạc",

    // 👇 nội dung bài viết
    paragraphs: [
      {
        type: "text",
        content:
          "‘Lemon’ không chỉ là bản ballad buồn, mà còn là sự đối thoại giữa ký ức và hiện tại. Kenshi Yonezu đã khéo léo dùng hình ảnh quả chanh để ẩn dụ cho nỗi tiếc nuối, chua chát và cả vị ngọt của tình yêu đã qua.",
      },
      {
        type: "image",
        content: tree5.src,
      },
      {
        type: "text",
        content:
          "Ca khúc mang nhịp 4/4, được phối với piano và guitar nhẹ nhàng, làm nổi bật chất giọng trầm buồn của Yonezu. Khi điệp khúc vang lên, người nghe cảm giác như bị kéo vào cơn sóng cảm xúc mãnh liệt.",
      },
      {
        type: "link",
        content: "https://www.uta-net.com/song/243933/",
      },
      {
        type: "link",
        content: "https://ja.wikipedia.org/wiki/Lemon_(Kenshi_Yonezu)",
      },
    ],
    comment:
      "Qua ‘Lemon’, Yonezu không chỉ kể một câu chuyện cá nhân, mà còn chạm đến trái tim của hàng triệu người nghe, khiến họ tìm thấy sự đồng cảm trong nỗi đau mất mát và hy vọng về những khởi đầu mới.",

  },
  {
    id: 2,
    title: "Cấu trúc âm nhạc trong các bài hát của Aimer",
    categories: [categoriesData[0], categoriesData[3], categoriesData[1]],
    image: tree1.src,
    date: "2024-09-01",
    views: 1450,
    type: "blogs",

    userCommentAvatar: tree1.src,
    userNameComment: "Linh Moe",
    userRoleComment: "Biên tập viên âm nhạc",

    paragraphs: [
      {
        type: "text",
        content:
          "Aimer thường sử dụng âm sắc khàn nhẹ đặc trưng để tạo chiều sâu cảm xúc. Cách cô xử lý nốt cao không quá mạnh mẽ mà mềm mại, giống như lời thì thầm vang lên trong khoảng không.",
      },
      {
        type: "image",
        content: tree1.src,
      },
      {
        type: "text",
        content:
          "Các ca khúc như ‘Brave Shine’ hay ‘Ref:rain’ có cấu trúc chặt chẽ, chuyển điệu tinh tế và luôn duy trì cảm giác da diết. Điểm đặc biệt là phần dàn nhạc luôn nâng đỡ giọng hát, không bao giờ lấn át.",
      },
      {
        type: "link",
        content: "https://aimer-web.jp/",
      },
      {
        type: "link",
        content: "https://ja.wikipedia.org/wiki/Aimer",
      },
    ],
    comment:
      "Sự kết hợp giữa giọng hát độc đáo và cấu trúc âm nhạc tinh tế đã giúp Aimer tạo nên những bản ballad đầy sức hút, khiến người nghe không thể rời tai mỗi khi thưởng thức.",
  },
];
