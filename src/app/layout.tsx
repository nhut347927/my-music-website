import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Music Website",
  description: "Khám phá âm nhạc, nghệ sĩ, playlist và phân tích bài hát yêu thích của bạn.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-black text-white font-sans">
        <header className="p-4 border-b border-gray-800">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-blue-400">MyMusic</h1>
            <ul className="flex gap-6 text-sm">
              <li><a href="/" className="hover:text-blue-400">Trang chủ</a></li>
              <li><a href="/pages/artists" className="hover:text-blue-400">Nghệ sĩ</a></li>
              <li><a href="/pages/lyrics" className="hover:text-blue-400">Lời bài hát</a></li>
              <li><a href="/pages/playlists" className="hover:text-blue-400">Playlist</a></li>
              <li><a href="/pages/news" className="hover:text-blue-400">Tin tức</a></li>
              <li><a href="/pages/analysis" className="hover:text-blue-400">Phân tích</a></li>
            </ul>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto p-4">{children}</main>

        <footer className="p-4 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MyMusic. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
