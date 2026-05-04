'use client'

import { useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useIsMobile } from '@/hooks/use-mobile'

interface IngredientCardProps {
  title: string
  subtitle: string
  description: string
  id: string
}

export function IngredientCard({ title, subtitle, description, id: _id }: IngredientCardProps) {
  const isMobile = useIsMobile()
  const [isHovered, setIsHovered] = useState(false)
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  const calculatePosition = (mouseX: number, mouseY: number) => {
    if (!dialogRef.current) return { x: mouseX + 20, y: mouseY + 20 }

    const dialog = dialogRef.current
    const dialogWidth = dialog.offsetWidth || 320
    const dialogHeight = dialog.offsetHeight || 200
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const padding = 20
    const offset = 20

    let x = mouseX + offset
    let y = mouseY + offset

    if (x + dialogWidth + padding > viewportWidth) {
      x = mouseX - dialogWidth - offset
    }
    if (y + dialogHeight + padding > viewportHeight) {
      y = mouseY - dialogHeight - offset
    }
    if (x < padding) x = padding
    if (y < padding) y = padding

    return { x, y }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) {
      setDialogPosition(calculatePosition(e.clientX, e.clientY))
    }
  }

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!isMobile) {
      setIsHovered(true)
      setDialogPosition(calculatePosition(e.clientX, e.clientY))
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) setIsHovered(false)
  }

  const handleClick = () => {
    if (isMobile) setIsHovered(!isHovered)
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
        <div className="transition-colors duration-200">
          <h4 className="font-bold text-base md:text-lg mb-1 uppercase tracking-wide leading-tight">{title}</h4>
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide leading-tight">
            {subtitle}
          </p>
        </div>
      </div>

      {isHovered &&
        typeof document !== "undefined" &&
        createPortal(
          <>
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
