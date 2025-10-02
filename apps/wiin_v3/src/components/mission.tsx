'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Mission() {
	const repairRef = useRef(null)
	const refreshRef = useRef(null)
	const rechargeRef = useRef(null)

	const repairInView = useInView(repairRef, { once: true, margin: '-100px' })
	const refreshInView = useInView(refreshRef, { once: true, margin: '-100px' })
	const rechargeInView = useInView(rechargeRef, { once: true, margin: '-100px' })

	return (
		<section id="mission" className="min-h-screen flex items-center justify-end px-4 md:px-12 py-20">
			<div className="max-w-2xl w-full md:w-1/2 space-y-8">
				<motion.div
					ref={repairRef}
					initial={{ opacity: 0, x: 50 }}
					animate={repairInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					<div className="border-4 border-foreground p-8 bg-card hover:border-[#20B2AA] transition-all duration-300 group">
						<h2 className="text-4xl md:text-6xl font-bold mb-6 group-hover:text-[#20B2AA] transition-colors">
							REPAIR
						</h2>
						<p className="text-lg leading-relaxed">
							REVERSE GUM DAMAGE CAUSED BY TRADITIONAL NICOTINE POUCHES
						</p>
					</div>
				</motion.div>

				<motion.div
					ref={refreshRef}
					initial={{ opacity: 0, x: 50 }}
					animate={refreshInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
				>
					<div className="border-4 border-foreground p-8 bg-card hover:border-[#20B2AA] transition-all duration-300 group">
						<h2 className="text-4xl md:text-6xl font-bold mb-6 group-hover:text-[#20B2AA] transition-colors">
							REFRESH
						</h2>
						<p className="text-lg leading-relaxed">
							CLEAN ENERGY WITHOUT THE GUILT OR GUM RECESSION
						</p>
					</div>
				</motion.div>

				<motion.div
					ref={rechargeRef}
					initial={{ opacity: 0, x: 50 }}
					animate={rechargeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
				>
					<div className="border-4 border-foreground p-8 bg-primary text-primary-foreground hover:bg-[#20B2AA] hover:text-foreground hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
						<h2 className="text-4xl md:text-6xl font-bold mb-6">RECHARGE</h2>
						<p className="text-lg leading-relaxed">
							POWER THROUGH YOUR DAY WITH WELLNESS-FOCUSED NICOTINE
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
