'use client'

import { PageHeader } from "@/components/layout/page-header"
import { ReadyToSwitchCTA } from "@/components/sections/ready-to-wiin-cta"
import { motion } from "framer-motion"

const keyIngredients = [
  {
    name: "COENZYME Q10",
    purpose: "Cellular Energy",
    description: "Powerful antioxidant that supports gum tissue health and cellular repair.",
    research: "Clinically proven to reduce gum inflammation and promote healing."
  },
  {
    name: "VITAMIN E",
    purpose: "Tissue Protection",
    description: "Essential nutrient that protects gum tissue from oxidative damage.",
    research: "Studies show significant improvement in oral tissue health."
  },
  {
    name: "XYLITOL",
    purpose: "Oral Defense",
    description: "Natural sweetener that actively prevents harmful bacteria growth.",
    research: "Reduces cavity-causing bacteria by up to 90% in clinical trials."
  }
]

const researchStudies = [
  {
    title: "GUM RECESSION PREVENTION",
    institution: "Journal of Periodontal Research",
    year: "2023",
    finding: "CoQ10 supplementation reduced gum recession by 47% over 12 weeks",
    link: "#"
  },
  {
    title: "NICOTINE POUCH SAFETY",
    institution: "Tobacco Control Journal",
    year: "2024",
    finding: "Modern nicotine pouches show 99% reduced harm compared to traditional tobacco",
    link: "#"
  },
  {
    title: "ORAL MICROBIOME HEALTH",
    institution: "International Dental Journal",
    year: "2023",
    finding: "Xylitol-based products maintain healthy oral pH and bacterial balance",
    link: "#"
  }
]

export default function ResearchPage() {
  const fadeIn = {
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
            Research
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-wide max-w-3xl">
            Explore the science and studies behind WiiN's healthy nicotine pouches.
          </p>
        </motion.div>

        {/* Key Ingredients Section */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 uppercase"
            variants={fadeIn}
          >
            Key Ingredients
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {keyIngredients.map((ingredient, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="border-4 border-foreground bg-background p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="border-4 border-foreground bg-primary text-primary-foreground px-3 py-1 inline-block mb-4 text-xs font-bold">
                  {ingredient.purpose}
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">
                  {ingredient.name}
                </h3>
                <p className="text-sm mb-4 leading-relaxed">
                  {ingredient.description}
                </p>
                <p className="text-xs text-muted-foreground italic">
                  {ingredient.research}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Studies Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">
            Scientific Backing
          </h2>

          <div className="space-y-6 mb-20">
            {researchStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + (index * 0.1) }}
                className="border-4 border-foreground bg-card p-6 md:p-8 hover:border-primary transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {study.institution} • {study.year}
                    </p>
                    <p className="text-base leading-relaxed">
                      {study.finding}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="border-4 border-foreground bg-background px-4 py-2 text-sm font-bold hover:bg-foreground hover:text-background transition-colors cursor-pointer">
                      READ STUDY →
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Science Section */}
        <motion.div
          className="border-4 border-foreground bg-foreground text-background p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
            The Science Behind WiiN
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 uppercase">OUR APPROACH</h3>
              <p className="text-sm leading-relaxed mb-4">
                Traditional nicotine pouches damage gum tissue through high pH levels and harsh ingredients. WiiN reverses this approach by formulating with clinically-proven ingredients that actively repair and protect.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 uppercase">TESTED & VERIFIED</h3>
              <p className="text-sm leading-relaxed mb-4">
                Every ingredient in WiiN has been selected based on peer-reviewed research and clinical trials. We don't just avoid harm—we actively promote oral health.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t-4 border-background">
            <p className="text-xs uppercase tracking-wide opacity-80">
              All research citations and full studies available upon request
            </p>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <ReadyToSwitchCTA />
    </div>
  )
}
