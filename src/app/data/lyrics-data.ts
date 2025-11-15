import anonymous from "../asset/anonymous.jpg";
import tree2 from "../asset/tree2.jpg";
import { LyricPost } from "../types/type";
import { categoriesData } from "./category-data";
import sweetliquorAm from "../asset/lyric-img/sweet-liquor-am.jpg";
import sweetliquor from "../asset/lyric-img/sweet-liquor.jpg";
import vctVetmua from "../asset/lyric-img/vu-cat-tuong-vet-mua.jpg";
import vct from "../asset/lyric-img/vu-cat-tuong.jpg";
import kbly from "../asset/lyric-img/kb-lyric.jpg";
import hngle from "../asset/lyric-img/kb.jpeg";
import vctNguoiBinhThuong from "../asset/lyric-img/vctNguoiBinhThuong.jpg";
import minGoiTenEm from "../asset/lyric-img/gte-min.jpg";
import minSinger from "../asset/lyric-img/min.jpg";
import vycdd from "../asset/lyric-img/viyeucudamdau-min.jpg";
import wn from "../asset/lyric-img/wn.jpg";
import haisaubay from "../asset/lyric-img/267.jpg";
import id072019 from "../asset/lyric-img/id072019.jpg";
import idt41104 from "../asset/lyric-img/idt41104.jpg";
import id2022 from "../asset/lyric-img/id2022.jpg";
import anngo from "../asset/lyric-img/anngo.jpg";
import vuonmayvuahay from "../asset/lyric-img/vuonmayvuahay-anngo.jpg";
import thangdien from "../asset/lyric-img/thangdien-justati.jpg";
import jte from "../asset/lyric-img/justee.jpg";
import aikeben from "../asset/lyric-img/1aikeben.jpg";
import mylina from "../asset/lyric-img/mylina.jpg";
import leehi from "../asset/lyric-img/leehi.jpg";
import only from "../asset/lyric-img/only.jpg";
import mylina_ketuday from "../asset/lyric-img/ketuday.jpg";
import phuongly from "../asset/lyric-img/phuongly.jpg";
import anhlaai from "../asset/lyric-img/anhlaai.jpg";





export const lyricsData: LyricPost[] = [
  {
    id: 1,
    slug: "lyric-am-sweet-liquor",
    title: "Lyric ấm - Sweet Liquor",
    categories: [categoriesData[5], categoriesData[6], categoriesData[7]],
    image: sweetliquorAm.src,
    audio: "/audio/am.MP3",
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
    ],
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
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment: "Một bản nhạc nhẹ nhàng, sâu lắng về tình yêu và sự an trú trong vòng tay người thương. Giai điệu êm dịu kết hợp với lời ca ý nghĩa tạo nên một trải nghiệm âm nhạc đầy cảm xúc. Bài hát như một lời nhắc nhở về việc tìm thấy sự bình yên và hạnh phúc trong những khoảnh khắc giản đơn bên người mình yêu. Một tác phẩm tuyệt vời từ Sweet Liquor.",
  },
  {
    id: 2,
    slug: "lyric-vet-mua-vu-cat-tuong",
    title: "Lyric Vết mưa - Vũ Cát Tường",
    categories: [categoriesData[0], categoriesData[7], categoriesData[15]],

    image: vctVetmua.src, // ảnh đại diện bài hát
    audio: "/audio/vetmua.MP3",
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
    otherSongs: ["Từng là", "Mơ", "Yêu xa"], // các bài khác của Vũ Cát Tường
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment: "Bài hát 'Vết mưa' của Vũ Cát Tường là một bản ballad đầy cảm xúc, kể về nỗi đau chia ly và những kỷ niệm ngọt ngào trong tình yêu. Giai điệu nhẹ nhàng, sâu lắng kết hợp với lời ca chân thật đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe. Qua từng câu hát, người nghe có thể cảm nhận được sự tiếc nuối và nỗi buồn khi phải rời xa người mình yêu thương. Đây thực sự là một bài hát đáng nhớ trong sự nghiệp của Vũ Cát Tường.",
  },
  {
    id: 3,
    slug: "lyric-khong-buong-hngle-ft-ari",
    title: "Lyric Không Buông - Hngle ft. Ari",
    categories: [categoriesData[0], categoriesData[7], categoriesData[14]],
    image: kbly.src,
    audio: "/audio/khongbuong.MP3",
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
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment: "Bài hát 'Không Buông' của Hngle ft. Ari là một bản ballad đầy cảm xúc, kể về nỗi đau chia ly và những kỷ niệm ngọt ngào trong tình yêu. Giai điệu nhẹ nhàng, sâu lắng kết hợp với lời ca chân thật đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe. Qua từng câu hát, người nghe có thể cảm nhận được sự tiếc nuối và nỗi buồn khi phải rời xa người mình yêu thương. Đây thực sự là một bài hát đáng nhớ trong sự nghiệp của Hngle và Ari.",
  },
  {
    id: 4,
    slug: "lyric-nguoi-binh-thuong-vu-cat-tuong",
    title: "Lyric Người Bình Thường - Vũ Cát Tường",
    categories: [categoriesData[0], categoriesData[7], categoriesData[15]],

    image: vctNguoiBinhThuong.src, // ảnh đại diện bài hát
    audio: "/audio/nguoibinhthuong.MP3",
    date: "2020-06-18", // ngày phát hành chính thức
    views: 2180,
    type: "lyrics",
    artist: "Vũ Cát Tường",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Anh đã qua ba lần của mười năm\nAnh có một thời tuổi trẻ đẹp lắm\nCố gắng không để ngã gục\nĐổi lấy thứ anh cho là hạnh phúc.",
      },
      {
        type: "Verse 2",
        content:
          "Cảm ơn đời dạy anh một điều thôi\nBình yên đâu phải là nơi xa xôi\nNhững nghĩ suy, những mong cầu\nĐã đổi thay trong anh nhiều từ bấy lâu.",
      },
      {
        type: "Pre-Chorus",
        content:
          "Đã có lúc anh quên rằng chính mình là ai\nĐã có lúc anh quên học cách phải dừng lại.",
      },
      {
        type: "Chorus 1",
        content:
          "Người bình thường như anh chẳng vội đi nhanh\nNgày ba bữa cơm canh\nTập vui lúc khó, yêu từng bước nhỏ\nQuen đối diện lắng lo.",
      },
      {
        type: "Verse 3",
        content:
          "Tuổi trẻ của anh lao đi miệt mài\nNhiều khi chẳng quan tâm đó là đúng hay sai\nTrưởng thành cho anh, khâu vết thương lành\nLại càng hiểu hơn người anh muốn trở thành.",
      },
      {
        type: "Bridge",
        content:
          "Đi quãng đường thật xa khiến mình nhận ra\nĐiều giản đơn trong chúng ta\nCứ sống bình thường thôi, bước chầm chậm sẽ đến nơi.",
      },
      {
        type: "Chorus 2",
        content:
          "Người bình thường như anh đã qua hư danh\nChọn học cách chân thành\nTập vui lúc khó, yêu từng bước nhỏ\nQuen đối diện lắng lo.",
      },
      {
        type: "Outro",
        content:
          "Đi quãng đường thật xa khiến mình nhận ra\nĐiều giản đơn trong chúng ta\nCứ sống bình thường thôi, bước chầm chậm sẽ đến nơi.",
      },
    ],
    year: "2020",
    duration: "04:02", // thời lượng bài hát
    singerPhoto: vct.src, // ảnh ca sĩ
    composer: "Vũ Cát Tường",
    producer: "Huy Tuấn",
    otherSongs: ["Từng là", "Mơ", "Yêu xa"], // các bài khác của Vũ Cát Tường
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "'Người Bình Thường' là một bản ballad sâu lắng của Vũ Cát Tường, thể hiện hành trình trưởng thành và tìm kiếm hạnh phúc trong cuộc sống. Bài hát mang thông điệp về việc trân trọng những điều giản đơn và sống chậm lại để tận hưởng từng khoảnh khắc. Giai điệu nhẹ nhàng kết hợp với lời ca ý nghĩa đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe, khiến họ suy ngẫm về giá trị thực sự của cuộc sống và tình yêu.",
  },
  {
    id: 5,
    slug: "lyric-goi-ten-em-min",
    title: "Lyric Gọi Tên Em - MIN",
    categories: [categoriesData[0], categoriesData[7], categoriesData[15]],
    image: minGoiTenEm.src, // ảnh đại diện bài hát (placeholder, replace with actual src)
    audio: "/audio/goitenem.MP3",
    date: "2016-12-09", // ngày phát hành chính thức
    views: 15000, // approximate views, adjust as needed
    type: "lyrics",
    artist: "MIN",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Ngồi bên nhau một hôm trời mưa\nTí tách rơi giọt đong giọt thưa\nLặng nghe nhịp tim chầm chậm tăng lên\nBiết sao cho vừa.",
      },
      {
        type: "Pre-Chorus",
        content:
          "Tình yêu là khi một người\nMuốn chạm vào, dịu dàng với em\nLời anh nói sao êm đềm\nNhẹ nhàng nụ hôn phớt lên môi mềm.",
      },
      {
        type: "Chorus",
        content:
          "Khi anh gọi tên em\nBão tố cũng hóa dịu dàng\nNhững thanh âm vang lên\nDường như phát sáng.\nKhi anh gọi tên em\nNgày mưa cũng hóa cầu vồng\nKhi anh gọi tên em\nBình yên xoay vòng.",
      },
      {
        type: "Verse 2",
        content:
          "Cầm tay nhau một hôm trời mưa\nTrái tim anh rung động hay chưa?\nTí tách rơi giọt đong giọt thưa\nLặng nghe nhịp tim chầm chậm tăng lên\nBiết sao cho vừa.",
      },
      {
        type: "Pre-Chorus",
        content:
          "Tình yêu là khi một người\nMuốn chạm vào, dịu dàng với em\nLời anh nói sao êm đềm\nNhẹ nhàng nụ hôn phớt lên môi mềm.",
      },
      {
        type: "Chorus",
        content:
          "Khi anh gọi tên em\nBão tố cũng hóa dịu dàng\nNhững thanh âm vang lên\nDường như phát sáng.\nKhi anh gọi tên em\nNgày mưa cũng hóa cầu vồng\nKhi anh gọi tên em\nBình yên xoay vòng.",
      },
      {
        type: "Outro",
        content:
          "Tadida… Khi anh gọi tên em\nThanh âm phát sáng\nTadida… Khi anh gọi tên em\nBình yên xoay vòng.",
      },
    ],
    year: "2016",
    duration: "03:00", // thời lượng bài hát
    singerPhoto: minSinger, // ảnh ca sĩ (placeholder, replace with actual src)
    composer: "Kai Đinh",
    producer: "Khắc Hưng",
    otherSongs: ["Ghen", "Có Em Chờ", "Đừng Yêu Nữa Em Mệt Rồi"], // các bài khác của MIN
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "'Gọi Tên Em' là một bản ballad nhẹ nhàng, sâu lắng của MIN, kể về cảm xúc khi yêu và sự an ủi mà tình yêu mang lại. Giai điệu êm dịu kết hợp với lời ca ý nghĩa đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe. Bài hát như một lời nhắc nhở về việc tìm thấy sự bình yên và hạnh phúc trong những khoảnh khắc giản đơn bên người mình yêu. Một tác phẩm tuyệt vời từ MIN.",
  },
  {
    id: 6,
    slug: "lyric-vi-yeu-cu-dam-dau-min",
    title: "Lyric Vì Yêu Cứ Đâm Đầu - MIN",
    categories: [categoriesData[0], categoriesData[7], categoriesData[15]],

    image: vycdd.src, // ảnh đại diện bài hát (placeholder, replace with actual src)
    audio: "/audio/viyeucudamdau.MP3",
    date: "2020-07-28", // ngày phát hành chính thức
    views: 25000, // approximate views, adjust as needed
    type: "lyrics",
    artist: "MIN ft. Đen Vâu & JustaTee",
    lyrics: [
      {
        type: "Intro",
        content:
          "Qua nỗi sầu đêm nay\nTrăng gối đầu lên mây\nThêm chút rượu và men cuốn muộn phiền đi để tình thêm say\nĐôi mắt buồn sâu cay\nChan chứa tình lâu nay\nOh boy\nKhông biết ở nơi đâu\nKhông biết được bao lâu\nChỉ muốn cùng anh đi đến tận cùng nơi đất trời thâm sâu\nHuhh-huh-huh-huh-huh\nVì yêu cứ đâm đầu (Cứ đâm đầu)\nCứ đâm đầu (Cứ đâm đầu)",
      },
      {
        type: "Verse 1",
        content:
          "Ngay lúc nhìn, ngay lúc nhìn, ngay lúc nhìn\nNgay lúc nhìn anh đôi phút\nTim đã vội, tim đã vội, tim đã vội\nTim đã vội hơn đôi chút\nSorry, em chưa quen với việc\nMình đang ngồi bên nhau\nEm chưa quen với việc\nAnh nhìn em chằm chằm\nVì yêu cứ đâm đầu\nCứ đâm đầu\nCứ đâm đầu",
      },
      {
        type: "Verse 2",
        content:
          "Ay\nChạm lên bờ môi của em đỏ au\nTrò chuyện thật nhiều để cho rõ nhau\nChúng ta hoang dại như là cỏ lau\nBỏ tiền bỏ bạc chứ không bỏ nhau\nAnh sẽ nói cho em nghe những điều mà anh ấp ủ\nAnh hy vọng lời ca này vỗ về em trong giấc ngủ\nAnh cũng muốn em biết anh vốn không phải là thiếu gia\nNhững ngày em về trong đời anh nhất định trải chiếu hoa",
      },
      {
        type: "Chorus",
        content:
          "Qua nỗi sầu đêm nay\nTrăng gối đầu lên mây\nThêm chút rượu và men cuốn muộn phiền đi để tình thêm say\nĐôi mắt buồn sâu cay\nChan chứa tình lâu nay\nOh boy\nKhông biết ở nơi đâu\nKhông biết được bao lâu\nChỉ muốn cùng anh đi đến tận cùng nơi đất trời thâm sâu\nHuhh-huh-huh-huh-huh\nVì yêu cứ đâm đầu (Cứ đâm đầu)\nCứ đâm đầu (Cứ đâm đầu)",
      },
      {
        type: "Bridge",
        content:
          "(Ối giời)\nEm ơi, không may, đêm nay\nChưa muốn đưa em về\nDon’t be lonely tonight\nBaby i’m so high on you",
      },
      {
        type: "Outro",
        content:
          "Just, just, just, just\nAy Đen Vâu\nVì yêu cứ đâm đầu (Sao em cứ đâm đầu)\n(Cứ đâm đầu)\nCứ đâm đầu (Sao em cứ đâm đầu)\n(Cứ đâm đầu)",
      },
    ],
    year: "2020",
    duration: "03:00", // thời lượng bài hát
    singerPhoto: minSinger.src, // ảnh ca sĩ (placeholder, replace with actual src)
    composer: "Nguyễn Hoàng Tôn, Đen Vâu, JustaTee",
    producer: "Khắc Hưng",
    otherSongs: ["Gọi Tên Em", "Ghen", "Có Em Chờ"], // các bài khác của MIN
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "'Vì Yêu Cứ Đâm Đầu' là một bản ballad nhẹ nhàng, sâu lắng của MIN, kể về cảm xúc khi yêu và sự an ủi mà tình yêu mang lại. Giai điệu êm dịu kết hợp với lời ca ý nghĩa đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe. Bài hát như một lời nhắc nhở về việc tìm thấy sự bình yên và hạnh phúc trong những khoảnh khắc giản đơn bên người mình yêu. Một tác phẩm tuyệt vời từ MIN.",
  },
  {
    id: 7,
    slug: "lyric-id-072019-wn",
    title: "Lyric id 072019 - W/n",
    categories: [categoriesData[0], categoriesData[7], categoriesData[10]],
    image: id072019.src, // ảnh đại diện bài hát (placeholder, replace with actual src)
    audio: "/audio/id072019.MP3",
    date: "2023-07-31", // ngày phát hành chính thức
    views: 50000, // approximate views, adjust as needed
    type: "lyrics",
    artist: "W/n ft. 267",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Có cơn mưa nào đôi mình đi qua\nAnh đến bên em ngày đôi mình chia xa\nMỗi lá rơi bên hồ nỗi cô đơn lớn lên\nMùa thu ấy em không còn bên cạnh anh nữa\nAnh vẫn đứng nơi đây chờ em cùng cơn mưa\nChúng ta sau này chẳng có chúng ta bây giờ",
      },
      {
        type: "Pre-Chorus",
        content:
          "Giờ này chỉ nỗi nhớ cứ vơi nhiều thêm\nGiờ này chỉ mình ta với những tháng năm dài\nCó khi em chẳng còn yêu anh\nNhư trái tim ta từng chung lối đi",
      },
      {
        type: "Chorus",
        content:
          "Có cơn mưa nào đôi mình đi qua\nAnh viết cho em bài ca mùa yêu xa\nMỗi lá rơi bên hồ nỗi cô đơn lớn lên\nMùa thu ấy anh không còn bên cạnh em nữa\nEm vẫn đứng nơi đây chờ anh cùng cơn mưa\nChúng ta sau này chẳng có chúng ta bây giờ",
      },
      {
        type: "Rap",
        content:
          "Một người âm thầm đứng dưới mưa nhìn em\nMột người giữa thành phố vẫn cứ chờ em\nVì sao cứ nơi đó mà anh rời sang nơi đâu\nGiờ này chỉ nỗi nhớ cứ vơi nhiều thêm\nGiờ này chỉ mình ta với những tháng năm dài\nCó khi em chẳng còn yêu anh\nNhư trái tim ta từng chung lối đi",
      },
      {
        type: "Outro",
        content: "Chúng ta sau này chẳng có chúng ta bây giờ",
      },
    ],
    year: "2023",
    duration: "03:45", // thời lượng bài hát
    singerPhoto: wn.src, // ảnh ca sĩ (placeholder, replace with actual src)
    composer: "W/n",
    producer: "W/n",
    otherSongs: ["id T41104", "id 2022", "3107"], // các bài khác của W/n
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "Bài hát 'id 072019' của W/n là một bản ballad đầy cảm xúc, kể về nỗi đau chia ly và những kỷ niệm ngọt ngào trong tình yêu. Giai điệu nhẹ nhàng, sâu lắng kết hợp với lời ca chân thật đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe. Qua từng câu hát, người nghe có thể cảm nhận được sự tiếc nuối và nỗi buồn khi phải rời xa người mình yêu thương. Đây thực sự là một bài hát đáng nhớ trong sự nghiệp của W/n.",
  },
  {
    id: 8,
    slug: "lyric-id-t41104-wn",
    title: "Lyric id T41104 - W/n",
    categories: [categoriesData[0], categoriesData[7], categoriesData[10]],
    image: idt41104.src, // ảnh đại diện bài hát (placeholder, replace with actual src)
    audio: "/audio/idT41104.MP3",
    date: "2023-10-31", // ngày phát hành chính thức
    views: 45000, // approximate views, adjust as needed
    type: "lyrics",
    artist: "W/n ft. 267",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Chúng ta đã kết thúc\nGiờ phải làm sao với con tim vỡ nát chết trong lòng\nMưa rơi hay nước mắt làm nhòe mi em\nChẳng thể yêu thêm một ai",
      },
      {
        type: "Pre-Chorus",
        content:
          "Anh liệu có còn xem dòng tin mà\nAnh liệu đang còn xem hình hai ta\nNgồi xem lại những kỷ niệm xưa",
      },
      {
        type: "Chorus",
        content:
          "Nhìn anh cùng người khác bên nhau thật hạnh phúc\nChuyện tình ta như thước phim nhưng đã có hồi kết\nDạo này anh chẳng nhắc tên em ở trong story\nCần một chút âm thanh làm bài nhạc lofi\nLiệu anh, liệu anh, liệu anh",
      },
      {
        type: "Verse 2",
        content:
          "Liệu anh vẫn sẽ cười khi mà ta lại vô tình qua nhau\nLiệu chúng ta có còn ấm áp như ngày đầu\nNhưng em sẽ chạy tới gặp anh và trao nụ hôn sâu\nRồi tỉnh giấc và căn phòng chẳng còn anh đâu",
      },
      {
        type: "Outro",
        content: "Uhh uh uh uh uh\nBầu trời tối giữa đêm căn phòng",
      },
    ],
    year: "2023",
    duration: "03:30", // thời lượng bài hát
    singerPhoto: haisaubay.src, // ảnh ca sĩ (placeholder, replace with actual src)
    composer: "W/n",
    producer: "W/n",
    otherSongs: ["id 072019", "id 2022", "3107"], // các bài khác của W/n
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "Bài hát 'id T41104' của W/n là một bản ballad đầy cảm xúc, kể về nỗi đau chia ly và những kỷ niệm ngọt ngào trong tình yêu. Giai điệu nhẹ nhàng, sâu lắng kết hợp với lời ca chân thật đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe. Qua từng câu hát, người nghe có thể cảm nhận được sự tiếc nuối và nỗi buồn khi phải rời xa người mình yêu thương. Đây thực sự là một bài hát đáng nhớ trong sự nghiệp của W/n.",
  },
  {
    id: 9,
    slug: "lyric-id-2022-wn",
    title: "Lyric id 2022 - W/n",
    categories: [categoriesData[0], categoriesData[7], categoriesData[10]],
    image: id2022.src, // ảnh đại diện bài hát (placeholder, replace with actual src)
    audio: "/audio/id2022.MP3",
    date: "2023-12-31", // ngày phát hành chính thức
    views: 60000, // approximate views, adjust as needed
    type: "lyrics",
    artist: "W/n ft. 267",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Năm nay ta chưa thành những điều mà ta ước vọng\nÍt phút nữa lại là một năm mới sang\nNhắm mắt để cảm nhận trái tim này cũng ngóng chờ\nĐiều gì mà lòng cứ lo hoài không yên",
      },
      {
        type: "Pre-Chorus",
        content:
          "Bước xuống phố một mình chốn đông người để ngắm nhìn\nCó chút vấn vương về những gì đã qua\nTa đã cố gắng nhưng đôi khi vẫn còn nuối tiếc\nMong năm mới sẽ mang đến những điều tốt đẹp hơn",
      },
      {
        type: "Chorus",
        content:
          "Ít phút nữa thôi là năm mới lại sang\nTa sẽ buông bỏ những lo âu năm qua\nHãy để tim ta mở rộng đón nhận\nNhững điều mới mẻ, những giấc mơ chưa thành",
      },
      {
        type: "Rap",
        content:
          "Năm cũ qua đi với bao kỷ niệm\nCó vui có buồn, có những bài học\nTa sẽ mạnh mẽ hơn, bước tiếp hành trình\nCùng bạn bè, gia đình đón năm mới bình an",
      },
      {
        type: "Outro",
        content:
          "Chúc mọi người một năm mới hạnh phúc\nVà những ước mơ sẽ thành hiện thực",
      },
    ],
    year: "2023",
    duration: "04:00", // thời lượng bài hát
    singerPhoto: wn.src, // ảnh ca sĩ (placeholder, replace with actual src)
    composer: "W/n",
    producer: "W/n",
    otherSongs: ["id 072019", "id T41104", "3107"], // các bài khác của W/n
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "Bài hát 'id 2022' của W/n là một bản ballad đầy cảm xúc, kể về nỗi lo lắng về tương lai và những ước mơ chưa thành trong cuộc sống. Giai điệu nhẹ nhàng, sâu lắng kết hợp với lời ca chân thật đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe. Qua từng câu hát, người nghe có thể cảm nhận được sự khao khát và hy vọng về một tương lai tươi sáng hơn. Đây thực sự là một bài hát đáng nhớ trong sự nghiệp của W/n.",
  },
  {
    id: 10,
    slug: "lyric-vuon-may-vua-hay-an-ngo",
    title: "Lyric Vườn Mây Vừa Hay - Ân Ngờ",
    categories: [categoriesData[0], categoriesData[7], categoriesData[15]],

    image: vuonmayvuahay.src, // ảnh đại diện bài hát (placeholder, replace with actual src)
    audio: "/audio/vuonmayvuahay.MP3",
    date: "2025-05-07", // ngày phát hành chính thức (dựa trên thông tin mới)
    views: 30000, // approximate views, adjust as needed
    type: "lyrics",
    artist: "Ân Ngờ ft. MYLINA",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Sao mây đen cứ thế bao vây\nTa va nhau trong lúc không may\nEm ngỡ đâu đây là bình yên nơi ánh mắt người\nKhông hay ta như đã yêu nhau trước đây",
      },
      {
        type: "Chorus",
        content:
          "Vườn mây vừa hay những ngất ngây\nEm trao đến ai từng câu lắng lo ngày dài\nThổn thức anh đã bao đêm ngày\nMột giấc mơ em ngỡ đâu đây",
      },
      {
        type: "Verse 2",
        content:
          "Cảm giác như thật giống như\nEm lẽ ra thuộc về ai\nChàng lấy đi trái tim tôi rồi\nDạo bước quanh qua những xa xôi",
      },
      {
        type: "Pre-Chorus",
        content: "Tìm thấy nhau dù chẳng mau\nXem đây như như là",
      },
      {
        type: "Chorus 2",
        content:
          "Nếu không phải anh thì em ơi\nĐừng cho ai khác đến đây\nMột khu vườn hoa riêng chúng ta\nSẽ không có người lạ",
      },
      {
        type: "Outro",
        content:
          "Nếu không phải anh thì em ơi\nĐừng cho ai khác bước qua\nMột rừng yêu thương ta đã gieo\nTrong những xanh tươi",
      },
    ],
    year: "2025",
    duration: "04:15", // thời lượng bài hát (ước lượng)
    singerPhoto: anngo.src, // ảnh ca sĩ (placeholder, replace with actual src)
    composer: "Ân Ngờ",
    producer: "Ân Ngờ",
    otherSongs: ["Lạ Lùng", "Đông Kiếm Em", "Mùa Hè Của Em"], // các bài khác liên quan indie
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "Bài hát ‘Vườn Mây Vừa Hay’ của Ân Ngờ ft. MYLINA là một bản ballad indie đầy cảm xúc, kể về những khoảnh khắc ngọt ngào và bình yên giữa hai tâm hồn đồng điệu. Giai điệu nhẹ nhàng, hòa quyện cùng giọng hát trong trẻo tạo nên một không gian mơ màng — nơi người nghe có thể thả mình vào những cảm xúc trong trẻo nhất. Lời ca chân thật và sâu sắc, như một bức tranh vẽ nên câu chuyện tình yêu giản dị nhưng đầy ý nghĩa. Đây thực sự là một tác phẩm đáng nhớ trong sự nghiệp của Ân Ngờ và MYLINA, mang đến cho người nghe những trải nghiệm âm nhạc tinh tế và đầy cảm xúc.",
  },
  {
    id: 11,
    slug: "lyric-thang-dien-justatee-ft-phuong-ly",
    title: "Lyric Thằng Điên - JustaTee ft. Phương Ly",
    categories: [categoriesData[0], categoriesData[7], categoriesData[15]],

    image: thangdien.src, // ảnh đại diện bài hát (placeholder, replace with actual src)
    audio: "/audio/thangdien.MP3",
    date: "2018-10-19", // ngày phát hành chính thức
    views: 100000, // approximate views, adjust as needed
    type: "lyrics",
    artist: "JustaTee ft. Phương Ly",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Giờ tôi lại lang thang\nTình yêu thì miên man\nNgày xanh cùng mây tung tăng tựa mình bên phím đàn\nNhìn em mình ngơ ngác\nLòng anh chợt hơi khác\nTình yêu này đến đúng lúc thấy ánh sáng vụt qua",
      },
      {
        type: "Pre-Chorus",
        content:
          "Nụ cười tỏa hương nắng\nBình minh và mây trắng\nHình như anh đã yêu em từ những ngày đầu",
      },
      {
        type: "Chorus",
        content:
          "Chơi vơi nơi mà loài người nhìn anh phiêu (như thằng điên)\nUh thì đâu ai muốn là người bình thường khi yêu (yêu thằng điên)\nAnh đang mơ màng về bầu trời đầy trăng với sao\nEm như cô tiên mình ca múa như 2 con điên trên đồi thảo nguyên",
      },
      {
        type: "Verse 2",
        content:
          "Here we are... em như Beyoncé hát hát\nHere we are... anh như Jay-Z đang rap\nRap về từng ngày nắng về từng ngày gió\nVề từng ngày tháng có em\nBut I don't know who you are",
      },
      {
        type: "Bridge",
        content:
          "Wake up, I'm wake up\nThu sang rồi em thấy không\nEm đi rồi anh cứ mong chờ\nWake up and wake up\nTiếng vỡ tan cơn mê màng",
      },
      {
        type: "Outro",
        content:
          "Nơi thiên đàng anh mơ\nNơi có em là yên bình anh mãi như thằng si tình\nDù đôi chân anh đi mòn lối vẫn mãi không về nơi em",
      },
    ],
    year: "2018",
    duration: "03:45", // thời lượng bài hát
    singerPhoto: jte.src, // ảnh ca sĩ (placeholder, replace with actual src)
    composer: "ViruSs & JustaTee",
    producer: "ViruSs",
    otherSongs: ["Vì Yêu Cứ Đâm Đầu", "Gọi Tên Em", "Mơ"], // các bài khác liên quan
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "Bài hát 'Thằng Điên' của JustaTee ft. Phương Ly là một bản ballad đầy cảm xúc, kể về câu chuyện tình yêu ngọt ngào và đôi khi điên rồ. Giai điệu nhẹ nhàng kết hợp với lời ca chân thật đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe. Qua từng câu hát, người nghe có thể cảm nhận được sự mãnh liệt và chân thành trong tình yêu, dù có thể bị coi là 'thằng điên' trong mắt người khác. Đây thực sự là một bài hát đáng nhớ trong sự nghiệp của JustaTee và Phương Ly.",
  },
  {
    id: 12,
    slug: "lyric-mot-ai-ke-ben-mylina",
    title: "Lyric Một Ai Kề Bên - MYLINA",
    categories: [categoriesData[0], categoriesData[7], categoriesData[15]],

    image: aikeben.src, // ảnh đại diện bài hát (placeholder, replace with actual src)
    audio: "/audio/1aikeben.MP3",
    date: "2024-09-01", // ngày phát hành chính thức (ước lượng, do không có thông tin chính xác)
    views: 20000, // approximate views, adjust as needed
    type: "lyrics",
    artist: "MYLINA",
    lyrics: [
      {
        type: "Intro",
        content:
          "Em ơi\nVừa chia tay em thấy nhẹ lòng đi hơn rất nhiều\nChẳng hiểu vì sao\nVừa chia tay em thấy cuộc đời đẹp rất nhiều",
      },
      {
        type: "Verse 1",
        content:
          "Có lẽ em vẫn chưa biết cách hiểu\nBiết cách quan tâm anh và bao dung rất nhiều\nVẫn đa nghi tự làm tổn thương chính em\nTự bào mòn chính em\nKhiến em không hạnh phúc",
      },
      {
        type: "Pre-Chorus",
        content:
          "Nhưng em biết rằng là\nEm sẽ có một ai kế bên\nNắm chặt tay dìu bước chờ khi nắng lên\nHôn nhẹ tóc bên thềm cho ngày tháng êm đềm\nXóa nhẹ đi tổn thương chẳng hề ấm êm",
      },
      {
        type: "Chorus",
        content:
          "Em sẽ có một ai kế bên\nKhông là anh thì cũng là ai khác nên\nChẳng phải thấy u buồn\nHay tìm kiếm yêu thương để bớt cô đơn",
      },
      {
        type: "Verse 2",
        content:
          "Vậy là những bản tình ca đầu tiên được viết nên\nNgàn thanh âm sáng trong cứ vút bay lên\nXóa hết đi ưu phiền\nMà cứ ngỡ rằng em đã từ lâu biết cách yêu\nNgộ nhận cho rằng tình yêu vốn đau thương\nĐau đớn mới bình thường",
      },
      {
        type: "Bridge",
        content:
          "Và tại sao em vẫn nằm mơ như thế\nMơ một giấc mơ đẹp (giấc mơ đẹp)\nChia ly chẳng phải là chấm hết\nVà em vẫn sẽ có một ai đến bên đời\nTừ lâu em đã không còn mơ như thế\nNỗi buồn chẳng quay về (chẳng quay về)\nNiềm vui của em ở bên kia đồi\nChẳng xa vời lắm giờ ở đây rồi",
      },
      {
        type: "Refrain",
        content:
          "Là la la lá la là, lá la là lá la\nLá la là, lá la là lá la\nLá la là, lá la là lá la\nHa á ha\nHuh uh woo",
      },
      {
        type: "Chorus 2",
        content:
          "Em sẽ có một ai kế bên\nNắm chặt tay dìu bước chờ khi nắng lên\nHôn nhẹ tóc bên thềm cho ngày tháng êm đềm\nXóa nhẹ đi tổn thương chẳng hề ấm êm",
      },
      {
        type: "Outro",
        content:
          "Em sẽ có (một ai kế bên)\nEm sẽ có huh uh woo (nắm chặt tay dìu bước)\nChờ khi nắng lên\nHeh ih eh\nEm sẽ có một ai kế bên\nKhông là anh thì cũng là ai khác nên\nChẳng phải thấy u buồn\nHay tìm kiếm yêu thương để bớt cô đơn",
      },
    ],
    year: "2024",
    duration: "03:40", // thời lượng bài hát (ước lượng)
    singerPhoto: mylina.src, // ảnh ca sĩ (placeholder, replace with actual src)
    composer: "MYLINA",
    producer: "Unknown", // không có thông tin chính xác
    otherSongs: ["Vườn Mây Vừa Hay", "Tựa Đêm", "Mơ Một Giấc Mơ"], // các bài khác của MYLINA (giả định)
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "Bài hát 'Một Ai Kề Bên' của MYLINA là một bản ballad indie đầy cảm xúc, kể về hành trình tìm kiếm tình yêu và sự bình yên trong cuộc sống. Giai điệu nhẹ nhàng kết hợp với lời ca chân thật đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe. Qua từng câu hát, người nghe có thể cảm nhận được sự khao khát và hy vọng về một tương lai tươi sáng hơn bên người mình yêu thương. Đây thực sự là một bài hát đáng nhớ trong sự nghiệp của MYLINA.",
  },
  {
    id: 13,
    slug: "lyric-only-lee-hi",
    title: "Lyric ONLY - Lee Hi",
    categories: [categoriesData[1], categoriesData[7], categoriesData[16]],
    image: only.src, // ảnh đại diện bài hát (placeholder, replace with actual src)
    audio: "/audio/only.MP3",
    date: "2021-08-27", // ngày phát hành chính thức
    views: 50000000, // approximate views, adjust as needed
    type: "lyrics",
    artist: "Lee Hi",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Be my only one\nIreoke bureugo sipeun ireum nae gyeote\nSoneul japgoseo gachi georeoyo",
      },
      {
        type: "Pre-Chorus",
        content:
          "Biga oneun bamedo oerowotdeon najedo\nGeudae hwanhan bitkkareul naege gadeuk chilhaejwoyo\nNaega deo jalhalgeyo ireoke gachi isseojundamyeon",
      },
      {
        type: "Chorus",
        content:
          "Now I believe\nRarallarallara bureuneun norae\nChatgo chatgo chaja hemaeideon geudaewa\nMy, oh my, oh my, oh nae sarang\nBe my only love\nGeoreo georeoganeun balgeoreummada\nGibun joa kkok duriseo chuneun chum gata\nMy, oh my, oh my, oh nae sarang\nBe my only love",
      },
      {
        type: "Verse 2",
        content:
          "Be my only one\nIjeneun sumgiji ankodo malhal su isseo\nGeureokena malhago sipdeon\nI say 'I love you'",
      },
      {
        type: "Pre-Chorus",
        content:
          "Swigo sipeun bamedo bappeudeon achimedo\nGeudae naege swil goseul maeumsoge maryeonhaeyo\nNaega deo jalhalgeyo geu mameul naege nanwojundamyeon",
      },
      {
        type: "Chorus",
        content:
          "Now I believe\nRarallarallara bureuneun norae\nChatgo chatgo chaja hemaeideon geudaewa\nMy, oh my, oh my, oh nae sarang\nBe my only love\nGeoreo georeoganeun balgeoreummada\nGibun joa kkok duriseo chuneun chum gata\nMy, oh my, oh my, oh nae sarang\nBe my only love",
      },
      {
        type: "Bridge",
        content:
          "My only one, geudaereul bomyeon\nGidaego sipeo, gajigo sipeo\nI sarangiramyeon eoseolpeun kkumdo\nIrwojil geot gateunde",
      },
      {
        type: "Outro",
        content:
          "Now I believe\nLa-la-la-la-la, bureuneun norae\nChatgo, chatgo chaja hemaeideon geudaewa\nMy, oh my, oh my, oh nae sarang\nBe my only love",
      },
    ],
    year: "2021",
    duration: "03:56", // thời lượng bài hát
    singerPhoto: leehi.src, // ảnh ca sĩ (placeholder, replace with actual src)
    composer: "Ahn Shin Ae",
    producer: "philtre",
    otherSongs: ["Breathe", "No One (feat. B.I)", "Red Lipstick"], // các bài khác của Lee Hi
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "'ONLY' là một bản ballad nhẹ nhàng và sâu lắng của Lee Hi, thể hiện qua giọng hát đầy cảm xúc và kỹ thuật điêu luyện. Bài hát mang đến một không gian âm nhạc êm dịu, nơi người nghe có thể cảm nhận được sự chân thành và tình yêu sâu sắc. Lời ca ý nghĩa kết hợp với giai điệu tinh tế đã tạo nên một tác phẩm âm nhạc đáng nhớ, khiến người nghe dễ dàng bị cuốn hút và đắm chìm trong từng nốt nhạc.",
  },
  {
  id: 14,
  slug: "lyric-ke-tu-day-mylina",
  title: "Lyric Kể Từ Đây - Mylina",
  categories: [categoriesData[0], categoriesData[7], categoriesData[15]],
  image: mylina_ketuday.src, // ảnh bìa bài hát (thay bằng ảnh thực tế từ public/images/)
  audio: "/audio/ketuday-mylina.MP3", // Đặt file audio vào public/audio/ketuday.MP3
  date: "2025-07-17", // ngày phát hành chính thức
  views: 4032003, // ước tính views trending (cập nhật theo thực tế)
  type: "lyrics",
  artist: "Mylina'",
  lyrics: [
    {
      type: "Intro",
      content:
        "Một em bé ngu ngơ, tâm hồn em như trang giấy trắng\nBị vò nát trong một tích tắc\nNước mắt lưng tròng, thế giới xoay vòng\nMột em bé ngây thơ, tâm hồn em như trang giấy trắng\nChẳng biết mình làm gì sai, đã hủy hoại một ai\nCuộc đời em sẽ khó khăn nhiều thêm"
    },
    {
      type: "Chorus",
      content:
        "Kể từ đây, những lắng lo sẽ không ngừng lại\nKể từ đây, cảm giác kia sẽ không dừng lại\nKể từ đây, em sẽ phải học cách đương đầu\nThay vì mong nó qua đi, sẽ chẳng qua đi\nNó chỉ lớn dần mà thôi, mà thôi\nÚhh-uhh huu, nó chỉ lớn dần mà thôi\nNước mắt lưng tròng, thế giới xoay vòng"
    },
    {
      type: "Verse",
      content:
        "Nếu thế giới này không có em\nNhững nỗi buồn sẽ vơi đi nhiều\nNhưng nếu thế giới này không có em\nNhững hạnh phúc trọn vẹn sẽ thiếu\nMặc dù em đã biết, cho dù đi qua hết\nNỗi đau vẫn sẽ kéo dài đến đây\nVà cuộc đời em sẽ khó khăn nhiều thêm"
    },
    {
      type: "Chorus",
      content:
        "Kể từ đây, những lắng lo sẽ không ngừng lại\nKể từ đây, cảm giác kia sẽ không dừng lại\nKể từ đây, em sẽ phải học cách đương đầu\nThay vì mong nó qua đi, sẽ chẳng qua đi\nNó chỉ lớn dần mà thôi, mà thôi\nHumm-humm-humm huum, nó chỉ lớn dần mà thôi\nNó chỉ lớn dần mà thôi\nHàa haa-haa, háa hàa\nHàa haa, hàa-haa, hàa haa háa-haa hàa"
    },
    {
      type: "Bridge",
      content:
        "Dù có bao nhiêu nỗi đau đi qua\nChỉ là cảm giác cuốn trôi tất cả đi xa\nVề miền đất kỳ lạ, cay đắng ngập tràn\nCuộc đời em sẽ khó khăn nhiều thêm"
    },
    {
      type: "Chorus",
      content:
        "Kể từ đây, những lắng lo sẽ không ngừng lại\nKể từ đây, cảm giác kia sẽ không dừng lại\nKể từ đây, em sẽ phải học cách đương đầu\nThay vì mong nó qua đi, sẽ chẳng qua đi\nNó chỉ lớn dần mà thôi, mà thôi\nÚhh-uhh huu, nó chỉ lớn dần mà thôi\nNước mắt lưng tròng, em cũng xoay vòng"
    }
  ],
  year: "2025",
  duration: "03:18", // thời lượng bài hát thực tế
  singerPhoto: mylina.src, // ảnh ca sĩ (thay bằng ảnh thực tế từ public/images/)
  composer: "MYLINA", // tự sáng tác (dựa trên info)
  producer: "DAO MUSIC ENTERTAINMENT", // nhà sản xuất chính thức
  otherSongs: ["Giấc Mơ Của Em", "Ơ Anh Mắng Em À", "Tóc Em Ướt Rồi"], // các bài khác nổi bật của Mylina'
  userCommentAvatar: anonymous.src,
  userNameComment: "Anonymous",
  userRoleComment: "Admin",
  comment:
    "'Kể Từ Đây' là một bản ballad suy tư của Mylina, tái hiện hành trình trưởng thành với những nỗi đau và bài học chân thực. Giọng hát đầy cảm xúc của cô ấy kết hợp giai điệu nhẹ nhàng, khiến người nghe dễ dàng đồng cảm và suy ngẫm về cuộc đời mình. Một ca khúc Vpop đáng nhớ trong năm 2025!",
},
{
  id: 15,
  slug: "lyric-anh-la-ai-phuong-ly",
  title: "Lyric Anh Là Ai - Phương Ly",
  categories: [categoriesData[1], categoriesData[7], categoriesData[16]], // Ví dụ: Ballad, Vpop, R&B
  image: anhlaai.src, // ảnh bìa bài hát (thay bằng ảnh thực tế từ public/images/)
  audio: "/audio/anhlaai.mp3", // Đặt file audio vào public/audio/anhlaai.mp3
  date: "2019-01-09", // ngày phát hành chính thức
  views: 1523, // ước tính views trên YouTube và các nền tảng (cập nhật theo thực tế)
  type: "lyrics",
  artist: "Phương Ly",
  lyrics: [
    {
      type: "Verse 1",
      content:
        "Anh là ai nỗi nhớ khôn nguôi là anh\nMưa phùn rơi từ nơi quá khứ như đưa về đâu\nTôi đang ở đây cơn mưa làm rơi ướt vai vì ai.. vì sao?\nGiờ anh ở đâu?"
    },
    {
      type: "Chorus",
      content:
        "Anh là ai ngày mai nếu bước chân tôi cô đơn về\nAnh là ai mà tôi cứ luôn luôn đợi\nTừ khi nào biết yêu rồi\nTừ lâu tôi muốn nói về anh\nAnh là ai? Khiến nước mắt cứ rơi rơi nhẹ\nAnh là ai? Đã giết chết hết bao hy vọng\nAnh là ai?"
    },
    {
      type: "Verse 2",
      content:
        "Chắc có lẽ vẫn như xưa, chắc có lẽ mỗi tôi yêu anh\nAnh là ai? Khiến phút chốc trái tim rung động\nAnh là ai? Mang yêu thương theo sau dường như\nLang thang trôi đi đâu tìm kiếm"
    },
    {
      type: "Bridge",
      content:
        "Vì nhớ anh, thương anh, tìm anh nơi nỗi đau\nVì nhớ anh, thương anh, tìm anh trong giấc mơ"
    },
    {
      type: "Chorus",
      content:
        "Anh là ai ngày mai nếu bước chân tôi cô đơn về\nAnh là ai mà tôi cứ luôn luôn đợi\nTừ khi nào biết yêu rồi\nTừ lâu tôi muốn nói về anh\nAnh là ai? Khiến nước mắt cứ rơi rơi nhẹ\nAnh là ai? Đã giết chết hết bao hy vọng\nAnh là ai?"
    }
  ],
  year: "2019",
  duration: "04:05", // thời lượng bài hát thực tế
  singerPhoto: phuongly.src, // ảnh ca sĩ (thay bằng ảnh thực tế từ public/images/)
  composer: "Kiên Trần", // sáng tác chính thức
  producer: "JustaTee", // nhà sản xuất âm nhạc chính thức
  otherSongs: ["Mặt Trời Của Em", "Thằng Điên (ft. JustaTee)", "Missing You"], // các bài khác nổi bật của Phương Ly
  userCommentAvatar: anonymous.src,
  userNameComment: "Anonymous",
  userRoleComment: "Admin",
  comment:
    "'Anh Là Ai' là bản ballad R&B đầy hoài niệm của Phương Ly, khắc họa nỗi nhớ da diết về một tình yêu mơ hồ và những câu hỏi day dứt về bản thân người ấy. Với giọng hát mượt mà, giai điệu da diết kết hợp sản xuất tinh tế từ JustaTee, ca khúc nhanh chóng trở thành hit Vpop 2019, chạm đến trái tim những ai từng lạc lối trong ký ức tình yêu.",
},
];
