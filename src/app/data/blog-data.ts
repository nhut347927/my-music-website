import anonymous from "../asset/anonymous.jpg";
import { BlogsPost } from "../types/type";
import { categoriesData } from "./category-data";
import img1 from "../asset/blog-img/AI experiments.jpg";
import trihoan2 from "../asset/blog-img/trihoan2.jpg";
import trihoan3 from "../asset/blog-img/trihoan3.jpg";
import trihoan4 from "../asset/blog-img/trihoan4.jpg";

export const blogData: BlogsPost[] = [
  {
    id: 2,
    slug: "tri-hoan-la-gi-cach-pha-vo-thoi-quen-tri-hoan-de-song-hieu-qua-hon",
    title:
      "Trì hoãn là gì? Cách phá vỡ thói quen trì hoãn để sống hiệu quả hơn",
    categories: [
      categoriesData[28],
      categoriesData[29],
      categoriesData[30],
      categoriesData[31],
      categoriesData[32],
    ],
    image: img1.src, // để trống, bạn thêm sau
    date: "2025-10-28",
    views: 3326,
    type: "blogs",

    // 👇 phần bình luận/ghi chú người viết
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Chuyên gia năng suất & nhà tư vấn hành vi",

    // 👇 nội dung bài viết
    paragraphs: [
      {
        type: "text",
        content:
          "Trì hoãn – hay còn gọi là 'procrastination' – không chỉ là việc 'lười biếng' thông thường, mà là một hành vi tâm lý phức tạp khiến bạn liên tục trì hoãn công việc quan trọng dù biết rõ hậu quả. Từ việc để deadline sát nút, bỏ lỡ cơ hội thăng tiến, đến cảm giác tội lỗi và căng thẳng kéo dài – trì hoãn đang âm thầm cản trở hàng triệu người mỗi ngày, từ học sinh, nhân viên văn phòng cho đến doanh nhân.",
      },
      {
        type: "text",
        content:
          "Nhưng điều đáng ngạc nhiên là: trì hoãn không phải bản chất, mà là thói quen có thể thay đổi. Giống như một nhà điêu khắc tài hoa phải đục bỏ những phần gỗ thừa – dù đẹp đến đâu – để tạo nên tác phẩm hoàn mỹ, việc phá bỏ trì hoãn cũng đòi hỏi bạn phải 'cắt bỏ' những thứ cản đường, dù chúng có vẻ an toàn hay thoải mái. Bài viết này sẽ giúp bạn hiểu rõ trì hoãn là gì, tại sao nó tồn tại, và cách 'điêu khắc' lại cuộc sống của chính mình.",
      },
      {
        type: "image",
        content: trihoan2.src, // ảnh minh họa: một khối gỗ đang được đục đẽo thành tượng
      },
      {
        type: "title",
        content: "Trì hoãn là gì? Hiểu đúng để thay đổi",
      },
      {
        type: "text",
        content:
          "Theo định nghĩa tâm lý học, trì hoãn là hành vi tự nguyện trì hoãn một nhiệm vụ dù dự đoán được hậu quả tiêu cực. Khác với lười biếng (thiếu động lực), trì hoãn thường đi kèm với cảm xúc mạnh: lo âu, áp lực, và cả sự tự trách móc. Nghiên cứu từ Đại học Carleton (Canada) cho thấy 80-95% sinh viên và 20-50% người trưởng thành thường xuyên trì hoãn trong ít nhất một lĩnh vực cuộc sống.",
      },
      {
        type: "text",
        content:
          "Trì hoãn không phải do thiếu ý chí, mà xuất phát từ cơ chế sinh học của não bộ. Khi đối mặt với công việc khó hoặc không rõ ràng, hạch hạnh nhân (amygdala) kích hoạt phản ứng 'trốn tránh', trong khi vùng vỏ não trước trán (prefrontal cortex) – nơi ra quyết định – bị áp đảo. Kết quả? Bạn chọn xem Netflix thay vì viết báo cáo – dù biết rõ điều đó sai.",
      },
      {
        type: "title",
        content: "Ẩn dụ điêu khắc: Tại sao phải 'đục bỏ' để tiến lên?",
      },
      {
        type: "text",
        content:
          "Hãy tưởng tượng bạn là một nhà điêu khắc cầm đục trước khối gỗ thô. Bạn biết rõ hình dáng cuối cùng: một con sư tử oai vệ, một bông hoa tinh tế. Nhưng để đạt được điều đó, bạn buộc phải loại bỏ hàng kilogam gỗ – kể cả những phần đẹp, mịn, có vân gỗ tuyệt vời. Nếu giữ lại tất cả, bạn sẽ chỉ có một khối gỗ to, nặng nề, không định hình.",
      },
      {
        type: "text",
        content:
          "Trì hoãn cũng vậy. Nó chính là những 'mẩu gỗ thừa' bạn giữ lại: thói quen kiểm tra điện thoại mỗi 5 phút, nỗi sợ thất bại khiến bạn không bắt đầu, hay niềm tin 'phải hoàn hảo mới làm'. Chúng có thể mang lại cảm giác an toàn tạm thời, nhưng cuối cùng làm bạn chậm lại, trì trệ, và mất đi hình hài thành công mà bạn hằng mong muốn.",
      },
      {
        type: "image",
        content: trihoan3.src, // ảnh: nhà điêu khắc đang đục bỏ phần gỗ thừa, bụi bay mù mịt
      },
      {
        type: "title",
        content: "5 thói quen trì hoãn phổ biến nhất",
      },
      {
        type: "text",
        content:
          "1. <strong>Perfectionism (Hoàn hảo chủ nghĩa)</strong>: Tin rằng công việc phải hoàn hảo mới bắt đầu → mãi không bắt đầu.<br>" +
          "2. <strong>Task Avoidance (Tránh nhiệm vụ)</strong>: Chọn việc dễ (dọn dẹp, lướt web) thay vì việc quan trọng.<br>" +
          "3. <strong>Decision Paralysis (Tê liệt quyết định)</strong>: Có quá nhiều lựa chọn → không chọn được gì.<br>" +
          "4. <strong>Emotional Overwhelm (Quá tải cảm xúc)</strong>: Căng thẳng → tìm cách 'trốn' bằng giải trí.<br>" +
          "5. <strong>Reward Delay (Phần thưởng xa)</strong>: Kết quả đến chậm → mất động lực duy trì.",
      },
      {
        type: "title",
        content: "Cách phá vỡ trì hoãn: 7 công cụ 'điêu khắc' hiệu quả",
      },
      {
        type: "text",
        content:
          "Dưới đây là 7 kỹ thuật đã được chứng minh bởi nghiên cứu tâm lý và hàng nghìn người áp dụng thành công:",
      },
      {
        type: "text",
        content:
          "1. <strong>Phương pháp 2 phút</strong>: Nếu nhiệm vụ mất dưới 2 phút → làm ngay lập tức. Nếu lớn hơn → bắt đầu bằng hành động nhỏ nhất trong 2 phút (ví dụ: mở file Word, viết tiêu đề).",
      },
      {
        type: "text",
        content:
          "2. <strong>Pomodoro 25/5</strong>: Làm việc tập trung 25 phút, nghỉ 5 phút. Sau 4 chu kỳ → nghỉ dài. Giúp não bộ 'lừa' được cảm giác quá tải.",
      },
      {
        type: "text",
        content:
          "3. <strong>Eisenhower Matrix</strong>: Chia việc thành 4 ô: Quan trọng & Khẩn cấp, Quan trọng & Không khẩn cấp, v.v. Tập trung vào ô 2 để tránh khủng hoảng.",
      },
      {
        type: "link",
        content: "https://www.mindtools.com/pages/article/newHTE_91.htm", // link Eisenhower Matrix
      },
      {
        type: "text",
        content:
          "4. <strong>Ăn con ếch</strong> (Mark Twain): Làm việc khó nhất, đáng sợ nhất trước tiên vào buổi sáng – khi năng lượng cao nhất.",
      },
      {
        type: "text",
        content:
          "5. <strong>Implementation Intention</strong>: Thay vì 'Tôi sẽ học tiếng Anh', hãy nói: 'Tôi sẽ học 20 từ vựng vào 7h sáng mai tại bàn học'. Cụ thể hóa tăng 200-300% khả năng thực hiện (nghiên cứu Gollwitzer).",
      },
      {
        type: "text",
        content:
          "6. <strong>Accountability Partner</strong>: Chia sẻ mục tiêu với bạn bè, đồng nghiệp. Áp lực xã hội tích cực giúp bạn không trì hoãn.",
      },
      {
        type: "text",
        content:
          "7. <strong>Digital Detox có kế hoạch</strong>: Dùng công cụ như Freedom, Forest, hoặc Focus@Will để chặn mạng xã hội trong khung giờ vàng.",
      },
      {
        type: "image",
        content: trihoan4.src, // ảnh: biểu đồ Pomodoro hoặc bảng Eisenhower
      },
      {
        type: "title",
        content: "Bài học cuối: Trì hoãn là gỗ thừa – hãy đục bỏ nó",
      },
      {
        type: "text",
        content:
          "Giống như nhà điêu khắc không thể tạo ra kiệt tác nếu giữ lại mọi mẩu gỗ, bạn không thể đạt được mục tiêu nếu cứ ôm lấy trì hoãn. Mỗi lần bạn chọn hành động thay vì trì hoãn, bạn đang đục đi một phần thừa – dù đau đớn, dù khó khăn – để lộ ra phiên bản tốt nhất của chính mình.",
      },
      {
        type: "text",
        content:
          "Hãy bắt đầu ngay hôm nay. Chọn một nhiệm vụ bạn đang trì hoãn. Áp dụng một công cụ trên. Chỉ 2 phút thôi. Bạn không cần hoàn hảo – bạn chỉ cần bắt đầu. Và khi nhìn lại, bạn sẽ thấy: chính những nhát đục nhỏ ấy đã tạo nên một tác phẩm cuộc đời đáng giá.",
      },
    ],
    comment:
      "Trì hoãn không phải kẻ thù – nó là tín hiệu. Hãy lắng nghe, hiểu nó, rồi dùng chiếc đục của ý chí để loại bỏ. Bạn xứng đáng với phiên bản không còn bị trì hoãn cản đường!",
  },
];
