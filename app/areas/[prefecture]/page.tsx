import { Metadata } from 'next';
import Footer from '../../components/Footer';

type Props = {
  params: Promise<{
    prefecture: string;
  }>;
};

// 47都道府県の静的パス生成
export async function generateStaticParams() {
  const prefectures = [
    '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
    '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
    '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県',
    '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
    '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県',
    '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
  ];

  return prefectures.map((prefecture) => ({
    prefecture: encodeURIComponent(prefecture),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { prefecture } = await params;
  const decodedPrefecture = decodeURIComponent(prefecture);
  
  return {
    title: `パーソナルジム${decodedPrefecture}おすすめ12選｜2026年最新比較`,
    description: `${decodedPrefecture}エリアで人気のパーソナルジム12選を徹底比較。実際の利用者の口コミ、料金、特徴、営業時間から最適なジムが見つかります。無料体験・カウンセリング情報も掲載。`,
    openGraph: {
      title: `パーソナルジム${decodedPrefecture}おすすめ12選｜2026年最新比較`,
      description: `${decodedPrefecture}エリアで人気のパーソナルジム12選を徹底比較。`,
      url: `https://dunlopsportsclub.jp/areas/${prefecture}`,
      siteName: 'BEST-FIT',
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `パーソナルジム${decodedPrefecture}おすすめ12選`,
      description: `${decodedPrefecture}エリアで人気のパーソナルジム12選を徹底比較。`,
    },
  };
}

export default async function PrefecturePage({ params }: Props) {
  const { prefecture } = await params;
  const decodedPrefecture = decodeURIComponent(prefecture);
  
  // ダミーのジムデータ
  const gyms = [
    {
      id: 1,
      name: 'RIZAP（ライザップ）',
      rating: 4.8,
      priceRange: '30-50万円',
      features: ['完全個室', '30日間全額返金保証', '食事指導'],
    },
    {
      id: 2,
      name: '24/7 Workout',
      rating: 4.5,
      priceRange: '20-30万円',
      features: ['3食食べるダイエット', '完全個室', '無料カウンセリング'],
    },
    {
      id: 3,
      name: 'BEYOND（ビヨンド）',
      rating: 4.6,
      priceRange: '20-35万円',
      features: ['美ボディコンテスト優勝者指導', '糖質制限なし', '食事管理アプリ'],
    },
  ];

  // 構造化データ（JSON-LD）
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'ホーム',
        'item': 'https://dunlopsportsclub.jp/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'エリア一覧',
        'item': 'https://dunlopsportsclub.jp/areas'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': decodedPrefecture,
        'item': `https://dunlopsportsclub.jp/areas/${prefecture}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* パンくずリスト */}
      <div className="breadcrumbs text-sm container mx-auto p-4">
        <ul>
          <li><a href="/" className="hover:text-primary">ホーム</a></li>
          <li><a href="/areas" className="hover:text-primary">エリア一覧</a></li>
          <li><a href="/areas/regions" className="hover:text-primary">地方から探す</a></li>
          <li className="font-semibold">{decodedPrefecture}</li>
        </ul>
      </div>

      {/* ヘッダー */}
      <div className="hero bg-base-200 py-12">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">
              【2026年最新】パーソナルジム{decodedPrefecture}おすすめ12選！
            </h1>
            <p className="text-lg">
              {decodedPrefecture}エリアで人気のパーソナルジムを徹底比較。
              実際の利用者の口コミ、料金、特徴から最適なジムが見つかります。
            </p>
          </div>
        </div>
      </div>

      {/* 導入文（jiroのSEO提案を反映） */}
      <div className="container mx-auto p-8">
        <div className="prose max-w-4xl mx-auto">
          <p>
            自分に合ったパーソナルジムを見つけるのは、思っている以上に難しいもの。
            モチベーションを維持できる環境、続けやすい料金プラン、信頼できるトレーナーなど、
            様々なポイントで比較検討しなければいけません。
          </p>
          <p>
            本記事では、<strong>{decodedPrefecture}エリア</strong>にフォーカスし、
            口コミ評価の高い人気のパーソナルジムをご紹介しています。
            ぜひ、理想のパーソナルジム選びの参考にしてください。
          </p>
        </div>

        {/* ジムリスト */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8">{decodedPrefecture}のおすすめパーソナルジム</h2>
          
          <div className="grid gap-6">
            {gyms.map((gym, index) => (
              <div key={gym.id} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="badge badge-primary mb-2">
                        第{index + 1}位
                      </div>
                      <h3 className="card-title text-2xl">{gym.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="rating rating-sm">
                          {[...Array(5)].map((_, i) => (
                            <input
                              key={i}
                              type="radio"
                              name={`rating-${gym.id}`}
                              className="mask mask-star-2 bg-orange-400"
                              checked={i < Math.floor(gym.rating)}
                              readOnly
                            />
                          ))}
                        </div>
                        <span className="text-sm">{gym.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="badge badge-outline">{gym.priceRange}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {gym.features.map((feature, i) => (
                      <div key={i} className="badge badge-ghost">
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="card-actions justify-end mt-4">
                    <a href={`/gyms/${gym.id}`} className="btn btn-primary">詳細を見る</a>
                    <a href={`/gyms/${gym.id}/reviews`} className="btn btn-outline">口コミを見る</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ（jiroのSEO提案を反映） */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">よくある質問</h2>
          
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" /> 
              <div className="collapse-title text-xl font-medium">
                {decodedPrefecture}でおすすめのパーソナルジムは？
              </div>
              <div className="collapse-content"> 
                <p>{decodedPrefecture}エリアでは、RIZAP、24/7 Workout、BEYONDなどが人気です。
                それぞれ特徴が異なるため、あなたの目的や予算に合わせて選びましょう。</p>
              </div>
            </div>
            
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" /> 
              <div className="collapse-title text-xl font-medium">
                パーソナルジムの料金相場は？
              </div>
              <div className="collapse-content"> 
                <p>2ヶ月コースで20-50万円が一般的です。入会金は2-5万円程度が相場です。</p>
              </div>
            </div>
            
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" /> 
              <div className="collapse-title text-xl font-medium">
                どのくらいで効果が出る？
              </div>
              <div className="collapse-content"> 
                <p>個人差がありますが、週2回のトレーニングで2ヶ月程度で体の変化を実感される方が多いです。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 関連エリア（内部リンク強化） */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">近隣エリアのパーソナルジム</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/areas/東京都" className="btn btn-outline w-full">
              東京都
            </a>
            <a href="/areas/神奈川県" className="btn btn-outline w-full">
              神奈川県
            </a>
            <a href="/areas/埼玉県" className="btn btn-outline w-full">
              埼玉県
            </a>
            <a href="/areas/千葉県" className="btn btn-outline w-full">
              千葉県
            </a>
            <a href="/areas/大阪府" className="btn btn-outline w-full">
              大阪府
            </a>
            <a href="/areas/愛知県" className="btn btn-outline w-full">
              愛知県
            </a>
          </div>
        </div>

        {/* 主要都市リンク */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">主要都市から探す</h3>
          <div className="flex flex-wrap gap-2">
            <a href="/cities/新宿" className="badge badge-lg badge-outline">新宿</a>
            <a href="/cities/渋谷" className="badge badge-lg badge-outline">渋谷</a>
            <a href="/cities/池袋" className="badge badge-lg badge-outline">池袋</a>
            <a href="/cities/横浜" className="badge badge-lg badge-outline">横浜</a>
            <a href="/cities/大阪" className="badge badge-lg badge-outline">大阪</a>
            <a href="/cities/名古屋" className="badge badge-lg badge-outline">名古屋</a>
            <a href="/cities/福岡" className="badge badge-lg badge-outline">福岡</a>
            <a href="/cities/札幌" className="badge badge-lg badge-outline">札幌</a>
          </div>
        </div>

        {/* 関連リンク（内部リンク最適化） */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">関連記事</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/" className="btn btn-outline w-full">
              全国のパーソナルジム一覧
            </a>
            <a href="/articles/how-to-choose" className="btn btn-outline w-full">
              パーソナルジムの選び方
            </a>
            <a href="/articles/price-comparison" className="btn btn-outline w-full">
              料金相場と安いジムの選び方
            </a>
            <a href="/articles/beginner-guide" className="btn btn-outline w-full">
              初心者向けガイド
            </a>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
