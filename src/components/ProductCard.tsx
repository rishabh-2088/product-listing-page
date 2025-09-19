// src/components/ProductCard.tsx
import { Product } from '@/data/mockProducts';
import Image from 'next/image';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-card-bg overflow-hidden relative">
      <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 z-10">
        HOT
      </span>
      <div className="relative w-full h-60 bg-white">
        <Image src={product.imageUrl} alt={product.name} fill className="object-contain p-4"/>
      </div>
      <div className="p-4 bg-black text-white text-center">
        <h3 className="font-bold text-blue-400 mb-2 truncate">{product.name}</h3>
        <div className="my-2 text-yellow-400 text-lg">★★★★☆</div>
        <div className="flex justify-center items-baseline gap-4 mt-2">
          <p className="text-2xl font-bold text-cyan-400">$299.43</p>
          <p className="line-through text-gray-500">$534.33</p>
          <p className="font-bold text-red-500">24% Off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;