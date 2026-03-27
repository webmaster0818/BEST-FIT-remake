'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    // 検索処理（後で実装）
    console.log('Search keyword:', keyword);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="join w-full">
        <input
          type="text"
          placeholder="パーソナルジムを検索（例: 新宿 女性専用）"
          className="input input-bordered join-item w-full"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button 
          className="btn btn-primary join-item"
          onClick={handleSearch}
        >
          検索
        </button>
      </div>
    </div>
  );
}
