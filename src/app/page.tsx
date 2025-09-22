'use client';

import { useState, useEffect, useMemo } from 'react';
import Sidebar from "../components/layout/Sidebar";
import ProductCard from "../components/ProductCard";
import ProductToolbar from "../components/ProductToolbar";
import Pagination from "../components/Pagination";
import TopBanner from "../components/TopBanner";
import { mockProducts, Product } from "../data/mockProducts";

export default function HomePage() {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    brands: [] as string[],
    priceRange: [0, 1000] as [number, number],
    colors: [] as string[],
  });
  const [sortOption, setSortOption] = useState({ by: 'price', order: 'asc' });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 12,
    totalItems: 0,
  });

  const availableBrands = useMemo(() => Array.from(new Set(mockProducts.map(p => p.category))), []);
  
  const availableColors = useMemo(() => Array.from(new Set(mockProducts.flatMap(p => p.colors))).slice(0, 6), []);

  useEffect(() => {
    let processedProducts = [...mockProducts];

    // --- Filtering Logic ---
    if (filters.brands.length > 0) {
      processedProducts = processedProducts.filter(p => filters.brands.includes(p.category));
    }
    processedProducts = processedProducts.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
    if (filters.colors.length > 0) {
      processedProducts = processedProducts.filter(p => p.colors.some(color => filters.colors.includes(color)));
    }

    // --- Sorting & Pagination Logic(remains the same) ---
    processedProducts.sort(/* ... */);
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const paginatedProducts = processedProducts.slice(startIndex, endIndex);

    setDisplayedProducts(paginatedProducts);
    setPagination(prev => ({ ...prev, totalItems: processedProducts.length }));
  }, [filters, sortOption, pagination.currentPage, pagination.itemsPerPage]);

  const handleFilterChange = (filterType: keyof typeof filters, value: any) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setPagination(prev => ({ ...prev, currentPage: 1 }));
  };
  const handleItemsPerPageChange = (newSize: number) => {
    setPagination({ ...pagination, itemsPerPage: newSize, currentPage: 1 });
  };
  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, currentPage: newPage }));
  };
  const totalPages = Math.ceil(pagination.totalItems / pagination.itemsPerPage);

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[355px_1fr] gap-8">
        <div className="hidden lg:block">
          <Sidebar 
            filters={filters}
            onFilterChange={handleFilterChange}
            availableBrands={availableBrands}
            availableColors={availableColors}
          />
        </div>
        <div>
          <TopBanner />
          <ProductToolbar 
            totalItems={pagination.totalItems}
            sortOption={sortOption}
            onSortChange={setSortOption}
            itemsPerPage={pagination.itemsPerPage}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-[39px] gap-y-4 mt-8">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl text-heading-text">No products found.</h3>
                <p className="text-link-text">Try adjusting your filters.</p>
              </div>
            )}
          </div>
          <Pagination 
            currentPage={pagination.currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}