import { PlaylistPost } from "../types/type";
import { categoriesData } from "./category-data";
import tree3 from "../asset/tree3.jpg";
import tree4 from "../asset/tree4.jpg";
import khoanhkhac from "../asset/playlist-img/khoangkhac.jpg";
import doita from "../asset/playlist-img/doita.jpg";
import tram from "../asset/playlist-img/tram.jpg";
import live from "../asset/playlist-img/live.jpg";
import chualanh from "../asset/playlist-img/chualanh.jpg";
import buocqua from "../asset/playlist-img/troicondo.jpg";
import cao from "../asset/playlist-img/cao.jpg";
import longlay from "../asset/playlist-img/longlay.jpg";

export const playlistsData: PlaylistPost[] = [
  {
    id: 1,
    title: "Những Khoảnh Khắc Của Hai Ta",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]],
    image: khoanhkhac.src, // placeholder, replace with actual src
    banner: doita.src, // placeholder, replace with actual src
    description:
      "Một playlist ấm áp, ngọt ngào nhưng cũng có chút lắng đọng — dành cho những ai đã, đang, hoặc từng yêu. Mỗi bài là một cung bậc cảm xúc khác nhau của tình yêu.",
    songs: [
      {
        name: "Tháng Năm",
        desc: "Nhẹ nhàng và đầy hoài niệm, kể về những kỷ niệm thanh xuân khó quên.",
        youtube: "https://youtu.be/sG9JhIRuTkA?si=e_rRa1Te9-gHybYK",
      },
      {
        name: "Một Triệu Like",
        desc: "Giai điệu chill, lời rap tinh tế nói về tình yêu giản đơn nhưng chân thành.",
        youtube: "https://www.youtube.com/watch?v=oigiXW6XyCQ",
      },
      {
        name: "Có Em",
        desc: "Bản tình ca hiện đại, ấm áp và mang cảm giác 'có em là đủ'.",
        youtube: "https://www.youtube.com/watch?v=DcCISK3sCYg",
      },
      {
        name: "Vì Yêu Cứ Đâm Đầu",
        desc: "Pha trộn giữa pop và R&B, thể hiện sự cuồng nhiệt và liều lĩnh trong tình yêu.",
        youtube: "https://www.youtube.com/watch?v=EWz4fITO5qg",
      },
      {
        name: "Phía Sau Em",
        desc: "Một chút day dứt, pha trộn giữa pop và R&B, rất dễ nghiện.",
        youtube: "https://www.youtube.com/watch?v=LklFoy_a3bA",
      },
      {
        name: "Lạ Lùng",
        desc: "Tình yêu mơ hồ, trôi qua trong những giai điệu buồn nhẹ đặc trưng của Vũ.",
        youtube: "https://www.youtube.com/watch?v=jv7WQeIPGjY",
      },
      {
        name: "Tháng Mấy Em Nhớ Anh?",
        desc: "Ca từ đẹp như thơ, giọng hát ấm áp và cảm xúc sâu lắng.",
        youtube: "https://www.youtube.com/watch?v=lxFmeBhoA1Y",
      },
      {
        name: "Em Không Sai, Chúng Ta Sai",
        desc: "Bản ballad đau thương nhưng đẹp, nói về sự tiếc nuối trong tình yêu tan vỡ.",
        youtube: "https://www.youtube.com/watch?v=iwGuiSnr2Qc",
      },
      {
        name: "3107 – 3",
        desc: "Giai điệu lofi pha buồn, cực hợp để nghe đêm khuya.",
        youtube: "https://www.youtube.com/watch?v=kfw7MYah2nU",
      },
      {
        name: "Hơn Cả Yêu",
        desc: "Một lời tỏ tình ngọt ngào, mộc mạc mà ai nghe cũng mỉm cười.",
        youtube: "https://www.youtube.com/watch?v=__kGJZ-kPno",
      },
      {
        name: "Anh Đã Quen Với Cô Đơn",
        desc: "Đắm chìm trong cảm giác cô đơn sau chia tay, nhưng vẫn đẹp và sâu.",
        youtube: "https://www.youtube.com/watch?v=X7sSE3yCNLI",
      },
      {
        name: "Một Nhà",
        desc: "Kết lại bằng bài hát ấm áp, vẽ nên viễn cảnh hạnh phúc, bình yên của hai người yêu nhau.",
        youtube: "https://www.youtube.com/watch?v=TKlXc3iywoM",
      },
    ],
    date: "2025-10-20",
    views: 1200,
    type: "playlists",
    mood: "Romantic",
    final:
      "Hy vọng playlist 'Những Khoảnh Khắc Của Hai Ta' sẽ là người bạn đồng hành, mang đến những cung bậc cảm xúc yêu thương, từ ngọt ngào, hoài niệm đến day dứt. Hãy để âm nhạc kể câu chuyện tình yêu của bạn!",
  },
  {
    id: 2,
    title: "Một Nốt Trầm Trong Tim",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]],
    image: tram.src, // placeholder, replace with actual src
    banner: live.src, // placeholder, replace with actual src
    description:
      "Khi tình yêu không còn rực rỡ như ban đầu, chỉ còn lại những giai điệu nhẹ tênh, mang theo ký ức. Đây là playlist dành cho những đêm yên ắng – khi bạn muốn nghe để thấy mình vẫn biết yêu.",
    songs: [
      {
        name: "Chạy Về Khóc Với Anh",
        desc: "Mở đầu bằng sự tan vỡ và tổn thương, nhưng vẫn đẹp trong cảm xúc thật.",
        youtube: "https://www.youtube.com/watch?v=EBpp2VTSI2Q",
      },
      {
        name: "Anh Đã Quen Với Cô Đơn",
        desc: "Nốt buồn mang vị cô đơn đặc trưng, lời hát chạm đến nỗi trống trải trong tim.",
        youtube: "https://www.youtube.com/watch?v=X7sSE3yCNLI",
      },
      {
        name: "Đông Kiếm Em",
        desc: "Không gian lạnh của mùa đông và nỗi nhớ len lỏi – một bài hát rất “trầm” và tinh tế.",
        youtube: "https://www.youtube.com/watch?v=h6RONxjPBf4",
      },
      {
        name: "Nàng Thơ",
        desc: "Dịu dàng, mộc mạc, như một lời kể về người con gái từng là nguồn cảm hứng.",
        youtube: "https://www.youtube.com/watch?v=Zzn9-ATB9aU",
      },
      {
        name: "Từ Ngày Em Đến",
        desc: "Buồn nhẹ nhưng không bi lụy, gợi nhớ về những đổi thay sau khi tình yêu rời đi.",
        youtube: "https://www.youtube.com/watch?v=AmvA-XJF0j8",
      },
      {
        name: "Đi Qua Mùa Hạ",
        desc: "Một mùa hạ trôi qua cùng tuổi trẻ và những cảm xúc không thể giữ lại.",
        youtube: "https://www.youtube.com/watch?v=wXsBaFCfXb0",
      },
      {
        name: "Người Ta Nói",
        desc: "Một chút hoài niệm xưa, nơi nỗi đau được kể bằng giai điệu quen thuộc.",
        youtube: "https://www.youtube.com/watch?v=AZNAv3rpa4U",
      },
      {
        name: "Cứ Thế Rời Xa",
        desc: "Giọng hát day dứt, đầy cảm xúc – kể về sự buông tay bất đắc dĩ.",
        youtube: "https://www.youtube.com/watch?v=zQwKxVCR1y8",
      },
      {
        name: "Chỉ Là Không Cùng Nhau",
        desc: "Một bản song ca buồn đến nao lòng, hoàn hảo cho nốt trầm giữa playlist.",
        youtube: "https://www.youtube.com/watch?v=UqKVL56IJB8",
      },
      {
        name: "Thật Ra Em Chẳng Thương Anh Như Vậy Đâu",
        desc: "Tiếng hát day dứt, sâu sắc, như lời tự thú muộn màng.",
        youtube: "https://www.youtube.com/watch?v=90sYCPQTZ40",
      },
      {
        name: "Như Anh Đã Thấy Em",
        desc: "Giai điệu mơ màng, cô đơn và buồn một cách rất đẹp.",
        youtube: "https://www.youtube.com/watch?v=cPbp2iFaZRo",
      },
      {
        name: "Đôi Lời Tình Ca",
        desc: "Kết lại bằng sự nhẹ nhàng, như tiếng thở dài chậm rãi sau một mối tình.",
        youtube: "https://www.youtube.com/watch?v=8Tcj6xoQ_xc",
      },
    ],
    date: "2025-10-20",
    views: 850,
    type: "playlists",
    mood: "Melancholic",
    final:
      "Một chút cô đơn, một chút hoài niệm, nhưng không tuyệt vọng. 'Một Nốt Trầm Trong Tim' không chỉ là để buồn — mà là để lắng nghe, hiểu mình, và bước qua nỗi nhớ. Hãy để những giai điệu này đồng hành cùng bạn trong những đêm yên ắng.",
  },
  {
    id: 3,
    title: "Khi Ta Đủ Lớn Để Hiểu Mình",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]],
    image: chualanh.src, // placeholder, replace with actual src
    banner: buocqua.src, // placeholder, replace with actual src
    description:
      "Một hành trình dài đi qua tổn thương, cô đơn, và hoang mang — để rồi nhận ra: chẳng ai cứu được mình ngoài chính ta. Đây là playlist dành cho những đêm lặng im nhìn lại, những buổi sáng đứng dậy sau vấp ngã, và những ngày bạn học cách tha thứ cho bản thân.",
    songs: [
      {
        name: "Tự Sự",
        desc: "Lời rap chân thật và đau đáu, không hoa mỹ, chỉ là một người đàn ông đang đối thoại với chính mình. 'Anh đi tìm anh trong những điều vụn vỡ.' Một lời khởi đầu hoàn hảo cho hành trình thức tỉnh.",
        youtube: "https://www.youtube.com/watch?v=UVbv-PJXm14",
      },
      {
        name: "Đêm",
        desc: "Bóng tối không chỉ là sự vắng ánh sáng mà là nơi ta nghe rõ tiếng lòng. 'Đêm như chiếc gương soi vào tim người.'",
        youtube: "https://www.youtube.com/watch?v=EHFN2XVXy5Q",
      },
      {
        name: "Thật Ra Em Chẳng Thương Anh Như Vậy Đâu",
        desc: "Khi sự thật trần trụi của tình yêu khiến ta tỉnh mộng, ta bắt đầu hiểu cảm xúc là thứ không thể ép buộc.",
        youtube: "https://www.youtube.com/watch?v=90sYCPQTZ40",
      },
      {
        name: "Lời Tự Sự",
        desc: "Giai điệu buồn man mác, nhẹ như hơi thở, nhưng lại chứa đựng cả bầu trời suy ngẫm. Đây là bài hát của người đã đi qua nhiều và chọn im lặng để trưởng thành.",
        youtube: "https://www.youtube.com/watch?v=n6Pnzi6r9NU",
      },
      {
        name: "Mang Tiền Về Cho Mẹ",
        desc: "Không chỉ là bài rap, đây là một bài học về lòng hiếu thảo và sự trưởng thành thật sự — khi ta sống không còn cho riêng mình.",
        youtube: "https://www.youtube.com/watch?v=UVbv-PJXm14",
      },
      {
        name: "Bước Qua Mùa Cô Đơn",
        desc: "Một bài hát nhẹ nhưng đầy chiêm nghiệm: 'Mỗi người đều cần đi qua nỗi cô đơn, để học cách đứng vững.'",
        youtube: "https://www.youtube.com/watch?v=n6Pnzi6r9NU",
      },
      {
        name: "Đưa Nhau Đi Trốn",
        desc: "Dù nói về trốn đi, nhưng thật ra là để tìm lại chính mình trong thế giới đầy xô bồ.",
        youtube: "https://www.youtube.com/watch?v=5e7e_KZINA4",
      },
      {
        name: "Trốn Tìm",
        desc: "Ca khúc trưởng thành nhất của Đen: nói về sự đổi thay của con người qua năm tháng, khi yêu, khi mất, khi trưởng thành. 'Ai rồi cũng khác, chỉ là có dám đối diện để chấp nhận điều đó hay không.'",
        youtube: "https://www.youtube.com/watch?v=Ws-QlpSltr8",
      },
      {
        name: "Thức Giấc",
        desc: "Bước ngoặt của sự tỉnh thức — khi ta hiểu rằng: 'Mọi ký ức chỉ là để nhớ, chứ không phải để quay lại.'",
        youtube: "https://www.youtube.com/watch?v=R3trO4a49go",
      },
      {
        name: "Sau Này Hãy Gặp Lại Nhau Khi Hoa Nở",
        desc: "Một trong những bản nhạc đẹp nhất về sự buông bỏ dịu dàng: 'Hãy gặp lại nhau khi ta đã bình yên.'",
        youtube: "https://www.youtube.com/watch?v=3rIZ9o1Hq9E",
      },
      {
        name: "Có Chàng Trai Viết Lên Cây",
        desc: "Nhẹ nhàng, mộc mạc, nhưng là bản tóm tắt hoàn hảo cho hành trình của tuổi trẻ – từ mộng mơ đến trưởng thành.",
        youtube: "https://www.youtube.com/watch?v=EUEUZDV-in0",
      },
      {
        name: "Đi Về Nhà",
        desc: "Kết lại bằng sự trở về – không phải chỉ về nơi chốn, mà là về chính con người mình. Khi đã đi đủ xa, ta hiểu: hạnh phúc đôi khi là điều giản đơn nhất.",
        youtube: "https://www.youtube.com/watch?v=vTJdVE_gjI0",
      },
    ],
    date: "2025-10-20",
    views: 950,
    type: "playlists",
    mood: "Reflective",
    final:
      "Trưởng thành không phải là không còn đau, mà là biết đau nhưng vẫn chọn đi tiếp. Là khi ta thôi trách người khác, thôi hỏi 'vì sao', và bắt đầu học cách yêu chính mình. 'Có những ngày bạn thấy mình lạc lõng, đừng sợ. Chính là những ngày đó, bạn đang lớn lên.' Hãy để playlist này đồng hành cùng hành trình tự nhận thức của bạn.",
  },
  {
    id: 4,
    title: "Vibe Việt Gần Đây – Những Hit Đỉnh Cao 2023-2025",
    categories: [categoriesData[0], categoriesData[15], categoriesData[24]],
    image: cao.src, // placeholder, replace with actual src
    banner: longlay.src, // placeholder, replace with actual src
    description:
      "Playlist tổng hợp những bài hát Việt Nam hay nhất từ 2023 đến nay (2025), từ ballad sâu lắng đến rap sôi động và pop bắt tai. Dành cho những ai muốn cập nhật xu hướng âm nhạc Việt, với hit từ Sơn Tùng M-TP, HIEUTHUHAI, Vũ. và nhiều nghệ sĩ trẻ tài năng khác.",
    songs: [
      {
        name: "Đừng Làm Trái Tim Anh Đau",
        desc: "Hit lớn của Sơn Tùng M-TP năm 2024, MV phá kỷ lục YouTube, mang cảm xúc ballad hiện đại đầy drama.",
        youtube:
          "https://www.youtube.com/watch?v=example_dung_lam_trai_tim_anh_dau",
      },
      {
        name: "Thủy Triều",
        desc: "Ca khúc nổi bật của Quang Hùng MasterD 2024, nhịp điệu cuốn hút, lọt top Spotify Việt Nam.",
        youtube: "https://www.youtube.com/watch?v=example_thuy_trieu",
      },
      {
        name: "Cắt Đôi Nỗi Sầu",
        desc: "Ballad buồn của Tăng Duy Tân, hot trend TikTok 2023-2024, lời ca chạm đến nỗi đau tình yêu.",
        youtube: "https://www.youtube.com/watch?v=example_cat_doi_noi_sau",
      },
      {
        name: "Thị Mầu",
        desc: "Sự trở lại của Hòa Minzy năm 2023, kết hợp dân gian hiện đại, vui tươi và viral mạnh mẽ.",
        youtube: "https://www.youtube.com/watch?v=example_thi_mau",
      },
      {
        name: "Một Triệu Like",
        desc: "Rap chill của Đen Vâu ft. Thành Đồng 2023, nói về tình yêu giản dị, lọt top Zing MP3.",
        youtube: "https://www.youtube.com/watch?v=oigiXW6XyCQ",
      },
      {
        name: "Sau Cơn Mưa",
        desc: "Hit của Rhyder & CoolKid 2024, giai điệu pop vui tươi, top 10 Spotify Việt Nam.",
        youtube: "https://www.youtube.com/watch?v=example_sau_con_mua",
      },
      {
        name: "Chịu Cách Mình Nói Thua",
        desc: "Bản rap hài hước của Rhyder 2024, dễ nghiện và trending trên TikTok.",
        youtube:
          "https://www.youtube.com/watch?v=example_chiu_cach_minh_noi_thua",
      },
      {
        name: "Bình Yên",
        desc: "Ballad của Vũ. ft. Binz 2024, phần đầu album Bảo Tàng Của Nuối Tiếc, sâu lắng và thịnh hành.",
        youtube: "https://www.youtube.com/watch?v=example_binh_yen_vu",
      },
      {
        name: "Mưa Tháng Sáu",
        desc: "Ballad chill của Văn Mai Hương 2023, slow rap cuốn hút, hot trên TikTok.",
        youtube: "https://www.youtube.com/watch?v=example_mua_thang_sau",
      },
      {
        name: "Hoa Cỏ Lau",
        desc: "Ca khúc indie của Vũ. 2023, vẫn viral 2024-2025, gợi nỗi nhớ da diết.",
        youtube: "https://www.youtube.com/watch?v=example_hoa_co_lau",
      },
      {
        name: "Sự Nghiệp Chướng",
        desc: "Rap diss gây sốc của Pháo 2025, phá kỷ lục view nhanh chóng trên YouTube.",
        youtube: "https://www.youtube.com/watch?v=example_su_nghiep_chuong",
      },
      {
        name: "Nắng Dưới Chân Mây",
        desc: "Hit remix TikTok 2025 của Nguyễn Hữu Kha, giai điệu tươi mới, dễ lan tỏa.",
        youtube: "https://www.youtube.com/watch?v=example_nang_duoi_chan_may",
      },
    ],
    date: "2025-10-20",
    views: 1500,
    type: "playlists",
    mood: "Vibrant",
    final:
      "Playlist 'Vibe Việt Gần Đây' mang đến sự đa dạng của V-pop từ những năm gần đây, giúp bạn chill, vibe và cập nhật hit mới nhất. Hy vọng bạn sẽ tìm thấy những giai điệu yêu thích và chia sẻ với bạn bè!",
  },
];
