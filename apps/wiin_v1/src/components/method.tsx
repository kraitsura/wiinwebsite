export function Method() {
  const ingredients = [
    {
      name: "NAD+",
      description: "CELLULAR ENERGY & REPAIR",
    },
    {
      name: "PEPTIDES",
      description: "TISSUE REGENERATION",
    },
    {
      name: "EXOSOMES",
      description: "CELLULAR COMMUNICATION",
    },
    {
      name: "DENTAL ACTIVES",
      description: "GUM HEALTH SUPPORT",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 border-b-4 border-foreground">
      <div className="max-w-5xl w-full space-y-12">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold">THE METHOD</h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
            FORMULATED WITH NAD+, PEPTIDES, EXOSOMES, AND OTHER POWERFUL DENTAL INGREDIENTS, DESIGNED TO REVERSE GUM
            DAMAGE AND AGGRESSIVE GUM RECESSION CAUSED BY NICOTINE POUCH USAGE.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className="border-4 border-foreground p-8 bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <h3 className="text-3xl font-bold mb-4">{ingredient.name}</h3>
              <p className="text-lg">{ingredient.description}</p>
            </div>
          ))}
        </div>

        <div className="border-4 border-foreground bg-secondary text-secondary-foreground p-8">
          <p className="text-2xl md:text-3xl font-bold text-center">
            HEALTHY NICOTINE POUCHES THAT ARE GOOD FOR YOUR GUMS
          </p>
        </div>
      </div>
    </section>
  )
}
