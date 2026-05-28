export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string // ISO date
  author: string
  readingTime: string
  content: string[] // paragraphs
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "mitochondria-the-powerhouse-behind-wiin",
    title: "Mitochondria: The Powerhouse Behind WiiN",
    excerpt:
      "Clean energy doesn't start in your cup — it starts in your cells. Here's how the WiiN Daily Complex™ supports ATP production at the source.",
    date: "2026-05-20",
    author: "The WiiN Team",
    readingTime: "4 min read",
    content: [
      "You've heard it since grade school: the mitochondria is the powerhouse of the cell. It's also the reason WiiN exists. Every ounce of focus, energy, and drive you feel during the day traces back to a molecule called ATP — adenosine triphosphate — produced inside your mitochondria.",
      "As we age and push through stress, late nights, and demanding workloads, ATP production becomes less efficient. That's where the WiiN Daily Complex™ comes in. NAD+ is a coenzyme central to mitochondrial energy metabolism, and D-Ribose is a five-carbon sugar fundamental to ATP synthesis. Together they help replenish the cellular energy reserves your body draws on all day.",
      "We pair those with L-Theanine and L-Tyrosine — amino acids studied for calm, jitter-free focus and for sustaining cognition under pressure. The result is a supplement designed to support energy from the inside out, not a sugar spike that leaves you crashing an hour later.",
      "This is systemic, full-body wellness — not a quick fix. WiiN is a supplement first, engineered around the science of how your cells actually make energy.",
      "Nicotine products contain nicotine, an addictive chemical, and are intended for adults 21+. This article is educational and is not medical advice.",
    ],
  },
  {
    slug: "why-we-built-a-supplement-not-just-a-pouch",
    title: "Why We Built a Supplement, Not Just a Pouch",
    excerpt:
      "The category raced to make everything stronger. We asked a different question: what could every pouch be doing for your whole body?",
    date: "2026-05-06",
    author: "The WiiN Team",
    readingTime: "3 min read",
    content: [
      "When we looked at the pouch category, everyone was chasing the same thing — more strength, bigger hits. Nobody was asking what the product could be doing for the rest of your body.",
      "So we built a supplement. The WiiN Daily Complex™ uses systemic amino acids formulated to help reduce inflammation, alongside NAD+, L-Theanine, L-Tyrosine, and D-Ribose. It's a novel product, and it's first to market.",
      "That shift — from a delivery device to a daily wellness supplement — changes everything about how we formulate, test, and talk about WiiN. It's why we ran in-house clinical studies with 200 participants and saw a 92% repurchase intent at retail value.",
      "Stronger, healthier, and now enhanced. That's the WiiN Step-down Method, and it's only the beginning.",
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
