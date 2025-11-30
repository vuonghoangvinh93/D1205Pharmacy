'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import './shop-single.css';

export default function ShopSingle({ params }) {
  const [quantity, setQuantity] = useState(1);

  // Sample product data - in real app this would come from params/database
  const product = {
    id: 1,
    name: 'Bioderma',
    price: 95.00,
    salePrice: 55.00,
    image: '/images/product_01.png',
    rating: 5,
    reviews: 12,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quasi officiis quo necessitatibus.',
    details: 'High-quality pharmaceutical product with proven effectiveness. Safe for all ages.',
    inStock: true,
  };

  const relatedProducts = [
    { id: 2, name: 'Chanca Piedra', image: '/images/product_02.png', price: 70.00, salePrice: null, isOnSale: false },
    { id: 3, name: 'Umcka Cold Care', image: '/images/product_03.png', price: 120.00, salePrice: null, isOnSale: false },
    { id: 4, name: 'Cetyl Pure', image: '/images/product_04.png', price: 45.00, salePrice: 20.00, isOnSale: false },
  ];

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
    setQuantity(1);
  };

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

              <div className="product-rating mb-4">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <span className="review-count">({product.reviews} đánh giá)</span>
              </div>

              <div className="product-price mb-4">
                {product.salePrice ? (
                  <>
                    <span className="original-price">${product.price.toFixed(2)}</span>
                    <span className="sale-price">${product.salePrice.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="sale-price">${product.price.toFixed(2)}</span>
                )}
              </div>

              <p className="product-description mb-4">
                {product.description}
              </p>

              <div className="product-details mb-4">
                <h4>Details</h4>
                <p>{product.details}</p>
              </div>

              <div className="product-availability mb-4">
                {product.inStock ? (
                  <span className="in-stock">Còn hàng</span>
                ) : (
                  <span className="out-of-stock">Hết hàng</span>
                )}
              </div>

              <div className="product-options mb-5">
                <div className="qty-selector mb-4">
                  <label>Quantity:</label>
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
                    disabled={!product.inStock}
                  >
                    Add to Cart
                  </button>
                  <button className="btn btn-outline">
                    Add to Wishlist
                  </button>
                </div>
              </div>

              <div className="product-meta">
                <p><strong>SKU:</strong> PHR-001</p>
                <p><strong>Category:</strong> Thực phẩm bổ sung</p>
                <p><strong>Shipping:</strong> Miễn phí vận chuyển cho đơn hàng trên 200.000 vnđ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Tabs */}
      <div className="site-section bg-light">
        <div className="container">
          <div className="tabs mb-5">
            <div className="tab-content">
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia a aspernatur, ipsa, adipisci 
                hic et nulla et expedita incidunt dolorem reiciendis neque tempora! Facilis expedita quas accusamus 
                dolore consequatur quod, voluptatum incidunt ratione, error aperiam soluta dolor hic sequi officiis.
              </p>
              <h4>Key Benefits</h4>
              <ul className="benefits-list">
                <li>Helps boost immunity</li>
                <li>Natural ingredients</li>
                <li>No side effects</li>
                <li>Scientifically tested</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="site-section-heading text-center">Related Products</h2>
            </div>
          </div>

          <div className="row">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
