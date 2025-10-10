import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [galleryImages, setGalleryImages] = useState([])
  const [showAllImages, setShowAllImages] = useState(false)

  // Function to convert filename to readable name
  const formatFileName = (filename) => {
    // Remove file extension
    const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '')
    
    // Replace hyphens and underscores with spaces
    const withSpaces = nameWithoutExt.replace(/[-_]/g, ' ')
    
    // Capitalize each word
    const capitalized = withSpaces
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    
    return capitalized
  }

  // All available food images
  const allFoodFiles = [
    'banana-pancakes.jpg',
    'black-cofee.jpg',
    'bread-omelette.jpg',
    'bun-omelette.jpg',
    'chapathi.jpg',
    'chicken-momos.jpg',
    'Dry-fruit-lassi.jpg',
    'elachi-chai.jpg',
    'fried-rice.jpg',
    'fruit-salad.jpg',
    'ginger-tea.jpg',
    'gobi.jpg',
    'Hot-chocolate-with-marshmallow.jpg',
    'lassi-sweet.jpg',
    'mango-lassi.jpg',
    'miso-soup.jpg',
    'momo.jpg',
    'non-veg-kulhadpizza.jpg',
    'nutella-pancake.jpg',
    'oreo-shake.jpg',
    'pakoda-aloo.jpg',
    'pan-cake.jpg',
    'poha.jpg',
    'purri.jpg',
    'red-sauce-pasta.jpg',
    'salty-french-fries.jpg',
    'samosa.jpg',
    'sweet-lassi.jpg',
    'vada-pav.jpg',
    'veg-maggi.jpg',
    'veg-momo.jpg',
    'veg-peri-peri-momo.jpg',
    'veg-samosa.jpg',
    'veg-sandwich.jpg',
    'Watermelon-juice.jpg',
    'white-sauce-pasta.jpg'
  ]

  // Load franchise images first, then food images based on showAllImages state
  useEffect(() => {
    // Franchise images
    const franchiseFiles = [
      'F1.jpg',
      'F2.jpg',
      'F3.jpg',
      'F4.jpg'
    ]

    // First 8 food images only (for initial load)
    const initialFoodFiles = [
      'banana-pancakes.jpg',
      'black-cofee.jpg',
      'bread-omelette.jpg',
      'chicken-momos.jpg',
      'mango-lassi.jpg',
      'nutella-pancake.jpg',
      'red-sauce-pasta.jpg',
      'vada-pav.jpg'
    ]

    // Create franchise images array
    const franchiseImages = franchiseFiles.map((filename, index) => ({
      id: index + 1,
      src: `/Matkaari_Franchise/${filename}`,
      alt: `Matkaari Franchise ${index + 1}`,
      filename: filename,
      type: 'franchise'
    }))

    // Use all food images if showAllImages is true, otherwise use initial 8
    const foodFilesToShow = showAllImages ? allFoodFiles : initialFoodFiles

    // Create food images array
    const foodImages = foodFilesToShow.map((filename, index) => ({
      id: franchiseImages.length + index + 1,
      src: `/Matkaari_Foods/${filename}`,
      alt: formatFileName(filename),
      filename: filename,
      type: 'food'
    }))

    // Combine: franchise first, then food
    setGalleryImages([...franchiseImages, ...foodImages])
  }, [showAllImages])

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  return (
    <section id="gallery" className="py-16 md:py-20 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-12 md:mb-16"
        >
          <span className="inline-block px-6 py-3 rounded-full text-sm font-bold" style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}>
            📸 OUR GALLERY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold" style={{ color: '#B7410E' }}>
            Experience Matkaari
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto" style={{ color: '#0E1326', opacity: 0.7 }}>
            Take a visual journey through our unique kulhad cafe experience
          </p>
        </motion.div>

        {/* Gallery Grid - Mobile First */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-square rounded-xl md:rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              style={{ border: '2px solid #E4A93E' }}
              onClick={() => openLightbox(image, index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay with Name - Only visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center px-4">
                  <p className="text-white text-sm md:text-lg lg:text-xl font-bold drop-shadow-lg">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Menu Button */}
        {!showAllImages && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowAllImages(true)}
              className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all"
              style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}
              whileHover={{ scale: 1.05, backgroundColor: '#E4A93E' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🍽️ See All Menu Items</span>
              <svg 
                className="w-5 h-5 md:w-6 md:h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        )}

        {/* Lightbox Modal - Optimized for Mobile */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-2 sm:p-4"
              onClick={closeLightbox}
            >
              {/* Close Button - Mobile Optimized */}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                onClick={closeLightbox}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl z-10"
                style={{ backgroundColor: '#B7410E', color: '#FFFFFF' }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Previous Button - Mobile Optimized */}
              <motion.button
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl"
                style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Next Button - Mobile Optimized */}
              <motion.button
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl"
                style={{ backgroundColor: '#E4A93E', color: '#FFFFFF' }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Image Container - Mobile Optimized */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-7xl mx-auto px-12 sm:px-16"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full" style={{ maxHeight: 'calc(100vh - 100px)' }}>
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-contain rounded-lg sm:rounded-2xl shadow-2xl"
                    style={{ border: '2px solid #E4A93E', maxHeight: 'calc(100vh - 100px)' }}
                  />
                  
                  {/* Image Info - Mobile Optimized */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 rounded-b-lg sm:rounded-b-2xl"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
                  >
                    <p className="text-white text-sm sm:text-base md:text-lg font-bold mb-1 truncate">{selectedImage.alt}</p>
                    <p className="text-white text-xs opacity-60">
                      {currentIndex + 1} / {galleryImages.length}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery
