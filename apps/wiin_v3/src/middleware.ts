import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Set this to false to disable maintenance mode
const MAINTENANCE_MODE = true

export function middleware(request: NextRequest) {
	// If maintenance mode is disabled, allow all requests
	if (!MAINTENANCE_MODE) {
		return NextResponse.next()
	}

	const { pathname } = request.nextUrl

	// Allow access to the maintenance page itself
	if (pathname === '/maintenance') {
		return NextResponse.next()
	}

	// Allow access to static files and Next.js internals
	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		pathname.startsWith('/Fonts') ||
		pathname.includes('.') // Static files like images, favicon, etc.
	) {
		return NextResponse.next()
	}

	// Redirect all other routes to maintenance page
	return NextResponse.redirect(new URL('/maintenance', request.url))
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!_next/static|_next/image|favicon.ico).*)',
	],
}
