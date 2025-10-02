"use client"

import { useRouter } from "next/navigation"

export function TeamSection() {
  const router = useRouter()

  const handleMemberClick = (memberId: string) => {
    router.push(`/team#${memberId}`)
  }

  return (
    <section id="team" className="py-12 md:py-24 px-4 scroll-snap-align-start">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 tracking-wider">
          THE TEAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
          {/* Hammer - Picture on Left (Mobile) */}
          <div
            onClick={() => handleMemberClick("hammer")}
            className="border-2 border-foreground p-4 md:p-8 flex flex-row md:flex-col items-center gap-4 md:gap-0 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-primary hover:text-primary-foreground cursor-pointer"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0 md:mb-3">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-left md:text-center">
              <h3 className="text-lg md:text-xl font-extrabold mb-0.5 uppercase tracking-wider">HAMMER</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">CO-FOUNDER</p>
            </div>
          </div>

          {/* Doug - Picture on Right (Mobile) */}
          <div
            onClick={() => handleMemberClick("doug")}
            className="border-2 border-foreground p-4 md:p-8 flex flex-row-reverse md:flex-col items-center gap-4 md:gap-0 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-primary hover:text-primary-foreground cursor-pointer"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0 md:mb-3">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-right md:text-center flex-grow">
              <h3 className="text-lg md:text-xl font-extrabold mb-0.5 uppercase tracking-wider">DOUG</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">CO-FOUNDER</p>
            </div>
          </div>

          {/* Cathy - Picture on Left (Mobile) */}
          <div
            onClick={() => handleMemberClick("cathy")}
            className="border-2 border-foreground p-4 md:p-8 flex flex-row md:flex-col items-center gap-4 md:gap-0 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-primary hover:text-primary-foreground cursor-pointer"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0 md:mb-3">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-left md:text-center">
              <h3 className="text-lg md:text-xl font-extrabold mb-0.5 uppercase tracking-wider">CATHY</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">CO-FOUNDER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
