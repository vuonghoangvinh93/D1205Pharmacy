'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import './shop.css';

export default function Shop() {
  const allProducts = [
    { id: 1, name: 'Bioderma', image: '/images/product_01.png', price: 95.00, salePrice: 55.00, isOnSale: true },
    { id: 2, name: 'Chanca Piedra', image: '/images/product_02.png', price: 70.00, salePrice: null, isOnSale: false },
    { id: 3, name: 'Umcka Cold Care', image: '/images/product_03.png', price: 120.00, salePrice: null, isOnSale: false },
    { id: 4, name: 'Cetyl Pure', image: '/images/product_04.png', price: 45.00, salePrice: 20.00, isOnSale: false },
    { id: 5, name: 'CLA Core', image: '/images/product_05.png', price: 38.00, salePrice: null, isOnSale: false },
    { id: 6, name: 'Poo Pourri', image: '/images/product_06.png', price: 89.00, salePrice: 38.00, isOnSale: true },
    { id: 7, name: 'Bioderma', image: '/images/product_01.png', price: 95.00, salePrice: 55.00, isOnSale: true },
    { id: 8, name: 'Chanca Piedra', image: '/images/product_02.png', price: 70.00, salePrice: null, isOnSale: false },
    { id: 9, name: 'Umcka Cold Care', image: '/images/product_03.png', price: 120.00, salePrice: null, isOnSale: false },
  ];

  return (
    <>
      <Header />

      {/* Page Title */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="site-section-heading text-center">Cửa hàng</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row mb-5">
                {allProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="row">
                <div className="col-12">
                  <div className="pagination text-center">
                    <a href="#1" className="page-link active">1</a>
                    <a href="#2" className="page-link">2</a>
                    <a href="#3" className="page-link">3</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-3">
              <div className="sidebar">
                {/* Category Filter */}
                <div className="sidebar-box mb-5">
                  <h3 className="h4">Danh mục</h3>
                  <ul className="list-unstyled category-list">
                    <li><a href="#supplements">Thực phẩm bổ sung</a> (15)</li>
                    <li><a href="#vitamins">Vitamin</a> (8)</li>
                    <li><a href="#nutrition">Chế độ ăn &amp; Dinh dưỡng</a> (12)</li>
                    <li><a href="#tea">Trà &amp; Cà phê</a> (5)</li>
                  </ul>
                </div>

                {/* Price Filter */}
                <div className="sidebar-box mb-5">
                  <h3 className="h4">Khoảng giá</h3>
                  <div className="price-range">
                    <input type="range" min="0" max="500" defaultValue="75" className="slider-input" />
                  </div>
                </div>

                {/* Top Rated Products */}
                <div className="sidebar-box mb-5">
                  <h3 className="h4">Sản phẩm được đánh giá cao</h3>
                  <div className="products-small">
                    <div className="item mb-4">
                      <div className="item-img">
                        <Image
                          src="/images/product_01.png"
                          alt="Product"
                          width={100}
                          height={100}
                        />
                      </div>
                      <h5><a href="#product1">Sản phẩm 1</a></h5>
                      <p className="price">$45.00</p>
                    </div>
                    <div className="item mb-4">
                      <div className="item-img">
                        <Image
                          src="/images/product_02.png"
                          alt="Product"
                          width={100}
                          height={100}
                        />
                      </div>
                      <h5><a href="#product2">Sản phẩm 2</a></h5>
                      <p className="price">$62.00</p>
                    </div>
                  </div>
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
