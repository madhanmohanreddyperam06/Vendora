'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, User, Menu, X, Heart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useUserStore } from '@/store/userStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { CartDrawer } from './CartDrawer';
import { WishlistDrawer } from './WishlistDrawer';
import { AuthModal } from './AuthModal';
import { SearchAutocomplete } from './SearchAutocomplete';
import { useHydration } from '@/hooks/useHydration';
import { ClientOnly } from './ClientOnly';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { getTotalItems } = useCartStore();
  const { getItemCount: getWishlistCount } = useWishlistStore();
  const { user, isAuthenticated, logout } = useUserStore();
  const isHydrated = useHydration();
  
  const totalItems = getTotalItems();
  const wishlistCount = getWishlistCount();

  if (!isHydrated) {
    return (
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Vendora</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
                Products
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-blue-600 font-medium">
                Categories
              </Link>
              <button className="relative p-2 text-gray-700 hover:text-blue-600" suppressHydrationWarning>
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600" suppressHydrationWarning>
                <User className="h-5 w-5" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Vendora</span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <SearchAutocomplete />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Wishlist */}
              <ClientOnly
                fallback={
                  <button className="relative p-2 text-gray-700 hover:text-blue-600" suppressHydrationWarning>
                    <Heart className="h-6 w-6" />
                  </button>
                }
              >
                <button
                  onClick={() => setIsWishlistOpen(true)}
                  className="relative p-2 text-gray-700 hover:text-blue-600"
                  suppressHydrationWarning
                >
                  <Heart className="h-6 w-6" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </button>
              </ClientOnly>
              
              {/* Cart */}
              <ClientOnly
                fallback={
                  <button className="relative p-2 text-gray-700 hover:text-blue-600" suppressHydrationWarning>
                    <ShoppingCart className="h-6 w-6" />
                  </button>
                }
              >
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-gray-700 hover:text-blue-600"
                  suppressHydrationWarning
                >
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </ClientOnly>

              {/* Profile Icon */}
              <ClientOnly
                fallback={
                  <button className="relative p-2 text-gray-700 hover:text-blue-600" suppressHydrationWarning>
                    <User className="h-6 w-6" />
                  </button>
                }
              >
                {isAuthenticated ? (
                  <Link href="/profile" className="relative p-2 text-gray-700 hover:text-blue-600" suppressHydrationWarning>
                    <User className="h-6 w-6" />
                  </Link>
                ) : (
                  <button
                    onClick={() => setIsAuthOpen(true)}
                    className="relative p-2 text-gray-700 hover:text-blue-600"
                    suppressHydrationWarning
                  >
                    <User className="h-6 w-6" />
                  </button>
                )}
              </ClientOnly>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 text-gray-700"
                suppressHydrationWarning
              >
                <Heart className="h-6 w-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700"
                suppressHydrationWarning
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700"
                suppressHydrationWarning
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <SearchAutocomplete />
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                {isAuthenticated ? (
                  <Link href="/orders" className="text-gray-700 hover:text-blue-600 font-medium">
                    Orders
                  </Link>
                ) : (
                  <button
                    onClick={() => setIsAuthOpen(true)}
                    className="text-left text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Login / Register
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <ClientOnly>
        <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      </ClientOnly>
    </>
  );
}
