'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './detail.css';

export default function CommonDiseasesDetail() {
  const params = useParams();
  const [activeSection, setActiveSection] = useState('overview');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Set current date
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, []);

  // Auto-update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'symptoms', 'causes', 'risk', 'diagnosis', 'prevention', 'treatment'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation sections
  const sections = [
    { id: 'overview', name: 'Tổng quan chung' },
    { id: 'symptoms', name: 'Triệu chứng' },
    { id: 'causes', name: 'Nguyên nhân' },
    { id: 'risk', name: 'Đối tượng nguy cơ' },
    { id: 'diagnosis', name: 'Chẩn đoán' },
    { id: 'prevention', name: 'Phòng ngừa bệnh' },
    { id: 'treatment', name: 'Cách điều trị' },
  ];

  // Disease data based on ID
  const getDiseaseData = (id) => {
    if (id === '1') {
      return {
        title: 'Thoái hoá khớp hiện nay: Thực trạng và những điều cần biết',
        categories: ['Bệnh Cơ Xương Khớp', 'Bệnh Người Cao Tuổi', 'Bệnh Nam Giới', 'Bệnh Nữ Giới'],
        overview: {
          intro: 'Thoái hoá khớp là một trong những bệnh lý xương khớp phổ biến nhất, đặc biệt ở người trung niên và cao tuổi. Bệnh xảy ra khi lớp sụn khớp bị mài mòn theo thời gian, dẫn đến đau nhức, cứng khớp và giảm khả năng vận động. Trong những năm gần đây, tình trạng thoái hoá khớp ngày càng gia tăng không chỉ do tuổi tác mà còn bởi lối sống ít vận động, thừa cân, lao động nặng và chấn thương thể thao.',
          definition: 'Thoái hoá khớp là tình trạng lớp sụn khớp bị mài mòn và suy giảm chức năng theo thời gian. Sụn khớp là lớp mô mềm bao phủ đầu xương, giúp giảm ma sát và hấp thụ lực khi vận động. Khi sụn bị tổn thương, các đầu xương sẽ cọ xát trực tiếp với nhau, gây ra đau đớn và viêm nhiễm.',
          description: 'Dấu hiệu thường gặp gồm: đau âm ỉ khi vận động, cứng khớp buổi sáng, sưng nhẹ quanh khớp và hạn chế tầm vận động. Mặc dù không thể chữa khỏi hoàn toàn, thoái hoá khớp có thể được kiểm soát tốt nếu phát hiện sớm. Việc duy trì cân nặng hợp lý, tập luyện phù hợp, dinh dưỡng lành mạnh và tuân thủ hướng dẫn của bác sĩ giúp giảm tiến triển bệnh.',
          treatment: 'Khi các cơn đau nhức, cứng khớp hay khó vận động bắt đầu ảnh hưởng đến sinh hoạt hằng ngày, đó là lúc bạn nên quan tâm hơn đến việc chăm sóc và nuôi dưỡng khớp từ bên trong. Bên cạnh chế độ tập luyện và dinh dưỡng hợp lý, nhiều người lựa chọn sử dụng sản phẩm hỗ trợ bổ khớp để tăng cường độ linh hoạt, nuôi dưỡng sụn khớp và giảm cảm giác khó chịu khi vận động. Những sản phẩm chứa các thành phần như collagen type II, glucosamine, chondroitin hoặc các chiết xuất thảo dược có thể giúp hỗ trợ sức khỏe khớp một cách tự nhiên. Nếu bạn đang tìm giải pháp chăm sóc khớp lâu dài, lựa chọn một sản phẩm bổ khớp phù hợp, nguồn gốc rõ ràng và được tư vấn bởi chuyên gia là một bước quan trọng để duy trì sự dẻo dai mỗi ngày.',
        },
        symptoms: 'Đau âm ỉ khi vận động, cứng khớp buổi sáng, sưng nhẹ quanh khớp và hạn chế tầm vận động.',
        causes: 'Lớp sụn khớp bị mài mòn theo thời gian do tuổi tác, lối sống ít vận động, thừa cân, lao động nặng và chấn thương thể thao.',
        risk: 'Người trung niên và cao tuổi, người thừa cân, người có lối sống ít vận động, người lao động nặng và vận động viên.',
        diagnosis: 'Chẩn đoán dựa trên triệu chứng lâm sàng, khám thực thể và các xét nghiệm hình ảnh như X-quang, MRI.',
        prevention: 'Duy trì cân nặng hợp lý, tập luyện phù hợp, dinh dưỡng lành mạnh và tránh các hoạt động gây chấn thương khớp.',
        treatment: 'Điều trị bao gồm thuốc giảm đau, vật lý trị liệu, thay đổi lối sống và sử dụng sản phẩm hỗ trợ bổ khớp chứa collagen type II, glucosamine, chondroitin.',
      };
    }
    return null;
  };

  const diseaseData = getDiseaseData(params.id);

  if (!diseaseData) {
    return (
      <>
        <Header />
        <div className="container mt-5 mb-5">
          <h2>Không tìm thấy thông tin bệnh</h2>
        </div>
        <Footer />
      </>
    );
  }

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Đã sao chép liên kết!');
    });
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
                <h2 className="site-section-heading">Thông tin bệnh</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="disease-detail-section">
        <div className="container">
          <div className="row">
            {/* Left Sidebar Navigation */}
            <div className="col-lg-3 sidebar-nav">
              <div className="sidebar-sticky">
                <ul className="nav-menu">
                  {sections.map((section) => (
                    <li
                      key={section.id}
                      className={activeSection === section.id ? 'active' : ''}
                      onClick={() => scrollToSection(section.id)}
                    >
                      <a href={`#${section.id}`}>{section.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-lg-9 main-content">
              {/* Top Section */}
              <div className="article-header">
                <div className="article-date">{currentDate}</div>
                <h1 className="article-title">{diseaseData.title}</h1>
                
                {/* Categories */}
                <div className="article-categories">
                  {diseaseData.categories.map((category, index) => (
                    <Link key={index} href={`/category/${encodeURIComponent(category)}`} className="category-tag">
                      {category}
                    </Link>
                  ))}
                </div>

                {/* Social Sharing */}
                <div className="social-sharing">
                  <a href="#" className="social-icon facebook" title="Chia sẻ trên Facebook">
                    <span>f</span>
                  </a>
                  <a href="#" className="social-icon zalo" title="Chia sẻ trên Zalo">
                    <span>z</span>
                  </a>
                  <button className="social-icon link" onClick={handleCopyLink} title="Sao chép liên kết">
                    <span>🔗</span>
                  </button>
                </div>
              </div>

              {/* Introduction */}
              <div className="article-intro">
                <p>{diseaseData.overview.intro}</p>
              </div>

              {/* Overview Section */}
              <section id="overview" className="content-section">
                <h2 className="section-heading">Tổng quan chung</h2>
                <p className="section-text">{diseaseData.overview.definition}</p>

                {/* Joint Images */}
                <div className="joint-images-container">
                  <img src="/images/xuongkhop.png" alt="Sơ đồ xương khớp" className="joint-diagram" />
                </div>

                <h3 className="subsection-heading">Thoái hoá khớp</h3>
                <p className="section-text">{diseaseData.overview.description}</p>
              </section>

              {/* Symptoms Section */}
              <section id="symptoms" className="content-section">
                <h2 className="section-heading">Triệu chứng</h2>
                <p className="section-text">{diseaseData.symptoms}</p>
              </section>

              {/* Causes Section */}
              <section id="causes" className="content-section">
                <h2 className="section-heading">Nguyên nhân</h2>
                <p className="section-text">{diseaseData.causes}</p>
              </section>

              {/* Risk Factors Section */}
              <section id="risk" className="content-section">
                <h2 className="section-heading">Đối tượng nguy cơ</h2>
                <p className="section-text">{diseaseData.risk}</p>
              </section>

              {/* Diagnosis Section */}
              <section id="diagnosis" className="content-section">
                <h2 className="section-heading">Chẩn đoán</h2>
                <p className="section-text">{diseaseData.diagnosis}</p>
              </section>

              {/* Prevention Section */}
              <section id="prevention" className="content-section">
                <h2 className="section-heading">Phòng ngừa bệnh</h2>
                <p className="section-text">{diseaseData.prevention}</p>
              </section>

              {/* Treatment Section */}
              <section id="treatment" className="content-section">
                <h2 className="section-heading">Cách điều trị</h2>
                <p className="section-text">{diseaseData.overview.treatment}</p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

