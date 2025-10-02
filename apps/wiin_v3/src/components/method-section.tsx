"use client"

import { IngredientCard } from "./ingredient-card"

export function MethodSection() {
  return (
    <section id="method" className="py-12 md:py-24 px-4 bg-muted min-h-screen scroll-snap-align-start scroll-snap-stop-always">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-16 text-center tracking-wider">
          THE METHOD
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">ADVANCED FORMULATION</h3>
            <div className="space-y-6">
              <IngredientCard
                title="NAD+"
                subtitle="CELLULAR REGENERATION SUPPORT"
                description="Supports cellular energy production and metabolic function in oral tissues. Promotes healthy gum tissue regeneration and helps maintain optimal cellular health during nicotine delivery."
              />
              <IngredientCard
                title="PEPTIDES"
                subtitle="TISSUE REPAIR AND HEALING"
                description="Specialized protein fragments that support tissue repair and collagen production in gum tissue. Aids in maintaining oral tissue integrity and promotes natural healing processes while using nicotine pouches."
              />
              <IngredientCard
                title="EXOSOMES"
                subtitle="ADVANCED CELLULAR COMMUNICATION"
                description="Advanced cellular messengers that facilitate communication between cells in oral tissues. Supports healthy inflammatory response and tissue regeneration, promoting overall gum health during nicotine pouch use."
              />
            </div>
          </div>
          <div className="relative border-4 border-foreground p-6 md:p-12 bg-background group hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            {/* Corner accent mark */}
            <div className="absolute top-4 left-4 w-3 h-3 border-2 border-primary bg-primary" />

            <div className="space-y-8">
              <h3 className="text-2xl font-bold uppercase tracking-widest text-center">
                The Step-Down Method
              </h3>

              {/* Subtle divider */}
              <div className="w-16 h-[2px] bg-foreground mx-auto" />

              <p className="text-base text-center uppercase tracking-wider leading-loose max-w-md mx-auto">
                THE FIRST AND ONLY NICOTINE POUCHES DESIGNED TO IMPROVE GUM HEALTH WHILE DELIVERING SATISFACTION
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
