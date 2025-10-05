import React from 'react'
import { useScrollProgress } from '../hooks/useScrollAnimation'

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress()

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(to right, #E5AA3F, #B7410E)'
          }}
        />
      </div>

      {/* Scroll to Top Button */}
      {scrollProgress > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
          style={{ backgroundColor: '#B7410E' }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  )
}

export default ScrollProgress
