import tree5 from "../asset/tree5.jpg";
import tree1 from "../asset/tree1.jpg";
import { BlogsPost } from "../types/type";
import { categoriesData } from "./category-data";
import canvaError1 from "../asset/blog-img/canva-error1.png";
import canvaError2 from "../asset/blog-img/canva-error2.png";

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
      {
        type: "title",
        content: "Tiêu đề",
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
  {
    id: 3,
    title: "Canva gặp sự cố: Khi thiết kế trực tuyến bị gián đoạn",
    categories: [
      categoriesData[24],
      categoriesData[27],
      categoriesData[25],
      categoriesData[26],
    ],
    image: canvaError2.src, // ảnh minh họa sự cố
    date: "2025-10-20",
    views: 420,
    type: "blogs",

    // 👇 phần bình luận/ghi chú người viết
    userCommentAvatar: tree1.src,
    userNameComment: "anonymous",
    userRoleComment: "Chuyên gia thiết kế & công nghệ",

    // 👇 nội dung bài viết
    paragraphs: [
      {
        type: "text",
        content:
          "Canva, nền tảng thiết kế trực tuyến phổ biến, đang gặp phải sự cố gián đoạn trên diện rộng. Nhiều người dùng trên toàn cầu báo cáo rằng họ không thể truy cập trang web, đăng nhập, hoặc lưu lại các thiết kế quan trọng. Sự cố này khiến nhiều marketer, designer, giáo viên và học sinh đang phụ thuộc vào công cụ này bị ảnh hưởng trực tiếp đến công việc.",
      },
      {
        type: "image",
        content: canvaError1.src,
      },
      {
        type: "text",
        content:
          "Theo phản hồi từ cộng đồng, lỗi xuất hiện dưới nhiều hình thức: trang web tải chậm hoặc không hiển thị, các template không tải được, và đôi khi dữ liệu trên canvas biến mất tạm thời. Canva đã xác nhận vấn đề trên Twitter và thông báo đang khắc phục, đồng thời khuyến nghị người dùng không tải lại trang nhiều lần để tránh mất dữ liệu.",
      },
      {
        type: "title",
        content: "Nguyên nhân và tác động",
      },
      {
        type: "text",
        content:
          "Các chuyên gia công nghệ cho rằng sự cố này có thể liên quan đến hạ tầng server khi lượng truy cập tăng đột biến, hoặc một bản cập nhật phần mềm gây xung đột tạm thời. Với những tổ chức phụ thuộc hoàn toàn vào Canva cho các chiến dịch marketing, bài giảng, hay thiết kế dự án, sự gián đoạn này có thể làm chậm tiến độ công việc, gây áp lực lên đội ngũ và khách hàng.",
      },
      {
        type: "text",
        content:
          "Ngoài ra, những người dùng cá nhân cũng bị ảnh hưởng khi các template yêu thích không thể truy cập hoặc dự án chưa lưu bị mất. Điều này nhấn mạnh một thực tế quan trọng: ngay cả những nền tảng trực tuyến hàng đầu cũng không thể đảm bảo 100% thời gian hoạt động.",
      },
      {
        type: "title",
        content: "Biện pháp tạm thời và khuyến nghị",
      },
      {
        type: "text",
        content:
          "Để giảm thiểu thiệt hại khi Canva gặp sự cố, các chuyên gia khuyên nên: lưu trữ bản copy offline các thiết kế quan trọng, sử dụng tính năng tự động lưu, hoặc xuất file PDF/PNG định kỳ. Khi làm việc theo nhóm, hãy thông báo ngay lập tức cho các thành viên để tránh xung đột dữ liệu hoặc mất mát thông tin.",
      },
      {
        type: "link",
        content: "https://www.canva.com/help/technical-issues/",
      },
      {
        type: "text",
        content:
          "Ngoài ra, bạn có thể theo dõi trang trạng thái chính thức của Canva hoặc các kênh thông báo khác để cập nhật tiến độ sửa lỗi. Điều này giúp bạn lên kế hoạch tạm thời và tránh những bất ngờ không mong muốn trong quá trình làm việc.",
      },
      {
        type: "title",
        content: "Những bài học rút ra",
      },
      {
        type: "text",
        content:
          "Sự cố Canva lần này nhắc nhở người dùng rằng: không nền tảng trực tuyến nào là hoàn hảo. Việc chuẩn bị các phương án dự phòng, lưu trữ định kỳ, và sử dụng nhiều công cụ hỗ trợ song song là cần thiết để đảm bảo công việc không bị gián đoạn. Đây cũng là cơ hội để người dùng nâng cao kỹ năng quản lý dự án và dữ liệu cá nhân.",
      },
      {
        type: "text",
        content:
          "Canva vẫn là một công cụ mạnh mẽ và tiện lợi, nhưng bài học lần này sẽ giúp cả designer lẫn marketer, giáo viên hay học sinh nhận thức rõ hơn về rủi ro khi làm việc trực tuyến, từ đó xây dựng thói quen bảo vệ dữ liệu tốt hơn.",
      },
    ],
    comment:
      "Sự cố Canva lần này là lời nhắc nhở quan trọng: ngay cả các nền tảng trực tuyến hàng đầu cũng có thể gặp sự cố. Chuẩn bị dự phòng và sao lưu dữ liệu định kỳ là cách tốt nhất để giảm thiểu rủi ro và đảm bảo công việc không bị gián đoạn.",
  },
];
