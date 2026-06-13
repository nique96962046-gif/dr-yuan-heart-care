import type { Metadata } from "next";
import { Noto_Serif_TC, Noto_Sans_TC } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSerif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-serif",
  display: "swap",
});

const notoSans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "袁明琦醫師｜心臟外科．守護心臟健康",
  description:
    "袁明琦心臟外科醫師，致力於心臟救助義診與大眾醫學衛教，分享心臟保養知識，守護您與家人的心臟健康。",
  keywords: "袁明琦,心臟外科,心臟醫師,義診,心臟保健,心臟知識,醫學衛教",
  openGraph: {
    title: "袁明琦醫師｜心臟外科．守護心臟健康",
    description: "心臟外科專科醫師，深耕義診服務與媒體衛教，讓每一顆心都跳動不息。",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="zh-TW"
      className={`${notoSerif.variable} ${notoSans.variable}`}
    >
      <body>
        <div id="fb-root" />
        <Script
          id="fb-sdk"
          strategy="lazyOnload"
          src="https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v19.0"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}
