// src/app/page.tsx
import Navbar from "@/components/layout/Navbar";
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/data/mockProducts';

export default function HomePage() {
  return (
    <div className="container mx-auto py-8">
      {/* This structure will hold the Sidebar and main content */}
      <div className="grid grid-cols-1"> {/* We'll update this to add a sidebar later */}
        
        {/* This div contains the content to the right of the sidebar */}
        <div>
          <Navbar />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[39px] gap-y-[2.82px] mt-8">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}