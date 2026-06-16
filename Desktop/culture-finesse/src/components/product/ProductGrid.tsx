import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../../types';

interface Props {
  products: Product[];
  selectedCategory: string;
  selectedSize: string;
  searchQuery: string;
}

const ProductGrid: React.FC<Props> = ({ products, selectedCategory, selectedSize, searchQuery }) => {
  const filtered = products.filter(p => {
    const categoryMatch = selectedCategory === 'all' || p.category === selectedCategory;
    const sizeMatch = !selectedSize || p.sizes.includes(selectedSize);
    const searchMatch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.color && p.color.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && sizeMatch && searchMatch;
  });

  return (
    <div className="px-3 py-4">
      <div className="grid grid-cols-3 gap-2">
        {filtered.length > 0 ? (
          filtered.map(product => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="col-span-3 py-12 text-center text-gray-500">
            <p>No products match your search.</p>
            <p className="text-sm mt-2">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;