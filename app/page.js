'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import './page.css';
import { useEffect } from 'react';

export default function Home() {
  const products = [
    { id: 1, name: 'Bioderma', image: '/images/product_01.png', price: 95.00, salePrice: 55.00, isOnSale: true },
    { id: 2, name: 'Chanca Piedra', image: '/images/product_02.png', price: 70.00, salePrice: null, isOnSale: false },
    { id: 3, name: 'Umcka Cold Care', image: '/images/product_03.png', price: 120.00, salePrice: null, isOnSale: false },
    { id: 4, name: 'Cetyl Pure', image: '/images/product_04.png', price: 45.00, salePrice: 20.00, isOnSale: false },
    { id: 5, name: 'CLA Core', image: '/images/product_05.png', price: 38.00, salePrice: null, isOnSale: false },
    { id: 6, name: 'Poo Pourri', image: '/images/product_06.png', price: 89.00, salePrice: 38.00, isOnSale: true },
  ];

  const newProducts = [
    { id: 3, name: 'Umcka Cold Care', image: '/images/product_03.png', price: 120.00, salePrice: null, isOnSale: false },
    { id: 1, name: 'Bioderma', image: '/images/product_01.png', price: 95.00, salePrice: 55.00, isOnSale: false },
    { id: 2, name: 'Chanca Piedra', image: '/images/product_02.png', price: 70.00, salePrice: null, isOnSale: false },
    { id: 4, name: 'Cetyl Pure', image: '/images/product_04.png', price: 45.00, salePrice: 20.00, isOnSale: false },
  ];

  const testimonials = [
    {
      name: 'Kelly Holmes',
      image: '/images/person_1.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.'
    },
    {
      name: 'Rebecca Morando',
      image: '/images/person_2.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.'
    },
    {
      name: 'Lucas Gallone',
      image: '/images/person_3.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.'
    },
    {
      name: 'Andrew Neel',
      image: '/images/person_4.jpg',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.'
    },
  ];

  useEffect(() => {
    // Initialize AOS (Animate On Scroll) if available
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
    script.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 800,
          easing: 'slide',
          once: true
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <div className="site-blocks-cover" style={{ backgroundImage: "url('/images/hero_1.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
              <div className="site-block-cover-content text-center">
                <h2 className="sub-title">Thuốc hiệu quả, Thuốc mới mỗi ngày</h2>
                <h1>Chào mừng đến với D1205 Pharma</h1>
                <p>
                  <Link href="/shop" className="btn btn-primary px-5 py-3">Mua ngay</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="site-section">
        <div className="container">
          <div className="row align-items-stretch section-overlap">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap bg-primary h-100">
                <a href="#shipping" className="h-100">
                  <h5>Miễn phí <br /> Vận chuyển</h5>
                  <p>
                    Amet sit amet dolor
                    <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap h-100">
                <a href="#sale" className="h-100">
                  <h5>Khuyến mãi <br /> Giảm giá 50%</h5>
                  <p>
                    Amet sit amet dolor
                    <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap bg-warning h-100">
                <a href="#gift" className="h-100">
                  <h5>Mua <br /> Thẻ Quà Tặng</h5>
                  <p>
                    Amet sit amet dolor
                    <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="title-section text-center col-12">
              <h2 className="text-uppercase">Sản phẩm phổ biến</h2>
            </div>
          </div>

          <div className="row">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <Link href="/shop" className="btn btn-primary px-4 py-3">Xem tất cả sản phẩm</Link>
            </div>
          </div>
        </div>
      </div>

      {/* New Products Section */}
      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div className="title-section text-center col-12">
              <h2 className="text-uppercase">Sản phẩm mới</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="new-products-carousel">
                {newProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="title-section text-center col-12">
              <h2 className="text-uppercase">Đánh giá</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="testimonials-carousel">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimony">
                    <blockquote>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="rounded-circle mb-4"
                      />
                      <p>&ldquo;{testimonial.text}&rdquo;</p>
                    </blockquote>
                    <p>&mdash; {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Banners */}
      <div className="site-section bg-secondary bg-image" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <a href="#pharma" className="banner-1 h-100 d-flex" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
                <div className="banner-1-inner align-self-center">
                  <h2>Sản phẩm Pharma</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.</p>
                </div>
              </a>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <a href="#experts" className="banner-1 h-100 d-flex" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
                <div className="banner-1-inner ml-auto align-self-center">
                  <h2>Được đánh giá bởi chuyên gia</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
