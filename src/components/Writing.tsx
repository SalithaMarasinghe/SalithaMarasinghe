import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Data Engineer Intern',
    org: 'TRACE – Sri Lanka | Remote',
    period: 'Aug 2025 – Feb 2026',
    bullets: [
      'Built an automated Python ETL pipeline (Customs Data Transformer) to ingest, validate, and transform Excel manifests into standards-compliant XML, eliminating a manual enterprise data submission process.',
      'Designed ER schemas and implemented the backend for a multi-source B2B pricing platform (Wasi Lanka) and conducted market research on feasibility to support strategic decision making.',
      'Architected an LLM-powered AI data agent (Tourism AI Agent) with MCP-agent design and consent-based behavioral data collection pipelines.',
      'Adhered to DevOps principles by enforcing Git/BitBucket version control, rigorous code review standards, and continuous integration workflows across codebases.',
      'Acted as team lead within a cross-functional Agile delivery environment, managing full-lifecycle sprint deliverables from development and QA through to deployment, while translating complex data pipeline architectures into clear outputs for non-technical business stakeholders.',
    ],
  },
  {
    title: 'Freelance Software Engineer (Part-Time)',
    org: 'Emec Holdings (Pvt) Ltd',
    period: 'Oct 2025 – Present',
    bullets: [
      'Designed and built the official villa booking website as a React + TypeScript SPA with Firebase backend and Firestore for real‑time availability.',
      'Implemented guest‑facing booking forms, live availability calendar, and a protected admin dashboard for managing reservations and monitoring site performance.',
      'Engineered a custom analytics solution to track KPIs (conversion rates, traffic sources, user intent), visualizing data through an optimized, mobile-responsive dashboard.',
      'Deployed as a PWA on Firebase Hosting, ensuring a seamless UX across devices and offline‑ready capabilities.',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Writing() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Hands-on Work</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EXPERIENCE
        </motion.h2>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block border-t border-gray-800 py-6 md:py-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-8">
                <div className="md:flex-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">
                    {item.title}
                  </h3>
                  <p className="text-base text-white font-bold mt-1 md:mt-2">
                    {item.org}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm lg:text-base text-gray-400 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-gray-600"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="text-sm text-white/90 tracking-widest uppercase whitespace-nowrap">
                  {item.period}
                </span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
