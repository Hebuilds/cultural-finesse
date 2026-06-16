import type { CartItem } from '../types';

// Replace with your actual WhatsApp number (include country code)
const BUSINESS_WHATSAPP = '250788123456';

export const generateWhatsAppMessage = (cartItems: CartItem[], subtotal: number): string => {
  const itemsList = cartItems.map(item => {
    const name = item.product?.name || 'Product';
    const size = item.size?.label || item.size || 'N/A';
    const price = item.product?.price || 0;
    return `• ${name} (${size}) x${item.quantity} – $${(price * item.quantity).toFixed(2)}`;
  }).join('\n');

  return `*New Order – Culture Finesse*\n\n${itemsList}\n\n*Total: $${subtotal.toFixed(2)}*\n\nPlease confirm availability and shipping details.`;
};

export const redirectToWhatsApp = (cartItems: CartItem[], subtotal: number) => {
  const message = generateWhatsAppMessage(cartItems, subtotal);
  const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};