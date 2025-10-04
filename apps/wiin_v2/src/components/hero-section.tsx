"use client"

import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  titleRef: React.RefObject<HTMLHeadingElement>
  sloganRef: React.RefObject<HTMLParagraphElement>
  subtitleRef: React.RefObject<HTMLParagraphElement>
  buttonsRef: React.RefObject<HTMLDivElement>
}

export function HeroSection({ titleRef, sloganRef, subtitleRef, buttonsRef }: HeroSectionProps) {
  return (
    <section className="py-32 px-4 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-8 tracking-wider">
          WIIN
        </h1>
        <p ref={sloganRef} className="text-xl md:text-2xl mb-4 uppercase tracking-widest">
          POWER YOUR DAY
        </p>
        <p ref={subtitleRef} className="text-lg mb-12 text-muted-foreground uppercase tracking-wide">
          ORAL WELLNESS NICOTINE POUCHES
        </p>
        <div ref={buttonsRef} className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground border-2 border-primary hover:bg-transparent hover:text-primary text-sm uppercase tracking-widest px-8 py-4"
          >
            GET WIIN
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-foreground bg-transparent hover:bg-foreground hover:text-background text-sm uppercase tracking-widest px-8 py-4"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  )
}
