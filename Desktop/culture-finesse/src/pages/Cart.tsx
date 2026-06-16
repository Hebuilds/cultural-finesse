import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { redirectToWhatsApp } from '../utils/whatsapp';

const Cart: React.FC = () => {
  const { cartItems, loading, updateQuantity, removeItem, subtotal } = useCart();

  if (loading) return <div className="p-8 text-center">Loading cart...</div>;
  if (cartItems.length === 0) {
    return (
      <div className="px-5 py-20 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <Link to="/shop" className="mt-6 inline-block bg-[#4A5D23] text-white px-8 py-3 rounded-full">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-5 py-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={item.id || index} className="flex gap-4 border-b pb-4">
            <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden">
              {item.product?.images?.[0] && <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{item.product?.name}</h3>
                <button onClick={() => removeItem(item.id || index)} className="text-red-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <p className="text-sm text-gray-500">Size: {item.size?.label || 'N/A'}</p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id || index, item.quantity - 1)} className="w-8 h-8 border rounded-full">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id || index, item.quantity + 1)} className="w-8 h-8 border rounded-full">+</button>
                </div>
                <span>${(item.product?.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t pt-4 flex justify-between font-bold text-lg">
        <span>Total</span><span>${subtotal.toFixed(2)}</span>
      </div>
      <button onClick={() => redirectToWhatsApp(cartItems, subtotal)} className="w-full mt-6 bg-green-600 text-white py-4 rounded-full font-medium hover:bg-green-700">
        Buy Now via WhatsApp
      </button>
      <Link to="/shop" className="block text-center mt-4 text-[#4A5D23] underline">Continue Shopping</Link>
    </div>
  );
};

export default Cart;