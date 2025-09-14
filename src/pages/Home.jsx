import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import BackToTopButton from '../components/BackToTopButton';

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [showAppModal, setShowAppModal] = useState(false)
  
  const banners = [
    {
      id: 1,
      title: "Premium Fashion Collection",
      subtitle: "Discover luxury styles with up to 60% off selected items",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=600&fit=crop&crop=center",
      gradient: "from-slate-900 via-slate-800 to-slate-900",
      cta: "Shop Collection"
    },
    {
      id: 2,
      title: "Exclusive Sneaker Drops",
      subtitle: "Limited edition releases from top brands worldwide",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop&crop=center",
      gradient: "from-blue-900 via-blue-800 to-indigo-900",
      cta: "Explore Now"
    },
    {
      id: 3,
      title: "Designer Accessories",
      subtitle: "Complete your look with handpicked luxury accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&crop=center",
      gradient: "from-emerald-900 via-emerald-800 to-teal-900",
      cta: "View Collection"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [banners.length])

  return (
    <>
      {/* <Navbar */}
      <div className="min-h-screen bg-gray-50 pb-16 lg:pb-0">
        
        {/* Hero Banner Section - Mobile Optimized Layout */}
        <section className="relative bg-gradient-to-br from-orange-50 via-orange-25 to-yellow-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6 lg:py-12 relative">
              
              <div className="relative h-[350px] sm:h-[400px] lg:h-[400px]">
                {banners.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentBanner ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="relative h-full flex flex-col lg:flex-row items-center">
                      {/* Product Image */}
                      <div className="flex-1 flex items-center justify-center relative order-1 lg:order-2 mb-4 lg:mb-0">
                        <div className="relative flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                          {/* Main product showcase */}
                          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl p-3 lg:p-4 border-2 lg:border-4 border-orange-200 relative overflow-hidden">
                            <img 
                              src={banner.image}
                              alt={banner.title}
                              className="w-full h-full object-cover rounded-xl lg:rounded-2xl"
                              draggable="false"
                            />
                            {/* Discount badge */}
                            <div className="absolute top-2 lg:top-3 left-2 lg:left-3 bg-red-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-bold shadow-lg">
                              Up to 60% OFF
                            </div>
                          </div>

                          {/* App Promo Card - Hidden on mobile */}
                          <div className="hidden lg:flex w-72 bg-gradient-to-br from-orange-100 via-pink-100 to-white rounded-2xl shadow-xl border border-orange-200 p-5 flex-col items-center justify-between min-h-[370px]">
                            {/* ...existing app promo content... */}
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                              </div>
                              <span className="font-bold text-gray-800 text-lg">TRY OUR APP</span>
                            </div>
                            <div className="w-full mb-3">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-t-md">★ 4.8 Rated</span>
                              </div>
                              <div className="text-sm text-gray-700 font-medium">Get the Jumpstart app to enjoy</div>
                            </div>
                            <div className="w-full bg-gradient-to-br from-pink-400 via-orange-400 to-pink-500 rounded-xl p-4 flex flex-col gap-3 mb-3">
                              <div className="flex items-center gap-3">
                                <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                                  <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M9 16h6" /></svg>
                                </div>
                                <span className="text-white font-semibold text-base">FREE SHIPPING</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                                  <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-white font-semibold text-base">EXCLUSIVE VOUCHERS</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-center gap-2 w-full">
                              <div className="flex gap-2 w-full">
                                <div className="bg-white rounded-lg p-1 flex items-center justify-center">
                                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://jumpstart-app.com" alt="QR Code" className="w-16 h-16" />
                                </div>
                                <div className="flex flex-col gap-2 justify-center">
                                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-3 py-1 rounded-lg flex items-center gap-2 text-xs shadow border border-gray-200"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10zm-5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3-4V7H9v6h6z"/></svg> App Store</a>
                                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-3 py-1 rounded-lg flex items-center gap-2 text-xs shadow border border-gray-200"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.7 9.3l-6.4-6.4C10.9 2.3 10.5 2 10 2c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1 .5 0 .9-.3 1.3-.7l6.4-6.4c.4-.4.4-1 0-1.4z"/></svg> Google Play</a>
                                </div>
                              </div>
                              <div className="text-xs text-gray-500 mt-1 text-center">Download the app now by scanning the QR code</div>
                            </div>
                          </div>

                          {/* Floating elements for visual appeal */}
                          <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-4 h-4 lg:w-8 lg:h-8 bg-yellow-300 rounded-full shadow-lg animate-bounce"></div>
                          <div className="absolute bottom-8 lg:bottom-10 -left-8 lg:-left-10 w-3 h-3 lg:w-6 lg:h-6 bg-orange-400 rounded-full shadow-lg animate-pulse"></div>
                          <div className="absolute top-1/2 -right-3 lg:-right-6 w-2 h-2 lg:w-4 lg:h-4 bg-pink-400 rounded-full shadow-lg animate-ping"></div>
                        </div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1 text-center lg:text-left lg:pr-8 max-w-xl order-2 lg:order-1 px-4 lg:px-0">
                        <div className="mb-3 lg:mb-4">
                          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-3 lg:mb-4">
                            Limited Time
                          </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 lg:mb-4 leading-tight">
                          {banner.title}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 lg:mb-6 leading-relaxed font-medium">
                          {banner.subtitle}
                        </p>
                        <Link
                          to="/products"
                          className="hidden lg:inline-flex items-center gap-2 lg:gap-3 bg-orange-500 text-white px-4 py-2.5 lg:px-6 lg:py-3 rounded-xl font-semibold text-sm lg:text-base hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          {banner.cta}
                          <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Background decorative elements */}
                    <div className="absolute top-5 lg:top-10 left-5 lg:left-10 w-12 h-12 lg:w-24 lg:h-24 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-5 lg:bottom-10 right-5 lg:right-10 w-16 h-16 lg:w-32 lg:h-32 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
                  </div>
                ))}
                
                {/* Navigation Dots */}
                <div className="absolute -bottom-4 lg:-bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 lg:space-x-4 z-20">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBanner(index)}
                      className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-500 ease-out transform hover:scale-125 ${
                        index === currentBanner 
                          ? 'bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/50 ring-2 ring-white/30' 
                          : 'bg-white/80 hover:bg-white backdrop-blur-sm border border-white/40 shadow-md hover:shadow-lg'
                      }`}
                      aria-label={`Go to banner ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Quick Actions Bar - New Section for Mobile Shopping */}
        <section className="lg:hidden py-4 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center">
              <Link 
                to="/products" 
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl font-semibold text-sm shadow-md active:scale-95 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Shop Collection</span>
              </Link>
            </div>
          </div>
        </section>

         {/* Featured Collections - Horizontal Scrollable for Mobile */}
        <section className="py-6 lg:py-12 bg-gradient-to-b from-white to-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl lg:text-3xl font-extrabold text-gray-900 mb-4 lg:mb-8 tracking-tight">Featured Collections</h2>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-3 lg:gap-8">
              {[
                {
                  name: "Designer Handbags",
                  desc: "Luxury bags, purses & statement accessories",
                  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop&crop=center",
                  badge: "Up to 50% Off"
                },
                {
                  name: "Fashion Finds",
                  desc: "Trendy apparel, shoes & accessories",
                  image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
                  badge: "New Arrivals"
                },
                {
                  name: "Street Style",
                  desc: "Urban fashion, sneakers & casual chic",
                  image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=400&fit=crop&crop=center",
                  badge: "Trending Now"
                }
              ].map((col, idx) => (
                <Link
                  key={idx}
                  to="/products"
                  className="group relative block min-w-[280px] md:min-w-0 flex-shrink-0 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img src={col.image} alt={col.name} className="w-full h-40 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3 lg:p-6">
                    <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-2 lg:px-3 py-0.5 lg:py-1 rounded-full mb-1 lg:mb-2 shadow">{col.badge}</span>
                    <h3 className="text-lg lg:text-2xl font-bold text-white drop-shadow mb-0.5 lg:mb-1">{col.name}</h3>
                    <p className="text-white/90 text-xs lg:text-sm drop-shadow">{col.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trending This Week - Mobile Optimized */}
        <section className="py-6 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 lg:mb-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1 lg:mb-2">Trending This Week</h2>
              <p className="text-sm lg:text-base text-gray-600">See how fashion looks on real models</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              {[
                {
                  name: "Oversized Blazer",
                  price: "$89.99",
                  image: "https://images.unsplash.com/photo-1597582927786-bae43be837a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3ZlcnNpemVkJTIwQmxhemVyfGVufDB8fDB8fHww"
                },
                {
                  name: "Vintage Denim Jacket",
                  price: "$79.99",
                  image: "https://images.unsplash.com/photo-1601036559620-3a83dfdead09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VmludGFnZSUyMERlbmltJTIwSmFja2V0fGVufDB8fDB8fHww"
                },
                {
                  name: "Silk Slip Dress",
                  price: "$129.99",
                  image: "https://images.unsplash.com/photo-1704137825357-5d23b837f40f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNpbGslMjBTbGlwJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D"
                },
                {
                  name: "Chunky Knit Sweater",
                  price: "$69.99",
                  image: "https://images.unsplash.com/photo-1601762267916-6668efcbc741?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENodW5reSUyMEtuaXQlMjBTd2VhdGVyfGVufDB8fDB8fHww"
                }
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 p-3 lg:p-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[3/4] mb-2 lg:mb-4 overflow-hidden rounded-lg bg-gray-50">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1 lg:mb-2 text-xs lg:text-sm">{product.name}</h3>
                  <p className="text-base lg:text-lg font-semibold text-gray-900">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
         {/* Flash Sale Section */}
        <section className="py-4 lg:py-8 bg-red-50 border-t border-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between gap-2 lg:gap-4 mb-3 lg:mb-6">
              <div className="flex flex-row items-center gap-2 lg:gap-4">
                <h2 className="text-base lg:text-2xl font-bold text-red-600">⚡ Flash Sale</h2>
                <div className="bg-red-600 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                  Ends in 12:34:56
                </div>
              </div>
              <Link to="/products" className="text-red-600 hover:text-red-700 font-medium text-xs lg:text-base whitespace-nowrap">
                View All →
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4">
              {[
                { name: "Designer Handbag", price: 89.99, originalPrice: 199.99, discount: 55, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center" },
                { name: "Trendy Sunglasses", price: 24.99, originalPrice: 69.99, discount: 64, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center" },
                { name: "Fashion Sneakers", price: 69.99, originalPrice: 149.99, discount: 53, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center" },
                { name: "Statement Jewelry", price: 19.99, originalPrice: 49.99, discount: 60, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center" },
                { name: "Silk Scarf", price: 34.99, originalPrice: 79.99, discount: 56, image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center" },
                { name: "Designer Watch", price: 149.99, originalPrice: 299.99, discount: 50, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center" }
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-3 lg:p-4">
                  <div className="relative mb-2 lg:mb-3">
                    <img src={product.image} alt={product.name} className="w-full h-24 lg:h-36 object-cover rounded-md" />
                    <div className="absolute top-1 lg:top-2 left-1 lg:left-2 bg-red-500 text-white text-xs font-bold px-1.5 lg:px-2 py-0.5 lg:py-1 rounded">
                      -{product.discount}%
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 text-xs lg:text-sm mb-1 lg:mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center space-x-1 lg:space-x-2">
                    <span className="text-sm lg:text-lg font-bold text-red-600">${product.price}</span>
                    <span className="text-xs lg:text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Today's Deals */}
        <section className="py-6 lg:py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6 gap-2">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Today's Deals</h2>
              <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium text-sm lg:text-base">
                See all deals →
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              {[
                { name: "Designer Leather Jacket", price: 189.99, originalPrice: 349.99, rating: 4.8, reviews: 892, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center" },
                { name: "Premium Silk Dress", price: 129.99, originalPrice: 249.99, rating: 4.7, reviews: 634, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center" },
                { name: "Luxury Fashion Boots", price: 159.99, originalPrice: 299.99, rating: 4.6, reviews: 1456, image: "https://images.unsplash.com/photo-1569531861011-86d9410f4a64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGx1eHVyeSUyMGZhc2hpb24lMjBib290c3xlbnwwfHwwfHx8MA%3D%3D" },
                { name: "Designer Handbag Set", price: 89.99, originalPrice: 179.99, rating: 4.9, reviews: 728, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop&crop=center" }
              ].map((product, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow p-3 lg:p-4">
                  <div className="relative mb-3 lg:mb-4">
                    <img src={product.image} alt={product.name} className="w-full h-32 lg:h-48 object-cover rounded-md" />
                    <div className="absolute top-1.5 lg:top-2 right-1.5 lg:right-2 bg-green-500 text-white text-xs font-bold px-1.5 lg:px-2 py-0.5 lg:py-1 rounded">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5 lg:mb-2 text-xs lg:text-base line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-1.5 lg:mb-2">
                    <div className="flex text-yellow-400 text-xs lg:text-base">
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="text-xs lg:text-sm text-gray-600 ml-1 lg:ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <div>
                      <span className="text-base lg:text-xl font-bold text-gray-900">${product.price}</span>
                      <span className="text-xs lg:text-sm text-gray-500 line-through ml-1 lg:ml-2">${product.originalPrice}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-md hover:bg-blue-700 transition-colors text-xs lg:text-sm font-medium w-full lg:w-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Designer Outfit Collections */}
        <section className="py-6 lg:py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6 gap-2">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center gap-2"><span role="img" aria-label="fashion">✨</span> Designer Outfit Collections</h2>
              <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium text-sm lg:text-base">
                See all collections →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              {[
                {
                  name: "Premium Business Attire",
                  desc: "Tailored blazer, dress pants, leather shoes & accessories",
                  price: 389.99,
                  originalPrice: 599.99,
                  discount: 35,
                  rating: 4.9,
                  reviews: 456,
                  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fcown-business-attire_942686-10889.jpg&f=1&nofb=1&ipt=ffca79fa16bc70615e754747a738c708062c6a6eea6aec6ed26d03ceb98c504c"
                },
                {
                  name: "Elegant Evening Collection",
                  desc: "Designer dress, heels, clutch & statement jewelry",
                  price: 299.99,
                  originalPrice: 499.99,
                  discount: 40,
                  rating: 4.8,
                  reviews: 342,
                  image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop&crop=center"
                },
                {
                  name: "Casual Chic Essentials",
                  desc: "Designer jeans, trendy top, sneakers & crossbody bag",
                  price: 179.99,
                  originalPrice: 289.99,
                  discount: 38,
                  rating: 4.7,
                  reviews: 289,
                  image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=600&fit=crop&crop=center"
                },
                {
                  name: "Luxury Accessories Bundle",
                  desc: "Designer watch, sunglasses, wallet & silk scarf",
                  price: 249.99,
                  originalPrice: 429.99,
                  discount: 42,
                  rating: 4.6,
                  reviews: 187,
                  image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=600&h=600&fit=crop&crop=center"
                }
              ].map((collection, idx) => (
                <div key={idx} className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow p-3 lg:p-4">
                  <div className="relative mb-3 lg:mb-4">
                    <img src={collection.image} alt={collection.name} className="w-full h-32 lg:h-40 object-cover rounded-md" />
                    <div className="absolute top-1.5 lg:top-2 right-1.5 lg:right-2 bg-green-500 text-white text-xs font-bold px-1.5 lg:px-2 py-0.5 lg:py-1 rounded">{collection.discount}% OFF</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-xs lg:text-base line-clamp-2">{collection.name}</h3>
                  <p className="text-gray-600 text-xs mb-2 line-clamp-2 lg:line-clamp-none">{collection.desc}</p>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-xs lg:text-base">
                      {'★'.repeat(Math.floor(collection.rating))}
                      {'☆'.repeat(5 - Math.floor(collection.rating))}
                    </div>
                    <span className="text-xs lg:text-sm text-gray-600 ml-1 lg:ml-2">({collection.reviews})</span>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-2 lg:gap-0 mt-auto">
                    <div>
                      <span className="text-sm lg:text-base font-bold text-gray-900">${collection.price}</span>
                      <span className="text-xs text-gray-500 line-through ml-2">${collection.originalPrice}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-md hover:bg-blue-700 transition-colors text-xs lg:text-sm font-semibold shadow w-full lg:w-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fashion Picks For You Section */}
        <section className="py-6 lg:py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6 gap-2">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center gap-2"><span role="img" aria-label="fashion">👗</span> Fashion Picks For You</h2>
              <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium text-sm lg:text-base">
                See all fashion →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              {[
                {
                  name: "Trendy Streetwear Set",
                  desc: "Oversized hoodie, joggers & sneakers",
                  price: 89.99,
                  originalPrice: 129.99,
                  discount: 31,
                  rating: 4.7,
                  reviews: 210,
                  image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600"
                },
                {
                  name: "Summer Dress Collection",
                  desc: "Floral midi, wrap & slip dresses",
                  price: 59.99,
                  originalPrice: 99.99,
                  discount: 40,
                  rating: 4.8,
                  reviews: 180,
                  image: "https://images.unsplash.com/photo-1477901492169-d59e6428fc90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxzdW1tZXIlMjBkcmVzcyUyMGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D"
                },
                {
                  name: "Sneaker Essentials",
                  desc: "Latest drops & classic styles",
                  price: 119.99,
                  originalPrice: 179.99,
                  discount: 33,
                  rating: 4.6,
                  reviews: 320,
                  image: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D"
                },
                {
                  name: "Accessories Bundle",
                  desc: "Sunglasses, tote bag & jewelry",
                  price: 39.99,
                  originalPrice: 69.99,
                  discount: 43,
                  rating: 4.5,
                  reviews: 150,
                  image: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjY2Vzc29yaWVzJTIwYnVuZGxlfGVufDB8fDB8fHww"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow p-3 lg:p-4">
                  <div className="relative mb-3 lg:mb-4">
                    <img src={item.image} alt={item.name} className="w-full h-32 lg:h-48 object-cover rounded-md" />
                    <div className="absolute top-1.5 lg:top-2 right-1.5 lg:right-2 bg-green-500 text-white text-xs font-bold px-1.5 lg:px-2 py-0.5 lg:py-1 rounded">{item.discount}% OFF</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5 lg:mb-2 text-xs lg:text-base line-clamp-2">{item.name}</h3>
                  <div className="flex items-center mb-1.5 lg:mb-2">
                    <div className="flex text-yellow-400 text-xs lg:text-base">
                      {'★'.repeat(Math.floor(item.rating))}
                      {'☆'.repeat(5 - Math.floor(item.rating))}
                    </div>
                    <span className="text-xs lg:text-sm text-gray-600 ml-1 lg:ml-2">({item.reviews})</span>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <div>
                      <span className="text-base lg:text-xl font-bold text-gray-900">${item.price}</span>
                      <span className="text-xs lg:text-sm text-gray-500 line-through ml-1 lg:ml-2">${item.originalPrice}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-md hover:bg-blue-700 transition-colors text-xs lg:text-sm font-medium w-full lg:w-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fashion Lifestyle Essentials */}
        <section className="py-6 lg:py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6 gap-2">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center gap-2"><span role="img" aria-label="style">💎</span> Fashion Lifestyle Essentials</h2>
              <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium text-sm lg:text-base">
                See all lifestyle →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              {[
                {
                  name: "Luxury Jewelry Organizer",
                  desc: "Velvet-lined with mirror & compartments",
                  price: 89.99,
                  originalPrice: 149.99,
                  discount: 40,
                  rating: 4.8,
                  reviews: 245,
                  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&crop=center"
                },
                {
                  name: "Chic Vanity Mirror",
                  desc: "LED lighting with touch controls",
                  price: 69.99,
                  originalPrice: 119.99,
                  discount: 42,
                  rating: 4.7,
                  reviews: 189,
                  image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop&crop=center"
                },
                {
                  name: "Designer Perfume Collection",
                  desc: "3 signature scents in travel sizes",
                  price: 49.99,
                  originalPrice: 89.99,
                  discount: 44,
                  rating: 4.6,
                  reviews: 156,
                  image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop&crop=center"
                },
                {
                  name: "Fashion Wall Art Set",  
                  desc: "4 stylish prints for modern decor",
                  price: 34.99,
                  originalPrice: 59.99,
                  discount: 42,
                  rating: 4.9,
                  reviews: 203,
                  image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop&crop=center"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow p-3 lg:p-4">
                  <div className="relative mb-3 lg:mb-4">
                    <img src={item.image} alt={item.name} className="w-full h-32 lg:h-48 object-cover rounded-md" />
                    <div className="absolute top-1.5 lg:top-2 right-1.5 lg:right-2 bg-green-500 text-white text-xs font-bold px-1.5 lg:px-2 py-0.5 lg:py-1 rounded">{item.discount}% OFF</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5 lg:mb-2 text-xs lg:text-base line-clamp-2">{item.name}</h3>
                  <div className="flex items-center mb-1.5 lg:mb-2">
                    <div className="flex text-yellow-400 text-xs lg:text-base">
                      {'★'.repeat(Math.floor(item.rating))}
                      {'☆'.repeat(5 - Math.floor(item.rating))}
                    </div>
                    <span className="text-xs lg:text-sm text-gray-600 ml-1 lg:ml-2">({item.reviews})</span>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <div>
                      <span className="text-base lg:text-xl font-bold text-gray-900">${item.price}</span>
                      <span className="text-xs lg:text-sm text-gray-500 line-through ml-1 lg:ml-2">${item.originalPrice}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-md hover:bg-blue-700 transition-colors text-xs lg:text-sm font-medium w-full lg:w-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended for You */}
        <section className="py-6 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 lg:mb-10">
              <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-3">Recommended for You</h2>
              <p className="text-gray-600 text-sm lg:text-lg">Curated fashion picks based on your style</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-8">
              {[
                { name: "Stylish Crossbody Bag", price: 49.99, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.tlzPRdj77V4IsCAKksgKTQHaHa%3Fpid%3DApi&f=1&ipt=86e6b282993bf206b62e8e81a9079f71f94d44be1a015d431a792d09833d7191&ipo=images", rating: 4.8, badge: "Trending" },
                { name: "Fashion Statement Earrings", price: 19.99, image: "https://images.unsplash.com/photo-1616121341778-0dd435d03d23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZhc2hpb24lMjBTdGF0ZW1lbnQlMjBFYXJyaW5nc3xlbnwwfHwwfHx8MA%3D%3D", rating: 4.6, badge: "Popular" },
                { name: "Designer Phone Case", price: 24.99, image: "https://images.unsplash.com/photo-1634878655694-d54b883770ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGVzaWduZXIlMjBQaG9uZSUyMENhc2V8ZW58MHx8MHx8fDA%3D", rating: 4.3, badge: "New" },
                { name: "Chic Scarf Collection", price: 34.99, image: "https://images.unsplash.com/photo-1538372572230-6256446ad1ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hpYyUyMFNjYXJmJTIwQ29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D", rating: 4.2, badge: "Stylish" },
                { name: "Fashion Travel Tumbler", price: 16.99, image: "https://images.unsplash.com/photo-1526857240824-92be52581d9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RmFzaGlvbiUyMFRyYXZlbCUyMFR1bWJsZXJ8ZW58MHx8MHx8fDA%3D", rating: 4.4, badge: "Chic" },
                { name: "Designer Notebook Set", price: 22.99, image: "https://plus.unsplash.com/premium_photo-1683309568218-bf32f6d904f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGVzaWduZXIlMjBOb3RlYm9vayUyMFNldHxlbnwwfHwwfHx8MA%3D%3D", rating: 4.0, badge: "Classic" },
                { name: "Fashionable Water Bottle", price: 18.99, image: "https://images.unsplash.com/photo-1601937286283-1c4550e05f58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEZhc2hpb25hYmxlJTIwV2F0ZXIlMjBCb3R0bGV8ZW58MHx8MHx8fDA%3D", rating: 4.5, badge: "Eco-Friendly" },
                { name: "Trendy Sunglasses", price: 39.99, image: "https://images.unsplash.com/photo-1559070081-648fb00b2ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fFRyZW5keSUyMFN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D", rating: 4.7, badge: "Hot" },
                { name: "Decorative Makeup Pouch", price: 14.99, image: "https://images.unsplash.com/photo-1595368774344-dc47b7666406?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RGVjb3JhdGl2ZSUyME1ha2V1cCUyMFBvdWNofGVufDB8fDB8fHww", rating: 4.3, badge: "Cute" },
                { name: "Fashion Wrist Watch", price: 89.99, image: "https://plus.unsplash.com/premium_photo-1682097578070-901d10cabc5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmFzaGlvbiUyMFdyaXN0JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D", rating: 4.6, badge: "Premium" }
              ].map((product, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow p-3 lg:p-4">
                  <div className="relative mb-3 lg:mb-4">
                    <img src={product.image} alt={product.name} className="w-full h-32 lg:h-48 object-cover rounded-md" />
                    <div className="absolute top-1.5 lg:top-2 left-1.5 lg:left-2 bg-green-500 text-white text-xs font-bold px-1.5 lg:px-2 py-0.5 lg:py-1 rounded">
                      {product.badge}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5 lg:mb-2 text-xs lg:text-base line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-1.5 lg:mb-2">
                    <div className="flex text-yellow-400 text-xs lg:text-base">
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="text-xs lg:text-sm text-gray-600 ml-1 lg:ml-2">({product.rating})</span>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <span className="text-base lg:text-xl font-bold text-gray-900">${product.price}</span>
                    <button className="bg-blue-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-md hover:bg-blue-700 transition-colors text-xs lg:text-sm font-medium w-full lg:w-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-4">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Free Shipping</h3>
                <p className="text-gray-600 text-xs lg:text-sm">Free shipping on orders over $50</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-4">
                  <svg className="w-6 h-6 lg:w-9 lg:h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" fill="#d1fae5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" stroke="#059669" />
                  </svg>
                </div>
                <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Money Back Guarantee</h3>
                <p className="text-gray-600 text-xs lg:text-sm">30-day return policy</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-4">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-xs lg:text-sm">Round-the-clock customer service</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-4">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Secure Payment</h3>
                <p className="text-gray-600 text-xs lg:text-sm">Your payment information is safe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Latest Deals</h2>
            <p className="text-blue-100 mb-8 text-lg">Get exclusive offers, new arrivals, and insider updates delivered to your inbox.</p>
            <div className="max-w-md mx-auto flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-5 py-3 rounded-lg border-0 text-white placeholder-white bg-orange-100/60 focus:ring-2 focus:ring-orange-300 focus:outline-none text-sm"
              />
              <button className="inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Subscribe
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-16 border-t border-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
              {/* Company Info */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-lg lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-800">Jumpstart E-commerce</h3>
                <p className="text-gray-700 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">Your trusted online fashion retailer for the latest trends, timeless classics, and everyday essentials. Shop quality apparel, fast delivery, and exceptional service, elevate your style with us.</p>
                
                {/* Mobile Follow Us */}
                <div className="md:hidden mt-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">Follow Us</h3>
                  <div className="flex space-x-3">
                    {/* Twitter */}
                    <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="Twitter">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </button>
                    {/* LinkedIn */}
                    <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="LinkedIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      </svg>
                    </button>
                    {/* Instagram */}
                    <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="Instagram">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </button>
                    {/* Facebook */}
                    <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="Facebook">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                      </svg>
                    </button>
                    {/* YouTube */}
                    <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="YouTube">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </button>
                    {/* TikTok */}
                    <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="TikTok">
                      <img src="https://cdn-icons-png.flaticon.com/128/15713/15713394.png" alt="TikTok" className="w-5 h-5 object-contain" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Shop Categories */}
              <div>
                <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-6 text-gray-700">Shop Categories</h4>
                <ul className="space-y-2 lg:space-y-3">
                  <li><Link to="/products" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">All Products</Link></li>
                  <li><Link to="/new-arrivals" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">New Arrivals</Link></li>
                  <li><Link to="/women" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Women</Link></li>
                  <li><Link to="/men" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Men</Link></li>
                  <li><Link to="/accessories" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Accessories</Link></li>
                  <li><Link to="/sale" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Sale</Link></li>
                </ul>
              </div>

              {/* Customer Support */}
              <div>
                <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-6 text-gray-700">Customer Support</h4>
                <ul className="space-y-2 lg:space-y-3">
                  <li><Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Contact Us</Link></li>
                  <li><Link to="/shipping" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Shipping & Delivery</Link></li>
                  <li><Link to="/returns" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Returns & Refunds</Link></li>
                  <li><Link to="/faq" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">FAQ</Link></li>
                  <li><Link to="/track-order" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Track Your Order</Link></li>
                  <li><Link to="/size-guide" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Size Guide</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-6 text-gray-700">Company</h4>
                <ul className="space-y-2 lg:space-y-3">
                  <li><Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">About Us</Link></li>
                  <li><Link to="/careers" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Careers</Link></li>
                  <li><Link to="/blog" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Blog</Link></li>
                  <li><Link to="/press" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Press</Link></li>
                  <li><Link to="/privacy" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">Terms of Service</Link></li>
                </ul>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="hidden md:block mt-4 lg:mt-12 mb-8 lg:mb-12">
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">Follow Us</h3>
              <div className="flex space-x-3 lg:space-x-4">
                {/* Twitter */}
                <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </button>
                {/* LinkedIn */}
                <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  </svg>
                </button>
                {/* Instagram */}
                <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
                {/* Facebook */}
                <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                </button>
                {/* YouTube */}
                <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </button>
                {/* TikTok */}
                <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300" aria-label="TikTok">
                  <img src="https://cdn-icons-png.flaticon.com/128/15713/15713394.png" alt="TikTok" className="w-5 h-5 object-contain" />
                </button>
              </div>
            </div>

            {/* Mobile-only Payment Methods */}
            <div className="lg:hidden -mt-50 mb-8 px-4 ml-45">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col sm:flex-row items-start gap-2">
                  <span className="text-gray-600 text-sm font-medium whitespace-nowrap">We Accept:</span>
                  <div className="flex items-center space-x-2">
                    <img src="https://img.lazcdn.com/us/domino/92e4b5da-14a4-4f22-a72b-6334933196ff_PH-117-70.png" alt="Visa" className="h-6 w-auto bg-white rounded px-1 py-0.5 shadow-sm" />
                    <img src="https://img.lazcdn.com/us/domino/2cd27cdf-a067-4ca6-a117-3a9232b058b3_PH-63-48.png" alt="Mastercard" className="h-6 w-auto bg-white rounded px-1 py-0.5 shadow-sm" />
                    <img src="https://img.lazcdn.com/us/domino/df528871-ca3b-49ae-8338-2f23fc7bdc60_PH-42-42.png" alt="AMEX" className="h-6 w-auto bg-white rounded px-1 py-0.5 shadow-sm" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 w-auto bg-white rounded px-1 py-0.5 shadow-sm object-contain" style={{ maxWidth: '50px' }} />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-2">
                  <span className="text-gray-600 text-sm font-medium whitespace-nowrap">Delivery Services:</span>
                  <div className="flex items-center space-x-2">
                    <img src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01md1Up71hMVCAxe2HZ_!!6000000004263-2-tps-96-70.png" alt="Delivery 1" className="h-6 w-auto bg-white rounded shadow-sm border border-gray-100" />
                    <img src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01WNUpFq1JZjrZz6erP_!!6000000001043-2-tps-96-70.png" alt="Delivery 2" className="h-6 w-auto bg-white rounded shadow-sm border border-gray-100" />
                    <img src="https://img.lazcdn.com/us/domino/e4715f0c-f365-44aa-bdc9-08de28345c0f_PH-96-70.png" alt="Delivery 3" className="h-6 w-auto bg-white rounded shadow-sm border border-gray-100" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-2">
                  <span className="text-gray-600 text-sm font-medium whitespace-nowrap">Verified by:</span>
                  <div className="flex items-center space-x-2">
                    <img src="https://img.lazcdn.com/g/tps/tfs/TB1lbmoqYr1gK0jSZR0XXbP8XXa-340-200.png" alt="Lazada Guarantee" className="h-6 w-auto bg-white rounded shadow-sm border border-gray-100" />
                    <img src="https://img.lazcdn.com/g/tps/tfs/TB1jyJMv.H1gK0jSZSyXXXtlpXa-184-120.png" alt="Lazada Secure Payment" className="h-6 w-auto bg-white rounded shadow-sm border border-gray-100" />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods Section - Same line as Follow Us in Desktop View */}
            <div className="hidden lg:block -mt-20">
              <div className="flex flex-col lg:flex-row justify-end items-center gap-4 lg:gap-12">
                {/* Payment Methods */}
                <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3">
                  <span className="text-gray-600 text-sm font-medium whitespace-nowrap">We Accept:</span>
                  <div className="flex items-center space-x-2">
                    <img src="https://img.lazcdn.com/us/domino/92e4b5da-14a4-4f22-a72b-6334933196ff_PH-117-70.png" alt="Visa" className="h-6 lg:h-7 w-auto bg-white rounded px-1 py-0.5 shadow-sm" />
                    <img src="https://img.lazcdn.com/us/domino/2cd27cdf-a067-4ca6-a117-3a9232b058b3_PH-63-48.png" alt="Mastercard" className="h-6 lg:h-7 w-auto bg-white rounded px-1 py-0.5 shadow-sm" />
                    <img src="https://img.lazcdn.com/us/domino/df528871-ca3b-49ae-8338-2f23fc7bdc60_PH-42-42.png" alt="AMEX" className="h-6 lg:h-7 w-auto bg-white rounded px-1 py-0.5 shadow-sm" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 lg:h-7 w-auto bg-white rounded px-1 py-0.5 shadow-sm object-contain" style={{ maxWidth: '50px' }} />
                  </div>
                </div>
                
                {/* Delivery Services */}
                <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3">
                  <span className="text-gray-600 text-sm font-medium whitespace-nowrap">Delivery Services:</span>
                  <div className="flex items-center space-x-2">
                    <img src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01md1Up71hMVCAxe2HZ_!!6000000004263-2-tps-96-70.png" alt="Delivery 1" className="h-6 lg:h-7 w-auto bg-white rounded shadow-sm border border-gray-100" />
                    <img src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01WNUpFq1JZjrZz6erP_!!6000000001043-2-tps-96-70.png" alt="Delivery 2" className="h-6 lg:h-7 w-auto bg-white rounded shadow-sm border border-gray-100" />
                    <img src="https://img.lazcdn.com/us/domino/e4715f0c-f365-44aa-bdc9-08de28345c0f_PH-96-70.png" alt="Delivery 3" className="h-6 lg:h-7 w-auto bg-white rounded shadow-sm border border-gray-100" />
                  </div>
                </div>
                
                {/* Verified By */}
                <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3">
                  <span className="text-gray-600 text-sm font-medium whitespace-nowrap">Verified by:</span>
                  <div className="flex items-center space-x-2">
                    <img src="https://img.lazcdn.com/g/tps/tfs/TB1lbmoqYr1gK0jSZR0XXbP8XXa-340-200.png" alt="Lazada Guarantee" className="h-6 lg:h-7 w-auto bg-white rounded shadow-sm border border-gray-100" />
                    <img src="https://img.lazcdn.com/g/tps/tfs/TB1jyJMv.H1gK0jSZSyXXXtlpXa-184-120.png" alt="Lazada Secure Payment" className="h-6 lg:h-7 w-auto bg-white rounded shadow-sm border border-gray-100" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-300 mt-10 pt-8">
              <div className="flex flex-col gap-6">
                {/* Copyright */}
                <div className="text-center">
                  <p className="text-gray-500 text-sm">
                    © 2025 Jumpstart E-commerce. All rights reserved. | Your online destination for style and fashion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Try Our App Modal */}
      {showAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-white rounded-2xl shadow-2xl border border-orange-200 p-6 w-full max-w-sm mx-auto">
            {/* Close Button */}
            <button 
              onClick={() => setShowAppModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <span className="font-bold text-gray-800 text-xl">TRY OUR APP</span>
              </div>
              <div className="bg-yellow-400 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">★ 4.8 Rated</div>
              <div className="text-base text-gray-700 font-medium mb-4">Get the Jumpstart app for exclusive deals & free shipping</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-400 via-orange-400 to-pink-500 rounded-xl p-4 mb-4">
              <div className="grid grid-cols-1 gap-3 text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-white rounded-xl p-2">
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M9 16h6" /></svg>
                  </div>
                  <span className="font-semibold text-base">FREE SHIPPING</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white rounded-xl p-2">
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="font-semibold text-base">EXCLUSIVE VOUCHERS</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-3 w-full">
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://jumpstart-app.com" alt="QR Code" className="w-16 h-16" />
                </div>
                <div className="flex flex-col gap-2 justify-center flex-1">
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm shadow border border-gray-200 transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10zm-5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3-4V7H9v6h6z"/></svg>
                    App Store
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm shadow border border-gray-200 transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.7 9.3l-6.4-6.4C10.9 2.3 10.5 2 10 2c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1 .5 0 .9-.3 1.3-.7l6.4-6.4c.4-.4.4-1 0-1.4z"/></svg>
                    Google Play
                  </a>
                </div>
              </div>
              <div className="text-xs text-gray-500 text-center">Download the app now by scanning the QR code</div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  )
}

export default Home
