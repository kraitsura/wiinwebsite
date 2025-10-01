import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Method } from '@/components/method'
import { Mission } from '@/components/mission'
import { Team } from '@/components/team'

export default function Page() {
	return (
		<main className="min-h-screen">
			<Header />
			<Hero />
			<Mission />
			<Method />
			<Team />
			<Footer />
		</main>
	)
}
