'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap-config'

export function PowerYourDayStrips() {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Detect if device supports touch
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    // Skip scroll animations for touch devices
    if (isTouchDevice) return
    containerRefs.current.forEach((container, index) => {
      if (!container) return

      const isReverse = index % 2 === 1 // Odd indexes go reverse (right to left)

      // For infinite loop effect, we animate from start position and loop
      if (isReverse) {
        // Right to left: start from 0, move to -50% (half the width since we duplicated)
        gsap.fromTo(
          container,
          { x: "0%" },
          {
            x: "-50%",
            scrollTrigger: {
              trigger: container.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            ease: "none",
          }
        )
      } else {
        // Left to right: start from -50%, move to 0%
        gsap.fromTo(
          container,
          { x: "-50%" },
          {
            x: "0%",
            scrollTrigger: {
              trigger: container.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            ease: "none",
          }
        )
      }
    })
  }, [isTouchDevice])

  const strips = [
    { color: "text-foreground" },  // 1: left to right, foreground (black/white)
    { color: "text-primary" },     // 2: right to left, sea green
    { color: "text-foreground" },  // 3: left to right, foreground
    { color: "text-primary" },     // 4: right to left, sea green
    { color: "text-foreground" },  // 5: left to right, foreground
  ]

  const repeatText = "POWER YOUR DAY "

  return (
    <section className="py-8 md:py-16 overflow-hidden">
      <div className="space-y-0">
        {strips.map((strip, index) => (
          <div key={index} className="overflow-hidden -my-2">
            <div
              ref={(el) => {
                containerRefs.current[index] = el
              }}
              className="text-strip-container"
            >
              {/* Duplicate the text twice for infinite loop effect */}
              <span className={`text-strip ${strip.color}`}>
                {repeatText.repeat(20)}
              </span>
              <span className={`text-strip ${strip.color}`}>
                {repeatText.repeat(20)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
