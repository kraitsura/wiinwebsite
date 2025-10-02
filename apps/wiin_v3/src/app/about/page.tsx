import { BackButton } from "@/components/back-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <BackButton />

        {/* Hero Statement */}
        <div className="mt-12 mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tight leading-none">
            About WIIN
          </h1>
          <div className="border-4 border-foreground bg-primary text-primary-foreground p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl md:text-3xl font-bold leading-relaxed">
              WE'RE NOT JUST ANOTHER NICOTINE POUCH. WE'RE THE FIRST ONE THAT ACTUALLY GIVES A DAMN ABOUT YOUR ORAL HEALTH.
            </p>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">The Problem</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-4 border-foreground p-6 bg-background">
              <h3 className="text-xl font-bold mb-4 uppercase">Traditional Pouches</h3>
              <ul className="space-y-3 text-sm md:text-base font-mono">
                <li className="flex items-start">
                  <span className="mr-3 text-destructive font-bold">×</span>
                  <span>Cause gum recession</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-destructive font-bold">×</span>
                  <span>Damage oral tissue</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-destructive font-bold">×</span>
                  <span>Ignore long-term health</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-destructive font-bold">×</span>
                  <span>Use cheap fillers</span>
                </li>
              </ul>
            </div>
            <div className="border-4 border-foreground p-6 bg-foreground text-background">
              <h3 className="text-xl font-bold mb-4 uppercase">WIIN Pouches</h3>
              <ul className="space-y-3 text-sm md:text-base font-mono">
                <li className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <span>Actively repair gums</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <span>Support oral wellness</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <span>Science-backed ingredients</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">✓</span>
                  <span>Premium quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">Our Story</h2>
          <div className="border-4 border-foreground p-8 md:p-12 bg-card">
            <div className="space-y-6 text-base md:text-lg font-mono leading-relaxed">
              <p>
                WIIN was born from a simple realization: the nicotine pouch industry had a gaping hole.
                Everyone was racing to make stronger pouches, but no one was asking the obvious question—
                what's happening to people's mouths?
              </p>
              <p>
                We saw users dealing with gum recession, tissue damage, and oral health issues.
                The very product designed to be a cleaner alternative was causing its own set of problems.
              </p>
              <p>
                So we did something radical: we created a nicotine pouch that actually supports oral health.
                Not just "less harmful," but actively beneficial. We loaded it with ingredients that repair,
                refresh, and protect your gums while delivering the clean energy you need.
              </p>
              <p className="font-bold">
                Because why should you have to choose between nicotine and oral health?
              </p>
            </div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-4 border-foreground p-6 bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
              <div className="text-4xl font-bold mb-4 group-hover:scale-110 transition-transform">01</div>
              <h3 className="text-xl font-bold mb-3 uppercase">Oral Health First</h3>
              <p className="text-sm font-mono">
                Every ingredient is chosen to support your gums and oral tissue, not just deliver nicotine.
              </p>
            </div>
            <div className="border-4 border-foreground p-6 bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
              <div className="text-4xl font-bold mb-4 group-hover:scale-110 transition-transform">02</div>
              <h3 className="text-xl font-bold mb-3 uppercase">Science-Backed</h3>
              <p className="text-sm font-mono">
                We use clinically proven ingredients like CoQ10 and hyaluronic acid to actively repair damage.
              </p>
            </div>
            <div className="border-4 border-foreground p-6 bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
              <div className="text-4xl font-bold mb-4 group-hover:scale-110 transition-transform">03</div>
              <h3 className="text-xl font-bold mb-3 uppercase">No Compromise</h3>
              <p className="text-sm font-mono">
                Premium nicotine satisfaction without sacrificing your oral health. You get both.
              </p>
            </div>
          </div>
        </div>

        {/* Our Principles */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">Our Principles</h2>
          <div className="space-y-4">
            {[
              {
                title: "TRANSPARENCY",
                desc: "We tell you exactly what's in our pouches and why. No secrets, no proprietary blends hiding questionable ingredients."
              },
              {
                title: "QUALITY",
                desc: "We source the best ingredients and refuse to cut corners. Your health deserves premium materials."
              },
              {
                title: "INNOVATION",
                desc: "We're constantly researching and improving. The first oral wellness pouch is just the beginning."
              },
              {
                title: "RESPONSIBILITY",
                desc: "We believe companies should care about long-term user health, not just short-term profits."
              }
            ].map((principle, index) => (
              <div key={index} className="border-4 border-foreground p-6 bg-card hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{principle.title}</h3>
                <p className="text-sm md:text-base font-mono text-muted-foreground">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mb-12">
          <div className="border-4 border-foreground bg-foreground text-background p-8 md:p-12 shadow-[12px_12px_0px_0px_hsl(var(--primary))]">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">Ready to Make the Switch?</h2>
            <p className="text-lg md:text-xl mb-6 font-mono">
              Join the movement toward healthier nicotine pouches.
            </p>
            <button className="border-4 border-background bg-primary text-primary-foreground px-8 py-4 text-lg font-bold hover:bg-background hover:text-foreground transition-all duration-300">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
