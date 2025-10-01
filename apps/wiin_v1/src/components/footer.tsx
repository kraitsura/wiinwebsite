export function Footer() {
	return (
		<footer className="px-4 py-12 bg-secondary text-secondary-foreground">
			<div className="max-w-5xl mx-auto space-y-8">
				<div className="grid md:grid-cols-3 gap-8">
					<div className="space-y-4">
						<h3 className="text-2xl font-bold">WIIN</h3>
						<p className="text-sm">WELLNESS ORAL NICOTINE POUCHES</p>
					</div>

					<div className="space-y-4">
						<h4 className="text-lg font-bold">PRODUCT</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:underline">
									SHOP
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									INGREDIENTS
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									SCIENCE
								</a>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h4 className="text-lg font-bold">COMPANY</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#" className="hover:underline">
									ABOUT
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									TEAM
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									CONTACT
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t-4 border-foreground pt-8 text-center text-sm">
					<p>© 2025 WIIN. ALL RIGHTS RESERVED.</p>
				</div>
			</div>
		</footer>
	)
}
