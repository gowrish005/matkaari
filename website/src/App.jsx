import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VisionMission from './components/VisionMission'
import WhyMatkaari from './components/WhyMatkaari'
import Menu from './components/Menu'
import Franchise from './components/Franchise'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="relative overflow-x-hidden w-full">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <WhyMatkaari />
      <Menu />
      <Franchise />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
