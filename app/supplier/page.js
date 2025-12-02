'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import './supplier.css';

export default function Supplier() {
  const partners = [
    {
      id: 1,
      year: '2023',
      image: '/images/d28.png',
      partners: ['Công Ty Cổ Phần Sản Xuất Dược Liệu Trung Ương 28'],
      link: '/supplier/1'
    },
    {
      id: 2,
      year: '2024',
      image: '/images/traphaco.png',
      partners: ['Traphaco'],
      link: '/supplier/2'
    },
    {
      id: 3,
      year: '2024',
      image: '/images/stella-pharm.png',
      partners: ['Stella'],
      link: '/supplier/3'
    }
  ];

  return (
    <>
      <Header />

      {/* Page Title */}
      <div className="site-blocks-cover supplier-hero" style={{ backgroundImage: "url('/images/hero_1.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="site-block-cover-content text-center">
                <h2 className="site-section-heading supplier-title">ĐỐI TÁC</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="supplier-intro-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h2 className="intro-heading">Đối tác</h2>
            </div>
            <div className="col-lg-8">
              <p className="intro-text">
                Chăm sóc sức khỏe 4.0 với chuỗi dịch vụ giá trị gia tăng toàn diện, linh hoạt, bao gồm: 
                Phân tích thị trường, Tiếp thị, Bán hàng, Hậu cần, Dịch vụ Hậu mãi, Thương mại điện tử D2C, 
                Vận hành cửa hàng cho thương hiệu, công ty giúp các thương hiệu thâm nhập, phát triển thị trường 
                nhanh chóng và hiệu quả tại Việt Nam. Cùng với các đối tác lớn vô cùng uy tín trong ngành thuốc và chăm sóc sức khỏe như: Công Ty Cổ Phần Sản Xuất Dược Liệu Trung Ương 28, Traphaco, Stella ...
                Chúng tôi cam kết mang đến cho bạn nhưng sản phẩm chất lượng tốt nhất.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Cards Section */}
      <div className="supplier-partners-section">
        <div className="container">
          <div className="row partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                {partner.link ? (
                  <Link href={partner.link} className="partner-card-link">
                    <div className="partner-card">
                      <div className="partner-image-wrapper">
                        <img 
                          src={partner.image} 
                          alt={`Đối tác ${partner.year}`}
                          className="partner-image"
                          onError={(e) => {
                            e.target.src = '/images/hero_1.jpg';
                          }}
                        />
                        <div className="partner-year">{partner.year}</div>
                      </div>
                      <div className="partner-list">
                        {partner.partners.map((name, idx) => (
                          <span key={idx} className="partner-name">
                            {name}
                            {idx < partner.partners.length - 1 && ', '}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="partner-card">
                    <div className="partner-image-wrapper">
                      <img 
                        src={partner.image} 
                        alt={`Đối tác ${partner.year}`}
                        className="partner-image"
                        onError={(e) => {
                          e.target.src = '/images/hero_1.jpg';
                        }}
                      />
                      <div className="partner-year">{partner.year}</div>
                    </div>
                    <div className="partner-list">
                      {partner.partners.map((name, idx) => (
                        <span key={idx} className="partner-name">
                          {name}
                          {idx < partner.partners.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

