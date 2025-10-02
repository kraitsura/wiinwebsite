'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
		e.preventDefault()
		setIsMenuOpen(false)

		// Small delay to allow menu to close before scrolling
		setTimeout(() => {
			const target = document.querySelector(targetId)
			if (!target) return

			// For method and team, use simple scrollIntoView
			if (targetId === '#method' || targetId === '#team') {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' })
				return
			}

			// For mission, use calculated position approach
			const rect = target.getBoundingClientRect()
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop
			const targetPosition = rect.top + scrollTop

			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			})

			// For mission section, refresh ScrollTrigger animations after scroll completes
			// This ensures the scroll-based animations trigger properly
			if (targetId === '#mission') {
				setTimeout(() => {
					if (typeof ScrollTrigger !== 'undefined') {
						ScrollTrigger.refresh()
					}
				}, 1000)
			}
		}, 300)
	}

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-50">
				<div className="max-w-7xl mx-auto px-4 py-6 flex justify-end items-center">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="p-2 hover:opacity-70 transition-opacity"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<X size={32} strokeWidth={2} className="rounded-lg" />
						) : (
							<Menu size={32} strokeWidth={2} className="rounded-lg" />
						)}
					</button>
				</div>
			</header>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ y: '-100%' }}
						animate={{ y: 0 }}
						exit={{ y: '-100%' }}
						transition={{ type: 'spring', damping: 25, stiffness: 200 }}
						className="fixed inset-0 z-40 flex items-center justify-start bg-primary px-4 md:px-8"
					>
						<div className="flex w-full max-w-7xl mx-auto">
							<h2 className="text-6xl md:text-8xl font-black text-white w-[30%] flex-shrink-0">
								MENU
							</h2>
							<nav className="flex flex-col justify-center space-y-8 pl-8 md:pl-16">
								<a
									href="#mission"
									className="block text-3xl md:text-5xl font-light text-white hover:opacity-70 transition-opacity"
									onClick={(e) => handleNavClick(e, '#mission')}
								>
									MISSION
								</a>
								<a
									href="#method"
									className="block text-3xl md:text-5xl font-light text-white hover:opacity-70 transition-opacity"
									onClick={(e) => handleNavClick(e, '#method')}
								>
									METHOD
								</a>
								<a
									href="#team"
									className="block text-3xl md:text-5xl font-light text-white hover:opacity-70 transition-opacity"
									onClick={(e) => handleNavClick(e, '#team')}
								>
									TEAM
								</a>
							</nav>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
