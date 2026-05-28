export type Ingredient = {
  id: string
  title: string
  subtitle: string
  description: string
}

export type Product = {
  slug: "nicotine" | "nixodine" | "caffeine"
  name: string
  formulaName: string
  ingredients: Ingredient[]
}

const NAD_PLUS: Ingredient = {
  id: "nad-plus",
  title: "NAD+ POWDER",
  subtitle: "CELLULAR ENERGY METABOLISM",
  description:
    "Nicotinamide adenine dinucleotide — a coenzyme central to mitochondrial ATP production and DNA repair. NAD+ levels decline with age and oxidative stress; oral delivery supports cellular energy and metabolic resilience.",
}

const L_THEANINE: Ingredient = {
  id: "l-theanine",
  title: "L-THEANINE",
  subtitle: "CALM-ALERT FOCUS",
  description:
    "An amino acid native to green tea that promotes alpha-wave brain activity associated with relaxed attention. Pairs synergistically with caffeine to deliver smooth, jitter-free focus.",
}

const L_TYROSINE: Ingredient = {
  id: "l-tyrosine",
  title: "L-TYROSINE",
  subtitle: "STRESS-PROOF COGNITION",
  description:
    "A precursor to dopamine and norepinephrine — the neurotransmitters behind drive, motivation, and clarity. Studied for sustaining cognitive performance under stress, sleep deprivation, and demanding workloads.",
}

const D_RIBOSE: Ingredient = {
  id: "d-ribose",
  title: "D-RIBOSE",
  subtitle: "ATP REPLENISHMENT",
  description:
    "A five-carbon sugar fundamental to ATP synthesis — the body's primary energy currency. Helps restore cellular energy reserves following exertion, supporting endurance and recovery.",
}

const CAFFEINE_ANHYDROUS: Ingredient = {
  id: "caffeine-anhydrous",
  title: "CAFFEINE ANHYDROUS",
  subtitle: "FAST-ACTING ALERTNESS",
  description:
    "Dehydrated caffeine in its purest form, absorbed rapidly through oral tissue. Blocks adenosine receptors to sharpen focus, sustain energy, and reduce perceived fatigue — without the volume or sugar of coffee.",
}

const NICOTINE: Ingredient = {
  id: "nicotine",
  title: "NICOTINE",
  subtitle: "PHARMACEUTICAL-GRADE DUAL DELIVERY",
  description:
    "A proprietary blend of nicotine bitartrate dihydrate and nicotine polacrilex — the same pharmaceutical-grade formats used in FDA-approved lozenges and gum. The bitartrate salt delivers smooth, controllable absorption; the polacrilin ion-exchange resin releases gradually as it interacts with saliva, producing a steady, extended dose curve without freebase harshness.",
}

const NIXODINE: Ingredient = {
  id: "nixodine",
  title: "WiiN DAILY COMPLEX™",
  subtitle: "PROPRIETARY DERIVATIVE, DUAL DELIVERY",
  description:
    "WiiN's proprietary nicotine derivative in a dual-format blend of bitartrate salt and polacrilin ion-exchange resin. The bitartrate provides smooth, controllable oral absorption; the resin releases gradually with saliva for a steady, extended curve. Engineered as a cleaner, smarter alternative to traditional nicotine.",
}

export const PRODUCTS: Record<Product["slug"], Product> = {
  nicotine: {
    slug: "nicotine",
    name: "Nicotine",
    formulaName: "WiiN Daily Complex with NAD+",
    ingredients: [
      NICOTINE,
      NAD_PLUS,
      L_THEANINE,
      L_TYROSINE,
      D_RIBOSE,
    ],
  },
  nixodine: {
    slug: "nixodine",
    name: "WiiN Daily Complex™",
    formulaName: "WiiN Daily Complex with NAD+",
    ingredients: [
      NIXODINE,
      NAD_PLUS,
      L_THEANINE,
      L_TYROSINE,
      D_RIBOSE,
    ],
  },
  caffeine: {
    slug: "caffeine",
    name: "Caffeine",
    formulaName: "WiiN Daily Complex with NAD+",
    ingredients: [
      CAFFEINE_ANHYDROUS,
      NAD_PLUS,
      L_THEANINE,
      L_TYROSINE,
      D_RIBOSE,
    ],
  },
}

export const PRODUCT_SLUGS = Object.keys(PRODUCTS) as Product["slug"][]
