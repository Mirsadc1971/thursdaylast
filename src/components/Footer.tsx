import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Manage369</span>
                <span className="text-sm text-blue-300 font-medium">Chicago Property Management</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
              Chicago's most trusted property management company serving <strong className="text-white">50+ properties with over 2,450+ doors</strong> across 100+ communities since 2007.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-primary-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-primary-400">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+12246475621" className="hover:text-primary-400 transition-colors">(224) 647-5621</a>
                </div>
              </div>

              <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-secondary-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-secondary-400">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:service@manage369.com" className="hover:text-secondary-400 transition-colors">service@manage369.com</a>
                </div>
              </div>

              <div className="flex items-start text-gray-300">
                <div className="w-10 h-10 bg-accent-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-accent-400">📍</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-white">Chicago Office</p>
                    <p className="text-sm">5107 N Western Ave, Suite 1S<br />Chicago, IL 60625</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Glenview Office</p>
                    <p className="text-sm">1400 Patriot Boulevard 357<br />Glenview, IL 60026</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-gray-300">
                <div className="w-10 h-10 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-400">🕒</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Business Hours</p>
                  <p className="text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/condominium-management" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></span>
                  Condominium Management
                </Link>
              </li>
              <li>
                <Link to="/services/townhome-management" className="text-gray-300 hover:text-secondary-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 group-hover:bg-secondary-400 transition-colors"></span>
                  Townhome Management
                </Link>
              </li>
              <li>
                <Link to="/services/hoa-management" className="text-gray-300 hover:text-accent-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:bg-accent-400 transition-colors"></span>
                  HOA Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/service-areas" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/locate-us" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Locate Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Professional Certifications */}
      <div className="border-t border-gray-800">
        <div className="container-max py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Professional Certifications & Memberships</h3>
            <div className="flex justify-center items-center space-x-16">
              <div className="group">
                <a href="https://www.caionline.org" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
                  <div className="bg-white bg-opacity-10 p-6 rounded-2xl mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                    <img 
                      src="/CAI National.png" 
                      alt="CAI National - Community Associations Institute Member" 
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">CAI National Member</span>
                </a>
              </div>
              <div className="group">
                <a href="https://www.idfpr.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
                  <div className="bg-white bg-opacity-10 p-6 rounded-2xl mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                    <img 
                      src="/IDFPR_circular_logo.png" 
                      alt="Illinois Department of Financial and Professional Regulation Licensed" 
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">IDFPR Licensed</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 border-t-4 border-red-500">
        <div className="container-max py-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-red-800 bg-opacity-50 px-6 py-3 rounded-full mb-4">
              <span className="text-2xl mr-3">🚨</span>
              <span className="text-red-100 font-bold text-lg">24/7 EMERGENCY HOTLINE</span>
            </div>
            <div className="mb-4">
              <a href="tel:224-647-5621" className="text-4xl font-bold text-white hover:text-red-200 transition-colors duration-200 inline-block hover:scale-105 transform transition-transform">
                (224) 647-5621
              </a>
            </div>
            <p className="text-red-200 text-sm max-w-md mx-auto">
              For life-threatening emergencies, call 911 first, then contact Manage369
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container-max py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © {currentYear} Manage369 - Chicago's Premier Property Management Company. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Licensed Chicago Property Management Company | IDFPR Licensed | CAI Member | Serving Chicago Since 2007
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</Link>
              <Link to="/legal-disclaimers" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Legal Disclaimers</Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Accessibility</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer