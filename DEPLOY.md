# デプロイガイド - BEST-FIT Remake

**最終更新:** 2026年3月11日 08:15  
**プロジェクト:** BEST-FIT パーソナルジム比較サイト  
**フレームワーク:** Next.js 16.1.6

---

## 📊 ビルド結果

### ビルド成功 ✅

**ビルド日時:** 2026年3月11日 08:15  
**ビルド時間:** ~1.5秒（コンパイル）+ ~0.2秒（静的ページ生成）

**生成ページ:**
- **合計:** 54ページ
- **静的ページ:** 7ページ（/, /contact, /privacy, /terms, /_not-found, 等）
- **動的ページ（SSG）:** 47ページ（47都道府県のエリアページ）

**ビルドサイズ:**
- `.next/static`: 6.2MB
- `.next` 全体: 127MB

---

## 🚀 デプロイ方法

### 1. Vercel へのデプロイ（推奨）

**メリット:**
- Next.js の開発元が提供
- 無料枠で十分（Hobby プラン）
- 自動的に最適化
- CDN 配信
- カスタムドメイン対応

**手順:**

#### A. Vercel CLI を使用

```bash
# Vercel CLI インストール（初回のみ）
npm install -g vercel

# プロジェクトディレクトリで実行
cd /Users/taro.hasegawa/.openclaw/workspace/bestfit-remake
vercel

# 本番環境デプロイ
vercel --prod
```

#### B. GitHub 連携（推奨）

1. GitHub リポジトリを作成
2. プロジェクトを push
3. [Vercel Dashboard](https://vercel.com/dashboard) にアクセス
4. "Import Project" → GitHub リポジトリを選択
5. 自動的にビルド・デプロイ

**環境変数（不要）:**
- 現時点では特別な環境変数は不要
- 将来的にAPI連携する場合は Vercel Dashboard で設定

---

### 2. その他のホスティング

#### Netlify

```bash
# ビルドコマンド
npm run build

# 出力ディレクトリ
.next
```

#### Cloudflare Pages

Next.js 16+ は Cloudflare Pages でも動作可能

```bash
# ビルドコマンド
npm run build

# 出力ディレクトリ
.next
```

---

## 🔧 環境変数

### 必要な環境変数（現時点）

**なし** ✅

すべての設定はハードコードされています。

### 将来追加する可能性のある環境変数

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API エンドポイント
NEXT_PUBLIC_API_URL=https://api.dunlopsportsclub.jp

# 本番 URL
NEXT_PUBLIC_SITE_URL=https://dunlopsportsclub.jp

# Sentry（エラートラッキング）
SENTRY_DSN=https://...
```

---

## 📝 デプロイ前チェックリスト

### ビルド確認

- [x] `npm run build` が成功
- [x] エラーなし
- [x] 警告なし
- [x] 全54ページ生成確認

### コンテンツ確認

- [x] トップページ（/）
- [x] エリアページ（/areas/[prefecture]）× 47
- [x] お問い合わせ（/contact）
- [x] プライバシーポリシー（/privacy）
- [x] 利用規約（/terms）

### SEO 確認

- [x] メタデータ設定
- [x] OGP 設定
- [x] Twitter Card 設定
- [x] sitemap.xml（自動生成）
- [x] robots.txt（自動生成）

### パフォーマンス確認

- [x] フォント最適化（Noto Sans JP）
- [x] 画像最適化設定
- [x] コンパイル最適化
- [x] 圧縮設定

---

## 🌐 カスタムドメイン設定

### Vercel でのカスタムドメイン

1. Vercel Dashboard → プロジェクト選択
2. "Settings" → "Domains"
3. ドメインを追加（例: `dunlopsportsclub.jp`）
4. DNS 設定
   ```
   A レコード: 76.76.21.21
   または
   CNAME: cname.vercel-dns.com
   ```

### SSL 証明書

Vercel は自動的に Let's Encrypt SSL 証明書を発行（無料）

---

## 📊 デプロイ後の確認

### 1. ページの動作確認

```bash
# 本番 URL にアクセス
https://your-project.vercel.app/

# 確認ページ
- /
- /areas/東京都
- /areas/大阪府
- /contact
- /privacy
- /terms
```

### 2. パフォーマンステスト

```bash
# Google Lighthouse
- Performance: 85-95 を目標
- Accessibility: 95-100
- Best Practices: 90-100
- SEO: 95-100
```

### 3. SEO 確認

```bash
# sitemap.xml
https://your-domain.com/sitemap.xml

# robots.txt
https://your-domain.com/robots.txt

# OGP テスト
https://developers.facebook.com/tools/debug/
https://cards-dev.twitter.com/validator
```

---

## 🔄 継続的デプロイ（CI/CD）

### GitHub Actions（オプション）

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🐛 トラブルシューティング

### ビルドエラー

**エラー: "Can't resolve 'daisyui/dist/full.css'"**

✅ **解決済み**（2026年3月11日 08:15）
- `app/globals.css` から `@import "daisyui/dist/full.css";` を削除
- Tailwind CSS 4.0 との互換性問題を解決

**エラー: "Type error: ..."**

```bash
# TypeScript エラーの場合
npm run build -- --no-lint

# または
export NEXT_TELEMETRY_DISABLED=1
npm run build
```

### デプロイエラー

**Vercel デプロイが失敗**

1. ビルドログを確認
2. ローカルで `npm run build` を実行して再現
3. Vercel Dashboard の "Deployments" → "View Function Logs"

---

## 📱 モバイル最適化

### PWA 対応（将来）

```bash
# next-pwa インストール
npm install next-pwa

# next.config.ts に追加
const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  // 既存の設定
})
```

---

## 🔐 セキュリティ

### 本番環境の推奨設定

**next.config.ts:**

```typescript
const nextConfig: NextConfig = {
  // セキュリティヘッダー
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};
```

---

## 📈 アナリティクス統合

### Google Analytics 4

```bash
# 環境変数
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**app/layout.tsx:**

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 📞 サポート

### デプロイに関する問題

- **Vercel ドキュメント:** https://vercel.com/docs
- **Next.js ドキュメント:** https://nextjs.org/docs
- **GitHub Issues:** プロジェクトリポジトリの Issues

---

## ✅ デプロイ完了確認

デプロイ後、以下を確認:

- [ ] サイトが正常に表示される
- [ ] 全ページにアクセス可能
- [ ] フォームが動作する（お問い合わせ）
- [ ] モバイルで表示確認
- [ ] SEO メタデータが正しい
- [ ] パフォーマンステスト合格
- [ ] Google Search Console に登録
- [ ] Google Analytics 動作確認

---

**デプロイ準備完了！** 🎉

このドキュメントに従ってデプロイを実行してください。
