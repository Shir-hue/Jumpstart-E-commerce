import { useState, useEffect, useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import ProductDescriptionGenerator from '../components/ProductDescriptionGenerator'
import BackToTopButton from '../components/BackToTopButton';

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [selectedRating, setSelectedRating] = useState(0)
  const [viewMode, setViewMode] = useState('grid') // grid or list
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const categories = [
    { value: 'all', label: 'All Categories', count: products.length },
    { value: 'shoes', label: 'Shoes', count: products.filter(p => p.category === 'shoes').length },
    { value: 'shirts', label: 'Shirts & Tops', count: products.filter(p => p.category === 'shirts').length },
    { value: 'dresses', label: 'Dresses', count: products.filter(p => p.category === 'dresses').length },
    { value: 'pants', label: 'Pants & Bottoms', count: products.filter(p => p.category === 'pants').length },
    { value: 'accessories', label: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
  ]

  const brands = [
    { value: 'all', label: 'All Brands' },
    { value: 'ClassicStyle', label: 'Classic Style' },
    { value: 'SportMax', label: 'Sport Max' },
    { value: 'ComfortWalk', label: 'Comfort Walk' },
    { value: 'ElegantStep', label: 'Elegant Step' },
    { value: 'FitRunner', label: 'Fit Runner' },
    { value: 'BusinessPro', label: 'Business Pro' },
    { value: 'OfficeChic', label: 'Office Chic' },
    { value: 'SummerVibes', label: 'Summer Vibes' },
    { value: 'EveningGlam', label: 'Evening Glam' },
    { value: 'CasualFit', label: 'Casual Fit' },
    { value: 'ActiveFlex', label: 'Active Flex' },
    { value: 'LuxuryCarry', label: 'Luxury Carry' }
  ]

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Customer Rating' },
    { value: 'reviews', label: 'Most Reviewed' },
    { value: 'newest', label: 'Newest First' },
    { value: 'discount', label: 'Biggest Discount' }
  ]

  useEffect(() => {
    // Expanded product catalog with more variety
    const mockProducts = [
      // Shoes
      {
        id: 1,
        name: "Classic Leather Oxford Dress Shoes",
        price: 89.99,
        originalPrice: 119.99,
  image: "https://images.unsplash.com/photo-1573498945275-98751e3f605f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENsYXNzaWMlMjBMZWF0aGVyJTIwT3hmb3JkJTIwRHJlc3MlMjBTaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "shoes",
        subcategory: "formal",
        brand: "ClassicStyle",
        rating: 4.5,
        reviews: 128,
        discount: 25,
        inStock: true,
        description: "No description yet",
        features: ["Genuine Leather", "Formal Design", "Comfortable Sole", "Available in Brown & Black"],
        tags: ["bestseller", "formal"]
      },
      {
        id: 2,
        name: "Athletic Running Sneakers",
        price: 79.99,
        originalPrice: 99.99,
  image: "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEF0aGxldGljJTIwUnVubmluZyUyMFNuZWFrZXJzfGVufDB8fDB8fHww",
        category: "shoes",
        subcategory: "athletic",
        brand: "SportMax",
        rating: 4.7,
        reviews: 256,
        discount: 20,
        inStock: true,
        description: "No description yet",
        features: ["Breathable Mesh", "Cushioned Sole", "Lightweight", "Anti-Slip"],
        tags: ["trending", "athletic"]
      },
      {
        id: 3,
        name: "Casual Slip-on Loafers",
        price: 69.99,
        originalPrice: 89.99,
  image: "https://images.unsplash.com/photo-1715525295763-a423d6dda172?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhc3VhbCUyMFNsaXAlMjBvbiUyMExvYWZlcnN8ZW58MHx8MHx8fDA%3D",
        category: "shoes",
        subcategory: "casual",
        brand: "ComfortWalk",
        rating: 4.3,
        reviews: 94,
        discount: 22,
        inStock: true,
        description: "No description yet",
        features: ["Slip-on Design", "Soft Leather", "All-day Comfort", "Versatile Style"],
        tags: ["casual", "comfort"]
      },
      {
        id: 4,
        name: "Professional High Heel Pumps",
        price: 65.99,
        originalPrice: 85.99,
  image: "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFByb2Zlc3Npb25hbCUyMEhpZ2glMjBIZWVsJTIwUHVtcHN8ZW58MHx8MHx8fDA%3D",
        category: "shoes",
        subcategory: "professional",
        brand: "ElegantStep",
        rating: 4.4,
        reviews: 189,
        discount: 23,
        inStock: true,
        description: "No description yet",
        features: ["3-inch Heel", "Pointed Toe", "Professional Look", "Comfortable Padding"],
        tags: ["professional", "elegant"]
      },
      {
        id: 5,
        name: "Performance Athletic Trainers",
        price: 75.99,
        originalPrice: 95.99,
  image: "https://images.unsplash.com/photo-1716951187026-77811cc8c929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBlcmZvcm1hbmNlJTIwQXRobGV0aWMlMjBUcmFpbmVycyUyMHNoaXJ0fGVufDB8fDB8fHww",
        category: "shoes",
        subcategory: "athletic",
        brand: "FitRunner",
        rating: 4.6,
        reviews: 167,
        discount: 21,
        inStock: true,
        description: "No description yet",
        features: ["Breathable Material", "Shock Absorption", "Arch Support", "Lightweight"],
        tags: ["athletic", "popular"]
      },
      // Shirts & Tops
      {
        id: 6,
        name: "Premium Cotton Business Dress Shirt",
        price: 49.99,
        originalPrice: 69.99,
  image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFByZW1pdW0lMjBDb3R0b24lMjBCdXNpbmVzcyUyMERyZXNzJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D",
        category: "shirts",
        subcategory: "business",
        brand: "BusinessPro",
        rating: 4.5,
        reviews: 203,
        discount: 29,
        inStock: true,
        description: "No description yet",
        features: ["100% Cotton", "Wrinkle Resistant", "Classic Fit", "Multiple Colors"],
        tags: ["bestseller", "formal"]
      },
      {
        id: 7,
        name: "Professional Office Blouse",
        price: 39.99,
        originalPrice: 54.99,
  image: "https://images.unsplash.com/photo-1590588503756-08a4b2be5eb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHJvZmVzc2lvbmFsJTIwT2ZmaWNlJTIwQmxvdXNlLnxlbnwwfHwwfHx8MA%3D%3D",
        category: "shirts",
        subcategory: "professional",
        brand: "OfficeChic",
        rating: 4.3,
        reviews: 145,
        discount: 27,
        inStock: true,
        description: "No description yet",
        features: ["Polyester Blend", "Professional Style", "Easy Care", "Comfortable Fit"],
        tags: ["professional", "versatile"]
      },
      // Dresses
      {
        id: 8,
        name: "Elegant Summer Floral Maxi Dress",
        price: 79.99,
        originalPrice: 109.99,
  image: "https://images.unsplash.com/photo-1610631344924-b7df7cf236c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlZ2FudCUyMFN1bW1lciUyMEZsb3JhbCUyME1heGklMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "dresses",
        subcategory: "casual",
        brand: "SummerVibes",
        rating: 4.7,
        reviews: 298,
        discount: 27,
        inStock: true,
        description: "No description yet",
        features: ["Floral Pattern", "Maxi Length", "Lightweight Fabric", "Perfect for Summer"],
        tags: ["trending", "seasonal"]
      },
      {
        id: 9,
        name: "Sophisticated Evening Cocktail Dress",
        price: 99.99,
        originalPrice: 129.99,
  image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
        category: "dresses",
        subcategory: "formal",
        brand: "EveningGlam",
        rating: 4.8,
        reviews: 156,
        discount: 23,
        inStock: false,
        description: "No description yet",
        features: ["Elegant Design", "Knee Length", "Special Occasions", "Premium Fabric"],
        tags: ["premium", "elegant"]
      },
      // Pants & Bottoms
      {
        id: 10,
        name: "Classic Chino Casual Pants",
        price: 59.99,
        originalPrice: 79.99,
  image: "https://plus.unsplash.com/premium_photo-1740354613211-ba0ef46452f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENsYXNzaWMlMjBDaGlubyUyMENhc3VhbCUyMFBhbnRzfGVufDB8fDB8fHww",
        category: "pants",
        subcategory: "casual",
        brand: "CasualFit",
        rating: 4.4,
        reviews: 187,
        discount: 25,
        inStock: true,
        description: "No description yet",
        features: ["Cotton Twill", "Slim Fit", "Multiple Colors", "Versatile Style"],
        tags: ["casual", "popular"]
      },
      {
        id: 11,
        name: "High-Performance Yoga Leggings",
        price: 34.99,
        originalPrice: 49.99,
  image: "https://images.unsplash.com/photo-1712068980119-bdeb8353d16c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fEhpZ2glMjBQZXJmb3JtYW5jZSUyMFlvZ2ElMjBMZWdnaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
        category: "pants",
        subcategory: "athletic",
        brand: "ActiveFlex",
        rating: 4.6,
        reviews: 324,
        discount: 30,
        inStock: true,
        description: "No description yet",
        features: ["Stretch Fabric", "High Waist", "Moisture Wicking", "Perfect for Yoga"],
        tags: ["athletic", "bestseller"]
      },
      // Accessories
      {
        id: 12,
        name: "Luxury Designer Tote Handbag",
        price: 149.99,
        originalPrice: 199.99,
  image: "https://images.unsplash.com/photo-1751219476343-7522296fe0eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8THV4dXJ5JTIwRGVzaWduZXIlMjBUb3RlJTIwSGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
        category: "accessories",
        subcategory: "bags",
        brand: "LuxuryCarry",
        rating: 4.5,
        reviews: 167,
        discount: 25,
        inStock: true,
        description: "No description yet",
        features: ["Genuine Leather", "Spacious Interior", "Multiple Compartments", "Elegant Design"],
        tags: ["luxury", "practical"]
      }
    ]

    // Simulate API call delay
    setTimeout(() => {
      setProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [])

  // Enhanced search function with better matching
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesRating = selectedRating === 0 || product.rating >= selectedRating
      
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating
    })
  }, [products, searchTerm, selectedCategory, selectedBrand, priceRange, selectedRating])

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'reviews':
          return b.reviews - a.reviews
        case 'discount':
          return (b.discount || 0) - (a.discount || 0)
        default:
          return 0
      }
    })
  }, [filteredProducts, sortBy])

  const updateProductDescription = (productId, newDescription) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, description: newDescription }
          : product
      )
    )
  }

  const handleGenerateDescription = (product) => {
    setSelectedProduct(product)
  }

  return (
    <div className="min-h-screen bg-white pb-16 lg:pb-0">

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-50 text-gray-900 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Fashion Collection
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            Discover our curated selection of premium fashion items with AI-powered descriptions
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm">
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              <span className="text-gray-700 whitespace-nowrap">Free Shipping Over $50</span>
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
              </svg>
              <span className="text-gray-700 whitespace-nowrap">30-Day Returns</span>
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-gray-700 whitespace-nowrap">AI-Generated Descriptions</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        {/* Mobile Filter Toggle */}
        <button 
          className="lg:hidden bg-white rounded-lg shadow-lg border border-gray-200 p-3 mb-4 w-full flex items-center justify-center space-x-2 touch-manipulation active:scale-95 transition-transform"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
          </svg>
          <span className="font-medium text-gray-700">Filters & Sort</span>
          <svg 
            className={`w-4 h-4 text-gray-500 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 lg:p-6 sticky top-6">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Filters</h3>
                <button 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                    setSelectedBrand('all')
                    setPriceRange([0, 500])
                    setSelectedRating(0)
                    setShowMobileFilters(false)
                  }}
                  className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors touch-manipulation active:scale-95"
                >
                  Clear All
                </button>
              </div>

              {/* Search */}
              <div className="mb-4 lg:mb-6">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Search Products
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full pl-4 lg:pl-5 pr-2 py-2.5 lg:py-3 border border-gray-200 bg-white !text-black placeholder-gray-400 rounded-xl shadow-md focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-200 transition-all text-sm lg:text-base touch-manipulation"
                />
              </div>

              {/* Categories */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Categories</h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {categories.map((category) => (
                    <label key={category.value} className="flex items-center touch-manipulation">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-600 bg-gray-800 touch-manipulation"
                      />
                      <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-600">
                        {category.label} ({category.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Brands</h4>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full pl-4 lg:pl-5 pr-2 py-2.5 lg:py-3 border border-gray-200 bg-white !text-black rounded-xl shadow-md focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-200 transition-all text-sm lg:text-base touch-manipulation"
                >
                  {brands.map((brand) => (
                    <option key={brand.value} value={brand.value}>
                      {brand.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-medium text-black mb-2 sm:mb-3">Price Range</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-black min-w-[2rem] sm:min-w-[2.5rem]">${priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-orange-500 touch-manipulation"
                    style={{ minWidth: 0 }}
                  />
                  <span className="text-xs sm:text-sm text-black min-w-[2rem] sm:min-w-[2.5rem] text-right">${priceRange[1]}</span>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Minimum Rating</h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {[4, 3, 2, 1, 0].map((rating) => (
                    <label key={rating} className="flex items-center touch-manipulation">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={selectedRating === rating}
                        onChange={(e) => setSelectedRating(parseInt(e.target.value))}
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-600 bg-gray-800 touch-manipulation"
                      />
                      <span className="ml-2 sm:ml-3 flex items-center">
                        {rating === 0 ? (
                          <span className="text-xs sm:text-sm text-gray-400">All ratings</span>
                        ) : (
                          <>
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            ))}
                            <span className="ml-1 text-xs sm:text-sm text-gray-400">& up</span>
                          </>
                        )}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Apply Filters Button */}
              <div className="lg:hidden pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-xl font-medium shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all touch-manipulation active:scale-95"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div className="flex items-center">
                  <span className="text-xs sm:text-sm text-gray-600">
                    Showing {sortedProducts.length} of {products.length} results
                    {searchTerm && (
                      <span className="ml-1">for "{searchTerm}"</span>
                    )}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  {/* Sort Dropdown */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700">Sort by:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 border border-gray-300 bg-white !text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm touch-manipulation"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* View Toggle */}
                  <div className="flex border border-gray-300 rounded-md overflow-hidden self-start sm:self-auto">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 sm:p-2.5 transition-all touch-manipulation active:scale-95 ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                      aria-label="Grid view"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 sm:p-2.5 transition-all touch-manipulation active:scale-95 ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                      aria-label="List view"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Description Generator Modal */}
            {selectedProduct && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
                <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-2 sm:mx-0">
                  <ProductDescriptionGenerator 
                    product={selectedProduct} 
                    onClose={() => setSelectedProduct(null)}
                    onSave={(description) => {
                      updateProductDescription(selectedProduct.id, description)
                      setSelectedProduct(null)
                    }}
                  />
                </div>
              </div>
            )}

            {/* Products Grid/List */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="relative">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-indigo-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
            ) : sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.816-6.25-2.178C4.47 11.772 3.2 10.378 2.5 8.5L1 5h3l1.5 3L7 5h3l1.5 3L14 5h3l-1.5 3.5c-.7 1.878-1.97 3.272-3.25 4.322z"/>
                </svg>
                <h3 className="mt-2 text-sm font-medium text-slate-900">No products found</h3>
                <p className="mt-1 text-sm text-slate-500">Try adjusting your filters or search terms.</p>
              </div>
            ) : (
              <div className={`grid gap-3 lg:gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {sortedProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onGenerateDescription={handleGenerateDescription}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}
            {/* Back to Top Button */}
            <BackToTopButton />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Products
