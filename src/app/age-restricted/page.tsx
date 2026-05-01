import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Age Restricted — WiiN',
	description: 'You must be 21 or older to access this site.',
	robots: { index: false, follow: false },
}

export default function AgeRestrictedPage() {
	return (
		<main className="bg-background flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
			<div className="font-heading text-foreground mb-6 text-[clamp(6rem,18vw,12rem)] leading-none tracking-tight italic">
				21+
			</div>
			<h1 className="font-heading text-foreground mb-4 text-2xl font-normal tracking-[0.2em] uppercase italic sm:text-3xl">
				You must be 21 or older
			</h1>
			<p className="text-muted-foreground max-w-md text-[11px] leading-relaxed tracking-[0.15em] uppercase sm:text-xs">
				WiiN products contain nicotine. Nicotine is an addictive chemical.
			</p>
		</main>
	)
}
