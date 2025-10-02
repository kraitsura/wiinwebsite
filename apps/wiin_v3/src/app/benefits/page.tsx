import { BackButton } from "@/components/back-button"

export default function BenefitsPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <BackButton />

        <div className="mt-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider">
            Benefits
          </h1>
          <p className="text-lg text-muted-foreground uppercase tracking-wide max-w-3xl">
            Experience the advantages of WIIN's innovative approach to nicotine pouches.
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
