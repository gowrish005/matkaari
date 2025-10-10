import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Coffee, Pizza, Utensils, Popcorn } from 'lucide-react'

const Menu = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const menuItems = [
    {
      name: 'Exquisite Teas',
      icon: Coffee,
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      name: 'Kulhad Pizza',
      icon: Pizza,
      gradient: 'from-red-400 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50'
    },
    {
      name: 'Pasta',
      icon: Utensils,
      gradient: 'from-yellow-400 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50'
    },
    {
      name: 'Delectable Munchies',
      icon: Popcorn,
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ]

  return (
    <section id="menu" className="py-20 md:py-32 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm text-orange-600 rounded-full text-sm font-semibold">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            OUR MENU
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exquisite range served in traditional kulhads
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative bg-gradient-to-br ${item.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                {/* Decorative circle */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-800">
                    {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl">
            <span className="text-4xl">🏺</span>
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-800">
                Every Dish Served in Traditional Kulhads
              </p>
              <p className="text-sm text-gray-600">
                Celebrating the rich heritage of earthenware
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu
