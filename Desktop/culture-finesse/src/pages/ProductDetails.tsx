import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { redirectToWhatsApp } from '../utils/whatsapp';
import { staticProducts } from '../data/products';
import type { Product } from '../types';

const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    const found = staticProducts.find(p => p.slug === slug) || null;
    setProduct(found);
    if (found?.category) {
      setRelatedProducts(staticProducts.filter(p => p.category === found.category && p.id !== found.id).slice(0, 4));
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="px-5 py-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/shop" className="text-[#4A5D23] underline mt-4 inline-block">Back to shop</Link>
      </div>
    );
  }

  const images = product.images;
  const totalImages = images.length;
  const nextImage = () => setCurrentImageIndex(prev => (prev + 1) % totalImages);
  const prevImage = () => setCurrentImageIndex(prev => (prev - 1 + totalImages) % totalImages);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) return alert('Please select a size');
    addItem(product, selectedSize, 1);
  };

  const handleBuyNow = () => {
    if (!selectedSize) return alert('Please select a size');
    redirectToWhatsApp([{ product, size: { label: selectedSize }, quantity: 1 }], product.price);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Mobile layout – same as before but without Supabase references */}
      <div className="block md:hidden px-5 py-6">
        <div className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden mb-6">
          {images.length > 0 ? (
            <>
              <img src={images[currentImageIndex]} alt={product.name} className="w-full h-full object-cover" />
              {images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#4A5D23] uppercase">No image</div>
          )}
        </div>

        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl font-medium mt-1">${product.price}</p>

        {product.color && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold uppercase text-gray-500">Color</h3>
            <p className="text-gray-800 mt-1">{product.color}</p>
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2">Size</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map(size => (
              <button key={size} onClick={() => setSelectedSize(size)} className={`w-12 h-10 rounded-md text-sm border ${selectedSize === size ? 'bg-black text-white' : 'bg-white border-gray-200'}`}>{size}</button>
            ))}
          </div>
        </div>

        <button onClick={handleAddToCart} className="w-full mt-8 bg-[#4A5D23] text-white py-4 rounded-full">Add to Cart</button>
        <button onClick={handleBuyNow} className="w-full mt-3 border border-[#4A5D23] text-[#4A5D23] py-4 rounded-full hover:bg-[#4A5D23] hover:text-white">Buy Now</button>
        <button onClick={() => toggleWishlist(product)} className="w-full mt-3 border border-gray-300 py-4 rounded-full flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill={inWishlist ? '#ef4444' : 'none'} stroke={inWishlist ? '#ef4444' : 'currentColor'} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <h3 className="font-semibold text-xl mb-2">Description</h3>
          <p className="text-gray-600">{product.description || `Premium quality ${product.name.toLowerCase()} crafted for everyday wear.`}</p>
          {product.sizing_details && <details className="group mt-4"><summary className="font-medium">Sizing</summary><p className="text-sm text-gray-600">{product.sizing_details}</p></details>}
          {product.materials && <details className="group"><summary className="font-medium">Materials & Care</summary><p className="text-sm text-gray-600">{product.materials}</p></details>}
          {product.shipping_info && <details className="group"><summary className="font-medium">Shipping & Returns</summary><p className="text-sm text-gray-600">{product.shipping_info}</p></details>}
        </div>
      </div>

      {/* Desktop layout – same but without Supabase references */}
      <div className="hidden md:block">
        <div className="flex gap-12 px-8 py-12">
          <div className="w-1/2">
            <div className="sticky top-20">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                {images.length > 0 && <img src={images[currentImageIndex]} alt={product.name} className="w-full h-full object-cover" />}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 mt-4 justify-center">
                  {images.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-3 h-3 rounded-full ${idx === currentImageIndex ? 'bg-black' : 'bg-gray-300'}`} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <p className="text-2xl font-medium mt-3">${product.price}</p>
            {product.color && <p className="text-gray-800 mt-1">{product.color}</p>}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase">Select Size</h3>
              <div className="flex flex-wrap gap-3 mt-3">
                {product.sizes.map(size => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`min-w-[52px] h-12 px-3 rounded-md text-sm border ${selectedSize === size ? 'bg-black text-white' : 'bg-white'}`}>{size}</button>
                ))}
              </div>
            </div>
            <button onClick={handleAddToCart} className="w-full mt-8 bg-[#4A5D23] text-white py-4 rounded-full">Add to Cart</button>
            <button onClick={handleBuyNow} className="w-full mt-3 border border-[#4A5D23] text-[#4A5D23] py-4 rounded-full hover:bg-[#4A5D23] hover:text-white">Buy Now</button>
            <button onClick={() => toggleWishlist(product)} className="w-full mt-3 border py-4 rounded-full flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill={inWishlist ? '#ef4444' : 'none'} stroke={inWishlist ? '#ef4444' : 'currentColor'} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
            <div className="mt-8 border-t pt-6">
              <h3 className="font-semibold text-xl mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
              {product.sizing_details && <details className="mt-4"><summary className="font-medium">Sizing</summary><p className="text-sm text-gray-600">{product.sizing_details}</p></details>}
              {product.materials && <details><summary className="font-medium">Materials & Care</summary><p className="text-sm text-gray-600">{product.materials}</p></details>}
              {product.shipping_info && <details><summary className="font-medium">Shipping & Returns</summary><p className="text-sm text-gray-600">{product.shipping_info}</p></details>}
            </div>
          </div>
        </div>
        <div className="px-8 py-16 border-t border-gray-200">
          <h3 className="font-semibold text-2xl mb-6">You might also like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;