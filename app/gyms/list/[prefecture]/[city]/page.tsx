import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// 都市データの型定義
type CityData = {
  prefecture: string;
  prefectureName: string;
  city: string;
  cityName: string;
  gymCount: number;
  popularBrands: string[];
  stations: string[];
};

// 仮のデータ（後でjiroのAPIと連携）
const CITY_DATA: Record<string, CityData> = {
  'tokyo-shibuya': {
    prefecture: 'tokyo',
    prefectureName: '東京都',
    city: 'shibuya',
    cityName: '渋谷区',
    gymCount: 15,
    popularBrands: ['RIZAP', '24/7Workout', 'BEYOND'],
    stations: ['渋谷駅', '恵比寿駅'],
  },
  'tokyo-shinjuku': {
    prefecture: 'tokyo',
    prefectureName: '東京都',
    city: 'shinjuku',
    cityName: '新宿区',
    gymCount: 18,
    popularBrands: ['RIZAP', '24/7Workout', 'THE PERSONAL GYM'],
    stations: ['新宿駅', '新宿御苑駅'],
  },
  'tokyo-minato': {
    prefecture: 'tokyo',
    prefectureName: '東京都',
    city: 'minato',
    cityName: '港区',
    gymCount: 16,
    popularBrands: ['BEYOND', 'LiMEパーソナルジム', 'RIZAP'],
    stations: ['六本木駅', '麻布十番駅'],
  },
  'kanagawa-yokohama': {
    prefecture: 'kanagawa',
    prefectureName: '神奈川県',
    city: 'yokohama',
    cityName: '横浜市',
    gymCount: 20,
    popularBrands: ['THE PERSONAL GYM', 'かたぎり塾', 'RIZAP'],
    stations: ['横浜駅'],
  },
  'osaka-osaka': {
    prefecture: 'osaka',
    prefectureName: '大阪府',
    city: 'osaka',
    cityName: '大阪市',
    gymCount: 18,
    popularBrands: ['THE PERSONAL GYM', 'かたぎり塾', '24/7Workout'],
    stations: ['梅田駅', '心斎橋駅'],
  },
};

// パラメータの型定義
type Props = {
  params: Promise<{
    prefecture: string;
    city: string;
  }>;
};

// メタデータ生成（戦略v3.0準拠）
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { prefecture, city } = await params;
  const cityKey = `${prefecture}-${city}`;
  const cityData = CITY_DATA[cityKey];

  if (!cityData) {
    return {
      title: 'ページが見つかりません | BEST-FIT',
    };
  }

  const { cityName, gymCount, popularBrands, stations } = cityData;

  // saburoの最適化案フォーマット準拠
  const title = `${cityName}のパーソナルジム${gymCount}選【2026年最新】料金・口コミを徹底比較｜BEST-FIT`;
  const description = `${cityName}のパーソナルジム全${gymCount}店舗を徹底比較。${popularBrands.join('、')}など人気ジムの料金・口コミ・アクセスを掲載。${stations.join('・')}から通えるジムをお探しの方へ。`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://dunlopsportsclub.jp/gyms/list/${prefecture}/${city}`,
      siteName: 'BEST-FIT',
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// ページコンポーネント
export default async function CityListPage({ params }: Props) {
  const { prefecture, city } = await params;
  const cityKey = `${prefecture}-${city}`;
  const cityData = CITY_DATA[cityKey];

  // 都市データが存在しない場合は404
  if (!cityData) {
    notFound();
  }

  const { cityName, gymCount, popularBrands, stations } = cityData;

  return (
    <div className="min-h-screen bg-base-100">
      {/* ヘッダー・ブレッドクラム */}
      <div className="bg-base-200 py-4">
        <div className="container mx-auto px-4">
          <div className="text-sm breadcrumbs">
            <ul>
              <li><a href="/">ホーム</a></li>
              <li><a href="/gyms">ジム検索</a></li>
              <li><a href={`/areas/${prefecture}`}>{cityData.prefectureName}</a></li>
              <li>{cityName}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8">
        {/* H1（戦略v3.0準拠） */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {cityName}のパーソナルジム{gymCount}選【2026年最新】
        </h1>

        {/* リード文 */}
        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            {cityName}エリアでパーソナルジムをお探しの方へ。このページでは、{cityName}にある全{gymCount}店舗のパーソナルジムを徹底比較。
            料金プラン、口コミ評価、アクセス情報を掲載しています。
          </p>
          <p>
            <strong>主要ブランド:</strong> {popularBrands.join('、')}
          </p>
          <p>
            <strong>最寄り駅:</strong> {stations.join('、')}
          </p>
        </div>

        {/* Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full mb-12">
          <div className="stat">
            <div className="stat-title">掲載ジム数</div>
            <div className="stat-value">{gymCount}</div>
            <div className="stat-desc">{cityName}エリア</div>
          </div>
          <div className="stat">
            <div className="stat-title">人気ブランド数</div>
            <div className="stat-value">{popularBrands.length}</div>
            <div className="stat-desc">大手ブランド</div>
          </div>
          <div className="stat">
            <div className="stat-title">アクセス</div>
            <div className="stat-value">{stations.length}駅</div>
            <div className="stat-desc">主要駅から徒歩圏内</div>
          </div>
        </div>

        {/* ジムリスト（後でjiroのAPIと連携） */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {cityName}のおすすめパーソナルジム一覧
          </h2>
          <div className="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>ジムデータはAPIと連携予定です（jiro実装待ち）</span>
          </div>
        </section>

        {/* エリアガイド（後でsaburoのコンテンツと連携） */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {cityName}エリアガイド
          </h2>
          <div className="prose max-w-none">
            <p>このセクションは後でsaburoのコンテンツと連携予定です。</p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-12 bg-base-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            あなたにぴったりのジムを見つけよう
          </h2>
          <a href="/diagnosis" className="btn btn-primary btn-lg">
            30秒でジム診断
          </a>
        </div>
      </div>
    </div>
  );
}

// 静的生成用のパス生成（優先度A 5都市）
export async function generateStaticParams() {
  return [
    { prefecture: 'tokyo', city: 'shibuya' },
    { prefecture: 'tokyo', city: 'shinjuku' },
    { prefecture: 'tokyo', city: 'minato' },
    { prefecture: 'kanagawa', city: 'yokohama' },
    { prefecture: 'osaka', city: 'osaka' },
  ];
}
