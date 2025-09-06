// Core types for Botify.store robotics e-commerce platform

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  shortDescription: string;
  specifications: {
    [key: string]: string;
  };
  features: string[];
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
  brand: string;
  sku: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  isLoggedIn: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  subcategories?: string[];
}

export interface FilterOptions {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  brands: string[];
  inStockOnly: boolean;
  rating: number;
}

export interface SearchFilters {
  query: string;
  category: string;
  priceMin: number;
  priceMax: number;
  brand: string;
  inStockOnly: boolean;
  sortBy: 'name' | 'price-low' | 'price-high' | 'rating' | 'newest';
}