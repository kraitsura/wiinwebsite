'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Export configured gsap for use throughout the app
export { gsap, ScrollTrigger, ScrollToPlugin }
