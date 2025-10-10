import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What are the royalty fees for a Matkaari franchise?',
      answer: 'We offer an exceptional, risk-free royalty structure. You pay ZERO royalty for your first 6 months. From the 7th month onwards, you only pay royalty in months when your sales are above ₹1.5 Lakhs.'
    },
    {
      question: 'What is the expected Return on Investment (ROI)?',
      answer: 'Based on the performance of our existing outlets, franchisees can typically expect a full Return on Investment within 15 to 18 months.'
    },
    {
      question: 'Do I need to hire an experienced chef?',
      answer: 'Not at all! We have a unique chefless model. Our process is so straightforward that any trained staff member can create our menu perfectly, which significantly reduces your operational costs.'
    },
    {
      question: 'What is the minimum space required?',
      answer: 'Our starter and all-inclusive models require 300-400 sq. ft. For our premium flagship model, a minimum of 800-1000 sq. ft. is required.'
    },
    {
      question: 'What is the total investment required?',
      answer: 'We offer flexible models. The total investment varies from our ₹3 Lakhs Bangalore Starter model to our ₹15 Lakhs All-Inclusive and ₹20 Lakhs Premium models, depending on your goals.'
    },
    {
      question: 'What is the process of acquiring a franchise?',
      answer: 'Simply give us a call or fill out the form! Our dedicated executive will guide you through our easy process. Reach out to us at +91 91487 36660 to start your journey.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block px-6 py-3 rounded-full text-sm font-bold"
            style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}
          >
            ❓ FREQUENTLY ASKED QUESTIONS
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold" style={{ color: '#B7410E' }}>
            Got Questions? We've Got Answers
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#0E1326', opacity: 0.7 }}>
            Everything you need to know about starting your Matkaari franchise
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: `2px solid ${openIndex === index ? '#B7410E' : '#E4A93E50'}`
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-opacity-50 transition-all"
                style={{ 
                  backgroundColor: openIndex === index ? '#FFFBF5' : '#FFFFFF'
                }}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: openIndex === index ? '#B7410E' : '#E4A93E' }}
                  >
                    <HelpCircle className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                  </div>
                  <h3 
                    className="text-base md:text-lg font-bold pt-1"
                    style={{ color: '#0E1326' }}
                  >
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown 
                    className="w-6 h-6" 
                    style={{ color: openIndex === index ? '#B7410E' : '#E4A93E' }} 
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="px-6 md:px-8 pb-6 pl-20"
                      style={{ 
                        backgroundColor: '#FFFBF5',
                        borderTop: '1px solid #E4A93E30'
                      }}
                    >
                      <p 
                        className="text-base leading-relaxed"
                        style={{ color: '#0E1326', opacity: 0.8 }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center p-8 rounded-3xl"
          style={{ 
            background: 'linear-gradient(135deg, #FFFBF5 0%, #FFF8ED 100%)',
            border: '2px solid #E4A93E'
          }}
        >
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#B7410E' }}>
            Still Have Questions?
          </h3>
          <p className="text-base mb-6" style={{ color: '#0E1326', opacity: 0.7 }}>
            Our franchise experts are here to help you every step of the way
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:+919148736660"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg shadow-lg"
              style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(183, 65, 14, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Call Us Now
            </motion.a>
            <motion.button
              onClick={() => {
                const formSection = document.getElementById('franchise-form-bottom')
                if (formSection) {
                  const offset = 80
                  const elementPosition = formSection.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.scrollY - offset
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg shadow-lg"
              style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📝 Fill Enquiry Form
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
