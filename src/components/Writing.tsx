import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Data Engineering Intern (Academic Project)',
    org: 'University Capstone',
    period: '2024',
    bullets: [
      'Built ETL pipelines in Azure Databricks ingesting raw CSV and API data into Delta Lake.',
      'Modelled curated tables and exposed them to Power BI for stakeholder reporting.',
      'Collaborated with a small team using Git and GitHub for version control.',
    ],
  },
  {
    title: 'Analytics & Reporting (Personal Project)',
    org: 'Self-directed',
    period: '2023 — 2024',
    bullets: [
      'Designed Power BI dashboards for churn, admissions, and network KPI use cases.',
      'Wrote performance-oriented SQL queries against star-schema models.',
      'Documented insights and recommendations for non-technical readers.',
    ],
  },
  {
    title: 'Machine Learning Coursework',
    org: 'Academic Project',
    period: '2023',
    bullets: [
      'Implemented classification and regression models using scikit-learn.',
      'Evaluated models with cross-validation and standard metrics.',
      'Presented findings and trade-offs to peers and lecturers.',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
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
                  <p className="text-sm text-gray-500 mt-1 md:mt-2">
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
                <span className="text-sm text-gray-600 tracking-widest uppercase whitespace-nowrap">
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
