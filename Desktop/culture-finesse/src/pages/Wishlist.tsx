import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/product/ProductCard';

const Wishlist: React.FC = () => {
  const { wishlistItems } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="px-5 py-20 text-center">
        <h2 className="text-2xl font-bold">Your wishlist is empty</h2>
        <Link to="/shop" className="mt-6 inline-block bg-[#4A5D23] text-white px-8 py-3 rounded-full">Explore Products</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {wishlistItems.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default Wishlist;