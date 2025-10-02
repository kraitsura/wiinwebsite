"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { useScrollAnimation, useLoadAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function PowerYourDayStrips() {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    containerRefs.current.forEach((container, index) => {
      if (!container) return

      const isReverse = index % 2 === 1 // Odd indexes go reverse (right to left)

      // For infinite loop effect, we animate from start position and loop
      if (isReverse) {
        // Right to left: start from 0, move to -50% (half the width since we duplicated)
        gsap.fromTo(
          container,
          { x: "0%" },
          {
            x: "-50%",
            scrollTrigger: {
              trigger: container.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            ease: "none",
          }
        )
      } else {
        // Left to right: start from -50%, move to 0%
        gsap.fromTo(
          container,
          { x: "-50%" },
          {
            x: "0%",
            scrollTrigger: {
              trigger: container.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            ease: "none",
          }
        )
      }
    })
  }, [])

  const strips = [
    { color: "text-foreground" },  // 1: left to right, foreground (black/white)
    { color: "text-primary" },     // 2: right to left, sea green
    { color: "text-foreground" },  // 3: left to right, foreground
    { color: "text-primary" },     // 4: right to left, sea green
    { color: "text-foreground" },  // 5: left to right, foreground
  ]

  const repeatText = "POWER YOUR DAY "

  return (
    <section className="py-16 overflow-hidden">
      <div className="space-y-0">
        {strips.map((strip, index) => (
          <div key={index} className="overflow-hidden -my-2">
            <div
              ref={(el) => {
                containerRefs.current[index] = el
              }}
              className="text-strip-container"
            >
              {/* Duplicate the text twice for infinite loop effect */}
              <span className={`text-strip ${strip.color}`}>
                {repeatText.repeat(20)}
              </span>
              <span className={`text-strip ${strip.color}`}>
                {repeatText.repeat(20)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function HomePage() {
  const heroTitleRef = useLoadAnimation({ y: 100, opacity: 0, duration: 1, delay: 0 })
  const heroSloganRef = useLoadAnimation({ y: 100, opacity: 0, duration: 1, delay: 0.3 })
  const heroSubtitleRef = useLoadAnimation({ y: 100, opacity: 0, duration: 1, delay: 0.5 })
  const heroButtonsRef = useLoadAnimation({ y: 100, opacity: 0, duration: 1, delay: 0.7 })

  const missionTitleRef = useScrollAnimation({ y: 100, opacity: 0, start: "20% 90%", end: "50% 90%", scrub: 2 })
  const missionCardsRef = useScrollAnimation({ y: 100, opacity: 0, start: "30% 90%", end: "70% 90%", stagger: 0.2, scrub: 2 })

  // Note: Method section and onwards don't use individual scroll animations
  // because they're part of the takeover animation

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

      {/* Hero Section */}
      <section className="py-32 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 ref={heroTitleRef} className="text-6xl md:text-8xl font-bold mb-8 tracking-wider">
            WIIN
          </h1>
          <p ref={heroSloganRef} className="text-xl md:text-2xl mb-4 uppercase tracking-widest">
            POWER YOUR DAY
          </p>
          <p ref={heroSubtitleRef} className="text-lg mb-12 text-muted-foreground uppercase tracking-wide">
            WELLNESS ORAL NICOTINE POUCHES
          </p>
          <div ref={heroButtonsRef} className="flex flex-col md:flex-row gap-4 justify-center items-center">
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

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 ref={missionTitleRef} className="text-4xl md:text-6xl font-bold mb-16 tracking-wider">
            REPAIR. REFRESH. RECHARGE.
          </h2>
          <div ref={missionCardsRef} className="grid md:grid-cols-3 gap-12">
            <div className="border-2 border-foreground p-8">
              <h3 className="text-2xl font-bold mb-4 tracking-wider">01</h3>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">REPAIR</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wide leading-relaxed">
                REVERSE GUM DAMAGE AND AGGRESSIVE GUM RECESSION CAUSED BY TRADITIONAL NICOTINE POUCHES
              </p>
            </div>
            <div className="border-2 border-foreground p-8">
              <h3 className="text-2xl font-bold mb-4 tracking-wider">02</h3>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">REFRESH</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wide leading-relaxed">
                FORMULATED WITH NAD+, PEPTIDES, AND EXOSOMES FOR OPTIMAL ORAL HEALTH
              </p>
            </div>
            <div className="border-2 border-foreground p-8">
              <h3 className="text-2xl font-bold mb-4 tracking-wider">03</h3>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">RECHARGE</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wide leading-relaxed">
                HEALTHY NICOTINE POUCHES THAT ARE ACTUALLY GOOD FOR YOUR GUMS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Takeover Animation */}
      <div ref={triggerRef} className="relative">
        <PowerYourDayStrips />

        <div ref={takeoverRef} className="absolute bottom-0 left-0 right-0 min-h-screen bg-background z-10" style={{ willChange: 'transform' }}>
        {/* Method Section */}
        <section id="method" className="py-24 px-4 bg-muted min-h-screen scroll-snap-align-start scroll-snap-stop-always">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-wider">
            THE METHOD
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">ADVANCED FORMULATION</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">NAD+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">CELLULAR REGENERATION SUPPORT</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">PEPTIDES</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">TISSUE REPAIR AND HEALING</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">EXOSOMES</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">
                    ADVANCED CELLULAR COMMUNICATION
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 border-foreground p-8 bg-background">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-center">UNIQUE SELLING PROPOSITION</h3>
              <p className="text-lg text-center uppercase tracking-wide leading-relaxed">
                THE FIRST AND ONLY NICOTINE POUCHES DESIGNED TO IMPROVE GUM HEALTH WHILE DELIVERING SATISFACTION
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Typography Impact Section */}
      <section className="py-32 px-4 scroll-snap-align-start">
        <div className="max-w-5xl mx-auto">
          <div className="text-4xl md:text-6xl font-bold leading-tight tracking-wide">
            <h2 className="mb-8">REPAIR YOUR GUMS.</h2>
            <h2 className="mb-8">POWER YOUR DAY.</h2>
            <h2 className="mb-16">NO COMPROMISE.</h2>
          </div>
          <div className="dotted-border-top pt-12 mt-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                  WELLNESS MEETS SATISFACTION
                </h3>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide leading-relaxed text-muted-foreground">
                  TRADITIONAL NICOTINE POUCHES DAMAGE YOUR GUMS. WIIN REPAIRS THEM. IT'S THAT SIMPLE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-4 scroll-snap-align-start">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-wider">
            THE TEAM
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border-2 border-foreground p-8">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">HAMMER</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">CO-FOUNDER</p>
            </div>
            <div className="border-2 border-foreground p-8">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">DOUG</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">CO-FOUNDER</p>
            </div>
            <div className="border-2 border-foreground p-8">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">CATHY</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">CO-FOUNDER</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground scroll-snap-align-start">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-wider">
            READY TO WIIN?
          </h2>
          <p className="text-xl mb-12 uppercase tracking-widest">
            POWER YOUR DAY THE HEALTHY WAY
          </p>
          <div>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm uppercase tracking-widest px-12 py-4"
            >
              ORDER NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 tracking-wider">WIIN</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">HEALTHY NICOTINE POUCHES</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wide">PRODUCT</h4>
              <ul className="space-y-2 text-sm text-muted-foreground uppercase tracking-wide">
                <li>INGREDIENTS</li>
                <li>BENEFITS</li>
                <li>RESEARCH</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wide">COMPANY</h4>
              <ul className="space-y-2 text-sm text-muted-foreground uppercase tracking-wide">
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wide">SUPPORT</h4>
              <ul className="space-y-2 text-sm text-muted-foreground uppercase tracking-wide">
                <li>FAQ</li>
                <li>SHIPPING</li>
                <li>RETURNS</li>
              </ul>
            </div>
          </div>
          <div className="dotted-border-top mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wide">© 2025 WIIN. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
        </div>
      </div>
    </div>
  )
}
