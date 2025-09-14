import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const isActive = (path) => {
    return location.pathname === path
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // This will handle search functionality 
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      {/* Top Banner */}
      <div className="bg-gray-100 text-gray-700 text-center py-2.5 text-sm font-medium">
        <p className="hidden md:block">✨ Free shipping on orders over $50 | New Arrivals Daily | 30-Day Returns</p>
        <p className="md:hidden text-xs">✨ Free shipping over $50 | 30-Day Returns</p>
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 lg:space-x-3 hover:opacity-90 transition-all duration-300">
                <div className="w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <span className="text-white font-bold text-lg lg:text-xl">J</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl lg:text-2xl font-bold text-gray-900">
                    Jumpstart
                  </span>
                  <div className="text-xs text-gray-500 -mt-1 font-medium">Fashion Retailer</div>
                </div>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="flex w-full bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search in Jumpstart"
                    className="flex-1 bg-white !text-black placeholder-gray-400 pl-5 pr-2 py-3 focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-200 transition-all text-base border-0"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 flex items-center justify-center transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    aria-label="Search"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                      <line x1="18" y1="18" x2="15.5" y2="15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section - Navigation & Actions */}
            <div className="flex items-center space-x-6">
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                <Link 
                  to="/" 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive('/') 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200 shadow-sm' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/products" 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive('/products') 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200 shadow-sm' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  Products
                </Link>
                <Link 
                  to="/about" 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive('/about') 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200 shadow-sm' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive('/contact') 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200 shadow-sm' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  Contact
                </Link>
              </nav>

              {/* Account Section */}
              <div className="flex items-center space-x-2 lg:space-x-4">
                {/* Wishlist */}
                <button className="relative p-1.5 lg:p-2 text-gray-600 hover:text-blue-600 transition-colors group">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-xs shadow-lg">3</span>
                </button>

                {/* Shopping Cart */}
                <button className="relative p-1.5 lg:p-2 text-gray-600 hover:text-blue-600 transition-colors group">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-xs shadow-lg">2</span>
                </button>

                {/* User Account - Hide on small screens */}
                <div className="hidden md:block relative group">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-500 font-medium">Hello, User</div>
                      <div className="text-sm font-medium">Account</div>
                    </div>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">My Profile</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Orders</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">Settings</a>
                      <hr className="my-1 border-gray-200" />
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors">Sign Out</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-4 pr-12 py-3 border-2 border-gray-300 bg-white text-gray-900 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder-gray-500 text-sm"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <span className="text-xl font-bold text-gray-900">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* User Account Section - Priority Position */}
            <div className="px-4 py-4 bg-blue-50 border-b border-blue-100">
              <div className="flex items-center space-x-3 px-4 py-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Hello, User</div>
                  <div className="text-sm text-gray-600">Welcome back!</div>
                </div>
              </div>
            </div>

            {/* Quick Actions - Shopping Features First */}
            <div className="px-4 py-4 border-b border-gray-200">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center justify-center space-x-2 px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl">
                  <div className="relative">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">2</span>
                  </div>
                  <span className="text-sm font-medium text-orange-700">Cart</span>
                </div>
                <div className="flex items-center justify-center space-x-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl">
                  <div className="relative">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">3</span>
                  </div>
                  <span className="text-sm font-medium text-red-700">Wishlist</span>
                </div>
              </div>
            </div>

            {/* Main Navigation Links - Home Priority */}
            <div className="px-4 py-6 space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                <span className="text-2xl">🏠</span>
                <div className="flex-1">
                  <span>Home</span>
                  <div className="text-xs text-gray-500">Latest deals & trending</div>
                </div>
              </Link>
              <Link 
                to="/products" 
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                  isActive('/products') 
                    ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                <span className="text-2xl">🛍️</span>
                <div className="flex-1">
                  <span>Shop Now</span>
                  <div className="text-xs text-gray-500">Browse all products</div>
                </div>
              </Link>
              
              <hr className="my-4 border-gray-200" />
              
              {/* Account & Support Section */}
              <div className="space-y-2">
                <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300 rounded-xl">
                  <span className="text-xl">�</span>
                  <div className="flex-1">
                    <span>My Orders</span>
                    <div className="text-xs text-gray-500">Track your purchases</div>
                  </div>
                </a>
                <Link 
                  to="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive('/about') 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  <span className="text-xl">ℹ️</span>
                  <span>About Us</span>
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive('/contact') 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  <span className="text-xl">📞</span>
                  <span>Contact & Support</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 lg:hidden">
        <div className="flex justify-around items-center py-2">
          <Link to="/" className={`flex flex-col items-center text-xs py-1 px-2 rounded-lg transition-colors ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-blue-600'}`}>
            <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <Link to="/products" className={`flex flex-col items-center text-xs py-1 px-2 rounded-lg transition-colors ${isActive('/products') ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-blue-600'}`}>
            <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Shop
          </Link>
          <button className="flex flex-col items-center text-xs py-1 px-2 rounded-lg transition-colors text-gray-500 hover:text-blue-600 relative">
            <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18" />
            </svg>
            <span className="absolute -top-1 right-1 bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">2</span>
            Cart
          </button>
          <Link to="/contact" className={`flex flex-col items-center text-xs py-1 px-2 rounded-lg transition-colors ${isActive('/contact') ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-blue-600'}`}>
            <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Support
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
