# BEST-FIT remake

**日本最大級のパーソナルジム比較・予約サイト**

## 📊 プロジェクト概要

全国1,000店舗以上のパーソナルジムを掲載。実際の利用者の口コミをもとに、あなたに最適なジムが見つかります。

## 🛠️ 技術スタック

- **フレームワーク:** Next.js 16.1.6 (App Router, Turbopack)
- **言語:** TypeScript
- **スタイリング:** Tailwind CSS 4.0
- **フォント:** Noto Sans JP
- **ホスティング:** Vercel
- **画像:** AVIF/WebP

## 📁 プロジェクト構造

```
bestfit-remake/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # トップページ
│   ├── globals.css         # グローバルCSS
│   ├── areas/
│   │   └── [prefecture]/
│   │       └── page.tsx    # 動的エリアページ（47都道府県）
│   ├── gyms/
│   │   └── list/
│   │       └── [prefecture]/
│   │           └── [city]/
│   │               └── page.tsx  # 動的都市ページ（1,503市区町村）
│   ├── contact/
│   │   └── page.tsx        # お問い合わせ
│   ├── privacy/
│   │   └── page.tsx        # プライバシーポリシー
│   └── terms/
│       └── page.tsx        # 利用規約
├── components/
│   ├── SearchBar.tsx
│   ├── AreaSelect.tsx
│   └── Footer.tsx
├── next.config.ts
├── package.json
└── .next/                  # ビルド出力
```

## 🚀 セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start
```

## 📝 ページ構成

**静的ページ:** 7ページ
- トップページ（/）
- お問い合わせ（/contact）
- プライバシーポリシー（/privacy）
- 利用規約（/terms）

**動的ページ（SSG）:** 52+ ページ
- 都道府県ページ（/areas/[prefecture]）× 47
- 都市ページ（/gyms/list/[prefecture]/[city]）× 5+（優先度A）

## 🎯 パフォーマンス目標

- **Lighthouse Performance:** 85-90
- **LCP:** 2.0-2.5秒（目標2.5秒以内）
- **INP:** 100-150ms（目標200ms以内）
- **CLS:** 0.05-0.08（目標0.1以下）

## 📦 ビルド結果

- **ビルド時間:** ~1.3秒
- **静的ページ生成:** ~0.2秒
- **`.next/static`:** 6.2MB
- **`.next` 全体:** 127MB

## 🔗 リンク

- **GitHub:** https://github.com/webmaster0818/BEST-FIT-remake
- **本番サイト:** https://dunlopsportsclub.jp（予定）

## 📅 開発履歴

- **2026-03-11:** 初期開発完了（taro担当）
- **2026-03-26:** 戦略v3.0対応（TOPページ最適化、人気エリアセクション追加）
- **2026-03-27:** 動的ルート実装（/gyms/list/[prefecture]/[city]）

## 👥 開発チーム

- **taro:** インフラ・フロントエンド・デプロイ
- **jiro:** バックエンド・API設計・実装
- **saburo:** コンテンツ・SEO・ライティング
- **tomomi:** 監修・監督・ディレクション

## 📄 ライセンス

Copyright © 2026 BEST-FIT. All rights reserved.
