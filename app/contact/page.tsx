'use client';

import { useState } from 'react';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    // 名前バリデーション
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }

    // メールアドレスバリデーション
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください';
    }

    // 電話番号バリデーション
    if (!formData.phone.trim()) {
      newErrors.phone = '電話番号を入力してください';
    } else if (!/^[0-9-]+$/.test(formData.phone)) {
      newErrors.phone = '正しい電話番号を入力してください';
    }

    // お問い合わせ内容バリデーション
    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'お問い合わせ内容は10文字以上で入力してください';
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      // 実際の送信処理はここに実装（今回はUI実装のみ）
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // エラーをクリア
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-base-100">
        <div className="hero min-h-[80vh]">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="text-6xl mb-4">✅</div>
              <h1 className="text-4xl font-bold mb-4">送信完了</h1>
              <p className="mb-8">
                お問い合わせありがとうございます。<br />
                担当者より2営業日以内にご連絡いたします。
              </p>
              <a href="/" className="btn btn-primary">
                ホームに戻る
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Breadcrumbs */}
      <div className="breadcrumbs text-sm container mx-auto p-4">
        <ul>
          <li><a href="/" className="hover:text-primary">ホーム</a></li>
          <li className="font-semibold">お問い合わせ</li>
        </ul>
      </div>

      {/* Header */}
      <div className="hero bg-base-200 py-12">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
            <p className="text-lg">
              ご不明な点やご質問がございましたら、お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto p-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 名前 */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">お名前 <span className="text-error">*</span></span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="山田 太郎"
              className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
            />
            {errors.name && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.name}</span>
              </label>
            )}
          </div>

          {/* メールアドレス */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">メールアドレス <span className="text-error">*</span></span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.email}</span>
              </label>
            )}
          </div>

          {/* 電話番号 */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">電話番号 <span className="text-error">*</span></span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="03-1234-5678"
              className={`input input-bordered w-full ${errors.phone ? 'input-error' : ''}`}
            />
            {errors.phone && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.phone}</span>
              </label>
            )}
          </div>

          {/* お問い合わせ内容 */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">お問い合わせ内容 <span className="text-error">*</span></span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="お問い合わせ内容をご記入ください（10文字以上）"
              className={`textarea textarea-bordered w-full h-32 ${errors.message ? 'textarea-error' : ''}`}
            />
            {errors.message && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.message}</span>
              </label>
            )}
          </div>

          {/* プライバシーポリシー同意 */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input type="checkbox" className="checkbox" required />
              <span className="label-text">
                <a href="/privacy" className="link link-primary" target="_blank">
                  プライバシーポリシー
                </a>
                に同意する
              </span>
            </label>
          </div>

          {/* 送信ボタン */}
          <div className="form-control">
            <button type="submit" className="btn btn-primary btn-lg w-full">
              送信する
            </button>
          </div>
        </form>

        {/* 注意事項 */}
        <div className="alert alert-info mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 className="font-bold">お問い合わせについて</h3>
            <div className="text-sm">
              お問い合わせいただいた内容は、担当者より2営業日以内にご連絡いたします。<br />
              お急ぎの場合は、お電話（03-1234-5678）にてお問い合わせください。
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
