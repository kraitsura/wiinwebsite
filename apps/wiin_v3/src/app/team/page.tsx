"use client"

import { BackButton } from "@/components/back-button"
import { useEffect } from "react"

export default function TeamPage() {
  useEffect(() => {
    // Smooth scroll to hash on page load
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [])

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <BackButton />

        <div className="mt-12 mb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider">
            Team
          </h1>
          <p className="text-lg text-muted-foreground uppercase tracking-wide max-w-3xl">
            Meet the passionate people behind WIIN.
          </p>
        </div>

        {/* HAMMER SECTION */}
        <section
          id="hammer"
          className="mb-32 scroll-mt-8"
        >
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start">
            <div className="relative animate-fade-in-left">
              <div className="absolute -inset-2 border border-primary opacity-20"></div>
              <div className="relative w-48 h-48 border-2 border-foreground bg-muted flex items-center justify-center">
                <svg className="w-20 h-20 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="space-y-6 animate-fade-in-right">
              <div className="border-l-4 border-primary pl-6">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2">
                  HAMMER
                </h2>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  CO-FOUNDER
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Hammer brings decades of experience in the energy drink industry and a passion for natural, sustainable ingredients. As a co-founder, Hammer leads product development and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DOUG SECTION */}
        <section
          id="doug"
          className="mb-32 scroll-mt-8"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
            <div className="space-y-6 animate-fade-in-left">
              <div className="border-l-4 border-primary pl-6">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2">
                  DOUG
                </h2>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  CO-FOUNDER
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Doug is a visionary entrepreneur with a deep understanding of brand building and market strategy. Doug oversees business operations and strategic partnerships at WIIN.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-2 border border-primary opacity-20"></div>
              <div className="relative w-48 h-48 border-2 border-foreground bg-muted flex items-center justify-center">
                <svg className="w-20 h-20 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CATHY SECTION */}
        <section
          id="cathy"
          className="mb-32 scroll-mt-8"
        >
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start">
            <div className="relative animate-fade-in-left">
              <div className="absolute -inset-2 border border-primary opacity-20"></div>
              <div className="relative w-48 h-48 border-2 border-foreground bg-muted flex items-center justify-center">
                <svg className="w-20 h-20 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="space-y-6 animate-fade-in-right">
              <div className="border-l-4 border-primary pl-6">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2">
                  CATHY
                </h2>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  CO-FOUNDER
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Cathy is a creative force with expertise in design and customer experience. She leads the creative vision and ensures WIIN connects authentically with its community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
