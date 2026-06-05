import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const deProjects: Array<{
  title: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
  links: Array<{ label: string; href: string }>;
}> = [
  {
    title: 'ISP Customer Analytics & Churn Prediction Platform',
    subtitle: 'End-to-end cloud Lakehouse pipeline and predictive analytics for customer retention.',
    bullets: [
      'Engineered an end-to-end orchestrated cloud Lakehouse pipeline ingesting multi-source data into distributed object storage (ADLS Gen2), implementing complex distributed data transformations using Apache Spark (via Databricks) through a Bronze/Silver/Gold Medallion architecture.',
      'Designed a Star schema dimensional model in the Gold layer and exposed curated Delta tables via Databricks SQL Warehouse with live Power BI connectivity, enabling real-time dashboard updates across customer health, network SLA performance, and support and billing risk reports.',
      'Engineered a customer-level analytical feature dataset from complex network, support, and billing signals, integrating predictive outputs back into the Lakehouse architecture to support downstream churn risk dashboarding in Power BI.',
      'Orchestrated the full pipeline via Azure Data Factory, automating data extraction through Databricks ETL and ML execution to live Power BI dashboards.',
    ],
    tags: ['Azure Data Factory', 'Databricks', 'PySpark', 'SQL', 'Scikit-learn', 'Power BI'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/SalithaMarasinghe/ISP_Network_Analytics_Platform' }
    ],
  },
  {
    title: 'Earthquake Event Analysis',
    subtitle: 'Automated medallion architecture pipeline and analytics dashboard for USGS seismic events.',
    bullets: [
      'Built an automated medallion architecture pipeline on Microsoft Fabric ingesting raw USGS earthquake data via API into a Data Lake, transforming JSON through Bronze/Silver/Gold layers using PySpark, and enriching the Gold layer with reverse geocoding for location resolution.',
      'Orchestrated daily pipeline refresh via Microsoft Data Factory and delivered interactive Power BI dashboards covering global earthquake distribution, magnitude comparisons, and significance analysis by country.',
    ],
    tags: ['Microsoft Fabric', 'Microsoft Data Factory', 'PySpark', 'Power BI'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/SalithaMarasinghe/Earthquake_Event_Analysis' }
    ],
  },
  {
    title: 'Hospital Data Warehouse Management',
    subtitle: 'Snowflake schema data warehouse, SSIS ETL pipeline, and SSAS OLAP cube for admissions reporting.',
    bullets: [
      'Designed a hospital management data warehouse using a snowflake schema with SCD Type 2 for historical location tracking.',
      'Built an SSIS ETL pipeline extracting from multi-source CSV and database inputs, applying transformations via stored procedures through a staging layer into the warehouse.',
      'Created an SSAS multidimensional OLAP cube and developed Power BI reports with drill-through, trend analysis, and slicers for patient admissions and doctor performance analytics.',
    ],
    tags: ['Microsoft SSIS', 'Microsoft SSAS', 'SQL Server', 'SQL', 'Power BI'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/SalithaMarasinghe/Hospital_DW_Project' }
    ],
  },
]

const dsProjects: Array<{
  title: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
  links: Array<{ label: string; href: string }>;
}> = [
  {
    title: 'Sri Lanka Tourism Intelligence Platform',
    subtitle: 'Research Project — Multi-source data forecasting, ensemble ML models, and LLM intelligence agents.',
    bullets: [
      'Engineered a multi-source data ingestion pipeline integrating macroeconomic indicators, behavioral signals (Google Trends), and weather covariates to support a suite of predictive analytics models.',
      'Trained and evaluated 11 models across Time Series, ML, and Deep Learning paradigms for national arrival forecasting; selecting best-performing base learners, optimizing each via Bayesian Optimization, and searching ensemble weights using a Genetic Algorithm.',
      'Extended the forecasting suite with revenue intelligence and source market segmentation models, and integrated SHAP-based explainability to surface actionable feature-level drivers for non-technical decision-makers.',
      'Built three automated LLM-based geopolitical intelligence agents with weekly refresh, independently analyzing global event impacts on arrival forecasts, revenue risk, and source market intelligence to support strategic decision-making.',
    ],
    tags: ['Python', 'FastAPI', 'React', 'Firebase', 'Railway'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/SalithaMarasinghe/RP-Tourism-Dashboard' }
    ],
  },
  {
    title: 'E-Commerce Customer Churn Prediction System',
    subtitle: 'RFM feature engineering and classification benchmark for e-commerce churn prediction.',
    bullets: [
      'Contributed to Engineering RFM-based behavioral features (Recency, Frequency, Monetary, engagement level, return rate) from 250,000 e-commerce transaction records to support churn classification.',
      'Contributed to Benchmarking 14 classification algorithms across the full ML spectrum, selecting and tuning a Decision Tree via RandomizedSearchCV; achieving 93.2% accuracy and 0.83 F1-score on a class-imbalanced held-out test set.',
    ],
    tags: ['Python', 'Scikit-learn', 'Flask'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/Duvini/FDM_Churn_Prediction' }
    ],
  },
  {
    title: 'E-Commerce Product Recommendation System',
    subtitle: 'Hybrid recommendation engine featuring content-based and collaborative filtering.',
    bullets: [
      'Contributed in implementing two complementary unsupervised recommendation strategies; content-based filtering (TF-IDF + Euclidean distance on product tags) and user-based collaborative filtering (cosine similarity on a user-item rating matrix) to deliver personalized product discovery.',
    ],
    tags: ['Python', 'Scikit-learn', 'Flask', 'MySQL'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/Duvini/E-Commerce-Reccomendation-System' }
    ],
  },
  {
    title: 'CropIQ Smart Soil Health Prediction System',
    subtitle: 'IoT-driven soil health monitoring, real-time telemetry, and LLM advisory integration.',
    bullets: [
      'Engineered a real-time IoT data ingestion pipeline processing continuous environmental sensor telemetry (NPK, temperature, humidity, soil moisture) into Firebase Realtime Database, and built a waterlogging risk prediction model.',
      'Delivered predictive insights and real-time sensor analytics through a full-stack Fast API + React dashboard integrated with a Gemini-powered AI advisory chatbot.',
    ],
    tags: ['Python', 'Firebase Realtime Database', 'Scikit-learn', 'Fast API', 'React'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/SalithaMarasinghe/Smart-Soil-Health-Prediction-System' }
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  const [activeCategory, setActiveCategory] = useState<'de' | 'ds'>('de')

  const activeProjects = activeCategory === 'de' ? deProjects : dsProjects

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
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-16"
        >
          PROJECTS
        </motion.h2>

        {/* Category Toggle */}
        <div className="flex justify-start mb-10 md:mb-16">
          <div className="flex flex-wrap sm:flex-nowrap bg-[#121212] border border-gray-800 rounded-full p-1 relative gap-1">
            <button
              onClick={() => setActiveCategory('de')}
              className={`relative px-4 py-2 text-[10px] sm:text-xs font-medium uppercase tracking-widest rounded-full transition-colors duration-300 whitespace-nowrap text-center ${
                activeCategory === 'de' ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeCategory === 'de' && (
                <motion.div
                  layoutId="active-project-tab"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Data Engineering &amp; Analytics</span>
            </button>

            <button
              onClick={() => setActiveCategory('ds')}
              className={`relative px-4 py-2 text-[10px] sm:text-xs font-medium uppercase tracking-widest rounded-full transition-colors duration-300 whitespace-nowrap text-center ${
                activeCategory === 'ds' ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeCategory === 'ds' && (
                <motion.div
                  layoutId="active-project-tab"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Data Science &amp; ML</span>
            </button>
          </div>
        </div>

        {/* Projects List with AnimatePresence */}
        <div className="space-y-0 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {activeProjects.map((project) => (
                <article
                  key={project.title}
                  className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column - Title, Subtitle, Tools & Links */}
                    <div className="lg:col-span-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed mb-4">
                        {project.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs text-white border border-gray-800 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-white border border-white/20 bg-[#121212] hover:bg-white hover:text-black hover:border-white active:scale-95 px-4 py-2 rounded-full tracking-widest uppercase transition-all duration-300 font-medium inline-flex items-center justify-center gap-1.5"
                          >
                            <span>{link.label}</span>
                            <span className="text-sm">↗</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Bullets */}
                    <div className="lg:col-span-6">
                      <ul className="space-y-4">
                        {project.bullets.map((b) => (
                          <li
                            key={b}
                            className="text-gray-400 leading-relaxed text-sm lg:text-base pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-gray-600"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}

              {activeProjects.length === 0 && (
                <div className="border-t border-gray-800 py-16 text-center text-gray-500">
                  Projects coming soon...
                </div>
              )}
              <div className="border-t border-gray-800" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
