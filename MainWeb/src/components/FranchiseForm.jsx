import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Phone, Mail, MapPin, DollarSign, MessageSquare } from 'lucide-react'
import emailjs from '@emailjs/browser'

const FranchiseForm = ({ position = 'top' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    preferredCity: '',
    budget: '',
    message: ''
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const budgetOptions = [
    '₹3 Lakhs (Bangalore Starter)',
    '₹15 Lakhs (All-Inclusive)',
    '₹20 Lakhs (Premium Flagship)'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    // EmailJS configuration
    const serviceId = 'service_matkaari' // Replace with your EmailJS service ID
    const templateId = 'template_8wzotum' // Replace with your EmailJS template ID
    const publicKey = 'g98YUt0bQFvhDr3oE' // Replace with your EmailJS public key
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email || 'No email provided',
      contact_number: formData.contactNumber,
      preferred_city: formData.preferredCity || 'Not specified',
      budget: formData.budget || 'Not specified',
      message: formData.message || 'No additional message',
      to_name: 'Matkaari Team',
      reply_to: formData.email || 'noreply@matkaari.com'
    }
    
    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      console.log('Email sent successfully:', response)
      setSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          fullName: '',
          contactNumber: '',
          email: '',
          preferredCity: '',
          budget: '',
          message: ''
        })
      }, 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setError('Failed to send your request. Please try calling us directly or try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section 
      id={position === 'top' ? 'franchise-form' : 'franchise-form-bottom'}
      className="py-16 md:py-24"
      style={{ backgroundColor: position === 'top' ? '#FFFBF5' : '#FFFFFF' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {position === 'top' && (
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-block px-6 py-2 rounded-full text-sm font-bold mb-6"
              style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}
            >
              🚀 START YOUR FRANCHISE JOURNEY
            </motion.span>
          )}
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
            style={{ color: '#B7410E' }}
          >
            Book Your Free Franchise Consultation
          </h2>
          <p 
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: '#0E1326', opacity: 0.7 }}
          >
            Fill out the form below and our franchise expert will contact you within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8ED 100%)',
            border: '3px solid #E4A93E'
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: '#E4A93E', transform: 'translate(50%, -50%)' }} />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: '#B7410E', transform: 'translate(-50%, 50%)' }} />

          {submitted ? (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="text-center py-12"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity
                }}
                className="text-8xl mb-6"
              >
                ✅
              </motion.div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#B7410E' }}>
                Thank You!
              </h3>
              <p className="text-lg" style={{ color: '#0E1326' }}>
                Your consultation request has been received. Our franchise expert will contact you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="relative">
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0E1326' }}>
                    Full Name <span style={{ color: '#B7410E' }}>*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#B7410E' }} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none transition-all text-base"
                      style={{ 
                        backgroundColor: '#FFFFFF', 
                        border: '2px solid #E4A93E',
                        color: '#0E1326'
                      }}
                    />
                  </div>
                </div>

                {/* Contact Number */}
                <div className="relative">
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0E1326' }}>
                    Contact Number <span style={{ color: '#B7410E' }}>*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#B7410E' }} />
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none transition-all text-base"
                      style={{ 
                        backgroundColor: '#FFFFFF', 
                        border: '2px solid #E4A93E',
                        color: '#0E1326'
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0E1326' }}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#B7410E' }} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none transition-all text-base"
                      style={{ 
                        backgroundColor: '#FFFFFF', 
                        border: '2px solid #E4A93E',
                        color: '#0E1326'
                      }}
                    />
                  </div>
                </div>

                {/* Preferred City */}
                <div className="relative">
                  <label className="block text-sm font-bold mb-2" style={{ color: '#0E1326' }}>
                    Preferred City to Open
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#B7410E' }} />
                    <input
                      type="text"
                      name="preferredCity"
                      value={formData.preferredCity}
                      onChange={handleChange}
                      placeholder="Enter your preferred city"
                      className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none transition-all text-base"
                      style={{ 
                        backgroundColor: '#FFFFFF', 
                        border: '2px solid #E4A93E',
                        color: '#0E1326'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Your Budget */}
              <div className="relative">
                <label className="block text-sm font-bold mb-2" style={{ color: '#0E1326' }}>
                  Your Budget
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-6 w-5 h-5" style={{ color: '#B7410E' }} />
                  <div className="pl-12 space-y-3">
                    {budgetOptions.map((option, index) => (
                      <motion.label
                        key={index}
                        className="flex items-center p-4 rounded-xl cursor-pointer transition-all"
                        style={{
                          backgroundColor: formData.budget === option ? '#E4A93E20' : '#FFFFFF',
                          border: `2px solid ${formData.budget === option ? '#E4A93E' : '#E4A93E50'}`
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={option}
                          checked={formData.budget === option}
                          onChange={handleChange}
                          className="mr-3 w-5 h-5 accent-[#E4A93E]"
                        />
                        <span className="font-semibold" style={{ color: '#0E1326' }}>
                          {option}
                        </span>
                      </motion.label>
                    ))}
                  </div>
                  
                  {/* Know More Button */}
                  <motion.button
                    type="button"
                    onClick={() => {
                      const franchiseSection = document.getElementById('franchise')
                      if (franchiseSection) {
                        const offset = 80
                        const elementPosition = franchiseSection.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.scrollY - offset
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        })
                      }
                    }}
                    className="mt-4 px-6 py-3 rounded-lg font-semibold text-sm transition-all"
                    style={{ 
                      backgroundColor: '#E4A93E', 
                      color: '#FFFFFF',
                      border: '2px solid #E4A93E'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: '#B7410E',
                      borderColor: '#B7410E'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Know More About Our Models
                  </motion.button>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-sm font-bold mb-2" style={{ color: '#0E1326' }}>
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5" style={{ color: '#B7410E' }} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us more about your franchise goals..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none transition-all resize-none text-base"
                    style={{ 
                      backgroundColor: '#FFFFFF', 
                      border: '2px solid #E4A93E',
                      color: '#0E1326'
                    }}
                  ></textarea>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#FEE2E2', border: '2px solid #EF4444' }}
                >
                  <p className="text-sm font-semibold" style={{ color: '#DC2626' }}>
                    ⚠️ {error}
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full group relative px-8 py-5 rounded-xl font-bold text-lg shadow-2xl overflow-hidden"
                style={{ 
                  backgroundColor: loading ? '#B7410E80' : '#B7410E', 
                  color: '#FFFFFF'
                }}
                whileHover={!loading ? { scale: 1.02, boxShadow: '0 25px 50px -12px rgba(183, 65, 14, 0.5)' } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: '#E4A93E' }}
                  initial={{ x: '-100%' }}
                  whileHover={!loading ? { x: 0 } : {}}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request a Call Back
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
              </motion.button>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center pt-4"
              >
                <p className="text-sm flex items-center justify-center gap-2" style={{ color: '#0E1326', opacity: 0.6 }}>
                  🔒 Your information is 100% secure and confidential
                </p>
              </motion.div>
            </form>
          )}
        </motion.div>

        {/* Quick Contact Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm mb-3" style={{ color: '#0E1326', opacity: 0.7 }}>
            Prefer to talk directly?
          </p>
          <a
            href="tel:+919148736660"
            className="inline-flex items-center gap-2 text-lg font-bold"
            style={{ color: '#B7410E' }}
          >
            <Phone className="w-5 h-5" />
            +91 91487 36660
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FranchiseForm
