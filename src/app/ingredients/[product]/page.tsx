import { notFound } from "next/navigation"
import { PageHeader } from "@/components/layout/page-header"
import { MethodSection } from "@/components/sections/method-section"
import { PRODUCTS, PRODUCT_SLUGS, type Product } from "@/lib/ingredients-data"

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((product) => ({ product }))
}

export default async function ProductIngredientsPage({
  params,
}: {
  params: Promise<{ product: string }>
}) {
  const { product } = await params

  if (!PRODUCT_SLUGS.includes(product as Product["slug"])) {
    notFound()
  }

  const data = PRODUCTS[product as Product["slug"]]

  return (
    <div className="min-h-screen scroll-smooth">
      <PageHeader />
      <MethodSection
        productName={data.name}
        formulaName={data.formulaName}
        ingredients={data.ingredients}
      />
    </div>
  )
}
