"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"

const RECIPIENT_EMAIL = "douglas@windaily.com"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "")
    const email = String(data.get("email") ?? "")
    const message = String(data.get("message") ?? "")

    // No backend yet — hand the message to the visitor's mail client, addressed to the WiiN team.
    const subject = encodeURIComponent(`WiiN inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
    window.open(`mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`, "_blank")

    form.reset()
    setSubmitted(true)
  }

  return (
    <div className="h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] overflow-hidden flex flex-col">
      <PageHeader />
      <div className="flex-1 flex items-center justify-center px-6 sm:px-8 pt-24 md:pt-28 pb-6">
        <div className="w-full max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 uppercase tracking-wider">
            Contact
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide mb-6 sm:mb-8">
            Get in touch with the WiiN team.
          </p>

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none transition-colors py-2 text-base"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none transition-colors py-2 text-base"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none transition-colors py-2 text-base resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="uppercase tracking-widest px-8 py-4 text-sm mt-2"
            >
              Send
            </Button>
          </form>
        </div>
      </div>

      {/* Success pop-up */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSubmitted(false)}
          >
            <motion.div
              role="alertdialog"
              aria-label="Message sent"
              className="relative w-full max-w-sm border-3 border-foreground bg-background p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              onClick={(e) => e.stopPropagation()}
            >
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h2 className="mb-2 text-2xl font-bold uppercase tracking-wider">
                Message Sent
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Thanks for reaching out — the WiiN team will get back to you shortly.
              </p>
              <Button
                type="button"
                onClick={() => setSubmitted(false)}
                className="uppercase tracking-widest px-8 py-3 text-sm"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
