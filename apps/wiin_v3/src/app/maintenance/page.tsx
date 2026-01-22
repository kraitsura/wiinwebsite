import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Under Maintenance - WiiN',
	description: 'We are currently performing scheduled maintenance. Please check back soon.',
}

export default function MaintenancePage() {
	return (
		<main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
			<div className="text-center max-w-2xl">
				<h1 className="text-6xl md:text-8xl font-heading tracking-tight mb-6">
					Under Maintenance
				</h1>
				<div className="w-24 h-1 bg-primary mx-auto mb-8" />
				<p className="text-lg md:text-xl text-muted-foreground mb-4">
					We&apos;re currently performing scheduled maintenance to improve your experience.
				</p>
				<p className="text-base text-muted-foreground">
					Please check back soon. We appreciate your patience.
				</p>
				<div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
					<div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
					<span>Working on something great</span>
				</div>
			</div>
		</main>
	)
}
