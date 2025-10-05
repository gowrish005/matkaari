import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  const testimonials = [
    {
      name: "Masoom Bakshi",
      subtitle: "Food Blogger",
      rating: 5,
      text: "A cozy cafe with friendly hosts and delicious food. The matka theme decor is stunning! You can even paint while waiting for your order. The puri sabzi was excellent.",
      emoji: "👤"
    },
    {
      name: "Priya Sharma",
      subtitle: "Regular Customer",
      rating: 5,
      text: "The kulhad chai is absolutely authentic! Takes me back to childhood. The earthenware serving adds a special touch. Staff is friendly and prices are very reasonable.",
      emoji: "☕"
    },
    {
      name: "Rahul Verma",
      subtitle: "Food Enthusiast",
      rating: 5,
      text: "Hidden gem! The pizza in kulhad concept is brilliant and eco-friendly. Perfect for Instagram photos and the food quality is top-notch. Highly recommended!",
      emoji: "🍕"
    }
  ]

  const features = [
    { emoji: '🏺', label: 'Unique Matka Theme' },
    { emoji: '😋', label: 'Delicious Food' },
    { emoji: '🎨', label: 'Paint & Dine' },
    { emoji: '🤗', label: 'Warm Vibes' },
    { emoji: '💰', label: 'Great Value' },
    { emoji: '⚡', label: 'Quick Service' },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFBF5' }}>
      {/* Decorative Matka Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-10 left-10 text-9xl">🏺</div>
        <div className="absolute bottom-20 right-20 text-9xl">🏺</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">🏺</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <span className="inline-block px-6 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg" style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}>
              ⭐ CUSTOMER LOVE
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold" style={{ color: '#B7410E' }}>
            What Our Guests Say
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#0E1326', opacity: 0.7 }}>
            Real experiences from the Matkaari family
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative rounded-3xl p-8"
              style={{ 
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8ED 100%)',
                boxShadow: '0 20px 60px rgba(183, 65, 14, 0.1)',
                border: '1px solid #E4A93E30'
              }}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-tr-3xl rounded-bl-full" style={{ backgroundColor: '#E4A93E', opacity: 0.1 }} />
              
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15, type: "spring", stiffness: 150 }}
                className="mb-6"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md" style={{ backgroundColor: '#E4A93E' }}>
                  <Quote className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                </div>
              </motion.div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.15 + i * 0.05, type: "spring" }}
                  >
                    <Star className="w-5 h-5 fill-current" style={{ color: '#E4A93E' }} />
                  </motion.div>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base leading-relaxed mb-6 font-medium" style={{ color: '#0E1326', opacity: 0.85 }}>
                "{testimonial.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-3 pt-6" style={{ borderTop: '2px solid #E4A93E30' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-md" style={{ backgroundColor: '#B7410E20' }}>
                  {testimonial.emoji}
                </div>
                <div>
                  <p className="font-heading font-bold text-lg" style={{ color: '#0E1326' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm font-medium" style={{ color: '#B7410E' }}>
                    {testimonial.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-2xl p-5 text-center shadow-md"
              style={{ 
                background: index % 2 === 0 
                  ? 'linear-gradient(135deg, #E4A93E 0%, #D49A35 100%)'
                  : 'linear-gradient(135deg, #B7410E 0%, #A13808 100%)',
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                className="text-4xl mb-2"
              >
                {feature.emoji}
              </motion.div>
              <p className="text-xs font-bold" style={{ color: '#FFFFFF' }}>
                {feature.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <motion.div 
            className="inline-flex items-center space-x-4 px-10 py-5 rounded-full shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8ED 100%)',
              border: '2px solid #E4A93E'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" style={{ color: '#E4A93E' }} />
              ))}
            </div>
            <div className="h-10 w-px" style={{ backgroundColor: '#E4A93E50' }} />
            <div className="text-left">
              <p className="text-3xl font-bold font-heading" style={{ color: '#B7410E' }}>4.8</p>
              <p className="text-xs font-semibold" style={{ color: '#0E1326', opacity: 0.7 }}>Google Rating</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
