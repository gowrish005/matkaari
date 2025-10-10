import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm text-orange-600 rounded-full text-sm font-semibold">
            Customer Love
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Stars */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
              "A cozy cafe with friendly hosts, delicious food, and fun activities, From the moment you step inside, you'll feel welcomed by the warm atmosphere and cool decor. A very nice cafe at Bagular road I tried recently and liked. The ambiance is very nice. They have used matkas or pots in their theme and throughout their decor. The seating is nice and you can even do painting while you wait for your order. I tried the puri sabzi and it was nice, quite different than usual. The jhal muri was ok but it was super spicy. To end with the Rabdi was good. Pricing is decent and portion size is good. Service is quick."
            </p>

            {/* Reviewer Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                👤
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-lg text-gray-800">
                  Masoom Bakshi
                </p>
                <p className="text-gray-600">
                  Thefoodiebites Yazzi
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customer Love Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            { emoji: '🏺', label: 'Unique Experience' },
            { emoji: '😋', label: 'Delicious Food' },
            { emoji: '🎨', label: 'Creative Activities' },
            { emoji: '🤗', label: 'Warm Atmosphere' },
            { emoji: '💰', label: 'Great Value' },
            { emoji: '⚡', label: 'Quick Service' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-2">{item.emoji}</div>
              <p className="text-sm font-semibold text-gray-700">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
