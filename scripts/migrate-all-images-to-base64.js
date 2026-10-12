const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const { Client } = require('pg');

// 1. Helper to convert local image file to base64 Data URI
function fileToBase64(filePath) {
  if (!filePath || !fs.existsSync(filePath)) return '';
  const ext = path.extname(filePath).toLowerCase();
  let mime = 'image/jpeg';
  if (ext === '.png') mime = 'image/png';
  else if (ext === '.webp') mime = 'image/webp';
  else if (ext === '.svg') mime = 'image/svg+xml';
  const buffer = fs.readFileSync(filePath);
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

// Map mockAsset for TS require
const mockAsset = (module, filename) => {
  const b64 = fileToBase64(filename);
  module.exports = { src: b64, default: { src: b64 } };
};

['.jpg', '.jpeg', '.png', '.webp', '.svg'].forEach((ext) => {
  require.extensions[ext] = mockAsset;
});

// MP3 mock
['.mp3', '.MP3'].forEach((ext) => {
  require.extensions[ext] = (module) => {
    module.exports = '';
  };
});

// Custom resolver for @/ -> src/
const Module = require('module');
const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, isMain, options) {
  if (request.startsWith('@/')) {
    const resolvedPath = path.resolve(__dirname, '../src', request.slice(2));
    if (fs.existsSync(resolvedPath)) return resolvedPath;
    if (fs.existsSync(resolvedPath + '.ts')) return resolvedPath + '.ts';
    if (fs.existsSync(resolvedPath + '.tsx')) return resolvedPath + '.tsx';
    if (fs.existsSync(path.join(resolvedPath, 'index.ts'))) return path.join(resolvedPath, 'index.ts');
  }
  return originalResolveFilename.call(this, request, parent, isMain, options);
};

// Require hook for TypeScript
require.extensions['.ts'] = (module, filename) => {
  const content = fs.readFileSync(filename, 'utf8');
  const compiled = ts.transpileModule(content, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  });
  module._compile(compiled.outputText, filename);
};

require.extensions['.tsx'] = require.extensions['.ts'];

// Import datasets
const { lyricsData } = require('../src/app/data/lyrics-data.ts');
const { playlistsData } = require('../src/app/data/playlists-data.ts');
const { blogData } = require('../src/app/data/blog-data.ts');

function getBase64FromImageImport(img) {
  if (!img) return '';
  if (typeof img === 'string') {
    if (img.startsWith('data:image')) return img;
    // Check if it's a file path
    const localPath = path.resolve(__dirname, '..', img.startsWith('/') ? img.slice(1) : img);
    if (fs.existsSync(localPath)) return fileToBase64(localPath);
    return img;
  }
  if (typeof img === 'object') {
    if (img.src && typeof img.src === 'string' && img.src.startsWith('data:image')) {
      return img.src;
    }
  }
  return '';
}

async function run() {
  console.log('--- BẮT ĐẦU CHUYỂN TOÀN BỘ ẢNH THÀNH BASE64 & LƯU LÊN SUPABASE ---');

  const connectionString = 'postgresql://postgres.dgqfrzwxxkkbuddtwjpc:oOPnjSgLGI8Sec9z@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres';

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
    statement_timeout: 60000,
  });

  try {
    await client.connect();
    console.log('✅ Đã kết nối Supabase PostgreSQL thành công.');

    // 1. CẬP NHẬT LYRICS
    console.log(`Đang xử lý ${lyricsData.length} bài hát sang Base64...`);
    for (const song of lyricsData) {
      const coverB64 = getBase64FromImageImport(song.image);
      const singerB64 = getBase64FromImageImport(song.singerPhoto);

      await client.query(
        `UPDATE public.lyrics_music 
         SET image_base64 = $1, 
             singer_photo_base64 = $2 
         WHERE slug = $3`,
        [coverB64, singerB64, song.slug]
      );
    }
    console.log(`✅ Đã cập nhật ảnh Base64 cho ${lyricsData.length} bài hát.`);

    // 2. CẬP NHẬT PLAYLISTS
    console.log(`Đang xử lý ${playlistsData.length} playlists sang Base64...`);
    for (const pl of playlistsData) {
      const coverB64 = getBase64FromImageImport(pl.image);
      const bannerB64 = getBase64FromImageImport(pl.banner) || coverB64;

      await client.query(
        `UPDATE public.playlists_music 
         SET image = $1, 
             banner = $2 
         WHERE slug = $3`,
        [coverB64, bannerB64, pl.slug]
      );
    }
    console.log(`✅ Đã cập nhật ảnh Base64 cho ${playlistsData.length} playlists.`);

    // 3. CẬP NHẬT BLOGS
    console.log(`Đang xử lý ${blogData.length} bài blogs sang Base64...`);
    for (const blog of blogData) {
      const coverB64 = getBase64FromImageImport(blog.image);
      const avatarB64 = getBase64FromImageImport(blog.userCommentAvatar);

      await client.query(
        `UPDATE public.blogs_music 
         SET image = $1, 
             user_comment_avatar = $2 
         WHERE slug = $3`,
        [coverB64, avatarB64, blog.slug]
      );
    }
    console.log(`✅ Đã cập nhật ảnh Base64 cho ${blogData.length} bài blogs.`);

    console.log('\n🎉 HOÀN TẤT 100%: Toàn bộ hình ảnh đã được mã hóa thành Base64 Data URI trên Supabase Cloud Database!');
  } catch (err) {
    console.error('❌ Lỗi trong quá trình cập nhật Base64:', err);
  } finally {
    await client.end();
  }
}

run();
