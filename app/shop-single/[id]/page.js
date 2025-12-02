'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import '../shop-single.css';

function formatCurrencyVND(amount) {
  return amount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}

// Tạm thời dùng cùng dữ liệu với trang /shop
const allProducts = [
  { 
    id: 1, 
    name: 'FlexGlu', 
    image: '/images/khop1.png', 
    price: 320000, 
    salePrice: 220000, 
    isOnSale: true, 
    category: 'xuongkhop', 
    sale: true,
    description: 'FlexGlu là sản phẩm bổ khớp chứa Glucosamine và Chondroitin, hỗ trợ tái tạo sụn khớp, giảm đau nhức và cải thiện khả năng vận động.',
    details: 'Giảm đau nhức, viêm khớp Bổ sung dưỡng chất cho sụn khớp như glucosamine, chondroitin, MSM, collagen type II… Hỗ trợ tái tạo và bảo vệ sụn khớp, làm chậm thoái hóa khớp. Tăng độ linh hoạt và vận động của khớp. Uống 2 viên một lần, ngày 2 lần. Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người dưới 18 tuổi, phụ nữ có thai, phụ nữ cho con bú, người mẫn cảm với thành phần của thuốc.'
  },
  { 
    id: 2, 
    name: 'Xương Khớp TW28', 
    image: '/images/khoptw28.png', 
    price: 340000, 
    salePrice: 235000, 
    isOnSale: true, 
    category: 'xuongkhop', 
    sale: true,
    description: 'Xương Khớp TW28 là sản phẩm Đông y hỗ trợ điều trị các bệnh về xương khớp, giảm đau nhức, tê bì chân tay và cải thiện lưu thông máu.',
    details: 'Giảm đau nhức, viêm khớp Bổ sung dưỡng chất cho sụn khớp như glucosamine, chondroitin, MSM, collagen type II… Hỗ trợ tái tạo và bảo vệ sụn khớp, làm chậm thoái hóa khớp. Tăng độ linh hoạt và vận động của khớp. Uống 2 viên một lần, ngày 2 lần. Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người dưới 18 tuổi, phụ nữ có thai, phụ nữ cho con bú, người mẫn cảm với thành phần của thuốc.'
  },
  { 
    id: 3, 
    name: 'Aquamovit', 
    image: '/images/aquamovit.png', 
    price: 520000, 
    salePrice: 240000, 
    isOnSale: true, 
    category: 'xuongkhop', 
    sale: true,
    description: 'Aquamovit là sản phẩm bổ khớp cao cấp chứa Collagen Type II, MSM và các dưỡng chất thiết yếu, giúp nuôi dưỡng sụn khớp từ bên trong.',
    details: 'Trẻ em: Hỗ trợ phát triển chiều cao. Tăng cường hình thành xương và răng. Giảm nguy cơ còi xương, chậm lớn. Thanh thiếu niên (giai đoạn dậy thì): Tăng mật độ xương tối ưu, vì đây là thời điểm xương phát triển mạnh nhất. Giúp cơ thể đạt chiều cao tối đa. Hỗ trợ hoạt động cơ – thần kinh khi vận động, học tập nhiều. Người trưởng thành: Duy trì xương chắc khỏe, hạn chế mất xương sớm. Hỗ trợ giảm nguy cơ đau nhức xương – khớp khi lao động nhiều. Ổn định chức năng cơ bắp, tim mạch và thần kinh. Phụ nữ mang thai & cho con bú: Giảm nguy cơ thiếu canxi, chuột rút. Hỗ trợ sự phát triển xương của thai nhi/trẻ bú mẹ. Bảo vệ xương và răng của mẹ. Người trung niên & người lớn tuổi: Làm chậm quá trình loãng xương. Giảm nguy cơ gãy xương. Cải thiện sức mạnh cơ bắp và thăng bằng, giúp hạn chế té ngã. Liều dùng : Uống 2 viên/ lần / ngày'
  },
  { 
    id: 4, 
    name: 'Cetyl Pure', 
    image: '/images/product_04.png', 
    price: 450000, 
    salePrice: 200000, 
    isOnSale: false, 
    category: 'lamdep', 
    sale: false,
    description: 'Cetyl Pure là sản phẩm làm đẹp da chứa các thành phần tự nhiên, giúp dưỡng ẩm, làm mềm da và cải thiện độ đàn hồi của da.',
    details: 'Sản phẩm chất lượng cao, nguồn gốc rõ ràng, an toàn cho mọi loại da. Cetyl Pure được chiết xuất từ các thành phần thiên nhiên, không chứa hóa chất độc hại, giúp nuôi dưỡng da từ sâu bên trong, mang lại làn da mịn màng, tươi trẻ.'
  },
  { 
    id: 5, 
    name: 'CLA Core', 
    image: '/images/product_05.png', 
    price: 380000, 
    salePrice: null, 
    isOnSale: false, 
    category: 'lamdep', 
    sale: false,
    description: 'CLA Core là sản phẩm hỗ trợ giảm cân và duy trì vóc dáng, chứa CLA (Conjugated Linoleic Acid) giúp đốt cháy mỡ thừa hiệu quả.',
    details: 'Sản phẩm được nghiên cứu và sản xuất theo công nghệ hiện đại, an toàn và hiệu quả. CLA Core giúp hỗ trợ giảm cân, giảm mỡ bụng, tăng cường trao đổi chất và duy trì vóc dáng cân đối. Phù hợp cho người muốn kiểm soát cân nặng một cách lành mạnh.'
  },
  { 
    id: 6, 
    name: 'Poo Pourri', 
    image: '/images/product_06.png', 
    price: 89000, 
    salePrice: 38000, 
    isOnSale: true, 
    category: 'lamdep', 
    sale: false,
    description: 'Poo Pourri là sản phẩm xịt khử mùi nhà vệ sinh tự nhiên, tạo lớp màng trên bề mặt nước để ngăn mùi khó chịu phát tán.',
    details: 'Sản phẩm được làm từ tinh dầu thiên nhiên, an toàn và thân thiện với môi trường. Poo Pourri giúp khử mùi hiệu quả, tạo không gian thơm mát, dễ chịu. Sử dụng đơn giản, chỉ cần xịt vào nước trước khi sử dụng nhà vệ sinh.'
  },
  { 
    id: 7, 
    name: 'Bioderma', 
    image: '/images/product_01.png', 
    price: 95000, 
    salePrice: 55000, 
    isOnSale: true, 
    category: 'nutrition', 
    sale: false,
    description: 'Bioderma là sản phẩm chăm sóc da chuyên nghiệp, được các bác sĩ da liễu khuyên dùng, phù hợp cho da nhạy cảm.',
    details: 'Sản phẩm của thương hiệu Bioderma nổi tiếng từ Pháp, được nghiên cứu và phát triển bởi các chuyên gia da liễu. Bioderma giúp làm sạch sâu, dưỡng ẩm và bảo vệ da, phù hợp cho mọi loại da, đặc biệt là da nhạy cảm và da bị kích ứng.'
  },
  { 
    id: 8, 
    name: 'Chanca Piedra', 
    image: '/images/product_02.png', 
    price: 700000, 
    salePrice: null, 
    isOnSale: false, 
    category: 'nutrition', 
    sale: false,
    description: 'Chanca Piedra là thảo dược tự nhiên hỗ trợ sức khỏe thận và đường tiết niệu, giúp thanh lọc cơ thể và hỗ trợ tiêu hóa.',
    details: 'Sản phẩm được chiết xuất từ cây Chanca Piedra (cây tán sỏi) tự nhiên, có nguồn gốc từ Nam Mỹ. Chanca Piedra hỗ trợ sức khỏe thận, đường tiết niệu, giúp thanh lọc cơ thể và hỗ trợ hệ tiêu hóa. Sản phẩm an toàn, không có tác dụng phụ khi sử dụng đúng liều lượng.'
  },
  { 
    id: 9, 
    name: 'Umcka Cold Care', 
    image: '/images/product_03.png', 
    price: 1200000, 
    salePrice: null, 
    isOnSale: false, 
    category: 'nutrition', 
    sale: false,
    description: 'Umcka Cold Care là sản phẩm hỗ trợ điều trị cảm lạnh và cảm cúm tự nhiên, giúp giảm triệu chứng ho, sổ mũi và tăng cường hệ miễn dịch.',
    details: 'Sản phẩm được chiết xuất từ rễ cây Pelargonium sidoides (Umckaloabo) của Nam Phi, có tác dụng kháng khuẩn và kháng vi-rút tự nhiên. Umcka Cold Care giúp rút ngắn thời gian bị cảm lạnh, giảm ho, sổ mũi, đau họng và tăng cường hệ miễn dịch. An toàn cho cả người lớn và trẻ em.'
  },
];

export default function ShopSingle({ params }) {
  const [quantity, setQuantity] = useState(1);

  const productId = Number(params.id);
  const product = allProducts.find((p) => p.id === productId) || allProducts[0];

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 2);

  const handleAddToCart = () => {
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ!`);
    setQuantity(1);
  };

  if (!product) {
    return (
      <>
        <Header />
        <div className="site-section">
          <div className="container">
            <h2 className="site-section-heading text-center">Sản phẩm không tồn tại</h2>
            <p className="text-center">
              <Link href="/shop" className="btn btn-primary">Quay lại cửa hàng</Link>
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

      {/* Breadcrumb */}
      <div className="site-section">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Trang chủ</Link>
            <span>/</span>
            <Link href="/shop">Sản phẩm</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="product-image-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="product-main-image"
                />
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="product-title">{product.name}</h2>

              <div className="product-price mb-4">
                {product.salePrice ? (
                  <>
                    <span className="original-price">
                      {formatCurrencyVND(product.price)}
                    </span>
                    <span className="sale-price">
                      {formatCurrencyVND(product.salePrice)}
                    </span>
                  </>
                ) : (
                  <span className="sale-price">
                    {formatCurrencyVND(product.price)}
                  </span>
                )}
              </div>

              {product.description && (
                <p className="product-description mb-4">
                  {product.description}
                </p>
              )}

              {product.details && (
                <div className="product-details mb-4">
                  <h4>Chi tiết sản phẩm</h4>
                  <p>
                    {product.details}
                  </p>
                </div>
              )}

              <div className="product-availability mb-4">
                <span className="in-stock">Còn hàng</span>
              </div>

              <div className="product-options mb-5">
                <div className="qty-selector mb-4">
                  <label>Số lượng:</label>
                  <div className="qty-controls">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      min="1"
                    />
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>

                <div className="action-buttons">
                  <button
                    className="btn btn-primary"
                    onClick={handleAddToCart}
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>

              <div className="product-meta">
                <p><strong>SKU:</strong> PHR-00{product.id}</p>
                <p><strong>Danh mục:</strong> {product.category}</p>
                <p><strong>Giao hàng:</strong> Miễn phí với đơn trên 200.000&nbsp;₫</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="site-section-heading text-center">Sản phẩm liên quan</h2>
            </div>
          </div>

          <div className="row">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


