"use client"

import { useEffect, useRef, useState } from "react"

export function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Detect scroll direction based on intersection position
            const direction = entry.boundingClientRect.top < window.innerHeight / 2 ? 'up' : 'down'
            setScrollDirection(direction)
          }
        })
      },
      {
        threshold: 0.2,
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
      className={`py-32 px-4 scroll-snap-align-start relative overflow-hidden ${
        isVisible ? (scrollDirection === 'down' ? 'animate-in-down' : 'animate-in-up') : ''
      }`}
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
        <div className="text-4xl md:text-6xl font-bold leading-tight tracking-wide mb-16">
          <h2 className="mb-2 headline-animate headline-1 overflow-hidden">
            <span className="inline-block">
              {isVisible && "REPAIR YOUR GUMS.".split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block letter-reveal"
                  style={{ animationDelay: `${i * 0.03}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h2>
          <h2 className="mb-2 headline-animate headline-2 overflow-hidden">
            <span className="inline-block">
              {isVisible && "POWER YOUR DAY.".split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block letter-reveal"
                  style={{ animationDelay: `${(i + 17) * 0.03}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h2>
          <h2 className="mb-0 headline-animate headline-3">
            <span className="inline-block">
              {isVisible && "NO COMPROMISE.".split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block letter-reveal letter-reveal-final"
                  style={{ animationDelay: `${(i + 32) * 0.03}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h2>
        </div>

        {/* Bottom Section */}
        <div className={`pt-12 mt-12 border-section ${isVisible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="content-slide-left">
              <div className="wellness-text-wrapper relative">
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide relative pl-10">
                  WELLNESS MEETS SATISFACTION
                  {/* Corner brackets */}
                  <span className="absolute -left-0 -top-6 text-primary bracket-animate">╔</span>
                  <span className="absolute -right-0 -bottom-6 text-primary bracket-animate" style={{ animationDelay: '0.2s' }}>╝</span>
                </h3>
              </div>
            </div>
            <div className="content-slide-right">
              <p className="text-sm uppercase tracking-wide leading-relaxed text-muted-foreground">
                TRADITIONAL NICOTINE POUCHES DAMAGE YOUR GUMS. <br />
                WIIN REPAIRS THEM. IT'S THAT SIMPLE.
              </p>
            </div>
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

        .dark .border-section::before {
          border-top-color: oklch(0.98 0 0);
        }

        /* Second dotted line below wellness text */
        .border-section::after {
          content: '';
          position: absolute;
          top: 120px;
          left: 0;
          width: 0%;
          border-top: 3px dotted oklch(0.1 0 0);
        }

        .border-section.visible::after {
          animation: dotsAppear 1.2s steps(60) 0.3s forwards;
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

        .content-slide-right {
          opacity: 0;
        }

        .border-section.visible .content-slide-right {
          animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
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

        .animate-in-down {
          animation: fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Headline hover effects */
        .headline-animate {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .headline-animate:hover {
          transform: translateX(10px);
        }
      `}</style>
    </section>
  )
}
