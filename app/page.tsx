import SearchBar from './components/SearchBar';
import AreaSelect from './components/AreaSelect';
import Footer from './components/Footer';

// 人気エリアデータ
const popularAreas = [
  { slug: 'tokyo-shibuya', name: '東京・渋谷', url: '/areas/tokyo', count: 15, icon: '🗼' },
  { slug: 'tokyo-shinjuku', name: '東京・新宿', url: '/areas/tokyo', count: 18, icon: '🏙️' },
  { slug: 'tokyo-minato', name: '東京・港区', url: '/areas/tokyo', count: 16, icon: '🌆' },
  { slug: 'yokohama', name: '横浜', url: '/areas/kanagawa', count: 20, icon: '⛵' },
  { slug: 'osaka', name: '大阪', url: '/areas/osaka', count: 18, icon: '🏯' },
  { slug: 'nagoya', name: '名古屋', url: '/areas/aichi', count: 12, icon: '🏢' },
  { slug: 'fukuoka', name: '福岡', url: '/areas/fukuoka', count: 14, icon: '🍜' },
  { slug: 'sapporo', name: '札幌', url: '/areas/hokkaido', count: 10, icon: '❄️' },
  { slug: 'sendai', name: '仙台', url: '/areas/miyagi', count: 8, icon: '🌲' },
  { slug: 'hiroshima', name: '広島', url: '/areas/hiroshima', count: 9, icon: '⚾' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section - 基本構造 */}
      <div className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-4">
              パーソナルジム比較ランキング【2026年最新版】全国1,000店舗を徹底比較
            </h1>
            <p className="lead-text py-6 text-lg">
              あなたに合ったパーソナルジムが必ず見つかる。全国1,000店舗以上を料金・口コミ・エリアで徹底比較。
            </p>
            
            {/* 検索バー */}
            <SearchBar />
            
            {/* エリア選択 */}
            <div className="mt-6">
              <AreaSelect />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center mt-6">
              <button className="btn btn-primary btn-lg">
                30秒でジム診断
              </button>
              <button className="btn btn-outline btn-lg">
                エリアから探す
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - saburoが実装予定 */}
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
        <div className="stat">
          <div className="stat-title">掲載ジム数</div>
          <div className="stat-value">1,000+</div>
          <div className="stat-desc">全国のパーソナルジム</div>
        </div>
        
        <div className="stat">
          <div className="stat-title">利用者数</div>
          <div className="stat-value">50,000+</div>
          <div className="stat-desc">累計利用者</div>
        </div>
        
        <div className="stat">
          <div className="stat-title">口コミ数</div>
          <div className="stat-value">12,000+</div>
          <div className="stat-desc">実際の利用者の声</div>
        </div>
        
        <div className="stat">
          <div className="stat-title">満足度</div>
          <div className="stat-value">94%</div>
          <div className="stat-desc">利用者満足度</div>
        </div>
      </div>

      {/* Popular Areas Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          {/* セクションヘッダー */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              人気エリアから探す
            </h2>
            <p className="text-lg text-base-content/70">
              主要都市のパーソナルジム情報をチェック
            </p>
          </div>

          {/* エリアグリッド */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {popularAreas.map((area) => (
              <a
                key={area.slug}
                href={area.url}
                className="card bg-base-200 hover:bg-base-300 transition-colors p-6 text-center group"
              >
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-base-content/60">
                  {area.count}店舗
                </p>
              </a>
            ))}
          </div>

          {/* 全エリア一覧へのリンク */}
          <div className="text-center mt-10">
            <a href="/areas" className="btn btn-outline btn-primary">
              全エリア一覧を見る
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
