"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-end items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={32} strokeWidth={2} className="rounded-lg" />
            ) : (
              <Menu size={32} strokeWidth={2} className="rounded-lg" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: "#20B2AA" }}
          >
            <nav className="space-y-8 text-center">
              <a
                href="#hero"
                className="block text-4xl md:text-6xl font-bold text-white hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </a>
              <a
                href="#mission"
                className="block text-4xl md:text-6xl font-bold text-white hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                MISSION
              </a>
              <a
                href="#method"
                className="block text-4xl md:text-6xl font-bold text-white hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                METHOD
              </a>
              <a
                href="#team"
                className="block text-4xl md:text-6xl font-bold text-white hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                TEAM
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
