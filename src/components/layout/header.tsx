'use client'

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { AnimatedMenuIcon } from '@/components/ui/animated-menu-icon'

const NAV_LINKS = [
	{ label: 'INGREDIENTS', href: '/ingredients' },
	{ label: 'TEAM', href: '/team' },
	{ label: 'INVESTORS', href: '/investors' },
	{ label: 'BLOG', href: '/blog' },
	{ label: 'FAQ', href: '/faq' },
	{ label: 'CONTACT US', href: '/contact' },
] as const

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { scrollY } = useScroll()
	const bgOpacity = useTransform(scrollY, [0, 140], [0, 1])
	const textColor = useTransform(scrollY, [0, 140], ['#ffffff', '#000000'])

	return (
		<>
			<header className="fixed top-14 md:top-16 left-0 right-0 z-50 pointer-events-none">
				{/* Scroll-driven translucent panel that fades in but stays semi-transparent */}
				<motion.div
					aria-hidden
					style={{ opacity: bgOpacity }}
					className="absolute inset-x-0 top-0"
				>
					<div className="h-20 bg-white/55 backdrop-blur-md" />
					<div className="h-10 bg-gradient-to-b from-white/55 to-transparent" />
				</motion.div>

				<div className="relative max-w-7xl mx-auto px-4 h-20 flex justify-end items-center gap-4 pointer-events-auto">
					<motion.button
						style={{ color: textColor }}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="p-2 hover:opacity-70 transition-opacity"
						aria-label="Toggle menu"
					>
						<AnimatedMenuIcon isOpen={isMenuOpen} />
					</motion.button>
				</div>
			</header>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ y: '-100%' }}
						animate={{ y: 0 }}
						exit={{ y: '-100%' }}
						transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
						className="fixed inset-0 z-40 flex items-center justify-start bg-primary px-4 md:px-8"
						style={{ willChange: 'transform' }}
					>
						<div className="flex w-full max-w-7xl mx-auto">
							<h2 className="text-6xl md:text-8xl font-black text-white w-[30%] flex-shrink-0">
								MENU
							</h2>
							<nav className="flex flex-col justify-center space-y-6 md:space-y-8 pl-8 md:pl-16">
								{NAV_LINKS.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className="block text-3xl md:text-5xl font-light text-white hover:opacity-70 transition-opacity"
										onClick={() => setIsMenuOpen(false)}
									>
										{link.label}
									</Link>
								))}
							</nav>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
