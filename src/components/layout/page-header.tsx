'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AnimatedMenuIcon } from '@/components/ui/animated-menu-icon'

const topRowLinks = [
	{ href: '/ingredients', label: 'INGREDIENTS' },
	{ href: '/team', label: 'TEAM' },
	{ href: '/investors', label: 'INVESTORS' },
]

const bottomRowLinks = [
	{ href: '/blog', label: 'BLOG' },
	{ href: '/faq', label: 'FAQ' },
	{ href: '/contact', label: 'CONTACT' },
]

const centerLinks = [
	{ href: '/', label: 'HOME' },
	{ href: '/team', label: 'TEAM' },
	{ href: '/investors', label: 'INVESTORS' },
]

export function PageHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = usePathname()

	const handleNavClick = () => {
		setIsMenuOpen(false)
	}

	return (
		<>
			<header className="fixed top-14 md:top-16 left-0 right-0 z-50">
				<div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-3 items-center">
					{/* Left Spacer - Only on desktop */}
					<div className="hidden md:block" />

					{/* Center Links - Always visible */}
					<nav className="flex gap-3 md:gap-8 justify-start md:justify-center col-span-2 md:col-span-1 md:ml-6">
						{centerLinks.map((link) => {
							const isActive = pathname === link.href
							return (
								<Link
									key={link.href}
									href={link.href}
									className={`text-xs sm:text-sm font-bold uppercase tracking-wider px-2 py-1 md:px-4 md:py-2 rounded-md border ${
										isActive
											? 'bg-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-transparent'
											: !isMenuOpen
												? 'backdrop-blur-md bg-white/20 border-white/30 hover:bg-primary hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [transition:backdrop-filter_300ms_400ms,background-color_300ms_400ms,border-color_300ms_400ms,box-shadow_200ms_0ms]'
												: 'border-transparent'
									}`}
								>
									{link.label}
								</Link>
							)
						})}
					</nav>

					{/* Menu Button */}
					<div className="flex justify-end col-span-1">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="p-2 hover:opacity-70 transition-opacity"
							aria-label="Toggle menu"
						>
							<AnimatedMenuIcon isOpen={isMenuOpen} />
						</button>
					</div>
				</div>
			</header>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ y: '-100%' }}
						animate={{ y: 0 }}
						exit={{ y: '-100%' }}
						transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
						className="fixed inset-0 z-40 flex items-center justify-center bg-primary px-4 md:px-8"
						style={{ willChange: 'transform' }}
					>
						<div className="w-full max-w-7xl mx-auto">
							<h2 className="text-5xl md:text-7xl font-black text-white text-center mb-12 md:mb-16">
								MENU
							</h2>
							<div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
								{/* Top Row - 3 items */}
								<nav className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
									{topRowLinks.map((link) => {
										const isActive = pathname === link.href
										return (
											<Link
												key={link.href}
												href={link.href}
												className={`block text-2xl md:text-4xl font-light text-white hover:opacity-70 transition-all text-center px-6 py-4 rounded-md ${
													isActive ? 'bg-white/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : ''
												}`}
												onClick={handleNavClick}
											>
												{link.label}
											</Link>
										)
									})}
								</nav>
								{/* Bottom Row */}
								<nav className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
									{bottomRowLinks.map((link) => {
										const isActive = pathname === link.href
										return (
											<Link
												key={link.href}
												href={link.href}
												className={`block text-2xl md:text-4xl font-light text-white hover:opacity-70 transition-all text-center px-6 py-4 rounded-md ${
													isActive ? 'bg-white/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : ''
												}`}
												onClick={handleNavClick}
											>
												{link.label}
											</Link>
										)
									})}
								</nav>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
