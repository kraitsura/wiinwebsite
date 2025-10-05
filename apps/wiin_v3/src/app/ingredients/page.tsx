'use client'

import { PageHeader } from "@/components/layout/page-header"
import { ReadyToSwitchCTA } from "@/components/sections/ready-to-wiin-cta"

export default function IngredientsPage() {
  return (
    <div className="min-h-screen scroll-smooth">
      <PageHeader />
      <div className="px-8 pb-8 pt-32 max-w-7xl mx-auto">

        <div className="mt-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider">
            Ingredients
          </h1>
          <p className="text-lg text-muted-foreground uppercase tracking-wide max-w-3xl">
            Discover the premium, carefully selected ingredients that make WiiN pouches unique.
          </p>

          <div className="mt-16 space-y-16">
            {/* NAD+ Section */}
            <section id="nad" className="scroll-mt-24">
              <div className="border-l-4 border-primary pl-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
                  NAD+
                </h2>
                <p className="text-xl text-muted-foreground uppercase tracking-wide mb-6">
                  Cellular Regeneration Support
                </p>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Supports cellular energy production and metabolic function in oral tissues. Promotes healthy gum tissue regeneration and helps maintain optimal cellular health during nicotine delivery.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    NAD+ (Nicotinamide Adenine Dinucleotide) is a crucial coenzyme found in every cell of your body. It plays a vital role in cellular energy production and maintaining healthy cellular function. In oral tissues, NAD+ supports the natural regeneration processes that keep your gums healthy.
                  </p>
                  <p className="text-muted-foreground">
                    By incorporating NAD+ into our formulation, WiiN pouches help support your oral tissue health while delivering the nicotine experience you expect.
                  </p>
                </div>
              </div>
            </section>

            {/* Peptides Section */}
            <section id="peptides" className="scroll-mt-24">
              <div className="border-l-4 border-primary pl-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
                  Peptides
                </h2>
                <p className="text-xl text-muted-foreground uppercase tracking-wide mb-6">
                  Tissue Repair and Healing
                </p>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Specialized protein fragments that support tissue repair and collagen production in gum tissue. Aids in maintaining oral tissue integrity and promotes natural healing processes while using nicotine pouches.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Peptides are short chains of amino acids that act as signaling molecules in your body. Our carefully selected peptides target oral tissue health, supporting the natural repair mechanisms that maintain healthy gums.
                  </p>
                  <p className="text-muted-foreground">
                    These bioactive peptides work synergistically with your body's natural processes to promote collagen production and tissue integrity, helping to counteract potential irritation from nicotine pouch use.
                  </p>
                </div>
              </div>
            </section>

            {/* Exosomes Section */}
            <section id="exosomes" className="scroll-mt-24">
              <div className="border-l-4 border-primary pl-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
                  Exosomes
                </h2>
                <p className="text-xl text-muted-foreground uppercase tracking-wide mb-6">
                  Advanced Cellular Communication
                </p>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Advanced cellular messengers that facilitate communication between cells in oral tissues. Supports healthy inflammatory response and tissue regeneration, promoting overall gum health during nicotine pouch use.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Exosomes are microscopic vesicles that cells use to communicate with each other. They carry important biological information and growth factors that coordinate tissue health and regeneration at the cellular level.
                  </p>
                  <p className="text-muted-foreground">
                    In WiiN pouches, exosomes help facilitate the natural communication networks in your oral tissues, supporting a balanced inflammatory response and promoting the regenerative processes that keep your gums healthy and resilient.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <ReadyToSwitchCTA />
    </div>
  )
}
