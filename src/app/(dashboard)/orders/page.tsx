'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Package, Clock, CheckCircle, Truck } from 'lucide-react';
import { useUserStore } from '@/store/userStore';

export default function OrdersPage() {
  const router = useRouter();
  const { isAuthenticated, user } = useUserStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 299.99,
      items: 3,
      statusIcon: CheckCircle,
      statusColor: 'text-green-600',
      statusBg: 'bg-green-100'
    },
    {
      id: 'ORD-002',
      date: '2024-01-20',
      status: 'shipped',
      total: 159.99,
      items: 2,
      statusIcon: Truck,
      statusColor: 'text-blue-600',
      statusBg: 'bg-blue-100'
    },
    {
      id: 'ORD-003',
      date: '2024-01-25',
      status: 'processing',
      total: 89.99,
      items: 1,
      statusIcon: Clock,
      statusColor: 'text-orange-600',
      statusBg: 'bg-orange-100'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Orders</h1>
          <p className="text-lg text-gray-600">Track and manage your orders</p>
        </div>

        {mockOrders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
            <p className="text-gray-500 mb-6">Start shopping to see your orders here</p>
            <a
              href="/dashboard/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Shopping
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            {mockOrders.map((order) => {
              const StatusIcon = order.statusIcon;
              return (
                <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Order {order.id}</h3>
                      <p className="text-sm text-gray-500">Placed on {order.date}</p>
                    </div>
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${order.statusBg}`}>
                      <StatusIcon className={`h-4 w-4 ${order.statusColor}`} />
                      <span className={`text-sm font-medium ${order.statusColor}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{order.items} items</p>
                      <p className="text-lg font-semibold text-gray-900">${order.total}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
