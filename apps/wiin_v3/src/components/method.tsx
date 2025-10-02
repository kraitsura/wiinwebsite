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
		<section id="method" className="min-h-screen flex items-center justify-end px-4 md:px-12 py-20">
			<div className="max-w-2xl w-full md:w-1/2 space-y-8">
				<motion.div
					ref={headingRef}
					className="space-y-6"
					initial={{ opacity: 0, x: 50 }}
					animate={headingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					<h2 className="text-5xl md:text-7xl font-bold">THE METHOD</h2>
					<p className="text-xl md:text-2xl leading-relaxed">
						FORMULATED WITH NAD+, PEPTIDES, EXOSOMES, AND OTHER POWERFUL DENTAL INGREDIENTS,
						DESIGNED TO REVERSE GUM DAMAGE AND AGGRESSIVE GUM RECESSION CAUSED BY NICOTINE POUCH
						USAGE.
					</p>
				</motion.div>

				<div className="space-y-6">
					{ingredients.map((ingredient, index) => (
						<motion.div
							key={ingredient.name}
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{
								duration: 0.6,
								ease: 'easeOut',
								delay: index * 0.15,
							}}
						>
							<div className="border-4 border-foreground p-8 bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
								<h3 className="text-3xl font-bold mb-4">{ingredient.name}</h3>
								<p className="text-lg">{ingredient.description}</p>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					ref={calloutRef}
					initial={{ opacity: 0, x: 50 }}
					animate={calloutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
				>
					<div className="border-4 border-foreground bg-secondary text-secondary-foreground p-8 hover:border-primary transition-all duration-300">
						<p className="text-2xl md:text-3xl font-bold text-center">
							HEALTHY NICOTINE POUCHES THAT ARE GOOD FOR YOUR GUMS
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
