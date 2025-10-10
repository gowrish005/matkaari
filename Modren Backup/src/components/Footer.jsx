import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-heading font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              MATKAARI
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A unique kulhad/pottery-themed café bringing authentic flavors and eco-friendly experiences to India.
            </p>
            <div className="text-xl font-bold text-orange-400">
              WWW.MATKAARI.COM
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['hero', 'about', 'menu', 'franchise', 'testimonials', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-300 hover:text-orange-400 transition-colors capitalize"
                  >
                    {link === 'hero' ? 'Home' : link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-white">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start space-x-2">
                <span>📧</span>
                <a href="mailto:matkaari@matkaari.com" className="hover:text-orange-400 transition-colors">
                  matkaari@matkaari.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <a href="tel:+919148736660" className="hover:text-orange-400 transition-colors">
                  +91 9148736660
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>Bangalore</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>🌐</span>
                <a href="http://www.matkaari.com" className="hover:text-orange-400 transition-colors">
                  www.matkaari.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
            <span>&copy; {new Date().getFullYear()} Matkaari. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
