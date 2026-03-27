import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Breadcrumbs */}
      <div className="breadcrumbs text-sm container mx-auto p-4">
        <ul>
          <li><a href="/" className="hover:text-primary">ホーム</a></li>
          <li className="font-semibold">プライバシーポリシー</li>
        </ul>
      </div>

      {/* Header */}
      <div className="hero bg-base-200 py-12">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">プライバシーポリシー</h1>
            <p className="text-sm text-gray-600">最終更新日：2026年3月11日</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto p-8 max-w-4xl">
        <div className="prose max-w-none">
          {/* 目次 */}
          <div className="card bg-base-200 shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">目次</h2>
            <ul className="menu">
              <li><a href="#section1">1. 個人情報の定義</a></li>
              <li><a href="#section2">2. 個人情報の収集</a></li>
              <li><a href="#section3">3. 個人情報の利用目的</a></li>
              <li><a href="#section4">4. 個人情報の第三者提供</a></li>
              <li><a href="#section5">5. 個人情報の管理</a></li>
              <li><a href="#section6">6. Cookie等の使用</a></li>
              <li><a href="#section7">7. アクセス解析ツール</a></li>
              <li><a href="#section8">8. お問い合わせ窓口</a></li>
              <li><a href="#section9">9. プライバシーポリシーの変更</a></li>
            </ul>
          </div>

          {/* 前文 */}
          <div className="mb-8">
            <p>
              株式会社BEST-FIT（以下「当社」といいます）は、当社が提供するサービス（以下「本サービス」といいます）における、
              ユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
            </p>
          </div>

          {/* 1. 個人情報の定義 */}
          <div id="section1" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              1. 個人情報の定義
            </h2>
            <p>
              本ポリシーにおいて「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、
              生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、
              メールアドレス等の記述等により特定の個人を識別できる情報を指します。
            </p>
          </div>

          {/* 2. 個人情報の収集 */}
          <div id="section2" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              2. 個人情報の収集
            </h2>
            <p className="mb-4">当社は、以下の方法により個人情報を収集します。</p>
            <ul className="list-disc list-inside space-y-2">
              <li>ユーザーがお問い合わせフォームに入力する際の氏名、メールアドレス、電話番号</li>
              <li>ユーザーが会員登録をする際の氏名、メールアドレス、住所、電話番号</li>
              <li>ユーザーがパーソナルジムを予約する際の氏名、電話番号、希望日時</li>
              <li>Cookie、アクセスログ等の技術的情報</li>
            </ul>
          </div>

          {/* 3. 個人情報の利用目的 */}
          <div id="section3" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              3. 個人情報の利用目的
            </h2>
            <p className="mb-4">当社は、収集した個人情報を以下の目的で利用します。</p>
            <ul className="list-disc list-inside space-y-2">
              <li>本サービスの提供、運営のため</li>
              <li>ユーザーからのお問い合わせに対応するため</li>
              <li>ユーザーへのメールマガジン、お知らせの配信のため</li>
              <li>パーソナルジムとの予約、契約の仲介のため</li>
              <li>本サービスの改善、新サービスの開発のため</li>
              <li>マーケティングデータの分析のため</li>
              <li>利用規約に違反したユーザーの特定、利用停止のため</li>
            </ul>
          </div>

          {/* 4. 個人情報の第三者提供 */}
          <div id="section4" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              4. 個人情報の第三者提供
            </h2>
            <p className="mb-4">
              当社は、以下の場合を除き、ユーザーの同意なく個人情報を第三者に提供しません。
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>ユーザーの同意がある場合</li>
              <li>パーソナルジムへの予約情報の提供（氏名、電話番号、希望日時）</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>
          </div>

          {/* 5. 個人情報の管理 */}
          <div id="section5" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              5. 個人情報の管理
            </h2>
            <p>
              当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
              当社は、個人情報の取り扱いの全部または一部を第三者に委託する場合は、当該第三者について厳正な調査を行い、
              委託を受けた者に対する必要かつ適切な監督を行います。
            </p>
          </div>

          {/* 6. Cookie等の使用 */}
          <div id="section6" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              6. Cookie等の使用
            </h2>
            <p className="mb-4">
              当社は、本サービスの利便性向上、利用状況の把握、広告配信のために、Cookie等の技術を使用することがあります。
              ユーザーは、ブラウザの設定によりCookieの受け取りを拒否することができますが、
              その場合、本サービスの一部機能が利用できなくなる可能性があります。
            </p>
          </div>

          {/* 7. アクセス解析ツール */}
          <div id="section7" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              7. アクセス解析ツール
            </h2>
            <p className="mb-4">
              当社は、本サービスの利用状況を把握するために、Google Analytics等のアクセス解析ツールを使用しています。
              これらのツールは、Cookie等の技術を使用して、ユーザーのアクセス情報を収集します。
              収集される情報は匿名であり、個人を特定するものではありません。
            </p>
            <p>
              Google Analyticsの利用規約及びプライバシーポリシーについては、
              <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="link link-primary">
                こちら
              </a>
              をご確認ください。
            </p>
          </div>

          {/* 8. お問い合わせ窓口 */}
          <div id="section8" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              8. お問い合わせ窓口
            </h2>
            <div className="card bg-base-200 shadow p-6">
              <p className="mb-2"><strong>株式会社BEST-FIT</strong></p>
              <p className="mb-2">〒150-0001 東京都渋谷区神宮前1-1-1</p>
              <p className="mb-2">TEL: 03-1234-5678</p>
              <p className="mb-2">Email: privacy@bestfit.jp</p>
              <p className="mb-2">受付時間: 平日 10:00-18:00</p>
              <p className="mt-4">
                または
                <a href="/contact" className="link link-primary ml-2">お問い合わせフォーム</a>
                からお問い合わせください。
              </p>
            </div>
          </div>

          {/* 9. プライバシーポリシーの変更 */}
          <div id="section9" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              9. プライバシーポリシーの変更
            </h2>
            <p>
              当社は、本ポリシーの内容を必要に応じて変更することがあります。
              変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。
              重要な変更がある場合は、本サービス上で告知いたします。
            </p>
          </div>

          {/* 制定日 */}
          <div className="text-right text-sm text-gray-600 mt-8">
            <p>制定日：2026年3月11日</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
