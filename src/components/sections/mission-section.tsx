"use client"

import { useState } from "react"
import Link from "next/link"

interface MissionSectionProps {
  titleRef: React.RefObject<HTMLHeadingElement>
  cardsRef: React.RefObject<HTMLDivElement>
}

const PRODUCTS = [
  {
    id: "nicotine",
    name: "Nicotine",
    description: "PURE NICOTINE POUCHES — THE CLASSIC EXPERIENCE, REIMAGINED FOR DAILY USE.",
  },
  {
    id: "nixodine",
    name: "Nixodine",
    description: "OUR PROPRIETARY NICOTINE DERIVATIVE — A CLEANER, SMARTER ALTERNATIVE.",
  },
  {
    id: "caffeine",
    name: "Caffeine",
    description: "CAFFEINE-POWERED POUCHES — ENERGY THAT FUELS YOUR DAY, NICOTINE-FREE.",
  },
] as const

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
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/ingredients/${product.id}`}
              className="relative border-3 border-foreground p-4 md:p-8 transition-colors"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="text-base md:text-lg font-bold mb-2 md:mb-4 uppercase tracking-wide">
                {product.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide leading-relaxed">
                {product.description}
              </p>
              <div
                className={`absolute -bottom-10 right-0 bg-accent text-accent-foreground px-4 py-1 rounded-sm shadow-lg transition-all duration-300 ease-out ${
                  hoveredCard === product.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <span className="text-xs font-extralight tracking-wider">LEARN MORE</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
