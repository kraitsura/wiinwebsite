"use client"

export function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 scroll-snap-align-start">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-wider">
          THE TEAM
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="border-2 border-foreground p-8">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">HAMMER</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">CO-FOUNDER</p>
          </div>
          <div className="border-2 border-foreground p-8">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">DOUG</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">CO-FOUNDER</p>
          </div>
          <div className="border-2 border-foreground p-8">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">CATHY</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">CO-FOUNDER</p>
          </div>
        </div>
      </div>
    </section>
  )
}
