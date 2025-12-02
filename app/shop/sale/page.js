'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import '../shop.css';

export default function SalePage() {
  const allProducts = [
    { id: 1, name: 'FlexGlu', image: '/images/khop1.png', price: 320000, salePrice: 220000, isOnSale: true, category: 'xuongkhop', sale: true },
    { id: 3, name: 'Aquamovit', image: '/images/aquamovit.png', price: 520000, salePrice: 240000, isOnSale: true, category: 'xuongkhop', sale: true },
    { id: 2, name: 'Xương Khớp TW28', image: '/images/khoptw28.png', price: 340000, salePrice: 235000, isOnSale: true, category: 'xuongkhop', sale: true },
    { id: 4, name: 'Cetyl Pure', image: '/images/product_04.png', price: 45.00, salePrice: 20.00, isOnSale: false, category: 'lamdep', sale: false },
    { id: 5, name: 'CLA Core', image: '/images/product_05.png', price: 38.00, salePrice: null, isOnSale: false, category: 'lamdep', sale: false },
    { id: 6, name: 'Poo Pourri', image: '/images/product_06.png', price: 89.00, salePrice: 38.00, isOnSale: true, category: 'lamdep', sale: false },
    { id: 7, name: 'Bioderma', image: '/images/product_01.png', price: 95.00, salePrice: 55.00, isOnSale: true, category: 'nutrition', sale: false },
    { id: 8, name: 'Chanca Piedra', image: '/images/product_02.png', price: 70.00, salePrice: null, isOnSale: false, category: 'nutrition', sale: false },
    { id: 9, name: 'Umcka Cold Care', image: '/images/product_03.png', price: 120.00, salePrice: null, isOnSale: false, category: 'nutrition', sale: false },
  ];

  // Filter chỉ các sản phẩm có tag khuyến mãi
  const saleProducts = allProducts.filter(product => product.sale === true);

  return (
    <>
      <Header />

      {/* Page Title */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="site-section-heading text-center">Sản phẩm khuyến mãi</h2>
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
                {saleProducts.length > 0 ? (
                  saleProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <p>Không có sản phẩm khuyến mãi nào.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              <div className="row">
                <div className="col-12">
                  <div className="pagination text-center">
                    <a href="#1" className="page-link active">1</a>
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
                    <li>
                      <Link href="/shop">
                        Tất cả sản phẩm
                      </Link> ({allProducts.length})
                    </li>
                    <li>
                      <Link href="/shop#xuongkhop">
                        xương khớp
                      </Link> ({allProducts.filter(p => p.category === 'xuongkhop').length})
                    </li>
                    <li>
                      <Link href="/shop#lamdep">
                        Làm đẹp
                      </Link> ({allProducts.filter(p => p.category === 'lamdep').length})
                    </li>
                    <li>
                      <Link href="/shop#nutrition">
                        Dinh dưỡng
                      </Link> ({allProducts.filter(p => p.category === 'nutrition').length})
                    </li>
                    <li>
                      <Link href="/shop/sale" className="active">
                        Khuyến mãi
                      </Link> ({saleProducts.length})
                    </li>
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
                          src="/images/khop1.png"
                          alt="Product"
                          width={100}
                          height={100}
                        />
                      </div>
                      <h5><a href="#product1">Sản phẩm 1</a></h5>
                      <p className="price">220.000 VNĐ</p>
                    </div>
                    <div className="item mb-4">
                      <div className="item-img">
                        <Image
                          src="/images/aquamovit.png"
                          alt="Product"
                          width={100}
                          height={100}
                        />
                      </div>
                      <h5><a href="#product2">Sản phẩm 2</a></h5>
                      <p className="price">240.000 VNĐ</p>
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

