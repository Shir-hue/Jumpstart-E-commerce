const ProductCard = ({ product, onGenerateDescription, viewMode = 'grid' }) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row p-3 sm:p-4 gap-3 sm:gap-4 items-start">
          <div className="relative flex-shrink-0 w-full sm:w-48 h-56 sm:h-48 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {discountPercentage > 0 && (
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg">
                -{discountPercentage}%
              </div>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-medium">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
              </div>
              <div className="text-right sm:ml-4">
                <div className="flex items-center gap-2">
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="text-lg sm:text-xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300">
                {product.brand}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-300">
                {product.category}
              </span>
            </div>
            
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-sm text-gray-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>
            
      <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {product.features.slice(0, 4).map((feature, index) => (
                  <span 
                    key={index}
        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {feature}
                  </span>
                ))}
                {product.features.length > 4 && (
                  <span className="text-gray-500 text-xs font-medium px-2 py-1">
                    +{product.features.length - 4} more
                  </span>
                )}
              </div>
            </div>
            
            {/* Product Description */}
            <div className="mb-4">
              <p className={`text-sm leading-relaxed ${
                product.description === 'No description yet' 
                  ? 'text-gray-400 italic' 
                  : 'text-gray-600'
              }`}>
                {product.description.length > 120 
                  ? `${product.description.substring(0, 120)}...` 
                  : product.description}
              </p>
            </div>
            
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="text-sm">
                <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              <button
                onClick={() => onGenerateDescription(product)}
                disabled={!product.inStock}
        className={`px-4 py-3 rounded-md text-sm sm:text-base font-medium transition-colors duration-300 ${
                  product.inStock
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25'
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}
              >
                Generate AI Description
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grid view (default)
  return (
    <div className="group bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold shadow-lg">
            -{discountPercentage}%
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-md text-xs font-medium border border-gray-200">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
        </div>
        
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
            <span className="ml-1 text-sm text-gray-500">
              ({product.reviews})
            </span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 2 && (
              <span className="text-gray-500 text-xs font-medium px-2 py-1">
                +{product.features.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Product Description */}
        <div className="mb-4">
          <p className={`text-sm leading-relaxed ${
            product.description === 'No description yet' 
              ? 'text-gray-400 italic' 
              : 'text-gray-600'
          }`}>
            {product.description.length > 80 
              ? `${product.description.substring(0, 80)}...` 
              : product.description}
          </p>
        </div>
        
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-xl font-bold text-blue-600">
              ${product.price}
            </span>
          </div>
          <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        <button
          onClick={() => onGenerateDescription(product)}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
            product.inStock
              ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25'
              : 'bg-gray-400 text-gray-200 cursor-not-allowed'
          }`}
        >
          <span className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span>Generate AI Description</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
