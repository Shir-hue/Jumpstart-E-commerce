import BackToTopButton from '../components/BackToTopButton';

function initialsDataUrl(name, bgColor = '#E8F1FF', fgColor = '#1E3A8A') {
  const initials = name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='100%' height='100%' fill='${bgColor}'/><text x='50%' y='50%' dy='.08em' font-family='Inter, Roboto, Helvetica, Arial, sans-serif' font-size='140' text-anchor='middle' fill='${fgColor}'>${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 pt-6 pb-16 lg:pb-6">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-50 text-gray-900 py-8 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 lg:mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent">Jumpstart</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Your premier fashion destination with 750 stores nationwide, bringing you the latest trends and styles with intelligent shopping experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4 lg:mb-6">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  <strong>Jumpstart Fashion Retailer</strong> was founded with a vision to make fashion accessible, affordable, and inspiring for everyone. Since our inception, we've grown to become a nationwide fashion destination with 750 stores across the country.
                </p>
                <p>
                  Our commitment to excellence drives us to constantly innovate and improve the shopping experience. From carefully curated collections to personalized recommendations, we use cutting-edge technology to help you discover your perfect style.
                </p>
                <p className="hidden lg:block">
                  At Jumpstart, we believe fashion is more than just clothing - it's about expressing your unique personality and feeling confident in your own skin. That's why we offer diverse styles for every taste and occasion, backed by exceptional customer service.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl lg:shadow-2xl border border-blue-100">
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-orange-300 rounded-full"></div>
                    <div className="h-1.5 sm:h-2 lg:h-3 bg-blue-200 rounded flex-1"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                    <div className="h-12 sm:h-16 lg:h-20 bg-blue-200 rounded-lg"></div>
                    <div className="h-12 sm:h-16 lg:h-20 bg-orange-200 rounded-lg"></div>
                  </div>
                  <div className="space-y-1 lg:space-y-2">
                    <div className="h-1 sm:h-1.5 lg:h-2 bg-orange-200 rounded w-full"></div>
                    <div className="h-1 sm:h-1.5 lg:h-2 bg-blue-200 rounded w-3/4"></div>
                    <div className="h-1 sm:h-1.5 lg:h-2 bg-orange-100 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4 lg:mb-6">Our Mission & Values</h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-3xl mx-auto px-2 sm:px-0">
              We're committed to making fashion accessible, sustainable, and personalized for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl border border-blue-100 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4">Innovation First</h3>
              <p className="text-blue-700 text-sm sm:text-base">
                Leading the fashion industry with cutting-edge technology and AI-powered recommendations that understand your personal style.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl border border-orange-100 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-orange-700 mb-3 sm:mb-4">Customer Obsessed</h3>
              <p className="text-orange-700 text-sm sm:text-base">
                Every decision we make is driven by our commitment to creating exceptional customer experiences.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl border border-purple-100 transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-purple-700 mb-3 sm:mb-4">Sustainability</h3>
              <p className="text-purple-700 text-sm sm:text-base">
                Building a responsible fashion future with ethical practices and sustainable technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4 lg:mb-6">Leadership Team</h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-700 px-2 sm:px-0">
              Meet the visionaries leading Jumpstart's fashion revolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: "Sarah Chen", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108755-2616b2e0eee5?w=400" },
              { name: "Marcus Rodriguez", role: "CTO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
              { name: "Emily Johnson", role: "Head of AI", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400" }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4 border-2 sm:border-4 border-blue-100 group-hover:border-orange-200 transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      // Use a real portrait fallback for the CEO; others use initials SVG
                      if (member.name === 'Sarah Chen') {
                        e.target.src = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                      } else {
                        e.target.src = initialsDataUrl(member.name);
                      }
                    }}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-orange-600 font-medium text-sm sm:text-base">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  )
}

export default About
