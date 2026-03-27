import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Breadcrumbs */}
      <div className="breadcrumbs text-sm container mx-auto p-4">
        <ul>
          <li><a href="/" className="hover:text-primary">ホーム</a></li>
          <li className="font-semibold">利用規約</li>
        </ul>
      </div>

      {/* Header */}
      <div className="hero bg-base-200 py-12">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">利用規約</h1>
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
              <li><a href="#section1">第1条（適用）</a></li>
              <li><a href="#section2">第2条（定義）</a></li>
              <li><a href="#section3">第3条（ユーザー登録）</a></li>
              <li><a href="#section4">第4条（禁止事項）</a></li>
              <li><a href="#section5">第5条（本サービスの提供の停止等）</a></li>
              <li><a href="#section6">第6条（免責事項）</a></li>
              <li><a href="#section7">第7条（著作権）</a></li>
              <li><a href="#section8">第8条（利用規約の変更）</a></li>
              <li><a href="#section9">第9条（準拠法・裁判管轄）</a></li>
            </ul>
          </div>

          {/* 前文 */}
          <div className="mb-8">
            <p>
              本利用規約（以下「本規約」といいます）は、株式会社BEST-FIT（以下「当社」といいます）が提供するサービス
              （以下「本サービス」といいます）の利用条件を定めるものです。
              ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に従って本サービスをご利用いただきます。
            </p>
          </div>

          {/* 第1条 */}
          <div id="section1" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              第1条（適用）
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>本規約は、本サービスの提供条件及び本サービスの利用に関する当社とユーザーとの間の権利義務関係を定めることを目的とし、
                  ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。</li>
              <li>当社が本サービス上で掲載する本サービスに関するルール、諸規定等は本規約の一部を構成するものとします。</li>
              <li>本規約の内容と、前項のルール等との間に齟齬がある場合には、本規約の規定が優先して適用されるものとします。</li>
            </ol>
          </div>

          {/* 第2条 */}
          <div id="section2" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              第2条（定義）
            </h2>
            <p className="mb-4">本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>「本サービス」とは、当社が提供するパーソナルジムの比較・検索・予約サービスをいいます。</li>
              <li>「ユーザー」とは、本サービスを利用する全ての方をいいます。</li>
              <li>「登録ユーザー」とは、本サービスにユーザー登録を行った方をいいます。</li>
              <li>「加盟店」とは、本サービスに掲載されているパーソナルジム等の事業者をいいます。</li>
              <li>「コンテンツ」とは、文章、画像、動画、音声、ソフトウェア、プログラム、コード等の情報をいいます。</li>
            </ol>
          </div>

          {/* 第3条 */}
          <div id="section3" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              第3条（ユーザー登録）
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>本サービスの利用を希望する方は、本規約を遵守することに同意し、当社の定める方法によってユーザー登録を申請することができます。</li>
              <li>当社は、ユーザー登録の申請者に以下の事由があると判断した場合、ユーザー登録の申請を承認しないことがあります。
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>本規約に違反したことがある者からの申請である場合</li>
                  <li>登録事項に虚偽の事項が含まれている場合</li>
                  <li>反社会的勢力等である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等、反社会的勢力等との何らかの交流もしくは関与を行っていると当社が判断した場合</li>
                  <li>その他、当社が登録を適当でないと判断した場合</li>
                </ul>
              </li>
            </ol>
          </div>

          {/* 第4条 */}
          <div id="section4" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              第4条（禁止事項）
            </h2>
            <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社、本サービスの他のユーザー、または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
              <li>本サービスを通じ、以下に該当し、または該当すると当社が判断する情報を送信する行為
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>過度に暴力的または残虐な表現を含む情報</li>
                  <li>コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報</li>
                  <li>当社、本サービスの他のユーザーまたは第三者の名誉または信用を毀損する表現を含む情報</li>
                  <li>過度にわいせつな表現を含む情報</li>
                  <li>差別を助長する表現を含む情報</li>
                  <li>自殺、自傷行為を助長する表現を含む情報</li>
                  <li>薬物の不適切な利用を助長する表現を含む情報</li>
                  <li>反社会的な表現を含む情報</li>
                  <li>チェーンメール等の第三者への情報の拡散を求める情報</li>
                  <li>他人に不快感を与える表現を含む情報</li>
                </ul>
              </li>
              <li>本サービスのネットワークまたはシステム等に過度な負荷をかける行為</li>
              <li>当社が提供するソフトウェアその他のシステムに対するリバースエンジニアリングその他の解析行為</li>
              <li>本サービスの運営を妨害するおそれのある行為</li>
              <li>当社のネットワークまたはシステム等への不正アクセス</li>
              <li>第三者に成りすます行為</li>
              <li>本サービスの他のユーザーのIDまたはパスワードを利用する行為</li>
              <li>当社が事前に許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
              <li>本サービスの他のユーザーの情報の収集</li>
              <li>当社、本サービスの他のユーザーまたは第三者に不利益、損害、不快感を与える行為</li>
              <li>反社会的勢力等への利益供与</li>
              <li>前各号の行為を直接または間接に惹起し、または容易にする行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ol>
          </div>

          {/* 第5条 */}
          <div id="section5" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              第5条（本サービスの提供の停止等）
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                </ul>
              </li>
              <li>当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
            </ol>
          </div>

          {/* 第6条 */}
          <div id="section6" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              第6条（免責事項）
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>当社は、本サービスに関して、その完全性、正確性、確実性、有用性等につき、いかなる保証も行いません。</li>
              <li>当社は、本サービスを通じてユーザーが加盟店との間で行った取引、連絡、紛争等について、一切の責任を負いません。</li>
              <li>当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。</li>
              <li>本サービスに関して、ユーザーと第三者との間において生じた取引、連絡または紛争等については、ユーザーが自己の責任によって解決するものとし、当社は一切の責任を負いません。</li>
            </ol>
          </div>

          {/* 第7条 */}
          <div id="section7" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              第7条（著作権）
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>本サービス上のコンテンツに関する著作権その他の知的財産権は、当社または当社にライセンスを許諾している者に帰属します。</li>
              <li>ユーザーは、本サービス上のコンテンツについて、当社が明示的に許諾する範囲を超えて、複製、送信、転載、改変その他の利用をしてはならないものとします。</li>
            </ol>
          </div>

          {/* 第8条 */}
          <div id="section8" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              第8条（利用規約の変更）
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>当社は、必要に応じて本規約を変更することができるものとします。</li>
              <li>当社は、本規約を変更する場合には、変更後の本規約の施行時期及び内容を本サービス上に表示し、またはユーザーに通知します。</li>
              <li>変更後の本規約は、本サービス上に表示した時点から効力を生じるものとします。</li>
            </ol>
          </div>

          {/* 第9条 */}
          <div id="section9" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              第9条（準拠法・裁判管轄）
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
            </ol>
          </div>

          {/* お問い合わせ */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-primary pb-2">
              お問い合わせ
            </h2>
            <div className="card bg-base-200 shadow p-6">
              <p className="mb-2"><strong>株式会社BEST-FIT</strong></p>
              <p className="mb-2">〒150-0001 東京都渋谷区神宮前1-1-1</p>
              <p className="mb-2">TEL: 03-1234-5678</p>
              <p className="mb-2">Email: info@bestfit.jp</p>
              <p className="mb-2">受付時間: 平日 10:00-18:00</p>
              <p className="mt-4">
                または
                <a href="/contact" className="link link-primary ml-2">お問い合わせフォーム</a>
                からお問い合わせください。
              </p>
            </div>
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
