import { Analytics } from '@vercel/analytics/next'
import { GeistMono } from 'geist/font/mono'
import { Bebas_Neue } from 'next/font/google'
import type { Metadata } from 'next'
import type React from 'react'
import { Suspense } from 'react'
import { AgeVerificationDialog } from '@/components/common/age-verification-dialog'
import { NicotineAdvisoryBanner } from '@/components/layout/nicotine-advisory-banner'
import { ChatWidget } from '@/components/features/chat-widget'
import './globals.css'

const bebasNeue = Bebas_Neue({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-bebas',
})

export const metadata: Metadata = {
	title: 'WiiN daily — Stronger, Healthier, and Now Enhanced Supplements',
	description:
		'Doctor-designed wellness supplement pouches built with the WiiN Daily Complex™ — peptides, B-vitamins, and exosomes. Organic Clean Power. Novel Product, First to Market.',
	generator: 'v0.app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							if (history.scrollRestoration) {
								history.scrollRestoration = 'manual';
							}
							window.addEventListener('beforeunload', function() {
								window.scrollTo(0, 0);
							});
						`,
					}}
				/>
			</head>
			<body className={`font-mono ${GeistMono.variable} ${bebasNeue.variable} antialiased pt-14 md:pt-16`}>
				<NicotineAdvisoryBanner />
				<Suspense fallback={null}>{children}</Suspense>
				<AgeVerificationDialog />
				<ChatWidget />
				<Analytics />
			</body>
		</html>
	)
}
