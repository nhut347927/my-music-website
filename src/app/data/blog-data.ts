import tree5 from "../asset/tree5.jpg";
import tree1 from "../asset/tree1.jpg";
import { BlogsPost } from "../types/type";
import { categoriesData } from "./category-data";
import canvaError1 from "../asset/blog-img/canva-error1.png";
import canvaError2 from "../asset/blog-img/canva-error2.png";
import nhac1 from "../asset/blog-img/nhac1.jpg";
import nhac2 from "../asset/blog-img/nhac2.jpg";
import nhac3 from "../asset/blog-img/nhac3.jpg";
import v1 from "../asset/blog-img/v1.png";

export const blogData: BlogsPost[] = [
  {
    id: 1,
    slug: "canva-gap-su-co-khi-thiet-ke-truc-tuyen-bi-gian-doan",
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
  {
    id: 2,
    slug: "am-nhac-viet-nam-2025-sac-mau-cam-xuc-trong-tung-giai-dieu",
    title: "Âm Nhạc Việt Nam 2025: Sắc Màu Cảm Xúc Trong Từng Giai Điệu",
    categories: [
      categoriesData[0], // Nhạc Việt
      categoriesData[15], // Pop
      categoriesData[23], // Mới phát hành
      categoriesData[24], // Top trending
    ],
    image: v1.src, // ảnh minh họa sân khấu V-Pop sôi động
    date: "2025-10-20",
    views: 450,
    type: "blogs",

    // Phần bình luận/ghi chú người viết
    userCommentAvatar: v1.src,
    userNameComment: "Anonymous",
    userRoleComment: "Nhà báo âm nhạc & người đam mê V-Pop",

    // Nội dung bài viết
    paragraphs: [
      {
        type: "text",
        content:
          "Năm 2025, âm nhạc Việt Nam (V-Pop) như một bức tranh đa sắc, nơi mỗi nét vẽ là một câu chuyện, một cảm xúc, và một dấu ấn văn hóa. Từ những bản hit thống trị bảng xếp hạng đến các ca khúc độc lập đầy chất thơ, V-Pop năm nay không chỉ là âm thanh mà còn là tiếng nói của một thế hệ trẻ đầy khát vọng và sáng tạo.",
      },
      {
        type: "image",
        content: v1.src, // ảnh một buổi hòa nhạc V-Pop
      },
      {
        type: "title",
        content: "Sự bùng nổ của sự đa dạng",
      },
      {
        type: "text",
        content:
          "V-Pop 2025 chứng kiến sự giao thoa độc đáo giữa các thể loại. Những nghệ sĩ như Sơn Tùng M-TP tiếp tục dẫn đầu với các ca khúc Pop/EDM hiện đại như ‘Chạy Ngay Đi 2.0’, trong khi các giọng ca indie như Vũ. hay ban nhạc Ngọt mang đến những giai điệu mộc mạc, giàu cảm xúc. Đặc biệt, các ca khúc lấy cảm hứng từ dân ca, như ‘Lý Cây Bông’ của Wren Evans, đã làm sống lại những giá trị truyền thống trong một diện mạo mới.",
      },
      {
        type: "text",
        content:
          "Các nền tảng streaming như Spotify và Zing MP3 ghi nhận sự tăng trưởng mạnh mẽ của các ca khúc ballad và lofi. Những bài hát như ‘Một Thoáng Mơ’ của Hoàng Dũng hay ‘Tâm Sựវបានគេហទៅជា‘មួយ’ của Tóc Tiên đã trở thành hiện tượng, chạm đến trái tim hàng triệu khán giả trẻ.",
      },
      {
        type: "title",
        content: "Tác động văn hóa và tầm ảnh hưởng",
      },
      {
        type: "text",
        content:
          "Âm nhạc Việt Nam năm nay không chỉ dừng lại ở giải trí. Các ca khúc như ‘Gió Lên’ của Đen Vâu, kết hợp thông điệp về biến đổi khí hậu, đã truyền cảm hứng cho cộng đồng về ý thức xã hội. Trong khi đó, các nghệ sĩ trẻ như AMEE và Bích Phương mang đến những ca khúc Pop đầy màu sắc, phản ánh lối sống năng động và cá tính của Gen Z.",
      },
      {
        type: "link",
        content:
          "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=1234567890",
      },
      {
        type: "text",
        content:
          "Để cảm nhận rõ hơn sự sôi động của V-Pop 2025, bạn có thể nghe playlist trên Spotify hoặc tham gia các sự kiện âm nhạc như Vietnam Idol Showcase. Đây là nơi bạn sẽ bắt gặp những màn trình diễn bùng nổ từ các nghệ sĩ hàng đầu.",
      },
      {
        type: "title",
        content: "Tương lai rộng mở",
      },
      {
        type: "text",
        content:
          "Với sự kết hợp giữa công nghệ, sáng tạo và bản sắc văn hóa, V-Pop đang dần khẳng định vị thế trên trường quốc tế. Các nghệ sĩ như Suboi hay Hoaprox đã mang âm nhạc Việt ra thế giới qua các sân khấu lớn như Coachella hay Tomorrowland. Năm 2026 hứa hẹn sẽ là một bước tiến mới, khi các nghệ sĩ tiếp tục thử nghiệm và phá vỡ giới hạn.",
      },
      {
        type: "text",
        content:
          "Hãy dành một buổi tối để thưởng thức những giai điệu mới nhất của V-Pop 2025. Bạn yêu thích ca khúc nào nhất trong năm nay? Hãy chia sẻ và cùng lan tỏa tinh thần âm nhạc Việt!",
      },
    ],
    comment:
      "V-Pop 2025 là một hành trình cảm xúc đầy màu sắc. Hãy ủng hộ các nghệ sĩ Việt Nam để họ tiếp tục tạo nên những kiệt tác âm nhạc, đưa tên tuổi Việt Nam vươn xa hơn!",
  },
  {
    id: 3,
    slug: "nhac-indie-tu-do-sang-tao-chan-that-cam-xuc",
    title: "Nhạc Indie: Tự Do Sáng Tạo, Chân Thật Cảm Xúc",
    categories: [
      categoriesData[6], // Indie
      categoriesData[9], // Lofi
      categoriesData[12], // Rock
      categoriesData[19], // Playlist cảm xúc
    ],
    image: nhac1.src, // ảnh minh họa không gian indie
    date: "2025-10-20",
    views: 320,
    type: "blogs",

    // Phần bình luận/ghi chú người viết
    userCommentAvatar: nhac2.src,
    userNameComment: "Anonymous",
    userRoleComment: "Nghệ sĩ Indie & nhà sáng tác",

    // Nội dung bài viết
    paragraphs: [
      {
        type: "text",
        content:
          "Nhạc Indie không chỉ là một thể loại âm nhạc, mà là một tuyên ngôn về sự tự do và cái tôi cá nhân. Trong thế giới âm nhạc đầy những khuôn mẫu thương mại, Indie nổi lên như một làn gió mát, mang theo những giai điệu chân thật và câu chuyện sâu sắc. Điều gì khiến dòng nhạc này trở thành ‘người bạn tâm giao’ của hàng triệu trái tim?",
      },
      {
        type: "image",
        content: nhac3.src, // ảnh một buổi biểu diễn indie
      },
      {
        type: "title",
        content: "Tự do sáng tạo không giới hạn",
      },
      {
        type: "text",
        content:
          "Indie, viết tắt của ‘independent’, là âm nhạc của những nghệ sĩ tự do. Không bị ràng buộc bởi các hãng thu âm lớn, họ tự viết, tự sản xuất, và tự kể chuyện bằng âm nhạc. Ở Việt Nam, những cái tên như Ngọt với ‘Chó Chạy Ngoài Đồng’ hay Vũ. với ‘Lạ Lùng’ đã chứng minh rằng bạn không cần sân khấu hoành tráng để chạm vào cảm xúc người nghe.",
      },
      {
        type: "text",
        content:
          "Sự tự do này cho phép các nghệ sĩ Indie thử nghiệm những phong cách mới lạ, từ lofi mơ màng đến rock dữ dội hay acoustic mộc mạc. Họ không sợ thất bại, bởi mỗi ca khúc là một lần khám phá bản thân.",
      },
      {
        type: "title",
        content: "Cảm xúc chân thật, gần gũi",
      },
      {
        type: "text",
        content:
          "Điểm mạnh lớn nhất của Indie là khả năng kể những câu chuyện đời thường. Ca từ của Indie thường giản dị nhưng sâu sắc, như những lời tâm sự giữa bạn bè. ‘Bâng Khuâng’ của Cá Hồi Hoang hay ‘Mùa Hè Năm Ấy’ của Lý Bực là những ví dụ điển hình, gợi lên những ký ức, cảm giác mà ai cũng từng trải qua.",
      },
      {
        type: "link",
        content: "https://zingmp3.vn/playlist/Nhac-Indie-Viet-Nam/1234567890",
      },
      {
        type: "text",
        content:
          "Hãy thử nghe playlist Indie trên Zing MP3 hoặc tham gia các buổi diễn tại những không gian nhỏ như Heritage Space ở Hà Nội hay Yoko Cafe ở TP.HCM. Đó là nơi bạn sẽ cảm nhận được tinh thần tự do và năng lượng sáng tạo của Indie.",
      },
      {
        type: "title",
        content: "Tại sao Indie chinh phục Gen Z?",
      },
      {
        type: "text",
        content:
          "Giới trẻ ngày nay yêu Indie vì nó phản ánh đúng tâm trạng và cá tính của họ: không hoàn hảo, nhưng đầy chân thành. Trong một thế giới mà mọi thứ dường như được định dạng sẵn, Indie là nơi họ tìm thấy sự đồng điệu và cảm giác được là chính mình. Hơn nữa, các nghệ sĩ Indie thường rất gần gũi, sẵn sàng trò chuyện với khán giả sau mỗi buổi diễn, tạo nên một cộng đồng gắn kết.",
      },
      {
        type: "text",
        content:
          "Nhạc Indie không chỉ là âm nhạc, mà là một phong cách sống. Nếu bạn chưa từng nghe Indie, hãy bắt đầu với một bài hát của Vũ., Ngọt, hoặc Cá Hồi Hoang. Biết đâu, bạn sẽ tìm thấy một góc nhỏ của tâm hồn mình trong những giai điệu ấy.",
      },
    ],
    comment:
      "Indie là tiếng nói của những tâm hồn tự do. Hãy để những giai điệu này dẫn lối bạn qua những ngày vui, buồn, và cả những khoảnh khắc lặng lẽ của cuộc sống.",
  },
];
