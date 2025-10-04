export function Team() {
	const team = [
		{ name: 'HAMMER', role: 'CO-FOUNDER' },
		{ name: 'DOUG', role: 'CO-FOUNDER' },
		{ name: 'CATHY', role: 'CO-FOUNDER' },
	]

	return (
		<section className="min-h-screen flex items-center justify-center px-4 py-20">
			<div className="max-w-5xl w-full space-y-12">
				<h2 className="text-5xl md:text-7xl font-bold">THE TEAM</h2>

				<div className="grid md:grid-cols-3 gap-6">
					{team.map((member) => (
						<div
							key={member.name}
							className="border-4 border-foreground p-8 bg-card aspect-square flex flex-col items-center justify-center text-center hover:bg-primary hover:text-primary-foreground transition-colors"
						>
							<h3 className="text-4xl font-bold mb-4">{member.name}</h3>
							<p className="text-lg">{member.role}</p>
						</div>
					))}
				</div>

			</div>
		</section>
	)
}
