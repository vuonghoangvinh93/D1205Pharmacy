import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div className="block-7">
              <h3 className="footer-heading mb-4">Chúng tôi</h3>
              <p>
                Cửa hàng D1205 Pharma cam kết cung cấp các sản phẩm chăm sóc sức khỏe và làm đẹp chất lượng cao với giá cả phải chăng. Sứ mệnh của chúng tôi là mang đến sự hài lòng tối đa cho khách hàng thông qua dịch vụ tận tâm và sản phẩm chất lượng.
              </p>
            </div>
          </div>

          <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
            <h3 className="footer-heading mb-4">Liên kết nhanh</h3>
            <ul className="list-unstyled">
              <li><a href="#supplements">Thực phẩm bổ sung</a></li>
              <li><a href="#vitamins">Vitamins</a></li>
              <li><a href="#nutrition">Chế độ dinh dưỡng &amp; Dinh dưỡng</a></li>
              <li><a href="#tea">Trà &amp; Cà phê</a></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="block-5 mb-5">
              <h3 className="footer-heading mb-4">Thông tin liên hệ</h3>
              <ul className="list-unstyled">
                <li className="address">723 Nguyễn Thiện Thuật, Mỹ Hào, Hưng Yên, Việt Nam</li>
                <li className="phone"><a href="tel:+84923929210">+84 923 929 210</a></li>
                <li className="email">emailaddress@domain.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>
              Copyright &copy; {currentYear} {' '}
              <i className="icon-heart" aria-hidden="true"></i> by{' '}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-primary">
                Mr.V
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
