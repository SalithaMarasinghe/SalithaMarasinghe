import { motion } from 'framer-motion'

const projects = [
  {
    title: 'ISP Customer Churn Analytics Platform',
    subtitle: 'End-to-end churn modelling and analytics for an ISP dataset.',
    bullets: [
      'Built data pipelines and feature engineering in Azure Databricks using Python and Spark.',
      'Trained a logistic regression model to predict churn and wrote scores to Delta tables.',
      'Designed a Power BI dashboard showing churn probability, customer filters, and network KPIs.',
    ],
    tags: ['Azure Databricks', 'PySpark', 'Delta Lake', 'Power BI', 'scikit-learn'],
    links: [
      { label: 'View Code', href: '#' },
      { label: 'View Dashboard', href: '#' },
    ],
  },
  {
    title: 'Hospital Admissions Analytics Platform',
    subtitle: 'Analyzing hospital admissions, patient flows, and capacity.',
    bullets: [
      'Modelled admissions data and created star-schema tables for reporting.',
      'Built visualizations for occupancy, length of stay, and admission trends.',
      'Highlighted bottlenecks and patterns to support operational decisions.',
    ],
    tags: ['SQL', 'Data Modelling', 'Power BI'],
    links: [
      { label: 'View Code', href: '#' },
      { label: 'View Dashboard', href: '#' },
    ],
  },
  {
    title: 'Network Performance & Teleco-Network Analytics',
    subtitle: 'Exploring network KPIs and their impact on service quality.',
    bullets: [
      'Analyzed latency, bandwidth, outages, and SLA breach metrics.',
      'Created visual dashboards to compare network performance across regions.',
      'Connected performance indicators with potential customer experience issues.',
    ],
    tags: ['Python', 'SQL', 'Power BI'],
    links: [
      { label: 'View Code', href: '#' },
      { label: 'View Dashboard', href: '#' },
    ],
  },
  {
    title: 'Data Engineering Experiments & Learning',
    subtitle: 'Collection of mini projects in data engineering.',
    bullets: [
      'Implemented small ETL / ELT pipelines using SQL and Python.',
      'Experimented with data quality checks and basic scheduling concepts.',
      'Documented learnings in notebooks for future reference.',
    ],
    tags: ['Python', 'SQL', 'ETL', 'Notebooks'],
    links: [
      { label: 'View Code', href: '#' },
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Selected Work</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          PROJECTS
        </motion.h2>

        {/* Projects */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Subtitle */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Middle Column - Links */}
                <div className="lg:col-span-2">
                  <div className="flex flex-col gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white tracking-widest uppercase transition-colors"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Column - Bullets & Tags */}
                <div className="lg:col-span-5">
                  <ul className="space-y-3 mb-6">
                    {project.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-gray-400 leading-relaxed text-sm lg:text-base pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-gray-600"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
