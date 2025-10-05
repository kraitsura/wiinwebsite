"use client"

import { PageHeader } from "@/components/layout/page-header"
import { Footer } from "@/components/layout/footer"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const teamMembers = [
  {
    id: "hammer",
    name: "HAMMER",
    role: "CO-FOUNDER",
    description: "Hammer brings decades of experience in the energy drink industry and a passion for natural, sustainable ingredients. As a co-founder, Hammer leads product development and innovation.",
  },
  {
    id: "doug",
    name: "DOUG",
    role: "CO-FOUNDER",
    description: "Doug is a visionary entrepreneur with a deep understanding of brand building and market strategy. Doug oversees business operations and strategic partnerships at WiiN.",
  },
  {
    id: "cathy",
    name: "CATHY",
    role: "CO-FOUNDER",
    description: "Cathy is a creative force with expertise in design and customer experience. She leads the creative vision and ensures WiiN connects authentically with its community.",
  },
  {
    id: "courtney",
    name: "COURTNEY BABER",
    role: "CO-FOUNDER",
    description: "Courtney brings strategic insight and operational excellence to WiiN. With a focus on growth and innovation, Courtney plays a key role in driving the company's vision forward.",
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

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, {
    margin: "-20% 0px -20% 0px",
    once: false
  })

  return (
    <motion.section
      ref={cardRef}
      id={member.id}
      variants={itemVariants}
      className="group h-full"
      data-active={isInView}
    >
      {/* Card container */}
      <div className="relative border-2 border-foreground h-full flex flex-col p-4 sm:p-6 lg:p-8">
        {/* Content Section */}
        <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
          {/* Name & Role with Profile Image */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 sm:gap-4 lg:gap-8 pb-3 sm:pb-4 border-b border-border/50">
            {/* Profile Image */}
            <div
              className="transition-transform duration-700 ease-out flex-shrink-0 lg:-mt-2"
              style={{
                transform: isInView ? 'scale(1.20)' : 'scale(1)'
              }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-foreground bg-primary shadow-2xl transition-transform duration-500 group-hover:scale-125">
                <Image
                  src="/placeholder-user.jpg"
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Name & Role Text */}
            <div className="flex-1 space-y-1 text-center lg:text-left">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold uppercase tracking-wider leading-tight">
                {member.name}
              </h2>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
                {member.role}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1">
            <p className="text-sm leading-relaxed text-muted-foreground text-center lg:text-left">
              {member.description}
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary transform origin-left transition-transform duration-700 ease-out group-hover:scale-x-100"
          style={{ transform: `scaleX(${isInView ? 1 : 0})` }}
        />
      </div>
    </motion.section>
  )
}

export default function TeamPage() {
  return (
    <div className="h-screen overflow-y-auto flex flex-col">
      <PageHeader />
      <div className="flex-1 flex flex-col max-w-[1800px] mx-auto w-full px-3 sm:px-6 lg:px-8 pb-3 sm:pb-6 lg:pb-8 pt-20 sm:pt-24 lg:pt-32">

        {/* Header */}
        <motion.div
          className="mb-3 sm:mb-4 lg:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-1 sm:mb-2 uppercase tracking-wider">
            TEAM
          </h1>
          <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-primary mb-2 sm:mb-3" />
          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground uppercase tracking-widest">
            THE VISIONARIES POWERING WiiN
          </p>
        </motion.div>

        {/* Team Grid - Takes remaining space */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-6 flex-1 min-h-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
