'use client'

import { useEffect, RefObject } from 'react'
import { gsap } from '@/lib/gsap-config'
import { TAKEOVER_ANIMATION } from '@/lib/constants/animations'

interface UseTakeoverAnimationProps {
	takeoverRef: RefObject<HTMLDivElement | null>
	triggerRef: RefObject<HTMLDivElement | null>
	isMobile: boolean
}

/**
 * Hook to handle the takeover scroll animation
 * Creates a pinned scroll effect on desktop where content slides up to reveal new sections
 *
 * @param takeoverRef - Reference to the container element that will be animated
 * @param triggerRef - Reference to the trigger element that starts the animation
 * @param isMobile - Whether the device is mobile (animation disabled on mobile)
 */
export function useTakeoverAnimation({ takeoverRef, triggerRef, isMobile }: UseTakeoverAnimationProps) {
	useEffect(() => {
		if (isMobile || !takeoverRef.current || !triggerRef.current) return

		const ctx = gsap.context(() => {
			gsap.set(takeoverRef.current, { yPercent: 100 })

			gsap.to(takeoverRef.current, {
				yPercent: 0,
				scrollTrigger: {
					id: TAKEOVER_ANIMATION.id,
					trigger: triggerRef.current,
					start: TAKEOVER_ANIMATION.start,
					end: TAKEOVER_ANIMATION.end,
					scrub: TAKEOVER_ANIMATION.scrub,
					pin: TAKEOVER_ANIMATION.pin,
					anticipatePin: TAKEOVER_ANIMATION.anticipatePin,
				},
				ease: 'none',
			})
		})

		return () => ctx.revert()
	}, [isMobile, takeoverRef, triggerRef])
}
