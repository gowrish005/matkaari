import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Welcome to Matkaari
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                Welcome to Matkaari, a unique culinary experience that combines the earthy charm of traditional Indian pottery with a delectable array of flavors and creative activities. At Matkaari, we have redefined the way you savor your favorite dishes. We believe in celebrating the rich heritage of earthenware, and our dishes are served in beautifully crafted clay cups, or "matkas," adding an authentic touch to your dining experience.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl border border-orange-100">
              <p className="text-gray-700 leading-relaxed">
                Nestled in the heart of the city, Matkaari is a cozy café that specializes in exquisite teas, kulhad pizza, pasta, and delectable munchies. Each visit is a culinary journey, promising an unforgettable taste experience.
              </p>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl">🏺</span>
              </div>
              {/* Floating elements */}
              <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-orange-600">Eco-Friendly</span>
              </div>
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-pink-600">Traditional</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
