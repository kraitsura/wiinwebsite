interface IngredientCardProps {
  title: string
  subtitle: string
  active?: boolean
}

export function IngredientCard({ title, subtitle, active = false }: IngredientCardProps) {
  return (
    <div
      className={`border-l-4 pl-6 transition-colors duration-300 ${
        active ? "border-primary" : "border-foreground/20"
      }`}
    >
      <h4
        className={`font-bold text-base md:text-lg mb-1 uppercase tracking-wide leading-tight transition-colors duration-300 ${
          active ? "text-foreground" : "text-foreground/40"
        }`}
      >
        {title}
      </h4>
      <p
        className={`text-xs md:text-sm uppercase tracking-wide leading-tight transition-colors duration-300 ${
          active ? "text-muted-foreground" : "text-foreground/30"
        }`}
      >
        {subtitle}
      </p>
    </div>
  )
}
