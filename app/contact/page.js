'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ phản hồi sớm.');
  };

  return (
    <>
      <Header />

      {/* Page Title */}
      <div className="site-blocks-cover" style={{ backgroundImage: "url('/images/hero_1.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="site-block-cover-content text-center">
                <h2 className="site-section-heading">Liên hệ chúng tôi để được tư vấn kĩ hơn</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="contact-info">
                <h4 className="mb-4">Địa chỉ</h4>
                <address>
                  723 Nguyễn Thiện Thuật, <br />
                  Mỹ Hào, Hưng Yên, <br />
                  Việt Nam
                </address>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="contact-info">
                <h4 className="mb-4">Điện thoại</h4>
                <p><a href="tel:+84359084920">+84 359084920</a></p>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="contact-info">
                <h4 className="mb-4">Email</h4>
                <p><a href="mailto:emailaddress@domain.com">emailaddress@domain.com</a></p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Gửi cho chúng tôi một tin nhắn</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group mb-4">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div className="form-group mb-4">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                <div className="form-group mb-4">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Subject" 
                    required 
                  />
                </div>
                <div className="form-group mb-4">
                  <textarea 
                    className="form-control" 
                    placeholder="Message" 
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Gửi tin nhắn</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
