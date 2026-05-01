'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Footer } from '@/components/layout/footer'
import { PageHeader } from '@/components/layout/page-header'
import { Button } from '@/components/ui/button'
import { Download, Maximize2, Minimize2 } from 'lucide-react'

const ImmersivePdfViewer = dynamic(
	() =>
		import('@/components/features/immersive-pdf-viewer').then(
			(m) => m.ImmersivePdfViewer,
		),
	{ ssr: false },
)

const PITCH_DECK_URL = '/WiiN_Daily_Pitch_Deck.pdf'

type View = 'framed' | 'immersive'

export default function InvestorsPage() {
	const [view, setView] = useState<View>('framed')
	const isImmersive = view === 'immersive'

	return (
		<div className="min-h-screen flex flex-col">
			<PageHeader />

			<button
				type="button"
				onClick={() => setView(isImmersive ? 'framed' : 'immersive')}
				aria-label={isImmersive ? 'Exit immersive view' : 'Enter immersive view'}
				className="bg-foreground text-background hover:bg-foreground/90 fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 text-[10px] tracking-[0.25em] uppercase shadow-lg transition-colors"
			>
				{isImmersive ? (
					<>
						<Minimize2 className="size-3.5" />
						Framed View
					</>
				) : (
					<>
						<Maximize2 className="size-3.5" />
						Immersive View
					</>
				)}
			</button>

			{isImmersive ? (
				<main className="flex-1 pt-20">
					<ImmersivePdfViewer file={PITCH_DECK_URL} />
				</main>
			) : (
				<>
					<main className="flex-1 px-4 md:px-8 pt-32 pb-16 max-w-6xl mx-auto w-full">
						<div className="mb-10 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-muted-foreground text-[11px] tracking-[0.3em] uppercase mb-3">
									Pitch Deck
								</p>
								<h1 className="font-heading text-foreground text-5xl md:text-7xl tracking-tight italic">
									For Investors
								</h1>
								<p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
									A look at WiiN — the wellness oral nicotine company building the
									next generation of functional pouches.
								</p>
							</div>

							<Button
								asChild
								size="lg"
								className="bg-foreground text-background hover:bg-foreground/90 h-12 text-xs tracking-[0.25em] uppercase px-6"
							>
								<a
									href={PITCH_DECK_URL}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Download className="size-4" />
									Download Deck
								</a>
							</Button>
						</div>

						<div className="border-foreground/10 border bg-card aspect-[4/3] w-full overflow-hidden md:aspect-[16/10]">
							<iframe
								src={`${PITCH_DECK_URL}#view=FitH`}
								title="WiiN Pitch Deck"
								className="h-full w-full"
							/>
						</div>
					</main>

					<Footer />
				</>
			)}
		</div>
	)
}
