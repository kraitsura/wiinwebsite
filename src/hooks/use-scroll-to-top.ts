'use client'

import { useEffect } from 'react'

/**
 * Hook to scroll to the top of the page on component mount
 * Useful for ensuring page starts at the top on initial load
 */
export function useScrollToTop() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
}
