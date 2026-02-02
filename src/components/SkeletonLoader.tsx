export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <div className="w-full h-48 bg-gray-200 animate-pulse" />
        <div className="absolute top-2 left-2 w-12 h-6 bg-gray-300 rounded-full animate-pulse" />
        <div className="absolute top-2 right-2 w-10 h-10 bg-gray-300 rounded-full animate-pulse" />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="mb-3">
          <div className="w-full h-6 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex items-center mb-3">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
          <div className="ml-2 w-8 h-4 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="w-full h-10 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}

export function CategorySkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse" />
      <div className="w-24 h-6 bg-gray-200 rounded mx-auto animate-pulse" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-3/4 h-16 bg-gray-300 rounded mx-auto mb-6 animate-pulse" />
          <div className="w-full h-8 bg-gray-300 rounded mx-auto mb-8 animate-pulse" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="w-40 h-12 bg-gray-300 rounded-lg animate-pulse" />
            <div className="w-40 h-12 bg-gray-300 rounded-lg animate-pulse" />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse" />
              <div className="w-24 h-6 bg-gray-300 rounded mx-auto mb-2 animate-pulse" />
              <div className="w-full h-4 bg-gray-300 rounded mx-auto animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CartItemSkeleton() {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
      <div className="w-20 h-20 bg-gray-200 rounded-lg animate-pulse" />
      <div className="flex-1 min-w-0">
        <div className="w-full h-5 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="w-16 h-4 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="flex flex-col space-y-2">
        <div className="w-10 h-10 bg-gray-200 rounded animate-pulse" />
        <div className="w-10 h-10 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
}

export function SearchSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse mb-6" />
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded animate-pulse" />
              <div className="flex-1">
                <div className="w-full h-5 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="w-20 h-5 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
