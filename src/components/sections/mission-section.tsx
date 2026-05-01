"use client"

import { useState } from "react"
import Link from "next/link"

interface MissionSectionProps {
  titleRef: React.RefObject<HTMLHeadingElement>
  cardsRef: React.RefObject<HTMLDivElement>
}

export function MissionSection({ titleRef, cardsRef }: MissionSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="mission" className="dotted-border-top px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground mb-4 text-[11px] tracking-[0.3em] uppercase">
          The Method
        </p>
        <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-6xl font-bold mb-12 md:mb-20 tracking-wider">
          THE WiiNING WAY
        </h2>
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-4 md:gap-12">
          <Link
            href="/benefits"
            className="relative border-3 border-foreground p-4 md:p-8 transition-colors"
            onMouseEnter={() => setHoveredCard("benefits")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 className="text-base md:text-lg font-bold mb-2 md:mb-4 uppercase tracking-wide">Benefits</h3>
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide leading-relaxed">
              REVERSE GUM DAMAGE AND AGGRESSIVE GUM RECESSION CAUSED BY TRADITIONAL NICOTINE POUCHES
            </p>
            <div
              className={`absolute -bottom-10 right-0 bg-accent text-accent-foreground px-4 py-1 rounded-sm shadow-lg transition-all duration-300 ease-out ${
                hoveredCard === "benefits"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <span className="text-xs font-extralight tracking-wider">LEARN MORE</span>
            </div>
          </Link>
          <Link
            href="/ingredients"
            className="relative border-3 border-foreground p-4 md:p-8 transition-colors"
            onMouseEnter={() => setHoveredCard("ingredients")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 className="text-base md:text-lg font-bold mb-2 md:mb-4 uppercase tracking-wide">Ingredients</h3>
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide leading-relaxed">
              THE WiiN DAILY COMPLEX™ — PEPTIDES, B-VITAMINS, AND EXOSOMES. CLEAN. PURE. NEVER BEEN DONE.
            </p>
            <div
              className={`absolute -bottom-10 right-0 bg-accent text-accent-foreground px-4 py-1 rounded-sm shadow-lg transition-all duration-300 ease-out ${
                hoveredCard === "ingredients"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <span className="text-xs font-extralight tracking-wider">LEARN MORE</span>
            </div>
          </Link>
          <Link
            href="/research"
            className="relative border-3 border-foreground p-4 md:p-8 transition-colors"
            onMouseEnter={() => setHoveredCard("research")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 className="text-base md:text-lg font-bold mb-2 md:mb-4 uppercase tracking-wide">How It Works</h3>
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide leading-relaxed">
              CLINICAL RIGOR MEETS CONSUMER INNOVATION. BETTER — DONE DAILY.
            </p>
            <div
              className={`absolute -bottom-10 right-0 bg-accent text-accent-foreground px-4 py-1 rounded-sm shadow-lg transition-all duration-300 ease-out ${
                hoveredCard === "research"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <span className="text-xs font-extralight tracking-wider">LEARN MORE</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
