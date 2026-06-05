import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Salitha consistently took ownership of his project work and delivered reliable, well-documented results — a rare quality at this stage.',
    name: 'Dr. A. Perera',
    role: 'University Lecturer',
  },
  {
    quote:
      'Strong analytical thinker. He breaks problems down clearly and isn\'t afraid to dig into data until he understands what it\'s telling him.',
    name: 'S. Fernando',
    role: 'Project Supervisor',
  },
  {
    quote:
      'Communicates data insights in plain language, which made him an effective bridge between the technical team and stakeholders.',
    name: 'N. Jayasinghe',
    role: 'Team Mentor',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Speaking() {
  return (
    <section id="testimonials" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">References</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          TESTIMONIALS
        </motion.h2>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="border border-gray-800 p-6 lg:p-8 flex flex-col gap-6 hover:border-gray-700 transition-colors"
            >
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-light">
                “{t.quote}”
              </p>
              <div className="mt-auto">
                <p className="text-sm text-white">{t.name}</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
