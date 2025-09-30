export function Mission() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 border-b-4 border-foreground">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="border-4 border-foreground p-8 bg-card">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">REPAIR</h2>
            <p className="text-lg leading-relaxed">REVERSE GUM DAMAGE CAUSED BY TRADITIONAL NICOTINE POUCHES</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-4 border-foreground p-8 bg-card">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">REFRESH</h2>
            <p className="text-lg leading-relaxed">CLEAN ENERGY WITHOUT THE GUILT OR GUM RECESSION</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="border-4 border-foreground p-8 bg-primary text-primary-foreground">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">RECHARGE</h2>
            <p className="text-lg leading-relaxed">POWER THROUGH YOUR DAY WITH WELLNESS-FOCUSED NICOTINE</p>
          </div>
        </div>
      </div>
    </section>
  )
}
