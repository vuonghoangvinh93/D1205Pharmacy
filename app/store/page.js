'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './store.css';

export default function Store() {
  const [selectedStore, setSelectedStore] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const stores = [
    {
        id: 1,
        name: 'Quầy thuốc Bạch Mai',
        address: 'Chỉ Đạo, Văn Lâm, Hưng Yên',
        pharmacist: 'Nguyễn Thị Kim Cúc',
        city: 'Hưng Yên',
        district: 'Văn Lâm',
        lat: 20.9307,
        lng: 106.0519
    },
    {
      id: 2,
      name: 'Quầy thuốc Đào Hương',
      address: 'Mỹ Hào - Hưng Yên',
      pharmacist: 'Đào Thị Hương',
      city: 'Hưng Yên',
      district: 'Mỹ Hào',
      lat: 20.9307,
      lng: 106.0519
    },
    {
      id: 3,
      name: 'Quầy thuốc Luân Tâm',
      address: 'Xuân hòa, Phú Thọ',
      pharmacist: 'Trương Thị Tâm',
      city: 'Phú Thọ',
      district: 'Xuân Hòa',
      lat: 21.3081,
      lng: 105.2607
    },
    {
      id: 4,
      name: 'Nhà thuốc Viên Hồng',
      address: '797 Trần phú, Quang Hanh, Quảng Ninh',
      pharmacist: 'Phạm Thu Hà',
      city: 'Quảng Ninh',
      district: 'Quang Hanh',
      lat: 21.0285,
      lng: 107.2437
    },
    {
      id: 5,
      name: 'Quầy thuốc Luân Đặng',
      address: 'Xuân Lãng, Phú Thọ',
      pharmacist: 'Đặng Thị Luận',
      city: 'Phú Thọ',
      district: 'Xuân Lãng',
      lat: 21.3081,
      lng: 105.2607
    }
    
  ];

  const cities = ['Tất cả', 'Hưng Yên', 'Phú Thọ', 'Quảng Ninh'];
  const districts = {
    'Hưng Yên': ['Tất cả', 'Mỹ Hào', 'Văn Lâm'],
    'Phú Thọ': ['Tất cả', 'Xuân Hòa', 'Xuân Lãng'],
    'Quảng Ninh': ['Tất cả', 'Quang Hanh']
  };

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = !selectedCity || selectedCity === 'Tất cả' || store.city === selectedCity;
    const matchesDistrict = !selectedDistrict || selectedDistrict === 'Tất cả' || store.district === selectedDistrict;
    return matchesSearch && matchesCity && matchesDistrict;
  });

  const handleStoreClick = (store) => {
    setSelectedStore(store);
  };

  // Set default selected store
  useEffect(() => {
    if (stores.length > 0 && !selectedStore) {
      setSelectedStore(stores[0]);
    }
  }, []);

  const getMapUrl = (store) => {
    if (!store) {
      // Default map view of Vietnam
      return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.9368277878357!2d105.85443431453468!3d21.03866638594112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab854cdc0f8f%3A0x558deeb5b4b301a9!2zSMOgIEjhu5MgQ2jhu6UgY2jhuqduIG3hu4FtIHRo4bunIGLhuqNvIHPhuqFu!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s';
    }
    const query = encodeURIComponent(store.address + ', Việt Nam');
    return `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  };

  const openGoogleMaps = (store) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`;
    window.open(url, '_blank');
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(`Vị trí của bạn: ${position.coords.latitude}, ${position.coords.longitude}`);
        },
        (error) => {
          alert('Không thể lấy vị trí hiện tại của bạn.');
        }
      );
    } else {
      alert('Trình duyệt của bạn không hỗ trợ định vị.');
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
                <h2 className="site-section-heading">Hệ thống cửa hàng</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Locator Section */}
      <div className="site-section store-locator-section">
        <div className="container">
          <div className="row">
            {/* Left Sidebar - Store List */}
            <div className="col-lg-4 store-list-sidebar">
              {/* Search Bar */}
              <div className="search-container mb-4">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Nhập khu vực bạn muốn tìm kiếm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Current Location Button */}
              <div className="mb-4">
                <button 
                  className="btn btn-outline-primary w-100 current-location-btn"
                  onClick={getCurrentLocation}
                >
                  Vị trí hiện tại
                </button>
              </div>

              {/* Filter Dropdowns */}
              <div className="filter-container mb-4">
                <div className="row">
                  <div className="col-6">
                    <select 
                      className="form-control"
                      value={selectedCity}
                      onChange={(e) => {
                        setSelectedCity(e.target.value);
                        setSelectedDistrict('Tất cả');
                      }}
                    >
                      <option value="">Chọn Thành Phố/Tỉnh</option>
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <select 
                      className="form-control"
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      disabled={!selectedCity || selectedCity === 'Tất cả'}
                    >
                      <option value="Tất cả">Chọn Quận/Huyện</option>
                      {selectedCity && districts[selectedCity]?.map(district => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Store List */}
              <div className="store-list-container">
                <h4 className="store-list-title mb-3">
                  Nhà thuốc gần bạn ({filteredStores.length})
                </h4>
                <div className="store-list">
                  {filteredStores.map(store => (
                    <div 
                      key={store.id} 
                      className={`store-item ${selectedStore?.id === store.id ? 'active' : ''}`}
                      onClick={() => handleStoreClick(store)}
                    >
                      <h5 className="store-name">{store.name}</h5>
                      <p className="store-address">
                        <i className="icon-map-marker"></i> {store.address}
                      </p>
                      <p className="store-pharmacist">
                        <strong>Dược sĩ:</strong> {store.pharmacist}
                      </p>
                      <div className="store-actions">
                        <button 
                          className="btn-link"
                          onClick={(e) => {
                            e.stopPropagation();
                            openGoogleMaps(store);
                          }}
                        >
                          Xem chỉ đường
                        </button>
                        <span className="divider">|</span>
                        <a href={`https://zalo.me/`} className="btn-link" onClick={(e) => e.stopPropagation()}>
                          Liên hệ Zalo
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Map */}
            <div className="col-lg-8 map-container">
              <div className="map-controls mb-3">
                <div className="map-view-buttons">
                  <button className="btn btn-sm btn-outline-secondary active">Map</button>
                  <button className="btn btn-sm btn-outline-secondary">Satellite</button>
                </div>
              </div>
              <div className="map-wrapper">
                <iframe
                  src={getMapUrl(selectedStore || filteredStores[0] || null)}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="store-map"
                  title="Store Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

