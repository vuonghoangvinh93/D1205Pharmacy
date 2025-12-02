'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './supplier-detail.css';

export default function SupplierDetail() {
  const params = useParams();
  const supplierId = params.id;

  // Supplier data based on ID
  const getSupplierData = (id) => {
    if (id === '1') {
      return {
        name: 'Công Ty Cổ Phần Sản Xuất Dược Liệu Trung Ương 28',
        englishName: 'Plant Medicinal Products No 28 Joint Stock Company',
        logo: '/images/d28.png',
        intro: 'Công Ty Cổ Phần Sản Xuất Dược Liệu Trung Ương 28 là doanh nghiệp về dược phẩm có tiếng tại thị trường Việt Nam với các dòng sản phẩm từ nguyên liệu dược liệu. Tiếp nối các truyền thống bài thuốc, vị thuốc quý của cha ông trong y học cổ truyền và các công nghệ bào chế hiện đại, doanh nghiệp đã cho ra thị trường rất nhiều các nhóm sản phẩm chất lượng, an toàn và hiệu quả.',
        about: 'Công Ty Cổ Phần Sản Xuất Dược Liệu Trung Ương 28 có tên quốc tế là Plant Medicinal Products No 28 Joint Stock Company trải qua gần 10 năm hình thành và phát triển đang ngày một tốt hơn với nhiều các nhóm sản phẩm chất lượng, đảm bảo được tính an toàn và thành phần hoàn toàn từ nguyên liệu thiên nhiên.\n\nVới logo được thiết kế với màu chủ đạo là xanh lá cây, doanh nghiệp luôn nỗ lực trong việc tận dụng các nguyên liệu thiên nhiên, hướng đến một cuộc sống tốt cùng các sản phẩm tự nhiên, không chứa các thành phần dược chất khác.',
        history: 'Công Ty Cổ Phần Sản Xuất Dược Liệu Trung Ương 28 được thành lập và hoạt động vào năm 2016 bởi bà Vũ Minh Phương tại Hà Nội.\n\nTrải qua rất nhiều các công trình nghiên cứu, phát triển, doanh nghiệp đã dần bước đến một vị thế mới với các dòng sản phẩm chất lượng cùng nguồn dược liệu từ thiên nhiên, đảm bảo chất lượng.\n\nCho đến hiện nay, doanh nghiệp đã xung cấp đến thị trường rất nhiều dòng sản phẩm chất lượng, hiệu quả dễ sử dụng và nâng tầm giá trị thương hiệu lên một trang mới.',
        mission: 'Công Ty Cổ Phần Sản Xuất Dược Liệu Trung Ương 28 luôn mang trong mình sứ mệnh có thể gìn giữ và phát triển hơn nữa các tinh hoa dược liệu của đất nước Việt Nam.\n\nTừ đó, doanh nghiệp cũng cung cấp đến người dùng các sản phẩm vô cùng chất lượng, đảm bảo được tính an toàn, hiệu quả và mang lại nhiều lợi ích trên cộng đồng người dùng sản phẩm.',
        vision: 'Công Ty Cổ Phần Sản Xuất Dược Liệu Trung Ương 28 luôn cỗ gắng trong việc trở thành một doanh nghiệp hàng đầu tại đất nước Việt Nam với các lĩnh vực chuyên môn thuộc về các sản phẩm hỗ trợ chăm sóc sức khỏe với nguồn gốc từ dược liệu thiên nhiên, an toàn, lành tính.',
        coreValues: 'Công Ty Cổ Phần Sản Xuất Dược Liệu Trung Ương 28 xây dựng dựa trên một giá trị cốt lõi với các thương hiệu từ thiên nhiên, đảm bảo được sự tiếp nhận và phát huy các bản sắc dân tộc Việt, đảm bảo được tính trách nhiệm cao với cộng đồng và môi trường trong từng khâu sản xuất, kinh doanh và phân phối.',
        philosophy: 'Doanh nghiệp luôn mang trong mình các hạnh phúc lớn về sự không phụ thuộc vào điều kiện, Từng nhân viên và cá thể trong doanh nghiệp luôn xây dựng cho mình một lương tâm và sức khỏe tốt, đảm bảo cung cấp đến người dùng thông tin chính xác nhất.',
        achievements: 'Doanh nghiệp Công Ty Cổ Phần Sản Xuất Dược Liệu Trung Ương 28 đã nhận được các giấy chứng nhận về sản phẩm chất lượng cao và giấy chứng nhận về đảm bảo trong sản xuất và kinh doanh thực phẩm bảo vệ sức khỏe.',
        production: {
          title: 'Dây chuyền sản xuất viên nén – cốm – siro với công nghệ dây chuyền hiện đại',
          content: 'Dây chuyền sản xuất với các trang thiết bị hiện đại, đảm bảo được chất lượng, nhân viên tuân thủ nghiêm ngặt trong từng khâu sản xuất, kinh doanh.\n\nSản phẩm được bào chế ra thị trường với các dạng bào chế gồm viên nén, viên nang, cốm, siro và bột,... đảm bảo chất lượng trước khi đưa ra thị trường.'
        },
        research: {
          title: 'Thực hiện nghiên cứu, gia công thực phẩm',
          content: 'Cùng đó, doanh nghiệp có đội ngũ cán bộ công nhân viên chuyên môn cao, đảm bảo được việc xây dựng công thức chuẩn, gia công và sản xuất tốt.'
        },
        standards: {
          title: 'Đảm bảo đúng tiêu chuẩn trong sản xuất tốt thực phẩm bảo vệ sức khỏe',
          content: 'Doanh nghiệp luôn đảm bảo sản phẩm đạt tiêu chuẩn và lấy sức khỏe người tiêu dùng là hàng đầu. Các dòng chất lượng tốt, dịch vụ tốt của doanh nghiệp luôn nỗ lực phát triển để hài lòng cả về chất lượng và thái độ phục vụ cho người tiêu dùng.'
        }
      };
    }
    return null;
  };

  const supplierData = getSupplierData(supplierId);

  if (!supplierData) {
    return (
      <>
        <Header />
        <div className="site-section">
          <div className="container">
            <h2 className="site-section-heading text-center">Không tìm thấy thông tin nhà cung cấp</h2>
            <p className="text-center">
              <Link href="/supplier" className="btn btn-primary">Quay lại trang đối tác</Link>
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Page Title */}
      <div className="site-blocks-cover supplier-detail-hero" style={{ backgroundImage: "url('/images/hero_1.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="site-block-cover-content text-center">
                <h2 className="site-section-heading supplier-detail-title">{supplierData.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="supplier-breadcrumb">
        <div className="container">
          <Link href="/">Trang chủ</Link>
          <span>/</span>
          <Link href="/supplier">Đối tác</Link>
          <span>/</span>
          <span>{supplierData.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="supplier-detail-section">
        <div className="container">
          {/* Logo and Intro */}
          <div className="supplier-header mb-5">
            <div className="row align-items-center">
              <div className="col-md-3 text-center mb-4 mb-md-0">
                <img 
                  src={supplierData.logo} 
                  alt={supplierData.name}
                  className="supplier-logo"
                  onError={(e) => {
                    e.target.src = '/images/hero_1.jpg';
                  }}
                />
              </div>
              <div className="col-md-9">
                {/* <h3 className="supplier-english-name">{supplierData.englishName}</h3> */}
                <p className="supplier-intro-text">{supplierData.intro}</p>
              </div>
            </div>
          </div>

          {/* Section 1: Giới thiệu */}
          <section className="content-section mb-5">
            <h2 className="section-title">1. Giới thiệu về {supplierData.name}</h2>
            <div className="section-content">
              {supplierData.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className="section-paragraph">{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Section 2: Lịch sử phát triển */}
          <section className="content-section mb-5">
            <h2 className="section-title">2. Lịch sử phát triển doanh nghiệp</h2>
            <div className="section-content">
              {supplierData.history.split('\n\n').map((paragraph, index) => (
                <p key={index} className="section-paragraph">{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Section 3: Sứ mệnh, tầm nhìn, giá trị cốt lõi */}
          <section className="content-section mb-5">
            <h2 className="section-title">3. Sứ mệnh, tầm nhìn, giá trị cốt lõi</h2>
            
            <div className="subsection mb-4">
              <h3 className="subsection-title">Sứ mệnh</h3>
              <div className="section-content">
                {supplierData.mission.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="section-paragraph">{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="subsection mb-4">
              <h3 className="subsection-title">Tầm nhìn</h3>
              <div className="section-content">
                <p className="section-paragraph">{supplierData.vision}</p>
              </div>
            </div>

            <div className="subsection mb-4">
              <h3 className="subsection-title">Giá trị cốt lõi</h3>
              <div className="section-content">
                <p className="section-paragraph">{supplierData.coreValues}</p>
              </div>
            </div>

            <div className="subsection mb-4">
              <h3 className="subsection-title">Triết lý trong kinh doanh</h3>
              <div className="section-content">
                <p className="section-paragraph">{supplierData.philosophy}</p>
              </div>
            </div>
          </section>

          {/* Section 4: Thành tựu - giải thưởng */}
          <section className="content-section mb-5">
            <h2 className="section-title">4. Một số các thành tựu - giải thưởng doanh nghiệp</h2>
            <div className="section-content">
              <p className="section-paragraph">{supplierData.achievements}</p>
            </div>
          </section>

          {/* Section 5: Hoạt động sản xuất và hợp tác */}
          <section className="content-section mb-5">
            <h2 className="section-title">5. Hoạt động trong sản xuất và hợp tác</h2>
            
            <div className="subsection mb-4">
              <h3 className="subsection-title">{supplierData.production.title}</h3>
              <div className="section-content">
                {supplierData.production.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="section-paragraph">{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="subsection mb-4">
              <h3 className="subsection-title">{supplierData.research.title}</h3>
              <div className="section-content">
                <p className="section-paragraph">{supplierData.research.content}</p>
              </div>
            </div>

            <div className="subsection mb-4">
              <h3 className="subsection-title">{supplierData.standards.title}</h3>
              <div className="section-content">
                <p className="section-paragraph">{supplierData.standards.content}</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

