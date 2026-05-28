'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { LoadingScreen } from '@/components/common/loading-screen'
import { HeroSection } from '@/components/sections/hero-section'
import { MissionSection } from '@/components/sections/mission-section'
import { OurStorySection } from '@/components/sections/our-story-section'
import { useScrollAnimation, useHeroLoadAnimation } from '@/hooks/use-scroll-animation'
import { useScrollToTop } from '@/hooks/use-scroll-to-top'
import { WIINING_WAY_ANIMATIONS } from '@/lib/constants/animations'

export default function Page() {
	useScrollToTop()

	const { titleRef, sloganRef, subtitleRef, buttonsRef } = useHeroLoadAnimation()

	const wiiningWayTitleRef = useScrollAnimation(WIINING_WAY_ANIMATIONS.title)
	const wiiningWayCardsRef = useScrollAnimation(WIINING_WAY_ANIMATIONS.cards)

	return (
		<motion.main
			className="min-h-screen bg-background text-foreground overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
		>
			<LoadingScreen />
			<Header />

			<HeroSection
				titleRef={titleRef}
				sloganRef={sloganRef}
				subtitleRef={subtitleRef}
				buttonsRef={buttonsRef}
			/>

			<MissionSection
				titleRef={wiiningWayTitleRef as React.RefObject<HTMLHeadingElement>}
				cardsRef={wiiningWayCardsRef as React.RefObject<HTMLDivElement>}
			/>

			<OurStorySection />
		</motion.main>
	)
}
