import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Instagram } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [menuItems, setMenuItems] = useState([])
  const [searchKeywords, setSearchKeywords] = useState(null)
  const [searchResults, setSearchResults] = useState({ navLinks: [], menuItems: [], popularSearches: [] })

  // Load search keywords
  useEffect(() => {
    fetch("/search-keywords.json")
      .then((response) => response.json())
      .then((data) => setSearchKeywords(data))
      .catch((error) => console.error("Error loading search keywords:", error))
  }, [])

  // Load menu items for search
  useEffect(() => {
    fetch("/menu/menu-items.csv")
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split("\n").slice(1)
        const items = lines
          .filter((line) => line.trim())
          .map((line) => {
            const [name, description, price] = line.split(",")
            return {
              name: name?.trim(),
              description: description?.trim(),
              price: price?.trim(),
            }
          })
        setMenuItems(items)
      })
      .catch((error) => console.error("Error loading menu:", error))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['hero', 'why-matkaari', 'franchise', 'gallery', 'testimonials', 'faq', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setIsOpen(false) // Close menu first for immediate feedback
    
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - offset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100) // Small delay to let menu close animation start
  }

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Why Matkaari', id: 'why-matkaari' },
    { name: 'Franchise Models', id: 'franchise' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ]

  // Search functionality with custom keywords
  useEffect(() => {
    if (searchQuery.trim() === '' || !searchKeywords) {
      setSearchResults({ navLinks: [], menuItems: [], popularSearches: [] })
      return
    }

    const query = searchQuery.toLowerCase()
    
    // Search nav links with keywords
    const matchedNavLinks = navLinks.filter(link => {
      const linkKeywords = searchKeywords.navigation[link.id]?.keywords || []
      return link.name.toLowerCase().includes(query) ||
             linkKeywords.some(keyword => keyword.includes(query))
    })

    // Search popular searches
    const matchedPopularSearches = searchKeywords.popularSearches.filter(search =>
      search.term.toLowerCase().includes(query) ||
      search.description.toLowerCase().includes(query)
    ).slice(0, 3)

    // Search menu items with enhanced keywords
    const matchedMenuItems = menuItems.filter(item => {
      const itemName = item.name?.toLowerCase() || ''
      const itemDesc = item.description?.toLowerCase() || ''
      
      // Check direct match
      if (itemName.includes(query) || itemDesc.includes(query)) return true
      
      // Check custom keywords
      for (const [key, keywords] of Object.entries(searchKeywords.menuItemKeywords)) {
        if (itemName.includes(key.toLowerCase()) || itemDesc.includes(key.toLowerCase())) {
          if (keywords.some(keyword => keyword.includes(query))) return true
        }
      }
      
      // Check category keywords
      for (const [category, data] of Object.entries(searchKeywords.menuCategories)) {
        if (data.keywords.some(keyword => keyword.includes(query))) {
          // Return items that might be in this category
          return itemName.includes(category.toLowerCase().split(' ')[0])
        }
      }
      
      return false
    }).slice(0, 5) // Limit to 5 results

    setSearchResults({
      navLinks: matchedNavLinks,
      menuItems: matchedMenuItems,
      popularSearches: matchedPopularSearches
    })
  }, [searchQuery, menuItems, searchKeywords])

  const handleSearchItemClick = (type, id) => {
    if (type === 'nav') {
      scrollToSection(id)
    } else {
      scrollToSection('menu')
    }
    setSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed w-full transition-all duration-500 backdrop-blur-lg ${
          scrolled 
            ? 'shadow-xl' 
            : 'shadow-md'
        }`}
        style={{ 
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.75)',
          borderBottom: scrolled ? '2px solid rgba(229, 170, 63, 0.3)' : '1px solid rgba(229, 170, 63, 0.2)',
          zIndex: 100
        }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-4">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 md:space-x-3 group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Logo Image */}
            <motion.img
              src="/nav-logo.png"
              alt="Matkaari Logo"
              className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
            
            {/* Brand Name */}
            <motion.div 
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-heading font-bold relative"
              style={{ color: '#E5AA3F' }}
            >
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#E5AA3F] to-[#B7410E]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
              MATKAARI
            </motion.div>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                onClick={() => scrollToSection(link.id)}
                className="relative px-4 py-2 rounded-lg font-medium transition-all overflow-hidden"
                style={{ color: activeSection === link.id ? '#FFFFFF' : '#0E1326' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background animation */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: '#E4A93E' }}
                  initial={false}
                  animate={{
                    scale: activeSection === link.id ? 1 : 0,
                    opacity: activeSection === link.id ? 1 : 0
                  }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
                
                {/* Active indicator */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E5AA3F] to-[#B7410E]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <span className="relative z-10">{link.name}</span>
              </motion.button>
            ))}
            
            {/* Instagram Icon - Desktop */}
            <motion.a
              href="https://www.instagram.com/matkaari/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center p-2.5 rounded-lg relative overflow-hidden group"
              style={{ color: '#B7410E' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Background glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{ backgroundColor: '#E4A93E' }}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              
              <Instagram size={22} strokeWidth={2.5} className="relative z-10" />
            </motion.a>
          </div>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button - Desktop */}
            <motion.button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:flex items-center justify-center p-2.5 rounded-lg relative overflow-hidden group"
              style={{ color: '#B7410E' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Background glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{ backgroundColor: '#E4A93E' }}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.15 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                animate={{ rotate: searchOpen ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Search size={22} strokeWidth={2.5} />
              </motion.div>
            </motion.button>

            {/* Search Button - Mobile */}
            <motion.button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 rounded-lg relative"
              style={{ color: '#B7410E', touchAction: 'manipulation' }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Search size={20} strokeWidth={2.5} />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg relative"
              style={{ color: '#B7410E', touchAction: 'manipulation' }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left py-3 px-4 rounded-lg font-medium relative overflow-hidden"
                    style={{ 
                      color: activeSection === link.id ? '#FFFFFF' : '#0E1326',
                      backgroundColor: activeSection === link.id ? '#E4A93E' : 'transparent'
                    }}
                    whileTap={{ scale: 0.97, backgroundColor: '#E4A93E' }}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {link.name}
                      {activeSection === link.id && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: '#FFFFFF' }}
                        />
                      )}
                    </span>
                  </motion.button>
                ))}
                
                {/* Instagram Link - Mobile */}
                <motion.a
                  href="https://www.instagram.com/matkaari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg font-medium relative overflow-hidden"
                  style={{ color: '#B7410E' }}
                  whileTap={{ scale: 0.97, backgroundColor: 'rgba(228, 169, 62, 0.1)' }}
                >
                  <Instagram size={20} strokeWidth={2.5} />
                  <span>Follow Us on Instagram</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <>
            {/* Full Screen Backdrop - Click to Close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              style={{ zIndex: 200 }}
              onClick={() => {
                setSearchOpen(false)
                setSearchQuery('')
              }}
            />
            
            {/* Search Container - Mobile Responsive */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-20 md:top-24 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl max-h-[80vh] overflow-hidden"
              style={{ zIndex: 201 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                {/* Search Input */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2"
                    style={{ color: '#B7410E' }}
                  >
                    <Search size={20} strokeWidth={2.5} />
                  </motion.div>
                  
                  <motion.input
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    type="text"
                    placeholder="Search menu or navigation..."
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-4 md:py-6 pl-12 md:pl-16 pr-4 md:pr-6 text-base md:text-lg font-medium outline-none"
                    style={{ 
                      color: '#0E1326',
                      backgroundColor: '#FFFFFF'
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setSearchOpen(false)
                        setSearchQuery('')
                      }
                    }}
                  />
                </div>
                
                {/* Search Results */}
                <div className="overflow-y-auto flex-1">
                  {searchQuery.trim() !== '' ? (
                    <>
                      {/* Popular Searches */}
                      {searchResults.popularSearches.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="border-t px-4 md:px-6 py-4"
                          style={{ borderColor: '#E4A93E20' }}
                        >
                          <p className="text-xs md:text-sm font-semibold mb-3" style={{ color: '#B7410E' }}>
                            SUGGESTIONS
                          </p>
                          <div className="space-y-2">
                            {searchResults.popularSearches.map((search, idx) => (
                              <motion.button
                                key={idx}
                                onClick={() => handleSearchItemClick('nav', search.redirect)}
                                className="w-full text-left p-3 rounded-lg transition-colors"
                                style={{ 
                                  backgroundColor: '#E4A93E05'
                                }}
                                whileHover={{ backgroundColor: '#E4A93E15' }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-start gap-2">
                                  <span className="text-lg">🔍</span>
                                  <div className="flex-1">
                                    <p className="text-sm md:text-base font-semibold" style={{ color: '#0E1326' }}>
                                      {search.term}
                                    </p>
                                    <p className="text-xs md:text-sm mt-0.5" style={{ color: '#0E1326', opacity: 0.6 }}>
                                      {search.description}
                                    </p>
                                  </div>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Navigation Results */}
                      {searchResults.navLinks.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="border-t px-4 md:px-6 py-4"
                          style={{ borderColor: '#E4A93E20' }}
                        >
                          <p className="text-xs md:text-sm font-semibold mb-3" style={{ color: '#B7410E' }}>
                            NAVIGATION
                          </p>
                          <div className="space-y-2">
                            {searchResults.navLinks.map((link) => (
                              <motion.button
                                key={link.id}
                                onClick={() => handleSearchItemClick('nav', link.id)}
                                className="w-full text-left py-2 px-3 rounded-lg font-medium transition-colors"
                                style={{ 
                                  color: '#0E1326',
                                  backgroundColor: 'transparent'
                                }}
                                whileHover={{ backgroundColor: '#E4A93E20' }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <span className="text-sm md:text-base">{link.name}</span>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Menu Items Results */}
                      {searchResults.menuItems.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="border-t px-4 md:px-6 py-4"
                          style={{ borderColor: '#E4A93E20' }}
                        >
                          <p className="text-xs md:text-sm font-semibold mb-3" style={{ color: '#B7410E' }}>
                            MENU ITEMS
                          </p>
                          <div className="space-y-3">
                            {searchResults.menuItems.map((item, idx) => (
                              <motion.button
                                key={idx}
                                onClick={() => handleSearchItemClick('menu', 'menu')}
                                className="w-full text-left p-3 rounded-lg transition-colors"
                                style={{ 
                                  backgroundColor: '#E4A93E10'
                                }}
                                whileHover={{ backgroundColor: '#E4A93E20' }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm md:text-base font-semibold truncate" style={{ color: '#0E1326' }}>
                                      {item.name}
                                    </h4>
                                    <p className="text-xs md:text-sm line-clamp-1 mt-1" style={{ color: '#0E1326', opacity: 0.6 }}>
                                      {item.description}
                                    </p>
                                  </div>
                                  <span className="text-sm md:text-base font-bold flex-shrink-0" style={{ color: '#B7410E' }}>
                                    ₹{item.price}
                                  </span>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* No Results */}
                      {searchResults.navLinks.length === 0 && 
                       searchResults.menuItems.length === 0 && 
                       searchResults.popularSearches.length === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="px-4 md:px-6 py-8 text-center"
                        >
                          <p className="text-sm md:text-base" style={{ color: '#0E1326', opacity: 0.5 }}>
                            No results found for "{searchQuery}"
                          </p>
                          <p className="text-xs mt-2" style={{ color: '#0E1326', opacity: 0.4 }}>
                            Try: "chai", "pizza", "contact", "franchise"
                          </p>
                        </motion.div>
                      )}
                    </>
                  ) : (
                    /* Quick Navigation - Default View */
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="border-t px-4 md:px-6 py-4"
                      style={{ borderColor: '#E4A93E20' }}
                    >
                      <p className="text-xs md:text-sm font-semibold mb-3" style={{ color: '#B7410E' }}>
                        QUICK NAVIGATION
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {navLinks.map((link, index) => (
                          <motion.button
                            key={link.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 + index * 0.05 }}
                            onClick={() => {
                              scrollToSection(link.id)
                              setSearchOpen(false)
                              setSearchQuery('')
                            }}
                            className="text-left py-2 px-3 rounded-lg font-medium transition-colors"
                            style={{ 
                              color: '#0E1326',
                              backgroundColor: 'transparent'
                            }}
                            whileHover={{ 
                              backgroundColor: '#E4A93E20',
                              x: 5
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="text-xs md:text-sm">{link.name}</span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
                
                {/* Close hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="px-4 md:px-6 py-2 md:py-3 text-center text-xs flex-shrink-0"
                  style={{ 
                    color: '#0E132680',
                    backgroundColor: '#E4A93E10'
                  }}
                >
                  Press <kbd className="px-1.5 md:px-2 py-0.5 md:py-1 rounded font-semibold text-xs" style={{ backgroundColor: '#E4A93E30' }}>ESC</kbd> or click outside to close
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  )
}

export default Navbar
