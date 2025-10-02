'use client'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { WiiningWaySection } from '@/components/wiining-way-section'
import { PowerYourDayStrips } from '@/components/power-your-day-strips'
import { MethodSection } from '@/components/method-section'
import { ImpactSection } from '@/components/impact-section'
import { TeamSection } from '@/components/team-section'
import { CTASection } from '@/components/cta-section'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useIsMobile } from '@/hooks/use-mobile'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
	const isMobile = useIsMobile()
	const heroSectionRef = useRef<HTMLDivElement>(null)
	const heroLeftRef = useRef<HTMLDivElement>(null)
	const missionSectionRef = useRef<HTMLDivElement>(null)
	const missionCardsRef = useRef<HTMLDivElement>(null)

	const [heroFixed, setHeroFixed] = useState(true)
	const [absoluteTop, setAbsoluteTop] = useState(0)

	// Wiining Way section scroll animations with delays
	const wiiningWayTitleRef = useScrollAnimation({ y: 100, opacity: 0, start: '20% 90%', end: '50% 90%', scrub: 2, delay: 0.3 })
	const wiiningWayCardsRef = useScrollAnimation({ y: 100, opacity: 0, start: '30% 90%', end: '70% 90%', stagger: 0.2, scrub: 2, delay: 0.5 })

	// Hero mission cards scroll animations
	const aboutCardRef = useScrollAnimation<HTMLAnchorElement>({ y: 100, opacity: 0, start: '30% 90%', end: '70% 90%', scrub: 2, delay: 0.6 })
	const repairCardRef = useScrollAnimation({ y: 100, opacity: 0, start: '30% 90%', end: '70% 90%', scrub: 2 })
	const refreshCardRef = useScrollAnimation({ y: 100, opacity: 0, start: '30% 90%', end: '70% 90%', scrub: 2, delay: 0.1 })
	const rechargeCardRef = useScrollAnimation({ y: 100, opacity: 0, start: '30% 90%', end: '70% 90%', scrub: 2, delay: 0.2 })

	// Takeover animation refs
	const takeoverRef = useRef<HTMLDivElement>(null)
	const triggerRef = useRef<HTMLDivElement>(null)

	// Hero fixed/absolute switching
	useEffect(() => {
		const handleScroll = () => {
			if (!missionSectionRef.current || !heroSectionRef.current) return

			const missionRect = missionSectionRef.current.getBoundingClientRect()
			const heroRect = heroSectionRef.current.getBoundingClientRect()
			const windowHeight = window.innerHeight

			// Trigger point: 70% down the mission section
			const missionTriggerPoint = missionRect.top + missionRect.height * 0.55
			const viewportMiddle = windowHeight / 2

			// Switch from fixed to absolute when trigger point reaches viewport middle
			if (missionTriggerPoint <= viewportMiddle && heroFixed) {
				// Calculate absolute position at the trigger point
				const missionOffsetInHero = missionSectionRef.current.offsetTop
				const triggerOffset = missionSectionRef.current.offsetHeight * 0.55
				setAbsoluteTop(missionOffsetInHero + triggerOffset)
				setHeroFixed(false)
			} else if (missionTriggerPoint > viewportMiddle && !heroFixed) {
				// Switch back to fixed when scrolling up
				setHeroFixed(true)
			}
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [heroFixed])

	// Mission cards pinning effect for scroll buffer (desktop only)
	useEffect(() => {
		if (isMobile || !missionCardsRef.current || !missionSectionRef.current) return

		const ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: missionSectionRef.current, // Use outer stable container as trigger
				start: 'top 60%', // Pin earlier, before cards reach center
				end: '+=150vh', // 150vh of scroll buffer
				pin: missionCardsRef.current, // Pin the cards container
				anticipatePin: 1, // Predict pin position to prevent snap
				invalidateOnRefresh: true, // Recalculate on window resize
				pinSpacing: true,
				markers: false, // Set to true for debugging
			})
		})

		return () => ctx.revert()
	}, [isMobile])

	// Takeover animation (desktop only)
	useEffect(() => {
		if (isMobile || !takeoverRef.current || !triggerRef.current) return

		const ctx = gsap.context(() => {
			gsap.set(takeoverRef.current, { yPercent: 100 })

			gsap.to(takeoverRef.current, {
				yPercent: 0,
				scrollTrigger: {
					id: 'takeover',
					trigger: triggerRef.current,
					start: 'bottom bottom',
					end: '+=100%',
					scrub: 1,
					pin: true,
					anticipatePin: 1,
				},
				ease: 'none',
			})
		})

		return () => ctx.revert()
	}, [isMobile])

	return (
		<main className="min-h-screen bg-background text-foreground overflow-hidden">
			<Header />

			{/* Hero section now includes Mission content (product image + REPAIR/REFRESH/RECHARGE) */}
			<div ref={heroSectionRef}>
				<Hero
					heroLeftRef={heroLeftRef as React.RefObject<HTMLDivElement>}
					missionSectionRef={missionSectionRef as React.RefObject<HTMLDivElement>}
					missionCardsRef={missionCardsRef as React.RefObject<HTMLDivElement>}
					heroFixed={heroFixed}
					absoluteTop={absoluteTop}
					aboutCardRef={aboutCardRef}
					repairCardRef={repairCardRef as React.RefObject<HTMLDivElement>}
					refreshCardRef={refreshCardRef as React.RefObject<HTMLDivElement>}
					rechargeCardRef={rechargeCardRef as React.RefObject<HTMLDivElement>}
				/>
			</div>

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
