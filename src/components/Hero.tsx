import { useState } from 'react'
import { motion } from 'framer-motion'
import { CVModal } from './CVModal'

export function Hero() {
  const [cvModalOpen, setCvModalOpen] = useState(false)

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image - Responsive */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/my-photo.webp"
            alt="Salitha Marasinghe"
            className="w-full h-full object-cover"
            style={{ objectPosition: '75% 35%' }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/55" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end md:items-center pb-20 sm:pb-28 md:pb-0 px-5 sm:px-6 md:px-12 lg:px-16">
          <div className="w-full max-w-5xl">
            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="font-display leading-none tracking-tighter text-[18vw] sm:text-[14vw] md:text-hero">
                <span className="block text-white">SALITHA</span>
                <span className="block text-white">MARASINGHE</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="mt-4 md:mt-8 font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 tracking-wider leading-tight max-w-2xl"
              >
                "Turning <span className="text-white underline underline-offset-4 decoration-white/60">messy data</span> into clear, decision-ready insights."
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-6 md:mt-10 flex flex-wrap gap-3 md:gap-4"
              >
                <button
                  onClick={scrollToProjects}
                  className="px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm tracking-widest uppercase bg-white text-black hover:bg-white/90 active:scale-95 transition-all"
                >
                  View Projects
                </button>
                <button
                  onClick={() => setCvModalOpen(true)}
                  className="px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm tracking-widest uppercase border border-white/60 text-white hover:bg-white/10 active:scale-95 transition-all"
                >
                  Download CV
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  )
}
