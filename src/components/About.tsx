import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/about.webp"
          alt="About Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80 md:bg-black/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-400 tracking-widest uppercase">About Me</span>
          <div className="w-6 h-px bg-gray-500 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="max-w-3xl mb-0">
          <motion.div
            {...fadeInUp}
          >
            <p className="text-base lg:text-lg text-gray-200 leading-relaxed font-light">
              Final-year Data Science undergraduate with hands-on experience as a Data Engineer intern. Proven track record in building and deploying end-to-end data solutions, including data engineering pipelines, cloud platforms, statistical analytics, machine learning models, and AI-integrated systems. Combines strong theoretical foundations in statistical modeling and applied ML with practical delivery in Agile, cross-functional environments, driving full project lifecycle ownership from data ingestion to business impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
