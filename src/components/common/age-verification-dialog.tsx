'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const STORAGE_KEY = 'wiin_age_verified'

export function AgeVerificationDialog() {
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const pathname = usePathname()
	const isRestrictedPage = pathname === '/age-restricted'

	useEffect(() => {
		if (typeof window === 'undefined') return
		if (isRestrictedPage) return
		const verified = window.localStorage.getItem(STORAGE_KEY)
		if (verified !== 'true') {
			setOpen(true)
		}
	}, [isRestrictedPage])

	if (isRestrictedPage) return null

	const handleConfirm = () => {
		window.localStorage.setItem(STORAGE_KEY, 'true')
		setOpen(false)
	}

	const handleDeny = () => {
		router.replace('/age-restricted')
	}

	return (
		<Dialog open={open}>
			<DialogContent
				showCloseButton={false}
				onEscapeKeyDown={(e) => e.preventDefault()}
				onPointerDownOutside={(e) => e.preventDefault()}
				onInteractOutside={(e) => e.preventDefault()}
				className="border-foreground/10 bg-background max-w-md gap-0 p-0 sm:max-w-md"
			>
				<div className="flex flex-col items-center px-8 pt-10 pb-8 text-center">
					<div className="font-heading text-foreground mb-2 text-7xl leading-none tracking-tight italic">
						21+
					</div>
					<DialogTitle className="font-heading text-foreground/80 mb-3 text-xs font-normal tracking-[0.3em] uppercase">
						Age Verification
					</DialogTitle>
					<DialogDescription className="text-muted-foreground mb-8 max-w-xs text-[11px] leading-relaxed tracking-wide uppercase">
						You must be 21 or older to enter. WiiN products contain nicotine.
					</DialogDescription>

					<div className="flex w-full flex-col gap-2">
						<Button
							onClick={handleConfirm}
							className="bg-foreground text-background hover:bg-foreground/90 h-12 w-full text-xs font-medium tracking-[0.25em] uppercase"
						>
							I am 21 or older
						</Button>
						<Button
							onClick={handleDeny}
							variant="ghost"
							className="text-muted-foreground hover:text-foreground hover:bg-transparent h-10 w-full text-[11px] font-normal tracking-[0.2em] uppercase"
						>
							I am under 21
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
