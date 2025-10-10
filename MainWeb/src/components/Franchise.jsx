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
    <section id="franchise" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-20"
        >
          <span className="inline-block px-6 py-3 rounded-full text-sm font-bold" style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}>
            💰 INVESTMENT PLANS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold" style={{ color: '#B7410E' }}>
            Choose Your Franchise Model
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#0E1326', opacity: 0.7 }}>
            Flexible investment options designed to fit your budget and goals
          </p>
        </motion.div>

        {/* Mobile Cards - Only visible on mobile */}
        <div className="md:hidden space-y-6 mb-20">
          {/* ₹3 Lakhs Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{ border: '3px solid #E4A93E', backgroundColor: '#FFFFFF' }}
          >
            {/* Header */}
            <div className="p-6 text-center" style={{ backgroundColor: '#0E1326' }}>
              <p className="text-3xl font-bold mb-1" style={{ color: '#E4A93E' }}>₹3 Lakhs</p>
              <p className="text-sm font-semibold" style={{ color: '#FFFFFF', opacity: 0.8 }}>+ GST</p>
              <p className="text-xs mt-1" style={{ color: '#FFFFFF', opacity: 0.7 }}>Bangalore Starter</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <span className="text-sm font-semibold" style={{ color: '#0E1326' }}>Space Required</span>
                <span className="text-sm" style={{ color: '#0E1326' }}>300-400 sq.ft.</span>
              </div>

              <div className="py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-semibold flex-1" style={{ color: '#0E1326' }}>Complete Cafe Setup</span>
                  <span className="text-2xl">❌</span>
                </div>
                <p className="text-xs" style={{ color: '#0E1326', opacity: 0.6 }}>(Franchisee's Scope)</p>
              </div>

              <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <span className="text-sm font-semibold" style={{ color: '#0E1326' }}>Kitchen & Electrical Equipment</span>
                <span className="text-2xl">✅</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <span className="text-sm font-semibold" style={{ color: '#0E1326' }}>1st Month's Raw Materials</span>
                <span className="text-2xl">❌</span>
              </div>

              {/* Legal Section */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase mb-3" style={{ color: '#E4A93E' }}>Legal & Licensing Support</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>FSSAI License</span>
                    <span className="text-xl">✅</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>GST Registration</span>
                    <span className="text-xl">❌</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Shop & Establishment</span>
                    <span className="text-xl">❌</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Trade License</span>
                    <span className="text-xl">❌</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Business Registration</span>
                    <span className="text-xl">❌</span>
                  </div>
                </div>
              </div>

              {/* Marketing Section */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase mb-3" style={{ color: '#B7410E' }}>Marketing Support</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Account Manager</span>
                    <span className="text-xl">❌</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Social Media & Digital Ads</span>
                    <span className="text-xl">❌</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={() => handleWhatsAppContact('₹3 Lakhs Bangalore Starter', '3')}
                  className="w-full px-6 py-4 rounded-xl font-bold text-base shadow-lg"
                  style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* ₹15 Lakhs Card - Most Popular */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-xl relative"
            style={{ border: '3px solid #B7410E', backgroundColor: '#FFFFFF' }}
          >
            {/* Header */}
            <div className="p-6 text-center relative" style={{ backgroundColor: '#0E1326' }}>
              {/* Most Popular Badge - Inside Header */}
              <div className="mb-3">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold shadow-lg" style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}>
                  ⭐ MOST POPULAR
                </span>
              </div>
              
              <p className="text-3xl font-bold mb-1" style={{ color: '#E4A93E' }}>₹15 Lakhs</p>
              <p className="text-sm font-semibold" style={{ color: '#FFFFFF', opacity: 0.8 }}>+ GST</p>
              <p className="text-xs mt-1" style={{ color: '#FFFFFF', opacity: 0.7 }}>All-Inclusive</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4" style={{ backgroundColor: '#FFFBF5' }}>
              <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <span className="text-sm font-semibold" style={{ color: '#0E1326' }}>Space Required</span>
                <span className="text-sm" style={{ color: '#0E1326' }}>300-400 sq.ft.</span>
              </div>

              <div className="py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-semibold flex-1" style={{ color: '#0E1326' }}>Complete Cafe Setup</span>
                  <span className="text-2xl">✅</span>
                </div>
                <p className="text-xs font-semibold" style={{ color: '#B7410E' }}>(Our Scope)</p>
              </div>

              <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <span className="text-sm font-semibold" style={{ color: '#0E1326' }}>Kitchen & Electrical Equipment</span>
                <span className="text-2xl">✅</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <span className="text-sm font-semibold" style={{ color: '#0E1326' }}>1st Month's Raw Materials</span>
                <span className="text-2xl">✅</span>
              </div>

              {/* Legal Section */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase mb-3" style={{ color: '#E4A93E' }}>Legal & Licensing Support</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>FSSAI License</span>
                    <span className="text-xl">✅</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>GST Registration</span>
                    <span className="text-xl">✅</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Shop & Establishment</span>
                    <span className="text-xl">✅</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Trade License</span>
                    <span className="text-xl">✅</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Business Registration</span>
                    <span className="text-xl">✅</span>
                  </div>
                </div>
              </div>

              {/* Marketing Section */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase mb-3" style={{ color: '#B7410E' }}>Marketing Support</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Account Manager</span>
                    <span className="text-xl">❌</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Social Media & Digital Ads</span>
                    <span className="text-xl">❌</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={() => handleWhatsAppContact('₹15 Lakhs All-Inclusive', '15')}
                  className="w-full px-6 py-4 rounded-xl font-bold text-base shadow-xl transform active:scale-95 transition-transform"
                  style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* ₹20 Lakhs Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{ border: '3px solid #E4A93E', backgroundColor: '#FFFFFF' }}
          >
            {/* Header */}
            <div className="p-6 text-center" style={{ backgroundColor: '#0E1326' }}>
              <p className="text-3xl font-bold mb-1" style={{ color: '#E4A93E' }}>₹20 Lakhs</p>
              <p className="text-sm font-semibold" style={{ color: '#FFFFFF', opacity: 0.8 }}>+ GST</p>
              <p className="text-xs mt-1" style={{ color: '#FFFFFF', opacity: 0.7 }}>Premium Flagship</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <span className="text-sm font-semibold" style={{ color: '#0E1326' }}>Space Required</span>
                <span className="text-sm" style={{ color: '#0E1326' }}>800-1000 sq.ft.</span>
              </div>

              <div className="py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-semibold flex-1" style={{ color: '#0E1326' }}>Complete Cafe Setup</span>
                  <span className="text-2xl">✅</span>
                </div>
                <p className="text-xs font-semibold" style={{ color: '#B7410E' }}>(Our Scope)</p>
              </div>

              <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <span className="text-sm font-semibold" style={{ color: '#0E1326' }}>Kitchen & Electrical Equipment</span>
                <span className="text-2xl">✅</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#E4A93E50' }}>
                <span className="text-sm font-semibold" style={{ color: '#0E1326' }}>1st Month's Raw Materials</span>
                <span className="text-2xl">✅</span>
              </div>

              {/* Legal Section */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase mb-3" style={{ color: '#E4A93E' }}>Legal & Licensing Support</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>FSSAI License</span>
                    <span className="text-xl">✅</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>GST Registration</span>
                    <span className="text-xl">✅</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Shop & Establishment</span>
                    <span className="text-xl">✅</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Trade License</span>
                    <span className="text-xl">✅</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: '#0E1326' }}>Business Registration</span>
                    <span className="text-xl">✅</span>
                  </div>
                </div>
              </div>

              {/* Marketing Section */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase mb-3" style={{ color: '#B7410E' }}>Marketing Support</p>
                <div className="space-y-2">
                  <div className="py-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs" style={{ color: '#0E1326' }}>Account Manager</span>
                      <span className="text-xl">✅</span>
                    </div>
                    <p className="text-xs font-semibold" style={{ color: '#B7410E' }}>(For 6 Months)</p>
                  </div>
                  <div className="py-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs" style={{ color: '#0E1326' }}>Social Media & Digital Ads</span>
                      <span className="text-xl">✅</span>
                    </div>
                    <p className="text-xs font-semibold" style={{ color: '#B7410E' }}>(For 6 Months)</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={() => handleWhatsAppContact('₹20 Lakhs Premium Flagship', '20')}
                  className="w-full px-6 py-4 rounded-xl font-bold text-base shadow-lg"
                  style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table - Hidden on mobile, visible on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 overflow-x-auto hidden md:block"
        >
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden rounded-3xl shadow-2xl" style={{ border: '3px solid #E4A93E' }}>
              <table className="min-w-full divide-y" style={{ backgroundColor: '#FFFFFF', borderColor: '#E4A93E' }}>
                {/* Table Header */}
                <thead style={{ backgroundColor: '#0E1326' }}>
                  <tr>
                    <th className="px-6 py-6 text-left text-sm font-bold uppercase tracking-wider" style={{ color: '#FFFFFF', width: '25%' }}>
                      Features
                    </th>
                    <th className="px-6 py-6 text-center" style={{ borderLeft: '2px solid #E4A93E' }}>
                      <div>
                        <p className="text-2xl font-bold mb-1" style={{ color: '#E4A93E' }}>₹3 Lakhs</p>
                        <p className="text-sm font-semibold" style={{ color: '#FFFFFF', opacity: 0.8 }}>+ GST</p>
                        <p className="text-xs mt-1" style={{ color: '#FFFFFF', opacity: 0.7 }}>Bangalore Starter</p>
                      </div>
                    </th>
                    <th className="px-6 py-6 text-center relative" style={{ borderLeft: '2px solid #E4A93E' }}>
                      <div className="mb-3">
                        <span className="inline-block px-4 py-1 rounded-full text-xs font-bold shadow-lg" style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}>
                          ⭐ MOST POPULAR
                        </span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold mb-1" style={{ color: '#E4A93E' }}>₹15 Lakhs</p>
                        <p className="text-sm font-semibold" style={{ color: '#FFFFFF', opacity: 0.8 }}>+ GST</p>
                        <p className="text-xs mt-1" style={{ color: '#FFFFFF', opacity: 0.7 }}>All-Inclusive</p>
                      </div>
                    </th>
                    <th className="px-6 py-6 text-center" style={{ borderLeft: '2px solid #E4A93E' }}>
                      <div>
                        <p className="text-2xl font-bold mb-1" style={{ color: '#E4A93E' }}>₹20 Lakhs</p>
                        <p className="text-sm font-semibold" style={{ color: '#FFFFFF', opacity: 0.8 }}>+ GST</p>
                        <p className="text-xs mt-1" style={{ color: '#FFFFFF', opacity: 0.7 }}>Premium Flagship</p>
                      </div>
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y" style={{ borderColor: '#E4A93E50' }}>
                  {/* Space Requirements */}
                  <tr style={{ backgroundColor: '#FFFFFF' }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#0E1326' }}>Space Required</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}>300-400 sq.ft.</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ backgroundColor: '#FFFBF5', borderColor: '#E4A93E50' }}>300-400 sq.ft.</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}>800-1000 sq.ft.</td>
                  </tr>

                  {/* Complete Cafe Setup */}
                  <tr style={{ backgroundColor: '#FFFBF5' }}>
                    <td className="px-6 py-4">
                      <p className="font-semibold" style={{ color: '#0E1326' }}>Complete Cafe Setup</p>
                      <p className="text-xs" style={{ color: '#0E1326', opacity: 0.6 }}>(Interiors, painting, electrical, furniture)</p>
                    </td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}>
                      <span className="text-2xl">❌</span>
                      <p className="text-xs mt-1" style={{ color: '#0E1326', opacity: 0.6 }}>(Franchisee's Scope)</p>
                    </td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ backgroundColor: '#E4A93E10', borderColor: '#E4A93E50' }}>
                      <span className="text-2xl">✅</span>
                      <p className="text-xs mt-1 font-semibold" style={{ color: '#B7410E' }}>(Our Scope)</p>
                    </td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}>
                      <span className="text-2xl">✅</span>
                      <p className="text-xs mt-1 font-semibold" style={{ color: '#B7410E' }}>(Our Scope)</p>
                    </td>
                  </tr>

                  {/* Kitchen & Electrical Equipment */}
                  <tr style={{ backgroundColor: '#FFFFFF' }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#0E1326' }}>Kitchen & Electrical Equipment</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ backgroundColor: '#FFFBF5', borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                  </tr>

                  {/* 1st Month's Raw Materials */}
                  <tr style={{ backgroundColor: '#FFFBF5' }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#0E1326' }}>1st Month's Raw Materials</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">❌</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ backgroundColor: '#E4A93E10', borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                  </tr>

                  {/* Section Header: LEGAL & LICENSING SUPPORT */}
                  <tr style={{ backgroundColor: '#E4A93E' }}>
                    <td colSpan="4" className="px-6 py-3 font-bold text-center uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
                      Legal & Licensing Support
                    </td>
                  </tr>

                  {/* FSSAI License */}
                  <tr style={{ backgroundColor: '#FFFFFF' }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#0E1326' }}>FSSAI License Assistance</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ backgroundColor: '#FFFBF5', borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                  </tr>

                  {/* GST Registration */}
                  <tr style={{ backgroundColor: '#FFFBF5' }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#0E1326' }}>GST Registration Assistance</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">❌</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ backgroundColor: '#E4A93E10', borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                  </tr>

                  {/* Shop & Establishment License */}
                  <tr style={{ backgroundColor: '#FFFFFF' }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#0E1326' }}>Shop & Establishment License</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">❌</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ backgroundColor: '#FFFBF5', borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                  </tr>

                  {/* Trade License */}
                  <tr style={{ backgroundColor: '#FFFBF5' }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#0E1326' }}>Trade License Assistance</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">❌</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ backgroundColor: '#E4A93E10', borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                  </tr>

                  {/* Business Registration */}
                  <tr style={{ backgroundColor: '#FFFFFF' }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#0E1326' }}>Business Registration Guidance</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">❌</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ backgroundColor: '#FFFBF5', borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">✅</span></td>
                  </tr>

                  {/* Section Header: MARKETING SUPPORT */}
                  <tr style={{ backgroundColor: '#B7410E' }}>
                    <td colSpan="4" className="px-6 py-3 font-bold text-center uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
                      Marketing Support
                    </td>
                  </tr>

                  {/* Dedicated Account Manager */}
                  <tr style={{ backgroundColor: '#FFFBF5' }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#0E1326' }}>Dedicated Account Manager</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">❌</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ backgroundColor: '#E4A93E10', borderColor: '#E4A93E50' }}><span className="text-2xl">❌</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}>
                      <span className="text-2xl">✅</span>
                      <p className="text-xs mt-1 font-semibold" style={{ color: '#B7410E' }}>(For 6 Months)</p>
                    </td>
                  </tr>

                  {/* Social Media & Digital Ads */}
                  <tr style={{ backgroundColor: '#FFFFFF' }}>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#0E1326' }}>Social Media & Digital Ads</td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}><span className="text-2xl">❌</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ backgroundColor: '#FFFBF5', borderColor: '#E4A93E50' }}><span className="text-2xl">❌</span></td>
                    <td className="px-6 py-4 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}>
                      <span className="text-2xl">✅</span>
                      <p className="text-xs mt-1 font-semibold" style={{ color: '#B7410E' }}>(For 6 Months)</p>
                    </td>
                  </tr>

                  {/* CTA Row */}
                  <tr style={{ backgroundColor: '#FFFBF5' }}>
                    <td className="px-6 py-6" style={{ color: '#0E1326' }}></td>
                    <td className="px-6 py-6 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}>
                      <button
                        onClick={() => handleWhatsAppContact('₹3 Lakhs Bangalore Starter', '3')}
                        className="px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                        style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}
                      >
                        Enquire Now
                      </button>
                    </td>
                    <td className="px-6 py-6 text-center border-l-2" style={{ backgroundColor: '#E4A93E10', borderColor: '#E4A93E50' }}>
                      <button
                        onClick={() => handleWhatsAppContact('₹15 Lakhs All-Inclusive', '15')}
                        className="px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                        style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}
                      >
                        Enquire Now
                      </button>
                    </td>
                    <td className="px-6 py-6 text-center border-l-2" style={{ borderColor: '#E4A93E50' }}>
                      <button
                        onClick={() => handleWhatsAppContact('₹20 Lakhs Premium Flagship', '20')}
                        className="px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                        style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}
                      >
                        Enquire Now
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Keep existing horizontal scroll advantages section below the table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 hidden">
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
