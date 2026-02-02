'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles, Shield, Truck } from 'lucide-react';
import { useUserStore } from '@/store/userStore';

export function LandingPage() {
  const router = useRouter();
  const { isAuthenticated } = useUserStore();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (isAuthenticated && !isRedirecting) {
      setIsRedirecting(true);
      router.push('/dashboard');
    }
  }, [isAuthenticated, router, isRedirecting]);

  // If already authenticated and redirecting, show loading
  if (isAuthenticated && isRedirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">
      {/* Hero Section - Full Viewport Height */}
      <div className="h-screen flex items-center justify-center relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-700 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Premium Shopping Experience</span>
              <Sparkles className="h-6 w-6 text-blue-400 ml-2" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to
              <span className="text-blue-400 block">Vendora</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Your premium online shopping destination. Discover amazing products at unbeatable prices with a seamless shopping experience.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 mb-12">
              <div className="flex items-center text-gray-300">
                <Shield className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Truck className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-sm">Fast Delivery</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-medium text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/login"
                className="border-2 border-blue-600 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-800 hover:text-white transition-all font-medium text-lg transform hover:scale-105"
              >
                Login to Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Visible After Scrolling */}
      <footer className="bg-black bg-opacity-80 text-white py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">Vendora</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Vendora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
