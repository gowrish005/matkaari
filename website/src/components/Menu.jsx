import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Menu = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const INITIAL_ITEMS_COUNT = 8; // Show only 8 items initially

  const categories = [
    "All",
    "Chai & Coffee",
    "Beverages",
    "Pasta & Maggi",
    "Momos & Bao",
    "Sandwich",
    "Pizza",
    "Munchies",
  ];

  useEffect(() => {
    // Fetch and parse CSV
    fetch("/menu/menu-items.csv")
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split("\n").slice(1); // Skip header
        const items = lines
          .filter((line) => line.trim())
          .map((line) => {
            const [name, description, price, image] = line.split(",");
            return {
              name: name?.trim(),
              description: description?.trim(),
              price: price?.trim(),
              image: `/menu/images/${image?.trim()}`,
              category: getCategoryFromName(name?.trim()),
            };
          });
        setMenuItems(items);
      })
      .catch((error) => console.error("Error loading menu:", error));
  }, []);

  const getCategoryFromName = (name) => {
    const nameLower = name?.toLowerCase() || "";
    if (nameLower.includes("chai") || nameLower.includes("coffee"))
      return "Chai & Coffee";
    if (
      nameLower.includes("shake") ||
      nameLower.includes("lassi") ||
      nameLower.includes("lime")
    )
      return "Beverages";
    if (nameLower.includes("pasta") || nameLower.includes("maggi"))
      return "Pasta & Maggi";
    if (nameLower.includes("momo") || nameLower.includes("bao"))
      return "Momos & Bao";
    if (nameLower.includes("sandwich")) return "Sandwich";
    if (nameLower.includes("pizza")) return "Pizza";
    return "Munchies";
  };

  // Fallback images using Unsplash food images
  const getFallbackImage = (category) => {
    const fallbackImages = {
      "Chai & Coffee":
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
      Beverages:
        "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop",
      "Pasta & Maggi":
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
      "Momos & Bao":
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop",
      Sandwich:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
      Pizza:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      Munchies:
        "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=300&fit=crop",
    };
    return (
      fallbackImages[category] ||
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
    );
  };

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  // Get items to display based on showAll state
  const displayedItems = showAll 
    ? filteredItems 
    : filteredItems.slice(0, INITIAL_ITEMS_COUNT);

  const hasMoreItems = filteredItems.length > INITIAL_ITEMS_COUNT;

  // Reset showAll when category changes
  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  return (
    <section
      id="menu"
      className="py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
            style={{ backgroundColor: "#E4A93E", color: "#FFFFFF" }}
          >
            Our Offerings
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold"
            style={{ color: "#B7410E" }}
          >
            OUR MENU
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "#0E1326" }}>
            Discover our exquisite range served in traditional kulhads
          </p>
        </motion.div>

        {/* Category Filter - Desktop */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundColor:
                  selectedCategory === category ? "#B7410E" : "#FFFFFF",
                color: selectedCategory === category ? "#FFFFFF" : "#0E1326",
                border: `2px solid ${
                  selectedCategory === category ? "#B7410E" : "#E4A93E"
                }`,
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 10px 25px -5px rgba(183, 65, 14, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#B7410E" }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </div>

        {/* Category Filter - Mobile Horizontal Scroll */}
        <div className="sm:hidden mb-6">
          {/* Section Header */}
          <div className="mb-4 px-1">
            <h3 
              className="text-xl font-heading font-bold"
              style={{ color: "#0E1326" }}
            >
              {selectedCategory === "All" ? "All Items" : selectedCategory}
            </h3>
          </div>
          
          {/* Horizontal Category Scroll with proper spacing */}
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-1">
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.03, duration: 0.2 }}
                onClick={() => setSelectedCategory(category)}
                className="px-5 py-2.5 rounded-full font-semibold whitespace-nowrap flex-shrink-0 snap-start transition-all duration-200"
                style={{
                  backgroundColor:
                    selectedCategory === category ? "#E4A93E" : "#FFFFFF",
                  color: selectedCategory === category ? "#FFFFFF" : "#0E1326",
                  border: `2px solid ${
                    selectedCategory === category ? "#E4A93E" : "#E4A93E50"
                  }`,
                  boxShadow: selectedCategory === category 
                    ? "0 4px 12px -2px rgba(228, 169, 62, 0.4)" 
                    : "none"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Menu Items - Desktop Cards */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {displayedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={
                isVisible
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.9 }
              }
              transition={{
                duration: 0.5,
                delay: index * 0.03,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative"
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div className="relative rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white border-2 border-[#E4A93E] h-full">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E4A93E]/0 via-[#E4A93E]/0 to-[#B7410E]/0 group-hover:from-[#E4A93E]/10 group-hover:to-[#B7410E]/5 transition-all duration-500 pointer-events-none z-10"></div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    onError={(e) => {
                      e.target.src = getFallbackImage(item.category);
                    }}
                  />
                  {/* Price badge floating on image */}
                  <motion.div
                    className="absolute top-3 right-3 px-4 py-2 rounded-full text-base font-bold shadow-xl backdrop-blur-sm"
                    style={{ backgroundColor: "#B7410E", color: "#FFFFFF" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    ₹{item.price}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2 relative z-20">
                  <motion.h3
                    className="text-lg font-heading font-bold transition-all"
                    style={{ color: "#0E1326" }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.h3>
                  <p
                    className="text-sm line-clamp-2"
                    style={{ color: "#0E1326", opacity: 0.7 }}
                  >
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <motion.span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: "#E4A93E", color: "#FFFFFF" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.category}
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Menu Items - Mobile List */}
        <div className="sm:hidden space-y-4">
          {displayedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={
                isVisible
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -20 }
              }
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div 
                className="flex items-start gap-4 p-3 rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                {/* Image */}
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = getFallbackImage(item.category);
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 py-2">
                  <h3 
                    className="text-lg font-heading font-bold leading-tight mb-2"
                    style={{ color: "#0E1326" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2 mb-3"
                    style={{ color: "#0E1326", opacity: 0.5 }}
                  >
                    {item.description}
                  </p>
                  <div className="flex items-center">
                    <span
                      className="text-base font-bold"
                      style={{ color: "#B7410E" }}
                    >
                      ₹ {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && hasMoreItems && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="group relative px-10 py-4 rounded-full font-bold text-lg shadow-xl overflow-hidden"
              style={{ 
                backgroundColor: "#E4A93E", 
                color: "#FFFFFF",
                border: "3px solid #B7410E"
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(183, 65, 14, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0"
                style={{ backgroundColor: "#B7410E" }}
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                <span>View All {filteredItems.length} Items</span>
                <motion.span
                  animate={{ 
                    y: [0, -3, 0],
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👇
                </motion.span>
              </span>
            </motion.button>
            
            {/* Item count hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-sm"
              style={{ color: "#0E1326" }}
            >
              Showing {displayedItems.length} of {filteredItems.length} items
            </motion.p>
          </motion.div>
        )}

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center space-x-4 rounded-2xl px-8 py-6 shadow-xl"
            style={{ backgroundColor: "#FFFFFF", border: "2px solid #E4A93E" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(228, 169, 62, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.span 
              className="text-4xl"
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              🏺
            </motion.span>
            <div className="text-left">
              <p className="text-lg font-semibold" style={{ color: "#0E1326" }}>
                Every Dish Served in Traditional Kulhads
              </p>
              <p className="text-sm" style={{ color: "#0E1326" }}>
                Celebrating the rich heritage of earthenware
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
