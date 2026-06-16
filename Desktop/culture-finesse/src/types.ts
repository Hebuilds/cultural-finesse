export interface Category {
  id: string;
  name: string;
  display_name: string;
  slug: string;
  sort_order: number;
}

export interface Size {
  id: string;
  label: string;
  sort_order: number;
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  alt_text?: string;
  sort_order: number;
}

export interface ProductSize {
  product_id: string;
  size_id: string;
  sizes: { label: string };
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category?: string;
  color?: string;
  sizes: string[];
  images: string[];
  description?: string;
  sizing_details?: string;
  materials?: string;
  care_instructions?: string;
  shipping_info?: string;
  return_policy?: string;
  is_active: boolean;
  is_featured: boolean;
}

export interface CartItem {
  id?: string; // Supabase ID or index for guest
  product: Product;
  size: { label: string };
  quantity: number;
}

export interface SupabaseProductResponse {
  id: string;
  name: string;
  slug: string;
  price: number;
  color?: string;
  description?: string;
  sizing_details?: string;
  materials?: string;
  care_instructions?: string;
  shipping_info?: string;
  return_policy?: string;
  is_active: boolean;
  is_featured: boolean;
  category: { slug: string; display_name: string } | null;
  product_images: { image_url: string; sort_order: number }[];
  product_sizes: { sizes: { label: string } }[];
}