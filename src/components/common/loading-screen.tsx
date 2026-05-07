'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const MIN_DISPLAY_MS = 350
const MAX_DISPLAY_MS = 1500

export function LoadingScreen() {
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		const startedAt = performance.now()

		const hide = () => {
			const elapsed = performance.now() - startedAt
			const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed)
			window.setTimeout(() => setIsVisible(false), remaining)
		}

		if (document.readyState === 'complete') {
			hide()
			return
		}

		const onLoad = () => hide()
		window.addEventListener('load', onLoad, { once: true })
		const fallback = window.setTimeout(hide, MAX_DISPLAY_MS)

		return () => {
			window.removeEventListener('load', onLoad)
			window.clearTimeout(fallback)
		}
	}, [])

	useEffect(() => {
		if (!isVisible) return
		const previous = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = previous
		}
	}, [isVisible])

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
					aria-hidden
				>
					<div className="flex flex-col items-center gap-6">
						<motion.span
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							className="hero-heading text-5xl md:text-6xl font-bold tracking-[0.2em] text-white"
						>
							WiiN
						</motion.span>
						<div className="relative h-px w-32 overflow-hidden bg-white/15">
							<motion.div
								className="absolute inset-y-0 left-0 w-1/3 bg-white/80"
								initial={{ x: '-100%' }}
								animate={{ x: '300%' }}
								transition={{
									duration: 1.2,
									ease: 'easeInOut',
									repeat: Infinity,
								}}
							/>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
