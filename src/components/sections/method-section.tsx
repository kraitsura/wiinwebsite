"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { IngredientCard } from "@/components/features/ingredient-card"

export function MethodSection() {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Detect if device supports touch
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)

    // Intersection Observer to detect when card is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.5 } // Trigger when 50% of card is visible
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <section id="method" className="py-12 md:py-24 px-4 bg-muted min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-16 text-center tracking-wider">
          THE METHOD
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">WiiN DAILY COMPLEX™</h3>
            <div className="space-y-6">
              <IngredientCard
                id="peptides"
                title="PEPTIDES"
                subtitle="TISSUE REPAIR AND HEALING"
                description="Specialized protein fragments that support tissue repair and collagen production in gum tissue. Aids in maintaining oral tissue integrity and promotes natural healing processes while delivering nicotine satisfaction."
              />
              <IngredientCard
                id="b-vitamins"
                title="B-VITAMINS"
                subtitle="CLEAN ENERGY AND CLEAR FOCUS"
                description="Essential cofactors that support cellular energy metabolism and cognitive performance. Delivers the clean, sustained focus you need to win your day — without the crash of synthetic stimulants."
              />
              <IngredientCard
                id="exosomes"
                title="EXOSOMES"
                subtitle="ADVANCED CELLULAR COMMUNICATION"
                description="Advanced cellular messengers that facilitate communication between cells in oral tissues. Supports healthy inflammatory response and tissue regeneration, promoting overall gum health during nicotine pouch use."
              />
            </div>
          </div>
          <Link
            href="/research"
            ref={cardRef}
            className={`relative border-4 border-foreground p-6 md:p-12 bg-background group transition-all duration-300 block ${
              isTouchDevice && isInView
                ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                : 'md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            {/* Corner accent mark */}
            <div className="absolute top-4 left-4 w-3 h-3 border-2 border-primary bg-primary" />

            <div className="space-y-8">
              <h3 className="text-2xl font-bold uppercase tracking-widest text-center">
                The Step-Down Method
              </h3>

              {/* Subtle divider */}
              <div className="w-16 h-[2px] bg-foreground mx-auto" />

              <p className="text-base text-center uppercase tracking-wider leading-loose max-w-md mx-auto">
                A FIRST-OF-ITS-KIND POUCH BUILT BY A DOCTOR-LED TEAM. CLEAN. PURE. NEVER BEEN DONE.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
