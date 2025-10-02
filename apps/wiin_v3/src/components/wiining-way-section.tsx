"use client"

interface WiiningWaySectionProps {
  titleRef: React.RefObject<HTMLHeadingElement>
  cardsRef: React.RefObject<HTMLDivElement>
}

export function WiiningWaySection({ titleRef, cardsRef }: WiiningWaySectionProps) {
  return (
    <section id="mission" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-16 tracking-wider">
          THE WIINING WAY
        </h2>
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-12">
          <div className="border-2 border-foreground p-8">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Benefits</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide leading-relaxed">
              REVERSE GUM DAMAGE AND AGGRESSIVE GUM RECESSION CAUSED BY TRADITIONAL NICOTINE POUCHES
            </p>
          </div>
          <div className="border-2 border-foreground p-8">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Ingredients</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide leading-relaxed">
              FORMULATED WITH NAD+, PEPTIDES, AND EXOSOMES FOR OPTIMAL ORAL HEALTH
            </p>
          </div>
          <div className="border-2 border-foreground p-8">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">How It Works</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wide leading-relaxed">
              HEALTHY NICOTINE POUCHES THAT ARE ACTUALLY GOOD FOR YOUR GUMS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
