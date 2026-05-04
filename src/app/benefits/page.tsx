'use client'

import { PageHeader } from "@/components/layout/page-header"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "GUM HEALTH",
    description: "First nicotine pouch designed to actively repair and protect your gums instead of damaging them.",
    stat: "100%",
    statLabel: "GUM SAFE"
  },
  {
    title: "CLEAN ENERGY",
    description: "Sustained nicotine delivery without jitters, crashes, or the harmful effects of smoking.",
    stat: "6MG",
    statLabel: "NICOTINE"
  },
  {
    title: "WELLNESS FIRST",
    description: "Packed with ingredients that promote oral health while delivering the nicotine you want.",
    stat: "0",
    statLabel: "TOBACCO"
  },
  {
    title: "CONVENIENT",
    description: "Discreet, smoke-free, and spit-free. Use anywhere, anytime without disrupting your day.",
    stat: "24/7",
    statLabel: "READY"
  },
  {
    title: "GREAT TASTE",
    description: "Refreshing flavors that don't compromise on experience or leave a bad aftertaste.",
    stat: "100%",
    statLabel: "FLAVOR"
  },
  {
    title: "CONFIDENCE",
    description: "Power through your day knowing you're making a healthier choice for your body.",
    stat: "ZERO",
    statLabel: "GUILT"
  }
]

export default function BenefitsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen">
      <PageHeader />
      <div className="px-4 md:px-8 pb-16 pt-32 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mt-12 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider">
            Benefits
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-wide max-w-3xl">
            Experience the advantages of WiiN's innovative approach to nicotine pouches.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className="border-4 border-foreground bg-card p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-300 group"
            >
              {/* Stat Badge */}
              <div className="mb-6">
                <div className="border-4 border-foreground bg-primary text-primary-foreground inline-block px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <div className="text-3xl font-bold">{benefit.stat}</div>
                  <div className="text-xs font-bold">{benefit.statLabel}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
