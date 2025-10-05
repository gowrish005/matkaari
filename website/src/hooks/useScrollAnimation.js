import { useEffect, useState, useRef } from 'react'

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  const defaultOptions = {
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px',
    ...options
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (!hasAnimated) {
            setHasAnimated(true)
          }
          if (!defaultOptions.triggerOnce) {
            // Keep observing if triggerOnce is false
          } else {
            observer.unobserve(entry.target)
          }
        } else if (!defaultOptions.triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce, hasAnimated])

  return { ref, isVisible, hasAnimated }
}

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollProgress
}

export const useElementScrollProgress = (ref) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const element = ref.current
      const rect = element.getBoundingClientRect()
      const elementHeight = element.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate when element enters and exits viewport
      const start = rect.top + window.scrollY - windowHeight
      const end = rect.top + window.scrollY + elementHeight

      const scrollPos = window.scrollY
      const elementProgress = ((scrollPos - start) / (end - start)) * 100

      setProgress(Math.min(100, Math.max(0, elementProgress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref])

  return progress
}
