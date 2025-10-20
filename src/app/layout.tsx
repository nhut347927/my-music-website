import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import logo from "./asset/logo.png";
import { Metadata } from "next";

import Header from "@/app/components/layout/header";
import Footer from "./components/layout/footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {

  metadataBase: new URL("https://moe-chan.vercel.app"), // đổi thành domain thật

  title: "Moe | Tâm sự cùng bạn",
  description:
    "Nơi bạn thấy được cảm nghĩ từ góc nhìn của một người bình thường",
  keywords: ["Moe", "lời bài hát", "playlist", "phân tích bài hát"],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Moe | Tâm sự cùng bạn",
    description:
      "Nơi bạn thấy được cảm nghĩ từ góc nhìn của một người bình thường",
    url: "https://moe-chan.vercel.app",
    siteName: "Moe",
    images: [
      {
        url: logo.src,
        width: 200,
        height: 200,
        alt: "Moe Logo",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
   other: {
    "google-site-verification": "uEUgiQeU6YdKH1CMnr9o7_2idQdvF7FLqvRwBUBw6Kc" // xac minh google site
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* HEADER */}
         <Header/>

          {/* MAIN */}
          <main className="max-w-6xl mx-auto p-4">{children}</main>

          {/* FOOTER */}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
