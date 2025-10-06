"use client"

import { PageHeader } from "@/components/layout/page-header"
import { ReadyToSwitchCTA } from "@/components/sections/ready-to-wiin-cta"
import { FRAMER_VARIANTS } from "@/lib/constants/animations"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// Static data - moved outside component for performance
const PRINCIPLES = [
  {
    title: "TRANSPARENCY",
    desc: "We tell you exactly what's in our pouches and why. No secrets, no proprietary blends hiding questionable ingredients."
  },
  {
    title: "QUALITY",
    desc: "We source the best ingredients and refuse to cut corners. Your health deserves premium materials."
  },
  {
    title: "INNOVATION",
    desc: "We're constantly researching and improving. The first oral wellness pouch is just the beginning."
  },
  {
    title: "RESPONSIBILITY",
    desc: "We believe companies should care about long-term user health, not just short-term profits."
  }
]

export default function AboutPage() {
  const problemRef = useRef(null)
  const problemInView = useInView(problemRef, { once: true, margin: "-100px" })

  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })

  const differentRef = useRef(null)
  const differentInView = useInView(differentRef, { once: true, margin: "-100px" })

  const principlesRef = useRef(null)
  const principlesInView = useInView(principlesRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen">
      <PageHeader />
      <div className="px-4 md:px-8 pb-4 md:pb-8 pt-32 max-w-6xl mx-auto">

        {/* Hero Statement */}
        <motion.div
          className="mt-12 mb-20"
          initial="hidden"
          animate="visible"
          variants={FRAMER_VARIANTS.fadeInScale}
        >
          <div className="border-4 border-foreground bg-primary text-primary-foreground p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl md:text-3xl font-bold leading-relaxed">
              WE'RE NOT JUST ANOTHER NICOTINE POUCH. WE'RE THE FIRST ONE THAT ACTUALLY GIVES A DAMN ABOUT YOUR ORAL HEALTH.
            </p>
          </div>
        </motion.div>

        {/* The Problem */}
        <div ref={problemRef} className="mb-20">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            The Problem
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="border-4 border-foreground p-6 bg-background"
              initial="hidden"
              animate={problemInView ? "visible" : "hidden"}
              variants={FRAMER_VARIANTS.slideInLeft}
            >
              <h3 className="text-xl font-bold mb-4 uppercase">Traditional Pouches</h3>
              <ul className="space-y-3 text-sm md:text-base font-mono">
                <li className="flex items-start">
                  <span className="mr-3 text-destructive font-bold">×</span>
                  <span>Cause gum recession</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-destructive font-bold">×</span>
                  <span>Damage oral tissue</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-destructive font-bold">×</span>
                  <span>Ignore long-term health</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-destructive font-bold">×</span>
                  <span>Use cheap fillers</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="border-4 border-foreground p-6 bg-foreground text-background"
              initial="hidden"
              animate={problemInView ? "visible" : "hidden"}
              variants={FRAMER_VARIANTS.slideInRight}
            >
              <h3 className="text-xl font-bold mb-4 uppercase">WiiN Pouches</h3>
              <ul className="space-y-3 text-sm md:text-base font-mono">
                <li className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <span>Actively repair gums</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <span>Support oral wellness</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <span>Science-backed ingredients</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <span>Premium quality</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Our Story */}
        <div ref={storyRef} className="mb-20">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            Our Story
          </motion.h2>
          <div className="relative">
            {/* Accent line */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/60 to-transparent"
              initial={{ scaleY: 0 }}
              animate={storyInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
              style={{ transformOrigin: "top" }}
            />

            <motion.div
              className="pl-8 md:pl-12 space-y-8 text-base md:text-lg leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 40 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <p>
                WiiN was born from a <strong className="text-foreground font-bold">simple realization</strong>: the nicotine pouch industry had a <em className="text-primary not-italic font-semibold">gaping hole</em>.
                Everyone was racing to make stronger pouches, but <strong className="text-foreground font-bold">no one was asking the obvious question</strong>—
                <em className="italic text-muted-foreground">what's happening to people's mouths?</em>
              </p>
              <p>
                We saw users dealing with <span className="text-destructive font-semibold">gum recession, tissue damage, and oral health issues</span>.
                The very product designed to be a cleaner alternative was causing its own set of problems.
              </p>
              <p>
                So we did something <strong className="text-primary font-bold">radical</strong>: we created a nicotine pouch that <strong className="text-foreground font-bold">actually supports oral health</strong>.
                Not just <span className="text-muted-foreground italic">"less harmful,"</span> but <strong className="text-primary font-bold">actively beneficial</strong>. We loaded it with ingredients that <span className="font-semibold">repair, refresh, and protect</span> your gums while delivering the clean energy you need.
              </p>
              <p className="text-xl md:text-2xl font-bold pt-4 border-t border-primary/30">
                Because why should you have to choose between nicotine and oral health?
              </p>
            </motion.div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div ref={differentRef} className="mb-20">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={differentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            What Makes Us Different
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            animate={differentInView ? "visible" : "hidden"}
            variants={FRAMER_VARIANTS.staggerContainer}
          >
            <motion.div
              className="border-4 border-foreground p-6 bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              variants={FRAMER_VARIANTS.fadeInUp}
            >
              <div className="text-4xl font-bold mb-4 group-hover:scale-110 transition-transform">01</div>
              <h3 className="text-xl font-bold mb-3 uppercase">Oral Health First</h3>
              <p className="text-sm font-mono">
                Every ingredient is chosen to support your gums and oral tissue, not just deliver nicotine.
              </p>
            </motion.div>
            <motion.div
              className="border-4 border-foreground p-6 bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              variants={FRAMER_VARIANTS.fadeInUp}
            >
              <div className="text-4xl font-bold mb-4 group-hover:scale-110 transition-transform">02</div>
              <h3 className="text-xl font-bold mb-3 uppercase">Science-Backed</h3>
              <p className="text-sm font-mono">
                We use clinically proven ingredients like CoQ10 and hyaluronic acid to actively repair damage.
              </p>
            </motion.div>
            <motion.div
              className="border-4 border-foreground p-6 bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              variants={FRAMER_VARIANTS.fadeInUp}
            >
              <div className="text-4xl font-bold mb-4 group-hover:scale-110 transition-transform">03</div>
              <h3 className="text-xl font-bold mb-3 uppercase">No Compromise</h3>
              <p className="text-sm font-mono">
                Premium nicotine satisfaction without sacrificing your oral health. You get both.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Our Principles */}
        <div ref={principlesRef} className="mb-20">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            Our Principles
          </motion.h2>
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={principlesInView ? "visible" : "hidden"}
            variants={FRAMER_VARIANTS.staggerContainer}
          >
            {PRINCIPLES.map((principle, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                variants={FRAMER_VARIANTS.fadeInUp}
              >
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-primary">{principle.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl border-l-2 border-primary/30 pl-4">{principle.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Final CTA */}
      <ReadyToSwitchCTA />
    </div>
  )
}
