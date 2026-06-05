import { useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Github, Mail, Check, FileDown, X, Menu } from 'lucide-react'
import { CVModal } from './CVModal'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function Navigation() {
  const activeSection = useActiveSection()
  const isVisible = useScrollVisibility()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [cvModalOpen, setCvModalOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('marasinghe3u@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const iconBtn = 'w-9 h-9 rounded-full text-white border border-white/20 bg-[#121212] hover:bg-white hover:text-black hover:border-white active:scale-90 transition-all duration-200 inline-flex items-center justify-center cursor-pointer flex-shrink-0'

  return (
    <>
      {/* ── Mobile Header ─────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-3 md:hidden bg-black/50 backdrop-blur-md border-b border-white/5">

        {/* Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className={iconBtn}
          aria-label="Open menu"
        >
          <Menu className="w-4 h-4" />
        </button>

        {/* Right icons */}
        <div className="flex items-center gap-1.5">
          <button onClick={handleCopyEmail} className={iconBtn} title={copiedEmail ? 'Copied!' : 'Copy Email'}>
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Mail className="w-3.5 h-3.5" />}
          </button>
          <a href="https://www.linkedin.com/in/salitha-marasinghe" target="_blank" rel="noopener noreferrer" className={iconBtn}>
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a href="https://github.com/SalithaMarasinghe" target="_blank" rel="noopener noreferrer" className={iconBtn}>
            <Github className="w-3.5 h-3.5" />
          </a>
          <button onClick={() => setCvModalOpen(true)} className={iconBtn} title="Download CV">
            <FileDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── Mobile Full-Screen Drawer ─────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mob-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="mob-drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-72 bg-[#0d0d0d] border-r border-white/10 flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="font-display text-lg text-white tracking-widest">MENU</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={iconBtn}
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      'text-left font-display text-4xl tracking-wider py-2 transition-colors duration-200',
                      activeSection === item.id ? 'text-white' : 'text-white/40 hover:text-white/80'
                    )}
                  >
                    {item.label.toUpperCase()}
                  </motion.button>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-8 py-6 border-t border-white/10 flex items-center gap-3">
                <button onClick={handleCopyEmail} className={iconBtn} title={copiedEmail ? 'Copied!' : 'Email'}>
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Mail className="w-3.5 h-3.5" />}
                </button>
                <a href="https://www.linkedin.com/in/salitha-marasinghe" target="_blank" rel="noopener noreferrer" className={iconBtn}>
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a href="https://github.com/SalithaMarasinghe" target="_blank" rel="noopener noreferrer" className={iconBtn}>
                  <Github className="w-3.5 h-3.5" />
                </a>
                <button onClick={() => { setCvModalOpen(true); setMobileMenuOpen(false) }} className={iconBtn} title="Download CV">
                  <FileDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Desktop Social Links — Fixed Top Right ────────── */}
      <div className="hidden md:block fixed top-0 right-0 z-50 p-6 md:p-10">
        <div className="flex items-center gap-3 justify-end">
          <motion.button
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-white border border-white/20 bg-[#121212] hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-flex items-center gap-1.5 cursor-pointer"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Mail className="w-3.5 h-3.5" />}
            <span>{copiedEmail ? 'Copied!' : 'Email'}</span>
          </motion.button>

          <motion.a
            href="https://www.linkedin.com/in/salitha-marasinghe"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-white border border-white/20 bg-[#121212] hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            href="https://github.com/SalithaMarasinghe"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-white border border-white/20 bg-[#121212] hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </motion.a>

          <motion.button
            onClick={() => setCvModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest text-white border border-white/20 bg-[#121212] hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </motion.button>
        </div>
      </div>

      {/* ── Desktop Nav — Fixed Bottom Right ─────────────── */}
      <nav
        className={cn(
          'hidden md:block fixed bottom-0 right-0 z-50 p-6 md:p-10 transition-all duration-500',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-end gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'text-sm text-white mix-blend-difference transition-all duration-300 relative py-1',
                'hover:opacity-60',
                activeSection === item.id && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  )
}
