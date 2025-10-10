import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FranchiseForm from './components/FranchiseForm'
import WhyMatkaari from './components/WhyMatkaari'
import Franchise from './components/Franchise'
import VisionMission from './components/VisionMission'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="relative overflow-x-hidden w-full">
      {/* <ScrollProgress /> */}
      <Navbar />
      <Hero />
      <FranchiseForm />
      <WhyMatkaari />
      <Franchise />
      <VisionMission />
      <Testimonials />
      <Gallery />
      <FAQ />
      {/* Second Franchise Form at Bottom */}
      <div id="franchise-form-bottom">
        <FranchiseForm />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
