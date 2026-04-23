export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

export interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: string;
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CheckoutForm {
  email: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentMethod: 'credit' | 'debit' | 'paypal';
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}
