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
import anhlathangtoi from "../asset/lyric-img/anhlathangtoi.jpg";
import phungkhanhlinh from "../asset/lyric-img/phungkhanhlinh.jpg";
import vu from "../asset/lyric-img/vu.jpg";
import binhyen from "../asset/lyric-img/binhyen.jpg";
import chimsau from "../asset/lyric-img/chimsau.jpg";
import mck from "../asset/lyric-img/mck.jpg";
import sontung from "../asset/lyric-img/sontung.jpg";
import chungtacuahientai from "../asset/lyric-img/chungtacuahientai.jpg";
import stephanie from "../asset/lyric-img/stephanie.jpg";
import iloveyou3000 from "../asset/lyric-img/iloveyou3000.jpg";
import lena from "../asset/lyric-img/lena.jpg";
import lucemnhoanh from "../asset/lyric-img/lucemnhoanh.jpg";

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
    comment:
      "Một bản nhạc nhẹ nhàng, sâu lắng về tình yêu và sự an trú trong vòng tay người thương. Giai điệu êm dịu kết hợp với lời ca ý nghĩa tạo nên một trải nghiệm âm nhạc đầy cảm xúc. Bài hát như một lời nhắc nhở về việc tìm thấy sự bình yên và hạnh phúc trong những khoảnh khắc giản đơn bên người mình yêu. Một tác phẩm tuyệt vời từ Sweet Liquor.",
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
    comment:
      "Bài hát 'Vết mưa' của Vũ Cát Tường là một bản ballad đầy cảm xúc, kể về nỗi đau chia ly và những kỷ niệm ngọt ngào trong tình yêu. Giai điệu nhẹ nhàng, sâu lắng kết hợp với lời ca chân thật đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe. Qua từng câu hát, người nghe có thể cảm nhận được sự tiếc nuối và nỗi buồn khi phải rời xa người mình yêu thương. Đây thực sự là một bài hát đáng nhớ trong sự nghiệp của Vũ Cát Tường.",
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
    comment:
      "Bài hát 'Không Buông' của Hngle ft. Ari là một bản ballad đầy cảm xúc, kể về nỗi đau chia ly và những kỷ niệm ngọt ngào trong tình yêu. Giai điệu nhẹ nhàng, sâu lắng kết hợp với lời ca chân thật đã tạo nên một tác phẩm âm nhạc chạm đến trái tim người nghe. Qua từng câu hát, người nghe có thể cảm nhận được sự tiếc nuối và nỗi buồn khi phải rời xa người mình yêu thương. Đây thực sự là một bài hát đáng nhớ trong sự nghiệp của Hngle và Ari.",
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
      "Anh đã qua ba lần của mười năm\nAnh có một thời tuổi trẻ đẹp lắm\nCố gắng không để ngã gục\nĐổi lấy thứ anh cho là hạnh phúc...\nCảm ơn đời dạy anh một điều thôi\nBình yên đâu phải là nơi xa xôi\nNhững nghĩ suy những mong cầu\nĐã đổi thay trong anh từ bấy lâu..."
  },
  {
    type: "Pre-Chorus",
    content:
      "Trưởng thành cho anh khâu vết thương lành\nLại càng hiểu hơn người anh muốn trở thành..."
  },
  {
    type: "Chorus",
    content:
      "Người bình thường như anh\nChẳng vội đi nhanh ngày ba bữa cơm canh\nTập vui lúc khó, yêu từng bước nhỏ quen đối diện lắng lo\nNgười bình thường như anh\nĐã qua hư danh\nChọn học cách chân thành...\nĐi quãng đường thật xa\nKhiến mình nhận ra, điều giản đơn trong chúng ta\nCứ sống bình thường thôi, đi chầm chậm sẽ đến nơi..."
  },
  {
    type: "Verse 2",
    content:
      "Đã có lúc anh quên rằng chính mình là ai\nĐã có lúc anh quên học cách phải dừng lại\nTuổi trẻ của anh lao đi miệt mài\nNhiều khi chẳng quan tâm đó là đúng hay sai..."
  },
  {
    type: "Pre-Chorus",
    content:
      "Trưởng thành cho anh khâu vết thương lành\nLại càng hiểu hơn người anh muốn trở thành..."
  },
  {
    type: "Chorus",
    content:
      "Người bình thường như anh\nChẳng vội đi nhanh\nNgày ba bữa cơm canh\nTập vui lúc khó, yêu từng bước nhỏ quen đối diện lắng lo\nNgười bình thường như anh\nĐã qua hư danh\nChọn học cách chân thành...\nĐi quãng đường thật xa\nKhiến mình nhận ra, điều giản đơn trong chúng ta\nCứ sống bình thường thôi, bước chầm chậm sẽ đến nơi..."
  },
  {
    type: "Chorus (Repeat)",
    content:
      "Người bình thường như anh\nChẳng vội đi nhanh\nNgày ba bữa cơm canh\nTập vui lúc khó, yêu từng bước nhỏ quen đối diện lắng lo\nNgười bình thường như anh\nĐã qua hư danh\nChọn học cách chân thành...\nĐi quãng đường thật xa\nKhiến mình nhận ra, điều giản đơn trong chúng ta\nCứ sống bình thường thôi, bước chầm chậm sẽ đến nơi..."
  },
  {
    type: "Outro",
    content:
      "Đi quãng đường thật xa\nKhiến mình nhận ra, điều giản đơn trong chúng ta\nCứ sống bình thường thôi, bước chầm chậm sẽ đến nơi..."
  }
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
      "Ngồi bên nhau một hôm trời mưa\nTí tách rơi giọt đông giọt thưa\nLặng nghe nhịp tim chầm chậm\nTăng lên biết sao cho vừa\nTình yêu là khi một người\nMuốn chạm vào dịu dàng với em\nLời anh nói sao êm đềm\nNhẹ nhàng nụ hôn phớt lên môi mềm"
  },
  {
    type: "Chorus",
    content:
      "Khi anh gọi tên em bão tố cũng hóa dịu dàng\nNhững thanh âm vang lên dường như phát sáng\nKhi anh gọi tên em ngày mưa cũng hóa cầu vồng\nKhi anh gọi tên em bình yên xoay vòng"
  },
  {
    type: "Verse 2",
    content:
      "Cầm tay nhau một hôm trời mưa\nTrái tim anh rung động hay chưa\nNhẹ nhàng hôn mắt môi thơm nồng\nKhoảnh khắc ấy ngỡ trời đã sang đông"
  },
  {
    type: "Chorus",
    content:
      "Khi anh gọi tên em bão tố cũng hóa dịu dàng\nNhững thanh âm vang lên dường như phát sáng\nKhi anh gọi tên em ngày mưa cũng hóa cầu vồng\nKhi anh gọi tên em bình yên xoay vòng\nKhi anh gọi tên em thanh âm phát sáng\nKhi anh gọi tên em bình yên xoay vòng\nKhi anh gọi tên em thanh âm phát sáng\nKhi anh gọi tên em bình yên xoay vòng\nKhi anh gọi tên em bình yên xoay vòng"
  }
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
      "Qua nỗi sầu đêm nay\nTrăng gối đầu lên mây\nThêm chút rượu và men cuốn muộn phiền đi để tình thêm say\nĐôi mắt buồn sâu cay\nChan chứa tình lâu nay, oh boy\nKhông biết ở nơi đâu\nKhông biết được bao lâu\nChỉ muốn cùng anh đi đến tận cùng nơi đất trời thâm sâu\nHuhh-huh-huh-huh-huh\nVì yêu cứ đâm đầu (cứ đâm đầu)\nCứ đâm đầu (cứ đâm đầu)"
  },
  {
    type: "Verse 1",
    content:
      "Ngay lúc nhìn, ngay lúc nhìn, ngay lúc nhìn, ngay lúc nhìn anh đôi phút\nTim đã vội, tim đã vội, tim đã vội, tim đã vội hơn đôi chút\nSorry em chẳng biết làm sao\nĐể thì giờ trôi phí là bao (oh-uh-oh, oh-oh)\nEm muốn được trói chặt trong vòng tay của anh\nEm muốn được nghe từng hơi thở đang bủa quanh\nXin hãy đừng, hãy đừng, hãy đừng, hãy đừng\nĐể em đợi (yeah, yeah)\nAy\nChạm lên bờ môi của em đỏ au\nTrò chuyện thật nhiều để cho rõ nhau (yah)\nChúng ta hoang dại như là cỏ lau (ah-hah)\nBỏ tiền bỏ bạc chứ không bỏ nhau"
  },
  {
    type: "Verse 2",
    content:
      "Anh sẽ nói cho em nghe những điều mà anh ấp ủ\nAnh hy vọng lời ca này vỗ về em trong giấc ngủ (yeah)\nAnh cũng muốn em biết anh vốn không phải là thiếu gia (ha-ha)\nNhững ngày em về trong đời anh nhất định trải chiếu hoa, yah"
  },
  {
    type: "Chorus",
    content:
      "Qua nỗi sầu đêm nay\nTrăng gối đầu lên mây\nThêm chút rượu và men cuốn muộn phiền đi để tình thêm say\nĐôi mắt buồn sâu cay\nChan chứa tình lâu nay, oh boy\nKhông biết ở nơi đâu\nKhông biết được bao lâu\nChỉ muốn cùng anh đi đến tận cùng nơi đất trời thâm sâu\nHuhh-huh-huh-huh-huh\nVì yêu cứ đâm đầu (cứ đâm đầu)\nCứ đâm đầu (cứ đâm đầu) (just, just, just)\nOoh"
  },
  {
    type: "Verse 3",
    content:
      "Cứ lãng đãng trôi như làn mây trắng\nChẳng cần lo nghĩ nhiều\nChỉ cần em biết điều\nVà ooh, khi trăng lên cao em sẽ là ngọn gió cuốn anh feel\nCầm chặt tay và nâng ly cùng em nhé (eh)\nCho đêm này thêm hé (eh)\nChơi vơi trong vòng tay anh, hãy đặt tên em là em bé, oh (oh-uh-oh)\nVì đường về còn xa lắm em ơi thấy không mưa còn rơi (mưa còn rơi)\nQua đêm nay rồi anh sẽ đưa em về (yeah)"
  },
  {
    type: "Bridge",
    content:
      "Anh ơi, em hơi say, say\nAi sẽ đưa em về? (ối giời)\nEm ơi, không may, đêm nay\nChưa muốn đưa em về\nDon't be lonely tonight\nBaby, I'm so high on you (ya)"
  },
  {
    type: "Chorus",
    content:
      "Qua nỗi sầu đêm nay\nTrăng gối đầu lên mây\nThêm chút rượu và men cuốn muộn phiền đi để tình thêm say (Min)\nĐôi mắt buồn sâu cay (JustaTee)\nChan chứa tình lâu nay, oh boy (ya)\nKhông biết ở nơi đâu (ở nơi đâu)\nKhông biết được bao lâu (được bao lâu)\nChỉ muốn cùng anh đi đến tận cùng nơi đất trời thâm sâu\n(Nơi đất trời thâm sâu)\nHuhh-huh-huh-huh-huh (babe)\nVì yêu cứ đâm đầu (sao em cứ đâm đầu?)\nCứ đâm đầu (sao em cứ đâm đầu?) (ya)\nJust, just, just, just\nAy\nĐen Vâu"
  }
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
    type: "Intro",
    content:
      "Có cơn mưa nào đôi mình đi qua\nAnh đến bên em ngày đôi mình chia xa\nMỗi lá rơi bên hồ nỗi cô đơn lớn lên\nMùa thu ấy em không còn bên cạnh anh nữa\nAnh vẫn đứng nơi đây chờ em cùng cơn mưa\nChúng ta sau này chẳng có chúng ta bây giờ"
  },
  {
    type: "Chorus",
    content:
      "Một người âm thầm đứng dưới mưa nhìn em\nMột người giữa thành phố vẫn cứ chờ em\nVì sao cứ nơi đó mà anh dần xa nơi đâu\nGiờ này chỉ nỗi nhớ cứ vơi nhiều thêm\nGiờ này chỉ mình ta với những tháng năm dài\nCó khi em chẳng còn yêu anh như trái tim ta từng chung lối đi"
  },
  {
    type: "Verse",
    content:
      "Anh đi một vòng thị trấn trên con đường cũ ta đi\nVòng bánh xe như thế cứ chạy\nHai tuyến đường ngược chiều ta nghĩ\nChắc em cũng quên tên đường này rồi\nNhánh hoa sữa nhẹ bay đi khắp lối\nEm cũng giống như anh của ngày trước\nHai con đường về nhà khi sắp tối"
  },
  {
    type: "Verse 2",
    content:
      "Anh còn nhớ hồi đó ta đi học\nLúc tan trường thì em ngồi sau xe\nLúc em buồn thì anh hay trêu chọc\nBảo em cười kể chuyện cho nhau nghe\nRồi vào quán mua món mà em thích\nEm mỉm cười làm anh cũng vui lây\nNhưng hồi đó thì vẫn là hồi đó\nAnh cảm ơn em đã để lại chuỗi ngày"
  },
  {
    type: "Chorus",
    content:
      "Một người âm thầm đứng dưới mưa nhìn em\nMột người giữa thành phố vẫn cứ chờ em\nVì sao cứ nơi đó mà anh dần xa nơi đâu\nGiờ này chỉ nỗi nhớ cứ vơi nhiều thêm\nGiờ này chỉ mình ta với những tháng năm dài\nCó khi em chẳng còn yêu anh như trái tim ta từng chung lối đi"
  },
  {
    type: "Outro",
    content:
      "Có cơn mưa nào đôi mình đi qua\nAnh viết cho em bài ca mùa yêu xa\nMỗi lá rơi bên hồ nỗi cô đơn lớn lên\nMùa thu ấy anh không còn bên cạnh em nữa\nEm vẫn đứng nơi đây chờ anh cùng cơn mưa\nChúng ta sau này chẳng có chúng ta bây giờ"
  }
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
    type: "Verse",
    content:
      "Chúng ta đã kết thúc\nGiờ phải làm sao với con tim vỡ nát chết trong lòng?\nMưa rơi hay nước mắt làm nhoè mi em?\nChẳng thể yêu thêm một ai"
  },
  {
    type: "Pre-Chorus",
    content:
      "Anh liệu có còn xem dòng tin mà? Anh liệu đang còn xem hình hai ta?\nNgồi xem Instagram mà em vẫn cứ đau lòng lắm, anh à\nMai này ta còn có phải gia hạn Spotify mà ta thường hay nghe?\nBầu trời tối giữa đêm căn phòng"
  },
  {
    type: "Chorus",
    content:
      "Nhìn anh cùng người khác, bên nhau thật hạnh phúc\nChuyện tình ta như thước phim nhưng đã có hồi kết\nDạo này anh chẳng nhắc tên em ở trong story\nCần một chút âm thanh làm bài nhạc lo-fi\nLiệu anh, liệu anh, liệu anh\nLiệu anh vẫn sẽ cười khi mà ta lại vô tình qua nhau?\nLiệu chúng ta có còn ấm áp như ngày đầu?\nNhưng em sẽ chạy tới gặp anh và trao nụ hôn sâu\nRồi tỉnh giấc và căn phòng chẳng còn anh đâu\nUh, uh-uh, uh-uh-uh-uh"
  },
  {
    type: "Instrumental Break",
    content: ""
  },
  {
    type: "Pre-Chorus",
    content:
      "Anh liệu có còn xem dòng tin mà? Anh liệu đang còn xem hình hai ta?\nNgồi xem Instagram mà em vẫn cứ đau lòng lắm, anh à\nMai này ta còn có phải gia hạn Spotify mà ta thường hay nghe?\nBầu trời tối giữa đêm căn phòng"
  },
  {
    type: "Chorus",
    content:
      "Nhìn anh cùng người khác, bên nhau thật hạnh phúc\nChuyện tình ta như thước phim nhưng đã có hồi kết\nDạo này anh chẳng nhắc tên em ở trong story\nCần một chút âm thanh làm bài nhạc lo-fi\nLiệu anh, liệu anh, liệu anh\nLiệu anh vẫn sẽ cười khi mà ta lại vô tình qua nhau?\nLiệu chúng ta có còn ấm áp như ngày đầu?\nNhưng em sẽ chạy tới gặp anh và trao nụ hôn sâu\nRồi tỉnh giấc và căn phòng chẳng còn anh đâu\nUh, uh-uh, uh-uh-uh-uh"
  }
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
        type: "Intro",
        content:
          "Năm nay ta chưa thành những điều mà ta ước vọng\nÍt phút nữa lại là một năm mới sang\nNhắm mắt để cảm nhận trái tim này cũng ngóng chờ\nĐiều gì mà lòng cứ lo hoài không yên",
      },
      {
        type: "Verse 1",
        content:
          "Bước xuống phố một mình chốn đông người nên ngắm nhìn\nCó chút vấn vương về những chuyện đã qua\nNhớ những lúc ta còn trẻ thơ chẳng phải nghĩ ngợi\nLại về nhà với những tâm sự còn chưa nguôi",
      },
      {
        type: "Chorus",
        content:
          "Chỉ còn một vài giây nữa thôi pháo giao thừa rộn vang khắp nơi\nMọi điều rồi cũng sẽ tốt thôi những nỗi buồn sẽ vơi\nRộn ràng đào mai nở khắp nơi tấm thân này cũng muốn nghỉ ngơi\nChỉ muốn đi nơi nào mà lòng ta thấy an yên",
      },
      {
        type: "Verse 2",
        content:
          "Con vẫn lo công danh sự nghiệp tiền tài vật chất làm thêm thứ chiếc áo mong manh tội nghiệp\nBởi vậy con đâu dám nằm đêm có khi bầu trời là tấm chăn ấm\nÁnh đèn đường lấm thấm mồ hôi bước chân con tìm mà đường đời trăm lối hoá ra bình phàm là được ở nhà thôi\nCon chỉ ước vậy thôi trời ơi mưa rơi với cái rét vào lòng\nSao không cho con sống với ước muốn riêng con bất chấp tương lai ném hết vào tròng\nMột lần ước gì mình đừng lớn tay bế tay bồng có bóng dáng người đưa\nMẹ ơi con mệt rồi mình nghỉ ngơi được chưa",
      },
      {
        type: "Chorus",
        content:
          "Chỉ còn một vài giây nữa thôi pháo giao thừa rộn vang khắp nơi\nMọi điều rồi cũng sẽ tốt thôi những nỗi buồn sẽ vơi\nRộn ràng đào mai nở khắp nơi tấm thân này cũng muốn nghỉ ngơi\nChỉ muốn đi nơi nào mà lòng ta thấy an yên",
      },
      {
        type: "Outro",
        content:
          "Chỉ cần ở lại đây với tôi những giai điệu còn trên khoé môi\nNhạc chưa say thì ta nhấp môi cớ sao còn nhớ thương\nTình yêu chỉ là cơn gió thôi cứ vô tình bay giữa cuộc đời\nGiờ phải đi thật rồi chẳng còn lưu luyến chi đâu",
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
        type: "Intro",
        content:
          "Không phải anh đừng ai khác\nKhông phải mơ đừng tan nát\nChẳng phải anh đừng ai khác\nThêm một giây chờ chốc lát\nAnh lạc vào trong nơi ánh dương tuyệt vời\nSâu đôi mắt anh cứ ngỡ mặt trời\nTừng khoảnh khắc cứ rạng ngời đi qua\nVà em trao cho anh bao ngất ngây nụ cười\nKhông gian anh như chỉ có một người nhẹ mang bao muộn phiền đi xa",
      },
      {
        type: "Verse 1",
        content:
          "Thổn thức em đã bao đêm ngày\nNgười đến bên có trong đời này\nTừng thước phim cứ như sum vầy\nCâu chuyện ta vẫn đang trong đấy\nNàng lấy đi trái tim tôi rồi dạo bước quanh cớ sao bồi hồi\nCảm giác như đã có cơ hội\nĐôi lời yêu anh còn chưa nói",
      },
      {
        type: "Chorus",
        content:
          "Nếu không phải anh thì em ơi đừng cho ai khác đến đây\nMột khu vườn hoa riêng chúng ta sẽ không có người lạ\nNếu không phải anh thì em ơi đừng cho ai khác bước qua\nMột rừng yêu thương ta đã gieo trong những xanh tươi ngày hạ trong vắt\nCó những ngày xanh và anh biết có những ngày sau anh kế bên hay bên cạnh\nĐến đây yêu thương mỏng manh\nEm khẽ đến khẽ đến thật mau liệu rằng mai đây sẽ có nhau\nTrọn vẹn hay không để tính sau hãy cứ xem đây như lần đầu",
      },
      {
        type: "Verse 2",
        content:
          "Anh này sao mây đen cứ thế bao vây\nTa va nhau trong lúc không may\nEm ngỡ đâu đây là bình yên nơi ánh mắt người\nKhông hay ta như đã yêu nhau trước đây\nVườn mây vừa hay những ngất ngây em trao đến ai\nTừng câu lắng lo ngày dài",
      },
      {
        type: "Pre-Chorus",
        content:
          "Thổn thức anh đã bao đêm ngày\nMột giấc mơ em ngỡ đâu đây\nCảm giác như\nThật giống như em lẽ ra thuộc về ai\nChàng lấy đi trái tim tôi rồi dạo bước quanh qua những xa xôi\nTìm thấy nhau\nDù chẳng mau\nXem đây như như lần đầu",
      },
      {
        type: "Chorus",
        content:
          "Nếu không phải anh thì em ơi đừng cho ai khác đến đây\nMột khu vườn hoa riêng chúng ta sẽ không có người lạ\nNếu không phải anh thì em ơi đừng cho ai khác bước qua\nMột rừng yêu thương ta đã gieo trong những xanh tươi ngày hạ trong vắt\nCó những ngày xanh và anh biết có những ngày sau anh\nKế bên hay bên cạnh đến đây yêu thương mỏng manh\nAnh khẽ đến khẽ đến thật mau liệu rằng mai đây sẽ có nhau\nTrọn vẹn hay không để tính sau hãy cứ xem đây như lần đầu",
      },
      {
        type: "Outro",
        content:
          "Anh sẽ tiếc hết những ngày xanh nếu là mơ xin đừng nhắc anh\nBao yêu thương giờ đây mới toanh những vết thương sớm thôi sẽ lành\nDòng đời khác chẳng có được em nhưng thời không đâu ai đoán xem\nCó thì vui hay không nhá nhem giọt nước mắt cứ thế êm đềm trôi qua thật mau\nCuộc đời khác rồi sẽ đến sau\nVà nơi ấy ta vẫn có nhau hãy cứ xem đây như lần đầu",
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
      "Giờ tôi lại lang thang\nTình yêu thì miên man\nNgày xanh cùng mây tung tăng tựa mình bên phím đàn\nNhìn em mình ngơ ngác\nLòng anh chợt hơi khác\nTình yêu này đến đúng lúc thấy ánh sáng vụt qua\nNụ cười tỏa hương nắng\nBình minh và mây trắng\nHình như đều kêu tôi, \"Ôi thôi tình yêu đến rồi\"\nChẳng ai phải thắc mắc\nCòn tôi thì đã chắc\nNàng ơi nàng hãy đến chiếm lấy tâm hồn tôi"
  },
  {
    type: "Pre-Chorus",
    content:
      "Mỉm cười lòng chợt bâng khuâng tôi chẳng biết mơ hay thật\nĐợi chờ dù ngày hay đêm anh chỉ cần nghĩ cũng thấy vui"
  },
  {
    type: "Chorus",
    content:
      "I'm in love\nMàu nắng cuốn lấp chân mây mờ xa\nI'm in love\nThành phố chỉ thấy mỗi riêng mình ta\nI'm in love\nTựa đầu bên tình yêu mới thiết tha\nChỉ crazy man fall in love\nI'm in love\nHạnh phúc chỉ hết khi anh ngừng mơ\nI'm in love\nCuộc sống vốn dĩ trôi như vần thơ\nI'm in love\nNgả lưng bên cành cây lá xác xơ\nMờ sương đưa tay anh ôm lấy em\nDẫu biết chỉ là mơ\nDẫu biết chỉ là mơ\nDẫu biết chỉ là mơ\nCrazy man fall in love"
  },
  {
    type: "Verse 2",
    content:
      "Chơi vơi nơi mà loài người nhìn anh phiêu (như thằng điên)\nỪ thì đâu ai muốn là người bình thường khi yêu (yêu thằng điên)\nAnh đang mơ màng về bầu trời đầy trăng với sao, em như cô tiên\nMình ca múa như hai con điên trên đồi thảo nguyên (là la lá)\nHere we are, em như Beyoncé hát, hát\nHere we are, anh như Jay-Z đang rap\nRap về từng ngày nắng, về từng ngày gió, về từng ngày tháng có em\nBut I don't know who you are"
  },
  {
    type: "Pre-Chorus",
    content:
      "Mỉm cười lòng chợt bâng khuâng tôi chẳng biết mơ hay thật\nĐợi chờ dù ngày hay đêm anh chỉ cần nghĩ cũng thấy vui"
  },
  {
    type: "Chorus",
    content:
      "I'm in love\nMàu nắng cuốn lấp chân mây mờ xa\nI'm in love\nThành phố chỉ thấy mỗi riêng mình ta\nI'm in love\nTựa đầu bên tình yêu mới thiết tha\nChỉ crazy man fall in love\nI'm in love\nHạnh phúc chỉ hết khi anh ngừng mơ\nI'm in love\nCuộc sống vốn dĩ trôi như vần thơ\nI'm in love\nNgả lưng bên cành cây lá xác xơ\nMờ sương đưa tay anh ôm lấy em\nDẫu biết chỉ là mơ"
  },
  {
    type: "Bridge",
    content:
      "Wake up, I'm wake up\nThu sang rồi, em thấy không\nEm đi rồi, anh cứ mong chờ\nWake up, and wake up\nTiếng vỡ tan cơn mê màng\nĐánh thức nơi thiên đàng anh mơ\nNơi thiên đàng anh mơ\nNơi có em là yên bình, anh mãi như thằng si tình\nDù đôi chân anh đi mòn lối vẫn mãi không về nơi em"
  },
  {
    type: "Chorus",
    content:
      "I'm in love\nMàu nắng cuốn lấp chân mây mờ xa\nI'm in love\nThành phố chỉ thấy mỗi riêng mình ta\nI'm in love\nTựa đầu bên tình yêu mới thiết tha\nChỉ crazy man fall in love (chỉ crazy man fall in love)\nI'm in love\nHạnh phúc chỉ hết khi anh ngừng mơ\nI'm in love\nCuộc sống vốn dĩ trôi như vần thơ\nI'm in love\nNgả lưng bên cành cây lá xác xơ\nMờ sương đưa tay anh ôm lấy em\nDẫu biết chỉ là mơ"
  }
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
          "Một em bé ngu ngơ, tâm hồn em như trang giấy trắng\nBị vò nát trong một tích tắc\nNước mắt lưng tròng, thế giới xoay vòng\nMột em bé ngây thơ, tâm hồn em như trang giấy trắng\nChẳng biết mình làm gì sai, đã hủy hoại một ai\nCuộc đời em sẽ khó khăn nhiều thêm",
      },
      {
        type: "Chorus",
        content:
          "Kể từ đây, những lắng lo sẽ không ngừng lại\nKể từ đây, cảm giác kia sẽ không dừng lại\nKể từ đây, em sẽ phải học cách đương đầu\nThay vì mong nó qua đi, sẽ chẳng qua đi\nNó chỉ lớn dần mà thôi, mà thôi\nÚhh-uhh huu, nó chỉ lớn dần mà thôi\nNước mắt lưng tròng, thế giới xoay vòng",
      },
      {
        type: "Verse",
        content:
          "Nếu thế giới này không có em\nNhững nỗi buồn sẽ vơi đi nhiều\nNhưng nếu thế giới này không có em\nNhững hạnh phúc trọn vẹn sẽ thiếu\nMặc dù em đã biết, cho dù đi qua hết\nNỗi đau vẫn sẽ kéo dài đến đây\nVà cuộc đời em sẽ khó khăn nhiều thêm",
      },
      {
        type: "Chorus",
        content:
          "Kể từ đây, những lắng lo sẽ không ngừng lại\nKể từ đây, cảm giác kia sẽ không dừng lại\nKể từ đây, em sẽ phải học cách đương đầu\nThay vì mong nó qua đi, sẽ chẳng qua đi\nNó chỉ lớn dần mà thôi, mà thôi\nHumm-humm-humm huum, nó chỉ lớn dần mà thôi\nNó chỉ lớn dần mà thôi\nHàa haa-haa, háa hàa\nHàa haa, hàa-haa, hàa haa háa-haa hàa",
      },
      {
        type: "Bridge",
        content:
          "Dù có bao nhiêu nỗi đau đi qua\nChỉ là cảm giác cuốn trôi tất cả đi xa\nVề miền đất kỳ lạ, cay đắng ngập tràn\nCuộc đời em sẽ khó khăn nhiều thêm",
      },
      {
        type: "Chorus",
        content:
          "Kể từ đây, những lắng lo sẽ không ngừng lại\nKể từ đây, cảm giác kia sẽ không dừng lại\nKể từ đây, em sẽ phải học cách đương đầu\nThay vì mong nó qua đi, sẽ chẳng qua đi\nNó chỉ lớn dần mà thôi, mà thôi\nÚhh-uhh huu, nó chỉ lớn dần mà thôi\nNước mắt lưng tròng, em cũng xoay vòng",
      },
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
    audio: "/audio/anhlaai.MP3", // Đặt file audio vào public/audio/anhlaai.mp3
    date: "2019-01-09", // ngày phát hành chính thức
    views: 1523, // ước tính views trên YouTube và các nền tảng (cập nhật theo thực tế)
    type: "lyrics",
    artist: "Phương Ly",
   lyrics: [
  {
    type: "Intro",
    content:
      "Anh là ai nỗi nhớ khôn nguôi là anh\nMưa phùn rơi từ nơi quá khứ như đưa về đâu\nTôi đang ở đây cơn mưa làm rơi ướt vai vì ai, vì sao?\nGiờ anh ở đâu?"
  },
  {
    type: "Chorus",
    content:
      "Anh là ai ngày mai nếu bước chân tôi cô đơn về\nAnh là ai mà tôi cứ luôn luôn đợi\nTừ khi nào biết yêu rồi\nTừ lâu tôi muốn nói về anh\nAnh là ai?\n\nKhiến nước mắt cứ rơi rơi nhẹ\nAnh là ai?\nĐã giết chết hết bao hy vọng\nAnh là ai?\nChắc có lẽ vẫn như xưa, chắc có lẽ mỗi tôi yêu anh\nAnh là ai?\n\nKhiến phút chốc trái tim rung động\nAnh là ai?\nMang yêu thương theo sau dường như\nLang thang trôi đi đâu tìm kiếm\nVì nhớ anh, thương anh, tìm anh nơi nỗi đau\nVì nhớ anh, thương anh, tìm anh trong giấc mơ"
  },
  {
    type: "Chorus",
    content:
      "Anh là ai ngày mai nếu bước chân tôi cô đơn về\nAnh là ai mà tôi cứ luôn luôn đợi\nTừ khi nào biết yêu rồi\nTừ lâu tôi muốn nói về anh\nAnh là ai?\n\nKhiến nước mắt cứ rơi rơi nhẹ\nAnh là ai?\nĐã giết chết hết bao hy vọng\nAnh là ai?\nChắc có lẽ vẫn như xưa, chắc có lẽ mỗi tôi yêu anh\nAnh là ai?\n\nKhiến phút chốc trái tim rung động\nAnh là ai?\nMang yêu thương theo sau dường như\nLang thang trôi đi đâu tìm kiếm\nVì nhớ anh, thương anh, tìm anh nơi nỗi đau\nVì nhớ anh, thương anh, tìm anh trong giấc mơ"
  },
  {
    type: "Bridge",
    content:
      "Khiến nước mắt khẽ rơi rơi nhẹ (là ai khiến nước mắt em phải rơi)\nĐã giết chết hết bao hy vọng (anh là ai)\nChắc có lẽ vẫn như xưa chắc có lẽ mỗi tôi yêu anh (mỗi tôi vẫn yêu)\n\nKhiến phút chốc trái tim rung động (con tim em yêu anh mất rồi)\nMang yêu thương theo sau dường như\nLang thang trôi đi đâu tìm kiếm\nVì nhớ anh, thương anh, tìm anh nơi nỗi đau\nVì nhớ anh, thương anh, tìm anh trong giấc mơ"
  },
  {
    type: "Outro",
    content:
      "Khiến nước mắt cứ rơi rơi nhẹ\nAnh là ai?\nĐã giết chết hết bao hy vọng\nAnh là ai?\nChắc có lẽ vẫn như xưa, chắc có lẽ mỗi tôi yêu anh\nAnh là ai?"
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
  {
    id: 16,
    slug: "lyric-anh-la-thang-toi-phung-khanh-linh",
    title: "Lyric Anh Là Thằng Tồi - Phùng Khánh Linh",
    categories: [categoriesData[1], categoriesData[7], categoriesData[16]], // Ví dụ: Ballad, Vpop, Pop
    image: anhlathangtoi.src, // ảnh bìa bài hát (thay bằng ảnh thực tế từ public/images/)
    audio: "/audio/anhlathangtoi.MP3", // Đặt file audio vào public/audio/anhlathangtoi.mp3
    date: "2025-10-18", // ngày phát hành chính thức
    views: 1200000, // ước tính views trending mới ra (cập nhật theo thực tế)
    type: "lyrics",
    artist: "Phùng Khánh Linh",
    lyrics: [
      {
        type: "Intro",
        content:
          "Chỉ một đêm nữa thôi\nMình bên nhau anh nhé\nĐừng cứ thế biến mất với trái tim tội lỗi\nVà ngày trôi cứ trôi\nĐợi một câu xin lỗi\nCơn mưa ngang qua cứu lấy trái tim lạc lối",
      },
      {
        type: "Pre-Chorus",
        content:
          "Dịu dàng yêu em nhẹ nhàng thương em\nChỉ là khi anh ở cạnh em thôi\nTrăng tàn anh lại quay bước rời đi vội\nBỏ mặc em khi mặt trời lên cao\nLạnh lùng vô tâm như chẳng hề quen em\nAnh là bóng ma trong đêm tối\nMột linh hồn tội lỗi",
      },
      {
        type: "Chorus",
        content:
          "Anh là thằng tồi\nAnh là thằng tồi\nGục ngã vì thằng tồi\nLỡ yêu phải thằng tồi\nAnh là thằng tồi\nAnh là thằng tồi\nEm khóc vì thằng tồi\nĐau đớn vì thằng tồi",
      },
      {
        type: "Verse",
        content:
          "Ngây khờ trao tình yêu thật dễ dàng\nEm tự tin mình đã có anh\nĐâu ngờ anh lại quay bước vội kề bên một ai khác\nMặt trăng buông xuống em gào thét trong hoang mang\nVì sao em đau lòng như thế",
      },
      {
        type: "Pre-Chorus",
        content:
          "Dịu dàng yêu em nhẹ nhàng thương em\nChỉ là khi anh ở cạnh em thôi\nTrăng tàn anh lại quay bước rời đi vội\nBỏ mặc em khi mặt trời lên cao\nLạnh lùng vô tâm như chẳng hề quen em\nAnh là bóng ma trong đêm tối\nMột linh hồn tội lỗi",
      },
      {
        type: "Bridge",
        content:
          "Là do em vì tin anh chẳng tin ai ngoài anh thôi\nLà do em ngu ngốc\nAh-ah-ah-ah ah ah ah\nAh-ah-ah-ah ah ah ah\nAh-ah-ah-ah ah ah ah\nHah hah hah",
      },
      {
        type: "Outro",
        content:
          "Chỉ một đêm nữa thôi\nLà tình nhân của nhau nhé\nĐừng trốn tránh những thứ đã khiến chúng ta thèm khát\nThừa nhận trong bóng đêm\nNgười yêu em tha thiết\nĐừng trốn tránh những thứ đã khiến chúng ta thèm khát",
      },
    ],
    year: "2025",
    duration: "03:45", // thời lượng bài hát ước tính dựa trên lyric video
    singerPhoto: phungkhanhlinh.src, // ảnh ca sĩ (thay bằng ảnh thực tế từ public/images/)
    composer: "Phùng Khánh Linh", // tự sáng tác (dựa trên info album)
    producer: "Phùng Khánh Linh & team", // nhà sản xuất album chính thức
    otherSongs: ["Hôm Nay Tôi Buồn", "Cờ Người", "Hãy Nói Anh Sai Rồi"], // các bài khác nổi bật từ album hoặc hit cũ
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "'Anh Là Thằng Tồi' là track nổi bật trong album thứ 3 'Giữa Một Vạn Người' của Phùng Khánh Linh, khắc họa nỗi đau betrayal và ghosting với chorus dễ nhớ, dễ viral. Giọng hát đầy cảm xúc kết hợp giai điệu pop ballad tăm tối đã giúp ca khúc nhanh chóng trending Vpop 2025, chạm đến trái tim những ai từng bị tổn thương trong tình yêu.",
  },
  {
    id: 17,
    slug: "lyric-binh-yen-vu-ft-binz",
    title: "Lyric Bình Yên - Vũ. (ft. Binz)",
    categories: [categoriesData[1], categoriesData[7], categoriesData[16]], // Ví dụ: Ballad, Vpop, R&B
    image: binhyen.src, // ảnh bìa bài hát (thay bằng ảnh thực tế từ public/images/)
    audio: "/audio/binhyen.MP3", // Đặt file audio vào public/audio/binhyen.mp3
    date: "2024-08-29", // ngày phát hành chính thức
    views: 3500000, // ước tính views trên YouTube và các nền tảng (cập nhật theo thực tế)
    type: "lyrics",
    artist: "Vũ. (ft. Binz)",
    lyrics: [
      {
        type: "Intro",
        content:
          "(Em như dòng nước trong veo, trong veo, trong veo)\n(Băng qua ngọn núi vòng vèo, vòng vèo)\n(Chỉ cần có em hàn huyên)\n(Cùng anh kể chuyện)",
      },
      {
        type: "Verse 1",
        content:
          "Cơn mưa rơi bất chợt dần tan\nĐể nhường cho ánh nắng nghiêng\nĐoạn đường em bước đi ngang qua đây\nHửng nắng\nKhi hai ta gần lại một chút\nHai dòng sông chiếu sáng ánh trăng vàng\nÁnh mắt thướt tha như có đôi lời\nVới anh",
      },
      {
        type: "Pre-Chorus",
        content:
          "(Khi hai ta gần lại một chút)\n(Hai dòng sông chiếu sáng ánh trăng vàng)\n(Ánh mắt thướt tha như có đôi lời)\n(Với anh!)",
      },
      {
        type: "Chorus",
        content:
          "Em như dòng nước trong veo\nXóa hết ưu phiền\nBăng qua ngọn núi vòng vèo\nBạn đồng hành chỉ cần có em hàn huyên\nCùng anh kể chuyện (chỉ cần có em hàn thuyên)\nAnh tìm một thoáng bình yên\nVang lên trong đầu\nGiờ đang ở đâu tìm ở đâu\nGiữa thế giới bao la\nGiữ lấy trong tầm tay\nĐể gió cuốn không thổi bay\nVì anh đã tìm thấy bình yên",
      },
      {
        type: "Verse 2",
        content:
          "Đạp xe bên hoàng hôn\nVà em luôn ngồi sau\nTay ôm bụng anh\nVu vơ bài ca em hay quên lời\nVà đôi khi là những câu hỏi trên\nCho đến khi anh thấy đôi mắt đen lay láy\nAnh cứ ngỡ như những cơn sóng ầm ĩ\nNhưng thật ra em dịu êm như mặt hồ\nVà tĩnh như màn đêm\nĐôi lúc khiến anh thầm nghĩ",
      },
      {
        type: "Bridge",
        content:
          "Liệu không phải em (em, em, em)\nLòng tin là thứ anh không đặt cược\nNếu không phải em (không phải em, em, em)\nBình yên là thứ anh không chạm được\nBởi vì cách em nhìn\nVà cảm giác em hôn\nHơn tất cả những gì\nAnh có thể định nghĩa\nAnh cảm ơn nỗi đau\nĐã cho em đến sau\nVì mọi điều anh tìm kiếm là đây",
      },
      {
        type: "Chorus",
        content:
          "Em như dòng nước trong veo\nXóa hết ưu phiền\nBăng qua ngọn núi vòng vèo\nBạn đồng hành chỉ cần có em hàn huyên\nCùng anh kể chuyện (chỉ cần có em hàn thuyên)\nAnh tìm một thoáng bình yên\nVang lên trong đầu\nGiờ đang ở đâu tìm ở đâu\nGiữa thế giới bao la\nGiữ lấy trong tầm tay\nĐể gió cuốn không thổi bay\nVì anh đã tìm thấy bình yên",
      },
    ],
    year: "2024",
    duration: "03:21", // thời lượng bài hát thực tế
    singerPhoto: vu.src, // ảnh ca sĩ (thay bằng ảnh thực tế từ public/images/)
    composer: "Hoàng Thái Vũ, Đỗ Văn Đại", // sáng tác chính thức
    producer: "Warner Music", // nhà sản xuất/label chính thức
    otherSongs: [
      "Những Lời Hứa Bỏ Quên",
      "Dành Hết Xuân Thì Để Chờ Nhau",
      "Lạ Lùng",
    ], // các bài khác nổi bật của Vũ.
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "'Bình Yên' là ca khúc Pop/R&B dịu dàng từ album thứ 3 'Bảo Tàng Của Nuối Tiếc' của Vũ., kết hợp feat. Binz với verse rap trữ tình. Bài hát khắc họa hành trình tìm kiếm bình yên qua tình yêu đồng hành, với giai điệu bồng bềnh và lời ca thơ mộng đã nhanh chóng viral Vpop 2024, chạm đến hàng triệu khán giả yêu thích sự nhẹ nhàng, sâu lắng.",
  },
  {
    id: 18,
    slug: "lyric-chim-sau-rpt-mck-ft-trung-tran",
    title: "Lyric Chìm Sâu - RPT MCK (ft. Trung Trần)",
    categories: [categoriesData[1], categoriesData[7], categoriesData[16]], // Ví dụ: Rap, Vpop, R&B
    image: chimsau.src, // ảnh bìa bài hát (thay bằng ảnh thực tế từ public/images/)
    audio: "/audio/chimsau.MP3", // Đặt file audio vào public/audio/chimsau.mp3
    date: "2022-02-24", // ngày phát hành chính thức
    views: 50000000, // views thực tế trên YouTube và các nền tảng (cập nhật theo thực tế)
    type: "lyrics",
    artist: "RPT MCK (ft. Trung Trần)",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Tại vì sao bao lâu nay anh thì thầm thả gió cuốn bay đi\nChạm vào môi đan vào tay của em\nTa đi chung bước với thời gian\nMột nụ hôn thay cho bao nụ hồng em\nCó muốn ngay khi ta vừa gặp nhau?",
      },
      {
        type: "Chorus",
        content:
          "You got me, got me chìm sâu But I'm all go\nBaby, anh không muốn em phải buông lệ sầu hoen đôi chân mi\nYou got me, got me chìm sâu But I'm all go\nAnh chỉ mong em hạnh phúc trên cuộc đời này kể cả khi ta phân li",
      },
      {
        type: "Verse 2",
        content:
          "My mind is a mess Em đẹp từng cm\nBabe don't foolin' me Em chỉ cần sayin’ yes\nBởi vì anh sẽ cố dẫn em vào tròng\nNói hết những câu thật lòng\nSmoke weed get high Mặc kệ bad vibe của last night\nVì cho dù là còn thương Hay cho dù là đã quên\nChỉ cần còn tình yêu là ta sẽ đến được thiên đường\nMình quấn quýt vào nhau thật lâu\nRồi sẽ phải đến lúc em gật đầu",
      },
      {
        type: "Chorus",
        content:
          "You got me, got me chìm sâu But I'm all go\nBaby, anh không muốn em phải buông lệ sầu hoen đôi chân mi\nYou got me, got me chìm sâu But I'm all go\nAnh chỉ mong em hạnh phúc trên cuộc đời này kể cả khi ta phân li",
      },
      {
        type: "Verse 3",
        content:
          "Là bởi vì em quá xinh đẹp, quá đỗi yêu kiều\nXung quanh bao nhiêu cậu trai muốn chiếm tim em\nNhưng chỉ có anh ở đây si mê em nhường này\nVậy đừng phí thêm thời gian, hãy hôn anh đúng khi màn đêm\nBuông trên phím đàn, ta như mơ màng\nĐôi chân miên man, đam mê tiếng nhạc\nUh.. uh uh uh\nVà để rồi khi bình minh vương trên môi em\nAnh nâng đôi tay để nói với em",
      },
      {
        type: "Chorus",
        content:
          "You got me, got me chìm sâu But I'm all go\nBaby, anh không muốn em phải buông lệ sầu hoen đôi chân mi\nYou got me, got me chìm sâu But I'm all go\nAnh chỉ mong em hạnh phúc trên cuộc đời này kể cả khi ta phân li",
      },
    ],
    year: "2022",
    duration: "02:36", // thời lượng bài hát thực tế
    singerPhoto: mck.src, // ảnh ca sĩ (thay bằng ảnh thực tế từ public/images/)
    composer: "RPT MCK", // sáng tác chính thức
    producer: "THAIBEATS", // nhà sản xuất chính thức
    otherSongs: ["Tại Vì Sao", "Đầu Độc", "Che Cả Thế Giới"], // các bài khác nổi bật của RPT MCK
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "'Chìm Sâu' là bản hit Rap/R&B lãng mạn của RPT MCK feat. Trung Trần, với giai điệu uyển chuyển và lời rap chân thành về sự si mê tình yêu xen lẫn mong muốn người ấy hạnh phúc dù có chia ly. Ca khúc nhanh chóng quán quân Billboard Vietnam Hot 100 trong 2 tuần, đạt hơn 50 triệu views trên YouTube, khẳng định vị thế của MCK trong Vpop/Rap Việt 2022.",
  },
  {
    id: 19,
    slug: "lyric-chung-ta-cua-hien-tai-son-tung-m-tp",
    title: "Lyric Chúng Ta Của Hiện Tại - Sơn Tùng M-TP",
    categories: [categoriesData[1], categoriesData[7], categoriesData[16]], // Ví dụ: Ballad, Vpop, Pop
    image: chungtacuahientai.src, // ảnh bìa bài hát (thay bằng ảnh thực tế từ public/images/)
    audio: "/audio/chungtacuahientai.MP3", // Đặt file audio vào public/audio/chungtacuahientai.mp3
    date: "2020-12-20", // ngày phát hành chính thức
    views: 300000000, // views thực tế trên YouTube và các nền tảng (cập nhật theo thực tế)
    type: "lyrics",
    artist: "Sơn Tùng M-TP",
   lyrics: [
  {
    type: "Intro",
    content:
      "Mùa thu mang giấc mơ quay về\nVẫn nguyên vẹn như hôm nào\nLá bay theo gió xôn xao\nChốn xưa em chờ (chốn xưa em chờ)\nĐoạn đường ngày nào nơi ta từng đón đưa\nCòn vấn vương không phai mờ\nGiấu yêu thương trong vần thơ"
  },
  {
    type: "Pre-Chorus",
    content:
      "Chúng ta...\nLà áng mây bên trời vội vàng ngang qua\nChúng ta...\nChẳng thể nâng niu những câu thề\nCứ như vậy thôi, không một lời, lặng lẽ thế chia xa\nChiều mưa bên hiên vắng buồn\nCòn ai thương ai, mong ai?"
  },
  {
    type: "Chorus",
    content:
      "Điều anh luôn giữ kín trong tim\nThương em đôi mắt ướt nhòa\nĐiều anh luôn giữ kín trong tim này\nThương em đâu đó khóc òa\nĐiều anh luôn giữ kín trong tim này\nNgày mai nắng gió, sương hao gầy\nCó ai thương, lắng lo cho em? (Whoo-whoo-whoo)\nĐiều anh luôn giữ kín trong tim\nThương em, anh mãi xin là\nĐiều anh luôn giữ kín trong tim này\nThương em vì thương thôi mà\nĐiều anh luôn giữ kín trong tim này\nDù cho nắng tắt, xuân thay màu\nHéo khô đi tháng năm xưa kia\n(Anh nguyện ghi mãi trong tim)"
  },
  {
    type: "Post-Chorus",
    content:
      "\"Nắng vương trên cành héo khô những kỉ niệm xưa kia\"\n\"Ngày mai, người luyến lưu về giấc mơ từng có, liệu có ta?\"\nCó anh nơi đó không?\nCó anh nơi đó không?\n(Liệu có ta?)"
  },
  {
    type: "Pre-Chorus",
    content:
      "Chúng ta...\nLà áng mây bên trời vội vàng ngang qua\nChúng ta...\nChẳng thể nâng niu những câu thề\nCứ như vậy thôi, không một lời, lặng lẽ thế chia xa\nChiều mưa bên hiên vắng buồn\nCòn ai thương ai, mong ai?"
  },
  {
    type: "Chorus",
    content:
      "Điều anh luôn giữ kín trong tim\nThương em đôi mắt ướt nhòa\nĐiều anh luôn giữ kín trong tim này\nThương em đâu đó khóc òa\nĐiều anh luôn giữ kín trong tim này\nNgày mai nắng gió, sương hao gầy\nCó ai thương, lắng lo cho em? (Whoo-whoo-whoo)\nĐiều anh luôn giữ kín trong tim\nThương em, anh mãi xin là\nĐiều anh luôn giữ kín trong tim này\nThương em vì thương thôi mà\nĐiều anh luôn giữ kín trong tim này\nDù cho nắng tắt, xuân thay màu\nHéo khô đi tháng năm xưa kia\n(Anh nguyện ghi mãi trong tim)"
  },
  {
    type: "Bridge",
    content:
      "No, no, no\nNo, no, no\nĐiều anh luôn giữ kín trong tim (giữ kín trong tim này)\nGiữ mãi trong tim này (giữ mãi trong tim này)\nGiữ mãi trong tim mình (giữ mãi trong tim mình)\nGiữ...\nCó anh nơi đó không?\nCó anh nơi đó không?\n(Whoo-whoo-whoo-whoo)"
  },
  {
    type: "Final Chorus",
    content:
      "Điều anh luôn giữ kín trong tim (no, no)\nĐiều anh luôn giữ kín trong tim này (no, no)\nĐiều anh luôn giữ kín trong tim này\n(Ngày mai, nắng gió, sương hao gầy)\n(Có ai thương, lắng lo cho em?)\nĐiều anh luôn giữ kín trong tim (no, no)\nĐiều anh luôn giữ kín trong tim này (no, no)\nĐiều anh luôn giữ kín trong tim này\n(Dù cho nắng tắt, xuân thay màu)\n(Héo khô đi tháng năm xưa kia)\n(Anh nguyện ghi mãi trong tim)\nĐiều anh luôn giữ kín trong tim\nThương em đôi mắt ướt nhòa\nĐiều anh luôn giữ kín trong tim này\nThương em đâu đó khóc òa\nĐiều anh luôn giữ kín trong tim này\nNgày mai nắng gió, sương hao gầy\nCó ai thương, lắng lo cho em? (Whoo-whoo-whoo)\nĐiều anh luôn giữ kín trong tim\nThương em, anh mãi xin là\nĐiều anh luôn giữ kín trong tim này\nThương em vì thương thôi mà\nĐiều anh luôn giữ kín trong tim này\nDù cho nắng tắt, xuân thay màu\nHéo khô đi tháng năm xưa kia\n(Anh nguyện ghi mãi trong tim)"
  }
],
    year: "2020",
    duration: "05:01", // thời lượng bài hát thực tế
    singerPhoto: sontung.src, // ảnh ca sĩ (thay bằng ảnh thực tế từ public/images/)
    composer: "Sơn Tùng M-TP", // sáng tác chính thức
    producer: "Onfire", // nhà sản xuất âm nhạc chính thức
    otherSongs: [
      "Hãy Trao Cho Anh",
      "Có Chắc Yêu Là Đây",
      "Chúng Ta Của Tương Lai",
    ], // các bài khác nổi bật của Sơn Tùng M-TP
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "'Chúng Ta Của Hiện Tại' là đĩa đơn mở đường cho EP 'Chúng Ta' của Sơn Tùng M-TP, với MV drama dài 14 phút lấy bối cảnh Sài Gòn thập niên 70-80, kể chuyện tình bi kịch giữa thiếu gia xã hội đen và cô bồi bàn. Giai điệu Pop Ballad da diết về hoài niệm và chia ly lặng lẽ đã giúp ca khúc đạt quán quân Billboard LyricFind Global, hơn 300 triệu views YouTube, khẳng định vị thế 'hoàng tử Vpop' của Sơn Tùng.",
  },
  {
    id: 20,
    slug: "lyric-i-love-you-3000-stephanie-poetri",
    title: "Lyric I Love You 3000 - Stephanie Poetri",
    categories: [categoriesData[1], categoriesData[7], categoriesData[16]], // Ví dụ: Pop, R&B, International
    image: iloveyou3000.src, // ảnh bìa bài hát (thay bằng ảnh thực tế từ public/images/)
    audio: "/audio/iloveyou3000.MP3", // Đặt file audio vào public/audio/iloveyou3000.mp3
    date: "2019-04-12", // ngày phát hành chính thức
    views: 425000000, // views thực tế trên Spotify/YouTube và các nền tảng (cập nhật theo thực tế)
    type: "lyrics",
    artist: "Stephanie Poetri",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Baby, take my hand\nI want you to be my husband\n'Cause you're my Iron Man\nAnd I love you 3000\nBaby, take a chance\n'Cause I want this to be something\nStraight out of a Hollywood movie\nI see you standing there\nIn your hulk outerwear\nAnd all I can think\nIs I've got a ring",
      },
      {
        type: "Pre-Chorus",
        content:
          "'Cause I know I wanna ask\nScared the moment will pass\nI can see it in your eyes\nJust take you by surprise\nAnd all my friends they tell me they see\nI'm planning to get on one knee\nBut I want it to be out of the blue\nAnd make sure you have no clue\nWhen I ask",
      },
      {
        type: "Chorus",
        content:
          "Baby, take my hand\nI just want to be your husband\n'Cause you're my Iron Man\nAnd I love you 3000\nBaby, take a chance\n'Cause I want this to be something\nStraight out of a Hollywood movie\nNo spoilers please\nNo spoilers please\nNo spoilers please\nNo spoilers please",
      },
      {
        type: "Verse 2",
        content:
          "Now we're having dinner\nAnd baby you're my winner\nI see the way you smile\nAnd it makes me want to kiss you\nI can feel it in the air\nIt's almost here\nAnd I don't wanna rush\nBut I don't wanna wait too much",
      },
      {
        type: "Pre-Chorus",
        content:
          "And all my friends they tell me they see\nI'm planning to get on one knee\nBut I want it to be out of the blue\nAnd make sure you have no clue\nWhen I ask",
      },
      {
        type: "Chorus",
        content:
          "Baby, take my hand\nI just want to be your husband\n'Cause you're my Iron Man\nAnd I love you 3000\nBaby, take a chance\n'Cause I want this to be something\nStraight out of a Hollywood movie\nNo spoilers please\nNo spoilers please\nNo spoilers please\nNo spoilers please",
      },
      {
        type: "Post-Chorus",
        content:
          "Pa da da da da dam\nPa da da\nNo spoilers please\nPa da da da da dam\nPa da da\nNo spoilers please\nPa da da da da dam\nPa da da\nNo spoiler please\nPa da da da da dam\nPa da da\nAnd I love you three thousand",
      },
    ],
    year: "2019",
    duration: "02:32", // thời lượng bài hát thực tế
    singerPhoto: stephanie.src, // ảnh ca sĩ (thay bằng ảnh thực tế từ public/images/)
    composer: "Stephanie Poetri", // sáng tác chính thức
    producer: "88rising", // nhà sản xuất/label chính thức
    otherSongs: ["I Wanna Get Better", "Put It Off", "Yin & Yang"], // các bài khác nổi bật của Stephanie Poetri
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "'I Love You 3000' là bản hit Indie Pop/R&B dễ thương của Stephanie Poetri, lấy cảm hứng từ câu thoại kinh điển 'I love you 3000' trong Avengers: Endgame. Với giai điệu vui tươi, lời ca lãng mạn về lời cầu hôn bất ngờ như phim Hollywood, ca khúc viral toàn cầu, dẫn đầu Spotify Global Viral 50 hơn 4 tuần và giúp cô nhận giải 'Best New Asian Artist – Indonesia' tại MAMA 2019.",
  },
  {
    id: 21,
    slug: "lyric-luc-em-nho-anh-lena",
    title: "Lyric Lúc Em Nhớ Anh - Lena",
    categories: [categoriesData[1], categoriesData[7], categoriesData[16]], // Ví dụ: Ballad, Vpop, Nhạc Trẻ
    image: lucemnhoanh.src, // ảnh bìa bài hát (thay bằng ảnh thực tế từ public/images/)
    audio: "/audio/lucemnhoanh.mp3", // Đặt file audio vào public/audio/lucemnhanh.mp3
    date: "2024-12-11", // ngày phát hành chính thức
    views: 500000, // ước tính views trên YouTube/Spotify (cập nhật theo thực tế, đang trending)
    type: "lyrics",
    artist: "Lena",
    lyrics: [
      {
        type: "Verse 1",
        content:
          "Thức thâu bao đêm dài\nEm thường mong ngày mình bên nhau\nCó chăng cũng bởi vì vài đôi ba lần mình lại u sầu\nThế nên bấy lâu mình chẳng một câu nào\nChẳng một câu chào với nhau\nMà sao nước mắt vẫn ở trong lòng",
      },
      {
        type: "Verse 2",
        content:
          "Cớ sao anh vội đi\nChẳng một lần nói câu biệt ly\nAi nào ngờ có chăng đôi khi yêu rồi lại ướt mi (yêu rồi lại ướt mi)\nNói yêu em làm chi nói yêu để giờ này cũng thế thôi\nGhé chơi đây rồi vội vàng bốc hơi",
      },
      {
        type: "Verse 1 (Repeat)",
        content:
          "Thức thâu bao đêm dài\nEm thường mong ngày mình bên nhau\nCó chăng cũng bởi vì vài đôi ba lần mình lại u sầu\nThế nên bấy lâu mình chẳng một câu nào\nChẳng một câu chào với nhau\nMà sao nước mắt vẫn ở trong lòng",
      },
      {
        type: "Bridge",
        content:
          "Và rồi mình được ở bên nhau thêm mấy lần rồi\nThêm mấy lần rồi xa\nMà I thinking about you\nHuh-huh you, huh huh\nGiống như cơn mưa rồi chợt tan\nChẳng muốn cô đơn rồi lại khóc một mình\nChẳng muốn cô đơn rồi dở dang cuộc tình",
      },
      {
        type: "Verse 1 (Final)",
        content:
          "Thức thâu bao đêm dài\nEm thường mong ngày mình bên nhau\nCó chăng cũng bởi vì vài đôi ba lần mình lại u sầu\nThế nên bấy lâu mình chẳng một câu nào\nChẳng một câu chào với nhau\nMà sao nước mắt vẫn ở trong lòng",
      },
      {
        type: "Outro",
        content:
          "Chuyện đã qua từ lâu rồi\nNhưng mà em vẫn nhớ anh\nAnh còn nhớ tới em không\nMà sao nước mắt vẫn ở trong lòng",
      },
    ],
    year: "2024",
    duration: "04:12", // thời lượng bài hát ước tính dựa trên audio (có thể điều chỉnh)
    singerPhoto: lena.src, // ảnh ca sĩ (thay bằng ảnh thực tế từ public/images/)
    composer: "Lena", // sáng tác chính thức (dựa trên info album)
    producer: "METUB Network (Music)", // nhà sản xuất chính thức
    otherSongs: [
      "Say (ft. T.R.I)",
      "Nếu Sớm Mai Là Hôm Nay (ft. Soho)",
      "Chuyện Tình Trôi Mau",
    ], // các bài khác nổi bật của Lena
    userCommentAvatar: anonymous.src,
    userNameComment: "Anonymous",
    userRoleComment: "Admin",
    comment:
      "'Lúc Em Nhớ Anh' là ca khúc Ballad sâu lắng từ album 'LEMONADE' của Lena, khắc họa nỗi nhớ da diết và những đêm dài cô đơn sau chia ly. Với giọng hát mỏng manh, giai điệu chậm rãi đầy cảm xúc, bài hát nhanh chóng viral trên Spotify và YouTube Vpop 2024, chạm đến trái tim những ai từng trải qua nỗi đau tình yêu.",
  },
];
