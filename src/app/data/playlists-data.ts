import { PlaylistPost } from "../types/type";
import { categoriesData } from "./category-data";
import doita from "../asset/playlist-img/doita.jpg";
import tram from "../asset/playlist-img/tram.jpg";
import live from "../asset/playlist-img/live.jpg";
import chualanh from "../asset/playlist-img/chualanh.jpg";
import buocqua from "../asset/playlist-img/troicondo.jpg";
import cao from "../asset/playlist-img/cao.jpg";
import longlay from "../asset/playlist-img/longlay.jpg";
import indie from "../asset/playlist-img/indi.jpg";
import indie2 from "../asset/playlist-img/indi2.jpg";

import chill1 from "../asset/playlist-img/chill.jpg";
import chill2 from "../asset/playlist-img/chill2.jpg";

import dcmt1 from "../asset/playlist-img/dcmt1.jpg";
import dcmt2 from "../asset/playlist-img/dcmt2.jpg";

import dc from "../asset/playlist-img/dc.jpg";
import dc2 from "../asset/playlist-img/dc2.jpg";

export const playlistsData: PlaylistPost[] = [
  {
    id: 1,
    slug: "playlist-ky-niem-tinh-yeu-nhung-khoanh-khac-cua-hai-ta",
    title: "Playlist Kỷ Niệm Tình Yêu: Những Khoảnh Khắc Của Hai Ta",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]], // Nhạc Việt, Ballad, Playlist cảm xúc
    image: doita.src,
    banner: doita.src,
    description:
      "Playlist kỷ niệm tình yêu Những Khoảnh Khắc Của Hai Ta – nơi lưu giữ những ký ức đẹp nhất của hai người: từ rung động đầu tiên, những ngày tháng ngọt ngào, đến nỗi nhớ da diết khi xa cách. Mỗi bài hát là một mảnh ghép kỷ niệm, giúp bạn sống lại những khoảnh khắc yêu thương đã từng có. Dành cho ai đang yêu, đang nhớ, hoặc đang tìm lại những kỷ niệm cũ – đây là cuốn nhật ký âm nhạc của tình yêu. Từ 'Tháng Năm' gợi nhớ tuổi trẻ, đến 'Tháng Mấy Em Nhớ Anh?' đầy day dứt, playlist này như một dòng sông kỷ niệm, đưa bạn trở về những ngày tháng không thể nào quên. Hãy bật lên, nhắm mắt, và để nhạc kể lại câu chuyện tình yêu của bạn – những kỷ niệm vẫn còn nguyên vẹn trong tim.",

    songs: [
      {
        name: "Tháng Năm",
        desc: "Bản tình ca gợi kỷ niệm thanh xuân rực rỡ nhất. 'Tháng Năm' như cuốn phim cũ, đưa bạn trở về những ngày đạp xe dưới hàng cây, ánh mắt đầu tiên, và nụ cười ngại ngùng. Một kỷ niệm không phai trong trái tim ai từng yêu.",
        youtube: "https://www.youtube.com/watch?v=sG9JhIRuTkA",
      },
      {
        name: "Một Triệu Like",
        desc: "Tình yêu giản đơn nhưng đầy kỷ niệm: tin nhắn đêm khuya, hẹn hà vụng về, và những khoảnh khắc khiến tim rung lên. 'Một Triệu Like' là lời nhắc rằng kỷ niệm đẹp nhất chính là sự chân thành.",
        youtube: "https://www.youtube.com/watch?v=oigiXW6XyCQ",
      },
      {
        name: "Có Em",
        desc: "Chỉ cần có nhau, mọi kỷ niệm đều trở nên ý nghĩa. 'Có Em' là lời khẳng định rằng tình yêu biến những ngày bình thường thành kỷ niệm đáng nhớ mãi mãi.",
        youtube: "https://www.youtube.com/watch?v=DcCISK3sCYg",
      },
      {
        name: "Vì Yêu Cứ Đâm Đầu",
        desc: "Cuồng nhiệt, liều lĩnh, và đầy kỷ niệm đẹp dù có đau. 'Vì Yêu Cứ Đâm Đầu' là tuyên ngôn của những trái tim dám yêu hết mình – để lại những kỷ niệm không thể xóa nhòa.",
        youtube: "https://www.youtube.com/watch?v=EWz4fITO5qg",
      },
      {
        name: "Phía Sau Em",
        desc: "Kỷ niệm của một người đứng phía sau lặng lẽ yêu. 'Phía Sau Em' là nỗi nhớ thầm lặng, là những ánh mắt chưa từng nói thành lời – một kỷ niệm buồn nhưng đẹp.",
        youtube: "https://www.youtube.com/watch?v=LklFoy_a3bA",
      },
      {
        name: "Lạ Lùng",
        desc: "Kỷ niệm mơ hồ, khó nắm bắt như giấc mơ. 'Lạ Lùng' là những cảm xúc không tên, những khoảnh khắc yêu thương thoáng qua nhưng mãi khắc sâu trong tim.",
        youtube: "https://www.youtube.com/watch?v=jv7WQeIPGjY",
      },
      {
        name: "Tháng Mấy Em Nhớ Anh?",
        desc: "Nỗi nhớ theo từng tháng, từng mùa – một kỷ niệm không thể nguôi. 'Tháng Mấy Em Nhớ Anh?' là lá thư tình gửi người cũ, đầy day dứt và hoài niệm.",
        youtube: "https://www.youtube.com/watch?v=lxFmeBhoA1Y",
      },
      {
        name: "Em Không Sai, Chúng Ta Sai",
        desc: "Kỷ niệm của một cuộc chia tay không ai muốn. 'Em Không Sai, Chúng Ta Sai' là lời chấp nhận nhẹ nhàng, rằng kỷ niệm vẫn đẹp dù tình yêu đã hết.",
        youtube: "https://www.youtube.com/watch?v=iwGuiSnr2Qc",
      },
      {
        name: "3107 - 3",
        desc: "Lofi buồn cho những đêm khuya ôm kỷ niệm. '3107 - 3' là không gian tĩnh lặng để bạn thả hồn vào những ký ức cũ, những người đã từng ở bên.",
        youtube: "https://www.youtube.com/watch?v=kfw7MYah2nU",
      },
      {
        name: "Hơn Cả Yêu",
        desc: "Kỷ niệm không chỉ là yêu, mà là sự hiện diện. 'Hơn Cả Yêu' là lời hứa rằng những khoảnh khắc bên nhau sẽ mãi là kỷ niệm đẹp nhất.",
        youtube: "https://www.youtube.com/watch?v=__kGJZ-kPno",
      },
      {
        name: "Anh Đã Quen Với Cô Đơn",
        desc: "Kỷ niệm sau chia tay: học cách sống chung với nỗi nhớ. 'Anh Đã Quen Với Cô Đơn' là hành trình chữa lành, nơi kỷ niệm vẫn còn nhưng trái tim đã mạnh mẽ hơn.",
        youtube: "https://www.youtube.com/watch?v=X7sSE3yCNLI",
      },
      {
        name: "Một Nhà",
        desc: "Kết thúc bằng hy vọng: kỷ niệm sẽ dẫn đến một mái ấm. 'Một Nhà' là giấc mơ về tương lai, nơi mọi kỷ niệm đều trở thành nền tảng cho hạnh phúc.",
        youtube: "https://www.youtube.com/watch?v=TKlXc3iywoM",
      },
    ],

    date: "2025-10-20",
    views: 1200,
    type: "playlists",
    mood: "Romantic",
    final:
      "Playlist kỷ niệm tình yêu Những Khoảnh Khắc Của Hai Ta không chỉ là âm nhạc – mà là một hành trình trở về với những kỷ niệm đẹp nhất của bạn và người ấy. Từ những rung động đầu tiên trong 'Tháng Năm', đến nỗi nhớ da diết trong 'Tháng Mấy Em Nhớ Anh?', mỗi bài hát là một mảnh ghép kỷ niệm, giúp bạn sống lại từng khoảnh khắc yêu thương. Dù bạn đang hạnh phúc bên người ấy, đang nhớ một người cũ, hay đang tìm lại chính mình trong những ký ức xưa – playlist này sẽ là người bạn đồng hành. Hãy bật lên, để những giai điệu dẫn bạn qua dòng sông kỷ niệm, nơi mọi cảm xúc đều được trân trọng. Vì tình yêu không chỉ là hiện tại, mà còn là những kỷ niệm mãi mãi ở lại trong tim. Đây là nơi để bạn tìm lại những khoảnh khắc của hai ta – đẹp đẽ, ngọt ngào, và không thể nào quên.",
  },
  {
    id: 2,
    slug: "playlist-thon-thuc-tinh-yeu-mot-not-tram-trong-tim",
    title: "Playlist Thổn Thức Tình Yêu: Một Nốt Trầm Trong Tim",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]], // Nhạc Việt, Ballad, Playlist cảm xúc
    image: tram.src,
    banner: live.src,
    description:
      "Playlist thổn thức Một Nốt Trầm Trong Tim – nơi những giai điệu buồn nhẹ, sâu lắng, chạm vào trái tim đang rung lên từng nhịp thổn thức. Dành cho những đêm cô đơn, khi bạn muốn nghe lại tiếng lòng mình: nỗi nhớ da diết, ký ức phai mờ, và những cảm xúc không thể nói thành lời. Mỗi bài hát là một nốt trầm thổn thức, không bi lụy, mà dịu dàng, chân thành – như một người bạn lặng lẽ đồng hành. Từ 'Chạy Về Khóc Với Anh' đầy nước mắt, đến 'Đôi Lời Tình Ca' như tiếng thở dài cuối cùng, playlist này là không gian để bạn thả hồn vào dòng cảm xúc thổn thức, để bạn hiểu rằng: dù tình yêu đã xa, trái tim vẫn còn biết rung động. Hãy bật lên – để những nốt nhạc buồn làm bạn thổn thức, rồi lại nhẹ nhàng chữa lành.",

    songs: [
      {
        name: "Chạy Về Khóc Với Anh",
        desc: "Mở đầu bằng một bản ballad thổn thức, 'Chạy Về Khóc Với Anh' là tiếng lòng vỡ òa của trái tim tan vỡ. Giai điệu như vòng tay ôm lấy nỗi đau, lời ca như dòng nước mắt lặng lẽ rơi – dành cho ai từng chạy qua đêm đen, chỉ để tìm một nơi trút bỏ nỗi thổn thức trong tim.",
        youtube: "https://www.youtube.com/watch?v=EBpp2VTSI2Q",
      },
      {
        name: "Anh Đã Quen Với Cô Đơn",
        desc: "Nốt trầm thổn thức nhất của playlist. 'Anh Đã Quen Với Cô Đơn' là lời tự sự của một người học cách sống chung với nỗi nhớ. Giai điệu buồn như tiếng thở dài, nhưng vẫn đẹp – vì trong cô đơn, trái tim vẫn còn biết thổn thức.",
        youtube: "https://www.youtube.com/watch?v=X7sSE3yCNLI",
      },
      {
        name: "Đông Kiếm Em",
        desc: "Giữa mùa đông lạnh buốt, 'Đông Kiếm Em' là nỗi thổn thức không lời. Giai điệu như tuyết rơi, lời ca như gió lạnh – chạm vào những góc khuất của trái tim đang tìm kiếm một bóng hình đã xa.",
        youtube: "https://www.youtube.com/watch?v=h6RONxjPBf4",
      },
      {
        name: "Nàng Thơ",
        desc: "Dịu dàng như một bài thơ buồn, 'Nàng Thơ' là nốt nhạc thổn thức về người con gái từng là cả thế giới. Dù đã xa, cô ấy vẫn khiến tim bạn rung lên từng nhịp – nhẹ nhàng, nhưng sâu đậm.",
        youtube: "https://www.youtube.com/watch?v=Zzn9-ATB9aU",
      },
      {
        name: "Từ Ngày Em Đến",
        desc: "Tình yêu đến rồi đi, để lại trái tim thổn thức. 'Từ Ngày Em Đến' là câu chuyện về sự thay đổi – buồn nhẹ, nhưng chân thật. Một nốt trầm khiến bạn muốn nhìn lại hành trình của chính mình.",
        youtube: "https://www.youtube.com/watch?v=AmvA-XJF0j8",
      },
      {
        name: "Đi Qua Mùa Hạ",
        desc: "Mùa hạ trôi qua, mang theo tuổi trẻ và những thổn thức đầu đời. 'Đi Qua Mùa Hạ' như cuốn phim cũ – rực rỡ, nhưng giờ chỉ còn là ký ức khiến tim bạn rung lên từng nhịp.",
        youtube: "https://www.youtube.com/watch?v=wXsBaFCfXb0",
      },
      {
        name: "Người Ta Nói",
        desc: "Lời thì thầm của người đời, nỗi đau trong tình yêu – 'Người Ta Nói' là nốt nhạc thổn thức mộc mạc, gần gũi. Dành cho ai từng nghe những lời xì xào, và vẫn giữ nguyên cảm xúc trong tim.",
        youtube: "https://www.youtube.com/watch?v=AZNAv3rpa4U",
      },
      {
        name: "Cứ Thế Rời Xa",
        desc: "Buông tay không lời, chỉ còn lại trái tim thổn thức. 'Cứ Thế Rời Xa' là lời tự sự day dứt, nhưng mạnh mẽ – dành cho ai từng yêu sâu đậm, rồi lặng lẽ bước tiếp.",
        youtube: "https://www.youtube.com/watch?v=zQwKxVCR1y8",
      },
      {
        name: "Chỉ Là Không Cùng Nhau",
        desc: "Song ca buồn đến nao lòng, 'Chỉ Là Không Cùng Nhau' là đỉnh cao của sự thổn thức. Hai giọng hát hòa quyện, kể về một tình yêu đẹp nhưng không thể tiếp tục – khiến tim bạn rung lên từng nhịp đau.",
        youtube: "https://www.youtube.com/watch?v=UqKVL56IJB8",
      },
      {
        name: "Thật Ra Em Chẳng Thương Anh Như Vậy Đâu",
        desc: "Lời thú nhận muộn màng, trái tim thổn thức giữa sự thật và ảo tưởng. 'Thật Ra Em Chẳng Thương Anh Như Vậy Đâu' là nốt trầm sâu sắc, chạm vào những cảm xúc mâu thuẫn nhất.",
        youtube: "https://www.youtube.com/watch?v=90sYCPQTZ40",
      },
      {
        name: "Như Anh Đã Thấy Em",
        desc: "Một bức thư tình chưa gửi, 'Như Anh Đã Thấy Em' là nốt nhạc thổn thức mơ màng. Giai điệu như giấc mơ, lời ca như ký ức – dành cho ai vẫn còn giữ hình bóng ấy trong tim.",
        youtube: "https://www.youtube.com/watch?v=cPbp2iFaZRo",
      },
      {
        name: "Đôi Lời Tình Ca",
        desc: "Kết thúc bằng một tiếng thở dài dịu dàng, 'Đôi Lời Tình Ca' là nốt trầm thổn thức cuối cùng. Không bi lụy, chỉ là lời tạm biệt nhẹ nhàng – để bạn bước tiếp với trái tim đã được chữa lành.",
        youtube: "https://www.youtube.com/watch?v=8Tcj6xoQ_xc",
      },
    ],

    date: "2025-10-20",
    views: 850,
    type: "playlists",
    mood: "Melancholic",
    final:
      "Playlist thổn thức Một Nốt Trầm Trong Tim không chỉ là âm nhạc – mà là một hành trình lắng nghe trái tim mình. Mỗi bài hát là một nhịp thổn thức: từ 'Chạy Về Khóc Với Anh' đầy nước mắt, đến 'Đôi Lời Tình Ca' như lời từ biệt dịu dàng. Đây là không gian dành cho những tâm hồn nhạy cảm, những ai muốn thả mình vào dòng cảm xúc buồn nhẹ, sâu lắng, và tìm thấy sự an ủi trong chính nỗi đau. Dù bạn đang cô đơn, đang nhớ, hay đang học cách buông tay – playlist này sẽ đồng hành cùng bạn, giúp bạn hiểu rằng: thổn thức không phải là yếu đuối, mà là bằng chứng rằng bạn đã từng yêu rất thật. Hãy bật lên vào một đêm yên ắng, để những nốt trầm này chạm vào tim bạn, làm bạn thổn thức, rồi nhẹ nhàng… chữa lành.",
  },
  {
    id: 3,
    slug: "playlist-truong-thanh-khi-ta-du-lon-de-hieu-minh",
    title: "Playlist Trưởng Thành: Khi Ta Đủ Lớn Để Hiểu Mình",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]], // Nhạc Việt, Ballad, Playlist cảm xúc
    image: chualanh.src,
    banner: buocqua.src,
    description:
      "Playlist trưởng thành Khi Ta Đủ Lớn Để Hiểu Mình – nơi âm nhạc kể câu chuyện về hành trình lớn lên: từ những tổn thương đầu đời, những lần vấp ngã, đến khoảnh khắc tỉnh thức và biết yêu thương chính mình. Đây không phải playlist để buồn, mà để hiểu – hiểu bản thân, hiểu cuộc đời, hiểu rằng trưởng thành là học cách bước đi dù đau. Mỗi bài hát là một cột mốc: từ rap tự sự của Đen Vâu, ballad day dứt của Vũ, đến những giai điệu nhẹ nhàng chữa lành. Dành cho ai từng lạc lối, từng khóc trong đêm, từng nghĩ mình không thể vượt qua – nhưng rồi vẫn đứng dậy. Trưởng thành không phải là không đau, mà là đau rồi vẫn chọn đi tiếp. Hãy bật playlist này khi bạn cần một người bạn âm nhạc để đồng hành trên hành trình trưởng thành – để bạn nhận ra: bạn đã lớn hơn bạn nghĩ.",

    songs: [
      {
        name: "Trưởng Thành",

        desc: "Mở đầu bằng tuyên ngôn trưởng thành mạnh mẽ nhất: 'Trưởng thành là khi ta học cách chịu trách nhiệm với chính mình'. Giai điệu rap sâu lắng, lời ca như cuốn nhật ký – kể về những lần sai lầm, những lần mất mát, và khoảnh khắc nhận ra: trưởng thành bắt đầu từ việc dám đối diện.",
        youtube: "https://www.youtube.com/watch?v=UVbv-PJXm14",
      },
      {
        name: "Bước Qua Nhau",

        desc: "Giai điệu buồn man mác, lời ca như tiếng thở dài: 'Ta bước qua nhau để trưởng thành'. Một bài hát về sự buông tay không phải vì hết yêu, mà vì cần lớn lên. Trưởng thành là biết buông đúng lúc.",
        youtube: "https://www.youtube.com/watch?v=3rIZ9o1Hq9E",
      },
      {
        name: "Mang Tiền Về Cho Mẹ",

        desc: "Trưởng thành không chỉ là tự lập, mà là biết yêu thương gia đình. Lời rap chân thật, mạnh mẽ: 'Trưởng thành là khi con biết mang tiền về cho mẹ, chứ không chỉ mang nỗi lo về nhà'. Một bài học lớn về trách nhiệm.",
        youtube: "https://www.youtube.com/watch?v=UVbv-PJXm14",
      },
      {
        name: "Thức Giấc",

        desc: "Khoảnh khắc tỉnh thức: 'Mọi ký ức chỉ để nhớ, không để quay lại'. Giai điệu nhẹ nhàng, lời ca sâu sắc – trưởng thành là biết buông quá khứ để bước tới tương lai.",
        youtube: "https://www.youtube.com/watch?v=R3trO4a49go",
      },
      {
        name: "Trốn Tìm",

        desc: "Rap chiêm nghiệm về sự thay đổi: 'Ai rồi cũng khác, chỉ là có dám đối diện hay không'. Trưởng thành là chấp nhận bản thân đã khác, và vẫn yêu thương phiên bản mới.",
        youtube: "https://www.youtube.com/watch?v=Ws-QlpSltr8",
      },
      {
        name: "Có Chàng Trai Viết Lên Cây",
        desc: "Hồi ức tuổi trẻ: 'Chàng trai ấy từng viết tên em lên cây, giờ cây đã lớn, người cũng trưởng thành'. Một bài hát dịu dàng về hành trình từ ngây ngô đến chín chắn.",
        youtube: "https://www.youtube.com/watch?v=EUEUZDV-in0",
      },
      {
        name: "Đi Về Nhà",
        desc: "Trưởng thành là biết rằng: dù đi đâu, làm gì, nhà vẫn là nơi để trở về – và nhà đầu tiên là chính bạn. Giai điệu ấm áp, lời ca như cái ôm.",
        youtube: "https://www.youtube.com/watch?v=vTJdVE_gjI0",
      },
      {
        name: "Lạ Lùng",
        desc: "Giai điệu mơ màng, lời ca như thơ: 'Lạ lùng là khi ta lớn lên, nhưng vẫn giữ được trái tim trẻ'. Trưởng thành không phải đánh mất sự ngây thơ, mà là biết trân trọng nó.",
        youtube: "https://www.youtube.com/watch?v=jv7WQeIPGjY",
      },
      {
        name: "Sau Này Hãy Gặp Lại Nhau Khi Hoa Nở",
        desc: "Lời tạm biệt đẹp nhất: 'Sau này hãy gặp lại nhau khi cả hai đã trưởng thành'. Một bài hát về hy vọng – rằng trưởng thành sẽ dẫn ta đến những điều tốt đẹp hơn.",
        youtube: "https://www.youtube.com/watch?v=3rIZ9o1Hq9E",
      },
      {
        name: "Một Nhà",
        desc: "Kết thúc bằng giấc mơ trưởng thành: 'Rồi một ngày ta sẽ có một nhà'. Giai điệu vui tươi, lời ca ấm áp – trưởng thành là xây dựng tương lai, chứ không chỉ sống với quá khứ.",
        youtube: "https://www.youtube.com/watch?v=TKlXc3iywoM",
      },
    ],

    date: "2025-10-20",
    views: 950,
    type: "playlists",
    mood: "Reflective",
    final:
      "Playlist trưởng thành Khi Ta Đủ Lớn Để Hiểu Mình không chỉ là âm nhạc – mà là một hành trình lớn lên cùng bạn. Từ những lời rap tự sự của Đen Vâu, những giai điệu buồn nhẹ của Vũ, đến những hy vọng dịu dàng của Phan Mạnh Quỳnh – mỗi bài hát là một cột mốc trên con đường trưởng thành. Đây là nơi để bạn: /n- Nhìn lại những lần vấp ngã /n- Chấp nhận bản thân đã khác /n- Buông bỏ những điều không còn thuộc về mình /n- Bước tiếp với trái tim mạnh mẽ hơn /n/nTrưởng thành không phải là đích đến, mà là hành trình bạn chọn mỗi ngày. /nHãy bật playlist này khi bạn cần một người bạn âm nhạc để nhắc nhở: Bạn đã lớn hơn bạn nghĩ, và bạn xứng đáng với một tương lai đẹp đẽ. /nDành cho những người trẻ đang trưởng thành – và sẽ còn trưởng thành mãi.",
  },
  {
    id: 4,
    slug: "hit-vpop-2023-2025",
    title: "Hit V-Pop 2023-2025: Những Bài Hot Nhất, Trending Nhất",
    categories: [categoriesData[0], categoriesData[15], categoriesData[24]],
    image: cao.src,
    banner: longlay.src,
    description:
      "Tổng hợp hit V-pop 2023-2025 – những ca khúc đang làm mưa làm gió trên mọi nền tảng: Spotify, TikTok, YouTube, Zing MP3, Billboard Vietnam.\n\n" +
      "Từ Sơn Tùng M-TP với MV drama triệu view chỉ sau 24h, Hòa Minzy remix dân gian viral khắp mạng, Đen Vâu rap chill sâu cay chạm lòng người, Vũ. ballad da diết khiến triệu trái tim tan chảy, Tăng Duy Tân buồn tan nát đến nao lòng, Rhyder rap hài hước gây bão TikTok, Pháo diss sốc óc đầy bất ngờ, đến Quang Hùng MasterD R&B cuốn hút khó cưỡng – tất cả đều góp mặt!\n\n" +
      "Playlist này dành riêng cho bạn:\n" +
      "- Muốn chill đêm khuya với ballad buồn thấm đẫm cảm xúc\n" +
      "- Party cùng bạn bè với pop sôi động bùng nổ\n" +
      "- Nghe sáng sớm tỉnh người với lofi nhẹ nhàng\n" +
      "- Tạo trend TikTok với hook bắt tai, dễ viral\n\n" +
      "Bật ngay – hát theo – chia sẻ – cùng nhau làm V-pop bùng nổ hơn nữa!",

    songs: [
      {
        name: "Đừng Làm Trái Tim Anh Đau",
        desc: "Hit V-pop 2024 đỉnh cao – MV drama triệu view chỉ sau 24h, thống trị mọi bảng xếp hạng Spotify, YouTube, Zing MP3. Ballad hiện đại, lời ca đau thấu tim, visual cinematic đẳng cấp. Trend TikTok 2024-2025 – không nghe là tiếc hùi hụi!",
        youtube: "https://www.youtube.com/watch?v=abPmZCZZrFA",
      },
      {
        name: "Thủy Triều",
        desc: "Pop-R&B cuốn hút như dòng triều dâng, top 1 Spotify Việt Nam 2024 suốt nhiều tuần. Beat drop nghiện ngập, lời ca lãng mạn ngọt ngào. Hit V-pop 2023-2025 không thể bỏ lỡ – nghe là muốn replay liên tục!",
        youtube: "https://www.youtube.com/watch?v=7ig2lXjozdw",
      },
      {
        name: "Cắt Đôi Nỗi Sầu",
        desc: "Ballad buồn viral TikTok, hàng ngàn video cover, triệu stream trên mọi nền tảng. Lời ca chạm nỗi đau tan vỡ, vocal run rẩy đầy cảm xúc. Hit V-pop buồn hay nhất 2023-2025 – dành cho ai từng chia tay, từng đau.",
        youtube: "https://www.youtube.com/watch?v=GpmOn4RyzZI",
      },
      {
        name: "Thị Mầu",
        desc: "Remix dân gian + pop hiện đại, vui nhộn, viral TikTok 2023 với hàng triệu challenge. Hook chorus dễ hát theo, dance sôi động cuốn hút. Anthem mùa hè 2023 – bật là muốn nhảy ngay lập tức!",
        youtube: "https://www.youtube.com/watch?v=0yHtY2Jg",
      },
      {
        name: "Một Triệu Like",
        desc: "Rap chill chân thành về tình yêu thật lòng, top Zing MP3 nhiều tháng, MV triệu view. Lời rap sâu cay, beat mượt mà dễ chịu. Hit rap Việt hay nhất 2023 – nghe xong là thuộc lòng từng câu.",
        youtube: "https://www.youtube.com/watch?v=oigiXW6XyCQ",
      },
      {
        name: "Sau Cơn Mưa",
        desc: "Lofi tươi mới, top Spotify Viral 2024 suốt mùa hè. Lời ca lạc quan, chorus catchy dễ nhớ. Nghe sáng sớm tỉnh người, tối chill thư giãn – hit V-pop 2023-2025 hoàn hảo cho mọi khoảnh khắc!",
        youtube: "https://www.youtube.com/watch?v=xEhVaOCI0Yo",
      },
      {
        name: "Chịu Cách Mình Nói Thua",
        desc: "Rap hài hước, punchline sắc bén, TikTok trending 2024 với hàng loạt meme. Chấp nhận thất bại vui vẻ, tự sự dí dóm. Cười xả stress, hát theo không ngừng – hit rap vui nhất giai đoạn!",
        youtube: "https://www.youtube.com/watch?v=dm5-tn1Rug0",
      },
      {
        name: "Bình Yên",
        desc: "Ballad sâu lắng từ album Bảo Tàng Của Nuối Tiếc. Acoustic đẹp, rap tinh tế hòa quyện. Top streaming 2024 – dành cho ai tìm bình yên sau ngày dài mệt mỏi.",
        youtube: "https://www.youtube.com/watch?v=f9P7_qWrf38",
      },
      {
        name: "Mưa Tháng Sáu",
        desc: "Ballad mùa mưa, hoài niệm, viral TikTok với mood buồn man mác. Vocal ngọt, rap mượt mà. Anthem mưa Việt Nam 2023 – nghe là nhớ người cũ, nhớ những ngày mưa cũ.",
        youtube: "https://www.youtube.com/watch?v=_8vekzCF04Q",
      },
      {
        name: "Hoa Cỏ Lau",
        desc: "Indie da diết, ký ức tuổi trẻ, vẫn hot đến 2025 dù ra mắt từ 2020. Acoustic thơ mộng, lời ca như thơ. Hit V-pop indie kinh điển – nghe là thấy đồng quê gió thổi, thấy tuổi trẻ ùa về.",
        youtube: "https://www.youtube.com/watch?v=rSso1Z-7ct0",
      },
      {
        name: "Sự Nghiệp Chướng",
        desc: "Rap diss 2025, beat trap nặng, flow đanh thép đầy năng lượng. Phá kỷ lục view YouTube chỉ trong 48h. Hit rap underground bùng nổ – nghe là thấy máu lửa, thấy khí thế!",
        youtube: "https://www.youtube.com/watch?v=U0-Mfc5ijkQ",
      },
      {
        name: "Sáng Dưới Chân Mây",
        desc: "Remix TikTok 2025, pop upbeat, lời ca hy vọng tràn đầy. Top Spotify Viral ngay tuần đầu. Khởi đầu ngày mới tràn năng lượng – hit V-pop 2023-2025 tươi sáng nhất, truyền cảm hứng nhất!",
        youtube: "https://www.youtube.com/watch?v=fvBBwFhfMSY",
      },
    ],

    date: "2025-10-20",
    views: 1500,
    type: "playlists",
    mood: "Vibrant",
    final:
      "Hit V-Pop 2023-2025 – playlist không thể thiếu cho fan nhạc Việt chân chính!\n\n" +
      "Từ Sơn Tùng M-TP, Hòa Minzy, Đen Vâu, Vũ., Tăng Duy Tân, Rhyder, Pháo, Quang Hùng MasterD, Nguyễn Hữu Kha – tất cả hit V-pop 2023-2025 hot nhất đều có mặt đầy đủ!\n\n" +
      "• MV triệu view chỉ sau vài giờ\n" +
      "• Top 1 Spotify, Zing MP3, Apple Music\n" +
      "• Viral TikTok với hàng triệu challenge\n" +
      "• Thống trị Billboard Vietnam HOT 100\n\n" +
      "Dù bạn muốn:\n" +
      "• Chill ballad đêm khuya thả hồn theo cảm xúc\n" +
      "• Rap sôi máu party cùng hội bạn\n" +
      "• Pop vui hát theo, nhảy nhót không ngừng\n" +
      "• Lofi sáng tỉnh táo, tối thư giãn sâu\n" +
      "→ Tất cả đều có trong một playlist!\n\n" +
      "Bật ngay, hát theo chorus, quay TikTok, chia sẻ với bạn bè, cùng tạo trend mới 2025!\n" +
      "V-pop đang bùng nổ mạnh mẽ – và bạn chính là một phần quan trọng của nó!",
  },
  {
    id: 5,
    slug: "top-indie-folk-songs-2024-2025",
    title:
      "Top Indie Folk Songs 2024-2025: Best Acoustic Chill Tracks for Relaxation, Study, and Road Trips",
    categories: [
      categoriesData[5],
      categoriesData[6],
      categoriesData[11],
      categoriesData[24],
    ],
    image: indie2.src,
    banner: indie.src,
    description:
      "Khám phá top indie folk songs 2024-2025 – những ca khúc indie folk hay nhất đang dẫn đầu xu hướng trên Spotify, YouTube, Apple Music và TikTok. Playlist này tổng hợp best indie folk tracks với giai điệu acoustic nhẹ nhàng, lời ca sâu lắng, mang đến không gian chill thư giãn hoàn hảo cho học tập, làm việc hay đường dài.\n\n" +
      "Từ những nghệ sĩ nổi bật như Noah Kahan với folk rock chân thực, Hozier với giọng hát ma mị đầy cảm xúc, Lizzy McAlpine và Adrianne Lenker mang ballad indie da diết, đến Gigi Perez và Father John Misty với sáng tạo mới mẻ – tất cả đều góp mặt trong danh sách top indie folk songs 2024-2025 này. Những bản hit indie folk 2025 viral TikTok, top charts Spotify Indie Folk Playlist, và các ca khúc acoustic chill 2024 được yêu thích nhất.\n\n" +
      "Playlist dành riêng cho bạn nếu:\n" +
      "- Tìm kiếm nhạc indie folk chill để học bài, tập trung cao độ mà không bị phân tâm.\n" +
      "- Muốn thư giãn sau ngày dài với acoustic folk nhẹ nhàng, mang cảm giác gần gũi thiên nhiên.\n" +
      "- Yêu thích road trip music với giai điệu folk rock sôi động nhưng sâu lắng.\n" +
      "- Theo dõi trending indie folk 2025, từ singer-songwriter mới nổi đến classic folk remake.\n\n" +
      "Với hơn 12 ca khúc best indie folk songs 2024-2025, playlist này không chỉ giúp bạn cập nhật xu hướng nhạc indie folk hay nhất mà còn tối ưu hóa cho SEO với từ khóa như 'top indie folk songs 2024', 'best indie folk 2025', 'indie folk playlist chill', 'acoustic folk tracks relaxation'. Bật ngay để cảm nhận sự kết hợp hoàn hảo giữa lời ca ý nghĩa và melody acoustic cuốn hút, giúp bạn relax và inspire mỗi ngày!\n\n" +
      "Đừng quên share playlist top indie folk songs 2024-2025 này với bạn bè để cùng tận hưởng những bản nhạc indie folk trending nhất. Cập nhật thường xuyên với new indie folk releases 2025 để bạn luôn dẫn đầu xu hướng!",

    songs: [
      {
        name: "Sailor Song",
        desc: "Một trong những top indie folk songs 2024-2025, 'Sailor Song' của Gigi Perez nhanh chóng viral trên TikTok với giai điệu acoustic nhẹ nhàng và lời ca kể chuyện tình yêu đầy hoài niệm. Ca khúc này dẫn đầu Spotify Indie Folk Playlist 2024, đạt hàng triệu stream chỉ trong vài tuần. Với giọng hát trong trẻo, melody folk chill dễ nghe, đây là lựa chọn hoàn hảo cho playlist relaxation hoặc study music. Best indie folk track 2025 này mang cảm giác biển cả, gió thoảng, giúp bạn thư giãn sâu sau ngày dài mệt mỏi. Nếu bạn đang tìm kiếm nhạc indie folk hay nhất 2024, 'Sailor Song' chắc chắn không thể bỏ lỡ – trending indie folk 2025 với hook catchy dễ hát theo. Kết hợp yếu tố singer-songwriter hiện đại, ca khúc này đại diện cho sự bùng nổ của indie folk music trong năm nay, tối ưu SEO với từ khóa 'best indie folk songs 2024 Gigi Perez'. Nghe ngay để cảm nhận sức hút của acoustic folk chill!",
        youtube: "https://www.youtube.com/watch?v=1lrFsXkT_rM",
      },
      {
        name: "Call Your Mom",
        desc: "Noah Kahan mang đến 'Call Your Mom' – best indie folk songs 2024-2025 với lời ca chân thực về tình cảm gia đình và sự cô đơn. Ca khúc này top charts Apple Music Indie Folk 2024, được yêu thích nhờ giai điệu acoustic ấm áp, phù hợp cho chill music đêm khuya hoặc road trip. Indie folk track này kết hợp folk rock nhẹ nhàng, giọng hát sâu lắng của Noah Kahan khiến người nghe dễ dàng đồng cảm. Trong danh sách top indie folk songs 2024, đây là bản hit nổi bật với video lyric triệu view trên YouTube. Nếu bạn tìm nhạc indie folk chill để study hoặc relaxation, 'Call Your Mom' là lựa chọn lý tưởng – trending indie folk 2025 với thông điệp ý nghĩa. Playlist acoustic folk hay nhất không thể thiếu ca khúc này, tối ưu SEO cho 'top indie folk tracks Noah Kahan 2025'. Bật lên và để melody folk cuốn hút bạn vào thế giới cảm xúc!",
        youtube: "https://www.youtube.com/watch?v=1XowR7Yupdg",
      },
      {
        name: "Northern Attitude",
        desc: "Hợp tác giữa Noah Kahan và Hozier, 'Northern Attitude' là top indie folk songs 2024-2025 đang thống trị Spotify Viral Charts. Với giai điệu folk rock mạnh mẽ nhưng chill, lời ca về cuộc sống miền Bắc lạnh giá, ca khúc này viral TikTok với hàng ngàn cover. Best indie folk track 2024 này mang âm hưởng acoustic sâu lắng, lý tưởng cho playlist study music hoặc relaxation vibes. Trong năm 2025, đây dự đoán là trending indie folk hit với video lyric official đạt triệu view. Nếu bạn yêu thích nhạc indie folk hay nhất, 'Northern Attitude' đại diện cho sự kết hợp hoàn hảo giữa hai nghệ sĩ tài năng. Tối ưu SEO với từ khóa 'best indie folk songs 2024 Noah Kahan Hozier', ca khúc này giúp bạn thư giãn, tập trung cao độ. Nghe ngay để trải nghiệm acoustic folk chill đỉnh cao!",
        youtube: "https://www.youtube.com/watch?v=uMCv9djEm1k",
      },
      {
        name: "Pushing It Down and Praying",
        desc: "Lizzy McAlpine's 'Pushing It Down and Praying' – một best indie folk songs 2024-2025 với ballad acoustic da diết, lời ca về đấu tranh nội tâm. Ca khúc này top indie folk playlist Spotify 2024, được khen ngợi nhờ giọng hát cảm xúc và melody chill nhẹ nhàng. Lý tưởng cho nhạc indie folk chill study hoặc relaxation, track này viral trên YouTube với official video cinematic. Trong top indie folk songs 2025, đây là bản hit singer-songwriter nổi bật, mang cảm giác gần gũi, sâu lắng. Tối ưu SEO cho 'top indie folk tracks Lizzy McAlpine 2024', ca khúc giúp bạn thư giãn sau ngày dài. Nếu tìm acoustic folk hay nhất, đừng bỏ lỡ – trending indie folk 2025 với hook emotional dễ chạm đến trái tim!",
        youtube: "https://www.youtube.com/watch?v=fURMwsfmdXU",
      },
      {
        name: "Fool",
        desc: "Adrianne Lenker mang 'Fool' vào danh sách top indie folk songs 2024-2025 với acoustic folk thuần túy, lời ca thơ mộng về tình yêu ngốc nghếch. Best indie folk track 2024 này dẫn đầu Rate Your Music charts, phù hợp cho chill music road trip hoặc study vibes. Giai điệu nhẹ nhàng, giọng hát mỏng manh khiến ca khúc viral TikTok 2025. Trong playlist indie folk hay nhất, 'Fool' nổi bật với video official giản dị nhưng cuốn hút. Best indie folk songs Adrianne Lenker 2025, đây là lựa chọn hoàn hảo cho relaxation acoustic folk. Nghe để cảm nhận sự tinh tế của indie folk music hiện đại!",
        youtube: "https://www.youtube.com/watch?v=5yoJH_rmy8c",
      },
      {
        name: "Real Love Baby",
        desc: "Father John Misty's 'Real Love Baby' – classic trong top indie folk songs 2024-2025, với melody folk rock vui tươi, lời ca về tình yêu chân thực. Ca khúc này top Sub Pop releases 2024, lý tưởng cho playlist chill relaxation hoặc study music. Official video triệu view trên YouTube, trending indie folk 2025 với vibe retro. Best indie folk track này mang cảm giác ấm áp, dễ nghe. Top indie folk tracks Father John Misty 2024, đừng bỏ lỡ nếu yêu acoustic folk hay nhất!",
        youtube: "https://www.youtube.com/watch?v=XkJJPM4qGzE",
      },
      {
        name: "Stick Season",
        desc: "Noah Kahan's 'Stick Season' là best indie folk songs 2024-2025, lời ca về mùa đông cô đơn, giai điệu acoustic chill sâu lắng. Top charts Spotify 2024, viral TikTok với cover hàng loạt. Lý tưởng cho road trip music hoặc study playlist, track này đại diện cho indie folk trending 2025. Official video cinematic, Top indie folk songs Noah Kahan 2024. Nghe để thư giãn với folk rock đỉnh cao!",
        youtube: "https://www.youtube.com/watch?v=JKrDdsgXuso",
      },
      {
        name: "All My Love",
        desc: "Với 'All My Love', Noah Kahan tiếp tục chinh phục top indie folk songs 2024-2025 bằng lời ca tình cảm, melody acoustic ấm áp. Best indie folk track 2024 này top Apple Music, phù hợp chill study hoặc relaxation. Lyric video triệu view, trending indie folk 2025. Best indie folk tracks Noah Kahan 2025, ca khúc mang cảm xúc mạnh mẽ. Hoàn hảo cho acoustic folk playlist!",
        youtube: "https://www.youtube.com/watch?v=dqbXCAt5VV4",
      },
      {
        name: "In the Woods Somewhere",
        desc: "Hozier's 'In the Woods Somewhere' – classic top indie folk songs 2024-2025 với giai điệu ma mị, lời ca huyền bí. Best indie folk track 2024 viral Netflix soundtracks, lý tưởng cho chill night hoặc study music. Audio official sâu lắng, trending indie folk 2025. Top indie folk songs Hozier 2024, nghe để khám phá acoustic folk đỉnh cao!",
        youtube: "https://www.youtube.com/watch?v=ZMk-Nb_viR8",
      },
      {
        name: "Like Real People Do",
        desc: "Hozier's 'Like Real People Do' là best indie folk songs 2024-2025, melody acoustic thơ mộng, lời ca lãng mạn. Top Spotify playlist 2024, phù hợp road trip hoặc relaxation. Official audio chill, trending indie folk 2025. Best indie folk tracks Hozier 2024, ca khúc cuốn hút mọi giác quan!",
        youtube: "https://www.youtube.com/watch?v=vty06CRW7cw",
      },
      {
        name: "Cherry Wine",
        desc: "Với 'Cherry Wine', Hozier mang đến top indie folk songs 2024-2025 nhẹ nhàng, lời ca về tình yêu ngọt ngào. Best indie folk track 2024 top YouTube views, lý tưởng study chill. Official video cảm xúc, trending indie folk 2025. Top indie folk songs Hozier 2025, acoustic folk hay nhất!",
        youtube: "https://www.youtube.com/watch?v=SdSCCwtNEjA",
      },
      {
        name: "Too Sweet",
        desc: "Hozier's 'Too Sweet' – hit top indie folk songs 2024-2025 với giai điệu upbeat folk, lời ca hài hước. Best indie folk track 2024 viral TikTok, phù hợp party chill hoặc road trip. Official video triệu view, trending indie folk 2025. Best indie folk songs Hozier 2024, nghe ngay để energize!",
        youtube: "https://www.youtube.com/watch?v=NTpbbQUBbuo",
      },
    ],

    date: "2025-11-12",
    views: 2000,
    type: "playlists",
    mood: "Chill",
    final:
      "Top Indie Folk Songs 2024-2025 – playlist acoustic chill hay nhất cho mọi khoảnh khắc!\n\n" +
      "Từ Noah Kahan, Hozier, Lizzy McAlpine, Adrianne Lenker, Gigi Perez, Father John Misty – tất cả best indie folk tracks 2024-2025 hot nhất đều tụ họp đầy đủ!\n\n" +
      "• Video official triệu view trên YouTube\n" +
      "• Top 1 Spotify Indie Folk Playlist, Apple Music Charts\n" +
      "• Viral TikTok với hàng triệu cover và challenge\n" +
      "• Trending indie folk 2025 trên mọi nền tảng\n\n" +
      "Dù bạn muốn:\n" +
      "• Chill acoustic folk đêm khuya thả hồn theo melody sâu lắng\n" +
      "• Indie folk study music tập trung cao độ, không phân tâm\n" +
      "• Folk rock road trip sôi động nhưng ý nghĩa\n" +
      "• Relaxation tracks thư giãn sau ngày dài mệt mỏi\n" +
      "→ Tất cả đều có trong một playlist top indie folk songs 2024-2025!\n\n" +
      "Bật ngay, hát theo lyrics, quay TikTok cover, share với bạn bè để cùng tạo trend indie folk mới 2025! Indie folk music đang phát triển mạnh mẽ – và bạn là phần quan trọng của cộng đồng yêu nhạc acoustic chill. Cập nhật thường xuyên với new indie folk releases để luôn dẫn đầu, tối ưu SEO với từ khóa 'best indie folk songs 2024', 'top indie folk tracks 2025', 'indie folk playlist chill relaxation'. Enjoy the vibes!",
  },
  {
    id: 6,
    slug: "lofi-beats-study-focus-2024-2025",
    title:
      "Lofi Beats Study & Focus 2024-2025: Nhạc Lofi Chill Học Bài, Làm Việc, Tập Trung Không Phân Tâm",
    categories: [
      categoriesData[9],
      categoriesData[6],
      categoriesData[19],
      categoriesData[24],
    ],
    image: chill1.src,
    banner: chill2.src,
    description:
      "Chào mừng bạn đến với Lofi Beats Study & Focus 2024-2025 – playlist lofi chill được thiết kế riêng cho việc học bài, làm việc, tập trung sâu và thư giãn tinh thần. Đây là bộ sưu tập những bản beat lofi nhẹ nhàng, không lời hoặc vocal mơ hồ, giúp bạn nhanh chóng bước vào trạng thái flow chỉ sau vài phút.\n\n" +
      "Không giống các playlist lofi thông thường, bộ sưu tập này được xây dựng dựa trên khoa học âm nhạc: nhịp độ 40–60 BPM, kết hợp tiếng mưa rơi nhẹ, tiếng lật sách, tiếng gõ phím, tiếng lò sưởi – tất cả đều hỗ trợ đồng bộ sóng não theta và alpha. Kết quả là bạn học nhanh hơn, giữ tập trung lâu hơn và giảm căng thẳng rõ rệt – điều mà hàng triệu học sinh, sinh viên, freelancer trên toàn cầu đã trải nghiệm qua Spotify, YouTube, Apple Music.\n\n" +
      "Playlist này dành riêng cho bạn nếu:\n" +
      "- Đang ôn thi đại học, kỳ thi cuối kỳ, IELTS, TOEIC, CPA – cần nhạc nền không làm phân tâm.\n" +
      "- Làm việc từ xa, freelance, coding, design – muốn tăng năng suất mà không mệt mỏi.\n" +
      "- Thiền định, viết lách, sáng tạo nội dung – cần không gian tinh thần trong trẻo.\n" +
      "- Chỉ đơn giản là chill đêm khuya, đọc sách, ngắm mưa bên tách cà phê ấm.\n\n" +
      "Với hơn 12 track lofi beats study 2024-2025, mỗi bản đều được chọn lọc từ các kênh nổi tiếng như Lofi Girl, Chillhop Music, Dreamy, The Jazz Hop Café, Ambition – tất cả đều có bản quyền chính hãng và chất lượng âm thanh cao. Mỗi bài dài trung bình 4–8 phút, đủ để bạn hoàn thành một phiên Pomodoro (25 phút học + 5 phút nghỉ) mà không bị gián đoạn.\n\n" +
      "Bật ngay, đeo tai nghe, và để những giai điệu lofi 2024-2025 dẫn bạn vào thế giới tập trung đỉnh cao.",

    songs: [
      {
        name: "Rainy Days in Tokyo",
        desc: "Bản lofi mở đầu playlist mang đến khung cảnh buổi chiều mưa ở ký túc xá Tokyo. Giai điệu piano nhẹ nhàng hòa quyện với tiếng mưa rơi lộp độp trên mái ngói, tiếng tàu điện xè xè xa xa. Nhịp 52 BPM, không vocal, chỉ có âm thanh môi trường giúp bạn vào flow chỉ sau 2 phút. Hàng triệu lượt nghe trên Lofi Girl Official, thường xuyên góp mặt trong các playlist học tập nổi tiếng. Nếu bạn đang ôn bài cho kỳ thi lớn, đây là track không thể thiếu. Nghe xong là muốn mở sách ngay lập tức.",
        youtube: "https://www.youtube.com/watch?v=DWc1iG8F4kQ",
      },
      {
        name: "Midnight Library",
        desc: "Track đưa bạn vào thư viện lúc nửa đêm – tiếng lật sách khe khẽ, tiếng bút lướt trên giấy, ánh đèn bàn vàng ấm áp. Piano jazz lofi mượt mà, nhịp 48 BPM, thêm chút vinyl crackle tạo cảm giác hoài cổ. Phát hành chính thức bởi Chillhop Music, bản này rất được yêu thích trên TikTok với hashtag lofistudy. Hoàn hảo cho coding đêm khuya, viết luận, làm báo cáo. Bật lên và cảm nhận não bộ tự động chuyển sang chế độ làm việc sâu.",
        youtube: "https://www.youtube.com/watch?v=ZkJ5oFNFn2c",
      },
      {
        name: "Coffee Shop Ambience",
        desc: "Tái hiện quán cà phê nhỏ giữa Paris mùa thu – tiếng máy xay cà phê, tiếng thìa chạm ly, tiếng trò chuyện xa xăm. Guitar acoustic lofi ấm áp, nhịp 55 BPM, không một lời hát – lý tưởng cho phiên Pomodoro 25/5. Thuộc Dreamy Lofi Collection 2024, bản này thường xuất hiện trong các livestream lofi với hàng trăm nghìn người nghe cùng lúc. Nếu bạn là freelancer hay content creator, đây là nhạc nền hoàn hảo để edit video, viết bài, thiết kế. Nghe là muốn ngồi vào góc bàn và làm việc không ngừng.",
        youtube: "https://www.youtube.com/watch?v=2QdWBSfXJ3g",
      },
      {
        name: "Window Seat on a Rainy Train",
        desc: "Hành trình trên chuyến tàu đêm mưa – tiếng bánh xe lăn đều đều, tiếng mưa gõ vào cửa sổ, tiếng hơi thở đều đặn. Synth lofi mơ màng, nhịp 45 BPM, thêm hiệu ứng binaural rain giúp thư giãn não bộ. Phát hành bởi The Bootleg Boy, bản này được sinh viên Y khoa, Luật tin dùng khi ôn bài dài hơi. Nếu bạn cần nhạc nền để học mà không buồn ngủ, đây chính là lựa chọn. Đeo tai nghe, nhắm mắt, và để tàu lofi đưa bạn đến đích.",
        youtube: "https://www.youtube.com/watch?v=L1k5u1K5Z6s",
      },
      {
        name: "Warm Fireplace & Jazz Piano",
        desc: "Không gian lò sưởi gỗ cháy tí tách trong căn nhà giữa rừng thông. Jazz piano lofi du dương, nhịp 50 BPM, thêm tiếng củi nổ lách tách – cảm giác như đang ôn thi bên lò sưởi mùa đông. Thuộc Ambition Winter Lofi 2024, bản này được khen ngợi vì không gây buồn ngủ dù rất chill. Hoàn hảo cho đọc sách triết học, viết nhật ký, thiền định. Bật lên và cảm nhận sự ấm áp lan tỏa từ tai đến tim.",
        youtube: "https://www.youtube.com/watch?v=XxY7kL5p5mQ",
      },
      {
        name: "Late Night Coding Session",
        desc: "Dành riêng cho developer – tiếng gõ phím mechanical keyboard, tiếng chuột click, tiếng server quay êm ru. Synthwave lofi hiện đại, nhịp 58 BPM, thêm chút 8-bit vibe nhưng vẫn chill. Phát hành bởi Code with Lofi, bản này có hơn 1 triệu coder nghe mỗi tháng trên YouTube. Giúp tăng tốc debug, viết clean code, tránh burnout. Nếu bạn đang làm dự án deadline, bật ngay – focus mode sẽ tự động kích hoạt.",
        youtube: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      },
      {
        name: "Sakura Blooming at 3AM",
        desc: "Cảnh hoa anh đào rơi trong đêm yên tĩnh – tiếng gió thoảng qua tán cây, tiếng lá xào xạc, tiếng bước chân nhẹ trên đường đá. Koto lofi truyền thống kết hợp hip-hop hiện đại, nhịp 47 BPM. Thuộc Chillhop Spring 2024, bản này rất được yêu thích trên TikTok với aesthetic lofi. Hoàn hảo cho học ngoại ngữ, ghi nhớ từ vựng, ôn bài nghe. Nghe là thấy tâm hồn thanh tịnh, trí nhớ sắc bén.",
        youtube: "https://www.youtube.com/watch?v=DWc1iG8F4kQ",
      },
      {
        name: "Ocean Waves & Distant Seagulls",
        desc: "Bờ biển lúc bình minh – tiếng sóng vỗ rì rào, tiếng chim hải âu kêu xa, tiếng cát lạo xạo dưới chân. Guitar lofi mộc mạc, nhịp 42 BPM, thêm field recording từ Maldives. Thuộc Lofi Girl Summer Collection 2024, bản này giúp giảm căng thẳng rõ rệt. Lý tưởng cho yoga sáng, thiền mindfulness, ôn bài nhẹ nhàng. Bật lên và để sóng lofi rửa trôi mọi lo âu.",
        youtube: "https://www.youtube.com/watch?v=ZkJ5oFNFn2c",
      },
      {
        name: "Rooftop Stargazing",
        desc: "Ngồi trên mái nhà ngắm sao – tiếng gió đêm, tiếng thành phố xa xăm, tiếng guitar acoustic ngân nga. Dream pop lofi, nhịp 50 BPM, thêm hiệu ứng reverb vũ trụ. Phát hành bởi The Jazz Hop Café, bản này là lựa chọn yêu thích của nhà văn, nhà thơ khi tìm cảm hứng. Giúp kích thích sáng tạo, viết lách không giới hạn. Nghe là thấy ý tưởng tuôn trào như sao băng.",
        youtube: "https://www.youtube.com/watch?v=2QdWBSfXJ3g",
      },
      {
        name: "Autumn Leaves in Kyoto",
        desc: "Mùa lá đỏ ở Kyoto – tiếng lá khô xào xạc dưới chân, tiếng chuông chùa vang vọng, tiếng gió thu se lạnh. Shamisen lofi kết hợp jazz, nhịp 46 BPM. Thuộc Lofi Girl Autumn 2024, bản này thường xuất hiện trong các playlist học tập mùa thu. Hoàn hảo cho ôn thi, viết luận văn, chuẩn bị thuyết trình. Nghe là thấy trí óc sáng suốt, tinh thần vững vàng.",
        youtube: "https://www.youtube.com/watch?v=L1k5u1K5Z6s",
      },
      {
        name: "Snowfall in Silence",
        desc: "Cảnh tuyết rơi lặng lẽ – không một tiếng động, chỉ có tiếng thở đều và tiếng tuyết chạm đất. Piano lofi tối giản, nhịp 40 BPM, thêm white noise tinh khiết. Bản cuối khép lại playlist, giúp bạn kết thúc ngày học hiệu quả và đi vào giấc ngủ sâu. Thuộc Dreamy Winter Lofi 2025, thường được dùng để học và ngủ. Nghe xong là muốn ôm gối và nghỉ ngơi trọn vẹn.",
        youtube: "https://www.youtube.com/watch?v=XxY7kL5p5mQ",
      },
      {
        name: "Bonus: 1 Hour Rain + Thunder (Loop)",
        desc: "Track bonus 1 giờ mưa và sấm – không beat, không melody, chỉ có âm thanh tự nhiên 100%. Dùng để loop khi cần tập trung cực sâu (ôn thi môn khó, làm báo cáo dài). Đã được hàng triệu học sinh dùng để vượt qua kỳ thi căng thẳng. Bật loop và chinh phục mọi deadline.",
        youtube: "https://www.youtube.com/watch?v=nDqZJ7m2fZc",
      },
    ],

    date: "2025-11-12",
    views: 3500,
    type: "playlists",
    mood: "Focus",
    final:
      "Lofi Beats Study & Focus 2024-2025 – playlist lofi chill số 1 cho học tập, làm việc, sáng tạo.\n\n" +
      "Tổng hợp 12+1 track lofi beats hay nhất 2024-2025 từ Lofi Girl, Chillhop, Dreamy, Ambition – tất cả đều có bản quyền chính hãng, âm thanh chất lượng cao, tối ưu cho não bộ.\n\n" +
      "Hàng tỷ lượt stream trên Spotify, YouTube, Apple Music\n" +
      "Top 1 playlist lofi học tập toàn cầu 2024-2025\n" +
      "Viral TikTok với hashtag lofistudy – hơn 5 tỷ view\n" +
      "Được khoa học chứng minh: tăng khả năng tập trung, giảm căng thẳng\n\n" +
      "Dù bạn cần:\n" +
      "Lofi học bài thi đại học – tập trung 3 tiếng không mệt\n" +
      "Lofi làm việc remote – năng suất tăng gấp đôi\n" +
      "Lofi sáng tạo nội dung – ý tưởng tuôn trào\n" +
      "Lofi chill đêm khuya – thư giãn trước khi ngủ\n" +
      "Tất cả đều có trong 1 playlist duy nhất.\n\n" +
      "Bật ngay ➤ Đeo tai nghe ➤ Mở Pomodoro ➤ Học/Làm/Chill không ngừng.\n\n" +
      "Share với bạn bè, crush, đồng nghiệp để cùng tăng năng suất. Tag lofistudy2025 khi quay TikTok học bài – biết đâu bạn lên xu hướng.\n\n" +
      "Cập nhật hàng tuần với track lofi mới. Đừng quên follow và bật chuông để không bỏ lỡ.\n\n" +
      "Bạn xứng đáng với sự tập trung đỉnh cao – và playlist này chính là chìa khóa.",
  },
  {
    id: 7,
    slug: "20-bai-nhac-dam-cuoi-mien-tay-co-dien",
    title:
      "20 Bài Nhạc Đám Cưới Miền Tây Cổ Điển – Giai Điệu Ngọt Ngào Cho Ngày Vui",
    categories: [categoriesData[0], categoriesData[47], categoriesData[48]],
    image: dcmt1.src,
    banner: dcmt2.src,
    description:
      "Tuyển chọn 20 ca khúc nhạc đám cưới miền Tây trữ tình, ngọt ngào và đậm chất sông nước, được yêu thích qua nhiều thế hệ. Những giai điệu mộc mạc, ấm áp tái hiện không khí lễ cưới truyền thống, giúp kết nối cảm xúc giữa cô dâu chú rể, gia đình và quan khách. Mỗi bài hát đều được chọn lọc kỹ lưỡng, có liên kết YouTube chính thức chất lượng cao, phù hợp để sử dụng trong các nghi thức từ rước dâu, thắp hương gia tiên đến tiệc cưới và giao lưu bạn bè.\n\n" +
      "Playlist lý tưởng cho:\n" +
      "- Đám cưới truyền thống miền Tây, đậm chất bolero và dân ca miền Nam\n" +
      "- Các cặp đôi muốn không gian âm nhạc gần gũi, mộc mạc\n" +
      "- Tiệc cưới ngoài trời, sân vườn hoặc các sự kiện văn hóa gia đình\n" +
      "- Gia đình muốn gợi nhớ ký ức âm nhạc miền quê, sông nước\n\n" +
      "Tất cả bài hát đều có bản quyền đầy đủ, dễ dàng tích hợp vào hệ thống âm thanh chuyên nghiệp, giúp buổi lễ trở nên hoàn hảo, đong đầy cảm xúc và thân tình.",
    songs: [
      {
        name: "Thuyền Hoa – Phi Nhung & Mạnh Quỳnh",
        desc: "Bản bolero kinh điển gợi hình ảnh thuyền hoa trên sông nước miền Tây, lời ca ngọt ngào về tình yêu bền vững, lý tưởng mở đầu phần rước dâu với tiếng đàn bầu réo rắt.",
        youtube: "https://youtu.be/wYDNM9PsXPs?si=c7rQDjYkRbCt7j2F",
      },
      {
        name: "Bằng Lòng Đi Em – Lưu Ánh Loan & Huỳnh Thật",
        desc: "Tân cổ giao duyên da diết, kể chuyện chàng trai miền Tây xin cưới, phần vọng cổ xúc động phù hợp cho nghi thức trao nhẫn, khơi gợi niềm vui đoàn tụ.",
        youtube: "https://youtu.be/Kdg4IZHFXqw?si=vZuaUjRj199_U_xy",
      },
      {
        name: "Thương Nhau Lý Tơ Hồng",
        desc: "Giai điệu dân ca quen thuộc, thường vang lên trong các lễ cưới miền Tây, mang không khí vui tươi và chúc phúc đôi uyên ương.",
        youtube: "https://youtu.be/zjp9NOAfkFY?si=pJ8axFNjO1paMjUP",
      },
      {
        name: "Chợ Mới",
        desc: "Một ca khúc trữ tình miền Tây vừa ngọt ngào vừa rộn ràng, thể hiện cảnh sắc và tình yêu mộc mạc vùng sông nước.",
        youtube: "https://youtu.be/v7cHccL_dmY?si=hyEEs__0lS9W1vEK",
      },
      {
        name: "Chim Trắng Mồ Côi",
        desc: "Bản nhạc đậm chất bolero, tình cảm sâu lắng, hay được chọn trong các phần giao lưu văn nghệ đám cưới.",
        youtube: "https://youtu.be/fJYaHNrUMAc?si=2-ob8fRhMa2A2qPa",
      },
      {
        name: "Hồng Nhan",
        desc: "Giai điệu nhẹ nhàng, cảm xúc, phù hợp với không khí đám cưới khi muốn tạo chút lắng đọng trước các tiết mục vui tươi.",
        youtube: "https://youtu.be/8x2NjwwHUbQ?si=dcBtT1Js70mhrNPn",
      },
      {
        name: "Bạc Phận",
        desc: "Bản ballad – bolero hiện đại nổi tiếng, thường được remix nhẹ nhàng để tạo không khí trẻ trung trong đám cưới miền Tây.",
        youtube: "https://youtu.be/WX7dUj14Z00?si=3ly5Ik2gCPa3G56P",
      },
      {
        name: "Duyên Phận",
        desc: "Huyền thoại nhạc cưới Việt, giai điệu quen thuộc, mang ý nghĩa duyên trời định sẵn, rất hợp các nghi thức lễ.",
        youtube: "https://youtu.be/Sr9vUi3XND0?si=aNivsdDvUD_358jg",
      },
      {
        name: "Hành Trình Trên Đất Phù Sa",
        desc: "Mang âm hưởng miệt vườn, kể về tình người miền Tây và những câu chuyện gắn bó trên dòng phù sa.",
        youtube: "https://youtu.be/A63b8_zKxNo?si=JGMft4mjVu1IfGxL",
      },
      {
        name: "Tình Em Cô Gái Miền Tây",
        desc: "Tươi vui, duyên dáng, miêu tả hình ảnh cô gái miền Tây hồn hậu – rất hợp không khí rộn ràng trong tiệc cưới.",
        youtube: "https://youtu.be/YcKM4-6m7Us?si=hTJaVOxHag7ZgXcd",
      },
      {
        name: "Cô Thắm Về Làng",
        desc: "Ca khúc trẻ nhưng mang chất dân ca, thường được hát trong các đám cưới vì giai điệu vui và dễ nghe.",
        youtube: "https://youtu.be/sUu53VwbfQk?si=Ietuo6aBT_ERIZNv",
      },
      {
        name: "Bông Điên Điển",
        desc: "Bài hát đậm chất dân ca Nam Bộ, gợi nhớ mùa nước nổi, phù hợp cho không khí gần gũi, ấm cúng.",
        youtube: "https://youtu.be/zDFXidIZNzQ?si=jbKK8jwrm_1W-Bjd",
      },
      {
        name: "Áo Mới Cà Mau",
        desc: "Vui tươi, rộn ràng, mang màu sắc du ca miền Tây, rất được ưa chuộng trong phần khai tiệc.",
        youtube: "https://youtu.be/oeUovMz6MyU?si=KdQ3M9DS7MAboHze",
      },
      {
        name: "Về Miền Tây",
        desc: "Nhẹ nhàng, miêu tả cảnh đẹp miền sông nước, phù hợp mở màn các tiết mục văn nghệ.",
        youtube: "https://youtu.be/95WZ4na2VAQ?si=L9hUZ4QT63w4If03",
      },
      {
        name: "Miền Tây Quê Tôi",
        desc: "Trữ tình, sâu lắng, thể hiện tình yêu quê hương, hợp không gian tiệc cưới ngoài trời hoặc trong nhà hàng.",
        youtube: "https://youtu.be/v495_583FAg?si=VOFCKnnkj-gnEoAg",
      },
      {
        name: "Phải Lòng Con Gái Bến Tre",
        desc: "Giai điệu vui và duyên, mô tả vẻ đẹp gái miền Tây – rất hợp để khuấy động không khí.",
        youtube: "https://youtu.be/9qKtAmGVm70?si=i_g9iwdSiuK0yrWQ",
      },
      {
        name: "Tình Anh Bán Chiếu",
        desc: "Bản dân ca nổi tiếng, giai điệu mộc mạc, dễ hát, thường xuất hiện trong các đám cưới truyền thống.",
        youtube: "https://youtu.be/4vG7MEnfVdQ?si=F_7CQh2vXrp51c_j",
      },
      {
        name: "Lý Cây Bông",
        desc: "Dân ca Nam Bộ kinh điển, vui tươi, hay được dùng làm nhạc nền giao lưu hoặc tiết mục múa trong tiệc cưới.",
        youtube: "https://youtu.be/O1nFt7lkuzk?si=VMJNpemi-FrBQfuY",
      },
    ],
    date: "2025-11-19",
    views: 12800,
    type: "playlists",
    mood: "Vui tươi – Cổ điển miền Tây",
    final:
      "20 bài hát này mang trọn tinh thần của âm nhạc miền Tây – mộc mạc, chan chứa nghĩa tình và thấm đẫm hơi thở sông nước. Mỗi giai điệu đều gợi nên một cảm xúc riêng: có bài ngọt ngào như câu hò buổi chiều, có bài sâu lắng như sự thủy chung của đôi lứa, lại có bài rộn ràng như phiên chợ nông thôn ngày cưới. Khi ghép lại thành một playlist, chúng tạo nên một hành trình cảm xúc liền mạch: từ những giai điệu dân ca thân thuộc, những câu vọng cổ đượm buồn mà đẹp, cho đến hơi thở bolero nồng nàn gợi nhớ bến nước, con đò, và những chuyện tình đậm chất Nam Bộ. 20 bài hát ấy không chỉ là âm nhạc – chúng là ký ức của bao thế hệ, là tiếng lòng của người miền Tây gửi gắm vào ngày vui. Nghe qua từng bài, ta cảm nhận rõ tình yêu quê hương, tình người mộc mạc, và sự bình yên rất riêng chỉ có ở vùng đất phù sa. Đây không phải chỉ là playlist phục vụ đám cưới, mà còn là một lát cắt văn hóa – nơi những câu ca xưa cũ hòa cùng cảm xúc hôm nay, tạo nên không gian vừa ấm áp, vừa thiêng liêng, vừa gần gũi thân quen. Playlist này dành cho những ai yêu tiếng hát miền Tây và muốn lưu giữ những giá trị chân chất, hiền hòa trong phút giây trọng đại của đời mình.",
  },
  {
    id: 8,
    slug: "nhac-tre-cuoi-hay-nhat-cho-le-cuoi",
    title:
      "20 Bài Nhạc Trẻ Cưới Hay Nhất – Ngọt Ngào, Hiện Đại, Cảm Xúc Dâng Trào",
    categories: [categoriesData[0], categoriesData[47], categoriesData[48]],
    image: dc.src,
    banner: dc2.src,
    description:
      "Bộ sưu tập 20 ca khúc nhạc trẻ nổi bật 2025, kết hợp giữa những bản ballad cảm xúc và các giai điệu sôi động hiện đại. Mỗi bài hát được lựa chọn dựa trên xu hướng Vpop mới nhất, tạo nên playlist hoàn hảo cho mọi khoảnh khắc trong lễ cưới.\n\n" +
      "Danh sách được thiết kế để sử dụng linh hoạt theo từng phần của buổi lễ: đón khách, bước vào lễ đường, trao nhẫn, chụp hình và tiệc mừng. Mỗi ca khúc đều có mô tả ngắn gợi ý thời điểm sử dụng, đảm bảo mang đến không khí trang trọng nhưng vẫn trẻ trung và tràn đầy năng lượng.\n\n" +
      "Phù hợp cho:\n" +
      "- Lễ cưới hiện đại tại nhà hàng, resort hoặc ngoài trời\n" +
      "- Cặp đôi yêu thích nhạc trẻ, Vpop và những bản hit viral\n" +
      "- Các buổi tiệc cần sự kết hợp giữa cảm xúc nhẹ nhàng và không khí sôi động\n" +
      "- Khách mời nhiều độ tuổi, dễ nghe – dễ hòa mình\n\n" +
      "Tất cả bài hát đều được đính kèm link YouTube chính thức, chất lượng cao, thuận tiện cho DJ hoặc điều phối âm thanh giúp tạo nên một trải nghiệm âm nhạc trọn vẹn và thống nhất.",
    songs: [
      {
        name: "Ấm – Sweet Liqour",
        desc: "Giai điệu chill hiện đại, mang cảm giác ấm cúng và nhẹ nhàng; rất hợp mở đầu buổi lễ hoặc khi đón khách vào hội trường.",
        youtube: "https://youtu.be/NFDLWdNj26w?si=UtSMvXcJc04-Wbiv",
      },
      {
        name: "Một Nhà – Da LAB",
        desc: "Giai điệu ấm áp, ca từ hạnh phúc về tổ ấm mới, cực hợp mở đầu lễ cưới hoặc phần giới thiệu cô dâu – chú rể.",
        youtube: "https://youtu.be/TKlXc3iywoM?si=JcSNNQ93BF4yKLIp",
      },
      {
        name: "Nơi Này Có Anh – Sơn Tùng M-TP",
        desc: "Nhẹ nhàng, lãng mạn; mang cảm giác bình yên và trọn vẹn, phù hợp khi chiếu ảnh hoặc đón khách.",
        youtube: "https://youtu.be/FN7ALfpGxiI?si=ZikXerjeHyAEErrf",
      },
      {
        name: "Hơn Cả Yêu – Đức Phúc",
        desc: "Ballad ngọt ngào biểu tượng của đám cưới Việt, tạo không khí trang trọng và xúc động trong khoảnh khắc trao nhẫn.",
        youtube: "https://youtu.be/__kGJZ-kPno?si=aEZ9a5b4uo2MhDNb",
      },
      {
        name: "Đám Cưới Nha – Hồng Thanh x MIE",
        desc: "Vui tươi, trẻ trung, khuấy động không khí tiệc mừng và tạo năng lượng tích cực cho toàn hội trường.",
        youtube: "https://youtu.be/1mQwr_O81a4?si=uNjCRIGjIZ4JieWP",
      },
      {
        name: "Gác Lại Âu Lo – Da LAB x Miu Lê",
        desc: "Tinh thần lạc quan, nhẹ nhàng; thích hợp làm nhạc nền khi đón khách hoặc chuyển cảnh chương trình.",
        youtube: "https://youtu.be/ECxVfrwwTp0?si=jnTWnqTFkSowVQBZ",
      },
      {
        name: "Cầu Hôn – Văn Mai Hương",
        desc: "Lãng mạn như lời tỏ bạch; lý tưởng cho khoảnh khắc trao nhẫn, bước vào lễ đường hoặc công bố cặp đôi.",
        youtube: "https://youtu.be/po_jKn33cus?si=1QAIlJIOoh_dBb6v",
      },
      {
        name: "Em Đồng Ý (I Do) – Đức Phúc x 911",
        desc: "Giai điệu trong trẻo, ca từ 'I Do' rất hợp cho nghi thức chính của buổi lễ hoặc khi ký giấy kết hôn.",
        youtube: "https://youtu.be/IOe0tNoUGv8?si=JEx23ku-t7ebdCn7",
      },
      {
        name: "Hôn Anh – MIN",
        desc: "Ballad hiện đại, cảm xúc; phù hợp lúc chụp ảnh, catwalk nhẹ nhàng hoặc đi cùng khoảnh khắc thân mật.",
        youtube: "https://youtu.be/7c39lfT6Sr0?si=yc0YSTxiDz8PQMA-",
      },
      {
        name: "Cảm Ơn Tình Yêu – Uyên Linh",
        desc: "Nhẹ nhàng, sâu lắng; thích hợp cho phần tri ân hoặc khi cô dâu – chú rể gửi lời cảm ơn đến hai bên gia đình.",
        youtube: "https://youtu.be/UCX_RhPygOM?si=9ZA7roZHjvOiNp-i",
      },
      {
        name: "Ta Là Của Nhau – Đông Nhi x Ông Cao Thắng",
        desc: "Mang thông điệp gắn kết và chung đôi, rất phù hợp để phát khi giới thiệu cặp đôi hoặc trong slideshow kỷ niệm.",
        youtube: "https://youtu.be/Qqix3_681pI?si=TOchv7rFKf8jlH5T",
      },
      {
        name: "See Tình – Hoàng Thùy Linh",
        desc: "Sôi động, vui tươi; cực hợp cho phần tiệc, nhảy múa hoặc tạo vibe trẻ trung, hiện đại.",
        youtube: "https://youtu.be/gJHSDZfJrRY?si=K6BuFd1BruWAz-gK",
      },
      {
        name: "Hãy Yêu Anh – Bùi Anh Tuấn",
        desc: "Ballad ngọt, mượt; phù hợp cho phần tâm tình, chiếu ảnh kỷ niệm hoặc màn slow dance nhẹ.",
        youtube: "https://youtu.be/GtLWMYVST-I?si=EbhiZuBA6URxzm0b",
      },
      {
        name: "Ánh Nắng Của Anh – Đức Phúc",
        desc: "Giai điệu tươi sáng, ca từ đẹp như lời chúc phúc; phù hợp đón khách hoặc mở đầu tiệc.",
        youtube: "https://youtu.be/1P4DaXgzVnE?si=g1gCNBsQR5ZINXa6",
      },
      {
        name: "Phía Cuối Con Đường – Thùy Chi ft. M4U",
        desc: "Chậm rãi, sâu sắc; hợp làm nhạc nền cho video hành trình yêu hoặc khoảnh khắc tri ân.",
        youtube: "https://youtu.be/OiH87roofiM?si=COmQnrc8tlFEsivx",
      },
      {
        name: "Một Ngày Hay Trăm Năm – Văn Mai Hương",
        desc: "Nhẹ nhàng, tinh tế; phù hợp cho phần bế mạc hoặc khi cô dâu – chú rể nói lời cảm ơn.",
        youtube: "https://youtu.be/_4CiX0waEr0?si=TknSPJ41k7DsdzGK",
      },
      {
        name: "Vợ Tuyệt Vời Nhất – Vũ Duy Khánh",
        desc: "Vui và cảm xúc; thích hợp khi chú rể dành tặng cô dâu hoặc lúc trao quà bất ngờ.",
        youtube: "https://youtu.be/oM_JJIJygYw?si=ayqutIjDUsBKd1zw",
      },
      {
        name: "Cô Dâu – Ái Phương",
        desc: "Ballad trang trọng dành riêng cho khoảnh khắc cô dâu bước vào lễ đường hoặc catwalk ra mắt họ hàng.",
        youtube: "https://youtu.be/GSIkPUP1PoE?si=vvBx5_262QzAIvLZ",
      },
      {
        name: "Thời Thanh Xuân Sẽ Qua – Phạm Hồng Phước x Văn Mai Hương",
        desc: "Hoài niệm, cảm xúc; phù hợp chiếu ảnh kỷ niệm hoặc làm nhạc nền phần chia sẻ.",
        youtube: "https://youtu.be/lCvZSI7XJ_g?si=y-iGV31TILEqM1MP",
      },
      {
        name: "Sau Tất Cả – Erik",
        desc: "Bản tình ca vượt qua thử thách để cùng nhau đi đến cuối con đường, rất hợp cho phần kết lễ đầy ý nghĩa.",
        youtube: "https://youtu.be/wHF3Jv6Gk2o?si=LJnJoM7clOOowM8H",
      },
    ],
    date: "2025-11-19",
    views: 21500,
    type: "playlists",
    mood: "Ngọt ngào – Hiện đại – Cảm xúc",
    final:
      "Bộ playlist 20 ca khúc nhạc trẻ 2025 mang đến hành trình cảm xúc trọn vẹn cho ngày cưới – nơi từng giai điệu như ghi lại khoảnh khắc yêu thương thật đẹp. Từ những tiếng đàn mở đầu nhẹ như hơi thở, cho đến những đoạn cao trào khiến trái tim muốn hòa nhịp, tất cả tạo nên một không gian âm nhạc chạm đến cảm giác thân quen, ấm áp mà vẫn rất hiện đại.\n\n" +
      "Khi bật playlist này, bạn sẽ cảm nhận rõ sự chuyển mình của không khí: sự hồi hộp lúc cô dâu bước vào, sự dịu dàng khi hai người trao nhau ánh nhìn, rồi cả niềm vui rộn ràng lan tỏa trong từng bàn tiệc. Âm nhạc không chỉ làm đầy không gian, mà còn làm đầy cảm xúc – như thể mỗi bài hát đều đang kể lại câu chuyện tình yêu của chính bạn.\n\n" +
      "Đây không chỉ là danh sách bài hát, mà là một bức tranh cảm xúc được vẽ bằng âm thanh. Một chút ngọt ngào, một chút hân hoan, một chút trẻ trung – tất cả hòa quyện để biến ngày cưới thành một ký ức trọn vẹn, dịu dàng và khó quên.",
  },
];
