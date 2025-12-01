'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import './your_body.css';

export default function YourBody() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <div className="site-blocks-cover" style={{ backgroundImage: "url('/images/hero_1.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="site-block-cover-content text-center">
                <h2 className="site-section-heading">Cơ thể của bạn</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your Body Content */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-5">
                Nội dung trang cơ thể của bạn sẽ được cập nhật tại đây.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

