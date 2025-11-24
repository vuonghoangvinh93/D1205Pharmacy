'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import './thankyou.css';

export default function ThankYou() {
  return (
    <>
      <Header />

      {/* Thank You Section */}
      <div className="site-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <div className="thank-you-card">
                <div className="thank-you-icon">✓</div>
                <h2 className="mb-3">Cảm ơn bạn!</h2>
                <p className="lead mb-4">
                  Đơn hàng của bạn đã được nhận và đang được xử lý.
                </p>

                <div className="order-details mb-5">
                  <div className="detail-row">
                    <span>Mã đơn hàng:</span>
                    <span className="order-number">#ORD-2024-001234</span>
                  </div>
                  <div className="detail-row">
                    <span>Ngày đặt hàng:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="detail-row">
                    <span>Tổng số tiền:</span>
                    <span>214.500 vnđ</span>
                  </div>
                </div>

                <p className="mb-4">
                  Chúng tôi đã gửi email xác nhận đến <strong>your@email.com</strong> với tất cả các chi tiết đơn hàng của bạn.
                </p>

                <p className="mb-4">
                  Bạn sẽ nhận được số theo dõi qua email khi đơn hàng của bạn được gửi đi.
                </p>

                <div className="button-group">
                  <Link href="/" className="btn btn-primary">Quay lại Trang chủ</Link>
                  <Link href="/shop" className="btn btn-outline">Tiếp tục mua sắm</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h2 className="site-section-heading text-center">Điều gì sẽ xảy ra tiếp theo?</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="info-box">
                <div className="step-number">1</div>
                <h4>Xác nhận đơn hàng</h4>
                <p>Bạn sẽ nhận được email xác nhận với chi tiết đơn hàng và thông tin theo dõi.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="info-box">
                <div className="step-number">2</div>
                <h4>Đang xử lý</h4>
                <p>Đơn hàng của bạn đang được đóng gói cẩn thận và chuẩn bị để gửi đi từ kho của chúng tôi.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="info-box">
                <div className="step-number">3</div>
                <h4>Giao hàng</h4>
                <p>Gói hàng của bạn sẽ được giao đến địa chỉ của bạn trong vòng 3-5 ngày làm việc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
