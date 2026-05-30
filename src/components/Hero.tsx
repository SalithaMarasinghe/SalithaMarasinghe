import { motion } from 'framer-motion'

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Responsive */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Salitha Marasinghe"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl">
          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display leading-none tracking-tighter text-[15vw] sm:text-[12vw] md:text-hero">
              <span className="block text-white">SALITHA</span>
              <span className="block text-white">MARASINGHE</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white/90 tracking-wide"
            >
              Aspiring Data Engineer &amp; Analytics Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-xl leading-relaxed"
            >
              I focus on data engineering, analytics, and cloud-based data platforms, with hands-on work in Python, SQL, Databricks, Azure, and Power BI. I enjoy building end-to-end solutions — from raw data ingestion to models and decision-ready dashboards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-8 md:mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 text-sm tracking-widest uppercase bg-white text-black hover:bg-white/90 transition-colors"
              >
                View Projects
              </button>
              <a
                href="#"
                className="px-6 py-3 text-sm tracking-widest uppercase border border-white/60 text-white hover:bg-white/10 transition-colors"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
