"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* WIIN Brand Section - Full Width on Mobile, First Column on Desktop */}
        <div className="mb-8 md:mb-0 md:hidden">
          <h3 className="text-xl font-bold mb-4 tracking-wider">WIIN</h3>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">HEALTHY NICOTINE POUCHES</p>
        </div>

        {/* Grid - 3 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {/* WIIN - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block">
            <h3 className="text-xl font-bold mb-4 tracking-wider">WIIN</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">HEALTHY NICOTINE POUCHES</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wide">PRODUCT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground uppercase tracking-wide">
              <li>
                <Link href="/ingredients" className="hover:text-foreground transition-colors">
                  INGREDIENTS
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="hover:text-foreground transition-colors">
                  BENEFITS
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-foreground transition-colors">
                  RESEARCH
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wide">COMPANY</h4>
            <ul className="space-y-2 text-sm text-muted-foreground uppercase tracking-wide">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-foreground transition-colors">
                  TEAM
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wide">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground uppercase tracking-wide">
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-foreground transition-colors">
                  SHIPPING
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-foreground transition-colors">
                  RETURNS
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dotted-border-top mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">© 2025 WIIN. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}
