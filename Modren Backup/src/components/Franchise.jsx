import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Star, TrendingUp, Users, Megaphone, BookOpen, Award, Building } from 'lucide-react'

const Franchise = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const brandSupport = [
    { icon: Megaphone, text: 'Marketing Support' },
    { icon: BookOpen, text: 'Complete Training for 2 years' },
    { icon: Users, text: 'Vendor Tie-Ups' },
    { icon: Award, text: 'Complete SOP to Run the Business' },
    { icon: Building, text: 'Outlet Setup Design Support' },
  ]

  return (
    <section id="franchise" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
            Business Opportunity
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Franchise Models
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect model to start your Matkaari journey
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Model A */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-2">
                  Model A
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    ₹3
                  </span>
                  <span className="text-2xl text-gray-600">Lakhs</span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Franchise Fees - ₹1.5 Lakhs</p>
                    <p className="text-sm text-gray-600">Rights and support to operate as franchisee</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Machinery & Equipment - ₹1.3 Lakhs</p>
                    <p className="text-sm text-gray-600">Essential equipment for smooth operations</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Welcome Kit - ₹20,000</p>
                    <p className="text-sm text-gray-600">Tea powder, masala, kulhad cups</p>
                  </div>
                </li>
              </ul>

              <div className="pt-6 border-t border-orange-200">
                <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">No Royalty Fees</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Model B */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-200"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                RECOMMENDED
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-2">
                  Model B
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ₹8
                  </span>
                  <span className="text-2xl text-gray-600">Lakhs</span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Franchise Fees</p>
                    <p className="text-sm text-gray-600">Complete rights and support</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Machinery & Equipment</p>
                    <p className="text-sm text-gray-600">Essential equipment included</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Complete Setup Package</p>
                    <p className="text-sm text-gray-600">Painting, wallpapers, furniture, LED board</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Welcome Kit</p>
                    <p className="text-sm text-gray-600">All essential supplies included</p>
                  </div>
                </li>
              </ul>

              <div className="pt-6 border-t border-purple-200">
                <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">No Royalty Fees</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Support */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-gray-800 mb-10">
            Complete Brand Support
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brandSupport.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl mb-3">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-700 leading-tight">
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
