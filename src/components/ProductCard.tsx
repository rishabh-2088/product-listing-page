import React from 'react';
import Image from 'next/image'; 
import { Product } from '@/data/mockProducts';

// A small helper component to render the star rating using inline SVG
const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center gap-[6px]">
      {[...Array(totalStars)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <svg
            key={starNumber}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill={starNumber <= filledStars ? '#FFC600' : '#C1C8CE'}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M7.99984 12.1733L3.29317 14.88L4.37317 9.58667L0.499839 5.96L5.84651 5.34667L7.99984 0.4L10.1532 5.34667L15.4998 5.96L11.6265 9.58667L12.7065 14.88L7.99984 12.1733Z" />
          </svg>
        );
      })}
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

// The main ProductCard component
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) return null;

  return (
    <div className="group w-[328px] h-[408px] bg-white border-[3px] border-[#F6F7F8] flex flex-col overflow-hidden rounded-[5px] transition-shadow duration-300 hover:shadow-2xl">
      
      {/* Product Image Section */}
      <div className="relative w-[326px] h-[286px] bg-[#F6F7F8] mx-auto">
        {product.isHot && (
          <div className="absolute top-0 left-0 w-[70px] h-[35px] bg-[#FF4858] text-white font-proxima text-[18px] font-normal leading-[100%] flex items-center justify-center z-10">
            HOT
          </div>
        )}
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Details */}
      <div className="px-4 pt-3 flex flex-col flex-grow justify-start">
        <h3 className="text-[#223263] text-[18px] font-poppins font-bold leading-[150%] tracking-[0.5px] truncate">
          {product.name}
        </h3>

        {/* Star Rating */}
        <div className="mt-2">
          <StarRating rating={product.ratingValue} />
        </div>

        {/* Price Section */}
        <div className="mt-auto flex items-center gap-[8px]">
          {/* Current / Discounted Price */}
          {product.discountPrice ? (
            <p className="text-[#40BFFF] text-[18px] font-poppins font-bold leading-[180%] tracking-[0.5px]">
              ${product.discountPrice.toFixed(2).replace('.', ',')}
            </p>
          ) : (
            <p className="text-[#40BFFF] text-[18px] font-poppins font-bold leading-[180%] tracking-[0.5px]">
              ${product.price.toFixed(2).replace('.', ',')}
            </p>
          )}

          {/* Original Price */}
          {product.discountPrice && (
            <p className="text-[#9098B1] text-[14px] font-poppins font-normal leading-[150%] tracking-[0.5px] line-through">
              ${product.price.toFixed(2).replace('.', ',')}
            </p>
          )}

          {/* Discount % */}
          {product.discountPercent && (
            <p className="text-[#FB7181] font-poppins font-bold text-[14px] leading-[150%] tracking-[0.5px]">
              {product.discountPercent}% Off
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
