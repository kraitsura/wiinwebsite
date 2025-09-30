import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { Method } from "@/components/method"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Method />
      <Team />
      <Footer />
    </main>
  )
}
