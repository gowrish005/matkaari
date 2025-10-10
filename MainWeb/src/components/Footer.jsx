import React from 'react'
import { Heart, Instagram } from 'lucide-react'

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
    <footer className="text-white overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-heading font-bold" style={{ color: '#E5AA3F' }}>
              MATKAARI
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#FFFFFF' }}>
              A unique kulhad/pottery-themed café bringing authentic flavors and eco-friendly experiences to India.
            </p>
            <div className="text-xl font-bold" style={{ color: '#E4A93E' }}>
              WWW.MATKAARI.COM
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold" style={{ color: '#E4A93E' }}>Quick Links</h4>
            <ul className="space-y-2">
              {['hero', 'about', 'menu', 'franchise', 'testimonials', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="transition-colors capitalize"
                    style={{ color: '#FFFFFF' }}
                    onMouseEnter={(e) => e.target.style.color = '#E4A93E'}
                    onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
                  >
                    {link === 'hero' ? 'Home' : link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold" style={{ color: '#E4A93E' }}>Contact Us</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#FFFFFF' }}>
              <li className="flex items-start space-x-2">
                <span>📧</span>
                <a 
                  href="mailto:matkaari@matkaari.com" 
                  className="transition-colors"
                  style={{ color: '#FFFFFF' }}
                  onMouseEnter={(e) => e.target.style.color = '#E4A93E'}
                  onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
                >
                  matkaari@matkaari.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <a 
                  href="tel:+919148736660" 
                  className="transition-colors"
                  style={{ color: '#FFFFFF' }}
                  onMouseEnter={(e) => e.target.style.color = '#E4A93E'}
                  onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
                >
                  +91 9148736660
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>Bangalore</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>🌐</span>
                <a 
                  href="http://www.matkaari.com" 
                  className="transition-colors"
                  style={{ color: '#FFFFFF' }}
                  onMouseEnter={(e) => e.target.style.color = '#E4A93E'}
                  onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
                >
                  www.matkaari.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Instagram className="w-4 h-4 mt-0.5" style={{ color: '#E4A93E' }} />
                <a 
                  href="https://www.instagram.com/matkaari.official/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: '#FFFFFF' }}
                  onMouseEnter={(e) => e.target.style.color = '#E4A93E'}
                  onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
                >
                  @matkaari.official
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #E4A93E' }}>
          <p className="text-sm flex items-center justify-center space-x-2" style={{ color: '#FFFFFF' }}>
            <span>&copy; {new Date().getFullYear()} Matkaari. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 animate-pulse" style={{ color: '#B7410E', fill: '#B7410E' }} />
              <span>by Team Hell Craft</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
