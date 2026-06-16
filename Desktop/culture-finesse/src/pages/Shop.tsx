import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import FilterPanel from '../components/product/FilterPanel';
import DesktopFilters from '../components/product/DesktopFilters';
import { staticProducts, staticCategories, staticSizes } from '../data/products';

const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="py-4">
      <div className="px-5 pt-2 pb-1 flex justify-between items-center">
        <h1 className="text-2xl font-medium text-[#2C2C2C]">Shop All</h1>
        <button onClick={() => setIsFilterOpen(true)} className="md:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
          Filter
        </button>
      </div>

      <DesktopFilters
        categories={staticCategories}
        availableSizes={staticSizes}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      <ProductGrid
        products={staticProducts}
        selectedCategory={selectedCategory}
        selectedSize={selectedSize}
        searchQuery={searchQuery}
      />

      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        categories={staticCategories}
        availableSizes={staticSizes}
      />
    </div>
  );
};

export default Shop;