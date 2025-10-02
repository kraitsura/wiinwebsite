'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

interface HeroProps {
	heroLeftRef: React.RefObject<HTMLDivElement>
	missionSectionRef: React.RefObject<HTMLDivElement>
	missionCardsRef: React.RefObject<HTMLDivElement>
	heroFixed: boolean
	absoluteTop: number
	aboutCardRef: React.RefObject<HTMLAnchorElement>
	repairCardRef: React.RefObject<HTMLDivElement>
	refreshCardRef: React.RefObject<HTMLDivElement>
	rechargeCardRef: React.RefObject<HTMLDivElement>
}

// Module-level variable: persists during client navigation, resets on page reload
let hasPlayedInCurrentLoad = false

export function Hero({ heroLeftRef, missionSectionRef, missionCardsRef, heroFixed, absoluteTop, aboutCardRef, repairCardRef, refreshCardRef, rechargeCardRef }: HeroProps) {
	// Check module variable to determine if animations should play
	const hasAnimated = hasPlayedInCurrentLoad

	useEffect(() => {
		// Mark as played for subsequent navigations
		hasPlayedInCurrentLoad = true
	}, [])
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
			opacity: [0, 0.08, 0, 0.25, 0, 0.4, 0.22, 0.6, 0.75, 0.82, 0.92, 1],
			filter: [
				'brightness(0.3)',
				'brightness(1.3)',
				'brightness(1.2)',
				'brightness(1)', // Intensity spike
				'brightness(1.2)',
				'brightness(0.73)',
				'brightness(0.95)',
				'brightness(1.1)',
				'brightness(1.12)',
				'brightness(1.3)',
				'brightness(1.12)',
				'brightness(1)',
			],
			scale: [0.98, 0.99, 0.987, 0.995, 0.99, 1.007, 0.997, 1.003, 1, 1.001, 1.0005, 1],
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
		<section id="hero" className="relative">
			{/* Pinned Left Section - WIIN, Power Your Day, Buttons */}
			<div
				ref={heroLeftRef}
				className={`${
				heroFixed ? 'md:fixed md:top-1/2 md:-translate-y-1/2' : 'md:absolute md:-translate-y-1/2'
			} left-0 w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12 space-y-4 md:space-y-8 z-10 py-8 md:py-0`}
			style={{
				top: !heroFixed ? `${absoluteTop}px` : undefined,
			}}
			>
				{/* Video Background - only show on first animation */}
				{/* {!hasAnimated && ( */}
					<div className="absolute left-40 top-1/2 -translate-x-1/3 -translate-y-1/2 hidden md:block z-0">
						<div className="border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-background">
							<video
								src="/skateedit.mp4"
								autoPlay
								loop
								muted
								playsInline
								className="w-[400px] h-[400px] md:w-[550px] md:h-[450px] object-cover"
							/>
						</div>
					</div>
					<div className="absolute left-130 top-1/2 -translate-x-1/3 -translate-y-1/2 hidden md:block z-0">
						<div className="border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-background">
							<video
								src="/hardedit.mp4"
								autoPlay
								loop
								muted
								playsInline
								className="w-[400px] h-[400px] md:w-[350px] md:h-[450px] object-cover"
							/>
						</div>
					</div>
				{/* )} */}

				<div className="space-y-6 relative z-10">
					<motion.h1
						className="text-[12vw] md:text-[8rem] font-bold leading-none tracking-tight text-balance lowercase"
						initial={hasAnimated ? false : wiinFlicker.initial}
						animate={hasAnimated ? { opacity: 1, filter: 'brightness(1)', scale: 1 } : wiinFlicker.animate}
						transition={hasAnimated ? { duration: 0 } : wiinFlicker.transition}
					>
						wiin
					</motion.h1>
					<motion.p
						className="text-2xl md:text-4xl font-bold border-4 border-foreground bg-primary text-primary-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block px-6 py-3 uppercase hover:bg-foreground hover:text-background hover:shadow-none transition-[background-color,color,box-shadow] duration-300"
						initial={hasAnimated ? false : powerFlicker.initial}
						animate={hasAnimated ? { opacity: 1, filter: 'brightness(1)', scale: 1 } : powerFlicker.animate}
						transition={hasAnimated ? { duration: 0 } : powerFlicker.transition}
					>
						Power Your Day
					</motion.p>
				</div>

				<motion.div
					className="flex flex-col sm:flex-row gap-4 relative z-10"
					initial={hasAnimated ? false : { opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: hasAnimated ? 0 : 1,
						ease: 'easeOut',
						delay: hasAnimated ? 0 : 2.6,
					}}
				>
					<button className="border-4 border-foreground bg-foreground text-background px-8 py-4 text-lg font-bold hover:bg-primary hover:text-primary-foreground hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
						ORDER NOW
					</button>
					<button className="border-4 border-foreground bg-background text-foreground px-8 py-4 text-lg font-bold hover:border-primary hover:text-primary transition-all duration-300">
						LEARN MORE
					</button>
				</motion.div>
			</div>

			{/* Right Section - Scrollable Content */}
			<div className="flex flex-col w-full md:ml-[50%] md:w-1/2 pr-4 md:pr-24">
				{/* Product Image Section */}
				<div className="min-h-[50vh] md:min-h-screen flex items-center justify-end px-4 md:px-12 pt-8 md:pt-20 pb-8 md:pb-20">
					<motion.div
						className="space-y-6 max-w-md flex flex-col items-end"
						initial={hasAnimated ? false : { opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: hasAnimated ? 0 : 1,
							ease: 'easeInOut',
							delay: hasAnimated ? 0 : 2.4,
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
						<div className="space-y-2 text-center md:text-right">
							<p className="text-sm md:text-base leading-tight">ORAL WELLNESS NICOTINE POUCHES</p>
							<p className="text-xs md:text-sm leading-tight text-muted-foreground">
								THE FIRST NICOTINE POUCH THAT'S GOOD FOR YOUR GUMS.
							</p>
						</div>
					</motion.div>
				</div>

				{/* Mission Section - ABOUT + REPAIR/REFRESH/RECHARGE */}
				<div ref={missionSectionRef} className="min-h-fit md:min-h-[200vh] flex items-center justify-end px-4 md:px-12 py-8">
					<div ref={missionCardsRef} className="w-full md:w-[95%] flex flex-col md:flex-row gap-4 md:gap-6">
						{/* About Card - Spans full height */}
						<Link href="/about" ref={aboutCardRef} className="md:w-[50%]">
							<div className="border-4 border-foreground p-6 md:p-8 bg-primary text-primary-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-foreground hover:shadow-none">
								<h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">About</h2>
								<p className="text-sm md:text-base leading-relaxed">
									WIIN is revolutionizing the industry. Find out how →
								</p>
							</div>
						</Link>

						{/* Mission Cards Column */}
						<div className="md:w-[50%] space-y-4">
							<div ref={repairCardRef}>
								<div className="border-4 border-foreground p-4 md:p-6 bg-card hover:border-primary transition-all duration-300 group">
									<h2 className="text-2xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
										REPAIR
									</h2>
									<p className="text-sm md:text-base leading-relaxed">
										REVERSE GUM DAMAGE CAUSED BY TRADITIONAL NICOTINE POUCHES
									</p>
								</div>
							</div>

							<div ref={refreshCardRef}>
								<div className="border-4 border-foreground p-4 md:p-6 bg-card hover:border-primary transition-all duration-300 group">
									<h2 className="text-2xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
										REFRESH
									</h2>
									<p className="text-sm md:text-base leading-relaxed">
										CLEAN ENERGY WITHOUT THE GUILT OR GUM RECESSION
									</p>
								</div>
							</div>

							<div ref={rechargeCardRef}>
								<div className="border-4 border-foreground p-4 md:p-6 bg-foreground text-background hover:bg-primary hover:text-primary-foreground hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
									<h2 className="text-2xl md:text-4xl font-bold mb-3">RECHARGE</h2>
									<p className="text-sm md:text-base leading-relaxed">
										POWER THROUGH YOUR DAY WITH WELLNESS-FOCUSED NICOTINE
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
