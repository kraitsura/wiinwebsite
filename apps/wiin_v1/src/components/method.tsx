'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Method() {
	const headingRef = useRef(null)
	const calloutRef = useRef(null)

	const headingInView = useInView(headingRef, { once: true, margin: '-100px' })
	const calloutInView = useInView(calloutRef, { once: true, margin: '-100px' })

	const ingredients = [
		{
			name: 'NAD+',
			description: 'CELLULAR ENERGY & REPAIR',
		},
		{
			name: 'PEPTIDES',
			description: 'TISSUE REGENERATION',
		},
		{
			name: 'EXOSOMES',
			description: 'CELLULAR COMMUNICATION',
		},
		{
			name: 'DENTAL ACTIVES',
			description: 'GUM HEALTH SUPPORT',
		},
	]

	return (
		<section id="method" className="min-h-screen flex items-center justify-center px-4 py-20">
			<div className="max-w-5xl w-full space-y-12">
				<motion.div
					ref={headingRef}
					className="space-y-6"
					initial={{ opacity: 0, y: 30 }}
					animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					<h2 className="text-5xl md:text-7xl font-bold">THE METHOD</h2>
					<p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
						FORMULATED WITH NAD+, PEPTIDES, EXOSOMES, AND OTHER POWERFUL DENTAL INGREDIENTS,
						DESIGNED TO REVERSE GUM DAMAGE AND AGGRESSIVE GUM RECESSION CAUSED BY NICOTINE POUCH
						USAGE.
					</p>
				</motion.div>

				<div className="grid sm:grid-cols-2 gap-6">
					{ingredients.map((ingredient, index) => (
						<motion.div
							key={ingredient.name}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{
								duration: 0.6,
								ease: 'easeOut',
								delay: index * 0.15,
							}}
						>
							<div className="border-4 border-foreground p-8 bg-card hover:bg-[#20B2AA] hover:text-white transition-all duration-300 group h-full">
								<h3 className="text-3xl font-bold mb-4">{ingredient.name}</h3>
								<p className="text-lg">{ingredient.description}</p>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					ref={calloutRef}
					initial={{ opacity: 0, scale: 0.95 }}
					animate={calloutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
				>
					<div className="border-4 border-foreground bg-secondary text-secondary-foreground p-8 hover:border-[#20B2AA] transition-all duration-300">
						<p className="text-2xl md:text-3xl font-bold text-center">
							HEALTHY NICOTINE POUCHES THAT ARE GOOD FOR YOUR GUMS
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
