"use client"

import { PageHeader } from "@/components/layout/page-header"
import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    id: "doug",
    name: "DOUG",
    role: "CO-FOUNDER",
    description: "Doug is a visionary entrepreneur with a deep understanding of brand building and market strategy. Doug oversees business operations and strategic partnerships at WiiN.",
    image: "/headshots/doug.png",
  },
  {
    id: "cathy",
    name: "CATHY",
    role: "CO-FOUNDER",
    description: "Cathy is a creative force with expertise in design and customer experience. She leads the creative vision and ensures WiiN connects authentically with its community.",
    image: "/headshots/cat.png",
  },
  {
    id: "karen",
    name: "KAREN MORAN",
    role: "SAAS CFO • STRATEGIX THINKER • FINANCIAL STORYTELLER",
    description: "Karen is a SaaS CFO and strategic thinker who turns numbers into narrative. She leads financial strategy at WiiN, translating performance into the story that drives growth and aligns the team.",
    image: "/headshots/karen.png",
  },
  {
    id: "hammer",
    name: "HAMMER",
    role: "VP OF SALES",
    description: "Hammer brings decades of experience in the energy drink industry and a passion for natural, sustainable ingredients. As VP of Sales, Hammer leads go-to-market strategy and revenue growth.",
    image: "/placeholder-user.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

function TeamCard({ member }: { member: typeof teamMembers[0] }) {
  return (
    <motion.section
      id={member.id}
      variants={itemVariants}
      className="group h-full"
    >
      <div className="relative h-full flex flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:items-stretch">
        {/* Image — top on mobile, left on desktop */}
        <div className="relative w-2/3 sm:w-1/2 lg:w-auto lg:h-full aspect-[4/5] flex-shrink-0 overflow-hidden rounded-full max-h-[42vh] lg:max-h-none">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left transition-transform duration-500 ease-out lg:group-hover:translate-x-1">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground/70 mb-2">
            {member.role}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.05] mb-3">
            {member.name}
          </h2>
          <div className="h-px w-8 bg-foreground/20 mb-4 mx-auto lg:mx-0 transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground/90">
            {member.description}
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen lg:h-screen flex flex-col lg:overflow-hidden">
      <PageHeader />
      <div className="flex-1 flex">
        {/* Vertical banner — desktop only, flush to left edge */}
        <aside className="hidden lg:flex w-12 xl:w-14 flex-shrink-0 items-center justify-center border-r border-foreground/10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="[writing-mode:vertical-rl] rotate-180 text-base xl:text-lg font-light uppercase tracking-[0.45em] text-foreground/70"
          >
            Meet the Team
          </motion.div>
        </aside>

        <main className="flex-1 px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-24 pb-8 lg:pb-10 lg:overflow-hidden">
          {/* Mobile heading */}
          <h1 className="lg:hidden text-3xl sm:text-4xl font-light tracking-[0.2em] uppercase mb-6 sm:mb-8">
            Meet the Team
          </h1>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 lg:h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
