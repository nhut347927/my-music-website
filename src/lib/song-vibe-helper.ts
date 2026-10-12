import { LyricPost, Lyric } from "@/app/types/type";

/**
 * Trích xuất 1/4 lời bài hát (hoặc tối đa 2 đoạn đầu tiên) nhằm tuân thủ nguyên tắc Fair Use
 * và tránh vi phạm bản quyền toàn văn.
 */
export function getCopyrightSafeLyricsExcerpt(lyrics: Lyric[]): {
  excerpt: Lyric[];
  totalOriginalCount: number;
  shownCount: number;
  percentageText: string;
} {
  if (!lyrics || lyrics.length === 0) {
    return {
      excerpt: [],
      totalOriginalCount: 0,
      shownCount: 0,
      percentageText: "0%",
    };
  }

  // Lấy 1/4 số đoạn (tối thiểu 1 đoạn, tối đa 2 đoạn)
  const quarterCount = Math.max(1, Math.min(2, Math.ceil(lyrics.length / 4)));
  const excerpt = lyrics.slice(0, quarterCount);

  return {
    excerpt,
    totalOriginalCount: lyrics.length,
    shownCount: excerpt.length,
    percentageText: `1/${Math.max(2, Math.round(lyrics.length / excerpt.length))}`,
  };
}

/**
 * Tạo Spotify URL và Embed link cho bài hát
 */
export function getSpotifyInfo(song: LyricPost): {
  searchUrl: string;
  embedUrl: string;
  appUrl: string;
  trackId: string;
  hasDirectEmbed: boolean;
} {
  let cleanTitle = song.title || "";
  cleanTitle = cleanTitle.replace(/^(lyric|lyrics|lời bài hát|loi bai hat)\s*[:-]?\s*/i, "");
  if (song.artist) {
    const escapedArtist = song.artist.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    cleanTitle = cleanTitle.replace(new RegExp(`\\s*[-–—|•]\\s*${escapedArtist}.*$`, "i"), "");
  }
  cleanTitle = cleanTitle.trim() || song.title;

  let trackId = song.spotifyTrackId || "";
  if (!trackId && song.spotifyUrl && song.spotifyUrl.includes("/track/")) {
    const afterTrack = song.spotifyUrl.split("/track/")[1];
    trackId = afterTrack.split("?")[0].split("/")[0];
  }
  if (!trackId && song.audio && (song.audio.includes("spotify.com") || song.audio.startsWith("spotify:"))) {
    if (song.audio.includes("/track/")) {
      const afterTrack = song.audio.split("/track/")[1];
      trackId = afterTrack.split("?")[0].split("/")[0];
    } else if (song.audio.startsWith("spotify:track:")) {
      trackId = song.audio.replace("spotify:track:", "");
    }
  }

  const query = encodeURIComponent(`${cleanTitle} ${song.artist}`.trim());
  const searchUrl = trackId
    ? `https://open.spotify.com/track/${trackId}`
    : song.spotifyUrl && !song.spotifyUrl.includes("/search/")
    ? song.spotifyUrl
    : `https://open.spotify.com/search/${query}`;

  let embedUrl = "";
  let hasDirectEmbed = false;
  if (trackId && trackId.length >= 10) {
    embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
    hasDirectEmbed = true;
  }

  const appUrl = trackId ? `spotify:track:${trackId}` : `spotify:search:${query}`;

  return { searchUrl, embedUrl, appUrl, trackId, hasDirectEmbed };
}

/**
 * Tạo Vibe & Bối cảnh âm nhạc chuyên sâu cho bài hát (Đã loại bỏ "Thời điểm lý tưởng")
 */
export function getSongVibeProfile(song: LyricPost): {
  genre: string;
  mood: string;
  vibeTags: string[];
  instruments: string[];
  story: string;
} {
  // 1. Thể loại mặc định dựa vào categories
  const categoryNames = song.categories?.map((c) => c.name) || [];
  const genre =
    song.genre ||
    categoryNames.find((n) => !n.toLowerCase().includes("nhạc việt")) ||
    "Ballad / Indie Pop";

  // 2. Phân tích Vibe & Mood dựa vào tiêu đề và nội dung bài hát
  const titleLower = (song.title + " " + song.desc + " " + song.comment).toLowerCase();

  let mood = song.mood || "Sâu lắng & Lắng đọng tâm tư";
  let instruments = song.instruments || [
    "Piano acoustic",
    "Guitar mộc",
    "Dàn dây (Strings)",
    "Hiệu ứng Ambient",
  ];
  let vibeTags = [
    `#${genre.replace(/[^a-zA-Z0-9\u00C0-\u024F\u1E00-\u1EFF]/g, "")}`,
    "#VietnameseMusic",
  ];

  if (
    titleLower.includes("mưa") ||
    titleLower.includes("lạnh") ||
    titleLower.includes("buồn")
  ) {
    mood = "Hoài niệm, da diết và man mác nỗi buồn chiều mưa";
    instruments = [
      "Piano trầm ấm",
      "Guitar acoustic",
      "Tiếng mưa nền (Rain Sound)",
      "Dàn dây du dương",
    ];
    vibeTags.push("#RainyVibe", "#Melancholy", "#HealingRain");
  } else if (
    titleLower.includes("yêu") ||
    titleLower.includes("sweet") ||
    titleLower.includes("say") ||
    titleLower.includes("em")
  ) {
    mood = "Ngọt ngào, say đắm và lãng mạn nhẹ nhàng";
    instruments = [
      "Guitar đệm ấm áp",
      "Electric Piano",
      "Synthpad nhẹ nhàng",
      "Bass mềm mại",
    ];
    vibeTags.push("#RomanticVibe", "#SweetMelody", "#LoveSongs");
  } else if (
    titleLower.includes("buông") ||
    titleLower.includes("chia") ||
    titleLower.includes("đau") ||
    titleLower.includes("vết")
  ) {
    mood = "Thổn thức, đau đáu và cảm xúc giằng xé sau chia ly";
    instruments = [
      "Piano solo mộc mạc",
      "Cello da diết",
      "Hiệu ứng Reverb sâu",
      "Acoustic Beat",
    ];
    vibeTags.push("#Heartbroken", "#DeepEmotional", "#Catharsis");
  } else {
    mood = "Thư thái, êm dịu và giải tỏa những áp lực thường nhật";
    vibeTags.push("#ChillVibe", "#NightWalk", "#InnerPeace");
  }

  // 3. Câu chuyện bài hát chuyên sâu
  const story =
    song.story ||
    song.desc ||
    `"${song.title}" là tác phẩm âm nhạc đậm dấu ấn nghệ thuật của ${song.artist}, mang đến một không gian âm nhạc vừa chân thành vừa giàu tính tự sự. Từng câu chữ và giai điệu dẫn dắt người nghe qua những cung bậc cảm xúc tinh tế, gợi nhắc về những kỷ niệm đẹp đẽ nhưng cũng đong đầy nỗi niềm chiêm nghiệm trong tình yêu và cuộc sống.`;

  return {
    genre,
    mood,
    vibeTags,
    instruments,
    story,
  };
}

/**
 * Danh mục bài hát chính xác đã kiểm tra theo từng nghệ sĩ / ca sĩ
 */
const ARTIST_ACCURATE_DISCOGRAPHY: Record<string, string[]> = {
  "sweet liquor": [
    "Ấm",
    "Trốn Tìm",
    "Thế Giới Có Nơi Nào Cho Em",
    "Vũ Trụ Ngừng Trôi",
  ],
  "vũ cát tường": [
    "Vết Mưa",
    "Mơ",
    "Yêu Xa",
    "Từng Là",
    "Người Bình Thường",
    "Có Người",
    "Hành Tinh Ánh Sáng",
  ],
  "hngle ft. ari": [
    "Không Buông",
    "Chuyện Đôi Ta",
    "Cô Đơn Dưới Mưa",
    "Nói Anh Nghe",
    "Ur Last",
  ],
  "hngle": ["Không Buông", "Cô Đơn", "Nói Anh Nghe", "Ur Last"],
  "ari": ["Không Buông", "Lạc Lối", "Thức Giấc"],
  "min": [
    "Ghen",
    "Có Em Chờ",
    "Trên Tình Bạn Dưới Tình Yêu",
    "Đừng Yêu Nữa Em Mệt Rồi",
    "Gọi Tên Em",
    "Cà Phê",
  ],
  "w/n": [
    "3107",
    "3107-2",
    "3107-3",
    "3107-4",
    "id 072019",
    "id T41104",
    "id 2022",
  ],
  "267": ["3107", "id 072019", "id T41104", "id 2022"],
  "an ngô": ["Vườn Mây Vừa Hay", "Nghe Kể Là Năm 90", "Đông Kiếm Em"],
  "mylina": ["Vườn Mây Vừa Hay", "Kể Từ Đây", "Tựa Đêm"],
  "justatee": [
    "Thằng Điên",
    "Đã Lỡ Yêu Em Nhiều",
    "Bâng Khuâng",
    "Mặt Trời Của Em",
    "2AM",
    "Forever Alone",
  ],
  "phương ly": [
    "Mặt Trời Của Em",
    "Thằng Điên",
    "Missing You",
    "ThichThich",
    "Anh Là Ai",
    "Anh Là Thằng Tồi",
  ],
  "phùng khánh linh": [
    "Hôm Nay Tôi Buồn",
    "Cô Gái Của Ngày Hôm Qua",
    "Chỉ Còn Một Đêm Nữa Thôi",
    "Căn Gác Mùa Hè",
  ],
  "vũ.": [
    "Lạ Lùng",
    "Bước Qua Mùa Cô Đơn",
    "Đông Kiếm Em",
    "Bước Qua Nhau",
    "Bình Yên",
    "Lời Tạm Biệt Chưa Nói",
  ],
  "mck": [
    "Chìm Sâu",
    "Tại Vì Sao",
    "Suit & Tie",
    "Thờ Er",
    "Badtrip",
    "Chỉ Một Đêm Nữa Thôi",
  ],
  "sơn tùng m-tp": [
    "Chúng Ta Của Hiện Tại",
    "Nơi Này Có Anh",
    "Lạc Trôi",
    "Muộn Rồi Mà Sao Còn",
    "Hãy Trao Cho Anh",
    "Chúng Ta Của Tương Lai",
  ],
  "stephanie poetri": [
    "I Love You 3000",
    "I Wanna Get Better",
    "Selfish",
    "Picture Myself",
    "Straight To You",
  ],
  "lena": [
    "Lúc Em Nhớ Anh",
    "Say",
    "Ôm Em Đi",
    "Quá Khứ Của Em",
    "Nghe Kể Là Năm 90",
  ],
  "o.lew": [
    "Vườn Hoa Con Cá",
    "Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau",
    "Mộng Mơ",
    "Cô Gái Bàn Bên",
  ],
  "phạm nguyên ngọc": [
    "Quên Đặt Tên",
    "Cảm Ơn Tổn Thương",
    "Sao Em Lại Tắt Máy",
    "Mặt Mộc",
    "Dù Cho Mai Về Sau",
  ],
  "văn mai hương": [
    "Một Ngàn Nỗi Đau",
    "Đại Minh Tinh",
    "Mưa Tháng Sáu",
    "Cầu Hôn",
    "Hương",
    "Nếu Như Anh Đến",
  ],
  "fishy": ["Vết Thương", "Em Giỏi", "Tình Ca", "Giữ Lấy Nhau", "Chỉ Cần Em"],
  "jack": [
    "Đom Đóm",
    "Hoa Hải Đường",
    "Là 1 Thằng Con Trai",
    "Sóng Gió",
    "Bạc Phận",
    "Hồng Nhan",
  ],
  "chi pu": [
    "Anh Ơi Ở Lại",
    "Đóa Hoa Hồng",
    "Từ Hôm Nay",
    "Cung Đàn Vỡ Đôi",
    "Mơ Anh",
  ],
  "duongg": [
    "Nắng Ấm Trong Tim",
    "3107",
    "Dù Cho Mai Về Sau",
    "Chỉ Muốn Cùng Em",
    "Tình Yêu Màu Nắng",
  ],
  "amee": [
    "Từ Thích Thích Thành Yêu Yêu",
    "Anh Nhà Ở Đâu Thế",
    "Đen Đá Không Đường",
    "Sao Anh Chưa Về Nhà",
    "Hai Mươi Hai",
  ],
  "grey d": [
    "Tình Yêu Chậm Trễ",
    "vaicaunoicokhiennguoithaydoi",
    "Dự Báo Thời Tiết Hôm Nay Mưa",
    "Đưa Em Về Nhà",
    "Giữ Lấy Làm Gì",
  ],
  "14 casper": [
    "Bao Tiền Một Mớ Bình Yên",
    "Một Triệu Khung Hình",
    "Bầu Trời Mới",
    "Từng Ngày Yêu",
  ],
};

export interface ArtistSongItem {
  title: string;
  artist: string;
  isInternal: boolean;
  slug?: string;
  spotifySearchUrl: string;
}

/**
 * Lấy danh sách các bài hát chính xác của ca sĩ / nghệ sĩ
 */
export function getArtistDiscography(
  song: LyricPost,
  allSongs: LyricPost[] = []
): ArtistSongItem[] {
  const currentTitleLower = song.title.toLowerCase();
  const artistLower = song.artist.toLowerCase();

  // 1. Tìm các bài hát cùng nghệ sĩ trong danh sách bài hát
  const internalMatches = allSongs
    .filter((s) => s.slug !== song.slug)
    .filter((s) => {
      const sArtist = s.artist.toLowerCase();
      return (
        sArtist.includes(artistLower) ||
        artistLower.includes(sArtist) ||
        (song.artist.includes("ft.") &&
          song.artist
            .split("ft.")
            .some((part) => sArtist.includes(part.trim().toLowerCase())))
      );
    })
    .map((s) => ({
      title: s.title,
      artist: s.artist,
      isInternal: true,
      slug: s.slug,
      spotifySearchUrl: `https://open.spotify.com/search/${encodeURIComponent(
        `${s.title} ${s.artist}`
      )}`,
    }));

  // 2. Tra cứu danh sách đĩa nhạc chính xác đã xác minh
  let verifiedTitles: string[] = [];
  for (const [key, titles] of Object.entries(ARTIST_ACCURATE_DISCOGRAPHY)) {
    if (artistLower.includes(key) || key.includes(artistLower)) {
      verifiedTitles = titles;
      break;
    }
  }

  // Nếu không có trong từ điển, dùng song.otherSongs
  if (verifiedTitles.length === 0 && song.otherSongs) {
    verifiedTitles = song.otherSongs;
  }

  const result: ArtistSongItem[] = [...internalMatches];
  const seenTitles = new Set(
    result.map((r) => r.title.toLowerCase()).concat(currentTitleLower)
  );

  for (const t of verifiedTitles) {
    const cleanTitle = t.replace(/^lyric\s+/i, "").trim();
    if (!seenTitles.has(cleanTitle.toLowerCase())) {
      seenTitles.add(cleanTitle.toLowerCase());
      result.push({
        title: cleanTitle,
        artist: song.artist,
        isInternal: false,
        spotifySearchUrl: `https://open.spotify.com/search/${encodeURIComponent(
          `${cleanTitle} ${song.artist}`
        )}`,
      });
    }
  }

  return result.slice(0, 6);
}

/**
 * Tìm danh sách bài hát cùng nhạc sĩ / sáng tác
 */
export function getSongsByComposer(
  composer: string,
  currentSlug: string,
  allSongs: LyricPost[] = []
): LyricPost[] {
  if (!composer || composer.trim() === "") return [];
  const normalized = composer.trim().toLowerCase();

  return allSongs
    .filter(
      (s) =>
        s.slug !== currentSlug &&
        s.composer &&
        s.composer.trim().toLowerCase() === normalized
    )
    .slice(0, 6);
}

/**
 * Gợi ý các bài hát có cùng Vibe / Thể loại
 */
export function getSimilarVibeSongs(
  currentSong: LyricPost,
  allSongs: LyricPost[] = []
): LyricPost[] {
  const currentCats = new Set(currentSong.categories?.map((c) => c.name) || []);

  const scored = allSongs
    .filter((s) => s.slug !== currentSong.slug)
    .map((s) => {
      let score = 0;
      // Cùng thể loại
      s.categories?.forEach((c) => {
        if (currentCats.has(c.name)) score += 2;
      });
      // Cùng nhạc sĩ
      if (
        s.composer &&
        currentSong.composer &&
        s.composer === currentSong.composer
      ) {
        score += 3;
      }
      // Cùng năm
      if (s.year === currentSong.year) {
        score += 1;
      }
      return { song: s, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 6).map((item) => item.song);
}
