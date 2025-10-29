import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/app/components/layout/header";
import Footer from "./components/layout/footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://moe.io.vn"),

  title: "Moe | Trang này có những lời ngớ ngẩn",
  description:
    "Nơi có những bài hát, playlist và những thứ hữu ích mà tớ sưu tầm.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Moe | Trang này có những lời ngớ ngẩn",
    description:
      "Nơi có những bài hát, playlist và những thứ hữu ích mà tớ sưu tầm.",
    images: ["/logo.png"],
  },
  // other: {
  //   "google-site-verification": "uEUgiQeU6YdKH1CMnr9o7_2idQdvF7FLqvRwBUBw6Kc", // Xác minh Google
  // },
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
          <Header />

          {/* MAIN */}
          <main className="max-w-6xl mx-auto p-4">{children}</main>

          {/* FOOTER */}
          <Footer />

          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-X22ZH1QRQ6"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-X22ZH1QRQ6');
  `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}
