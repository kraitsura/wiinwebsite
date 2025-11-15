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
    <section className="pt-0 pb-12 px-4 -mt-8">
      <div className="max-w-7xl mx-auto text-center">
        <RotatingImages />
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-8 tracking-wider -mt-16 md:-mt-24"
        >
          WiiN
        </h1>
        <p
          ref={sloganRef}
          className="text-xl md:text-2xl mb-1 uppercase tracking-widest"
        >
          POWER YOUR DAY
        </p>
        <p
          ref={subtitleRef}
          className="text-lg mb-12 text-muted-foreground uppercase tracking-wide"
        >
          GENERAL BODY WELLNESS NICOTINE POUCHES EVOLVED WITH NAD+
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
            <Link href="/order">GET WiiN</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-foreground bg-transparent hover:bg-foreground hover:text-background text-sm uppercase tracking-widest px-8 py-4"
          >
            <Link href="/about">LEARN MORE</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
