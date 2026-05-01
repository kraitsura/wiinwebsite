/**
 * Animation constants for scroll-based animations
 * Centralized configuration for GSAP ScrollTrigger animations
 */

export interface ScrollAnimationConfig {
	y?: number
	opacity?: number
	start?: string
	end?: string
	scrub?: boolean | number
	delay?: number
	stagger?: number
}

/**
 * Wiining Way section scroll animation configurations
 */
export const WIINING_WAY_ANIMATIONS = {
	title: {
		y: 100,
		opacity: 0,
		start: '80% 90%',
		end: '90% 90%',
		scrub: 2,
		delay: 0.3,
	},
	cards: {
		y: 100,
		opacity: 0,
		start: '80% 90%',
		end: '100% 90%',
		scrub: 2,
		delay: 0.5,
		stagger: 0.3,
	},
} as const

/**
 * Takeover animation configuration
 */
export const TAKEOVER_ANIMATION = {
	start: 'bottom bottom',
	end: '+=100%',
	scrub: 1,
	pin: true,
	anticipatePin: 1,
	id: 'takeover',
} as const

/**
 * Section offset values for GSAP navigation
 * These values are used when scrolling to sections within the takeover container
 */
export const SECTION_OFFSETS = {
	method: 193,
	impact: 377,
	team: 561,
} as const

/**
 * Breakpoints
 */
export const BREAKPOINTS = {
	mobile: 768,
} as const

/**
 * Navigation header offset
 */
export const HEADER_OFFSET = 80

/**
 * Framer Motion animation variants
 * Reusable animation configurations for consistent page transitions
 */
export const FRAMER_VARIANTS = {
	fadeInUp: {
		hidden: { opacity: 0, y: 60 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	},
	fadeInScale: {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	},
	staggerContainer: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	},
	slideInLeft: {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.7,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	},
	slideInRight: {
		hidden: { opacity: 0, x: 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.7,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	},
} as const
