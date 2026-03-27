import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的エクスポート設定（Cloudflare Pages用）
  output: 'export',
  
  // 画像最適化設定（静的エクスポート用）
  images: {
    unoptimized: true,
  },
  
  // トレイリングスラッシュ
  trailingSlash: true,
  
  // コンパイル最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 本番ビルド最適化
  productionBrowserSourceMaps: false,
  
  // 圧縮有効化
  compress: true,
  
  // 電力最適化
  poweredByHeader: false,
};

export default nextConfig;
