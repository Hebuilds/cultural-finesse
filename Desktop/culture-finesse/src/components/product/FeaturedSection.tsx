import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import type { Product } from '../../types';

interface Props {
  products: Product[];
}

const FeaturedSection: React.FC<Props> = ({ products }) => {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section
      ref={ref}
      className={`px-5 py-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-2xl font-semibold text-[#2C2C2C]">New Collection</h2>
        <Link to="/shop" className="text-sm text-[#4A5D23] font-medium">
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {products.slice(0, 6).map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;