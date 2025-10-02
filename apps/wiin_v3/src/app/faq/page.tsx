import { BackButton } from "@/components/back-button"

export default function FAQPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <BackButton />

        <div className="mt-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider">
            FAQ
          </h1>
          <p className="text-lg text-muted-foreground uppercase tracking-wide max-w-3xl">
            Frequently asked questions about WIIN products.
          </p>

          <div className="mt-12 space-y-6">
            <p className="text-muted-foreground">
              Content coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
