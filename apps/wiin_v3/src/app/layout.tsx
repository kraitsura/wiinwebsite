import { Analytics } from '@vercel/analytics/next'
import { GeistMono } from 'geist/font/mono'
import { Bebas_Neue } from 'next/font/google'
import type { Metadata } from 'next'
import type React from 'react'
import { Suspense } from 'react'
import './globals.css'

const bebasNeue = Bebas_Neue({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-bebas',
})

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
			<body className={`font-mono ${GeistMono.variable} ${bebasNeue.variable} antialiased`}>
				<Suspense fallback={null}>{children}</Suspense>
				<Analytics />
			</body>
		</html>
	)
}
