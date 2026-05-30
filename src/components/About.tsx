import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Me</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Working with data and code"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              KURUNEGALA / SRI LANKA
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm Salitha — currently studying and practicing data engineering and
              analytics. I love building data pipelines, modelling data, and shaping
              raw inputs into clean, reliable analytics layers. I'm comfortable
              working with cloud tools, especially Azure Databricks and Power BI,
              and I'm motivated by turning messy data into clear, decision-ready
              insights that teams can actually act on.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "TURNING<br />
            <span className="text-white underline underline-offset-8">MESSY DATA</span><br />
            INTO CLEAR,<br />
            DECISION-READY INSIGHTS."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            5+ ACADEMIC &amp; PERSONAL<br />
            DATA PROJECTS
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              My focus areas span ETL/ELT pipelines, dimensional modelling, and
              analytics. I work day-to-day with Python and SQL, and I've built
              several projects on Azure Databricks using Spark and Delta Lake to
              prepare data for downstream reporting.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/9783353/pexels-photo-9783353.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Analytics dashboard"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              AZURE DATABRICKS / POWER BI
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Code and SQL queries"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              PYTHON · SQL · SPARK<br />
              (DAILY TOOLKIT)
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Alongside engineering, I keep growing my analytics and ML toolkit —
              from KPI dashboards in Power BI to classification and regression
              models in scikit-learn. I'm currently looking for internships and
              junior roles where I can contribute to real data products while
              learning from experienced teams.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
