export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-[var(--border)]">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-gradient">BEST-FIT</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-muted)]">
            <a href="#area" className="hover:text-[var(--primary)] transition-colors">エリア</a>
            <a href="#search" className="hover:text-[var(--primary)] transition-colors">検索</a>
            <a href="#features" className="hover:text-[var(--primary)] transition-colors">特徴</a>
            <a href="#articles" className="hover:text-[var(--primary)] transition-colors">記事</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2cWgzmTOvbmfPs2bLd-H-yUQZqxt4fY46GK49p49uh50y7w/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary text-white px-5 py-2 rounded-full text-sm">
              掲載依頼
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 40%, #7C3AED 100%)' }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 0%, transparent 40%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)' }} />
        <div className="relative container mx-auto px-4 py-20 md:py-28 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              2026年4月最新 | 全国1,000店舗以上掲載
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-yellow-300">理想のカラダ</span>は<br className="md:hidden" />
              <span className="text-yellow-300">ジム選び</span>から始まる
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              パーソナルジムの比較・口コミ・予約サイト
            </p>

            {/* Inline Search */}
            <div className="glass rounded-2xl p-2 max-w-2xl mx-auto">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="ジム名・エリア・キーワード"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white text-gray-800 text-base placeholder:text-gray-400 border-0"
                />
                <button className="btn-accent text-white px-8 py-3.5 rounded-xl font-bold text-base whitespace-nowrap">
                  検索
                </button>
              </div>
            </div>

            {/* Quick stats */}
            <div className="flex justify-center gap-8 mt-10 text-sm text-white/70">
              <div><span className="block text-2xl font-bold text-white">1,000+</span>掲載店舗</div>
              <div><span className="block text-2xl font-bold text-white">47</span>都道府県対応</div>
              <div><span className="block text-2xl font-bold text-white">無料</span>カウンセリング</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Area Section */}
      <section className="py-16 md:py-20" id="area">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm text-[var(--primary)] font-semibold tracking-widest mb-2">POPULAR AREA</p>
            <h2 className="text-2xl md:text-3xl font-bold section-title">人気エリアのパーソナルジム特集</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { pref: '北海道', cities: [{ name: '札幌', href: '/articles/city/sapporo' }] },
              { pref: '宮城', cities: [{ name: '仙台', href: '/articles/city/sendai' }] },
              { pref: '東京', cities: [
                { name: '東京', href: '/articles/pref/tokyo' },
                { name: '新宿', href: '/articles/station/shinjuku' },
                { name: '銀座', href: '/articles/station/ginza' },
                { name: '池袋', href: '/articles/station/ikebukuro' },
                { name: '渋谷', href: '/articles/station/shibuya' },
                { name: '恵比寿', href: '/articles/station/ebisu' },
                { name: '五反田', href: '/articles/station/gotanda' },
                { name: '錦糸町', href: '/articles/station/kinshicho' },
                { name: '吉祥寺', href: '/articles/station/kichijoji' },
                { name: '立川', href: '/articles/city/tachikawa' },
                { name: '八王子', href: '/articles/city/hachioji' },
              ]},
              { pref: '神奈川', cities: [
                { name: '横浜', href: '/articles/city/yokohama' },
                { name: '関内', href: '/articles/station/kannai' },
                { name: '川崎', href: '/articles/city/kawasaki' },
                { name: '藤沢', href: '/articles/station/fujisawa' },
              ]},
              { pref: '埼玉', cities: [
                { name: '大宮', href: '/articles/station/omiya' },
                { name: '浦和', href: '/articles/station/urawa' },
                { name: '川越', href: '/articles/station/kawagoe' },
              ]},
              { pref: '千葉', cities: [
                { name: '船橋', href: '/articles/station/funabashi' },
                { name: '柏', href: '/articles/station/kashiwa' },
              ]},
              { pref: '茨城', cities: [{ name: 'つくば', href: '/articles/station/tsukuba' }] },
              { pref: '栃木', cities: [{ name: '宇都宮', href: '/articles/station/utsunomiya' }] },
              { pref: '静岡', cities: [{ name: '浜松', href: '/articles/city/hamamatsu' }] },
              { pref: '新潟', cities: [{ name: '新潟', href: '/articles/pref/niigata' }] },
              { pref: '愛知', cities: [{ name: '名古屋', href: '/articles/city/nagoya' }] },
              { pref: '大阪', cities: [{ name: '大阪', href: '/articles/pref/osaka' }] },
              { pref: '兵庫', cities: [{ name: '姫路', href: '/articles/station/himeji' }] },
              { pref: '広島', cities: [{ name: '広島', href: '/articles/pref/hiroshima' }] },
              { pref: '福岡', cities: [{ name: '福岡', href: '/articles/pref/fukuoka' }] },
              { pref: '熊本', cities: [{ name: '熊本', href: '/articles/pref/kumamoto' }] },
              { pref: '鹿児島', cities: [{ name: '鹿児島', href: '/articles/pref/kagoshima' }] },
              { pref: '沖縄', cities: [{ name: '沖縄', href: '/articles/pref/okinawa' }] },
            ].map((area) => (
              <div key={area.pref}>
                <h3 className="text-[var(--primary)] font-bold text-sm mb-2 tracking-wide">{area.pref}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.cities.map((city) => (
                    <a key={city.name} href={city.href} className="area-badge px-4 py-2 rounded-lg text-sm font-medium">
                      {city.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 md:py-20 bg-[var(--surface)]" id="search">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm text-[var(--primary)] font-semibold tracking-widest mb-2">SEARCH</p>
            <h2 className="text-2xl md:text-3xl font-bold section-title">パーソナルジムを探す</h2>
          </div>

          <div className="bg-[var(--surface-alt)] rounded-3xl p-8 space-y-8">
            {/* キーワード検索 */}
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[var(--primary)] text-white rounded-lg flex items-center justify-center text-sm">1</span>
                キーワードで探す
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="ジム名、キーワードを入力"
                  className="flex-1 px-5 py-3.5 border border-[var(--border)] rounded-xl bg-white text-base"
                />
                <button className="btn-accent text-white px-8 py-3.5 rounded-xl font-bold whitespace-nowrap">
                  検索
                </button>
              </div>
            </div>

            <div className="border-t border-[var(--border)]" />

            {/* エリア検索 */}
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[var(--primary)] text-white rounded-lg flex items-center justify-center text-sm">2</span>
                エリアで探す
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <select className="px-4 py-3.5 border border-[var(--border)] rounded-xl bg-white">
                  <option>都道府県を選ぶ</option>
                  <option>東京都</option>
                  <option>大阪府</option>
                  <option>神奈川県</option>
                </select>
                <select className="px-4 py-3.5 border border-[var(--border)] rounded-xl bg-white" disabled>
                  <option>市区町村を選ぶ</option>
                </select>
                <select className="px-4 py-3.5 border border-[var(--border)] rounded-xl bg-white" disabled>
                  <option>市区町村以降を選ぶ</option>
                </select>
              </div>
              <button className="mt-4 w-full btn-accent text-white py-3.5 rounded-xl font-bold text-base">
                エリアで検索する
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm text-[var(--primary)] font-semibold tracking-widest mb-2">FEATURES</p>
            <h2 className="text-2xl md:text-3xl font-bold section-title">特徴からパーソナルジムを探す</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { emoji: '👩', label: '女性専用', href: '/gyms/list/feature-4JsEjXzikuOX5CIA' },
              { emoji: '👩‍🏫', label: '女性トレーナー在籍', href: '/gyms/list/feature-6zdj3YfuB4n4u0Tt' },
              { emoji: '💳', label: '月額制', href: '/gyms/list/feature-sGSCtxosyziST0Qi' },
              { emoji: '🍽️', label: '食事指導あり', href: '/gyms/list/feature-lV7bwsP4oRNlgcKh' },
            ].map((f) => (
              <a key={f.label} href={f.href} className="card-hover bg-white rounded-2xl p-6 text-center border border-[var(--border)]">
                <div className="text-4xl mb-3">{f.emoji}</div>
                <p className="font-bold text-sm">{f.label}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="py-16 md:py-20 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm text-[var(--primary)] font-semibold tracking-widest mb-2">TAGS</p>
            <h2 className="text-2xl md:text-3xl font-bold section-title">タグからパーソナルジムを探す</h2>
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center max-w-4xl mx-auto">
            {[
              { label: '女性専用', href: '/gyms/list/tag-001' },
              { label: '食事指導', href: '/gyms/list/tag-002' },
              { label: '入会金不要', href: '/gyms/list/tag-003' },
              { label: '産後ダイエット', href: '/gyms/list/tag-034' },
              { label: '健康・体型維持', href: '/gyms/list/tag-031' },
              { label: 'ボディシェイプ', href: '/gyms/list/tag-025' },
              { label: '筋力アップ(バルクアップ)', href: '/gyms/list/tag-024' },
              { label: 'ダイエット', href: '/gyms/list/tag-023' },
              { label: '女性トレーナー在籍', href: '/gyms/list/tag-019' },
              { label: '子連れOK', href: '/gyms/list/tag-017' },
              { label: '手ぶらOK', href: '/gyms/list/tag-014' },
              { label: 'シャワー', href: '/gyms/list/tag-012' },
              { label: '完全個室', href: '/gyms/list/tag-010' },
              { label: '月額制', href: '/gyms/list/tag-009' },
              { label: 'トライアルプラン', href: '/gyms/list/tag-007' },
            ].map((tag) => (
              <a key={tag.label} href={tag.href} className="tag-pill px-4 py-2 rounded-full text-sm font-medium bg-white text-[var(--text-muted)]">
                {tag.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 md:py-20" id="articles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm text-[var(--primary)] font-semibold tracking-widest mb-2">THE LATEST ARTICLES</p>
            <h2 className="text-2xl md:text-3xl font-bold section-title">パーソナルジム新着記事</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { cat: 'ブランド別 厳選ジムまとめ', title: '【2026年最新】かたぎり塾の料金や月額費は？口コミや体験談も徹底分析', desc: 'かたぎり塾は、完全個室でマンツーマン指導をおこなうパーソナルジム...', date: '2026.03.16', href: '/articles/brand/katagirijuku' },
              { cat: 'エリア別 厳選ジムまとめ', title: '【2026年最新】パーソナルジム高松おすすめ12選！人気のジムを徹底比較', desc: '自分に合ったパーソナルジムを見つけるのは、思っている以上に難しいもの...', date: '2026.03.04', href: '/articles/city/takamatsu' },
              { cat: 'エリア別 厳選ジムまとめ', title: '【2026年最新】パーソナルジム富山おすすめ20選！人気のジムを徹底比較', desc: '自分に合ったパーソナルジムを見つけるのは、思っている以上に難しいもの...', date: '2026.03.04', href: '/articles/pref/toyama' },
            ].map((article, i) => (
              <article key={i} className="card-hover bg-white rounded-2xl overflow-hidden border border-[var(--border)]">
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-[var(--primary)] bg-blue-50 px-3 py-1 rounded-full mb-3">{article.cat}</span>
                  <h3 className="font-bold mb-2 leading-snug">
                    <a href={article.href} className="hover:text-[var(--primary)] transition-colors">{article.title}</a>
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">{article.desc}</p>
                  <time className="text-xs text-[var(--text-secondary)]">{article.date}</time>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/search?category=feature" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-full hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all font-medium text-sm">
              その他関連記事はこちら
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, white 0%, transparent 60%)' }} />
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm text-blue-200 font-semibold tracking-widest mb-2">NEWS</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">最新ニュース</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-2">
                <time className="text-sm text-[var(--text-secondary)]">2025.11.20</time>
                <span className="text-xs font-semibold text-[var(--primary)] bg-blue-50 px-3 py-1 rounded-full">ニュース</span>
              </div>
              <a href="/news/website-launch" className="font-bold hover:text-[var(--primary)] transition-colors">
                WEBサイト開設のお知らせ
              </a>
            </div>

            <div className="text-center mt-6">
              <a href="/news" className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors text-sm">
                ニュース一覧
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PR / CTA Section */}
      <section className="py-16 md:py-20 bg-[var(--surface-alt)]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="bg-white rounded-3xl p-10 border border-[var(--border)] card-hover">
            <p className="text-sm text-[var(--primary)] font-semibold tracking-widest mb-2">FOR GYM OWNERS</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">パーソナルジムの無料掲載依頼</h2>
            <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
              パーソナルジムの掲載は無料です。掲載希望の連絡をお待ちしています。<br />
              新規掲載をご希望の企業様はこちらより詳細を確認のうえ、まずはお気軽にご連絡くださいませ。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd2cWgzmTOvbmfPs2bLd-H-yUQZqxt4fY46GK49p49uh50y7w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white px-8 py-4 rounded-full font-bold text-base"
              >
                掲載依頼をする
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd2cWgzmTOvbmfPs2bLd-H-yUQZqxt4fY46GK49p49uh50y7w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold text-base border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-blue-50 transition-colors"
              >
                さっそく無料掲載してみる
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-2xl font-bold text-gradient">BEST-FIT</span>
            <p className="text-sm mt-2">パーソナルジムの比較・口コミ・予約サイト</p>
          </div>
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpbl1o2Z3KfYwgvfWaPGAlW9swhOnKYmVq080AWe0qQVXUUA/viewform" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2cWgzmTOvbmfPs2bLd-H-yUQZqxt4fY46GK49p49uh50y7w/viewform" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  掲載ご希望のジムはこちら
                </a>
              </li>
              <li><a href="/terms-of-service" className="hover:text-white transition-colors">利用規約</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="/content-policy" className="hover:text-white transition-colors">記事の制作ポリシー</a></li>
            </ul>
          </nav>
          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            <p>&copy; 2026 BEST-FIT. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
