import Link from 'next/link';
import Image from 'next/image';
import './ProductCard.css';

export default function ProductCard({ id, name, image, price, salePrice, isOnSale = false }) {
  return (
    <div className="col-sm-6 col-lg-4 text-center item mb-4">
      {isOnSale && <span className="tag">Sale</span>}
      <Link href={`/shop-single/${id}`}>
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="product-image"
        />
      </Link>
      <h3 className="text-dark">
        <Link href={`/shop-single/${id}`}>{name}</Link>
      </h3>
      <p className="price">
        {salePrice ? (
          <>
            <del>${price.toFixed(2)}</del> &mdash; ${salePrice.toFixed(2)}
          </>
        ) : (
          `$${price.toFixed(2)}`
        )}
      </p>
    </div>
  );
}
