import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#E4A93E' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/Hero-bg.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 text-center flex items-center min-h-[calc(100vh-80px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6 lg:space-y-8 w-full"
        >

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.5 }}
            className="flex justify-center relative"
          >
            <img 
              src="/Hero-logo.png" 
              alt="Matkaari Logo" 
              className="w-48 h-auto sm:w-56 md:w-64 lg:w-80 xl:w-96 drop-shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-500 relative z-10"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold relative"
            style={{ color: '#0E1326' }}
          >
            <span className="inline-block hover:animate-wiggle">M</span>
            <span className="inline-block hover:animate-wiggle" style={{ animationDelay: '0.1s' }}>A</span>
            <span className="inline-block hover:animate-wiggle" style={{ animationDelay: '0.2s' }}>T</span>
            <span className="inline-block hover:animate-wiggle" style={{ animationDelay: '0.3s' }}>K</span>
            <span className="inline-block hover:animate-wiggle" style={{ animationDelay: '0.4s' }}>A</span>
            <span className="inline-block hover:animate-wiggle" style={{ animationDelay: '0.5s' }}>A</span>
            <span className="inline-block hover:animate-wiggle" style={{ animationDelay: '0.6s' }}>R</span>
            <span className="inline-block hover:animate-wiggle" style={{ animationDelay: '0.7s' }}>I</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold animate-pulse-scale"
            style={{ color: '#0E1326' }}
          >
            EVERY MATKA HAS A STORY!
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4"
            style={{ color: '#0E1326' }}
          >
            A unique culinary experience combining traditional Indian pottery with delectable flavors
          </motion.p>

          {/* Website Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl font-semibold"
            style={{ color: '#0E1326' }}
          >
            WWW.MATKAARI.COM
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-6 lg:pt-8"
          >
            <motion.button
              onClick={() => scrollToSection('franchise')}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold overflow-hidden text-sm sm:text-base"
              style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(183, 65, 14, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#B7410E] via-[#E5AA3F] to-[#B7410E]"
                animate={{ 
                  x: ['-100%', '100%'],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ opacity: 0.3 }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                Explore Franchise
                <motion.span
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#E5AA3F' }} />
                </motion.span>
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('menu')}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold overflow-hidden text-sm sm:text-base border-3"
              style={{ backgroundColor: '#FFFFFF', color: '#B7410E', borderColor: '#B7410E', borderWidth: '3px' }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#B7410E',
                color: '#FFFFFF',
                boxShadow: "0 20px 40px -10px rgba(183, 65, 14, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="absolute inset-0 bg-[#B7410E]"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10">View Menu</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="#0E1326" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
