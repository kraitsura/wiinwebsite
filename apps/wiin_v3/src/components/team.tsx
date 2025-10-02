'use client'

import { motion } from 'framer-motion'

interface TeamProps {
	readyToWiinRef: React.RefObject<HTMLDivElement>
}

export function Team({ readyToWiinRef }: TeamProps) {
	const team = [
		{ name: 'HAMMER', role: 'CO-FOUNDER' },
		{ name: 'DOUG', role: 'CO-FOUNDER' },
		{ name: 'CATHY', role: 'CO-FOUNDER' },
	]

	return (
		<>
			<section className="min-h-screen flex items-center justify-end px-4 md:px-12 py-20">
				<div className="max-w-2xl w-full md:w-1/2 space-y-8">
					<motion.h2
						className="text-5xl md:text-7xl font-bold"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
					>
						THE TEAM
					</motion.h2>

					<div className="space-y-6">
						{team.map((member, index) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{
									duration: 0.6,
									ease: 'easeOut',
									delay: index * 0.15,
								}}
							>
								<div className="border-4 border-foreground p-8 bg-card flex flex-col items-center justify-center text-center hover:bg-primary hover:text-primary-foreground transition-colors">
									<h3 className="text-4xl font-bold mb-4">{member.name}</h3>
									<p className="text-lg">{member.role}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* READY TO WIIN Section - Full Width */}
			<section
				ref={readyToWiinRef}
				className="w-full py-24 px-4 text-center"
				style={{ backgroundColor: '#20b2aa' }}
			>
				<div className="max-w-4xl mx-auto text-white">
					<h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-wider">
						READY TO WIIN?
					</h2>
					<p className="text-xl mb-12 uppercase tracking-widest">
						POWER YOUR DAY THE HEALTHY WAY
					</p>
					<div>
						<button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#20b2aa] text-sm uppercase tracking-widest px-12 py-4 transition-colors">
							ORDER NOW
						</button>
					</div>
				</div>
			</section>
		</>
	)
}
