import { PageHeader } from "@/components/layout/page-header"

export default function ShippingPage() {
  return (
    <div className="min-h-screen">
      <PageHeader />
      <div className="px-8 pb-8 pt-32 max-w-7xl mx-auto">

        <div className="mt-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider">
            Shipping
          </h1>
          <p className="text-lg text-muted-foreground uppercase tracking-wide max-w-3xl">
            Learn about our shipping policies and delivery options.
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
