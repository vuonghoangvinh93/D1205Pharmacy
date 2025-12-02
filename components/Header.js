'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('offcanvas-menu');
    } else {
      document.body.classList.remove('offcanvas-menu');
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        document.body.classList.remove('offcanvas-menu');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const mobileMenu = document.querySelector('.site-mobile-menu');
      if (mobileMenu && !mobileMenu.contains(e.target) && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.classList.remove('offcanvas-menu');
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mouseup', handleClickOutside);
      return () => document.removeEventListener('mouseup', handleClickOutside);
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="search-wrap" style={{ display: isSearchOpen ? 'block' : 'none' }}>
        <div className="container">
          <button
            className="search-close"
            onClick={() => setIsSearchOpen(false)}
          >
            <span className="icon-close2">×</span>
          </button>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="form-control"
              placeholder="Search keyword and hit enter..."
            />
          </form>
        </div>
      </div>

      <div className="site-navbar py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <div className="site-logo">
                <Link href="/">Chăm sóc sức khỏe 4.0</Link>
              </div>
            </div>

            <div className="main-nav d-none d-lg-block">
              <nav className="site-navigation text-right text-md-center" role="navigation">
                <ul className="site-menu d-none d-lg-block">
                  <li className={pathname === '/' ? 'active' : ''}>
                    <Link href="/">Trang chủ</Link>
                  </li>
                  <li className={`has-children ${pathname?.startsWith('/shop') ? 'active' : ''}`}>
                    <a href="/shop">Danh mục sản phẩm</a>
                    <ul className="dropdown">
                      <li><a href="/shop#xuongkhop">Xương khớp</a></li>
                      <li><a href="/shop#lamdep">Làm đẹp</a></li>
                      <li><a href="/shop#nutrition">Hồi phục sức khỏe</a></li>
                      <li><a href="/shop/sale">Khuyến mãi</a></li>
                    </ul>
                  </li>
                  <li className={pathname === '/your_body' ? 'active' : ''}>
                    <Link href="/your_body">Lắng nghe cơ thể bạn</Link>
                  </li>
                  <li className={pathname === '/supplier' ? 'active' : ''}>
                    <Link href="/supplier">Thông tin nhà cung cấp</Link>
                  </li>
                  <li className={pathname === '/store' ? 'active' : ''}>
                    <Link href="/store">Hệ thống cửa hàng</Link>
                  </li>
                  <li className={pathname === '/contact' ? 'active' : ''}>
                    <Link href="/contact">Tư vấn</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="icons">
              <button
                className="icons-btn d-inline-block"
                onClick={() => setIsSearchOpen(true)}
              >
                <span className="icon-search"></span>
              </button>
              <Link href="/cart" className="icons-btn d-inline-block bag">
                <span className="icon-shopping-bag"></span>
                <span className="number">2</span>
              </Link>
              <button
                className="site-menu-toggle ml-3 d-inline-block d-lg-none"
                onClick={toggleMenu}
              >
                <span className="icon-menu"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <button onClick={() => setIsMenuOpen(false)}>
                <span className="icon-close2">×</span>
              </button>
            </div>
            <div className="site-mobile-menu-logo">
              <Link href="/">Chăm sóc sức khỏe 4.0</Link>
            </div>
          </div>
          <div className="site-mobile-menu-body">
            <ul className="site-nav-wrap">
              <li><Link href="/">Trang chủ</Link></li>
              <li><Link href="/shop">Sản phẩm</Link></li>
              <li><a href="#about">Giới thiệu</a></li>
              <li><Link href="/contact">Liên hệ</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
