"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { PowerYourDayStrips } from "@/components/power-your-day-strips"
import { MethodSection } from "@/components/method-section"
import { ImpactSection } from "@/components/impact-section"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { useScrollAnimation, useLoadAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  // Hero section load animations
  const heroTitleRef = useLoadAnimation({ y: 100, opacity: 0, duration: 1, delay: 0 })
  const heroSloganRef = useLoadAnimation({ y: 100, opacity: 0, duration: 1, delay: 0.3 })
  const heroSubtitleRef = useLoadAnimation({ y: 100, opacity: 0, duration: 1, delay: 0.5 })
  const heroButtonsRef = useLoadAnimation({ y: 100, opacity: 0, duration: 1, delay: 0.7 })

  // Mission section scroll animations with delays
  const missionTitleRef = useScrollAnimation({ y: 100, opacity: 0, start: "20% 90%", end: "50% 90%", scrub: 2, delay: 0.3 })
  const missionCardsRef = useScrollAnimation({ y: 100, opacity: 0, start: "30% 90%", end: "70% 90%", stagger: 0.2, scrub: 2, delay: 0.5 })

  // Takeover animation refs
  const takeoverRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!takeoverRef.current || !triggerRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(takeoverRef.current, { yPercent: 100 })

      gsap.to(takeoverRef.current, {
        yPercent: 0,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "bottom bottom",
          end: "+=100%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
        ease: "none",
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />

      <HeroSection
        titleRef={heroTitleRef}
        sloganRef={heroSloganRef}
        subtitleRef={heroSubtitleRef}
        buttonsRef={heroButtonsRef}
      />

      <MissionSection
        titleRef={missionTitleRef}
        cardsRef={missionCardsRef}
      />

      {/* Scroll Takeover Animation */}
      <div ref={triggerRef} className="relative">
        <PowerYourDayStrips />

        <div ref={takeoverRef} className="absolute bottom-0 left-0 right-0 min-h-screen bg-background z-10" style={{ willChange: 'transform' }}>
          <MethodSection />
          <ImpactSection />
          <TeamSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </div>
  )
}
