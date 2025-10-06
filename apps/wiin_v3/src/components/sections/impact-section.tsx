"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isReverse, setIsReverse] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScrollY = window.scrollY
          const scrollingDown = currentScrollY > lastScrollY.current
          lastScrollY.current = currentScrollY

          const rect = entry.boundingClientRect
          const viewportHeight = window.innerHeight

          // Determine which edge the section is at
          // Increased threshold: only trigger reverse when scrolled significantly up
          const isAboveViewport = rect.bottom < viewportHeight * 0.3
          const isBelowViewport = rect.top > viewportHeight * 0.7
          const isWellBelowViewport = rect.top > viewportHeight * 1.5 // Much further down

          if (entry.isIntersecting) {
            // Entering viewport
            if (scrollingDown) {
              // Scrolling down, entering from top - play forward
              setIsVisible(true)
              setIsReverse(false)
            } else {
              // Scrolling up, entering from bottom - only reverse if coming from far below
              const shouldReverse = rect.bottom > viewportHeight * 0.6
              setIsVisible(true)
              setIsReverse(shouldReverse)
            }
          } else {
            // Exiting viewport
            if (!scrollingDown && isAboveViewport) {
              // Scrolling up and exiting from TOP - keep visible (completed state)
              setIsVisible(true)
              setIsReverse(false)
            } else if (!scrollingDown && isWellBelowViewport) {
              // Scrolling up and far from BOTTOM - trigger reverse only when very far
              setIsVisible(true)
              setIsReverse(true)
            } else if (scrollingDown) {
              // Scrolling down and exiting - reset for next entry
              setIsVisible(false)
              setIsReverse(false)
            }
          }
        })
      },
      {
        threshold: [0, 0.2],
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-32 px-4 relative overflow-hidden ${
        isVisible ? (isReverse ? 'animate-reverse' : 'animate-forward') : ''
      }`}
      data-reverse={isReverse}
    >
      {/* Decorative grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, currentColor 20px, currentColor 21px),
                           repeating-linear-gradient(90deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)`
        }} />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Main Headlines - Tighter Spacing */}
        <div className="text-4xl md:text-6xl font-bold leading-tight tracking-wide mb-8 md:mb-16">
          <h2 className="mb-2 headline-animate headline-1 overflow-hidden">
            <span className="inline-block">
              {isVisible && "TAKE BACK YOUR YEARS.".split('').map((char, i, arr) => (
                <span
                  key={i}
                  className={`inline-block ${isReverse ? 'letter-reveal-reverse' : 'letter-reveal'}`}
                  style={{ animationDelay: `${isReverse ? (arr.length - i) * 0.03 : i * 0.03}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h2>
          <h2 className="mb-2 headline-animate headline-2 overflow-hidden">
            <span className="inline-block">
              {isVisible && "FIGHT INFLAMMATION.".split('').map((char, i, arr) => (
                <span
                  key={i}
                  className={`inline-block ${isReverse ? 'letter-reveal-reverse' : 'letter-reveal'}`}
                  style={{ animationDelay: `${isReverse ? (arr.length - i + 17) * 0.03 : (i + 17) * 0.03}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h2>
          <h2 className="mb-0 headline-animate headline-3">
            <span className="inline-block">
              {isVisible && "NEVER COMPROMISE.".split('').map((char, i, arr) => (
                <span
                  key={i}
                  className={`inline-block ${isReverse ? 'letter-reveal-final-reverse' : 'letter-reveal letter-reveal-final'}`}
                  style={{ animationDelay: `${isReverse ? (arr.length - i + 32) * 0.03 : (i + 32) * 0.03}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h2>
        </div>

        {/* Bottom Section */}
        <div className={`pt-8 md:pt-12 mt-8 md:mt-12 border-section relative ${isVisible ? (isReverse ? 'visible-reverse' : 'visible') : ''}`}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-6 md:mb-8">
            <div className="content-slide-left">
              <div className="wellness-text-wrapper relative">
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide relative pl-8 md:pl-10">
                  WELLNESS MEETS SATISFACTION
                  {/* Corner brackets */}
                  <span className="absolute -left-0 -top-4 md:-top-6 text-primary bracket-animate text-xl md:text-2xl">╔</span>
                  <span className="absolute -right-0 -bottom-4 md:-bottom-6 text-primary bracket-animate text-xl md:text-2xl" style={{ animationDelay: '0.2s' }}>╝</span>
                </h3>
              </div>
            </div>
            <div className="content-slide-right">
              <p className="text-xs md:text-sm uppercase tracking-wide leading-relaxed text-muted-foreground">
                TRADITIONAL NICOTINE POUCHES DAMAGE YOUR GUMS. <br />
                WiiN REPAIRS THEM. IT'S THAT SIMPLE.
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Link
              href="/benefits"
              className="learn-more-btn text-[10px] uppercase tracking-widest font-medium hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 group"
            >
              <span>Learn More</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Letter-by-letter reveal animation */
        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
            filter: blur(10px);
          }
          50% {
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes letterRevealFinal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
            filter: blur(10px);
          }
          40% {
            filter: blur(2px);
          }
          70% {
            opacity: 1;
            transform: translateY(0) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .letter-reveal {
          animation: letterReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .letter-reveal-final {
          animation: letterRevealFinal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        /* Reverse letter animations */
        @keyframes letterRevealReverse {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
          50% {
            filter: blur(2px);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) scale(0.8);
            filter: blur(10px);
          }
        }

        @keyframes letterRevealFinalReverse {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
          30% {
            opacity: 1;
            transform: translateY(0) scale(1.05);
          }
          60% {
            filter: blur(2px);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) scale(0.8);
            filter: blur(10px);
          }
        }

        .letter-reveal-reverse {
          animation: letterRevealReverse 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 1;
        }

        .letter-reveal-final-reverse {
          animation: letterRevealFinalReverse 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 1;
        }

        /* Border reveal animation - dots appearing sequentially */
        @keyframes dotsAppear {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .border-section {
          position: relative;
        }

        .border-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          border-top: 3px dotted oklch(0.1 0 0);
        }

        .border-section.visible::before {
          animation: dotsAppear 1.2s steps(60) 0s forwards;
        }

        @keyframes dotsDisappear {
          0% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }

        .border-section.visible-reverse::before {
          animation: dotsDisappear 1.2s steps(60) 0s forwards;
        }

        .dark .border-section::before {
          border-top-color: oklch(0.98 0 0);
        }

        /* Second dotted line below wellness text */
        .border-section::after {
          content: '';
          position: absolute;
          top: 200px;
          left: 0;
          width: 0%;
          border-top: 3px dotted oklch(0.1 0 0);
        }

        @media (min-width: 768px) {
          .border-section::after {
            top: 120px;
          }
        }

        .border-section.visible::after {
          animation: dotsAppear 1.2s steps(60) 0.3s forwards;
        }

        .border-section.visible-reverse::after {
          animation: dotsDisappear 1.2s steps(60) 0.3s forwards;
        }

        .dark .border-section::after {
          border-top-color: oklch(0.98 0 0);
        }

        /* Content slide animations */
        @keyframes slideLeft {
          0% {
            opacity: 0;
            transform: translateX(50px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes slideRight {
          0% {
            opacity: 0;
            transform: translateX(-50px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        .content-slide-left {
          opacity: 0;
        }

        .border-section.visible .content-slide-left {
          animation: slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards;
        }

        @keyframes slideLeftReverse {
          0% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translateX(50px);
            filter: blur(8px);
          }
        }

        .border-section.visible-reverse .content-slide-left {
          animation: slideLeftReverse 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards;
        }

        .content-slide-right {
          opacity: 0;
        }

        .border-section.visible .content-slide-right {
          animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        @keyframes slideRightReverse {
          0% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50px);
            filter: blur(8px);
          }
        }

        .border-section.visible-reverse .content-slide-right {
          animation: slideRightReverse 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        /* Bracket animations */
        @keyframes bracketPop {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          70% {
            transform: scale(1.2) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .bracket-animate {
          opacity: 0;
        }

        .border-section.visible .bracket-animate {
          animation: bracketPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
        }

        @keyframes bracketPopReverse {
          0% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          30% {
            transform: scale(1.2) rotate(5deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
        }

        .border-section.visible-reverse .bracket-animate {
          animation: bracketPopReverse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
        }

        /* Section entrance animations */
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-forward {
          animation: fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeOutUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px);
          }
        }

        .animate-reverse {
          animation: fadeOutUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Headline hover effects */
        .headline-animate {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .headline-animate:hover {
          transform: translateX(10px);
        }

        /* Learn more button animation */
        @keyframes fadeInButton {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 0.6;
            transform: translateY(0);
          }
        }

        .border-section.visible .learn-more-btn {
          animation: fadeInButton 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
        }

        @keyframes fadeOutButton {
          0% {
            opacity: 0.6;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }

        .border-section.visible-reverse .learn-more-btn {
          animation: fadeOutButton 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards;
        }
      `}</style>
    </section>
  )
}
