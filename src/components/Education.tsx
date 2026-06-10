import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {/* Degree */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="/sliit.webp"
                alt="SLIIT Campus"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                SLIIT — SRI LANKA
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-2">
                  BSc (Hons) Information Technology – Specializing in Data Science (Undergraduate)
                </h3>
                <p className="text-sm tracking-wider uppercase mb-6 flex flex-col gap-1.5">
                  <span className="text-gray-400">Sri Lanka Institute of Information Technology (SLIIT)</span>
                  <span className="text-white/90">2022 – Present</span>
                </p>
                <div className="text-gray-400 leading-relaxed text-sm lg:text-base border-t border-gray-900 pt-4 mt-4">
                  <p className="font-medium text-white mb-3 text-xs tracking-wider uppercase">Relevant Coursework:</p>
                  <ul className="space-y-2">
                    {[
                      'Data Warehousing and Business Intelligence (DWBI)',
                      'Machine Learning and Optimization Methods (MLOM)',
                      'Theory and Practices in Statistical Modelling (TPSM)',
                      'Introduction to Internet of Things and Big Data Analytics (IoTBDA)'
                    ].map((course) => (
                      <li
                        key={course}
                        className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-gray-600 text-sm"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
