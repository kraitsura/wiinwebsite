import { PageHeader } from "@/components/layout/page-header"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader />
      <div className="px-8 pb-8 pt-32 max-w-7xl mx-auto">

        <div className="mt-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider">
            Returns
          </h1>
          <p className="text-lg text-muted-foreground uppercase tracking-wide max-w-3xl">
            Information about our return and refund policy.
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
