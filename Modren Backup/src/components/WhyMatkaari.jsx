import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Recycle, TrendingUp, Award, Sparkles } from 'lucide-react'

const WhyMatkaari = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-matkaari" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Why Matkaari?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Recycle className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">
                  Sustainable & Creative
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We embrace a distinctive concept of reusing kulhads for planting and painting, ensuring a sustainable and creative experience for our customers, free of charge.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">
                  High ROI & Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With low investment, high ROI, a hassle-free franchise operation, and unwavering support from Matkaari, you can embark on a rewarding business journey with us.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* No Royalty Fees Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 px-8 md:px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
            <span className="text-xl md:text-2xl font-bold text-white">
              No Royalty Fees
            </span>
            <Sparkles className="w-6 h-6 text-white animate-pulse animation-delay-1000" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          </div>
        </motion.div>

        {/* Additional benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: '🌱', label: 'Eco-Friendly' },
            { icon: '🎨', label: 'Creative' },
            { icon: '💰', label: 'Low Investment' },
            { icon: '🚀', label: 'High Returns' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="text-sm font-semibold text-gray-700">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyMatkaari
