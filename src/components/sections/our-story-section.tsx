"use client"

import { motion } from "framer-motion"

const STATS = [
  { value: "200", label: "Clinical study participants" },
  { value: "92%", label: "Repurchase intent at retail value" },
  { value: "1st", label: "Novel product, first to market" },
] as const

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function OurStorySection() {
  return (
    <section id="our-story" className="relative overflow-hidden bg-background px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-4 text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-primary"
        >
          Our Story
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-power-gradient mb-10 max-w-4xl text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[0.95]"
        >
          Engineered for Full-Body Wellness
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 border-l-4 border-primary pl-6 md:pl-8 text-base md:text-lg leading-relaxed text-foreground/80"
          >
            <p>
              WiiN began with a simple conviction: a daily pouch should do more than deliver a hit —
              it should work for your <strong className="font-semibold text-foreground">whole body</strong>.
              Where the category obsessed over strength alone, we asked what every pouch could be doing
              for your systemic health.
            </p>
            <p>
              So we built a <strong className="font-semibold text-foreground">supplement</strong>. Every WiiN
              pouch carries the <span className="whitespace-nowrap font-semibold text-foreground">WiiN Daily Complex™</span> —
              systemic amino acids formulated to help reduce inflammation, paired with NAD+, L-Theanine,
              L-Tyrosine, and D-Ribose to fuel the body at the cellular level.
            </p>
            <p>
              It comes down to your <strong className="font-semibold text-foreground">mitochondria — the powerhouse
              of the cell</strong>. NAD+ and D-Ribose support <strong className="font-semibold text-foreground">ATP
              production</strong>, the energy currency every cell runs on, so clean energy and clear focus come
              from the inside out.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center gap-5"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="border-3 border-foreground p-5 md:p-6">
                <p className="text-power-gradient text-4xl md:text-5xl font-bold leading-none">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs md:text-sm uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 bg-power-gradient p-6 md:p-8 text-white"
        >
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.3em]">
            Tested &amp; Verified
          </p>
          <p className="mt-2 text-lg md:text-2xl font-semibold leading-snug">
            In-house clinical studies with 200 participants showed a 92% repurchase intent at retail value.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
