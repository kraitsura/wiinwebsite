export function NicotineAdvisoryBanner() {
	return (
		<div
			role="alert"
			className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16 bg-white border-b-[6px] border-black flex items-center justify-center px-3 md:px-6"
		>
			<p className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-tight md:tracking-wide text-center text-black leading-tight">
				<span className="font-black">WARNING:</span> This product contains nicotine. Nicotine is an addictive chemical.
			</p>
		</div>
	)
}
