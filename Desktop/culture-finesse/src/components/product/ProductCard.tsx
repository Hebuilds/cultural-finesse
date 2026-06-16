import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import type { Product } from '../../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [ref, isVisible] = useFadeInOnScroll(0.05);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const images = product.images || [];
  const hasMultipleImages = images.length > 1;
  const inWishlist = isInWishlist(product.id);

  const handleMouseEnter = () => hasMultipleImages && setCurrentImageIndex(1);
  const handleMouseLeave = () => setCurrentImageIndex(0);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.sizes?.length) addItem(product, product.sizes[0], 1);
    else alert('No sizes available');
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div
      ref={ref}
      className={`group transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <Link to={`/product/${product.slug}`}>
        <div
          className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm bg-gray-100"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {images.length > 0 ? (
            <img
              src={images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#4A5D23] text-[10px] uppercase bg-gradient-to-br from-[#EAE8E0] to-[#D1CFC6]">
              No image
            </div>
          )}

          <button
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg
              className="w-4 h-4"
              fill={inWishlist ? '#ef4444' : 'none'}
              stroke={inWishlist ? '#ef4444' : 'currentColor'}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          <button
            onClick={handleQuickAdd}
            className="absolute bottom-2 right-2 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>

          {hasMultipleImages && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-1 h-1 rounded-full transition-colors ${
                    idx === currentImageIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="mt-1.5">
          <h3 className="font-medium text-xs text-[#2C2C2C] truncate">{product.name}</h3>
          <p className="text-gray-600 text-xs">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;