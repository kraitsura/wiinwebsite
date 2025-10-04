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
 * Hero section scroll animation configurations
 */
export const HERO_ANIMATIONS = {
	title: {
		y: 50,
		opacity: 0,
		start: '20% 90%',
		end: '50% 90%',
		scrub: 2,
	},
	slogan: {
		y: 50,
		opacity: 0,
		start: '20% 90%',
		end: '50% 90%',
		scrub: 2,
		delay: 0.1,
	},
	subtitle: {
		y: 50,
		opacity: 0,
		start: '20% 90%',
		end: '50% 90%',
		scrub: 2,
		delay: 0.2,
	},
	buttons: {
		y: 50,
		opacity: 0,
		start: '20% 90%',
		end: '50% 90%',
		scrub: 2,
		delay: 0.3,
	},
} as const

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
