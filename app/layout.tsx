import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// 日本語フォント最適化
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: "パーソナルジム比較 | 全国1,000店舗から最適なジムを探す【2026最新】| BEST-FIT",
  description: "全国1,000店舗以上のパーソナルジムを徹底比較。RIZAP、24/7Workout、BEYONDなど人気ブランドから地域密着型まで。料金・口コミ・アクセスで最適なジムを探せます【2026年最新】",
  openGraph: {
    title: "パーソナルジム比較 | 全国1,000店舗から最適なジムを探す【2026最新】| BEST-FIT",
    description: "全国1,000店舗以上のパーソナルジムを徹底比較。RIZAP、24/7Workout、BEYONDなど人気ブランドから地域密着型まで。料金・口コミ・アクセスで最適なジムを探せます【2026年最新】",
    url: "https://dunlopsportsclub.jp",
    siteName: "BEST-FIT",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "パーソナルジム比較 | 全国1,000店舗から最適なジムを探す【2026最新】| BEST-FIT",
    description: "全国1,000店舗以上のパーソナルジムを徹底比較。RIZAP、24/7Workout、BEYONDなど人気ブランドから地域密着型まで。料金・口コミ・アクセスで最適なジムを探せます【2026年最新】",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
