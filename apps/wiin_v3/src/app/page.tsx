'use client'

import { useRef } from 'react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { WiiningWaySection } from '@/components/wiining-way-section'
import { PowerYourDayStrips } from '@/components/power-your-day-strips'
import { MethodSection } from '@/components/method-section'
import { ImpactSection } from '@/components/impact-section'
import { TeamSection } from '@/components/team-section'
import { CTASection } from '@/components/cta-section'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useIsMobile } from '@/hooks/use-mobile'
import { useScrollToTop } from '@/hooks/use-scroll-to-top'
import { useTakeoverAnimation } from '@/hooks/use-takeover-animation'
import { HERO_ANIMATIONS, WIINING_WAY_ANIMATIONS } from '@/lib/constants/animations'

export default function Page() {
	const isMobile = useIsMobile()

	// Scroll to top on mount
	useScrollToTop()

	// Hero section scroll animations
	const titleRef = useScrollAnimation<HTMLHeadingElement>(HERO_ANIMATIONS.title)
	const sloganRef = useScrollAnimation<HTMLParagraphElement>(HERO_ANIMATIONS.slogan)
	const subtitleRef = useScrollAnimation<HTMLParagraphElement>(HERO_ANIMATIONS.subtitle)
	const buttonsRef = useScrollAnimation(HERO_ANIMATIONS.buttons)

	// Wiining Way section scroll animations
	const wiiningWayTitleRef = useScrollAnimation(WIINING_WAY_ANIMATIONS.title)
	const wiiningWayCardsRef = useScrollAnimation(WIINING_WAY_ANIMATIONS.cards)

	// Takeover animation refs
	const takeoverRef = useRef<HTMLDivElement>(null)
	const triggerRef = useRef<HTMLDivElement>(null)

	// Takeover animation (desktop only)
	useTakeoverAnimation({ takeoverRef, triggerRef, isMobile })

	return (
		<main className="min-h-screen bg-background text-foreground overflow-hidden">
			<Header />

			{/* Hero section */}
			<HeroSection
				titleRef={titleRef}
				sloganRef={sloganRef}
				subtitleRef={subtitleRef}
				buttonsRef={buttonsRef}
			/>

			{/* Wiining Way section (THE WIINING WAY - Benefits/Ingredients/How It Works) */}
			<WiiningWaySection titleRef={wiiningWayTitleRef as React.RefObject<HTMLHeadingElement>} cardsRef={wiiningWayCardsRef as React.RefObject<HTMLDivElement>} />

			{/* Scroll Takeover Animation */}
			<div ref={triggerRef} className="relative">
				<PowerYourDayStrips />

				<div ref={takeoverRef} className="md:absolute md:bottom-0 md:left-0 md:right-0 min-h-screen bg-background md:z-10" style={{ willChange: 'transform' }}>
					<MethodSection />
					<ImpactSection />
					<TeamSection />
					<CTASection />
					<Footer />
				</div>
			</div>
		</main>
	)
}
