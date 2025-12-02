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
    { id: 1, name: 'FlexGlu', image: '/images/khop1.png', price: 320000, salePrice: 220000, isOnSale: true },
    { id: 2, name: 'Aquamovit', image: '/images/aquamovit.png', price: 520000, salePrice: 240000, isOnSale: true },
    { id: 3, name: 'Xương Khớp TW28', image: '/images/khoptw28.png', price: 340000, salePrice: 235000, isOnSale: true },
  ];

  // const newProducts = [
  //   { id: 3, name: 'Umcka Cold Care', image: '/images/product_03.png', price: 120.00, salePrice: null, isOnSale: false },
  //   { id: 1, name: 'Bioderma', image: '/images/product_01.png', price: 95.00, salePrice: 55.00, isOnSale: false },
  //   { id: 2, name: 'Chanca Piedra', image: '/images/product_02.png', price: 70.00, salePrice: null, isOnSale: false },
  //   { id: 4, name: 'Cetyl Pure', image: '/images/product_04.png', price: 45.00, salePrice: 20.00, isOnSale: false },
  // ];

  const testimonials = [
    {
      name: 'Nguyễn Thị Hương',
      image: '/images/person_1.jpg',
      text: 'Tôi rất hài lòng với dịch vụ tại nhà thuốc này. Dược sĩ tư vấn rất nhiệt tình và chuyên nghiệp, giúp tôi hiểu rõ về thuốc và cách sử dụng. Sản phẩm đảm bảo chất lượng, giá cả hợp lý. Tôi sẽ tiếp tục quay lại đây mua thuốc cho gia đình.'
    },
    {
      name: 'Trần Văn Minh',
      image: '/images/person_2.jpg',
      text: 'Nhà thuốc có không gian sạch sẽ, thoáng mát. Nhân viên phục vụ chu đáo, luôn sẵn sàng hỗ trợ khách hàng. Tôi đặc biệt ấn tượng với thái độ tận tâm của dược sĩ khi tư vấn về các loại thuốc bổ sung sức khỏe. Rất đáng tin cậy!'
    },
    {
      name: 'Lê Quốc Việt',
      image: '/images/person_3.jpg',
      text: 'Lần đầu tiên đến đây, tôi đã được tư vấn rất kỹ lưỡng về thuốc điều trị bệnh của mình. Dược sĩ giải thích rõ ràng về liều lượng, cách dùng và các tác dụng phụ có thể gặp. Sản phẩm chính hãng, có nguồn gốc rõ ràng. Cảm ơn nhà thuốc rất nhiều!'
    },
    {
      name: 'Phạm Đức Anh',
      image: '/images/person_4.jpg',
      text: 'Tôi đã mua thuốc tại đây nhiều lần và luôn cảm thấy yên tâm. Nhà thuốc có đầy đủ các loại thuốc cần thiết, giá cả cạnh tranh. Đặc biệt, dịch vụ giao hàng nhanh chóng, đóng gói cẩn thận. Đây là địa chỉ đáng tin cậy cho sức khỏe gia đình tôi.'
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
                <h1>Chào mừng đến với Chăm sóc sức khỏe 4.0</h1>
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
                   Miễn phí vận chuyển cho đơn hàng trên 100.000 VNĐ
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap h-100">
                <a href="#sale" className="h-100">
                  <h5>Khuyến mãi <br /> Giảm giá 20%</h5>
                  <p>
                  Giảm giá 20% cho đơn hàng trên 800.000 VNĐ
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap bg-warning h-100">
                <a href="#gift" className="h-100">
                  <h5>Mua <br /> Thẻ Quà Tặng</h5>
                  <p>
                  Mua đơn hàng trên 1000.000 VNĐ được thẻ quà tặng trị giá 90.000 VNĐ
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

      {/* New Products Section
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
      </div> */}

      {/* Testimonials */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="title-section text-center col-12">
              <h2 className="text-uppercase">Đánh giá của khách hàng</h2>
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
                  <h2>Cửa hàng chăm sóc sức khỏe 4.0</h2>
                  <p>Cửa hàng chăm sóc sức khỏe 4.0 là địa chỉ uy tín cho các sản phẩm thuốc chính hãng, đảm bảo chất lượng và hiệu quả.</p>
                </div>
              </a>
            </div>
            {/* <div className="col-lg-6 mb-5 mb-lg-0">
              <a href="#experts" className="banner-1 h-100 d-flex" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
                <div className="banner-1-inner ml-auto align-self-center">
                  <h2>Được đánh giá bởi chuyên gia</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.</p>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
