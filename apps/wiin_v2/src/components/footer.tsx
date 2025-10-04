"use client"

export function Footer() {
  return (
    <footer className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wider">WIIN</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">HEALTHY NICOTINE POUCHES</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wide">PRODUCT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground uppercase tracking-wide">
              <li>INGREDIENTS</li>
              <li>BENEFITS</li>
              <li>RESEARCH</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wide">COMPANY</h4>
            <ul className="space-y-2 text-sm text-muted-foreground uppercase tracking-wide">
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wide">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground uppercase tracking-wide">
              <li>FAQ</li>
              <li>SHIPPING</li>
              <li>RETURNS</li>
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
