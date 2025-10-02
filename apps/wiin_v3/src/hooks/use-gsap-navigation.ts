import { useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export function useGsapNavigation() {
	const navigateToSection = useCallback((targetId: string) => {
		const target = document.querySelector(targetId) as HTMLElement
		if (!target) return

		// Check if we're on mobile by checking window width
		const isMobile = window.innerWidth < 768

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
					sectionOffset = 193
				} else if (targetId === '#team') {
					sectionOffset = 561
				} else if (targetId === '#impact') {
					sectionOffset = 377
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

		// For non-GSAP sections (like mission), use simple scrollIntoView
		target.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}, [])

	return { navigateToSection }
}
