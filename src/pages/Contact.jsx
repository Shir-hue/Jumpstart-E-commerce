import { useState } from 'react'
import BackToTopButton from '../components/BackToTopButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white pt-6 pb-16 lg:pb-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Have questions about our AI-powered fashion platform? We'd love to hear from you. 
            Reach out and let's start a conversation.
          </p>
        </div>
      </div>

      <div className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-4 sm:pl-5 pr-2 py-3 border border-gray-200 bg-white !text-black placeholder-gray-400 rounded-xl shadow-md focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-200 transition-all text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-4 sm:pl-5 pr-2 py-3 border border-gray-200 bg-white !text-black placeholder-gray-400 rounded-xl shadow-md focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-200 transition-all text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-4 sm:pl-5 pr-2 py-3 border border-gray-200 bg-white !text-black placeholder-gray-400 rounded-xl shadow-md focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-200 transition-all text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="ai">AI Technology Questions</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Customer Support</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-4 sm:pl-5 pr-2 py-3 border border-gray-200 bg-white !text-black placeholder-gray-400 rounded-xl shadow-md focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-200 transition-all text-base resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Headquarters</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      123 Innovation Drive<br />
                      Tech Valley, CA 94043<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Customer Support: <a href="tel:+1-800-JUMPSTART" className="text-blue-600 hover:underline break-all">+1 (800) JUMPSTART</a><br />
                      Business Inquiries: <a href="tel:+1-800-555-0123" className="text-blue-600 hover:underline">+1 (800) 555-0123</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.703a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      General: <a href="mailto:hello@jumpstart.ai" className="text-blue-600 hover:underline break-all">hello@jumpstart.ai</a><br />
                      Support: <a href="mailto:support@jumpstart.ai" className="text-blue-600 hover:underline break-all">support@jumpstart.ai</a><br />
                      Press: <a href="mailto:press@jumpstart.ai" className="text-blue-600 hover:underline break-all">press@jumpstart.ai</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 sm:mt-12">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {/* Twitter */}
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300 active:scale-95" aria-label="Twitter">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </button>
                  {/* LinkedIn */}
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300 active:scale-95" aria-label="LinkedIn">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    </svg>
                  </button>
                  {/* Instagram */}
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300 active:scale-95" aria-label="Instagram">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                  {/* Facebook */}
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300 active:scale-95" aria-label="Facebook">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                    </svg>
                  </button>
                  {/* YouTube */}
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300 active:scale-95" aria-label="YouTube">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </button>
                  {/* TikTok */}
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center transition-all duration-150 hover:bg-gray-300 focus:bg-gray-300 active:scale-95" aria-label="TikTok">
                    <img src="https://cdn-icons-png.flaticon.com/128/15713/15713394.png" alt="TikTok" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Back to Top Button */}
          <BackToTopButton />
        </div>
      </div>
    </div>
  )
}

export default Contact
