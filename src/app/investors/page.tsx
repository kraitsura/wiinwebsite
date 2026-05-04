'use client'

import dynamic from 'next/dynamic'
import { PageHeader } from '@/components/layout/page-header'

const ImmersivePdfViewer = dynamic(
	() =>
		import('@/components/features/immersive-pdf-viewer').then(
			(m) => m.ImmersivePdfViewer,
		),
	{ ssr: false },
)

const PITCH_DECK_URL = '/WiiN_Daily_Pitch_Deck.pdf'

export default function InvestorsPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<PageHeader />
			<main className="flex-1 pt-20">
				<ImmersivePdfViewer file={PITCH_DECK_URL} />
			</main>
		</div>
	)
}
