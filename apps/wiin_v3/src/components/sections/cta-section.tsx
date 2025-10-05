"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-wider">
          READY TO WiiN?
        </h2>
        <p className="text-xl mb-12 uppercase tracking-widest">
          POWER YOUR DAY THE HEALTHY WAY
        </p>
        <div>
          <Button
          asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm uppercase tracking-widest px-12 py-4"
          >
            <Link href="/order">ORDER NOW</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
