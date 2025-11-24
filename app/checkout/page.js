'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './checkout.css';

export default function Checkout() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order submission
    router.push('/thankyou');
  };

  return (
    <>
      <Header />

      {/* Page Title */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="site-section-heading text-center">Thanh toán</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit}>
                <div className="form-section mb-5">
                  <h3 className="mb-4">Địa chỉ thanh toán</h3>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label>Họ</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label>Tên</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label>Điện thoại</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 mb-4">
                      <label>Địa chỉ</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-3 mb-4">
                      <label>Tiểu bang</label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-3 mb-4">
                      <label>Mã ZIP</label>
                      <input
                        type="text"
                        className="form-control"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section mb-5">
                  <h3 className="mb-4">Payment Information</h3>
                  <div className="row">
                    <div className="col-12 mb-4">
                      <label>Tên chủ thẻ</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 mb-4">
                      <label>Số thẻ</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label>Ngày hết hạn</label>
                      <input
                        type="text"
                        className="form-control"
                        name="expiry"
                        placeholder="MM/YY"
                        value={formData.expiry}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label>CVV</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <Link href="/cart" className="btn btn-outline">Quay lại Giỏ hàng</Link>
                  <button type="submit" className="btn btn-primary">Đặt hàng</button>
                </div>
              </form>
            </div>

            <div className="col-lg-4">
              <div className="order-summary">
                <h3>Tóm tắt đơn hàng</h3>
                <div className="summary-item">
                  <span>Tạm tính</span>
                  <span>$195.00</span>
                </div>
                <div className="summary-item">
                  <span>Vận chuyển</span>
                  <span>Miễn phí</span>
                </div>
                <div className="summary-item">
                  <span>Thuế</span>
                  <span>$19.50</span>
                </div>
                <div className="summary-item total">
                  <span>Tổng cộng</span>
                  <span>$214.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
