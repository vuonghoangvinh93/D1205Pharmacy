'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './your_body.css';

export default function YourBody() {
  const [searchQuery, setSearchQuery] = useState('');

  // Bệnh phổ biến
  const commonDiseases = [
    { id: 1, name: 'Thoái hoá khớp', icon: '🦴' },
    { id: 2, name: 'Trào Ngược Dạ Dày', icon: '🤢' },
    { id: 3, name: 'Bệnh Sởi', icon: '🌡️' },
    { id: 4, name: 'Bạch Hầu', icon: '🦠' },
    { id: 5, name: 'Bệnh Cúm', icon: '🤧' },
    { id: 6, name: 'Tay Chân Miệng', icon: '👋' },
    { id: 7, name: 'Đau Mắt Đỏ', icon: '👁️' },
    { id: 8, name: 'Tiểu Đường Thai Kỳ', icon: '🤰' },
    { id: 9, name: 'Tiểu Đường Tuýp 1', icon: '💉' },
    { id: 10, name: 'Tiểu Đường Tuýp 2', icon: '🩺' },
    { id: 11, name: 'Hen Suyễn', icon: '🌬️' },
    { id: 12, name: 'Tiêu Chảy', icon: '💊' },
  ];

  // Bệnh theo đối tượng
  const diseasesByDemographic = [
    {
      id: 1,
      title: 'Bệnh Người Cao Tuổi',
      image: '/images/NguoiCaoTuoi.png',
      diseases: ['Cao huyết áp', 'Alzheimer', 'Đột quỵ', 'Bệnh tim', 'Loãng xương ở nam', 'Parkinson', 'Tiểu đường tuýp 2', 'COPD']
    },
    {
      id: 2,
      title: 'Bệnh Nam Giới',
      image: '/images/Men.png',
      diseases: ['Mãn dục nam', 'Rối loạn cương dương', 'Hẹp bao quy đầu', 'Xoắn tinh hoàn', 'Viêm tuyến tiền liệt', 'Phì đại tuyến tiền liệt lành tính']
    },
    {
      id: 3,
      title: 'Bệnh Nữ Giới',
      image: '/images/Women.png',
      diseases: ['Chậm kinh', 'PCOS', 'Ung thư vú', 'Ung thư cổ tử cung', 'U nang buồng trứng', 'Mãn kinh', 'Rối loạn kinh nguyệt', 'U nang vú']
    },
    {
      id: 4,
      title: 'Bệnh Trẻ Em',
      image: '/images/TreEm.png',
      diseases: ['Tay chân miệng', 'Thủy đậu', 'Tự kỷ', 'Dính lưỡi', 'Chậm nói', 'Bại não', 'Bạch hầu', 'Động kinh']
    },
    {
      id: 5,
      title: 'Bệnh Tuổi Dậy Thì',
      image: '/images/TuoiDayThi.png',
      diseases: ['Mụn trứng cá', 'Mụn nhọt', 'Mụn nang', 'Mụn lưng', 'Rối loạn kinh nguyệt', 'Đau đầu', 'Hắc lào', 'Lang ben']
    },
    {
      id: 6,
      title: 'Bệnh Phụ Nữ Mang Thai',
      image: '/images/MangThai.png',
      diseases: ['Tiểu đường thai kỳ', 'Chửa trứng', 'Đa ối', 'Suy thai', 'Băng huyết sau sinh', 'Nhau tiền đạo', 'Nhau bong non', 'Nhau tiền đạo bờ']
    },
  ];

  // Bộ phận cơ thể
  const bodyParts = [
    { id: 1, name: 'Đầu', icon: '🧠' },
    { id: 2, name: 'Tai Mũi Họng', icon: '👂' },
    { id: 3, name: 'Ngực', icon: '🫁' },
    { id: 4, name: 'Cổ Vai Gáy', icon: '💪' },
    { id: 5, name: 'Da', icon: '🖐️' },
    { id: 6, name: 'Sinh dục', icon: '🔬' },
    { id: 7, name: 'Tứ chi', icon: '🦵' },
  ];

  // Nhóm bệnh theo mùa
  const seasonalDiseases = [
    { id: 1, name: 'Bệnh Phổi Tắc Nghẽn Mạn...', icon: '🫁' },
    { id: 2, name: 'Trào Ngược Dạ Dày', icon: '🤢' },
    { id: 3, name: 'Bệnh Sởi', icon: '🌡️' },
    { id: 4, name: 'Đau Mắt Đỏ', icon: '👁️' },
    { id: 5, name: 'Bệnh Cúm', icon: '🤧' },
    { id: 6, name: 'Sốt Phát Ban', icon: '🌡️' },
    { id: 7, name: 'Dị Ứng', icon: '🤧' },
    { id: 8, name: 'Đau Nhức Cơ Xương', icon: '💪' },
    { id: 9, name: 'Viêm Họng Cấp', icon: '🦠' },
    { id: 10, name: 'Tay Chân Miệng', icon: '👋' },
    { id: 11, name: 'Viêm Phế Quản', icon: '🫁' },
    { id: 12, name: 'Viêm Xoang', icon: '👃' },
  ];

  // Chuyên trang bệnh học
  const medicalSpecialties = [
    { id: 1, name: 'Bệnh Tim Mạch', icon: '❤️' },
    { id: 2, name: 'Bệnh Cơ Xương Khớp', icon: '🦴' },
    { id: 3, name: 'Bệnh Hô Hấp', icon: '🫁' },
    { id: 4, name: 'Bệnh Truyền Nhiễm', icon: '🦠' },
    { id: 5, name: 'Bệnh Thần Kinh', icon: '🧠' },
    { id: 6, name: 'Bệnh Về Da', icon: '🖐️' },
  ];

  // Nhóm bệnh chuyên khoa
  const specialtyDiseases = [
    'Bệnh Hô Hấp',
    'Khoa Tiết Niệu',
    'Bệnh Thận - Tiết Niệu',
    'Bệnh Tâm Lý - Tâm Thần',
    'Bệnh Tai Mũi Họng',
    'Sức Khỏe Sinh Sản',
    'Sức Khỏe Giới Tính',
    'Bệnh Nội Tiết - Chuyển Hóa',
    'Bệnh Về Máu',
    'Bệnh Về Mắt',
    'Bệnh Thần Kinh',
    'Bệnh Dị Ứng',
    'Bệnh Về Da',
    'Bệnh Cơ Xương Khớp',
    'Bệnh Răng Hàm Mặt',
    'Ung thư',
    'Bệnh Truyền Nhiễm',
    'Bệnh Tiêu Hóa',
  ];

  // Filter function
  const filterItems = (items, query) => {
    if (!query) return items;
    const lowerQuery = query.toLowerCase();
    return items.filter(item => 
      item.name?.toLowerCase().includes(lowerQuery) ||
      item.title?.toLowerCase().includes(lowerQuery) ||
      item.diseases?.some(d => d.toLowerCase().includes(lowerQuery))
    );
  };

  const filteredCommonDiseases = filterItems(commonDiseases, searchQuery);
  const filteredSeasonalDiseases = filterItems(seasonalDiseases, searchQuery);
  const filteredDemographics = filterItems(diseasesByDemographic, searchQuery);
  const filteredSpecialties = filterItems(specialtyDiseases.map(name => ({ name })), searchQuery);

  return (
    <>
      <Header />

      {/* Page Title */}
      <div className="site-blocks-cover" style={{ backgroundImage: "url('/images/hero_1.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="site-block-cover-content text-center">
                <h2 className="site-section-heading">Những điều cần biết về bệnh</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="site-section search-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="search-bar-container">
                <div className="search-icon">🔍</div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Tìm kiếm thông tin về bệnh..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bệnh phổ biến */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="section-title">Bệnh phổ biến</h2>
            </div>
          </div>
          <div className="row">
            {filteredCommonDiseases.map((disease) => (
              <div key={disease.id} className="col-6 col-md-4 col-lg-2 mb-4">
                <Link href={`/commonDiseasesDetail/${disease.id}`} className="disease-card">
                  <div className="disease-icon">{disease.icon}</div>
                  <div className="disease-name">{disease.name}</div>
                </Link>
              </div>
            ))}
          </div>
          {filteredCommonDiseases.length > 0 && (
            <div className="row mt-4">
              <div className="col-12 text-center">
                <button className="btn-view-more">Xem thêm</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bệnh theo đối tượng */}
      <div className="site-section bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="section-title">Bệnh theo đối tượng</h2>
            </div>
          </div>
          <div className="row">
            {filteredDemographics.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="demographic-card">
                  <div className="demographic-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="demographic-img"
                    />
                  </div>
                  <h3 className="demographic-title">{item.title}</h3>
                  <ul className="disease-list">
                    {item.diseases.map((disease, index) => (
                      <li key={index}>{disease}</li>
                    ))}
                  </ul>
                  <div className="arrow-icon">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bộ phận cơ thể */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="section-title">Bộ phận cơ thể</h2>
            </div>
          </div>
          <div className="row">
            {bodyParts.map((part) => (
              <div key={part.id} className="col-6 col-md-4 col-lg-2 mb-4">
                <Link href={`/body-part/${part.id}`} className="body-part-card">
                  <div className="body-part-icon">{part.icon}</div>
                  <div className="body-part-name">{part.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nhóm bệnh theo mùa */}
      <div className="site-section bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="section-title">Nhóm bệnh theo mùa</h2>
            </div>
          </div>
          <div className="row">
            {filteredSeasonalDiseases.map((disease) => (
              <div key={disease.id} className="col-6 col-md-4 col-lg-2 mb-4">
                <Link href={`/seasonal/${disease.id}`} className="disease-card">
                  <div className="disease-icon">{disease.icon}</div>
                  <div className="disease-name">{disease.name}</div>
                </Link>
              </div>
            ))}
          </div>
          {filteredSeasonalDiseases.length > 0 && (
            <div className="row mt-4">
              <div className="col-12 text-center">
                <button className="btn-view-more">Xem thêm</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chuyên trang bệnh học */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="section-title">Chuyên trang bệnh học</h2>
            </div>
          </div>
          <div className="row">
            {medicalSpecialties.map((specialty) => (
              <div key={specialty.id} className="col-6 col-md-4 col-lg-2 mb-4">
                <Link href={`/specialty/${specialty.id}`} className="body-part-card">
                  <div className="body-part-icon">{specialty.icon}</div>
                  <div className="body-part-name">{specialty.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nhóm bệnh chuyên khoa */}
      <div className="site-section bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="section-title">Nhóm bệnh chuyên khoa</h2>
            </div>
          </div>
          <div className="row">
            {filteredSpecialties.map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3 mb-3">
                <Link href={`/specialty-disease/${encodeURIComponent(item.name)}`} className="specialty-tag">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
