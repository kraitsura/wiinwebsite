'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-config'

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

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(options: ScrollAnimationOptions = {}): React.RefObject<T> {
  const elementRef = useRef<T>(null)

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
          ease: "power2.out",
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
          ease: "power2.out",
        })
      }
    })

    return () => ctx.revert()
  }, [options.start, options.end, options.scrub, options.duration, options.delay, options.y, options.opacity, options.stagger])

  return elementRef as React.RefObject<T>
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

interface HeroLoadAnimationRefs {
  titleRef: React.RefObject<HTMLHeadingElement | null>
  sloganRef: React.RefObject<HTMLParagraphElement | null>
  subtitleRef: React.RefObject<HTMLParagraphElement | null>
  buttonsRef: React.RefObject<HTMLDivElement | null>
}

export function useHeroLoadAnimation(): HeroLoadAnimationRefs {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const sloganRef = useRef<HTMLParagraphElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const buttonsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const elements = [titleRef.current, sloganRef.current, subtitleRef.current, buttonsRef.current]

    // Only proceed if all elements are mounted
    if (elements.some(el => !el)) return

    const ctx = gsap.context(() => {
      // Create timeline for sequential animations
      const tl = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "power2.out",
        }
      })

      // Animate elements sequentially with stagger
      tl.from(titleRef.current, {
        y: 30,
        opacity: 0,
      })
      .from(sloganRef.current, {
        y: 30,
        opacity: 0,
      }, "-=0.6") // Start 0.6s before previous animation ends (overlap for smoothness)
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
      }, "-=0.6")
      .from(buttonsRef.current, {
        y: 30,
        opacity: 0,
      }, "-=0.6")
    })

    return () => ctx.revert()
  }, [])

  return { titleRef, sloganRef, subtitleRef, buttonsRef }
}
