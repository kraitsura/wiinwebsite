"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader />
      <div className="px-8 pb-8 pt-24 max-w-7xl mx-auto h-screen flex flex-col justify-end">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 uppercase tracking-wider">
            Contact
          </h1>
          <p className="text-sm text-muted-foreground uppercase tracking-wide max-w-3xl mb-8">
            Get in touch with the WiiN team.
          </p>

          <form className="max-w-2xl space-y-6">
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <input
                id="name"
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
                rows={3}
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none transition-colors py-2 text-base resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="uppercase tracking-widest px-10 py-5 text-sm mt-8"
            >
              Send
            </Button>
          </form>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">© 2025 WiiN. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  )
}
