import anonymous from "../asset/anonymous.jpg";
import { BlogsPost } from "../types/type";
import { categoriesData } from "./category-data";
import img1 from "../asset/blog-img/AI experiments.jpg";
import trihoan2 from "../asset/blog-img/trihoan2.jpg";
import trihoan3 from "../asset/blog-img/trihoan3.jpg";
import trihoan4 from "../asset/blog-img/trihoan4.jpg";
import qltg1 from "../asset/blog-img/qltg1.jpg";
import qltg2 from "../asset/blog-img/qltg2.jpg";
import qltg3 from "../asset/blog-img/qltg3.jpg";
import qltg4 from "../asset/blog-img/qltg4.jpg";

import ct1 from "../asset/blog-img/chitieu1.jpg";
import ct2 from "../asset/blog-img/chitieu2.jpg";
import ct3 from "../asset/blog-img/chitieu3.jpg";
import ct4 from "../asset/blog-img/chitieu4.jpg";



export const blogData: BlogsPost[] = [
  {
    id: 1,
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
  {
    id: 2,
    slug: "quan-ly-thoi-gian-bi-quyet-nang-cao-hieu-qua-cuoc-song-va-cong-viec-hien-dai",
    title:
      "Quản lý thời gian - Bí quyết nâng cao hiệu quả cuộc sống và công việc hiện đại",
    categories: [
      categoriesData[30],
      categoriesData[32],
      categoriesData[31],
      categoriesData[28],
      categoriesData[29],
    ],
    image: qltg1.src, // để trống, bạn thêm sau
    date: "2025-10-29",
    views: 4127,
    type: "blogs",

    // 👇 phần bình luận/ghi chú người viết
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Chuyên gia năng suất & nhà tư vấn quản lý thời gian",

    // 👇 nội dung bài viết
    paragraphs: [
      {
        type: "text",
        content:
          "Trong nhịp sống ngày càng hối hả của cuộc sống hiện đại, khả năng quản lý thời gian trở thành một kỹ năng thiết yếu giúp chúng ta cân bằng giữa công việc, gia đình, và sở thích cá nhân. Việc kiểm soát tốt thời gian không chỉ giúp tăng năng suất mà còn tạo điều kiện để ta thưởng thức cuộc sống một cách trọn vẹn hơn.",
      },
      {
        type: "text",
        content:
          "Hãy tưởng tượng thời gian như một dòng sông mạnh mẽ: nếu không có đập chắn và kênh dẫn, nó sẽ tràn lan, cuốn phăng mọi thứ. Quản lý thời gian chính là 'xây đập' – định hướng dòng chảy để tạo ra năng lượng hữu ích, thay vì để nó lãng phí. Bài viết này sẽ giúp bạn hiểu rõ bản chất, thách thức và cách 'xây đập' cho dòng sông thời gian của chính mình.",
      },
      {
        type: "image",
        content: qltg2.src, // ảnh minh họa: dòng sông với đập chắn và kênh dẫn nước hiệu quả
      },
      {
        type: "title",
        content: "Quản lý thời gian là gì? Hiểu đúng để làm chủ",
      },
      {
        type: "text",
        content:
          "Quản lý thời gian chính là khả năng sắp xếp, phân bổ và điều chỉnh các hoạt động sao cho phù hợp, giúp tối ưu hóa khả năng thực hiện mục tiêu cá nhân và nghề nghiệp. Không ai muốn bị cuốn theo dòng chảy của những công việc quá tải, mất kiểm soát về thời gian và cảm thấy căng thẳng, mệt mỏi.",
      },
      {
        type: "title",
        content: "Ẩn dụ dòng sông: Tại sao phải 'xây đập' để kiểm soát?",
      },
      {
        type: "text",
        content:
          "Thời gian giống như dòng sông: luôn chảy không ngừng, không thể tích trữ. Nếu không xây đập (lập kế hoạch), nước sẽ tràn ngập, gây lũ lụt (quá tải, stress). Nhưng với đập chắn thông minh, bạn biến dòng chảy thành năng lượng – hoàn thành công việc, tận hưởng cuộc sống, đạt mục tiêu dài hạn.",
      },
      {
        type: "image",
        content: qltg3.src, // ảnh: đập chắn đang kiểm soát dòng sông, tạo ra thủy điện và kênh tưới tiêu
      },
      {
        type: "title",
        content:
          "Tầm quan trọng của quản lý thời gian trong cuộc sống hiện đại",
      },
      {
        type: "text",
        content:
          "Trong kỷ nguyên số, thời gian trở thành một nguồn tài nguyên quý giá, không thể mua được bằng tiền. Khả năng quản lý thời gian không chỉ giúp đảm bảo công việc được hoàn thành đúng hạn mà còn ảnh hưởng trực tiếp đến chất lượng cuộc sống, sức khỏe tinh thần và sự hạnh phúc chung.",
      },
      {
        type: "title",
        content: "Những lợi ích thiết thực của việc kiểm soát thời gian",
      },
      {
        type: "text",
        content:
          "1. <strong>Nâng cao năng suất</strong>: Hoàn thành nhiều hơn với ít nỗ lực hơn.<br>" +
          "2. <strong>Giảm stress</strong>: Tránh quá tải, quên nhiệm vụ.<br>" +
          "3. <strong>Cân bằng cuộc sống</strong>: Dành thời gian cho gia đình, sở thích.<br>" +
          "4. <strong>Phát triển bản thân</strong>: Xây dựng thói quen tích cực, sức khỏe tốt hơn.",
      },
      {
        type: "title",
        content: "Cách quản lý thời gian hiệu quả: 7 công cụ 'xây đập' mạnh mẽ",
      },
      {
        type: "text",
        content:
          "Dưới đây là 7 kỹ thuật đã được chứng minh, giúp bạn định hướng dòng sông thời gian:",
      },
      {
        type: "text",
        content:
          "1. <strong>Mục tiêu SMART</strong>: Cụ thể, Đo lường được, Khả thi, Phù hợp, Có thời hạn – tăng khả năng đạt được 200% (nghiên cứu Locke & Latham).",
      },
      {
        type: "text",
        content:
          "2. <strong>Eisenhower Matrix</strong>: Chia việc thành 4 ô: Quan trọng-Khẩn cấp, tập trung ô 2 để tránh khủng hoảng.",
      },
      {
        type: "link",
        content: "https://www.mindtools.com/pages/article/newHTE_91.htm", // link Eisenhower Matrix
      },
      {
        type: "text",
        content:
          "3. <strong>Pomodoro 25/5</strong>: Làm 25 phút tập trung, nghỉ 5 phút – duy trì năng lượng, tránh mệt mỏi.",
      },
      {
        type: "text",
        content:
          "4. <strong>To-Do List ưu tiên</strong>: Liệt kê, sắp xếp theo deadline và giá trị – tránh quên sót.",
      },
      {
        type: "text",
        content:
          "5. <strong>Lịch điện tử</strong>: Google Calendar, Todoist – nhắc nhở tự động, đồng bộ đa thiết bị.",
      },
      {
        type: "text",
        content:
          "6. <strong>Ăn con ếch sáng</strong>: Làm nhiệm vụ khó nhất đầu ngày – khi năng lượng cao nhất.",
      },
      {
        type: "text",
        content:
          "7. <strong>Digital Detox</strong>: Chặn phân tâm bằng Freedom/Forest – giữ tập trung khung giờ vàng.",
      },
      {
        type: "image",
        content: qltg4.src, // ảnh: bảng Eisenhower hoặc chu kỳ Pomodoro minh họa
      },
      {
        type: "title",
        content: "Thách thức phổ biến và cách vượt qua",
      },
      {
        type: "text",
        content:
          "Trì hoãn, phân tâm (mạng xã hội), stress là 'lũ lụt' thường gặp. Khắc phục: Chia nhỏ nhiệm vụ, tắt thông báo, tự thưởng khi hoàn thành. Xây ý chí bằng accountability partner.",
      },
      {
        type: "title",
        content: "Bài học cuối: Thời gian là sông – hãy xây đập ngay hôm nay",
      },
      {
        type: "text",
        content:
          "Quản lý thời gian không phải kỹ năng bẩm sinh, mà là nghệ thuật xây đập cho dòng sông cuộc đời. Mỗi bước nhỏ – lập kế hoạch, ưu tiên, hành động – đều biến dòng chảy hỗn loạn thành năng lượng thành công. Bắt đầu ngay: Chọn một công cụ, áp dụng 2 phút thôi. Bạn sẽ thấy dòng sông thời gian phục vụ bạn, thay vì cuốn phăng.",
      },
    ],
    comment:
      "Thời gian không chờ đợi – nhưng bạn có thể làm chủ nó. Xây đập hôm nay, để dòng sông mang bạn đến đích mai sau!",
  },
    {
    id: 4,
    slug: "quan-ly-chi-tieu-hieu-qua-bi-quyet-toi-uu-hoa-ngan-sach-ca-nhan",
    title: "Quản lý Chi Tiêu Hiệu Quả: Bí Quyết Để Tối Ưu Hóa Ngân Sách Cá Nhân",
    categories: [
       categoriesData[32],
      categoriesData[28],
      categoriesData[29],
      
      categoriesData[31],
     
    ],
    image: ct1.src, // để trống, bạn thêm sau
    date: "2025-10-29",
    views: 5289,
    type: "blogs",

    // 👇 phần bình luận/ghi chú người viết
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Chuyên gia tài chính cá nhân & cố vấn ngân sách",

    // 👇 nội dung bài viết
    paragraphs: [
      {
        type: "text",
        content:
          "Trong thời đại chi phí sinh hoạt tăng vọt, quản lý chi tiêu không còn là lựa chọn – mà là kỹ năng sinh tồn. Hàng triệu người Việt đang vật lộn với câu hỏi: “Tiền đi đâu hết?” dù lương tháng vừa nhận. Nhưng sự thật là: tiền không biến mất – nó chỉ chưa được bạn dẫn dắt đúng cách.",
      },
      {
        type: "text",
        content:
          "Hãy tưởng tượng ngân sách như một khu vườn: nếu không vun trồng, tưới tiêu đúng mức, cỏ dại (chi tiêu vô bổ) sẽ mọc um tùm, còn hoa trái (tiết kiệm, đầu tư) mãi còi cọc. Bài viết này sẽ giúp bạn trở thành người làm vườn tài chính tài ba – từ việc hiểu rõ đất đai (thu nhập), gieo hạt giống mục tiêu, đến thu hoạch thành quả bền vững.",
      },
      {
        type: "image",
        content: ct2.src, // ảnh minh họa: khu vườn tài chính với cây tiền, cỏ dại chi tiêu, người làm vườn đang tỉa cành
      },
      {
        type: "title",
        content: "Quản lý chi tiêu là gì? Hiểu đúng để làm chủ",
      },
      {
        type: "text",
        content:
          "Quản lý chi tiêu là nghệ thuật phân bổ nguồn lực tài chính một cách có chủ đích, giúp bạn sống dưới khả năng, tích lũy cho tương lai và vẫn tận hưởng hiện tại. Theo nghiên cứu của Ngân hàng Thế giới, 78% người trưởng thành tại Việt Nam không có kế hoạch tài chính rõ ràng – dẫn đến tình trạng “cháy túi” trước lương.",
      },
      {
        type: "title",
        content: "Ẩn dụ khu vườn: Tại sao phải 'vun trồng' tài chính?",
      },
      {
        type: "text",
        content:
          "Ngân sách giống như khu vườn: cần đất tốt (thu nhập ổn định), hạt giống (mục tiêu), phân bón (kỷ luật), và thường xuyên nhổ cỏ (cắt giảm chi tiêu thừa). Nếu bỏ mặc, cỏ dại sẽ lấn át – bạn mãi nghèo dù làm việc chăm chỉ. Nhưng với chăm sóc đúng cách, khu vườn sẽ nở hoa và cho trái ngọt quanh năm.",
      },
      {
        type: "image",
        content: ct3.src, // ảnh: người làm vườn đang nhổ cỏ dại, tưới nước cho cây tiết kiệm đang lớn
      },
      {
        type: "title",
        content: "Tại sao quản lý chi tiêu quan trọng hơn bao giờ hết?",
      },
      {
        type: "text",
        content:
          "Lạm phát 4-5%/năm, giá nhà tăng 15%/năm, chi phí giáo dục đội lên 200% trong thập kỷ – trong khi lương chỉ tăng trung bình 7-8%. Nếu không kiểm soát chi tiêu, bạn đang chạy marathon với đôi giày thủng. Ngược lại, người quản lý tốt có thể tích lũy 6 tháng chi phí sinh hoạt chỉ trong 2-3 năm.",
      },
      {
        type: "title",
        content: "5 thách thức phổ biến nhất khi quản lý chi tiêu",
      },
      {
        type: "text",
        content:
          "1. <strong>Chi tiêu cảm tính</strong>: Mua sắm vì cảm xúc, khuyến mãi ảo.<br>" +
          "2. <strong>Thiếu mục tiêu rõ ràng</strong>: Không biết tiết kiệm để làm gì.<br>" +
          "3. <strong>Phân tâm công nghệ</strong>: Quảng cáo, Shopee Flash Sale.<br>" +
          "4. <strong>Áp lực xã hội</strong>: So sánh lifestyle trên mạng.<br>" +
          "5. <strong>Không theo dõi</strong>: “Tiền đi đâu không biết”.",
      },
      {
        type: "title",
        content: "Cách xây dựng ngân sách: 6 bước 'vun trồng' khu vườn tài chính",
      },
      {
        type: "text",
        content:
          "Dưới đây là quy trình đã giúp hàng nghìn người Việt chuyển từ “thiếu trước hụt sau” sang tự do tài chính:",
      },
      {
        type: "text",
        content:
          "1. <strong>Đánh giá thực trạng</strong>: Ghi chép chi tiêu 30 ngày liên tục – dùng app hoặc sổ tay.",
      },
      {
        type: "text",
        content:
          "2. <strong>Phương pháp 50/30/20</strong>: 50% nhu cầu thiết yếu, 30% mong muốn, 20% tiết kiệm/đầu tư.",
      },
      {
        type: "link",
        content: "https://www.nerdwallet.com/article/finance/nerdwallet-budget-calculator", // link công cụ 50/30/20
      },
      {
        type: "text",
        content:
          "3. <strong>Zero-based Budgeting</strong>: Mỗi đồng thu nhập phải có “công việc” – không để tiền “thất nghiệp”.",
      },
      {
        type: "text",
        content:
          "4. <strong>Mục tiêu SMART tài chính</strong>: “Tiết kiệm 50 triệu mua nhà trong 3 năm” thay vì “muốn giàu”.",
      },
      {
        type: "text",
        content:
          "5. <strong>Công cụ hỗ trợ</strong>: Money Lover, Spendee, YNAB – tự động phân loại chi tiêu.",
      },
      {
        type: "text",
        content:
          "6. <strong>Đánh giá hàng tháng</strong>: Cuối tháng xem “cỏ dại” mọc ở đâu → nhổ bỏ kịp thời.",
      },
      {
        type: "image",
        content: ct4.src, // ảnh: biểu đồ tròn 50/30/20 hoặc dashboard app Money Lover
      },
      {
        type: "title",
        content: "Chiến lược chi tiêu hàng ngày: 5 mẹo 'nhổ cỏ' hiệu quả",
      },
      {
        type: "text",
        content:
          "• <strong>Quy tắc 48h</strong>: Muốn mua đồ >500k → chờ 48h, 70% sẽ bỏ qua.<br>" +
          "• <strong>Thanh toán tiền mặt</strong>: Dùng phong bì cho từng hạng mục – hết là dừng.<br>" +
          "• <strong>Mua sắm có danh sách</strong>: Không vào siêu thị khi đói hoặc không có list.<br>" +
          "• <strong>So sánh giá 3 nơi</strong>: Dùng Google Shopping, Shopee, Tiki.<br>" +
          "• <strong>Tự nấu ăn 4 bữa/tuần</strong>: Tiết kiệm 1.5-2 triệu/tháng so với ăn ngoài.",
      },
      {
        type: "title",
        content: "Tiết kiệm & đầu tư: Từ hạt giống đến cây cổ thụ",
      },
      {
        type: "text",
        content:
          "Tiết kiệm 10-20% thu nhập hàng tháng vào quỹ khẩn cấp (6 tháng chi phí). Sau đó đầu tư sinh lời: gửi tiết kiệm online (6-7%/năm), quỹ mở VNDirect/VNDiamond, hoặc cổ phiếu blue-chip. Nguyên tắc vàng: <strong>Không đầu tư tiền cần dùng trong 3 năm</strong>.",
      },
      {
        type: "title",
        content: "Công nghệ hỗ trợ: Người làm vườn 4.0",
      },
      {
        type: "text",
        content:
          "<strong>Money Lover</strong>: Phân loại chi tiêu tự động, báo cáo biểu đồ.<br>" +
          "<strong>Spendee</strong>: Đồng bộ tài khoản ngân hàng, cảnh báo vượt ngân sách.<br>" +
          "<strong>YNAB</strong>: Triết lý “mỗi đồng có việc làm” – phù hợp người mới.",
      },
      {
        type: "title",
        content: "Bài học cuối: Khu vườn tài chính cần chăm sóc mỗi ngày",
      },
      {
        type: "text",
        content:
          "Quản lý chi tiêu không phải ki bo – mà là trao quyền tự do cho tương lai. Mỗi quyết định hôm nay là một nhát cuốc vun đất. Bắt đầu ngay: Tải app ghi chép, áp dụng 50/30/20, nhổ 1 “cỏ dại” chi tiêu thừa. Sau 30 ngày, bạn sẽ thấy khu vườn tài chính bắt đầu nở hoa.",
      },
    ],
    comment:
      "Tiền không mua được hạnh phúc – nhưng quản lý tốt tiền sẽ giúp bạn mua được tự do. Hãy bắt đầu vun trồng khu vườn tài chính của bạn ngay hôm nay!",
  },
];
