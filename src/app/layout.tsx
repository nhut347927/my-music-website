// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/app/components/layout/header";
import Footer from "./components/layout/footer";
const inter = Inter({ subsets: ["latin"], display: "swap" });

// ── CHỈ THÊM ĐOẠN NÀY (1 CHỖ DUY NHẤT) ─────────────────────────────────────
// export const metadata: Metadata = {
//   verification: {
//     google: "bwLuvrjjT0lqS0tU90TFX5mm9DG4x3Xu6FLK-8meLgo",
//   },
// };
// ─────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Background Video */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="
      w-full h-full object-cover
      blur-xl
      opacity-20
      dark:opacity-10
    "
            >
              <source src="/video/vid.mp4" type="video/mp4" />
            </video>

            {/* Overlay để dễ đọc chữ */}
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
          </div>

          <Header />
          <main className="max-w-6xl mx-auto p-4">{children}</main>
          <Footer />

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
