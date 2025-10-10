import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Eye, Target } from 'lucide-react'

const VisionMission = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="vision-mission" className="py-20 md:py-32 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm text-orange-600 rounded-full text-sm font-semibold">
            Our Direction
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Vision & Mission
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
                Vision
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                At Matkaari, we aspire to craft indelible memories with each visit, where the flavors of our exquisite teas, kulhad pizza, pasta, and delectable munchies linger in your heart.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl">
                <Target className="w-8 h-8 text-pink-600" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
                Mission
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our mission is to spread our unique eco-friendly kulhad painting concept throughout India, blending art and sustainability for a delightful experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
