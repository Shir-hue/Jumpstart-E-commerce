import { useState, useEffect } from 'react'

const ProductDescriptionGenerator = ({ product, onClose, onSave }) => {
  const [description, setDescription] = useState(product.description || 'No description yet')
  const [originalDescription, setOriginalDescription] = useState(product.description || 'No description yet')
  const [isGenerating, setIsGenerating] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    setOriginalDescription(product.description || 'No description yet')
    setDescription(product.description || 'No description yet')
  }, [product])

  useEffect(() => {
    setHasChanges(description !== originalDescription)
  }, [description, originalDescription])

  // AI description generation with real API call
  const generateDescription = async () => {
    setIsGenerating(true)
    
    try {
      // Call the Python FastAPI backend
      const response = await fetch('http://localhost:8000/api/generate-description', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: {
            name: product.name,
            category: product.category,
            brand: product.brand,
            price: product.price,
            features: product.features,
            target_audience: "fashion-conscious shoppers"
          },
          style: "professional",
          length: "medium"
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.success) {
        setDescription(data.description)
        console.log(`Generated using: ${data.method} (${data.word_count} words)`)
      } else {
        throw new Error('Failed to generate description')
      }
    } catch (error) {
      console.error('API call failed, using fallback:', error)
      // Fallback to mock description if API fails
      const mockDescription = generateMockDescription(product)
      setDescription(mockDescription)
    }
    
    setIsGenerating(false)
  }

  const generateMockDescription = (product) => {
    // Unique, varied templates for each category
    const templates = {
      'shoes': `${product.brand} ${product.name} - ${product.features.slice(0, 2).join(' & ')}. Great for running, walking, or casual outings. Now $${product.price}.`,
      
      'shirts': `Premium ${product.brand} ${product.name} with ${product.features.slice(0, 2).join(', ').toLowerCase()}. Machine washable. Size range available. Price: $${product.price}.`,
      
      'dresses': `Elegant ${product.name} by ${product.brand}. ${product.features.slice(0, 2).join(' and ')}. Perfect for work or weekend events. $${product.price} with free shipping.`,
      
      'pants': `${product.brand} ${product.name} in multiple sizes. Key features: ${product.features.slice(0, 2).join(', ').toLowerCase()}. Wrinkle-resistant fabric. Only $${product.price}.`,
      
      'accessories': `Must-have ${product.name} from ${product.brand}. Crafted with ${product.features.slice(0, 2).join(' and ').toLowerCase()}. Matches any outfit. Special price $${product.price}.`
    }
    
    return templates[product.category] || `Quality ${product.brand} ${product.name} featuring ${product.features.slice(0, 2).join(' plus ').toLowerCase()}. Durable construction meets style. Get yours for $${product.price}.`
  }

  const handleSave = () => {
    if (onSave && hasChanges) {
      onSave(description)
    }
    onClose()
  }

  const handleCancel = () => {
    setDescription(originalDescription)
    onClose()
  }

  const handleReset = () => {
    setDescription('No description yet')
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-200">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                AI Product Description Generator
              </h2>
              <p className="text-gray-600">
                Generate compelling product descriptions using artificial intelligence
              </p>
            </div>
            <button
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Info */}
            <div>
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                <div className="flex gap-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.brand}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl font-bold text-blue-600">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
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
                        <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Product Features:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={generateDescription}
                  disabled={isGenerating}
                  className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-blue-500/25"
                >
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Generate New Description
                    </>
                  )}
                </button>
                <button
                  onClick={handleReset}
                  disabled={isGenerating}
                  className="px-4 py-3 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Reset
                </button>
              </div>
            </div>
            
            {/* Description Editor */}
            <div>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Product Description:</h4>
                  {hasChanges && (
                    <span className="text-sm text-amber-600 font-medium">Unsaved changes</span>
                  )}
                </div>
                <textarea
                  value={description}
                  onChange={handleDescriptionChange}
                  disabled={isGenerating}
                  placeholder="Enter product description or generate one using AI..."
                  className="w-full h-64 p-4 border border-gray-300 bg-white !text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none disabled:opacity-50 placeholder-gray-500"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {description.length} characters
                </p>
              </div>
              
              {description !== 'No description yet' && !isGenerating && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    <div className="text-sm text-blue-700">
                      <p className="font-medium mb-1">AI-Generated Content</p>
                      <p>This description was created using artificial intelligence. You can edit it above before saving.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleSave}
                  disabled={isGenerating || !hasChanges}
                  className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25"
                >
                  Save Description
                </button>
                <button
                  onClick={handleCancel}
                  disabled={isGenerating}
                  className="px-6 py-3 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescriptionGenerator
