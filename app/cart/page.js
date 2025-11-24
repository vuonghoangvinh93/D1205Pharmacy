'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import './cart.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Bioderma', price: 55.00, quantity: 1, image: '/images/product_01.png' },
    { id: 2, name: 'Chanca Piedra', price: 70.00, quantity: 2, image: '/images/product_02.png' },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <>
      <Header />

      {/* Page Title */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="site-section-heading text-center">Giỏ hàng</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <div className="site-section">
        <div className="container">
          {cartItems.length > 0 ? (
            <div className="row mb-5">
              <div className="col-md-8">
                <div className="table-responsive">
                  <table className="cart-table">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="cart-item-info">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={80}
                                height={80}
                              />
                              <div>
                                <h5>{item.name}</h5>
                              </div>
                            </div>
                          </td>
                          <td>${item.price.toFixed(2)}</td>
                          <td>
                            <div className="qty-controls">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              />
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                          </td>
                          <td>${(item.price * item.quantity).toFixed(2)}</td>
                          <td>
                            <button
                              className="remove-btn"
                              onClick={() => removeItem(item.id)}
                            >
                              ×
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-md-4">
                <div className="cart-summary">
                  <h3>Tổng đơn hàng</h3>
                  <div className="summary-row">
                    <span>Tạm tính:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Thuế (10%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Tổng cộng:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Link href="/checkout" className="btn btn-primary btn-block">
                    Tiến hành thanh toán
                  </Link>
                  <Link href="/shop" className="btn btn-outline btn-block">
                    Tiếp tục mua sắm
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12 text-center">
                <p className="mb-4">Giỏ hàng của bạn đang trống</p>
                <Link href="/shop" className="btn btn-primary">Bắt đầu mua sắm</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
