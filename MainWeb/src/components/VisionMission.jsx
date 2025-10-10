import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Wrench, GraduationCap, Rocket, HeadphonesIcon } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const VisionMission = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  const processSteps = [
    {
      icon: MapPin,
      emoji: '📍',
      title: 'Site Selection',
      description: 'We help you identify the perfect location with high foot traffic and strong demographic fit for your Matkaari café.',
      color: '#E4A93E'
    },
    {
      icon: Wrench,
      emoji: '🔧',
      title: 'Complete Setup',
      description: 'From interior design to equipment installation, we handle everything to create your stunning kulhad-themed café.',
      color: '#B7410E'
    },
    {
      icon: GraduationCap,
      emoji: '🎓',
      title: 'Comprehensive Training',
      description: 'Our team trains your staff on our chefless model, recipes, customer service, and the signature kulhad painting experience.',
      color: '#E4A93E'
    },
    {
      icon: Rocket,
      emoji: '🚀',
      title: 'Grand Launch',
      description: 'We support your grand opening with marketing materials, social media campaigns, and operational guidance.',
      color: '#B7410E'
    },
    {
      icon: HeadphonesIcon,
      emoji: '🎧',
      title: 'Ongoing Support',
      description: 'Continuous assistance with operations, marketing, menu updates, and troubleshooting to ensure your long-term success.',
      color: '#E4A93E'
    }
  ]

  return (
    <section id="vision-mission" className="py-16 md:py-20 overflow-hidden" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span className="inline-block px-6 py-3 rounded-full text-sm font-bold" style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}>
            🤝 THE MATKAARI PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold" style={{ color: '#B7410E' }}>
            A Hassle-Free Partnership
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#0E1326', opacity: 0.7 }}>
            From site selection to ongoing support, we're with you every step of the way
          </p>
        </motion.div>

        {/* Process Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2" style={{ backgroundColor: '#E4A93E', opacity: 0.2 }}></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <motion.div
                    className="group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      border: `2px solid ${step.color}`
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div 
                        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md"
                        style={{ backgroundColor: step.color }}
                      >
                        <step.icon className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{step.emoji}</span>
                          <h3 className="text-xl md:text-2xl font-heading font-bold" style={{ color: '#0E1326' }}>
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-base leading-relaxed" style={{ color: '#0E1326', opacity: 0.7 }}>
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Step Number */}
                    <div 
                      className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg"
                      style={{ backgroundColor: step.color, color: '#FFFFFF' }}
                    >
                      {index + 1}
                    </div>
                  </motion.div>
                </div>

                {/* Center Circle for Timeline */}
                <div className="hidden lg:block flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                    style={{ backgroundColor: step.color }}
                  ></motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
