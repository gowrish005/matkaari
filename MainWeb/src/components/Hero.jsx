import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Award, ArrowRight, ChevronDown, Image } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/Hero2.jpg")' }}></div>
      </div>

      {/* Decorative Blurred Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: '#E4A93E', filter: 'blur(100px)' }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: '#B7410E', filter: 'blur(100px)' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Franchise Badge / Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              {/* Logo for Mobile */}
              <div className="md:hidden flex justify-center lg:justify-start">
                <img 
                  src="/Hero-logo.png" 
                  alt="Matkaari Logo" 
                  className="h-24 w-auto object-contain"
                />
              </div>
              
              {/* Badge for Desktop */}
              <span className="hidden md:inline-block px-6 py-3 rounded-full text-sm font-bold tracking-wider shadow-xl" 
                style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}>
                🚀 FRANCHISE OPPORTUNITY
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight"
              style={{ color: '#B7410E' }}
            >
              Own a Thriving <span className="block mt-2" style={{ color: '#E4A93E' }}>Matkaari Cafe</span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed"
              style={{ color: '#0E1326' }}
            >
              Join our growing family with a unique, <span className="font-bold" style={{ color: '#E4A93E' }}>chefless cafe model</span>. Achieve a full Return on Investment in just <span className="font-bold" style={{ color: '#B7410E' }}>15-18 months</span>.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                onClick={() => scrollToSection('franchise-form')}
                className="group relative px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg shadow-2xl overflow-hidden w-full sm:w-auto"
                style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: '#B7410E' }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  <span className="hidden sm:inline">Book Your Free Consultation</span>
                  <span className="sm:hidden">Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>

              {/* Mini CTA - View Gallery */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                onClick={() => scrollToSection('gallery')}
                className="group px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                style={{ backgroundColor: '#FFFFFF', color: '#B7410E', border: '2px solid #E4A93E' }}
                whileHover={{ scale: 1.05, backgroundColor: '#FFFBF5' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Image className="w-4 h-4 md:w-5 md:h-5" />
                  <span>View Gallery</span>
                </span>
              </motion.button>
            </div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start pt-4"
            >
              {['₹3L Starting Investment', 'No Chef Required', 'Complete Training'].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs md:text-sm font-semibold" style={{ color: '#0E1326' }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E4A93E' }}></div>
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {/* ROI Card */}
            <div className="rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow" style={{ backgroundColor: '#FFFFFF', border: '2px solid #E4A93E' }}>
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#E4A93E' }}>
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold" style={{ color: '#E4A93E' }}>ROI Period</p>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#B7410E' }}>15-18</p>
                  <p className="text-xs md:text-sm" style={{ color: '#0E1326' }}>Months</p>
                </div>
              </div>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#0E1326' }}>
                Achieve full return on investment in record time with our proven model
              </p>
            </div>

            {/* Royalty Free Card */}
            <div className="rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow" style={{ backgroundColor: '#FFFFFF', border: '2px solid #B7410E' }}>
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#B7410E' }}>
                  <Award className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#FFFFFF' }} />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold" style={{ color: '#B7410E' }}>Royalty Free</p>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: '#B7410E' }}>6</p>
                  <p className="text-xs md:text-sm" style={{ color: '#0E1326' }}>Months</p>
                </div>
              </div>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#0E1326' }}>
                Zero royalty for your first 6 months. Build your business worry-free
              </p>
            </div>

            {/* Chefless Model Card - Spans Full Width */}
            <div className="rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow sm:col-span-2" style={{ backgroundColor: '#FFFFFF', border: '2px solid #E4A93E' }}>
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#E4A93E' }}>
                  <span className="text-2xl md:text-3xl">👨‍🍳</span>
                </div>
                <div className="flex-1">
                  <p className="text-base md:text-lg font-bold mb-1 md:mb-2" style={{ color: '#B7410E' }}>Chefless Cafe Model</p>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#0E1326' }}>
                    No need for expensive chefs. Our streamlined process allows any trained staff to create our entire menu perfectly
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Clickable */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => scrollToSection('franchise-form')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            scrollToSection('franchise-form')
          }
        }}
        tabIndex={0}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center hidden md:block cursor-pointer group"
        style={{ opacity: 1 }}
      >
        <p className="text-sm mb-2 font-semibold group-hover:text-opacity-80 transition-all" style={{ color: '#B7410E' }}>
          Scroll to explore
        </p>
        <div className="w-6 h-10 border-2 rounded-full mx-auto flex justify-center pt-2 group-hover:border-opacity-80 transition-all" style={{ borderColor: '#E4A93E' }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: '#B7410E' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
