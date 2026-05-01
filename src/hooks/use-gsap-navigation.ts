import { useCallback } from 'react'
import { ScrollTrigger } from '@/lib/gsap-config'
import { SECTION_OFFSETS, BREAKPOINTS, HEADER_OFFSET } from '@/lib/constants/animations'

export function useGsapNavigation() {
	const navigateToSection = useCallback((targetId: string) => {
		const target = document.querySelector(targetId) as HTMLElement
		if (!target) return

		// Check if we're on mobile by checking window width
		const isMobile = window.innerWidth < BREAKPOINTS.mobile

		// On mobile, or if no takeover exists, use simple scrollIntoView
		if (isMobile) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' })
			return
		}

		// Desktop: Check if target is inside a GSAP-transformed container
		const takeoverContainer = target.closest('[style*="will-change"]') as HTMLElement

		if (takeoverContainer) {
			// Find the takeover ScrollTrigger by ID
			const takeoverTrigger = ScrollTrigger.getById('takeover')

			if (takeoverTrigger) {
				// Section offsets from takeover start position
				let sectionOffset = 0

				if (targetId === '#method') {
					sectionOffset = SECTION_OFFSETS.method
				} else if (targetId === '#team') {
					sectionOffset = SECTION_OFFSETS.team
				} else if (targetId === '#impact') {
					sectionOffset = SECTION_OFFSETS.impact
				}

				// Navigate to: takeover start + section offset
				const finalScrollPosition = takeoverTrigger.start + sectionOffset

				window.scrollTo({
					top: finalScrollPosition,
					behavior: 'smooth'
				})

				return
			}
		}

		// For non-GSAP sections (like mission), calculate scroll position with offset
		const rect = target.getBoundingClientRect()
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		const targetPosition = rect.top + scrollTop - HEADER_OFFSET

		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth'
		})
	}, [])

	return { navigateToSection }
}
