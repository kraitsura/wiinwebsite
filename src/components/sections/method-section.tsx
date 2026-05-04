"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { IngredientCard } from "@/components/features/ingredient-card"
import type { Ingredient } from "@/lib/ingredients-data"

interface MethodSectionProps {
  productName: string
  formulaName: string
  ingredients: readonly Ingredient[]
}

const MANTRA = ["CLEAN.", "PURE.", "NEVER", "BEEN", "DONE."]

export function MethodSection({ productName, formulaName, ingredients }: MethodSectionProps) {
  const router = useRouter()

  return (
    <section
      id="method"
      className="relative min-h-screen px-4 pt-24 md:pt-28 pb-8 md:pb-12 bg-white"
    >
      <div className="relative max-w-6xl mx-auto">
        <button
          type="button"
          onClick={() => router.back()}
          className="group inline-flex items-center gap-2 mb-6 md:mb-8 text-[11px] tracking-[0.3em] uppercase text-foreground/70 hover:text-foreground transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back
        </button>

        {/* Header */}
        <div className="mb-6 md:mb-10">
          <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/60 mb-2 md:mb-3">
            {productName} / The Method
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-[0.85]">
            THE
            <br />
            METHOD
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-start">
          {/* LEFT — Active Ingredients */}
          <div className="md:col-span-7">
            <div className="flex items-baseline gap-3 md:gap-4 mb-5 md:mb-7">
              <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/60 flex-shrink-0">
                01 / Formula
              </span>
              <span className="h-px flex-1 bg-foreground/30" />
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-wide flex-shrink-0">
                {formulaName}
              </h3>
            </div>

            <div className="space-y-3 md:space-y-4">
              {ingredients.map((ing, i) => (
                <div key={ing.id} className="flex items-start gap-4 md:gap-6">
                  <span className="pt-0.5 text-2xl md:text-3xl font-bold tracking-wider text-foreground/25 tabular-nums leading-none flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <IngredientCard
                      id={ing.id}
                      title={ing.title}
                      subtitle={ing.subtitle}
                      description={ing.description}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Mantra */}
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-4 mb-5 md:mb-7">
              <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/60">
                02 / Mantra
              </span>
              <span className="h-px flex-1 bg-foreground/30" />
            </div>

            <div className="border-l-4 border-primary pl-5 md:pl-7 flex flex-col leading-[0.9] font-bold tracking-tight">
              {MANTRA.map((line, i) => (
                <span
                  key={line}
                  className={`text-4xl md:text-5xl lg:text-6xl ${
                    i === 2 ? "text-primary" : ""
                  }`}
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
