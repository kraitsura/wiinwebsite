"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationOptions {
  start?: string
  end?: string
  scrub?: boolean | number
  duration?: number
  delay?: number
  y?: number
  opacity?: number
  stagger?: number
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const {
      start = "30% 90%",
      end = "70% 90%",
      scrub = true,
      duration = 1,
      delay = 0,
      y = 100,
      opacity = 0,
      stagger = 0,
    } = options

    const ctx = gsap.context(() => {
      const children = elementRef.current?.children

      if (children && children.length > 0 && stagger > 0) {
        // Animate children with stagger
        gsap.from(children, {
          scrollTrigger: {
            trigger: elementRef.current,
            start,
            end,
            scrub,
          },
          y,
          opacity,
          duration,
          delay,
          stagger,
        })
      } else {
        // Animate single element
        gsap.from(elementRef.current, {
          scrollTrigger: {
            trigger: elementRef.current,
            start,
            end,
            scrub,
          },
          y,
          opacity,
          duration,
          delay,
        })
      }
    })

    return () => ctx.revert()
  }, [options.start, options.end, options.scrub, options.duration, options.delay, options.y, options.opacity, options.stagger])

  return elementRef
}

export function useLoadAnimation(options: { y?: number; opacity?: number; duration?: number; delay?: number } = {}) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const { y = 100, opacity = 0, duration = 1, delay = 0 } = options

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        y,
        opacity,
        duration,
        delay,
        ease: "power2.out",
      })
    })

    return () => ctx.revert()
  }, [options.y, options.opacity, options.duration, options.delay])

  return elementRef
}
