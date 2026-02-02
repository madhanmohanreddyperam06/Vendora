'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Clock, Eye } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { useRecentlyViewedStore } from '@/store/recentlyViewedStore';
import { ProductCardSkeleton } from './SkeletonLoader';

interface RecentlyViewedProps {
  currentProductId?: number;
}

export function RecentlyViewed({ currentProductId }: RecentlyViewedProps) {
  const { items, addItem } = useRecentlyViewedStore();

  // Filter out current product if viewing a product page
  const filteredItems = currentProductId 
    ? items.filter(item => item.id !== currentProductId)
    : items;

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-2">
            <Clock className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Recently Viewed</h2>
          </div>
          <Link
            href="/recently-viewed"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
          >
            <span>View All</span>
            <Eye className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.slice(0, 8).map((product) => {
            const discountedPrice = product.discountPercentage && product.discountPercentage > 0
              ? calculateDiscount(product.price, product.discountPercentage)
              : product.price;

            return (
              <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative">
                  <Link href={`/products/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  {product.discountPercentage && product.discountPercentage > 0 && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                      -{product.discountPercentage}%
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500">{product.brand}</span>
                  </div>
                  
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                  </Link>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(discountedPrice)}
                      </span>
                      {product.discountPercentage && product.discountPercentage > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.price)}
                        </span>
                      )}
                    </div>
                    <span className={`text-sm ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-orange-600' : 'text-red-600'}`}>
                      {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Hook to track product views
export function useProductView(product: Product | null) {
  const { addItem } = useRecentlyViewedStore();

  useEffect(() => {
    if (product) {
      // Add to recently viewed with a small delay to avoid immediate tracking
      const timer = setTimeout(() => {
        addItem(product);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [product, addItem]);
}
