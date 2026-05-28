"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { animate } from "animejs"
import { IngredientCard } from "@/components/features/ingredient-card"
import type { Ingredient } from "@/lib/ingredients-data"

interface MethodSectionProps {
  productName: string
  ingredients: readonly Ingredient[]
}

const ANGLE_STEP = 28
const RADIUS = 240

export function MethodSection({ productName, ingredients }: MethodSectionProps) {
  const router = useRouter()
  const sectionRef = useRef<HTMLElement>(null)
  const dialRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const mantraRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  // Reverse the visual order so item 1 sits at the top of the stack and the
  // wheel rolls from top → bottom as you scroll forward through the list.
  const visualOrder = useMemo(() => ingredients.slice().reverse(), [ingredients])
  const lastVisualIdx = Math.max(0, visualOrder.length - 1)
  const progressRef = useRef(0)

  // Wheel-driven dial: the section stays in place; wheel events rotate the dial
  // and advance the active index until the dial reaches its end, after which
  // page scroll resumes normally.
  useEffect(() => {
    const section = sectionRef.current
    const dial = dialRef.current
    if (!section || !dial) return

    const maxIdx = Math.max(0, ingredients.length - 1)
    const SENSITIVITY = 0.004

    const apply = () => {
      animate(dial, {
        rotateX: progressRef.current * ANGLE_STEP,
        duration: 320,
        ease: "outQuint",
      })
      const nextIdx = Math.min(maxIdx, Math.max(0, Math.round(progressRef.current)))
      if (nextIdx !== activeIndexRef.current) {
        activeIndexRef.current = nextIdx
        setActiveIndex(nextIdx)
      }
    }

    const onWheel = (e: WheelEvent) => {
      if (maxIdx === 0) return
      const current = progressRef.current
      const delta = e.deltaY * SENSITIVITY
      const atStart = current <= 0 && delta < 0
      const atEnd = current >= maxIdx && delta > 0
      if (atStart || atEnd) return
      e.preventDefault()
      progressRef.current = Math.max(0, Math.min(maxIdx, current + delta))
      apply()
    }

    let touchY: number | null = null
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? null
    }
    const onTouchMove = (e: TouchEvent) => {
      if (touchY === null || maxIdx === 0) return
      const y = e.touches[0]?.clientY
      if (y === undefined) return
      const dy = touchY - y
      const current = progressRef.current
      const delta = dy * SENSITIVITY * 1.4
      const atStart = current <= 0 && delta < 0
      const atEnd = current >= maxIdx && delta > 0
      if (atStart || atEnd) return
      e.preventDefault()
      progressRef.current = Math.max(0, Math.min(maxIdx, current + delta))
      touchY = y
      apply()
    }

    section.addEventListener("wheel", onWheel, { passive: false })
    section.addEventListener("touchstart", onTouchStart, { passive: true })
    section.addEventListener("touchmove", onTouchMove, { passive: false })

    return () => {
      section.removeEventListener("wheel", onWheel)
      section.removeEventListener("touchstart", onTouchStart)
      section.removeEventListener("touchmove", onTouchMove)
    }
  }, [ingredients.length])

  // Per-item arrival/departure: opacity + scale falloff with distance from active.
  useEffect(() => {
    visualOrder.forEach((ing, vi) => {
      const el = itemRefs.current[vi]
      if (!el) return
      const sourceIdx = ingredients.indexOf(ing)
      const distance = Math.abs(sourceIdx - activeIndex)
      const opacity = distance === 0 ? 1 : distance === 1 ? 0.5 : 0.18
      const scale = distance === 0 ? 1 : 1 - Math.min(distance, 3) * 0.05
      animate(el, {
        opacity,
        scale,
        duration: 720,
        ease: "outQuint",
      })
    })
  }, [activeIndex, ingredients, visualOrder])

  // Fade in the active ingredient info on every change.
  useEffect(() => {
    if (!mantraRef.current) return
    animate(mantraRef.current, {
      opacity: [0, 1],
      translateY: [20, 0],
      filter: ["blur(6px)", "blur(0px)"],
      duration: 780,
      ease: "outQuart",
    })
  }, [activeIndex])

  const goToIndex = (index: number) => {
    const dial = dialRef.current
    if (!dial || ingredients.length <= 1) return
    const clamped = Math.max(0, Math.min(ingredients.length - 1, index))
    progressRef.current = clamped
    animate(dial, {
      rotateX: clamped * ANGLE_STEP,
      duration: 520,
      ease: "outQuint",
    })
    if (clamped !== activeIndexRef.current) {
      activeIndexRef.current = clamped
      setActiveIndex(clamped)
    }
  }

  const active = ingredients[activeIndex] ?? ingredients[0]

  return (
    <section
      ref={sectionRef}
      id="method"
      className="relative bg-white h-full overscroll-contain"
    >
      <div className="h-full flex flex-col px-4 pt-20 md:pt-28 pb-4 md:pb-10">
        <div className="relative max-w-6xl mx-auto w-full flex-1 flex flex-col min-h-0">
          <button
            type="button"
            onClick={() => router.back()}
            className="group inline-flex items-center gap-2 mb-6 md:mb-8 text-[11px] tracking-[0.3em] uppercase text-foreground/70 hover:text-foreground transition-colors self-start"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
          </button>

          <div className="mb-6 md:mb-10">
            <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/60 mb-2 md:mb-3">
              {productName} / The Method
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-[0.85]">
              THE
              <br />
              METHOD
            </h2>
            <p className="mt-4 md:mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-foreground/75 tracking-wide">
              This is a proprietary formulation using systemic amino acids to reduce inflammation, along with NAD+, L-Theanine, L-Tyrosine, and D-Ribose.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 md:gap-16 md:items-stretch flex-1 min-h-0">
            {/* LEFT — rotating dial of ingredients */}
            <div className="md:col-span-7 flex flex-col min-h-0">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-16 flex-wrap">
                <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/60 flex-shrink-0">
                  Formula
                </span>
                <span className="hidden md:block h-px flex-1 bg-foreground/30" />
                <div className="flex items-center gap-2 md:gap-2.5 flex-shrink-0" role="tablist" aria-label="Ingredients">
                  {ingredients.map((ing, i) => {
                    const isActive = i === activeIndex
                    return (
                      <button
                        key={ing.id}
                        type="button"
                        role="tab"
                        onClick={() => goToIndex(i)}
                        aria-current={isActive ? "true" : undefined}
                        aria-label={`Go to ${ing.title}`}
                        className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 ${
                          isActive
                            ? "bg-primary border-primary"
                            : "bg-transparent border-foreground/40 hover:border-foreground"
                        }`}
                      />
                    )
                  })}
                </div>
              </div>

              <div
                className="relative h-[300px] md:h-auto md:flex-1 md:min-h-[360px] select-none"
                style={{ perspective: "1200px" }}
                aria-label="Ingredient dial — scroll or click to navigate"
              >
                <div
                  ref={dialRef}
                  className="absolute inset-0"
                  style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                >
                  {visualOrder.map((ing, vi) => {
                    const sourceIdx = ingredients.indexOf(ing)
                    const isActive = sourceIdx === activeIndex
                    // Stack centers on the LAST visual item (= first ingredient).
                    const angle = (vi - lastVisualIdx) * ANGLE_STEP
                    return (
                      <div
                        key={ing.id}
                        ref={(el) => {
                          itemRefs.current[vi] = el
                        }}
                        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 px-2"
                        style={{
                          transform: `rotateX(${angle}deg) translateZ(${RADIUS}px)`,
                          transformStyle: "preserve-3d",
                          backfaceVisibility: "hidden",
                          willChange: "opacity, transform",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => goToIndex(sourceIdx)}
                          className="w-full text-left flex items-start gap-4 md:gap-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
                          aria-label={`Go to ${ing.title}`}
                          aria-current={isActive ? "true" : undefined}
                        >
                          <span
                            aria-hidden
                            className={`mt-2 h-2 w-2 flex-shrink-0 rounded-full transition-colors duration-500 ${
                              isActive ? "bg-primary" : "bg-foreground/20"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <IngredientCard
                              title={ing.title}
                              subtitle={ing.subtitle}
                              active={isActive}
                            />
                          </div>
                        </button>
                      </div>
                    )
                  })}
                </div>

              </div>

            </div>

            {/* RIGHT — active ingredient info replaces the static mantra */}
            <div className="md:col-span-5">
              <div className="flex items-baseline gap-4 mb-10 md:mb-16">
                <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/60">
                  Mantra
                </span>
                <span className="h-px flex-1 bg-foreground/30" />
              </div>

              <div
                key={active.id}
                ref={mantraRef}
                className="border-l-4 border-primary pl-5 md:pl-7 space-y-4 md:space-y-5"
              >
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[0.95] uppercase">
                  {active.title}
                </h3>
                <p className="text-[11px] tracking-[0.3em] uppercase text-primary">
                  {active.subtitle}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-foreground/80 tracking-wide">
                  {active.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
