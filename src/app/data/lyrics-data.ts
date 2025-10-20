import tree1 from "../asset/tree1.jpg";
import tree2 from "../asset/tree2.jpg";
import { LyricPost } from "../types/type";
import { categoriesData } from "./category-data";
import sweetliquorAm from "../asset/lyric-img/sweet-liquor-am.jpg";
import sweetliquor from "../asset/lyric-img/sweet-liquor.jpg";
import vctVetmua from "../asset/lyric-img/vu-cat-tuong-vet-mua.jpg";
import vct from "../asset/lyric-img/vu-cat-tuong.jpg";
import kbly from "../asset/lyric-img/kb-lyric.jpg";
import hngle from "../asset/lyric-img/kb.jpeg";

export const lyricsData: LyricPost[] = [
  {
    id: 1,
    title: "ấm – Sweet Liquor",
    categories: [categoriesData[5], categoriesData[6], categoriesData[7]],
    image: sweetliquorAm.src,
    date: "2024-11-19", // ngày phát hành theo thông tin SoundCloud :contentReference[oaicite:2]{index=2}
    views: 1200, // giữ nguyên hoặc bạn cập nhật nếu có dữ liệu mới
    type: "lyrics",
    artist: "Sweet Liquor",
    lyrics: [
  {
    type: "Verse 1",
    content:
      "Như cơn mưa\nAnh tưới mát trái tim khô cằn\nBao ngày tháng\nMình dìu nhau bước qua nhọc nhằn\nBao hạt đắng\nVới em rồi cũng hóa ngọt ngào",
  },
  {
    type: "Chorus 1",
    content:
      "Bước 2, 3, 1\nBước 2, 3, 1\nTa nhảy theo điệu nhạc\nMôi-mắt-môi nồng nàn\nBước 2, 3, 1\nAnh cầm lấy tay em và nói\nAnh là nơi an trú\nCòn em về yên giấc ngủ\nCuộc đời có không vui\nCuộc đời có không xuôi\nNhưng luôn có anh\nVà khi tóc nhuộm màu mây\nChân chim đã đầy\nĐôi mắt em không còn nhìn thấy\nVẫn chỉ có bóng hình anh\nBóng hình anh\nMãi thôi",
  },
  {
    type: "Bridge",
    content:
      "Dẫu sẽ biết\nNhững lo toan chòng chành dễ khiến đôi mắt\nTa không còn nhìn nhau với biết bao nhiêu dịu dàng\nBiết bao nhiêu nhẹ nhàng của ngày đầu tiên\nEm vẫn mong ngoài hiên nhà\nNắng vẫn sẽ rất hiền\nBình minh rồi vẫn lên\nNhư anh vẫn yêu em",
  },
  {
    type: "Chorus 2",
    content:
      "Bước 2, 3, 1\nAnh cầm lấy tay em và nói\nAnh là nơi an trú\nCòn em về yên giấc ngủ\nCuộc đời có không xuôi\nCuộc đời có không vui\nNhưng luôn có anh\nVà khi tóc nhuộm màu mây\nChân chim đã đầy\nĐôi mắt em không còn nhìn thấy\nVẫn chỉ có bóng hình nhau\nBóng hình nhau\nMãi thôi",
  },
]
,
    year: "2024",
    duration: " — ", // chưa tìm được chính xác thời lượng
    singerPhoto: sweetliquor.src,
    composer: "Nguyễn Du Quỳnh Như", // thông tin Shazam :contentReference[oaicite:5]{index=5}
    producer: "Thịnh Mạnh Hoàng Anh / Theon", // theo Shazam :contentReference[oaicite:6]{index=6}
    otherSongs: [
      "chuyện cây và chim",
      "guardian angel",
      "hai chúng ta giữa thế gian",
    ], // các bài khác của artist :contentReference[oaicite:7]{index=7}
    userCommentAvatar: tree1.src,
    userNameComment: "Nguyen Van A",
    userRoleComment: "Admin",
    comment: "Bài hát này thực sự chạm đến trái tim tôi mỗi khi nghe.",
  },
  {
    id: 2,
    title: "Vết mưa – Vũ Cát Tường",
    categories: [categoriesData[0], categoriesData[7], categoriesData[15]],

    image: vctVetmua.src, // ảnh đại diện bài hát
    date: "2014-12-23", // ngày phát hành chính thức
    views: 1750,
    type: "lyrics",
    artist: "Vũ Cát Tường",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Cơn mưa đã xóa hết những ngày yêu qua\nChỉ còn mình anh ngu ngơ mong cho cơn mưa\nTan trong yêu thương không vội vã",
      },
      {
        type: "Verse 2",
        content:
          "Mưa ngoan giấu hết những phút thẫn thờ này\nThương em đi giữa đêm lạnh khoảng trời một mình\nBỏ lại tình mình theo làn mây",
      },
      {
        type: "Verse 3",
        content:
          "Tìm về ngày yêu ấy\nCũng trong chiều mưa này\nMình đã gặp nhau, lạnh bờ vai\nNhưng tim vẫn cười",
      },
      {
        type: "Verse 4",
        content:
          "Giờ vẫn chiều mưa ấy\nEm nép trong vòng tay ai?\nAnh chỉ lặng im\nĐôi hàng mi nhẹ run cho tim anh bật khóc",
      },
      {
        type: "Chorus 1",
        content:
          "Đã qua rồi\nQua khoảnh khắc đôi mình nói tiếng yêu ngập ngừng\nRồi nhẹ nhàng đặt lên môi hôn\nCho anh quên đi lạnh giá\nVỡ tan rồi, anh chẳng nói nên lời\nMưa rơi xé tan bóng hình vì giờ này em quay đi\nBuông tay anh trong chiều giá lạnh\nHeh-eh-eh-eh-yeah",
      },
      {
        type: "Bridge",
        content:
          "Khi cơn mưa cuốn hết nỗi đau ấy\nAnh sẽ quên những yêu thương anh viết riêng cho em\nKhi cầu vồng lên sau cơn bão giông\nAnh sẽ đi qua yêu thương, không còn vấn vương",
      },
      {
        type: "Chorus 2",
        content:
          "Đã qua rồi\nQua khoảnh khắc đôi mình nói tiếng yêu ngập ngừng\nRồi nhẹ nhàng đặt lên môi hôn\nCho anh quên đi lạnh giá, yeah\nVỡ tan rồi, anh chẳng nói nên lời\nMưa rơi xé tan bóng hình vì giờ này em quay đi\nBuông tay anh trong chiều giá lạnh\nOoh-ooh-ooh\nOh-oh, ooh, yeah",
      },
    ],
    year: "2014",
    duration: "03:30", // thời lượng bài hát
    singerPhoto: vct.src, // ảnh ca sĩ
    composer: "Vũ Cát Tường",
    producer: "Huy Tuấn",
    otherSongs: ["Yêu xa", "Mơ", "Đôi khi"], // các bài khác của Vũ Cát Tường
    userCommentAvatar: tree2.src,
    userNameComment: "Tran Thi B",
    userRoleComment: "Admin",
    comment: "Bài hát đầy cảm xúc, khiến lòng người lắng lại mỗi khi nghe.",
  },
  {
    id: 3,
    title: "Không Buông – Hngle ft. Ari",
    categories: [categoriesData[0], categoriesData[7], categoriesData[14]],
    image: kbly.src,
    date: "2025-08-25",
    views: 1200,
    type: "lyrics",
    artist: "Hngle ft. Ari",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Anh nhớ từng phút yên bình tay nắm tay\nNhớ khoảnh khắc đôi mình còn đắm say\nChỉ vừa như mới hôm nào\nMà sao giờ lại xa quá? (Sao rời xa quá?)\nAnh vẫn nhớ khi trời vừa nhá nhem\nQua đón em dạo cùng phố đêm\nGiờ thì không còn nữa\nCô đơn thân với anh thêm",
      },
      {
        type: "Chorus 1",
        content:
          "Anh cố để chi vậy? Rồi cũng ra như này\nCứ vun mối tình, mặc tấm thân hao gầy\nLiệu có phút giây nào người xót anh không vậy?\nMọi thứ chỉ để anh gánh lấy\nChẳng phút giây nào anh hết yêu em\nMỗi lần ướt mi hoen là do anh nhớ em thêm\nTại sao lại nói yêu anh mà lại để mi anh ướt nhèm?",
      },
      {
        type: "Verse 2",
        content:
          "Em cũng có nỗi niềm của riêng mình\nEm xin lỗi đã bỏ anh một mình\nSau bao tháng năm ta cùng chung đường\nGiờ hai đứa hai nơi",
      },
      {
        type: "Bridge",
        content:
          "Đoạn cảm xúc tưởng như là lâu dài\nNhưng lại kết thúc bất ngờ vì hiểu lầm\nEm trách sao lúc đó mình không vì nhau mà cố\nEm vẫn còn nhớ những lần mình đã hứa hẹn\nCùng nhau mãi mãi chẳng rời xa\nVà môi hôn vẫn để lại đó bao ngọt ngào xưa\nGiờ thì đã quá trễ rồi vì phút bốc đồng\nMà đôi ta chẳng thể nào cạnh bên",
      },
      {
        type: "Outro",
        content:
          'Hỏi: "Em còn yêu không?", em trả lời là: "Không còn"\nNhưng đó chỉ là dối lòng\nAnh cố để chi vậy? Rồi cũng ra như này\nCứ vun mối tình, mặc tấm thân hao gầy\nLiệu có phút giây nào người xót anh không vậy?\nMọi thứ chỉ để anh gánh lấy\nChẳng phút giây nào anh hết yêu em\nMỗi lần ướt mi hoen là do anh nhớ em thêm\nTại sao lại nói yêu anh mà lại để mi anh ướt nhèm?\nThật ra anh biết từ đầu rồi, babe\nRằng lời yêu đó chỉ là gió bay\nGiờ tim vỡ nát như này\nDo anh cố chấp nên vậy\nMong em hạnh phúc đi bên người ta\nPhần anh sẽ cố gắng để vượt qua\nĐến đây thôi, em à\nĐến lúc ta phải chia xa',
      },
    ],
    year: "2025",
    duration: "03:45",
    singerPhoto: hngle.src,
    composer: "Hngle, Ari",
    producer: "Hngle",
    otherSongs: ["Cô Đơn", "Nói Anh Nghe", "Ur Last"],
    userCommentAvatar: tree2.src,
    userNameComment: "Nguyen Thi B",
    userRoleComment: "Admin",
    comment: "Bài hát này thực sự chạm đến trái tim tôi mỗi khi nghe.",
  },
];
