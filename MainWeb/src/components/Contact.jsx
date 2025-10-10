import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format the WhatsApp message
    const whatsappMessage = `Hello Matkaari Team!

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

Looking forward to hearing from you!`

    // WhatsApp API URL (replace with actual Matkaari WhatsApp number)
    const whatsappNumber = '919148736660' // Format: country code + number without +
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank')
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    { icon: Globe, label: 'Website', value: 'www.matkaari.in', href: 'http://www.matkaari.in' },
    { icon: Mail, label: 'Email', value: 'rahuldhawan1996@gmail.com', href: 'mailto:rahuldhawan1996@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9148736660', href: 'tel:+919148736660' },
    { icon: MapPin, label: 'Location', value: 'Bangalore', href: null },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}>
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold" style={{ color: '#B7410E' }}>
            Contact Us
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#0E1326' }}>
            Ready to start your Matkaari journey? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-2xl"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #E4A93E' }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#B7410E' }}>
                    <item.icon className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#B7410E' }}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-semibold transition-colors"
                        style={{ color: '#0E1326' }}
                        onMouseEnter={(e) => e.target.style.color = '#B7410E'}
                        onMouseLeave={(e) => e.target.style.color = '#0E1326'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold" style={{ color: '#0E1326' }}>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Image */}
            <motion.a
              href="https://maps.app.goo.gl/Zz5Z7Vy8LqtV9Krb6"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="block relative rounded-3xl overflow-hidden shadow-xl cursor-pointer"
              style={{ border: '3px solid #E4A93E' }}
            >
              <img 
                src="/map.png" 
                alt="Matkaari Location Map - Bangalore"
                className="w-full h-full object-cover"
                style={{ minHeight: '250px' }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(228, 169, 62, 0.2)' }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
                  style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}
                >
                  📍 Open in Maps
                </motion.div>
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-3xl p-8 md:p-10 shadow-xl"
            style={{ backgroundColor: '#FFFFFF', border: '3px solid #B7410E' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#25D366' }}>
                <MessageCircle className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </div>
              <h3 className="text-2xl font-heading font-bold" style={{ color: '#B7410E' }}>
                Connect via WhatsApp
              </h3>
            </div>
            
            <p className="text-sm mb-6" style={{ color: '#0E1326', opacity: 0.7 }}>
              Fill in your details below and we'll open WhatsApp with your message ready to send!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#0E1326' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #E4A93E', color: '#0E1326' }}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#0E1326' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #E4A93E', color: '#0E1326' }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#0E1326' }}>
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #E4A93E', color: '#0E1326' }}
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#0E1326' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all resize-none"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #E4A93E', color: '#0E1326' }}
                  placeholder="Tell us about your interest in Matkaari..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group relative px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Continue to WhatsApp</span>
              </button>
              
              <p className="text-xs text-center mt-4" style={{ color: '#0E1326', opacity: 0.5 }}>
                Your message will open in WhatsApp. You can review it before sending.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
