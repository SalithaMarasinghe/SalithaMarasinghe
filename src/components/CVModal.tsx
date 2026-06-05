import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, FileText, Share2 } from 'lucide-react'

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

const CVOptions = [
  {
    id: 'de',
    label: 'Data Engineer',
    shortLabel: 'DE',
    description: 'Data pipelines, cloud platforms & ETL engineering',
    file: '/Salitha_Marasinghe CV DE.pdf',
    filename: 'Salitha_Marasinghe_CV_DE.pdf',
    color: 'from-blue-600 to-cyan-500',
    accent: '#3b82f6',
  },
  {
    id: 'ds',
    label: 'Data Science & ML',
    shortLabel: 'DS/ML',
    description: 'Machine learning, analytics & statistical modelling',
    file: '/Salitha_Marasinghe CV DS.pdf',
    filename: 'Salitha_Marasinghe_CV_DS.pdf',
    color: 'from-violet-600 to-purple-500',
    accent: '#8b5cf6',
  },
]

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const [selected, setSelected] = useState(0) // 0 = DE, 1 = DS/ML
  const cv = CVOptions[selected]

  // Detect mobile device
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    typeof navigator !== 'undefined' ? navigator.userAgent : ''
  )

  // Download handler — share sheet on mobile, direct download on desktop
  const handleDownload = useCallback(async () => {
    if (isMobile && typeof navigator !== 'undefined' && navigator.share) {
      try {
        const response = await fetch(cv.file)
        const blob = await response.blob()
        const file = new File([blob], cv.filename, { type: 'application/pdf' })
        await navigator.share({
          title: cv.label + ' CV',
          files: [file],
        })
      } catch (err) {
        // User cancelled or share failed — silently ignore
        console.warn('Share cancelled or failed:', err)
      }
    } else {
      // Desktop: trigger a programmatic anchor download
      const a = document.createElement('a')
      a.href = cv.file
      a.download = cv.filename
      a.rel = 'noopener noreferrer'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }, [cv, isMobile])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-6 pointer-events-none"
          >
            <div
              className="pointer-events-auto bg-[#111] border border-white/10 rounded-2xl overflow-hidden flex flex-col"
              style={{ width: 'min(95vw, 1200px)', height: '95vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header — compact, wraps on small screens */}
              <div className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3">

                  {/* Title */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <FileText className="w-3.5 h-3.5 text-white/40" />
                    <h2 className="font-display text-lg sm:text-xl md:text-2xl text-white tracking-tight leading-none">
                      Download CV
                    </h2>
                  </div>

                  {/* Divider — hidden on smallest screens */}
                  <div className="hidden sm:block w-px h-7 bg-white/10 flex-shrink-0" />

                  {/* Toggle — takes remaining space, or full-width on wrap */}
                  <div className="flex items-center gap-3 flex-1 min-w-[220px]">
                    <div className="relative flex bg-white/5 rounded-full p-1 border border-white/10 w-full sm:w-auto">
                      <motion.div
                        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r ${cv.color}`}
                        animate={{ left: selected === 0 ? '4px' : 'calc(50%)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                      {CVOptions.map((option, idx) => (
                        <button
                          key={option.id}
                          onClick={() => setSelected(idx)}
                          className={`relative z-10 flex-1 py-1.5 px-3 sm:px-5 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full whitespace-nowrap ${
                            selected === idx ? 'text-white' : 'text-white/50 hover:text-white/80'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                    <span className="text-xs text-white/35 truncate hidden md:block">
                      {cv.description}
                    </span>
                  </div>

                  {/* Download + Close */}
                  <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
                    <button
                      onClick={handleDownload}
                      className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase text-white bg-gradient-to-r ${cv.color} hover:opacity-90 active:scale-95 transition-all`}
                    >
                      {isMobile ? (
                        <Share2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      ) : (
                        <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      )}
                      <span className="hidden sm:inline">
                        {isMobile ? `Share ${cv.shortLabel} CV` : `Download ${cv.shortLabel} CV`}
                      </span>
                      <span className="sm:hidden">{isMobile ? 'Share' : 'Save'}</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:bg-white/10 active:scale-90 transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* PDF Preview — Google Docs viewer on mobile (prevents horizontal overflow), native on desktop */}
              <div className="flex-1 min-h-0 relative bg-black/20" style={{ overflow: 'clip' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={cv.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <iframe
                      src={
                        isMobile
                          ? `https://docs.google.com/viewer?url=${encodeURIComponent(
                              'https://salithamadushanmarasinghe.web.app' + cv.file
                            )}&embedded=true`
                          : `${cv.file}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`
                      }
                      className="w-full h-full border-0"
                      title={`${cv.label} CV`}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
