export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 border-b-4 border-foreground">
      <div className="max-w-5xl w-full space-y-12">
        <div className="space-y-6">
          <h1 className="text-[12vw] md:text-[8rem] font-bold leading-none tracking-tight text-balance">WIIN</h1>
          <p className="text-2xl md:text-4xl font-bold border-4 border-foreground bg-primary text-primary-foreground inline-block px-6 py-3">
            POWER YOUR DAY
          </p>
        </div>

        <div className="space-y-6 max-w-2xl">
          <p className="text-lg md:text-xl leading-relaxed">WELLNESS ORAL NICOTINE POUCHES</p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            THE FIRST NICOTINE POUCH THAT'S ACTUALLY GOOD FOR YOUR GUMS. REPAIR. REFRESH. RECHARGE.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="border-4 border-foreground bg-primary text-primary-foreground px-8 py-4 text-lg font-bold hover:bg-foreground hover:text-background transition-colors">
            ORDER NOW
          </button>
          <button className="border-4 border-foreground bg-background text-foreground px-8 py-4 text-lg font-bold hover:bg-foreground hover:text-background transition-colors">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  )
}
