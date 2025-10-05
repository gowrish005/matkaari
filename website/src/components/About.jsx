import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}>
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold" style={{ color: '#B7410E' }}>
            Welcome to Matkaari
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right Visual - Shows FIRST on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-96 rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="/about.jpg" 
                alt="Matkaari Cafe Experience" 
                className="w-full h-full object-cover"
              />
              {/* Floating elements */}
              <div className="px-4 py-2 rounded-full shadow-lg absolute top-10 right-10" style={{ backgroundColor: '#FFFFFF', color: '#B7410E' }}>
                <span className="text-sm font-semibold">Eco-Friendly</span>
              </div>
              <div className="px-4 py-2 rounded-full shadow-lg absolute bottom-10 left-10" style={{ backgroundColor: '#FFFFFF', color: '#B7410E' }}>
                <span className="text-sm font-semibold">Traditional</span>
              </div>
            </div>
          </motion.div>

          {/* Left Content - Shows SECOND on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="prose prose-lg">
              <p className="leading-relaxed" style={{ color: '#0E1326' }}>
                Welcome to Matkaari, a unique culinary experience that combines the earthy charm of traditional Indian pottery with a delectable array of flavors and creative activities. At Matkaari, we have redefined the way you savor your favorite dishes. We believe in celebrating the rich heritage of earthenware, and our dishes are served in beautifully crafted clay cups, or "matkas," adding an authentic touch to your dining experience.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border" style={{ backgroundColor: '#E4A93E', borderColor: '#B7410E' }}>
              <p className="leading-relaxed" style={{ color: '#FFFFFF' }}>
                Nestled in the heart of the city, Matkaari is a cozy café that specializes in exquisite teas, kulhad pizza, pasta, and delectable munchies. Each visit is a culinary journey, promising an unforgettable taste experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
