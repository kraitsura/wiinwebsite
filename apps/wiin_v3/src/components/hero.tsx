'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroProps {
	heroFixed: boolean
	pinOffset: number
}

export function Hero({ heroFixed, pinOffset }: HeroProps) {
	// Condensed non-uniform times array - fewer flickers, same convergence pattern:
	// First interval (0→0.1): LONGEST pause - 10% of timeline
	// Second interval (0.15→0.35): LONG pause - 20%
	// Third interval (0.4→0.6): MEDIUM pause - 20%
	// Accelerating phase (0.65→1): Rapid succession - 35%
	const flickerTimes = [0, 0.1, 0.15, 0.35, 0.4, 0.6, 0.65, 0.75, 0.83, 0.9, 0.96, 1]

	// "wiin" flicker animation with triple property coordination
	const wiinFlicker = {
		initial: {
			opacity: 0,
			filter: 'brightness(0.3)',
			scale: 0.98,
		},
		animate: {
			opacity: [0, 0.05, 0, 0.2, 0, 0.45, 0.25, 0.65, 0.5, 0.85, 0.9, 1],
			filter: [
				'brightness(0.3)',
				'brightness(1.8)',
				'brightness(0.5)',
				'brightness(2.2)', // Intensity spike
				'brightness(0.6)',
				'brightness(1.7)',
				'brightness(1.0)',
				'brightness(1.5)',
				'brightness(1.1)',
				'brightness(1.3)',
				'brightness(1.1)',
				'brightness(1)',
			],
			scale: [0.98, 0.99, 0.985, 1, 0.99, 1.008, 0.998, 1.004, 1, 1.002, 1.001, 1],
		},
		transition: {
			opacity: {
				duration: 1.5,
				times: flickerTimes,
				delay: 0.6,
			},
			filter: {
				duration: 1.5,
				times: flickerTimes,
				delay: 0.6,
			},
			scale: {
				duration: 1.5,
				times: flickerTimes,
				delay: 0.6,
			},
		},
	}

	// "Power Your Day" flicker with slight variation
	const powerFlicker = {
		initial: {
			opacity: 0,
			filter: 'brightness(0.3)',
			scale: 0.98,
		},
		animate: {
			opacity: [0, 0.08, 0, 0.25, 0, 0.4, 0.22, 0.6, 0.45, 0.82, 0.88, 1],
			filter: [
				'brightness(0.3)',
				'brightness(1.9)',
				'brightness(0.6)',
				'brightness(2.0)', // Intensity spike
				'brightness(0.5)',
				'brightness(1.6)',
				'brightness(0.95)',
				'brightness(1.4)',
				'brightness(1.12)',
				'brightness(1.25)',
				'brightness(1.08)',
				'brightness(1)',
			],
			scale: [0.98, 0.99, 0.987, 1, 0.99, 1.007, 0.997, 1.003, 1, 1.001, 1.0005, 1],
		},
		transition: {
			opacity: {
				duration: 1.4,
				times: flickerTimes,
				delay: 0.9, // Irregular offset for overlapping effect (0.6 + 0.3)
			},
			filter: {
				duration: 1.4,
				times: flickerTimes,
				delay: 0.9,
			},
			scale: {
				duration: 1.4,
				times: flickerTimes,
				delay: 0.9,
			},
		},
	}

	return (
		<section id="hero" className="relative min-h-screen">
			{/* Fixed Left Section - WIIN, Power Your Day, Buttons */}
			<div
				className={`${
					heroFixed ? 'fixed' : 'absolute'
				} left-0 h-screen w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12 space-y-8 z-10`}
				style={{
					top: heroFixed ? 0 : `${pinOffset}px`,
				}}
			>
				<div className="space-y-6">
					<motion.h1
						className="text-[12vw] md:text-[8rem] font-bold leading-none tracking-tight text-balance lowercase"
						initial={wiinFlicker.initial}
						animate={wiinFlicker.animate}
						transition={wiinFlicker.transition}
					>
						wiin
					</motion.h1>
					<motion.p
						className="text-2xl md:text-4xl font-bold border-4 border-foreground bg-primary text-primary-foreground inline-block px-6 py-3 uppercase hover:bg-[#20B2AA] hover:text-foreground hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
						initial={powerFlicker.initial}
						animate={powerFlicker.animate}
						transition={powerFlicker.transition}
					>
						Power Your Day
					</motion.p>
				</div>

				<motion.div
					className="flex flex-col sm:flex-row gap-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 1,
						ease: 'easeOut',
						delay: 2.6,
					}}
				>
					<button className="border-4 border-foreground bg-primary text-primary-foreground px-8 py-4 text-lg font-bold hover:bg-[#20B2AA] hover:text-foreground hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
						ORDER NOW
					</button>
					<button className="border-4 border-foreground bg-background text-foreground px-8 py-4 text-lg font-bold hover:border-[#20B2AA] hover:text-[#20B2AA] transition-all duration-300">
						LEARN MORE
					</button>
				</motion.div>
			</div>

			{/* Right Section - Scrollable Content */}
			<div className="min-h-screen flex items-center justify-end px-4 md:px-12 py-20">
				<motion.div
					className="space-y-6 max-w-md flex flex-col items-end"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 1,
						ease: 'easeOut',
						delay: 2.4,
					}}
				>
					{/* Product Image */}
					<div className="w-48 md:w-64">
						<Image
							src="/zynbox.webp"
							alt="WIIN Nicotine Pouches"
							width={400}
							height={400}
							className="w-full h-auto"
							priority
						/>
					</div>

					{/* Text Content */}
					<div className="space-y-2 text-right">
						<p className="text-sm md:text-base leading-tight">ORAL WELLNESS NICOTINE POUCHES</p>
						<p className="text-xs md:text-sm leading-tight text-muted-foreground">
							THE FIRST NICOTINE POUCH THAT'S GOOD FOR YOUR GUMS.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
