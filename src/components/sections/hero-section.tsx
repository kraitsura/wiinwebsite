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
  "/wiin/redwiin.png",
  "/wiin/yellowwiin.png",
  "/wiin/bluefwiin.png",
  "/wiin/bluewiin.png",
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
    <div className="relative w-80 h-80 md:w-[34rem] md:h-[34rem] mx-auto mb-0">
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 bg-black"
      />
      <video
        aria-hidden
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
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
        {/* Pouch clarity cue — communicates the format within the first seconds */}
        <div className="[text-shadow:none] -mt-10 md:-mt-16 mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur-md">
          <span aria-hidden className="h-2 w-2 rounded-full bg-orange-400" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-white">
            Wellness Supplement Pouches
          </span>
        </div>
        <h1
          ref={titleRef}
          className="hero-heading mb-8 text-7xl md:text-9xl font-bold tracking-wider"
        >
          WiiN
        </h1>
        <p
          ref={sloganRef}
          className="mb-4 text-3xl md:text-5xl font-extrabold uppercase tracking-wide leading-[1.05]"
        >
          {/* NOTE: legal/regulatory review required for the word "Healthier" on a nicotine-containing product before deployment. */}
          Stronger, Healthier, and Now Enhanced Supplements
        </p>
        <p
          ref={subtitleRef}
          className="mb-6 max-w-3xl text-balance text-base md:text-xl text-white/85 uppercase tracking-wide leading-relaxed"
        >
          DOCTOR-DESIGNED WELLNESS SUPPLEMENT POUCHES WITH THE <span className="whitespace-nowrap">WiiN DAILY COMPLEX™</span> — PEPTIDES, <span className="whitespace-nowrap">B&#8209;VITAMINS</span> &amp; EXOSOMES
        </p>
        {/* Buzzword badge */}
        <div className="[text-shadow:none] mb-10 inline-flex items-center gap-2 rounded-full bg-power-gradient px-6 py-2.5 shadow-lg shadow-orange-500/30">
          <span className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-white">
            Organic Clean Power
          </span>
        </div>

        {/* Made in California — image to be added later */}
        <div className="[text-shadow:none] mb-10 w-full">
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-white/90">
            Made in California
          </p>
        </div>
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
            <Link href="/ingredients">LEARN MORE</Link>
          </Button>
        </div>
      </div>

    </section>
  )
}
