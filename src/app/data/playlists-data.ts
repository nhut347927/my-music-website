import { PlaylistPost } from "../types/type";
import { categoriesData } from "./category-data";
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
    slug: "nhung-khoanh-khac-cua-hai-ta",
    title: "Những Khoảnh Khắc Của Hai Ta",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]],
    image: khoanhkhac.src,
    banner: doita.src,
    description:
      "Những Khoảnh Khắc Của Hai Ta không chỉ là một playlist âm nhạc, mà là một hành trình cảm xúc đầy sắc màu, nơi mỗi nốt nhạc, mỗi ca từ đều là một mảnh ghép của câu chuyện tình yêu. Đây là món quà dành cho những ai đã, đang, hoặc từng đắm mình trong những cung bậc cảm xúc của tình yêu – từ những rung động đầu tiên đầy bối rối, những khoảnh khắc ngọt ngào bên nhau, đến những nỗi đau day dứt khi chia xa. Playlist này như một cuốn nhật ký âm nhạc, nơi bạn có thể tìm thấy chính mình trong những giai điệu nhẹ nhàng, những lời ca sâu lắng, và cả những khoảng lặng đầy suy tư. Mỗi bài hát trong *Những Khoảnh Khắc Của Hai Ta* đều mang một màu sắc riêng, từ sự trong trẻo của những ngày tháng thanh xuân, sự cuồng nhiệt của tình yêu mãnh liệt, đến những giấc mơ tình yêu mong manh hay nỗi nhớ da diết khi người ấy đã rời xa. Dù bạn đang yêu, đang nhớ, hay đang chữa lành, playlist này sẽ là người bạn đồng hành, giúp bạn sống lại những khoảnh khắc yêu thương đáng trân trọng, để bạn cảm nhận được rằng tình yêu, dù ở bất kỳ hình dạng nào, luôn là điều đẹp đẽ nhất trong cuộc sống. Hãy bật playlist, nhắm mắt, và để âm nhạc dẫn bạn qua những cung bậc cảm xúc, từ ngọt ngào, lãng mạn, đến sâu lắng, day dứt, để bạn tìm thấy chính mình trong từng giai điệu.",
    songs: [
      {
        name: "Tháng Năm",
        desc: "Một bản tình ca nhẹ nhàng, sâu lắng, 'Tháng Năm' là một hành trình trở về những ngày tháng thanh xuân rực rỡ, nơi những kỷ niệm đầu tiên của tình yêu được lưu giữ mãi mãi. Giai điệu bài hát như một làn gió mát lành, khơi gợi trong lòng người nghe những cảm xúc trong trẻo, những ký ức về những con đường quen thuộc, những ánh mắt trao nhau ngại ngùng, và những nụ cười hồn nhiên. Lời ca như một cuốn nhật ký, kể về những khoảnh khắc mà ai cũng từng trải qua – những buổi chiều đạp xe dưới hàng cây, những lần nắm tay đầu tiên, và những giấc mơ tuổi trẻ đầy mộng mơ. 'Tháng Năm' không chỉ là một bài hát, mà là một lời nhắc nhở rằng, dù thời gian có trôi qua, những kỷ niệm ấy vẫn mãi là một phần không thể xóa nhòa trong trái tim. Bài hát này là lựa chọn hoàn hảo để bạn sống lại những ngày tháng đẹp đẽ, khi tình yêu còn mới mẻ và thế giới dường như chỉ có hai ta.",
        youtube: "https://youtu.be/sG9JhIRuTkA?si=e_rRa1Te9-gHybYK",
      },
      {
        name: "Một Triệu Like",
        desc: "Với giai điệu chill, phóng khoáng và lời rap tinh tế, 'Một Triệu Like' là một bức tranh âm nhạc vẽ nên tình yêu giản đơn nhưng đầy chân thành. Bài hát kể về những rung động nhỏ bé nhưng ý nghĩa trong tình yêu, từ những tin nhắn đêm khuya, những lần hẹn hò vụng về, đến những khoảnh khắc khiến trái tim rung lên vì một ánh mắt hay một cử chỉ yêu thương. Lời ca như một lời tâm sự chân thật, rằng tình yêu không cần phải hào nhoáng hay phô trương, chỉ cần sự chân thành là đủ để làm trái tim bừng sáng. Giai điệu bài hát mang đến cảm giác tự do, như một buổi chiều lộng gió, khi hai người cùng nhau chia sẻ những khoảnh khắc giản dị nhưng đầy ý nghĩa. Đây là bài hát dành cho những ai yêu thích sự nhẹ nhàng, những ai muốn đắm mình trong cảm giác ngọt ngào của tình yêu mà không cần bất kỳ điều gì quá lớn lao.",
        youtube: "https://www.youtube.com/watch?v=oigiXW6XyCQ",
      },
      {
        name: "Có Em",
        desc: "Một bản tình ca hiện đại, ấm áp và tràn đầy cảm xúc, 'Có Em' là lời khẳng định rằng chỉ cần có người mình yêu bên cạnh, mọi khó khăn trong cuộc sống đều trở nên nhẹ nhàng hơn. Giai điệu bài hát như một cái ôm dịu dàng, mang đến cảm giác an toàn và hạnh phúc, như thể cả thế giới chỉ còn lại hai người. Lời ca kể về những khoảnh khắc bình dị nhưng đầy ý nghĩa khi hai người ở bên nhau – từ những buổi chiều cùng nhau ngắm hoàng hôn, những lần cùng nhau vượt qua khó khăn, đến những giây phút lặng lẽ nắm tay nhau mà không cần nói lời nào. 'Có Em' là một lời nhắc nhở rằng tình yêu là nguồn sức mạnh lớn nhất, là lý do để mỉm cười mỗi ngày, là ánh sáng dẫn lối qua những ngày u tối. Đây là bài hát dành cho những ai tin rằng, chỉ cần có nhau, mọi thứ đều trở nên trọn vẹn.",
        youtube: "https://www.youtube.com/watch?v=DcCISK3sCYg",
      },
      {
        name: "Vì Yêu Cứ Đâm Đầu",
        desc: "Pha trộn giữa pop và R&B, 'Vì Yêu Cứ Đâm Đầu' là một bài hát tràn đầy năng lượng, thể hiện sự cuồng nhiệt và liều lĩnh của những trái tim đang yêu. Bài hát kể về việc sẵn sàng bất chấp tất cả vì tình yêu, dù biết rằng đôi khi tình yêu có thể mang lại đau thương. Giai điệu sôi động nhưng không kém phần cảm xúc, cùng với lời ca chân thật, khiến người nghe không khỏi đồng cảm với những lần yêu đến mù quáng, những lần trái tim dẫn lối mà lý trí chẳng thể ngăn cản. Bài hát này như một lời tuyên ngôn của những người trẻ, sẵn sàng sống hết mình, yêu hết mình, và không ngại ngần đón nhận mọi cung bậc cảm xúc mà tình yêu mang lại. Đây là bài hát dành cho những ai dám yêu cuồng nhiệt, dám sống trọn vẹn cho những khoảnh khắc yêu thương.",
        youtube: "https://www.youtube.com/watch?v=EWz4fITO5qg",
      },
      {
        name: "Phía Sau Em",
        desc: "Một ca khúc đầy day dứt, hòa quyện giữa giai điệu pop và chất R&B mượt mà, 'Phía Sau Em' là một bản nhạc dễ gây nghiện với những ai yêu thích sự sâu lắng. Bài hát kể về những cảm xúc phức tạp trong tình yêu, khi một người đứng phía sau lặng lẽ dõi theo, yêu thương nhưng không thể nói ra. Lời ca như một lời tự sự, mang theo nỗi buồn man mác nhưng vẫn đẹp đẽ và đầy chất thơ, như một bức thư tình chưa bao giờ được gửi đi. Giai điệu cuốn hút, kết hợp với cảm xúc chân thật, khiến bài hát trở thành một lựa chọn hoàn hảo cho những khoảnh khắc muốn đắm mình trong suy tư về tình yêu, về những điều chưa nói, và những cảm xúc còn dang dở. Đây là bài hát dành cho những trái tim nhạy cảm, những ai từng yêu thầm, từng lặng lẽ dõi theo một bóng hình.",
        youtube: "https://www.youtube.com/watch?v=LklFoy_a3bA",
      },
      {
        name: "Lạ Lùng",
        desc: "Với giai điệu buồn nhẹ đặc trưng của Vũ, 'Lạ Lùng' là một bài hát như một giấc mơ, nơi tình yêu trôi qua trong những cảm xúc mơ hồ, khó nắm bắt. Lời ca như những câu thơ, kể về một tình yêu đẹp nhưng mong manh, như một cơn gió thoảng qua, để lại trong lòng người nghe những khoảng lặng đầy cảm xúc. Bài hát này là một hành trình đưa người nghe trở về với những ký ức tình yêu, những khoảnh khắc mà trái tim rung lên nhưng không thể định nghĩa rõ ràng. Giai điệu nhẹ nhàng, sâu lắng, kết hợp với ca từ đầy chất thơ, khiến 'Lạ Lùng' trở thành một lựa chọn hoàn hảo cho những đêm khuya, khi bạn muốn thả mình vào dòng chảy của cảm xúc, để suy tư về những điều đã qua và những người đã từng ở bên.",
        youtube: "https://www.youtube.com/watch?v=jv7WQeIPGjY",
      },
      {
        name: "Tháng Mấy Em Nhớ Anh?",
        desc: "Một bài hát với ca từ đẹp như thơ, giọng hát ấm áp và cảm xúc sâu lắng, 'Tháng Mấy Em Nhớ Anh?' là một bản tình ca khiến người nghe không khỏi xúc động. Bài hát kể về những nỗi nhớ da diết, những khoảnh khắc mà ký ức về người ấy ùa về trong từng tháng, từng mùa. Giai điệu nhẹ nhàng, kết hợp với lời ca chân thành, tạo nên một không gian âm nhạc đầy chất thơ, nơi người nghe có thể tìm thấy chính mình trong những dòng cảm xúc. Bài hát này như một lá thư gửi đến người cũ, với những câu hỏi không lời đáp, những nỗi nhớ không thể nguôi ngoai. Đây là bài hát dành cho những ai từng yêu, từng nhớ, và từng day dứt vì một người, từng muốn quay lại những khoảnh khắc đã qua.",
        youtube: "https://www.youtube.com/watch?v=lxFmeBhoA1Y",
      },
      {
        name: "Em Không Sai, Chúng Ta Sai",
        desc: "Một bản ballad đau thương nhưng đẹp đẽ, 'Em Không Sai, Chúng Ta Sai' kể về sự tiếc nuối trong một tình yêu tan vỡ. Lời ca như một lời tự sự, nơi cả hai người đều không muốn đổ lỗi cho nhau, mà chỉ đơn giản là chấp nhận rằng tình yêu của họ không thể tiếp tục. Giai điệu sâu lắng, kết hợp với cảm xúc chân thật, khiến bài hát trở thành một liều thuốc cho những trái tim đang tổn thương. Bài hát này như một lời an ủi, rằng đôi khi không phải ai sai, mà chỉ là thời điểm và hoàn cảnh đã không cho phép tình yêu tiếp tục. Đây là bài hát dành cho những ai từng trải qua chia ly, từng muốn níu giữ nhưng cuối cùng vẫn phải buông tay, và đang tìm cách chữa lành trái tim mình.",
        youtube: "https://www.youtube.com/watch?v=iwGuiSnr2Qc",
      },
      {
        name: "3107 - 3",
        desc: "Với giai điệu lofi buồn bã, '3107 - 3' là bài hát hoàn hảo để nghe trong những đêm khuya tĩnh lặng. Bài hát mang đến cảm giác cô đơn, lơ lửng, như một bức tranh âm nhạc vẽ nên những cảm xúc không tên trong tình yêu. Lời ca giản dị nhưng đầy sức hút, kết hợp với giai điệu lofi, tạo nên một không gian âm nhạc mà người nghe có thể đắm mình vào, để suy tư về những điều đã qua, những người đã từng ở bên. Bài hát này như một người bạn, lặng lẽ đồng hành cùng bạn trong những khoảnh khắc cô đơn, khi bạn muốn thả mình vào những ký ức, những cảm xúc còn sót lại của một tình yêu đã xa. Đây là bài hát dành cho những tâm hồn nhạy cảm, yêu thích sự tĩnh lặng và sâu lắng.",
        youtube: "https://www.youtube.com/watch?v=kfw7MYah2nU",
      },
      {
        name: "Hơn Cả Yêu",
        desc: "Một lời tỏ tình ngọt ngào, mộc mạc nhưng đầy chân thành, 'Hơn Cả Yêu' là bài hát khiến bất kỳ ai nghe cũng phải mỉm cười. Lời ca như một lời hứa, rằng tình yêu không chỉ là những lời nói, mà là sự hiện diện, sự sẻ chia và những khoảnh khắc bên nhau. Giai điệu nhẹ nhàng, ấm áp, kết hợp với ca từ giản dị nhưng sâu sắc, khiến bài hát trở thành một món quà âm nhạc dành cho những cặp đôi đang yêu. Bài hát này như một lời nhắc nhở rằng tình yêu là những điều nhỏ bé nhưng ý nghĩa, là ánh mắt dịu dàng, là cái nắm tay ấm áp, là sự thấu hiểu không cần lời. Đây là bài hát dành cho những ai muốn nói lời yêu thương, muốn gửi gắm trái tim mình đến người ấy.",
        youtube: "https://www.youtube.com/watch?v=__kGJZ-kPno",
      },
      {
        name: "Anh Đã Quen Với Cô Đơn",
        desc: "Một bài hát đậm chất tự sự, 'Anh Đã Quen Với Cô Đơn' là lời tâm sự của một trái tim đã quen với nỗi cô đơn sau chia tay. Giai điệu buồn nhưng đẹp, kết hợp với lời ca chân thật, mang đến cảm giác vừa đau thương vừa mạnh mẽ. Bài hát kể về hành trình học cách sống chung với nỗi nhớ, với những khoảng trống mà người ấy để lại. Lời ca như một lời tự an ủi, rằng dù nỗi đau vẫn còn đó, nhưng thời gian sẽ giúp trái tim mạnh mẽ hơn. Đây là bài hát dành cho những ai đang tìm cách chữa lành trái tim, tìm cách đứng dậy sau những tổn thương trong tình yêu, và học cách yêu thương chính mình.",
        youtube: "https://www.youtube.com/watch?v=X7sSE3yCNLI",
      },
      {
        name: "Một Nhà",
        desc: "Kết thúc playlist bằng một bài hát ấm áp, tràn đầy hy vọng, 'Một Nhà' vẽ nên viễn cảnh hạnh phúc, bình yên của hai người yêu nhau. Lời ca như một lời hứa, rằng dù cuộc sống có khó khăn, chỉ cần có nhau, mọi thứ đều trở nên ý nghĩa. Giai điệu vui tươi, nhẹ nhàng, kết hợp với ca từ giản dị nhưng đầy cảm xúc, khiến bài hát trở thành một điểm sáng, một lời nhắc nhở rằng tình yêu luôn mang đến những điều tốt đẹp. Bài hát này như một bức tranh về một mái ấm, nơi hai người cùng nhau xây dựng những giấc mơ, cùng nhau vượt qua mọi thử thách, và cùng nhau tận hưởng những khoảnh khắc bình yên. Đây là bài hát dành cho những ai tin vào một cái kết hạnh phúc, một mái ấm trọn vẹn.",
        youtube: "https://www.youtube.com/watch?v=TKlXc3iywoM",
      },
    ],
    date: "2025-10-20",
    views: 1200,
    type: "playlists",
    mood: "Romantic",
    final:
      "Hy vọng playlist *Những Khoảnh Khắc Của Hai Ta* sẽ trở thành người bạn đồng hành tuyệt vời, đưa bạn qua những cung bậc cảm xúc đa dạng của tình yêu – từ những rung động đầu tiên đầy bối rối, những khoảnh khắc ngọt ngào không thể nào quên, đến những nỗi đau day dứt khi tình yêu tan vỡ. Mỗi bài hát trong playlist này là một câu chuyện, một mảnh ghép của trái tim, được chọn lọc để kể lại hành trình của những người đã yêu, đang yêu, và từng yêu. Từ những giai điệu trong trẻo của 'Tháng Năm', khơi gợi ký ức thanh xuân, đến những lời rap chân thành trong 'Một Triệu Like', hay nỗi nhớ da diết trong 'Tháng Mấy Em Nhớ Anh?', playlist này như một cuốn sách âm nhạc, nơi bạn có thể tìm thấy chính mình trong từng trang. Hãy để âm nhạc dẫn lối, để bạn sống lại những khoảnh khắc yêu thương, những nụ cười hạnh phúc, và cả những giọt nước mắt đã từng rơi. Dù bạn đang đắm mình trong men say của tình yêu, đang chữa lành một trái tim tan vỡ, hay chỉ đơn giản là muốn tìm lại những cảm xúc đã qua, *Những Khoảnh Khắc Của Hai Ta* sẽ là không gian âm nhạc để bạn thả hồn, để bạn cảm nhận được rằng tình yêu, dù ở bất kỳ hình dạng nào, vẫn luôn là điều đẹp đẽ nhất trong cuộc sống. Hãy bật playlist, nhắm mắt, và để những giai điệu kể câu chuyện tình yêu của riêng bạn, từ những khoảnh khắc đầu tiên đầy bỡ ngỡ, những ngày tháng hạnh phúc, đến những khoảng lặng đầy suy tư. Đây là nơi để bạn tìm thấy chính mình, để bạn trân trọng những khoảnh khắc của hai ta.",
  },
  {
    id: 2,
    slug: "mot-not-tram-trong-tim",
    title: "Một Nốt Trầm Trong Tim",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]],
    image: tram.src,
    banner: live.src,
    description:
      "Khi tình yêu không còn rực rỡ như những ngày đầu, chỉ còn lại những giai điệu nhẹ nhàng, sâu lắng, mang theo những ký ức đã từng rực cháy trong trái tim. *Một Nốt Trầm Trong Tim* là một playlist được tạo nên dành riêng cho những khoảnh khắc tĩnh lặng, khi bạn muốn đắm mình trong những cảm xúc sâu sắc, những nỗi nhớ da diết, và những khoảng lặng đầy suy tư. Đây không phải là một playlist để chìm đắm trong nỗi buồn tuyệt vọng, mà là một người bạn đồng hành, giúp bạn lắng nghe chính trái tim mình, hiểu những cảm xúc đang chất chứa, và tìm thấy sự an ủi trong những giai điệu dịu dàng. Mỗi bài hát trong playlist này là một mảnh ghép của câu chuyện tình yêu – từ những rung động đầu tiên, những khoảnh khắc hạnh phúc ngắn ngủi, đến những nỗi đau khi phải buông tay. Dành cho những đêm yên ắng, khi ánh đèn mờ ảo và tâm hồn bạn cần một nơi để trở về, playlist này sẽ là không gian âm nhạc để bạn sống lại những ký ức, để bạn cảm nhận được rằng, dù tình yêu có phai nhạt, những cảm xúc ấy vẫn đẹp đẽ và đáng trân trọng. Hãy bật playlist, để những nốt trầm trong tim bạn được cất lời, dẫn bạn qua những cung bậc cảm xúc, từ hoài niệm, day dứt, đến sự chữa lành chậm rãi nhưng đầy ý nghĩa.",
    songs: [
      {
        name: "Chạy Về Khóc Với Anh",
        desc: "Mở đầu playlist bằng một bản ballad đầy cảm xúc, 'Chạy Về Khóc Với Anh' là tiếng lòng của những trái tim tan vỡ, nơi nỗi đau được bộc lộ một cách chân thật nhưng vẫn đẹp đẽ. Giai điệu nhẹ nhàng, kết hợp với lời ca sâu sắc, kể về những khoảnh khắc khi bạn nhận ra tình yêu đã không còn như trước, nhưng vẫn tìm kiếm một nơi để trút bỏ nỗi buồn. Bài hát như một cái ôm dịu dàng, an ủi những tâm hồn đang tổn thương, nhắc nhở rằng dù có đau, bạn vẫn có thể tìm thấy sự bình yên trong những cảm xúc chân thành. Đây là bài hát dành cho những ai từng chạy qua những con phố đêm, mang theo nỗi nhớ và những giọt nước mắt, để rồi nhận ra rằng tình yêu, dù đã mất, vẫn để lại những dấu ấn không thể xóa nhòa trong trái tim.",
        youtube: "https://www.youtube.com/watch?v=EBpp2VTSI2Q",
      },
      {
        name: "Anh Đã Quen Với Cô Đơn",
        desc: "Một nốt trầm đặc trưng của playlist, 'Anh Đã Quen Với Cô Đơn' là lời tự sự của một trái tim đã học cách sống chung với nỗi cô đơn sau chia tay. Giai điệu buồn nhưng đẹp, kết hợp với lời ca chân thật, mang đến cảm giác vừa đau thương vừa mạnh mẽ, như một người bạn lặng lẽ chia sẻ nỗi trống trải trong tim bạn. Bài hát kể về hành trình đối mặt với những khoảng trống mà người ấy để lại, những đêm dài chỉ có mình bạn và những ký ức. Lời ca như một lời tự an ủi, rằng dù nỗi đau vẫn còn đó, thời gian sẽ giúp trái tim mạnh mẽ hơn. Đây là bài hát dành cho những ai đang tìm cách chữa lành, học cách yêu thương chính mình, và tìm thấy ánh sáng trong những khoảnh khắc cô đơn.",
        youtube: "https://www.youtube.com/watch?v=X7sSE3yCNLI",
      },
      {
        name: "Đông Kiếm Em",
        desc: "Mang không gian lạnh lẽo của mùa đông, 'Đông Kiếm Em' là một bài hát trầm lắng, tinh tế, nơi nỗi nhớ len lỏi qua từng giai điệu. Bài hát như một bức tranh âm nhạc, vẽ nên hình ảnh những con đường phủ tuyết, những cơn gió lạnh buốt, và trái tim vẫn tìm kiếm bóng hình người ấy trong vô vọng. Lời ca đầy chất thơ, kết hợp với giai điệu dịu dàng, tạo nên một không gian âm nhạc khiến người nghe không khỏi xúc động. Đây là bài hát dành cho những đêm đông tĩnh lặng, khi bạn muốn đắm mình trong nỗi nhớ, để cảm nhận sự mong manh của tình yêu và những ký ức đã qua. 'Đông Kiếm Em' là một nốt trầm sâu lắng, chạm đến những góc khuất trong tâm hồn.",
        youtube: "https://www.youtube.com/watch?v=h6RONxjPBf4",
      },
      {
        name: "Nàng Thơ",
        desc: "Dịu dàng, mộc mạc nhưng đầy cảm xúc, 'Nàng Thơ' là một bài hát như một lời kể về người con gái từng là nguồn cảm hứng lớn nhất trong cuộc đời. Giai điệu nhẹ nhàng, kết hợp với lời ca chân thành, vẽ nên hình ảnh một tình yêu đẹp nhưng đã xa, như một bài thơ còn dang dở. Bài hát này không chỉ nói về tình yêu, mà còn về những cảm xúc còn sót lại, những ký ức về một người từng khiến trái tim rung động. 'Nàng Thơ' là lựa chọn hoàn hảo cho những khoảnh khắc bạn muốn ngồi lại, nhấm nháp một tách trà, và để tâm hồn trôi theo những giai điệu đầy hoài niệm. Đây là bài hát dành cho những ai từng yêu một người như yêu một giấc mơ, và dù giấc mơ ấy đã tan, vẫn trân trọng những cảm xúc đã từng có.",
        youtube: "https://www.youtube.com/watch?v=Zzn9-ATB9aU",
      },
      {
        name: "Từ Ngày Em Đến",
        desc: "Buồn nhẹ nhưng không bi lụy, 'Từ Ngày Em Đến' là một bài hát kể về những đổi thay trong cuộc sống sau khi tình yêu đến và rời đi. Giai điệu mượt mà, kết hợp với lời ca chân thật, mang đến cảm giác như một câu chuyện được kể bằng âm nhạc, nơi người nghe có thể tìm thấy chính mình trong những dòng cảm xúc. Bài hát này nói về những khoảnh khắc khi bạn nhận ra rằng tình yêu đã thay đổi bạn, dù là theo cách tích cực hay đau thương. Đây là bài hát dành cho những ai muốn nhìn lại hành trình của mình, để hiểu rằng mỗi mối tình, dù kết thúc ra sao, đều để lại những bài học quý giá. 'Từ Ngày Em Đến' là một nốt trầm dịu dàng, giúp bạn tìm thấy sự bình yên trong những ký ức đã qua.",
        youtube: "https://www.youtube.com/watch?v=AmvA-XJF0j8",
      },
      {
        name: "Đi Qua Mùa Hạ",
        desc: "Một mùa hạ trôi qua, mang theo tuổi trẻ và những cảm xúc không thể giữ lại, 'Đi Qua Mùa Hạ' là một bài hát đầy hoài niệm, gợi nhớ về những ngày tháng rực rỡ nhưng đã xa. Giai điệu nhẹ nhàng, kết hợp với lời ca sâu sắc, tạo nên một không gian âm nhạc như một cuốn phim cũ, nơi bạn có thể nhìn thấy chính mình trong những ngày hè rực rỡ, với những giấc mơ và tình yêu đầu tiên. Bài hát này như một lời nhắc nhở rằng, dù thời gian có trôi qua, những khoảnh khắc ấy vẫn mãi là một phần của bạn. Đây là bài hát dành cho những ai muốn sống lại những ngày tháng tuổi trẻ, để cảm nhận sự ngọt ngào xen lẫn chút tiếc nuối của những điều đã qua.",
        youtube: "https://www.youtube.com/watch?v=wXsBaFCfXb0",
      },
      {
        name: "Người Ta Nói",
        desc: "Mang chút hoài niệm xưa, 'Người Ta Nói' là một bài hát kể về nỗi đau trong tình yêu bằng những giai điệu quen thuộc, gần gũi. Lời ca như một câu chuyện dân gian, nơi những cảm xúc về tình yêu, sự mất mát và những lời thì thầm của người đời được đan xen. Giai điệu bài hát mang đến cảm giác thân thuộc, như một lời tâm sự của một người bạn cũ, khiến người nghe không khỏi đồng cảm. Đây là bài hát dành cho những ai yêu thích sự mộc mạc, những ai muốn tìm lại những cảm xúc giản dị nhưng sâu sắc trong tình yêu. 'Người Ta Nói' là một nốt trầm nhẹ nhàng, giúp bạn tìm thấy sự an ủi trong những ký ức đã qua.",
        youtube: "https://www.youtube.com/watch?v=AZNAv3rpa4U",
      },
      {
        name: "Cứ Thế Rời Xa",
        desc: "Với giọng hát day dứt và đầy cảm xúc, 'Cứ Thế Rời Xa' là một bài hát kể về sự buông tay bất đắc dĩ trong tình yêu. Giai điệu buồn bã, kết hợp với lời ca chân thật, vẽ nên hình ảnh hai người từng yêu nhau sâu đậm nhưng buộc phải rời xa vì những lý do không thể kiểm soát. Bài hát này như một lời tự sự, nơi người hát đối diện với nỗi đau của mình, nhưng vẫn giữ được sự mạnh mẽ để bước tiếp. Đây là bài hát dành cho những ai từng trải qua sự chia ly, từng muốn níu giữ nhưng cuối cùng vẫn phải học cách buông tay. 'Cứ Thế Rời Xa' là một nốt trầm sâu sắc, giúp bạn tìm thấy sự đồng cảm trong những khoảnh khắc khó khăn nhất của tình yêu.",
        youtube: "https://www.youtube.com/watch?v=zQwKxVCR1y8",
      },
      {
        name: "Chỉ Là Không Cùng Nhau",
        desc: "Một bản song ca buồn đến nao lòng, 'Chỉ Là Không Cùng Nhau' là điểm nhấn hoàn hảo cho nốt trầm giữa playlist. Giai điệu nhẹ nhàng, kết hợp với sự hòa quyện của hai giọng hát, tạo nên một không gian âm nhạc đầy cảm xúc, nơi người nghe có thể cảm nhận được sự tiếc nuối của một tình yêu đẹp nhưng không thể tiếp tục. Lời ca như một lời tâm sự, rằng đôi khi không phải vì ai sai, mà chỉ đơn giản là hai người không thể cùng nhau đi tiếp. Đây là bài hát dành cho những ai từng yêu sâu đậm, từng mơ về một tương lai chung, nhưng cuối cùng vẫn phải chấp nhận sự thật rằng không phải mọi tình yêu đều có một cái kết hạnh phúc.",
        youtube: "https://www.youtube.com/watch?v=UqKVL56IJB8",
      },
      {
        name: "Thật Ra Em Chẳng Thương Anh Như Vậy Đâu",
        desc: "Với tiếng hát day dứt và sâu sắc, 'Thật Ra Em Chẳng Thương Anh Như Vậy Đâu' là một lời tự thú muộn màng, nơi người hát đối diện với sự thật về cảm xúc của mình. Giai điệu buồn bã, kết hợp với lời ca chân thành, tạo nên một không gian âm nhạc đầy chất tự sự, nơi người nghe có thể cảm nhận được sự phức tạp của tình yêu. Bài hát này như một lời thú nhận, rằng đôi khi tình yêu không như những gì ta từng nghĩ, và sự thật có thể đau lòng hơn cả. Đây là bài hát dành cho những ai từng đối diện với những cảm xúc mâu thuẫn trong tình yêu, từng muốn nói ra nhưng không thể, và từng giữ trong lòng những nỗi đau không tên.",
        youtube: "https://www.youtube.com/watch?v=90sYCPQTZ40",
      },
      {
        name: "Như Anh Đã Thấy Em",
        desc: "Giai điệu mơ màng, cô đơn và buồn một cách rất đẹp, 'Như Anh Đã Thấy Em' là một bài hát như một bức thư tình gửi đến một người đã xa. Lời ca đầy chất thơ, kết hợp với giai điệu nhẹ nhàng, tạo nên một không gian âm nhạc khiến người nghe không khỏi xúc động. Bài hát kể về những khoảnh khắc khi bạn nhìn thấy người ấy, từng ánh mắt, từng nụ cười, và nhận ra rằng họ đã từng là cả thế giới của bạn. Đây là bài hát dành cho những ai từng yêu một người bằng cả trái tim, nhưng chỉ có thể giữ họ trong những ký ức. 'Như Anh Đã Thấy Em' là một nốt trầm dịu dàng, giúp bạn tìm thấy sự bình yên trong những cảm xúc đã qua.",
        youtube: "https://www.youtube.com/watch?v=cPbp2iFaZRo",
      },
      {
        name: "Đôi Lời Tình Ca",
        desc: "Kết thúc playlist bằng một bài hát nhẹ nhàng, 'Đôi Lời Tình Ca' như một tiếng thở dài chậm rãi sau một mối tình. Giai điệu mộc mạc, kết hợp với lời ca chân thành, tạo nên một không gian âm nhạc như một lời tạm biệt dịu dàng, không bi lụy nhưng đầy cảm xúc. Bài hát này như một lời nhắc nhở rằng, dù tình yêu có kết thúc, những cảm xúc ấy vẫn đáng trân trọng, và bạn vẫn có thể bước tiếp với một trái tim nhẹ nhàng hơn. Đây là bài hát dành cho những ai muốn khép lại một chương tình yêu, để bắt đầu một hành trình mới với những hy vọng mới.",
        youtube: "https://www.youtube.com/watch?v=8Tcj6xoQ_xc",
      },
    ],
    date: "2025-10-20",
    views: 850,
    type: "playlists",
    mood: "Melancholic",
    final:
      "Một chút cô đơn, một chút hoài niệm, nhưng không tuyệt vọng, *Một Nốt Trầm Trong Tim* là một hành trình âm nhạc dành cho những tâm hồn nhạy cảm, những ai muốn tìm lại chính mình trong những giai điệu sâu lắng. Playlist này không chỉ để buồn, mà để lắng nghe, để hiểu những cảm xúc đang chất chứa trong trái tim, và để bước qua nỗi nhớ với một tâm thế nhẹ nhàng hơn. Mỗi bài hát là một câu chuyện, một mảnh ghép của những ký ức tình yêu, từ những rung động đầu tiên, những khoảnh khắc hạnh phúc ngắn ngủi, đến những nỗi đau khi phải buông tay. Từ 'Chạy Về Khóc Với Anh' với nỗi đau chân thật, đến 'Đôi Lời Tình Ca' như một lời tạm biệt dịu dàng, playlist này như một cuốn sách âm nhạc, nơi bạn có thể tìm thấy chính mình trong từng trang. Hãy bật playlist trong những đêm yên ắng, khi ánh đèn mờ ảo và tâm hồn bạn cần một nơi để trở về. Để những giai điệu này đồng hành cùng bạn, giúp bạn cảm nhận được rằng, dù tình yêu có phai nhạt, những cảm xúc ấy vẫn đẹp đẽ và đáng trân trọng. *Một Nốt Trầm Trong Tim* là không gian âm nhạc để bạn sống lại những ký ức, để bạn chữa lành, và để bạn nhận ra rằng, dù có những nốt trầm trong tim, bạn vẫn biết yêu và biết hy vọng.",
  },
  {
    id: 3,
    slug: "khi-ta-du-lon-de-hieu-minh",
    title: "Khi Ta Đủ Lớn Để Hiểu Mình",
    categories: [categoriesData[0], categoriesData[7], categoriesData[19]],
    image: chualanh.src,
    banner: buocqua.src,
    description:
      "Khi Ta Đủ Lớn Để Hiểu Mình là một hành trình âm nhạc sâu sắc, dẫn dắt bạn qua những cung bậc cảm xúc của sự trưởng thành, nơi tổn thương, cô đơn và hoang mang trở thành những bài học quý giá để bạn tìm thấy chính mình. Đây không chỉ là một playlist, mà là một cuốn nhật ký âm nhạc, nơi mỗi bài hát là một mảnh ghép của câu chuyện về hành trình tự nhận thức. Dành cho những đêm lặng im khi bạn ngồi nhìn lại chính mình, những buổi sáng đứng dậy sau những vấp ngã, và những ngày bạn học cách tha thứ cho bản thân, playlist này như một người bạn đồng hành, nhẹ nhàng nhưng sâu sắc. Mỗi giai điệu, mỗi ca từ đều là một lời nhắc nhở rằng chẳng ai có thể cứu bạn ngoài chính bạn, và sự trưởng thành không phải là đích đến, mà là hành trình học cách yêu thương và chấp nhận bản thân. Từ những lời rap chân thật, những giai điệu buồn man mác, đến những khoảnh khắc tỉnh thức đầy ý nghĩa, Khi Ta Đủ Lớn Để Hiểu Mình là không gian âm nhạc để bạn đối diện với những góc khuất trong tâm hồn, để bạn tìm thấy ánh sáng trong những ngày u tối, và để bạn nhận ra rằng, dù có lạc lối, bạn vẫn luôn có thể tìm đường về với chính mình. Hãy bật playlist, nhắm mắt, và để những giai điệu này dẫn bạn qua những cung bậc cảm xúc, từ đau thương, hoài niệm, đến sự chữa lành và trưởng thành.",
    songs: [
      {
        name: "Tự Sự",
        desc: "Mở đầu playlist bằng một bài rap chân thật và đau đáu, 'Tự Sự' là cuộc đối thoại sâu sắc giữa một người đàn ông và chính bản thân anh ta. Lời ca không hoa mỹ, không che đậy, mà như một cuốn sách mở, kể về những mảnh vỡ trong tâm hồn và hành trình tìm lại chính mình. Câu hát 'Anh đi tìm anh trong những điều vụn vỡ' như một lời tuyên ngôn, đánh dấu sự khởi đầu của một hành trình thức tỉnh, nơi bạn học cách đối diện với những tổn thương, những sai lầm, và những khoảng trống trong lòng. Giai điệu mạnh mẽ nhưng đầy cảm xúc, kết hợp với lời rap sâu sắc, khiến bài hát trở thành một lựa chọn hoàn hảo để mở ra hành trình tự nhận thức, nơi bạn bắt đầu hiểu rằng sự trưởng thành bắt nguồn từ việc dám nhìn thẳng vào chính mình.",
        youtube: "https://www.youtube.com/watch?v=UVbv-PJXm14",
      },
      {
        name: "Đêm",
        desc: "Bóng tối không chỉ là sự vắng ánh sáng, mà là nơi bạn nghe rõ tiếng lòng mình nhất. 'Đêm' là một bài hát như một chiếc gương soi chiếu vào tâm hồn, nơi những cảm xúc sâu kín được bộc lộ qua từng giai điệu buồn man mác. Lời ca 'Đêm như chiếc gương soi vào tim người' mang đến cảm giác vừa cô đơn vừa an ủi, như thể bóng tối đang lắng nghe và thấu hiểu những gì bạn không thể nói ra. Bài hát này là một không gian âm nhạc để bạn đắm mình trong những suy tư, để bạn đối diện với những nỗi sợ, những nỗi nhớ, và cả những giấc mơ còn dang dở. Đây là bài hát dành cho những đêm khuya, khi bạn ngồi một mình và để tâm hồn trôi theo những giai điệu sâu lắng.",
        youtube: "https://www.youtube.com/watch?v=EHFN2XVXy5Q",
      },
      {
        name: "Thật Ra Em Chẳng Thương Anh Như Vậy Đâu",
        desc: "Một bản ballad đầy day dứt, 'Thật Ra Em Chẳng Thương Anh Như Vậy Đâu' là lời thú nhận muộn màng về sự thật trần trụi của tình yêu. Bài hát kể về khoảnh khắc khi bạn nhận ra rằng cảm xúc không thể ép buộc, và đôi khi tình yêu chỉ là một giấc mơ mà ta tự vẽ nên. Giai điệu buồn bã, kết hợp với lời ca chân thành, tạo nên một không gian âm nhạc khiến người nghe không khỏi xúc động. Bài hát này như một lời nhắc nhở rằng sự trưởng thành bắt đầu từ việc chấp nhận sự thật, dù đau đớn, và học cách buông bỏ những ảo tưởng. Đây là bài hát dành cho những ai từng yêu mù quáng, từng hy vọng, và từng phải học cách đối diện với sự thật để trưởng thành hơn.",
        youtube: "https://www.youtube.com/watch?v=90sYCPQTZ40",
      },
      {
        name: "Lời Tự Sự",
        desc: "Với giai điệu buồn man mác, nhẹ nhàng như hơi thở, 'Lời Tự Sự' là một bài hát chứa đựng cả bầu trời suy ngẫm về cuộc đời và sự trưởng thành. Lời ca như một câu chuyện kể bằng âm nhạc, nơi người hát chia sẻ những trải nghiệm, những nỗi đau, và những bài học đã đi qua. Bài hát này không ồn ào, không phô trương, mà chọn cách im lặng để nói lên những điều sâu sắc nhất. Đây là bài hát dành cho những ai đã đi qua nhiều thử thách, đã từng vấp ngã, và đang học cách đứng dậy với một trái tim trưởng thành hơn. 'Lời Tự Sự' là một nốt nhạc dịu dàng, giúp bạn tìm thấy sự bình yên trong những suy tư về chính mình.",
        youtube: "https://www.youtube.com/watch?v=n6Pnzi6r9NU",
      },
      {
        name: "Mang Tiền Về Cho Mẹ",
        desc: "Không chỉ là một bài rap, 'Mang Tiền Về Cho Mẹ' là một bài học sâu sắc về lòng hiếu thảo và ý nghĩa của sự trưởng thành thật sự. Lời ca chân thật, mạnh mẽ, kể về hành trình của một người trẻ học cách sống không chỉ cho bản thân, mà còn cho những người thân yêu. Bài hát này như một lời nhắc nhở rằng trưởng thành không chỉ là vượt qua những khó khăn cá nhân, mà còn là biết trân trọng và đền đáp những hy sinh thầm lặng của gia đình. Giai điệu mạnh mẽ, kết hợp với lời rap đầy cảm xúc, khiến bài hát trở thành một điểm sáng trong playlist, dành cho những ai đang tìm kiếm ý nghĩa sâu sắc hơn trong cuộc sống.",
        youtube: "https://www.youtube.com/watch?v=UVbv-PJXm14",
      },
      {
        name: "Bước Qua Mùa Cô Đơn",
        desc: "Một bài hát nhẹ nhàng nhưng đầy chiêm nghiệm, 'Bước Qua Mùa Cô Đơn' như một lời an ủi dành cho những tâm hồn đang học cách đứng vững sau những ngày cô đơn. Lời ca 'Mỗi người đều cần đi qua nỗi cô đơn, để học cách đứng vững' mang đến cảm giác vừa đau thương vừa mạnh mẽ, như một lời nhắc nhở rằng cô đơn không phải là điểm kết thúc, mà là một phần của hành trình trưởng thành. Giai điệu dịu dàng, kết hợp với lời ca sâu sắc, tạo nên một không gian âm nhạc để bạn suy ngẫm về những gì đã qua và tìm thấy sức mạnh để bước tiếp. Đây là bài hát dành cho những ai đang học cách yêu thương chính mình, dù trong những ngày tăm tối nhất.",
        youtube: "https://www.youtube.com/watch?v=n6Pnzi6r9NU",
      },
      {
        name: "Đưa Nhau Đi Trốn",
        desc: "Dù mang tên 'Đưa Nhau Đi Trốn', bài hát này không chỉ nói về việc chạy trốn khỏi thế giới, mà còn về hành trình tìm lại chính mình trong một cuộc sống đầy xô bồ. Giai điệu nhẹ nhàng, kết hợp với lời ca chân thành, tạo nên một không gian âm nhạc như một lời mời gọi bạn tạm gác lại những ồn ào, để lắng nghe tiếng nói bên trong tâm hồn. Bài hát này là một lời nhắc nhở rằng đôi khi, để trưởng thành, bạn cần cho phép mình được nghỉ ngơi, được tìm lại những giấc mơ đã bị lãng quên. Đây là bài hát dành cho những ai đang cảm thấy lạc lõng, muốn tìm một nơi để trở về với chính mình.",
        youtube: "https://www.youtube.com/watch?v=5e7e_KZINA4",
      },
      {
        name: "Trốn Tìm",
        desc: "Được xem là ca khúc trưởng thành nhất của Đen, 'Trốn Tìm' là một bài hát nói về sự đổi thay của con người qua năm tháng, khi yêu, khi mất, và khi trưởng thành. Lời ca 'Ai rồi cũng khác, chỉ là có dám đối diện để chấp nhận điều đó hay không' như một lời tuyên ngôn, khiến người nghe không khỏi suy ngẫm về hành trình của chính mình. Giai điệu mạnh mẽ, kết hợp với lời rap sâu sắc, tạo nên một không gian âm nhạc đầy cảm hứng, nơi bạn có thể nhìn lại những thay đổi trong cuộc đời mình và học cách chấp nhận chúng. Đây là bài hát dành cho những ai đang đối diện với những ngã rẽ của cuộc sống, đang học cách trưởng thành qua những tổn thương và mất mát.",
        youtube: "https://www.youtube.com/watch?v=Ws-QlpSltr8",
      },
      {
        name: "Thức Giấc",
        desc: "Một bước ngoặt của sự tỉnh thức, 'Thức Giấc' là bài hát mang đến cảm giác như một tia sáng xuyên qua bóng tối. Lời ca 'Mọi ký ức chỉ là để nhớ, chứ không phải để quay lại' như một lời nhắc nhở rằng sự trưởng thành là khi bạn học cách buông bỏ quá khứ và hướng về phía trước. Giai điệu nhẹ nhàng nhưng mạnh mẽ, kết hợp với lời ca sâu sắc, khiến bài hát trở thành một điểm nhấn trong playlist, dành cho những ai đang tìm kiếm sự thay đổi trong tâm hồn. Đây là bài hát dành cho những khoảnh khắc bạn nhận ra rằng, để trưởng thành, bạn cần dũng cảm đối diện với chính mình và bước qua những ký ức đã từng níu giữ bạn.",
        youtube: "https://www.youtube.com/watch?v=R3trO4a49go",
      },
      {
        name: "Sau Này Hãy Gặp Lại Nhau Khi Hoa Nở",
        desc: "Một trong những bản nhạc đẹp nhất về sự buông bỏ dịu dàng, 'Sau Này Hãy Gặp Lại Nhau Khi Hoa Nở' là lời tạm biệt đầy chất thơ, nơi bạn học cách để lại quá khứ với một trái tim bình yên. Giai điệu nhẹ nhàng, kết hợp với lời ca sâu sắc, tạo nên một không gian âm nhạc như một bức thư gửi đến những người đã từng quan trọng trong cuộc đời bạn. Bài hát này như một lời hứa, rằng dù hiện tại có đau buồn, bạn vẫn tin vào một ngày mai tốt đẹp hơn, khi cả hai đều đã tìm thấy sự bình yên. Đây là bài hát dành cho những ai đang học cách buông tay, để cả hai có thể tiếp tục hành trình của riêng mình.",
        youtube: "https://www.youtube.com/watch?v=3rIZ9o1Hq9E",
      },
      {
        name: "Có Chàng Trai Viết Lên Cây",
        desc: "Nhẹ nhàng, mộc mạc nhưng đầy cảm xúc, 'Có Chàng Trai Viết Lên Cây' là bản tóm tắt hoàn hảo cho hành trình của tuổi trẻ – từ những giấc mơ ngây ngô đến những bài học trưởng thành đầy ý nghĩa. Giai điệu dịu dàng, kết hợp với lời ca chân thành, vẽ nên hình ảnh một chàng trai từng yêu, từng mơ, và từng để lại dấu ấn của mình trong những ngày tháng thanh xuân. Bài hát này như một lời nhắc nhở rằng, dù thời gian có trôi qua, những ký ức ấy vẫn mãi là một phần của bạn. Đây là bài hát dành cho những ai muốn nhìn lại tuổi trẻ của mình, để trân trọng những khoảnh khắc đã qua và những bài học đã giúp bạn trưởng thành.",
        youtube: "https://www.youtube.com/watch?v=EUEUZDV-in0",
      },
      {
        name: "Đi Về Nhà",
        desc: "Kết thúc playlist bằng một bài hát đầy ý nghĩa, 'Đi Về Nhà' không chỉ nói về việc trở về một nơi chốn, mà còn về hành trình trở về với chính con người mình. Giai điệu nhẹ nhàng, kết hợp với lời ca chân thật, mang đến cảm giác như một cái ôm ấm áp, an ủi những tâm hồn đã đi qua nhiều sóng gió. Bài hát này như một lời nhắc nhở rằng, dù bạn đã đi xa đến đâu, đã trải qua bao nhiêu khó khăn, bạn vẫn luôn có một nơi để trở về – đó là chính bạn. Đây là bài hát dành cho những ai đã đi đủ xa, đã đủ lớn để hiểu rằng hạnh phúc đôi khi là những điều giản đơn nhất, như việc tìm thấy sự bình yên trong tâm hồn mình.",
        youtube: "https://www.youtube.com/watch?v=vTJdVE_gjI0",
      },
    ],
    date: "2025-10-20",
    views: 950,
    type: "playlists",
    mood: "Reflective",
    final:
      "Trưởng thành không phải là khi bạn không còn đau, mà là khi bạn biết đau nhưng vẫn chọn đi tiếp. Khi Ta Đủ Lớn Để Hiểu Mình là một hành trình âm nhạc dành cho những tâm hồn đang tìm kiếm ý nghĩa của sự trưởng thành, đang học cách tha thứ cho chính mình và bước qua những tổn thương. Playlist này không chỉ là để nhìn lại những ngày đã qua, mà là để bạn tìm thấy sức mạnh trong những khoảnh khắc lạc lõng, để bạn hiểu rằng chẳng ai cứu được bạn ngoài chính bạn. Từ những lời rap chân thật của 'Tự Sự', những giai điệu buồn man mác của 'Đêm', đến sự tỉnh thức đầy ý nghĩa trong 'Thức Giấc', mỗi bài hát là một mảnh ghép của hành trình tự nhận thức, nơi bạn học cách yêu thương bản thân, chấp nhận những sai lầm, và trân trọng những bài học mà cuộc sống mang lại. Hãy bật playlist trong những đêm lặng im, khi bạn muốn ngồi lại với chính mình, hoặc những buổi sáng bạn đứng dậy sau những vấp ngã. Để những giai điệu này đồng hành cùng bạn, giúp bạn cảm nhận được rằng, dù có những ngày bạn thấy mình lạc lõng, đó chính là những ngày bạn đang lớn lên. Khi Ta Đủ Lớn Để Hiểu Mình là không gian âm nhạc để bạn tìm thấy ánh sáng trong những nốt trầm, để bạn nhận ra rằng sự trưởng thành là một hành trình đẹp đẽ, dù đầy thử thách, và bạn luôn có thể tìm đường về với chính mình.",
  },
  {
    id: 4,
    slug: "vibe-viet-gan-day-nhung-hit-dinh-cao-2023-2025",
    title: "Vibe Việt Gần Đây - Những Hit Đỉnh Cao 2023-2025",
    categories: [categoriesData[0], categoriesData[15], categoriesData[24]],
    image: cao.src,
    banner: longlay.src,
    description:
      "Vibe Việt Gần Đây - Những Hit Đỉnh Cao 2023-2025 là một playlist âm nhạc sôi động, tổng hợp những ca khúc Việt Nam hay nhất và được yêu thích nhất từ năm 2023 đến nay (2025), mang đến sự đa dạng phong phú từ những bản ballad sâu lắng chạm đến trái tim, những track rap sôi động đầy năng lượng, đến những bản pop bắt tai khiến bạn không thể ngừng lắc lư theo điệu nhạc. Đây là bộ sưu tập âm nhạc hoàn hảo dành cho những ai đam mê V-pop và muốn cập nhật nhanh chóng những xu hướng âm nhạc mới nhất của làng nhạc Việt, với sự góp mặt của các nghệ sĩ hàng đầu như Sơn Tùng M-TP với sức hút không thể chối cãi, HIEUTHUHAI với phong cách trẻ trung hiện đại, Vũ. với những giai điệu đầy cảm xúc, cùng nhiều tài năng trẻ khác như Tăng Duy Tân, Hòa Minzy, Rhyder, CoolKid, Văn Mai Hương, Pháo, Nguyễn Hữu Kha và hơn thế nữa. Mỗi bài hát trong playlist này không chỉ là những hit phá kỷ lục streaming trên Spotify, Zing MP3 hay YouTube, mà còn là những câu chuyện âm nhạc phản ánh nhịp sống đương đại của giới trẻ Việt Nam, từ những nỗi đau tình yêu da diết, những khoảnh khắc vui tươi viral trên TikTok, đến những thông điệp mạnh mẽ về sự tự do và trưởng thành. Hãy tưởng tượng bạn đang lái xe dọc theo những con phố Sài Gòn nhộn nhịp, hoặc ngồi chill bên ly cà phê sữa đá, và những giai điệu này vang lên, khiến mọi lo toan tan biến, thay vào đó là sự hứng khởi và kết nối với thế hệ trẻ Việt. Playlist này được thiết kế để bạn có thể dễ dàng chuyển đổi giữa các mood khác nhau: từ những bản ballad chill để thư giãn sau ngày dài, đến những track rap sôi động để party cùng bạn bè, hoặc pop vui tươi để khởi đầu một ngày mới tràn đầy năng lượng. Với hơn 12 ca khúc được chọn lọc kỹ lưỡng, mỗi bài đều đại diện cho một đỉnh cao của V-pop trong giai đoạn 2023-2025, từ những MV triệu view phá kỷ lục đến những bản hit thống trị các bảng xếp hạng Billboard Vietnam Hot 100 và Top Vietnamese Songs. Nếu bạn là fan của Sơn Tùng M-TP, đừng bỏ lỡ 'Đừng Làm Trái Tim Anh Đau' với drama hiện đại; nếu yêu thích sự kết hợp dân gian đương đại, 'Thị Mầu' của Hòa Minzy sẽ khiến bạn bất ngờ; hay đắm chìm trong nỗi nhớ với 'Hoa Cỏ Lau' của Vũ.. Đây không chỉ là một playlist, mà còn là một hành trình âm nhạc qua những năm tháng sôi động của V-pop, giúp bạn khám phá và yêu thêm nền âm nhạc Việt Nam đang ngày càng vươn tầm quốc tế. Hãy bật playlist ngay hôm nay, để những hit đỉnh cao này trở thành soundtrack cho cuộc sống của bạn, và chia sẻ với bạn bè để cùng vibe cùng nhau!",
    songs: [
      {
        name: "Đừng Làm Trái Tim Anh Đau",
        desc: "Hit lớn nhất năm 2024 của Sơn Tùng M-TP, 'Đừng Làm Trái Tim Anh Đau' là một bản ballad hiện đại đầy drama, với MV chính thức phá kỷ lục YouTube chỉ trong vài ngày đầu phát hành, đạt hàng triệu view và thống trị mọi bảng xếp hạng streaming. Giai điệu da diết kết hợp với lời ca sâu sắc kể về nỗi đau tình yêu bị phản bội, được sản xuất với chất lượng âm thanh đỉnh cao và hình ảnh cinematic ấn tượng, khiến khán giả không khỏi xúc động. Bài hát này không chỉ là một ca khúc, mà còn là biểu tượng của sức hút ngôi sao Sơn Tùng, với phần biểu diễn vocal đầy cảm xúc và hook chorus dễ nhớ, nhanh chóng trở thành trend trên TikTok và các nền tảng xã hội. Từ những cảnh quay lãng mạn đến những khoảnh khắc cao trào đầy kịch tính, MV đã tạo nên cơn sốt toàn quốc, giúp bài hát lọt top Billboard Vietnam Hot 100 và được yêu thích bởi hàng triệu fan. Đây là track hoàn hảo để bạn đắm chìm trong cảm xúc, đặc biệt vào những buổi tối muộn khi muốn suy tư về tình yêu, và nó đại diện cho sự trở lại mạnh mẽ của V-pop với phong cách quốc tế nhưng vẫn giữ hồn Việt.",
        youtube: "https://www.youtube.com/watch?v=abPmZCZZrFA",
      },
      {
        name: "Thủy Triều",
        desc: "Ca khúc nổi bật đánh dấu bước tiến mới của Quang Hùng MasterD năm 2024, 'Thủy Triều' với nhịp điệu cuốn hút như dòng chảy triều dâng, nhanh chóng lọt top trending Spotify Việt Nam và nhận được hàng triệu lượt stream chỉ sau vài tuần phát hành. Giai điệu pop-R&B mượt mà kết hợp lời ca lãng mạn về tình yêu như thủy triều lên xuống, được sản xuất bởi MasterD Management với visualizer ấn tượng trên YouTube, tạo nên sức hút mạnh mẽ cho khán giả trẻ. Bài hát không chỉ gây nghiện nhờ phần beat drop đầy năng lượng mà còn qua thông điệp về sự biến đổi cảm xúc trong mối quan hệ, khiến nó trở thành lựa chọn hàng đầu cho các playlist chill hoặc party nhẹ nhàng. Với giọng hát ấm áp và phần hòa âm tinh tế, 'Thủy Triều' đã góp phần đưa Quang Hùng MasterD lên tầm cao mới trong làng V-pop, nhận được lời khen từ các nhà phê bình và fan hâm mộ. Đây là track lý tưởng để bạn nghe khi đang dạo biển hoặc thư giãn, gợi lên hình ảnh sóng vỗ và những kỷ niệm tình yêu đầy màu sắc.",
        youtube: "https://www.youtube.com/watch?v=7ig2lXjozdw",
      },
      {
        name: "Cắt Đôi Nỗi Sầu",
        desc: "Bản ballad buồn đầy cảm xúc của Tăng Duy Tân hợp tác với DRUM7 năm 2023-2024, 'Cắt Đôi Nỗi Sầu' đã trở thành hot trend trên TikTok với hàng ngàn video cover và challenge, lời ca chạm đến nỗi đau tình yêu tan vỡ một cách chân thực và sâu sắc. Được phát hành như track đầu tiên trong EP cùng tên, bài hát với giai điệu chậm rãi, vocal run rẩy và beat sản xuất bởi DRUM7 đã nhanh chóng thống trị Zing MP3 và các bảng xếp hạng, đạt chứng nhận triệu view trên YouTube chỉ sau thời gian ngắn. Nội dung kể về việc cố gắng chia đôi nỗi buồn để bớt đau đớn, nhưng càng làm tim thêm nhói, khiến khán giả trẻ đồng cảm sâu sắc, đặc biệt là những ai từng trải qua chia tay. MV với hình ảnh tối giản nhưng đầy biểu cảm, kết hợp hiệu ứng mưa rơi tượng trưng cho nước mắt, đã góp phần tạo nên sức viral mạnh mẽ. Đây là một trong những hit tiêu biểu của V-pop gần đây, đại diện cho thế hệ nghệ sĩ trẻ biết cách biến nỗi đau thành nghệ thuật, và nó hoàn hảo cho những khoảnh khắc bạn muốn thả hồn vào âm nhạc để chữa lành.",
        youtube: "https://www.youtube.com/watch?v=GpmOn4RyzZI",
      },
      {
        name: "Thị Mầu",
        desc: "Sự trở lại ấn tượng của Hòa Minzy năm 2023 hợp tác với Masew, 'Thị Mầu' là sự kết hợp hoàn hảo giữa yếu tố dân gian truyền thống và âm nhạc hiện đại, mang đến giai điệu vui tươi, sôi động và viral mạnh mẽ trên mọi nền tảng xã hội. Với lời ca dí dóm dựa trên câu chuyện dân gian nhưng được remix theo phong cách pop đương đại, bài hát nhanh chóng lọt top trending YouTube và Spotify, nhận được hàng triệu lượt xem nhờ MV đầy màu sắc với trang phục truyền thống kết hợp dance hiện đại. Hòa Minzy với giọng hát ngọt ngào và năng lượng bùng nổ đã khiến track này trở thành anthem cho mùa hè 2023, được sử dụng rộng rãi trong các video TikTok và sự kiện âm nhạc. Sản xuất bởi Masew với beat bắt tai và hook chorus dễ hát theo, 'Thị Mầu' không chỉ giải trí mà còn khơi gợi niềm tự hào văn hóa Việt Nam cho thế hệ trẻ. Đây là bài hát lý tưởng để bạn bật lên khi muốn tăng năng lượng, party cùng bạn bè hoặc đơn giản là cười vui vẻ sau ngày dài mệt mỏi.",
        youtube: "https://www.youtube.com/watch?v=0yHtYPeK2Jg",
      },
      {
        name: "Một Triệu Like",
        desc: "Rap chill đầy tinh tế của Đen Vâu feat. Thành Đồng năm 2023, 'Một Triệu Like' nói về tình yêu giản dị nhưng chân thành giữa thời đại mạng xã hội, nhanh chóng lọt top Zing MP3 và trở thành hit được yêu thích rộng rãi nhờ lời rap sâu cay và beat mượt mà. Với phong cách signature của Đen Vâu, bài hát kết hợp yếu tố acoustic nhẹ nhàng với flow rap tự nhiên, kể câu chuyện về việc tình yêu không cần like ảo mà chỉ cần sự thật lòng, chạm đến trái tim hàng triệu khán giả trẻ. MV đơn giản nhưng ý nghĩa, quay tại các địa điểm quen thuộc ở Việt Nam, đã góp phần tạo sức hút organic, đạt hàng chục triệu view trên YouTube. Track này đại diện cho sự trưởng thành của rap Việt, nơi nghệ sĩ không chỉ giải trí mà còn truyền tải thông điệp xã hội ý nghĩa, và nó hoàn hảo cho những buổi chill cà phê hoặc lái xe đêm khuya, giúp bạn suy ngẫm về giá trị thực sự của tình yêu trong thế giới ảo.",
        youtube: "https://www.youtube.com/watch?v=oigiXW6XyCQ",
      },
      {
        name: "Sau Cơn Mưa",
        desc: "Hit vui tươi của Rhyder & CoolKid năm 2024, 'Sau Cơn Mưa' (phiên bản Freak D Lofi) với giai điệu pop lofi bắt tai đã nhanh chóng lọt top 10 Spotify Việt Nam, mang đến cảm giác tươi mới sau những ngày u ám như cơn mưa tan. Lời ca lạc quan về việc tìm thấy cầu vồng sau bão tố, kết hợp vocal mượt mà của CoolKid và flow rap năng động của Rhyder, tạo nên sức hút khó cưỡng, đặc biệt với khán giả trẻ yêu thích lofi chill. MV với hình ảnh đường phố sau mưa long lanh và dance nhẹ nhàng đã viral trên TikTok, nhận được hàng triệu lượt duet và challenge. Bài hát này là minh chứng cho sự phát triển của V-pop lofi, nơi truyền thống remix gặp gỡ hiện đại, và nó lý tưởng cho playlist sáng sớm hoặc workout, giúp bạn khởi đầu ngày mới với năng lượng tích cực và nụ cười trên môi.",
        youtube: "https://www.youtube.com/watch?v=xEhVaOCI0Yo",
      },
      {
        name: "Chịu Cách Mình Nói Thua",
        desc: "Bản rap hài hước và dễ nghiện của Rhyder năm 2024, 'Chịu Cách Mình Nói Thua' với lời ca dí dóm về việc chấp nhận thất bại trong tình yêu một cách vui vẻ, nhanh chóng trở thành trending trên TikTok nhờ phần hook chorus catchy và beat trap vui nhộn. Là single đầu tay sau Rap Việt mùa 3, bài hát thể hiện phong cách signature của Rhyder với flow nhanh, punchline sắc bén và thông điệp tích cực về việc buông bỏ để tiến lên, nhận được lời khen từ cộng đồng rap Việt. MV với concept hài kịch đường phố và hiệu ứng visual sống động đã đạt hàng triệu view, góp phần đưa Rhyder lên tầm sao mới. Đây là track hoàn hảo cho những ai muốn cười xả stress qua âm nhạc, đặc biệt khi party hoặc scroll feed, giúp bạn vibe theo nhịp điệu trẻ trung và không thể ngừng hát theo.",
        youtube:
          "https://youtu.be/dm5-tn1Rug0?si=um6CyAfE_u7qIoTr",
      },
      {
        name: "Bình Yên",
        desc: "Ballad sâu lắng của Vũ. feat. Binz năm 2024 từ album 'Bảo Tàng Của Nuối Tiếc', 'Bình Yên' với giai điệu acoustic mượt mà và lời ca triết lý về sự bình yên sau những tiếc nuối đã nhanh chóng thịnh hành trên mọi nền tảng, đạt top streaming cao nhờ sự kết hợp hoàn hảo giữa vocal cảm xúc của Vũ. và rap tinh tế của Binz. Bài hát kể về hành trình tìm lại sự yên bình trong tâm hồn giữa bộn bề cuộc sống, với MV nghệ thuật quay tại các địa danh thơ mộng Việt Nam, tạo nên sức hút thẩm mỹ cao. Đây là một trong những track tiêu biểu của album, nhận được giải thưởng và lời khen từ fan, đại diện cho sự chín muồi của V-pop ballad. Lý tưởng cho những khoảnh khắc thư giãn, nghe đêm khuya hoặc suy tư, 'Bình Yên' sẽ đưa bạn vào không gian tĩnh lặng đầy cảm hứng.",
        youtube: "https://www.youtube.com/watch?v=f9P7_qWrf38",
      },
      {
        name: "Mưa Tháng Sáu",
        desc: "Ballad chill đầy cảm xúc của Văn Mai Hương feat. GREY D & TRUNG QUÂN năm 2023, 'Mưa Tháng Sáu' với slow rap cuốn hút và beat mưa rơi đã hot trên TikTok nhờ lời ca hoài niệm về tình yêu mùa mưa, đạt hàng triệu stream trên Spotify và YouTube. Sản xuất bởi HỨA KIM TUYỀN, bài hát kết hợp vocal ngọt ngào của Văn Mai Hương với rap mượt của GREY D và phần hát phụ của TRUNG QUÂN, tạo nên sự hài hòa hoàn hảo. MV với hình ảnh mưa rơi lãng mạn và câu chuyện tình yêu buồn đã chạm đến trái tim khán giả, trở thành anthem cho mùa mưa Việt Nam. Đây là track lý tưởng cho playlist chill, giúp bạn đắm chìm trong nỗi nhớ dịu dàng và tìm thấy sự đồng cảm qua từng nốt nhạc.",
        youtube: "https://www.youtube.com/watch?v=_8vekzCF04Q",
      },
      {
        name: "Hoa Cỏ Lau",
        desc: "Ca khúc indie đầy nỗi nhớ của Vũ. năm 2023, 'Hoa Cỏ Lau' vẫn viral mạnh mẽ đến 2024-2025 nhờ giai điệu acoustic da diết và lời ca thơ mộng về ký ức tuổi trẻ, đạt top trending trên các nền tảng âm nhạc. Với vocal ấm áp và sản xuất tối giản, bài hát gợi lên hình ảnh cánh đồng cỏ lau gió thoảng, nơi những kỷ niệm tình yêu được lưu giữ mãi mãi, chạm đến hàng triệu trái tim yêu thích indie pop Việt. MV quay tại đồng quê Việt Nam với hình ảnh nghệ thuật đã góp phần tạo sức hút lâu dài, khiến nó trở thành hit kinh điển của giai đoạn. Đây là lựa chọn hoàn hảo cho những buổi chiều thu, khi bạn muốn sống lại những khoảnh khắc hoài niệm và để âm nhạc an ủi tâm hồn.",
        youtube: "https://youtu.be/rSso1Z-7ct0?si=cfZrpzj8BYwdYcnr",
      },
      {
        name: "Sự Nghiệp Chướng",
        desc: "Rap diss gây sốc của Pháo năm 2025, 'Sự Nghiệp Chướng' (Cukak Remix) với lời ca sắc bén và beat trap nặng đô đã phá kỷ lục view nhanh chóng trên YouTube, tạo nên cơn bão tranh luận trong cộng đồng rap Việt. Là track mạnh mẽ về những 'nghiệp chướng' trong sự nghiệp và tình yêu, bài hát thể hiện phong cách bold của Pháo với flow nhanh và punchline đanh thép, remix bởi Cukak thêm phần hiện đại và dễ nghe. MV với concept đen tối và hiệu ứng visual mạnh mẽ đã viral toàn cầu, đưa Pháo trở lại spotlight sau thời gian dài. Đây là bài hát dành cho fan rap underground, giúp bạn giải tỏa năng lượng qua những verse đầy lửa và thông điệp dũng cảm đối diện thử thách.",
        youtube: "https://www.youtube.com/watch?v=U0-Mfc5ijkQ",
      },
      {
        name: "Sáng Dưới Chân Mây",
        desc: "Hit remix TikTok 2025 của Nguyễn Hữu Kha, 'Sáng Dưới Chân Mây' với giai điệu tươi mới, upbeat pop đã dễ dàng lan tỏa trên mạng xã hội nhờ phần chorus catchy và lời ca lạc quan về hy vọng tương lai. Là sản phẩm executive bởi chính nghệ sĩ, bài hát kết hợp yếu tố electronic nhẹ nhàng với vocal sáng sủa, nhanh chóng đạt triệu view trên YouTube và top Spotify Viral. MV quay tại núi non Việt Nam với hình ảnh bình minh rực rỡ tượng trưng cho sự khởi đầu mới, tạo sức hút thẩm mỹ cao. Đây là track hoàn hảo để khởi động ngày mới, workout hoặc road trip, mang đến vibe tích cực và truyền cảm hứng cho thế hệ trẻ theo đuổi giấc mơ.",
        youtube: "https://www.youtube.com/watch?v=fvBBwFhfMSY",
      },
    ],
    date: "2025-10-20",
    views: 1500,
    type: "playlists",
    mood: "Vibrant",
    final:
      "Playlist 'Vibe Việt Gần Đây - Những Hit Đỉnh Cao 2023-2025' mang đến sự đa dạng tuyệt vời của V-pop từ những năm gần đây, giúp bạn chill với ballad sâu lắng, vibe sôi động với rap năng lượng, và bắt nhịp xu hướng với pop bắt tai từ các hitmaker hàng đầu như Sơn Tùng M-TP, Vũ., HIEUTHUHAI, Hòa Minzy, Tăng Duy Tân, Rhyder, CoolKid, Văn Mai Hương, Pháo, Quang Hùng MasterD, Nguyễn Hữu Kha và nhiều hơn nữa. Từ 'Đừng Làm Trái Tim Anh Đau' phá kỷ lục MV drama của Sơn Tùng, đến 'Thủy Triều' cuốn hút của Quang Hùng, 'Cắt Đôi Nỗi Sầu' trend TikTok buồn man mác, 'Thị Mầu' vui tươi dân gian hiện đại, 'Một Triệu Like' rap chill chân thành, 'Sau Cơn Mưa' lofi tươi mới, 'Chịu Cách Mình Nói Thua' hài hước dễ nghiện, 'Bình Yên' sâu lắng collab Vũ.-Binz, 'Mưa Tháng Sáu' hoài niệm mùa mưa, 'Hoa Cỏ Lau' indie da diết, 'Sự Nghiệp Chướng' rap diss sốc óc, đến 'Sáng Dưới Chân Mây' remix hy vọng – mỗi track là một mảnh ghép hoàn hảo của hành trình âm nhạc Việt đương đại, thống trị Billboard, Spotify, Zing và TikTok. Hy vọng bạn sẽ tìm thấy những giai điệu yêu thích, hát theo chorus catchy, chia sẻ với bạn bè để cùng tạo trend, và để playlist này trở thành người bạn đồng hành trong mọi khoảnh khắc: từ party cuồng nhiệt, chill cà phê, đến suy tư đêm khuya. V-pop đang bùng nổ, và bạn chính là phần của nó – bật lên, vibe cùng, và chờ đón những hit mới 2026!",
  },
];
