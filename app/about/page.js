'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import './about.css';

export default function About() {
  return (
    <>
      <Header />

      {/* Page Title */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="site-section-heading text-center">Về chúng tôi</h2>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h3 className="h2 mb-4">Chúng tôi là ai</h3>
              <p className="mb-4">
                Giới thiệu về cửa hàng của chúng tôi. Chúng tôi cam kết cung cấp các sản phẩm chất lượng cao 
                với dịch vụ khách hàng xuất sắc. Đội ngũ của chúng tôi luôn nỗ lực để mang đến trải nghiệm mua sắm tốt nhất cho khách hàng.
              </p>
              <p className="mb-4">
                Chúng tôi tin tưởng vào việc xây dựng mối quan hệ lâu dài với khách hàng dựa trên sự tin tưởng và hài lòng.
              </p>
              <p>
                <Link href="/shop" className="btn btn-primary">Mua ngay</Link>
              </p>
            </div>

            <div className="col-md-6 mb-5 mb-md-0">
              <h3 className="h2 mb-4">Sứ mệnh của chúng tôi</h3>
              <p className="mb-4">
                Nhiệm vụ của chúng tôi là cung cấp các sản phẩm chăm sóc sức khỏe và làm đẹp tốt nhất với giá cả phải chăng. Chúng tôi cam kết mang đến sự hài lòng tối đa cho khách hàng thông qua dịch vụ tận tâm và sản phẩm chất lượng.
              </p>
              <p className="mb-4">
                Chúng tôi luôn nỗ lực không ngừng để cải thiện và phát triển, đáp ứng mọi nhu cầu của khách hàng.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h2 className="site-section-heading text-center">Our Values</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="value-box">
                <h4>Chất lượng</h4>
                <p>Chúng tôi đảm bảo chất lượng cao nhất của các sản phẩm được lấy từ các nhà cung cấp đáng tin cậy.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-box">
                <h4>Độ tin cậy</h4>
                <p>Khách hàng có thể tin tưởng chúng tôi trong việc thực hiện đơn hàng nhanh chóng và chính xác.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-box">
                <h4>Niềm tin</h4>
                <p>Chúng tôi xây dựng mối quan hệ lâu dài dựa trên sự tin tưởng và hài lòng của khách hàng.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
