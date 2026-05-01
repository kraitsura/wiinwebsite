'use client'

import { motion } from 'framer-motion'

interface AnimatedMenuIconProps {
	isOpen: boolean
}

export function AnimatedMenuIcon({ isOpen }: AnimatedMenuIconProps) {
	return (
		<div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
			{/* Top line - rotates 45deg and moves down to center */}
			<motion.span
				className="w-6 h-0.5 bg-current rounded-full"
				animate={
					isOpen
						? {
								rotate: 45,
								translateY: 8,
							}
						: {
								rotate: 0,
								translateY: 0,
							}
				}
				transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
			/>

			{/* Middle line - scales to zero */}
			<motion.span
				className="w-6 h-0.5 bg-current rounded-full"
				animate={
					isOpen
						? {
								scaleX: 0,
							}
						: {
								scaleX: 1,
							}
				}
				transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
			/>

			{/* Bottom line - rotates -45deg and moves up to center */}
			<motion.span
				className="w-6 h-0.5 bg-current rounded-full"
				animate={
					isOpen
						? {
								rotate: -45,
								translateY: -8,
							}
						: {
								rotate: 0,
								translateY: 0,
							}
				}
				transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
			/>
		</div>
	)
}
