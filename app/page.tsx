export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-2">
              <span className="font-bold">パーソナルジムの</span>
              <span className="mx-2 font-bold text-yellow-300">比較</span>
              <span className="mx-2 font-bold text-yellow-300">口コミ</span>
              <span className="mx-2 font-bold text-yellow-300">予約</span>
              <span className="font-bold">サイト</span>
            </p>
            <p className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-yellow-300">理想のカラダ</span>は<span className="text-yellow-300">ジム選び</span>から始まる
            </p>
          </div>
        </div>
      </div>

      {/* Popular Area Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-2">Popular Area</p>
            <h2 className="text-2xl md:text-3xl font-bold">人気エリアのパーソナルジム特集</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 北海道 */}
            <div>
              <h3 className="text-gray-600 font-bold mb-2">北海道</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/city/sapporo" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">札幌</a>
              </div>
            </div>

            {/* 宮城 */}
            <div>
              <h3 className="text-gray-600 font-bold mb-2">宮城</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/city/sendai" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">仙台</a>
              </div>
            </div>

            {/* 東京 */}
            <div>
              <h3 className="text-gray-600 font-bold mb-2">東京</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/pref/tokyo" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">東京</a>
                <a href="/articles/station/shinjuku" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">新宿</a>
                <a href="/articles/station/ginza" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">銀座</a>
                <a href="/articles/station/ikebukuro" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">池袋</a>
                <a href="/articles/station/shibuya" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">渋谷</a>
                <a href="/articles/station/ebisu" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">恵比寿</a>
                <a href="/articles/station/gotanda" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">五反田</a>
                <a href="/articles/station/kinshicho" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">錦糸町</a>
                <a href="/articles/station/kichijoji" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">吉祥寺</a>
                <a href="/articles/city/tachikawa" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">立川</a>
                <a href="/articles/city/hachioji" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">八王子</a>
              </div>
            </div>

            {/* 神奈川 */}
            <div>
              <h3 className="text-gray-600 font-bold mb-2">神奈川</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/city/yokohama" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">横浜</a>
                <a href="/articles/station/kannai" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">関内</a>
                <a href="/articles/city/kawasaki" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">川崎</a>
                <a href="/articles/station/fujisawa" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">藤沢</a>
              </div>
            </div>

            {/* 埼玉 */}
            <div>
              <h3 className="text-gray-600 font-bold mb-2">埼玉</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/station/omiya" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">大宮</a>
                <a href="/articles/station/urawa" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">浦和</a>
                <a href="/articles/station/kawagoe" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">川越</a>
              </div>
            </div>

            {/* 千葉 */}
            <div>
              <h3 className="text-gray-600 font-bold mb-2">千葉</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/station/funabashi" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">船橋</a>
                <a href="/articles/station/kashiwa" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">柏</a>
              </div>
            </div>

            {/* その他のエリア */}
            <div>
              <h3 className="text-gray-600 font-bold mb-2">茨城</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/station/tsukuba" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">つくば</a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 font-bold mb-2">栃木</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/station/utsunomiya" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">宇都宮</a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 font-bold mb-2">静岡</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/city/hamamatsu" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">浜松</a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 font-bold mb-2">新潟</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/pref/niigata" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">新潟</a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 font-bold mb-2">愛知</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/city/nagoya" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">名古屋</a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 font-bold mb-2">大阪</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/pref/osaka" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">大阪</a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 font-bold mb-2">兵庫</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/station/himeji" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">姫路</a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 font-bold mb-2">広島</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/pref/hiroshima" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">広島</a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 font-bold mb-2">福岡</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/pref/fukuoka" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">福岡</a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 font-bold mb-2">熊本</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/pref/kumamoto" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">熊本</a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 font-bold mb-2">鹿児島</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/pref/kagoshima" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">鹿児島</a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 font-bold mb-2">沖縄</h3>
              <div className="flex flex-wrap gap-2">
                <a href="/articles/pref/okinawa" className="px-4 py-2 bg-white border rounded hover:bg-blue-50">沖縄</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-2">Search</p>
            <h2 className="text-2xl md:text-3xl font-bold">パーソナルジムを探す</h2>
          </div>

          <div className="space-y-8">
            {/* キーワード検索 */}
            <div>
              <h3 className="text-lg font-bold mb-4">キーワードで探す</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="ジム名、キーワードを入力"
                  className="flex-1 px-4 py-3 border rounded-lg"
                />
                <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  検索
                </button>
              </div>
            </div>

            {/* エリア検索 */}
            <div>
              <h3 className="text-lg font-bold mb-4">エリアで探す</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select className="px-4 py-3 border rounded-lg">
                  <option>都道府県を選ぶ</option>
                  <option>東京都</option>
                  <option>大阪府</option>
                  <option>神奈川県</option>
                </select>
                <select className="px-4 py-3 border rounded-lg" disabled>
                  <option>市区町村を選ぶ</option>
                </select>
                <select className="px-4 py-3 border rounded-lg" disabled>
                  <option>市区町村以降を選ぶ</option>
                </select>
              </div>
              <button className="mt-4 w-full px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                検索
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-2">Features</p>
            <h2 className="text-2xl md:text-3xl font-bold">特徴からパーソナルジムを探す</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a href="/gyms/list/feature-4JsEjXzikuOX5CIA" className="block p-6 bg-white rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-2">👩</div>
              <p className="font-bold">女性専用</p>
            </a>
            <a href="/gyms/list/feature-6zdj3YfuB4n4u0Tt" className="block p-6 bg-white rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-2">👩‍🏫</div>
              <p className="font-bold">女性トレーナー在籍</p>
            </a>
            <a href="/gyms/list/feature-sGSCtxosyziST0Qi" className="block p-6 bg-white rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-2">💳</div>
              <p className="font-bold">月額制</p>
            </a>
            <a href="/gyms/list/feature-lV7bwsP4oRNlgcKh" className="block p-6 bg-white rounded-lg text-center hover:shadow-lg transition">
              <div className="text-4xl mb-2">🍽️</div>
              <p className="font-bold">食事指導あり</p>
            </a>
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-2">Tag</p>
            <h2 className="text-2xl md:text-3xl font-bold">パーソナルジムをタグから探す</h2>
          </div>

          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            <a href="/gyms/list/tag-001" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">女性専用</a>
            <a href="/gyms/list/tag-002" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">食事指導</a>
            <a href="/gyms/list/tag-003" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">入会金不要</a>
            <a href="/gyms/list/tag-034" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">産後ダイエット</a>
            <a href="/gyms/list/tag-031" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">健康・体型維持</a>
            <a href="/gyms/list/tag-025" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">ボディシェイプ</a>
            <a href="/gyms/list/tag-024" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">筋力アップ(バルクアップ)</a>
            <a href="/gyms/list/tag-023" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">ダイエット</a>
            <a href="/gyms/list/tag-019" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">女性トレーナー在籍</a>
            <a href="/gyms/list/tag-017" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">子連れOK</a>
            <a href="/gyms/list/tag-014" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">手ぶらOK</a>
            <a href="/gyms/list/tag-012" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">シャワー</a>
            <a href="/gyms/list/tag-010" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">完全個室</a>
            <a href="/gyms/list/tag-009" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">月額制</a>
            <a href="/gyms/list/tag-007" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">トライアルプラン</a>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-2">The Latest Articles</p>
            <h2 className="text-2xl md:text-3xl font-bold">パーソナルジム新着記事</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <div className="p-6">
                <p className="text-sm text-blue-500 mb-2">ブランド別 厳選ジムまとめ</p>
                <h3 className="font-bold mb-2">
                  <a href="/articles/brand/katagirijuku" className="hover:text-blue-500">
                    【2026年最新】かたぎり塾の料金や月額費は？口コミや体験談も徹底分析
                  </a>
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  かたぎり塾は、完全個室でマンツーマン指導をおこなうパーソナルジム...
                </p>
                <p className="text-sm text-gray-400">2026.03.16</p>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <div className="p-6">
                <p className="text-sm text-blue-500 mb-2">エリア別 厳選ジムまとめ</p>
                <h3 className="font-bold mb-2">
                  <a href="/articles/city/takamatsu" className="hover:text-blue-500">
                    【2026年最新】パーソナルジム高松おすすめ12選！人気のジムを徹底比較
                  </a>
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  自分に合ったパーソナルジムを見つけるのは、思っている以上に難しいもの...
                </p>
                <p className="text-sm text-gray-400">2026.03.04</p>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <div className="p-6">
                <p className="text-sm text-blue-500 mb-2">エリア別 厳選ジムまとめ</p>
                <h3 className="font-bold mb-2">
                  <a href="/articles/pref/toyama" className="hover:text-blue-500">
                    【2026年最新】パーソナルジム富山おすすめ20選！人気のジムを徹底比較
                  </a>
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  自分に合ったパーソナルジムを見つけるのは、思っている以上に難しいもの...
                </p>
                <p className="text-sm text-gray-400">2026.03.04</p>
              </div>
            </article>
          </div>

          <div className="text-center mt-8">
            <a href="/search?category=feature" className="inline-flex items-center px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-blue-500">
              その他関連記事はこちら
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm mb-2">News</p>
            <h2 className="text-2xl md:text-3xl font-bold">最新ニュース</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-2">
                <time className="text-sm text-gray-500">2025.11.20</time>
                <span className="text-sm text-blue-500">ニュース</span>
              </div>
              <a href="/news/website-launch" className="font-bold hover:text-blue-500">
                WEBサイト開設のお知らせ
              </a>
            </div>

            <div className="text-center mt-6">
              <a href="/news" className="inline-flex items-center text-white hover:underline">
                ニュース一覧
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PR Section */}
      <section className="py-16 bg-gradient-to-r from-blue-400 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-2">PR</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">パーソナルジムの無料掲載依頼</h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="mb-4">
              パーソナルジムの掲載は無料です。掲載希望の連絡をお待ちしています。
              新規掲載をご希望の企業様はこちらより詳細を確認のうえ、
              まずはお気軽にご連絡くださいませ。
            </p>

            <p className="text-xl font-bold mb-6">パーソナルジムの比較・口コミ・予約サイト</p>

            <div className="space-y-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd2cWgzmTOvbmfPs2bLd-H-yUQZqxt4fY46GK49p49uh50y7w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-bold"
              >
                掲載依頼をする
              </a>
              <br />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd2cWgzmTOvbmfPs2bLd-H-yUQZqxt4fY46GK49p49uh50y7w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-blue-500 rounded-lg hover:bg-gray-100 font-bold"
              >
                さっそく無料掲載してみる
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpbl1o2Z3KfYwgvfWaPGAlW9swhOnKYmVq080AWe0qQVXUUA/viewform" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2cWgzmTOvbmfPs2bLd-H-yUQZqxt4fY46GK49p49uh50y7w/viewform" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                  掲載ご希望のジムはこちら
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-blue-400">利用規約</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-blue-400">プライバシーポリシー</a>
              </li>
              <li>
                <a href="/content-policy" className="hover:text-blue-400">記事の制作ポリシー</a>
              </li>
            </ul>
          </nav>

          <div className="text-center text-gray-400 text-sm">
            ©BEST-FIT. all Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
