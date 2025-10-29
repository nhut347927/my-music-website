import { PlaylistPost } from "../types/type";
import { categoriesData } from "./category-data";
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
    slug: "playlist-ky-niem-tinh-yeu-nhung-khoanh-khac-cua-hai-ta",
    title: "Playlist Kỷ Niệm Tình Yêu: Những Khoảnh Khắc Của Hai Ta",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]], // Nhạc Việt, Ballad, Playlist cảm xúc
    image: doita.src,
    banner: doita.src,
    description:
      "Playlist kỷ niệm tình yêu *Những Khoảnh Khắc Của Hai Ta* – nơi lưu giữ những ký ức đẹp nhất của hai người: từ rung động đầu tiên, những ngày tháng ngọt ngào, đến nỗi nhớ da diết khi xa cách. Mỗi bài hát là một mảnh ghép kỷ niệm, giúp bạn sống lại những khoảnh khắc yêu thương đã từng có. Dành cho ai đang yêu, đang nhớ, hoặc đang tìm lại những kỷ niệm cũ – đây là cuốn nhật ký âm nhạc của tình yêu. Từ 'Tháng Năm' gợi nhớ tuổi trẻ, đến 'Tháng Mấy Em Nhớ Anh?' đầy day dứt, playlist này như một dòng sông kỷ niệm, đưa bạn trở về những ngày tháng không thể nào quên. Hãy bật lên, nhắm mắt, và để nhạc kể lại câu chuyện tình yêu của bạn – những kỷ niệm vẫn còn nguyên vẹn trong tim.",

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
      "Playlist kỷ niệm tình yêu *Những Khoảnh Khắc Của Hai Ta* không chỉ là âm nhạc – mà là một hành trình trở về với những kỷ niệm đẹp nhất của bạn và người ấy. Từ những rung động đầu tiên trong 'Tháng Năm', đến nỗi nhớ da diết trong 'Tháng Mấy Em Nhớ Anh?', mỗi bài hát là một mảnh ghép kỷ niệm, giúp bạn sống lại từng khoảnh khắc yêu thương. Dù bạn đang hạnh phúc bên người ấy, đang nhớ một người cũ, hay đang tìm lại chính mình trong những ký ức xưa – playlist này sẽ là người bạn đồng hành. Hãy bật lên, để những giai điệu dẫn bạn qua dòng sông kỷ niệm, nơi mọi cảm xúc đều được trân trọng. Vì tình yêu không chỉ là hiện tại, mà còn là những kỷ niệm mãi mãi ở lại trong tim. Đây là nơi để bạn tìm lại *những khoảnh khắc của hai ta* – đẹp đẽ, ngọt ngào, và không thể nào quên.",
  },
  {
    id: 2,
    slug: "playlist-thon-thuc-tinh-yeu-mot-not-tram-trong-tim",
    title: "Playlist Thổn Thức Tình Yêu: Một Nốt Trầm Trong Tim",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]], // Nhạc Việt, Ballad, Playlist cảm xúc
    image: tram.src,
    banner: live.src,
    description:
      "Playlist thổn thức *Một Nốt Trầm Trong Tim* – nơi những giai điệu buồn nhẹ, sâu lắng, chạm vào trái tim đang rung lên từng nhịp thổn thức. Dành cho những đêm cô đơn, khi bạn muốn nghe lại tiếng lòng mình: nỗi nhớ da diết, ký ức phai mờ, và những cảm xúc không thể nói thành lời. Mỗi bài hát là một nốt trầm thổn thức, không bi lụy, mà dịu dàng, chân thành – như một người bạn lặng lẽ đồng hành. Từ 'Chạy Về Khóc Với Anh' đầy nước mắt, đến 'Đôi Lời Tình Ca' như tiếng thở dài cuối cùng, playlist này là không gian để bạn thả hồn vào dòng cảm xúc thổn thức, để bạn hiểu rằng: dù tình yêu đã xa, trái tim vẫn còn biết rung động. Hãy bật lên – để những nốt nhạc buồn làm bạn thổn thức, rồi lại nhẹ nhàng chữa lành.",

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
      "Playlist thổn thức *Một Nốt Trầm Trong Tim* không chỉ là âm nhạc – mà là một hành trình lắng nghe trái tim mình. Mỗi bài hát là một nhịp thổn thức: từ 'Chạy Về Khóc Với Anh' đầy nước mắt, đến 'Đôi Lời Tình Ca' như lời từ biệt dịu dàng. Đây là không gian dành cho những tâm hồn nhạy cảm, những ai muốn thả mình vào dòng cảm xúc buồn nhẹ, sâu lắng, và tìm thấy sự an ủi trong chính nỗi đau. Dù bạn đang cô đơn, đang nhớ, hay đang học cách buông tay – playlist này sẽ đồng hành cùng bạn, giúp bạn hiểu rằng: **thổn thức không phải là yếu đuối, mà là bằng chứng rằng bạn đã từng yêu rất thật**. Hãy bật lên vào một đêm yên ắng, để những nốt trầm này chạm vào tim bạn, làm bạn thổn thức, rồi nhẹ nhàng… chữa lành.",
  },
  {
    id: 3,
    slug: "playlist-truong-thanh-khi-ta-du-lon-de-hieu-minh",
    title: "Playlist Trưởng Thành: Khi Ta Đủ Lớn Để Hiểu Mình",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]], // Nhạc Việt, Ballad, Playlist cảm xúc
    image: chualanh.src,
    banner: buocqua.src,
    description:
      "Playlist trưởng thành *Khi Ta Đủ Lớn Để Hiểu Mình* – nơi âm nhạc kể câu chuyện về hành trình lớn lên: từ những tổn thương đầu đời, những lần vấp ngã, đến khoảnh khắc tỉnh thức và biết yêu thương chính mình. Đây không phải playlist để buồn, mà để **hiểu** – hiểu bản thân, hiểu cuộc đời, hiểu rằng trưởng thành là học cách bước đi dù đau. Mỗi bài hát là một cột mốc: từ rap tự sự của Đen Vâu, ballad day dứt của Vũ, đến những giai điệu nhẹ nhàng chữa lành. Dành cho ai từng lạc lối, từng khóc trong đêm, từng nghĩ mình không thể vượt qua – nhưng rồi vẫn đứng dậy. **Trưởng thành không phải là không đau, mà là đau rồi vẫn chọn đi tiếp.** Hãy bật playlist này khi bạn cần một người bạn âm nhạc để đồng hành trên hành trình trưởng thành – để bạn nhận ra: *bạn đã lớn hơn bạn nghĩ.*",

    songs: [
      {
        name: "Trưởng Thành",

        desc: "Mở đầu bằng tuyên ngôn trưởng thành mạnh mẽ nhất: 'Trưởng thành là khi ta học cách chịu trách nhiệm với chính mình'. Giai điệu rap sâu lắng, lời ca như cuốn nhật ký – kể về những lần sai lầm, những lần mất mát, và khoảnh khắc nhận ra: **trưởng thành bắt đầu từ việc dám đối diện.**",
        youtube: "https://www.youtube.com/watch?v=UVbv-PJXm14",
      },
      {
        name: "Bước Qua Nhau",

        desc: "Giai điệu buồn man mác, lời ca như tiếng thở dài: 'Ta bước qua nhau để trưởng thành'. Một bài hát về sự buông tay không phải vì hết yêu, mà vì cần lớn lên. **Trưởng thành là biết buông đúng lúc.**",
        youtube: "https://www.youtube.com/watch?v=3rIZ9o1Hq9E",
      },
      {
        name: "Mang Tiền Về Cho Mẹ",

        desc: "Trưởng thành không chỉ là tự lập, mà là biết yêu thương gia đình. Lời rap chân thật, mạnh mẽ: 'Trưởng thành là khi con biết mang tiền về cho mẹ, chứ không chỉ mang nỗi lo về nhà'. Một bài học lớn về trách nhiệm.",
        youtube: "https://www.youtube.com/watch?v=UVbv-PJXm14",
      },
      {
        name: "Thức Giấc",

        desc: "Khoảnh khắc tỉnh thức: 'Mọi ký ức chỉ để nhớ, không để quay lại'. Giai điệu nhẹ nhàng, lời ca sâu sắc – **trưởng thành là biết buông quá khứ để bước tới tương lai.**",
        youtube: "https://www.youtube.com/watch?v=R3trO4a49go",
      },
      {
        name: "Trốn Tìm",

        desc: "Rap chiêm nghiệm về sự thay đổi: 'Ai rồi cũng khác, chỉ là có dám đối diện hay không'. **Trưởng thành là chấp nhận bản thân đã khác, và vẫn yêu thương phiên bản mới.**",
        youtube: "https://www.youtube.com/watch?v=Ws-QlpSltr8",
      },
      {
        name: "Có Chàng Trai Viết Lên Cây",
        desc: "Hồi ức tuổi trẻ: 'Chàng trai ấy từng viết tên em lên cây, giờ cây đã lớn, người cũng trưởng thành'. Một bài hát dịu dàng về hành trình từ ngây ngô đến chín chắn.",
        youtube: "https://www.youtube.com/watch?v=EUEUZDV-in0",
      },
      {
        name: "Đi Về Nhà",
        desc: "Trưởng thành là biết rằng: dù đi đâu, làm gì, **nhà vẫn là nơi để trở về – và nhà đầu tiên là chính bạn**. Giai điệu ấm áp, lời ca như cái ôm.",
        youtube: "https://www.youtube.com/watch?v=vTJdVE_gjI0",
      },
      {
        name: "Lạ Lùng",
        desc: "Giai điệu mơ màng, lời ca như thơ: 'Lạ lùng là khi ta lớn lên, nhưng vẫn giữ được trái tim trẻ'. **Trưởng thành không phải đánh mất sự ngây thơ, mà là biết trân trọng nó.**",
        youtube: "https://www.youtube.com/watch?v=jv7WQeIPGjY",
      },
      {
        name: "Sau Này Hãy Gặp Lại Nhau Khi Hoa Nở",
        desc: "Lời tạm biệt đẹp nhất: 'Sau này hãy gặp lại nhau khi cả hai đã trưởng thành'. Một bài hát về hy vọng – rằng trưởng thành sẽ dẫn ta đến những điều tốt đẹp hơn.",
        youtube: "https://www.youtube.com/watch?v=3rIZ9o1Hq9E",
      },
      {
        name: "Một Nhà",
        desc: "Kết thúc bằng giấc mơ trưởng thành: 'Rồi một ngày ta sẽ có một nhà'. Giai điệu vui tươi, lời ca ấm áp – **trưởng thành là xây dựng tương lai, chứ không chỉ sống với quá khứ.**",
        youtube: "https://www.youtube.com/watch?v=TKlXc3iywoM",
      },
    ],

    date: "2025-10-20",
    views: 950,
    type: "playlists",
    mood: "Reflective",
    final:
      "Playlist trưởng thành *Khi Ta Đủ Lớn Để Hiểu Mình* không chỉ là âm nhạc – mà là **một hành trình lớn lên cùng bạn**. Từ những lời rap tự sự của Đen Vâu, những giai điệu buồn nhẹ của Vũ, đến những hy vọng dịu dàng của Phan Mạnh Quỳnh – mỗi bài hát là một cột mốc trên con đường trưởng thành. Đây là nơi để bạn: /n- **Nhìn lại** những lần vấp ngã /n- **Chấp nhận** bản thân đã khác /n- **Buông bỏ** những điều không còn thuộc về mình /n- **Bước tiếp** với trái tim mạnh mẽ hơn /n/n**Trưởng thành không phải là đích đến, mà là hành trình bạn chọn mỗi ngày.** /nHãy bật playlist này khi bạn cần một người bạn âm nhạc để nhắc nhở: *Bạn đã lớn hơn bạn nghĩ, và bạn xứng đáng với một tương lai đẹp đẽ.* /n**Dành cho những người trẻ đang trưởng thành – và sẽ còn trưởng thành mãi.**",
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
];
