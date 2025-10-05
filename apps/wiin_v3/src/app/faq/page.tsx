"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PageHeader } from "@/components/layout/page-header"
import { Footer } from "@/components/layout/footer"
import { ChevronDown, Search } from "lucide-react"

interface FAQ {
  question: string
  answer: string
  category?: string
}

const faqs: FAQ[] = [
  {
    question: "What is WiiN?",
    answer: "WiiN is an innovative oral wellness nicotine pouch enhanced with NAD+ (Nicotinamide Adenine Dinucleotide). It combines nicotine satisfaction with cellular energy support, offering a unique approach to oral wellness.",
    category: "Product"
  },
  {
    question: "What is NAD+ and why is it in WiiN?",
    answer: "NAD+ is a crucial coenzyme found in every cell of your body, playing a vital role in energy production, DNA repair, and cellular health. WiiN includes NAD+ to help support your body's natural energy processes while delivering nicotine satisfaction.",
    category: "Science"
  },
  {
    question: "How do I use WiiN pouches?",
    answer: "Simply place a WiiN pouch between your gum and lip. Leave it there for 20-30 minutes to experience the full effect. No spitting required, and you can discard it when finished.",
    category: "Usage"
  },
  {
    question: "Are WiiN pouches safe?",
    answer: "WiiN pouches are tobacco-free and designed with oral wellness in mind. However, they do contain nicotine, which is addictive. They are intended for adult nicotine users only. Please consult with a healthcare professional if you have concerns.",
    category: "Safety"
  },
  {
    question: "What flavors are available?",
    answer: "WiiN offers a variety of refreshing flavors designed to enhance your experience. Check our products page for the current flavor selection and find your favorite.",
    category: "Product"
  },
  {
    question: "How should I store WiiN pouches?",
    answer: "Store WiiN pouches in a cool, dry place away from direct sunlight. Keep the container sealed when not in use to maintain freshness.",
    category: "Usage"
  },
  {
    question: "Can I use WiiN pouches anywhere?",
    answer: "WiiN pouches are smokeless and discreet, making them suitable for use in most environments where smoking isn't permitted. Always check local regulations and respect private property rules.",
    category: "Usage"
  },
  {
    question: "What nicotine strengths do you offer?",
    answer: "WiiN offers various nicotine strengths to suit different preferences and experience levels. Visit our products page to explore the full range of options.",
    category: "Product"
  }
]

function FAQItem({ faq, isOpen, onClick }: { faq: FAQ; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      layout
      className="border border-foreground/20 bg-background/50 backdrop-blur-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/10 active:bg-primary/20 transition-colors touch-manipulation"
      >
        <span className="text-lg font-semibold uppercase tracking-wide pr-8">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? 'text-primary' : ''}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="px-6 pb-6 pt-2">
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
              {faq.category && (
                <span className="inline-block mt-4 px-3 py-1 text-xs uppercase tracking-wider bg-foreground/10 rounded-full">
                  {faq.category}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      <PageHeader />
      <div className="px-8 pb-8 pt-32 max-w-4xl mx-auto">

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider">
            FAQ
          </h1>
          <p className="text-lg text-muted-foreground uppercase tracking-wide max-w-3xl mb-12">
            Everything you need to know about WiiN
          </p>

          {/* Search Bar */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="SEARCH QUESTIONS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-background border-2 border-foreground/20 focus:border-primary outline-none transition-colors uppercase tracking-wide text-sm placeholder:text-muted-foreground"
            />
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                />
              ))
            ) : (
              <motion.p
                className="text-center text-muted-foreground py-12 uppercase tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No questions found. Try a different search term.
              </motion.p>
            )}
          </div>

          {/* Contact CTA */}
          <motion.div
            className="mt-16 p-8 border-2 border-foreground/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6 uppercase tracking-wide text-sm">
              Our team is here to help
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary active:scale-95 transition-all uppercase tracking-widest text-sm font-semibold touch-manipulation"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
