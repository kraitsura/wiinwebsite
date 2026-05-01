"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface HeroSectionProps {
  titleRef: React.RefObject<HTMLHeadingElement | null>
  sloganRef: React.RefObject<HTMLParagraphElement | null>
  subtitleRef: React.RefObject<HTMLParagraphElement | null>
  buttonsRef: React.RefObject<HTMLDivElement | null>
}

const ROTATING_IMAGES = [
  "/wiin/bluefwiin.png",
  "/wiin/bluewiin.png",
  "/wiin/redwiin.png",
  "/wiin/yellowwiin.png",
]

function RotatingImages() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_IMAGES.length)
    }, 4500) // 4.5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={ROTATING_IMAGES[currentIndex]}
            alt="WiiN Product"
            fill
            className="object-contain"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export function HeroSection({ titleRef, sloganRef, subtitleRef, buttonsRef }: HeroSectionProps) {
  return (
    <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-20">
      {/* Background video */}
      <video
        aria-hidden
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/wiin/bluewiin.png"
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/12917856_3840_2160_25fps.mp4" type="video/mp4" />
      </video>

      {/* Readability scrim — keeps text legible across video frames */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-black/40"
      />

      {/* Bottom fade — blends video into the next section's background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 md:h-64 bg-gradient-to-b from-transparent via-[var(--background)]/70 to-[var(--background)]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center text-white [text-shadow:0_1px_2px_rgb(0_0_0_/_0.35)]">
        <RotatingImages />
        <h1
          ref={titleRef}
          className="-mt-16 md:-mt-24 mb-8 text-6xl md:text-8xl font-bold tracking-wider"
        >
          WiiN
        </h1>
        <p
          ref={sloganRef}
          className="mb-2 text-xl md:text-2xl uppercase tracking-widest"
        >
          CLEAN ENERGY. CLEAR FOCUS. BETTER HEALTH.
        </p>
        <p
          ref={subtitleRef}
          className="mb-12 max-w-3xl text-balance text-sm md:text-base text-white/80 uppercase tracking-wide leading-relaxed"
        >
          DOCTOR-DESIGNED WELLNESS POUCHES WITH THE <span className="whitespace-nowrap">WiiN DAILY COMPLEX™</span> — PEPTIDES, <span className="whitespace-nowrap">B&#8209;VITAMINS</span> &amp; EXOSOMES
        </p>
        <div
          ref={buttonsRef}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground border-2 border-primary hover:bg-transparent hover:text-primary text-sm tracking-widest px-8 py-4"
          >
            <Link href="/investors">FOR INVESTORS</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black text-sm uppercase tracking-widest px-8 py-4"
          >
            <Link href="/about">LEARN MORE</Link>
          </Button>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="block h-8 w-px bg-current animate-pulse" />
      </div>
    </section>
  )
}
