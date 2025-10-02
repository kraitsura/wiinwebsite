'use client'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Method } from '@/components/method'
import { Mission } from '@/components/mission'
import { Team } from '@/components/team'
import { useEffect, useRef, useState } from 'react'

export default function Page() {
	const [heroFixed, setHeroFixed] = useState(true)
	const [pinOffset, setPinOffset] = useState(0)
	const readyToWiinRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (readyToWiinRef.current) {
				const rect = readyToWiinRef.current.getBoundingClientRect()
				const windowHeight = window.innerHeight

				// Keep hero fixed until READY TO WIIN section is close to entering viewport
				// Switch to absolute when bottom of READY TO WIIN is within 1.5 viewports
				const shouldBeFixed = rect.bottom > windowHeight * 1.5

				if (!shouldBeFixed && heroFixed) {
					// Transitioning from fixed to absolute - capture current scroll position
					setPinOffset(window.scrollY)
					setHeroFixed(false)
				} else if (shouldBeFixed && !heroFixed) {
					// Transitioning back to fixed
					setHeroFixed(true)
				}
			}
		}

		handleScroll() // Initial calculation
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [heroFixed])

	return (
		<main className="min-h-screen">
			<Header />
			<Hero heroFixed={heroFixed} pinOffset={pinOffset} />
			<Mission />
			<Method />
			<Team readyToWiinRef={readyToWiinRef} />
			<Footer />
		</main>
	)
}
