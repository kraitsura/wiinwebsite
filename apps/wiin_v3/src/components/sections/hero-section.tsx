"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

interface HeroSectionProps {
  titleRef: React.RefObject<HTMLHeadingElement>
  sloganRef: React.RefObject<HTMLParagraphElement>
  subtitleRef: React.RefObject<HTMLParagraphElement>
  buttonsRef: React.RefObject<HTMLDivElement>
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export function HeroSection({ titleRef, sloganRef, subtitleRef, buttonsRef }: HeroSectionProps) {
  return (
    <section className="py-32 px-4 mt-16">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          ref={titleRef}
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-8 tracking-wider"
        >
          WiiN
        </motion.h1>
        <motion.p
          ref={sloganRef}
          variants={itemVariants}
          className="text-xl md:text-2xl mb-4 uppercase tracking-widest"
        >
          POWER YOUR DAY
        </motion.p>
        <motion.p
          ref={subtitleRef}
          variants={itemVariants}
          className="text-lg mb-12 text-muted-foreground uppercase tracking-wide"
        >
          ORAL WELLNESS NICOTINE POUCHES EVOLVED WITH NAD+
        </motion.p>
        <motion.div
          ref={buttonsRef}
          variants={itemVariants}
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
        </motion.div>
      </motion.div>
    </section>
  )
}
