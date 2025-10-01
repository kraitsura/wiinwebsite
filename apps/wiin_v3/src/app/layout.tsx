import { Analytics } from '@vercel/analytics/next'
import { GeistMono } from 'geist/font/mono'
import type { Metadata } from 'next'
import type React from 'react'
import { Suspense } from 'react'
import './globals.css'

export const metadata: Metadata = {
	title: 'WIIN - Power Your Day',
	description:
		'Wellness oral nicotine pouches that repair, refresh, and recharge. Healthy nicotine pouches that are good for your gums.',
	generator: 'v0.app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`font-mono ${GeistMono.variable}`}>
				<Suspense fallback={null}>{children}</Suspense>
				<Analytics />
			</body>
		</html>
	)
}
