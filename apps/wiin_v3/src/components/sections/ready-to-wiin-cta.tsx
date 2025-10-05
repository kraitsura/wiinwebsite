"use client"

import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"

export function ReadyToSwitchCTA() {
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ctaRef}
      className="w-full"
      initial={{ opacity: 0, y: 60 }}
      animate={ctaInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className="border-y-4 border-foreground bg-foreground text-background p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">READY TO WiiN?</h2>
          <p className="text-lg md:text-xl mb-6 font-mono">
            Join the movement toward healthier nicotine pouches.
          </p>
          <Button asChild className="border-4 border-background bg-primary text-primary-foreground px-8 py-4 text-lg font-bold hover:bg-background hover:text-foreground transition-all duration-300">
            <Link href="/order">ORDER NOW</Link>
          </Button>
          <div className="mt-8 text-center">
            <p className="text-xs font-light tracking-wide opacity-60">
              © Wiin all rights reserved
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
