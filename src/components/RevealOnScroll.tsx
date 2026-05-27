import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type RevealOnScrollProps = {
  children: ReactNode
}

function RevealOnScroll({ children }: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.2,
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className={isVisible ? 'reveal reveal-visible' : 'reveal'}
    >
      {children}
    </div>
  )
}

export default RevealOnScroll