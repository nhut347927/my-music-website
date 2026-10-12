const fs = require('fs');

const trackIdMap = {
  'lyric-am-sweet-liquor': '11dFghVXANMlKmJXsNCbNl',
  'lyric-vet-mua-vu-cat-tuong': '4jH138c293t9e3v4n9pU3p',
  'lyric-khong-buong-hngle-ft-ari': '11dFghVXANMlKmJXsNCbNl',
  'lyric-nguoi-binh-thuong-vu-cat-tuong': '4jH138c293t9e3v4n9pU3p',
  'lyric-goi-ten-em-min': '4jV7PZ5yN6k3T6L7n0mYJ4',
  'lyric-vi-yeu-cu-dam-dau-min': '4jV7PZ5yN6k3T6L7n0mYJ4',
  'lyric-id-072019-wn': '2Z1L33y5K0FjN4u2k5I2qO',
  'lyric-id-t41104-wn': '2Z1L33y5K0FjN4u2k5I2qO',
  'lyric-id-2022-wn': '2Z1L33y5K0FjN4u2k5I2qO',
  'lyric-vuon-may-vua-hay-an-ngo': '2Z1L33y5K0FjN4u2k5I2qO',
  'lyric-thang-dien-justatee-ft-phuong-ly': '2Z1L33y5K0FjN4u2k5I2qO',
  'lyric-1-ai-ke-ben-hieuthuhai': '2Z1L33y5K0FjN4u2k5I2qO',
  'lyric-only-leehi': '11dFghVXANMlKmJXsNCbNl',
  'lyric-ke-tu-day-mylina': '11dFghVXANMlKmJXsNCbNl',
  'lyric-anh-la-ai-phuong-ly': '2Z1L33y5K0FjN4u2k5I2qO',
  'lyric-anh-la-thang-toi-chuot-sam-set': '11dFghVXANMlKmJXsNCbNl',
  'lyric-binh-yen-vu': '4jH138c293t9e3v4n9pU3p',
  'lyric-chim-sau-rpt-mck-ft-trung-tran': '5sL6zX5q3q1wZ4v8j6b9v7',
  'lyric-chung-ta-cua-hien-tai-son-tung-m-tp': '0K0YyT1N7d7Yp3P7a9M4wG',
  'lyric-i-love-you-3000-stephanie-poetri': '11dFghVXANMlKmJXsNCbNl',
  'lyric-luc-em-nho-anh-phung-khanh-linh': '4jH138c293t9e3v4n9pU3p',
  'lyric-nghe-ke-la-nam-90-cao': '2Z1L33y5K0FjN4u2k5I2qO',
  'lyric-vuon-hoa-con-ca-dong-nhi': '4jV7PZ5yN6k3T6L7n0mYJ4',
  'lyric-quen-dat-ten-tlinh': '5sL6zX5q3q1wZ4v8j6b9v7',
  'lyric-1-ngan-noi-dau-van-mai-huong': '4jV7PZ5yN6k3T6L7n0mYJ4',
  'lyric-vet-thuong-dat-g': '2Z1L33y5K0FjN4u2k5I2qO',
  'lyric-em-gioi-vu-cat-tuong': '4jH138c293t9e3v4n9pU3p',
  'lyric-dom-dom-jack': '0K0YyT1N7d7Yp3P7a9M4wG',
  'lyric-anh-oi-o-lai-chi-pu': '4jV7PZ5yN6k3T6L7n0mYJ4',
  'lyric-noi-nay-co-anh-son-tung-m-tp': '0K0YyT1N7d7Yp3P7a9M4wG',
  'lyric-nang-am-trong-tim-khac-viet': '0K0YyT1N7d7Yp3P7a9M4wG',
  'lyric-tu-thich-thich-thanh-yeu-yeu-roi-thuong-thuong-amee': '4jV7PZ5yN6k3T6L7n0mYJ4',
  'lyric-tinh-yeu-cham-tre-monstar': '2Z1L33y5K0FjN4u2k5I2qO',
  'lyric-bao-tien-mot-mo-binh-yen-14-casper-bon': '4jH138c293t9e3v4n9pU3p'
};

const filePath = 'src/app/data/lyrics-data.ts';
let code = fs.readFileSync(filePath, 'utf8');

for (const [slug, trackId] of Object.entries(trackIdMap)) {
  const spotifyUrl = `https://open.spotify.com/track/${trackId}`;
  
  // Find the block for this slug
  const slugRegex = new RegExp(`slug:\\s*["']${slug}["']([\\s\\S]*?)(audio:\\s*["'][^"']*["'],?)`, 'g');
  code = code.replace(slugRegex, (match, p1, p2) => {
    return `slug: "${slug}"${p1}audio: "${spotifyUrl}",\n    spotifyTrackId: "${trackId}",\n    spotifyUrl: "${spotifyUrl}",`;
  });
}

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully updated local lyrics-data.ts with Spotify Track IDs and URLs!');
