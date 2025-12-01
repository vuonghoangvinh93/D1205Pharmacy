'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import '../shop-single.css';

function formatCurrencyVND(amount) {
  return amount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}

// Tạm thời dùng cùng dữ liệu với trang /shop
const allProducts = [
  { id: 1, name: 'FlexGlu', image: '/images/khop1.png', price: 320000, salePrice: 220000, isOnSale: true, category: 'suongkhop', sale: true },
  { id: 2, name: 'Chanca Piedra', image: '/images/product_02.png', price: 70000, salePrice: null, isOnSale: false, category: 'suongkhop', sale: true },
  { id: 3, name: 'Umcka Cold Care', image: '/images/product_03.png', price: 120000, salePrice: null, isOnSale: false, category: 'suongkhop', sale: true },
  { id: 4, name: 'Cetyl Pure', image: '/images/product_04.png', price: 450000, salePrice: 200000, isOnSale: false, category: 'lamdep', sale: false },
  { id: 5, name: 'CLA Core', image: '/images/product_05.png', price: 380000, salePrice: null, isOnSale: false, category: 'lamdep', sale: false },
  { id: 6, name: 'Poo Pourri', image: '/images/product_06.png', price: 89000, salePrice: 38000, isOnSale: true, category: 'lamdep', sale: false },
  { id: 7, name: 'Bioderma', image: '/images/product_01.png', price: 95000, salePrice: 55000, isOnSale: true, category: 'nutrition', sale: false },
  { id: 8, name: 'Chanca Piedra', image: '/images/product_02.png', price: 700000, salePrice: null, isOnSale: false, category: 'nutrition', sale: false },
  { id: 9, name: 'Umcka Cold Care', image: '/images/product_03.png', price: 1200000, salePrice: null, isOnSale: false, category: 'nutrition', sale: false },
];

export default function ShopSingle({ params }) {
  const [quantity, setQuantity] = useState(1);

  const productId = Number(params.id);
  const product = allProducts.find((p) => p.id === productId) || allProducts[0];

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ!`);
    setQuantity(1);
  };

  if (!product) {
    return (
      <>
        <Header />
        <div className="site-section">
          <div className="container">
            <h2 className="site-section-heading text-center">Sản phẩm không tồn tại</h2>
            <p className="text-center">
              <Link href="/shop" className="btn btn-primary">Quay lại cửa hàng</Link>
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="site-section">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Trang chủ</Link>
            <span>/</span>
            <Link href="/shop">Sản phẩm</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="product-image-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="product-main-image"
                />
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="product-title">{product.name}</h2>

              <div className="product-price mb-4">
                {product.salePrice ? (
                  <>
                    <span className="original-price">
                      {formatCurrencyVND(product.price)}
                    </span>
                    <span className="sale-price">
                      {formatCurrencyVND(product.salePrice)}
                    </span>
                  </>
                ) : (
                  <span className="sale-price">
                    {formatCurrencyVND(product.price)}
                  </span>
                )}
              </div>

              <p className="product-description mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quasi officiis quo
                necessitatibus.
              </p>

              <div className="product-details mb-4">
                <h4>Chi tiết sản phẩm</h4>
                <p>
                  Sản phẩm chất lượng cao, nguồn gốc rõ ràng, an toàn cho người sử dụng. Hỗ trợ tăng
                  cường sức khỏe và cải thiện tình trạng hiện tại.
                </p>
              </div>

              <div className="product-availability mb-4">
                <span className="in-stock">Còn hàng</span>
              </div>

              <div className="product-options mb-5">
                <div className="qty-selector mb-4">
                  <label>Số lượng:</label>
                  <div className="qty-controls">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      min="1"
                    />
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>

                <div className="action-buttons">
                  <button
                    className="btn btn-primary"
                    onClick={handleAddToCart}
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>

              <div className="product-meta">
                <p><strong>SKU:</strong> PHR-00{product.id}</p>
                <p><strong>Danh mục:</strong> {product.category}</p>
                <p><strong>Giao hàng:</strong> Miễn phí với đơn trên 200.000&nbsp;₫</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="site-section-heading text-center">Sản phẩm liên quan</h2>
            </div>
          </div>

          <div className="row">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


