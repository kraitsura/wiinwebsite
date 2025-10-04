"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium uppercase tracking-wide transition-all hover:gap-3 hover:bg-primary hover:text-primary-foreground"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </Link>
  )
}
