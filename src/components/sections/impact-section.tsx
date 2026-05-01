"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

type Phase = "initial" | "in" | "out"

export function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<Phase>("initial")

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    let current: Phase = "initial"

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (current !== "in") {
            current = "in"
            setPhase("in")
          }
        } else if (current === "in") {
          current = "out"
          setPhase("out")
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const isOut = phase === "out"

  const renderLetters = (text: string, offset = 0, finalAccent = false) => {
    const arr = text.split("")
    return arr.map((char, i) => {
      const delay = isOut
        ? (arr.length - i + offset) * 0.03
        : (i + offset) * 0.03
      return (
        <span
          key={i}
          className={`inline-block letter ${finalAccent ? "letter-final" : ""}`}
          style={{ animationDelay: `${delay}s` }}
        >
          {char === " " ? " " : char}
        </span>
      )
    })
  }

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-32 px-4 relative overflow-hidden phase-${phase}`}
    >
      {/* Decorative grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, currentColor 20px, currentColor 21px),
                           repeating-linear-gradient(90deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Main Headlines - Tighter Spacing */}
        <div className="text-4xl md:text-6xl font-bold leading-tight tracking-wide mb-8 md:mb-16">
          <h2 className="mb-2 headline-animate headline-1 overflow-hidden">
            <span key={`h1-${phase}`} className="inline-block">
              {renderLetters("TAKE BACK YOUR YEARS.", 0)}
            </span>
          </h2>
          <h2 className="mb-2 headline-animate headline-2 overflow-hidden">
            <span key={`h2-${phase}`} className="inline-block">
              {renderLetters("FIGHT INFLAMMATION.", 17)}
            </span>
          </h2>
          <h2 className="mb-0 headline-animate headline-3">
            <span key={`h3-${phase}`} className="inline-block">
              {renderLetters("NEVER COMPROMISE.", 32, true)}
            </span>
          </h2>
        </div>

        {/* Bottom Section */}
        <div
          key={`bottom-${phase}`}
          className="pt-8 md:pt-12 mt-8 md:mt-12 border-section relative bottom-section"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-6 md:mb-8">
            <div className="content-slide-left">
              <div className="wellness-text-wrapper relative">
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide relative pl-8 md:pl-10">
                  WELLNESS MEETS SATISFACTION
                  {/* Corner brackets */}
                  <span className="absolute -left-0 -top-4 md:-top-6 text-primary bracket-animate text-xl md:text-2xl">
                    ╔
                  </span>
                  <span
                    className="absolute -right-0 -bottom-4 md:-bottom-6 text-primary bracket-animate text-xl md:text-2xl"
                    style={{ animationDelay: "0.2s" }}
                  >
                    ╝
                  </span>
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
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ---------- LETTER REVEAL ---------- */
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

        /* Base letter state — invisible until a phase animation runs */
        .letter {
          opacity: 0;
        }

        /* IN: forward reveal, end-state opacity 1 */
        .phase-in .letter {
          animation: letterReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .phase-in .letter-final {
          animation: letterRevealFinal 0.8s cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        /* OUT: reverse reveal, starts visible, ends invisible */
        .phase-out .letter {
          opacity: 1;
          animation: letterRevealReverse 0.6s cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        /* INITIAL: hidden, no animation (no flash on mount before first IO event) */
        .phase-initial .letter {
          opacity: 0;
        }

        /* ---------- DOTTED BORDERS ---------- */
        @keyframes dotsAppear {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes dotsDisappear {
          0% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }

        .border-section {
          position: relative;
        }

        .border-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          border-top: 3px dotted oklch(0.1 0 0);
        }

        .border-section::after {
          content: "";
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

        .dark .border-section::before,
        .dark .border-section::after {
          border-top-color: oklch(0.98 0 0);
        }

        .phase-in .border-section::before {
          animation: dotsAppear 1.2s steps(60) 0s forwards;
        }
        .phase-in .border-section::after {
          animation: dotsAppear 1.2s steps(60) 0.3s forwards;
        }

        .phase-out .border-section::before {
          width: 100%;
          animation: dotsDisappear 1.2s steps(60) 0s forwards;
        }
        .phase-out .border-section::after {
          width: 100%;
          animation: dotsDisappear 1.2s steps(60) 0.3s forwards;
        }

        /* ---------- CONTENT SLIDES ---------- */
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

        .content-slide-left,
        .content-slide-right {
          opacity: 0;
        }

        .phase-in .content-slide-left {
          animation: slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards;
        }
        .phase-in .content-slide-right {
          animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        .phase-out .content-slide-left {
          opacity: 1;
          animation: slideLeftReverse 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s
            forwards;
        }
        .phase-out .content-slide-right {
          opacity: 1;
          animation: slideRightReverse 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s
            forwards;
        }

        /* ---------- BRACKETS ---------- */
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

        .bracket-animate {
          opacity: 0;
        }

        .phase-in .bracket-animate {
          animation: bracketPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s
            forwards;
        }
        .phase-out .bracket-animate {
          opacity: 1;
          animation: bracketPopReverse 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)
            0.1s forwards;
        }

        /* ---------- LEARN MORE ---------- */
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

        .learn-more-btn {
          opacity: 0;
        }

        .phase-in .learn-more-btn {
          animation: fadeInButton 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s
            forwards;
        }
        .phase-out .learn-more-btn {
          opacity: 0.6;
          animation: fadeOutButton 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s
            forwards;
        }

        /* ---------- HEADLINE HOVER ---------- */
        .headline-animate {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .headline-animate:hover {
          transform: translateX(10px);
        }

        /* ---------- REDUCED MOTION ---------- */
        @media (prefers-reduced-motion: reduce) {
          .letter,
          .content-slide-left,
          .content-slide-right,
          .bracket-animate,
          .learn-more-btn {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
            filter: none !important;
          }
          .border-section::before,
          .border-section::after {
            width: 100% !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
