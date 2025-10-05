import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const VisionMission = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="vision-mission" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}>
            Our Direction
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold" style={{ color: '#B7410E' }}>
            Vision & Mission
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-30 group-hover:scale-150 transition-transform duration-500" style={{ backgroundColor: '#E4A93E' }}></div>
            
            <div className="relative space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl" style={{ backgroundColor: '#E4A93E' }}>
                <Eye className="w-8 h-8" style={{ color: '#FFFFFF' }} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold" style={{ color: '#0E1326' }}>
                Vision
              </h3>
              
              <p className="leading-relaxed" style={{ color: '#0E1326' }}>
                At Matkaari, we aspire to craft indelible memories with each visit, where the flavors of our exquisite teas, kulhad pizza, pasta, and delectable munchies linger in your heart.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-30 group-hover:scale-150 transition-transform duration-500" style={{ backgroundColor: '#B7410E' }}></div>
            
            <div className="relative space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl" style={{ backgroundColor: '#B7410E' }}>
                <Target className="w-8 h-8" style={{ color: '#FFFFFF' }} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold" style={{ color: '#0E1326' }}>
                Mission
              </h3>
              
              <p className="leading-relaxed" style={{ color: '#0E1326' }}>
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
