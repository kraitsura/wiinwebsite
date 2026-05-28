"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "@/lib/gsap-config"

interface MissionSectionProps {
  titleRef: React.RefObject<HTMLHeadingElement>
  cardsRef: React.RefObject<HTMLDivElement>
}

const PRODUCTS = [
  {
    id: "nicotine",
    name: "Nicotine",
    description: "NICOTINE SUPPLEMENT POUCHES — THE CLASSIC EXPERIENCE, REIMAGINED FOR DAILY USE.",
    image: "/wiin/redwiin.png",
  },
  {
    id: "nixodine",
    name: "WiiN Daily Complex™",
    description: "OUR PROPRIETARY WiiN DAILY COMPLEX™ SUPPLEMENT — A CLEANER, SMARTER ALTERNATIVE.",
    image: "/wiin/yellowwiin.png",
  },
  {
    id: "caffeine",
    name: "Caffeine",
    description: "CAFFEINE-POWERED SUPPLEMENT POUCHES — ENERGY THAT FUELS YOUR DAY, NICOTINE-FREE.",
    image: "/wiin/bluefwiin.png",
  },
] as const

const RAY_COUNT = 16

function SunRays() {
  return (
    <svg
      viewBox="-100 -100 200 200"
      className="absolute inset-0 w-full h-full animate-spin-slow text-primary/70"
      aria-hidden="true"
    >
      <circle cx="0" cy="0" r="22" fill="currentColor" />
      {Array.from({ length: RAY_COUNT }).map((_, i) => {
        const angle = (i / RAY_COUNT) * 360
        const big = i % 2 === 0
        const length = big ? 38 : 22
        const halfWidth = big ? 5 : 3
        const inner = 30
        return (
          <polygon
            key={i}
            points={`${-halfWidth},${-inner} ${halfWidth},${-inner} 0,${-inner - length}`}
            transform={`rotate(${angle})`}
            fill="currentColor"
          />
        )
      })}
    </svg>
  )
}

function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className={`absolute left-0 right-0 w-full h-6 text-primary/40 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 12 Q 50 0 100 12 T 200 12 T 300 12 T 400 12 T 500 12 T 600 12 T 700 12 T 800 12 T 900 12 T 1000 12 T 1100 12 T 1200 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function MissionSection({ titleRef, cardsRef }: MissionSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const sunRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const sun = sunRef.current
    const eyebrow = eyebrowRef.current
    if (!sun || !eyebrow) return

    const ctx = gsap.context(() => {
      gsap.from(sun, {
        scrollTrigger: {
          trigger: sun,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.4,
        rotate: -45,
        duration: 1.2,
        ease: "power3.out",
      })

      gsap.from(eyebrow, {
        scrollTrigger: {
          trigger: eyebrow,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.15,
        ease: "power2.out",
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="mission"
      className="relative overflow-hidden px-4 py-20 md:py-32"
    >
      {/* Beach-vibe decor */}
      <div
        ref={sunRef}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 md:-top-16 md:-right-16 w-56 h-56 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] opacity-60"
      >
        <SunRays />
      </div>
      <WaveDivider className="bottom-8 opacity-50" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-12 lg:gap-x-20 gap-y-12 items-stretch">
        {/* LEFT — Header */}
        <div className="md:self-center">
          <p
            ref={eyebrowRef}
            className="text-primary mb-4 text-lg md:text-2xl font-bold tracking-[0.18em] uppercase"
          >
            The WiiN Step-down Method
          </p>
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wider leading-[0.9]"
          >
            THE
            <br />
            WiiNING
            <br />
            WAY
          </h2>
        </div>

        {/* RIGHT — Stacked product rows (zig-zag) */}
        <div ref={cardsRef} className="flex flex-col gap-8 md:gap-12">
          {PRODUCTS.map((product, i) => {
            const isHovered = hoveredCard === product.id
            const swap = i === 1

            const card = (
              <Link
                href={`/ingredients/${product.id}`}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative flex-1 min-w-0 border-3 border-foreground p-4 md:p-6 transition-colors duration-300 ease-out"
              >
                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 uppercase tracking-wide transition-colors duration-300 group-hover:text-primary">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide leading-relaxed">
                  {product.description}
                </p>
                <div
                  className={`absolute -bottom-10 right-0 bg-accent text-accent-foreground px-4 py-1 rounded-sm shadow-lg transition-all duration-300 ease-out ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <span className="text-xs font-extralight tracking-wider">LEARN MORE</span>
                </div>
              </Link>
            )

            const image = (
              <Link
                href={`/ingredients/${product.id}`}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
                aria-label={`${product.name} product image`}
                className="group flex-shrink-0 flex items-center justify-center"
              >
                <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                  <Image
                    src={product.image}
                    alt={`${product.name} pouch can`}
                    fill
                    sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, 176px"
                    className="object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-[filter] duration-500 ease-out group-hover:drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                  />
                </div>
              </Link>
            )

            return (
              <div
                key={product.id}
                className="flex flex-row items-center gap-4 md:gap-8"
              >
                {swap ? (
                  <>
                    {image}
                    {card}
                  </>
                ) : (
                  <>
                    {card}
                    {image}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
