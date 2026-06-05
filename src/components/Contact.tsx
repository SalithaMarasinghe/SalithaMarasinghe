import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Check } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('marasinghe3u@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Contact</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          Get in touch
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-700 mb-12 lg:mb-16"
        />

        {/* Informal Text & Buttons */}
        <motion.div
          {...fadeInUp}
          className="mb-12 lg:mb-16 max-w-2xl"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            OPEN TO INTERNSHIPS,<br />
            JUNIOR DATA ROLES, AND<br />
            COLLABORATION OPPORTUNITIES
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-8">
            LET'S BUILD SOMETHING WITH DATA — REACH OUT ANY TIME
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 rounded-full text-xs font-medium uppercase tracking-widest text-white border border-white/20 bg-[#121212] hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-flex items-center gap-2 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Mail className="w-4 h-4" />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
            </motion.button>

            <motion.a
              href="https://www.linkedin.com/in/salitha-marasinghe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 rounded-full text-xs font-medium uppercase tracking-widest text-white border border-white/20 bg-[#121212] hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/SalithaMarasinghe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 rounded-full text-xs font-medium uppercase tracking-widest text-white border border-white/20 bg-[#121212] hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Salitha Marasinghe. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
