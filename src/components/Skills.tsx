import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Core Skills',
    items: [
      'Data Engineering (ETL/ELT, modelling, batch pipelines)',
      'Data Analysis & Business Intelligence',
      'SQL querying & performance tuning',
      'Machine Learning basics (classification, regression)',
    ],
  },
  {
    label: 'Technologies',
    items: [
      'Python (pandas, NumPy, scikit-learn)',
      'SQL (T-SQL / general SQL)',
      'Azure & Databricks (Spark, Delta Lake, SQL Warehouse)',
      'Power BI',
      'Git & GitHub',
    ],
  },
  {
    label: 'Soft Skills',
    items: [
      'Problem solving & analytical thinking',
      'Clear communication with non-technical audiences',
      'Collaboration & teamwork',
      'Self-learning & continuous improvement',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          SKILLS
        </motion.h2>

        {/* Skill Groups */}
        <div className="space-y-16 lg:space-y-20">
          {skillGroups.map((group, gIdx) => (
            <motion.div
              key={group.label}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: gIdx * 0.1 }}
            >
              <p className="text-sm text-gray-500 tracking-widest uppercase mb-6">
                {group.label}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-6">
                {group.items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="border-b border-gray-800 pb-4"
                  >
                    <span className="text-base md:text-lg lg:text-xl text-gray-300 font-light">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
