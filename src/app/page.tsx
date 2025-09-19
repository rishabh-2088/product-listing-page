import Navbar from "@/components/layout/Navbar";
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/data/mockProducts';

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[39px] gap-y-[2.82px] mt-8">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}