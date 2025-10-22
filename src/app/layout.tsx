import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import logo from "./asset/logo.png";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/app/components/layout/header";
import Footer from "./components/layout/footer";
import { GoogleAnalytics } from "nextjs-google-analytics";



const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moechan.top"),

 title: "Moe | Tâm sự cùng bạn",
  description: "Nơi bạn thấy được cảm nghĩ từ góc nhìn của một người bạn.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Moe | Tâm sự cùng bạn",
    description: "Phân tích bài hát, cảm xúc và playlist yêu thích.",
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
          {/* <Script
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
          </Script> */}
          <GoogleAnalytics trackPageViews gaMeasurementId="G-X22ZH1QRQ6" />
        </ThemeProvider>
      </body>
    </html>
  );
}
