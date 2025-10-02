"use client"

import { useState, useRef } from "react"
import { createPortal } from "react-dom"
import { useIsMobile } from "@/components/ui/use-mobile"

interface IngredientCardProps {
  title: string
  subtitle: string
  description: string
}

export function IngredientCard({ title, subtitle, description }: IngredientCardProps) {
  const isMobile = useIsMobile()
  const [isHovered, setIsHovered] = useState(false)
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  const calculatePosition = (mouseX: number, mouseY: number) => {
    if (!dialogRef.current) return { x: mouseX + 20, y: mouseY + 20 }

    const dialog = dialogRef.current
    const dialogWidth = dialog.offsetWidth || 320 // fallback to w-80 width
    const dialogHeight = dialog.offsetHeight || 200 // estimated height
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const padding = 20
    const offset = 20

    let x = mouseX + offset
    let y = mouseY + offset

    // Check if dialog would overflow right edge
    if (x + dialogWidth + padding > viewportWidth) {
      x = mouseX - dialogWidth - offset
    }

    // Check if dialog would overflow bottom edge
    if (y + dialogHeight + padding > viewportHeight) {
      y = mouseY - dialogHeight - offset
    }

    // Ensure dialog doesn't go off left edge
    if (x < padding) {
      x = padding
    }

    // Ensure dialog doesn't go off top edge
    if (y < padding) {
      y = padding
    }

    return { x, y }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) {
      const position = calculatePosition(e.clientX, e.clientY)
      setDialogPosition(position)
    }
  }

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!isMobile) {
      setIsHovered(true)
      const position = calculatePosition(e.clientX, e.clientY)
      setDialogPosition(position)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false)
    }
  }

  const handleClick = () => {
    if (isMobile) {
      setIsHovered(!isHovered)
    }
  }

  return (
    <>
      <div
        ref={cardRef}
        className="border-l-4 border-primary pl-6 cursor-pointer transition-colors duration-200 group relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleClick()
          }
        }}
        aria-label={`${title}: ${subtitle}`}
      >
        <div className="transition-colors duration-200 group-hover:text-white">
          <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">{title}</h4>
          <p className="text-sm text-muted-foreground uppercase tracking-wide group-hover:text-white/80">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Dialog */}
      {isHovered &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            {/* Mobile dialog - centered overlay */}
            {isMobile ? (
              <>
                <div
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-in fade-in duration-200"
                  onClick={() => setIsHovered(false)}
                />
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100vw-2rem)] max-w-md animate-in fade-in zoom-in-95 duration-200">
                  <div className="bg-primary text-primary-foreground p-6 shadow-2xl border border-primary-foreground/20">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-lg uppercase tracking-wide">{title}</h4>
                      <button
                        onClick={() => setIsHovered(false)}
                        className="text-primary-foreground/60 hover:text-primary-foreground transition-colors ml-4"
                        aria-label="Close"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm leading-relaxed opacity-95">{description}</p>
                  </div>
                </div>
              </>
            ) : (
              /* Desktop dialog - follows cursor with smart positioning */
              <div
                ref={dialogRef}
                className="fixed z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150"
                style={{
                  left: `${dialogPosition.x}px`,
                  top: `${dialogPosition.y}px`,
                  transition: "left 0.1s ease-out, top 0.1s ease-out",
                }}
              >
                <div className="bg-primary text-primary-foreground p-5 shadow-2xl border border-primary-foreground/20 w-80 backdrop-blur-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-primary-foreground/20">
                      <div className="w-1 h-4 bg-primary-foreground/80" />
                      <h4 className="font-bold text-base uppercase tracking-wider">{title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed opacity-95 tracking-wide">{description}</p>
                  </div>
                </div>
              </div>
            )}
          </>,
          document.body
        )}
    </>
  )
}
