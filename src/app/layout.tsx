import { Analytics } from '@vercel/analytics/next'
import { GeistMono } from 'geist/font/mono'
import { Bebas_Neue } from 'next/font/google'
import type { Metadata } from 'next'
import type React from 'react'
import { Suspense } from 'react'
import { AgeVerificationDialog } from '@/components/common/age-verification-dialog'
import './globals.css'

const bebasNeue = Bebas_Neue({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-bebas',
})

export const metadata: Metadata = {
	title: 'WiiN daily — Clean Energy. Clear Focus. Better Health.',
	description:
		'Doctor-designed wellness pouches built with the WiiN Daily Complex™ — peptides, B-vitamins, and exosomes. Clean. Pure. Never been done.',
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
			<body className={`font-mono ${GeistMono.variable} ${bebasNeue.variable} antialiased`}>
				<Suspense fallback={null}>{children}</Suspense>
				<AgeVerificationDialog />
				<Analytics />
			</body>
		</html>
	)
}
