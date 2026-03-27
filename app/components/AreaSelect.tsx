'use client';

import { useState } from 'react';

const PREFECTURES = [
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
  '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
  '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県',
  '岐阜県', '静岡県', '愛知県', '三重県',
  '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
  '鳥取県', '島根県', '岡山県', '広島県', '山口県',
  '徳島県', '香川県', '愛媛県', '高知県',
  '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

export default function AreaSelect() {
  const [selectedPref, setSelectedPref] = useState('');

  const handleSearch = () => {
    if (selectedPref) {
      // エリアページに遷移
      window.location.href = `/areas/${encodeURIComponent(selectedPref)}`;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-semibold">エリアから探す</span>
        </label>
        <div className="join w-full">
          <select 
            className="select select-bordered join-item w-full"
            value={selectedPref}
            onChange={(e) => setSelectedPref(e.target.value)}
          >
            <option value="">都道府県を選択</option>
            {PREFECTURES.map((pref) => (
              <option key={pref} value={pref}>
                {pref}
              </option>
            ))}
          </select>
          <button 
            className="btn btn-primary join-item"
            onClick={handleSearch}
            disabled={!selectedPref}
          >
            検索
          </button>
        </div>
      </div>
    </div>
  );
}
