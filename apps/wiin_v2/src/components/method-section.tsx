"use client"

export function MethodSection() {
  return (
    <section id="method" className="py-24 px-4 bg-muted min-h-screen scroll-snap-align-start scroll-snap-stop-always">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-wider">
          THE METHOD
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">ADVANCED FORMULATION</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">NAD+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">CELLULAR REGENERATION SUPPORT</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">PEPTIDES</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">TISSUE REPAIR AND HEALING</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">EXOSOMES</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  ADVANCED CELLULAR COMMUNICATION
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-foreground p-8 bg-background">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-center">The Step-Down Method</h3>
            <p className="text-lg text-center uppercase tracking-wide leading-relaxed">
              THE FIRST AND ONLY NICOTINE POUCHES DESIGNED TO IMPROVE GUM HEALTH WHILE DELIVERING SATISFACTION
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
