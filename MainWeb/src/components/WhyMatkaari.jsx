import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChefHat, Palette, TrendingUp, Handshake, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WhyMatkaari = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const containerRef = useRef(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  const [currentIndex, setCurrentIndex] = useState(0)

  const advantages = [
    {
      icon: TrendingUp,
      emoji: '📈',
      title: 'A Fast & Profitable Return on Investment',
      description: 'Our efficient model is designed for profitability. Our partners typically achieve a full Return on Investment (ROI) within an impressive 15 to 18 months.',
      disclaimer: 'This is an estimated projection. Actual ROI can vary based on location, operational efficiency, and other factors.',
      color: '#E4A93E',
      gradient: 'linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 100%)',
      popular: true
    },
    {
      icon: Palette,
      emoji: '🎨',
      title: 'The "Kulhad Kreation"™️ Experience',
      description: 'We offer more than a meal; we offer a memorable experience. Customers enjoy our food in eco-friendly kulhads and can then paint them for free to take home or display in the cafe. This drives community, engagement, and powerful user-generated content for social media.',
      color: '#B7410E',
      gradient: 'linear-gradient(135deg, #FFFFFF 0%, #FFE8DD 100%)'
    },
    {
      icon: ChefHat,
      emoji: '👨‍🍳',
      title: 'Simplified Operations: Our Easy-to-Run Chefless Model',
      description: 'No need for experienced chefs! Our streamlined recipes and processes allow any staff member to create our entire menu perfectly. This lowers salary costs, simplifies hiring, and guarantees consistent quality. We provide complete training.',
      color: '#E4A93E',
      gradient: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8ED 100%)'
    },
    {
      icon: Handshake,
      emoji: '🤝',
      title: 'A True Partnership: Our Franchisee-First Royalty',
      description: 'We are fully invested in your launch success. That\'s why we offer a 100% royalty-free period for your first 6 months of operation. After this initial period, our franchisee-first policy continues: you only pay royalty in months where your sales exceed ₹1.5 Lakhs.',
      color: '#B7410E',
      gradient: 'linear-gradient(135deg, #FFFFFF 0%, #FFF1F2 100%)'
    },
    {
      icon: Sparkles,
      emoji: '✨',
      title: 'Signature Kulhad Service & Ever-Evolving Menu',
      description: 'Our unique serving style in kulhads creates an unforgettable dining experience. Combined with our dynamic menu that keeps customers excited and coming back for more, we ensure your cafe stays fresh and relevant.',
      color: '#E4A93E',
      gradient: 'linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 100%)'
    }
  ]

  const scroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current
      const cardWidth = 620 // Card width + gap
      const maxScroll = container.scrollWidth - container.clientWidth
      
      if (direction === 'left') {
        // If at the beginning, jump to the end
        if (container.scrollLeft <= 0) {
          container.scrollTo({
            left: maxScroll,
            behavior: 'smooth'
          })
        } else {
          container.scrollTo({
            left: container.scrollLeft - cardWidth,
            behavior: 'smooth'
          })
        }
      } else {
        // If at the end, jump to the beginning
        if (container.scrollLeft >= maxScroll - 10) { // -10 for tolerance
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          })
        } else {
          container.scrollTo({
            left: container.scrollLeft + cardWidth,
            behavior: 'smooth'
          })
        }
      }
    }
  }

  return (
    <section id="why-matkaari" className="py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-12"
        >
          <span className="inline-block px-6 py-3 rounded-full text-sm font-bold" style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}>
            ⭐ WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold" style={{ color: '#B7410E' }}>
            The Matkaari Advantage
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#0E1326', opacity: 0.7 }}>
            Discover what makes Matkaari the perfect franchise opportunity
          </p>
        </motion.div>

        {/* Mobile Grid View (Mobile Only) */}
        <div className="md:hidden grid grid-cols-1 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="group rounded-3xl p-6 relative overflow-hidden"
              style={{
                background: advantage.gradient,
                boxShadow: `0 10px 40px -10px ${advantage.color}40`,
                border: `2px solid ${advantage.color}`
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Most Popular Badge */}
              {advantage.popular && (
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg z-10" style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}>
                  ⭐ MOST POPULAR
                </div>
              )}

              {/* Icon & Emoji */}
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: advantage.color }}
                >
                  <advantage.icon className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                </div>
                <div className="text-3xl">{advantage.emoji}</div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-heading font-bold mb-3" style={{ color: '#0E1326' }}>
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: '#0E1326', opacity: 0.7 }}>
                {advantage.description}
              </p>

              {/* Disclaimer for ROI */}
              {advantage.disclaimer && (
                <p className="text-xs italic mt-3 p-3 rounded-lg" style={{ color: '#0E1326', opacity: 0.5, backgroundColor: 'rgba(0,0,0,0.03)' }}>
                  <strong>Disclaimer:</strong> {advantage.disclaimer}
                </p>
              )}

              {/* Decorative Element */}
              <div 
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-5"
                style={{ backgroundColor: advantage.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Desktop Horizontal Scroll Carousel (Desktop Only) */}
        <div className="hidden md:block relative mb-12 px-16">
          {/* Navigation Buttons - Desktop Only */}
          <motion.button
            onClick={() => scroll('left')}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
            style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={() => scroll('right')}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
            style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <div className="flex items-center py-12">
            {/* Gradient Overlays */}
            <div className="absolute left-16 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #FFFBF5 0%, transparent 100%)' }} />
            <div className="absolute right-16 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #FFFBF5 0%, transparent 100%)' }} />

            {/* Scrollable Container */}
            <div 
              ref={containerRef}
              className="flex gap-8 px-4 overflow-x-auto overflow-y-visible scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="group rounded-3xl p-8 flex-shrink-0 relative overflow-hidden snap-center h-auto"
                  style={{
                    background: advantage.gradient,
                    boxShadow: `0 10px 40px -10px ${advantage.color}40`,
                    border: `2px solid ${advantage.color}`,
                    width: 'min(600px, 85vw)'
                  }}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ boxShadow: `0 20px 60px -10px ${advantage.color}60` }}
                >
                  {/* Icon & Emoji */}
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: advantage.color }}
                    >
                      <advantage.icon className="w-8 h-8" style={{ color: '#FFFFFF' }} />
                    </div>
                    <div className="text-4xl">{advantage.emoji}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold mb-3" style={{ color: '#0E1326' }}>
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed" style={{ color: '#0E1326', opacity: 0.7 }}>
                    {advantage.description}
                  </p>

                  {/* Disclaimer for ROI */}
                  {advantage.disclaimer && (
                    <p className="text-xs italic mt-3 p-3 rounded-lg" style={{ color: '#0E1326', opacity: 0.5, backgroundColor: 'rgba(0,0,0,0.03)' }}>
                      <strong>Disclaimer:</strong> {advantage.disclaimer}
                    </p>
                  )}

                  {/* Decorative Element */}
                  <div 
                    className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: advantage.color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Hint - Desktop Only */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden md:flex text-center mb-8 justify-center"
        >
          <p className="text-sm font-semibold flex items-center gap-2" style={{ color: '#B7410E' }}>
            <span>← Use arrow buttons to explore all advantages →</span>
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { icon: '👨‍🍳', label: 'No Chef Needed', value: '100%' },
            { icon: '📈', label: 'ROI Timeline', value: '15-18 Mo' },
            { icon: '💰', label: 'Royalty Free', value: '6 Months' },
            { icon: '🎨', label: 'Free Activity', value: 'Painting' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
              className="rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #E4A93E' }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">{item.icon}</div>
              <p className="text-xl md:text-2xl font-bold mb-1" style={{ color: '#B7410E' }}>{item.value}</p>
              <p className="text-xs md:text-sm font-semibold" style={{ color: '#0E1326', opacity: 0.7 }}>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyMatkaari
