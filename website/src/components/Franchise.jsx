import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, TrendingUp, Users, Megaphone, BookOpen, Award, Building, MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Franchise = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const brandSupport = [
    { icon: Megaphone, text: 'Marketing Support' },
    { icon: BookOpen, text: 'Complete Training for 2 years' },
    { icon: Users, text: 'Vendor Tie-Ups' },
    { icon: Award, text: 'Complete SOP to Run the Business' },
    { icon: Building, text: 'Outlet Setup Design Support' },
  ]

  const handleWhatsAppContact = (model, price) => {
    const message = `Hi Rahul, I'm interested in the Matkaari Franchise *${model}* for *₹${price} Lakhs*. Please provide more details.`
    const phoneNumber = '919148736660'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="franchise" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}>
            Business Opportunity
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold" style={{ color: '#B7410E' }}>
            Franchise Models
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#0E1326' }}>
            Choose the perfect model to start your Matkaari journey
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Model A */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => handleWhatsAppContact('Model A', '3')}
            className="relative rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
            style={{ backgroundColor: '#FFFFFF', border: '3px solid #E4A93E' }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2" style={{ color: '#0E1326' }}>
                  Model A
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-bold" style={{ color: '#B7410E' }}>
                    ₹3
                  </span>
                  <span className="text-2xl" style={{ color: '#0E1326' }}>Lakhs</span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#E4A93E' }}>
                    <Check className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#0E1326' }}>Franchise Fees - ₹1.5 Lakhs</p>
                    <p className="text-sm" style={{ color: '#0E1326' }}>Rights and support to operate as franchisee</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#E4A93E' }}>
                    <Check className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#0E1326' }}>Machinery & Equipment - ₹1.3 Lakhs</p>
                    <p className="text-sm" style={{ color: '#0E1326' }}>Essential equipment for smooth operations</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#E4A93E' }}>
                    <Check className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#0E1326' }}>Welcome Kit - ₹20,000</p>
                    <p className="text-sm" style={{ color: '#0E1326' }}>Tea powder, masala, kulhad cups</p>
                  </div>
                </li>
          <br></br>
          <br></br>
              </ul>

              <div className="pt-6 border-t" style={{ borderColor: '#E4A93E' }}>
                <div className="flex flex-wrap items-center gap-3">
                  <div 
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full"
                    style={{ 
                      backgroundColor: '#E4A93E',
                      border: 'none'
                    }}
                  >
                    <Star className="w-5 h-5 text-white" />
                    <span className="font-semibold text-white">No Royalty Fees</span>
                  </div>
                  <div 
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-semibold"
                    style={{ 
                      backgroundColor: '#B7410E'
                    }}
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span className="text-white">Click to Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Model B */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => handleWhatsAppContact('Model B', '8')}
            className="relative rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
            style={{ backgroundColor: '#FFFFFF', border: '3px solid #B7410E' }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold shadow-lg" style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}>
                RECOMMENDED
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2" style={{ color: '#0E1326' }}>
                  Model B
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-bold" style={{ color: '#B7410E' }}>
                    ₹8
                  </span>
                  <span className="text-2xl" style={{ color: '#0E1326' }}>Lakhs</span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#B7410E' }}>
                    <Check className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#0E1326' }}>Franchise Fees</p>
                    <p className="text-sm" style={{ color: '#0E1326' }}>Complete rights and support</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#B7410E' }}>
                    <Check className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#0E1326' }}>Machinery & Equipment</p>
                    <p className="text-sm" style={{ color: '#0E1326' }}>Essential equipment included</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#B7410E' }}>
                    <Check className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#0E1326' }}>Complete Setup Package</p>
                    <p className="text-sm" style={{ color: '#0E1326' }}>Painting, wallpapers, furniture, LED board</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#B7410E' }}>
                    <Check className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#0E1326' }}>Welcome Kit</p>
                    <p className="text-sm" style={{ color: '#0E1326' }}>All essential supplies included</p>
                  </div>
                </li>
              </ul>

              <div className="pt-6 border-t" style={{ borderColor: '#B7410E' }}>
                <div className="flex flex-wrap items-center gap-3">
                  <div 
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full"
                    style={{ 
                      backgroundColor: '#E4A93E',
                      border: 'none'
                    }}
                  >
                    <Star className="w-5 h-5 text-white" />
                    <span className="font-semibold text-white">No Royalty Fees</span>
                  </div>
                  <div 
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-semibold"
                    style={{ 
                      backgroundColor: '#B7410E'
                    }}
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span className="text-white">Click to Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Support */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-3xl p-8 md:p-12"
          style={{ backgroundColor: '#E4A93E' }}
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10" style={{ color: '#FFFFFF' }}>
            Complete Brand Support
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brandSupport.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3" style={{ backgroundColor: '#B7410E' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>
                <p className="text-sm font-semibold leading-tight" style={{ color: '#0E1326' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Franchise
