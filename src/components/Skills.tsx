import { motion } from 'framer-motion'
import { 
  Code2, 
  Cloud, 
  Cpu, 
  BarChart3, 
  Brain, 
  LineChart, 
  Database, 
  Terminal, 
  CheckSquare 
} from 'lucide-react'

const skillGroups = [
  {
    label: 'Languages & core',
    icon: Code2,
    colorClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    items: ['Python', 'SQL', 'PySpark'],
  },
  {
    label: 'Cloud & platforms',
    icon: Cloud,
    colorClass: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    items: ['Microsoft Azure', 'Microsoft Fabric', 'Databricks', 'Azure Data Lake Gen2'],
  },
  {
    label: 'Data engineering & orchestration',
    icon: Cpu,
    colorClass: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    items: ['Azure Data Factory', 'Fabric Data Factory', 'Microsoft SSIS', 'ETL/ELT Pipeline Design', 'Medallion Architecture', 'Apache Spark'],
  },
  {
    label: 'Data warehousing & BI',
    icon: BarChart3,
    colorClass: 'bg-teal-500/10 text-teal-400 border border-teal-500/20',
    items: ['SQL Server', 'SSAS', 'Power BI', 'Star Schema Design', 'Snowflake Schema Design', 'Microsoft Excel'],
  },
  {
    label: 'Machine learning & AI',
    icon: Brain,
    colorClass: 'bg-green-500/10 text-green-400 border border-green-500/20',
    items: ['Scikit-Learn', 'NumPy', 'Pandas', 'Matplotlib', 'Time Series Forecasting', 'Ensemble Methods', 'Supervised Learning', 'Unsupervised Learning', 'SHAP', 'LLM Integration'],
  },
  {
    label: 'Statistical & analytical',
    icon: LineChart,
    colorClass: 'bg-red-500/10 text-red-400 border border-red-500/20',
    items: ['Feature Engineering', 'Statistical Modelling', 'Predictive Analytics', 'Model Evaluation & Tuning'],
  },
  {
    label: 'Databases & storage',
    icon: Database,
    colorClass: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
    items: ['SQL Server', 'MySQL', 'Firebase', 'MongoDB'],
  },
  {
    label: 'Software & DevOps',
    icon: Terminal,
    colorClass: 'bg-gray-500/10 text-gray-400 border border-gray-500/20',
    items: ['FastAPI', 'React', 'GitHub', 'BitBucket', 'Railway', 'Firebase'],
  },
  {
    label: 'Methodologies & practices',
    icon: CheckSquare,
    colorClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    items: ['Technical Team Leadership', 'End-to-End System Ownership', 'Cross-Functional Agile', 'Proactive Problem Solving'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-black">
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

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gIdx) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: gIdx * 0.05 }}
                className="bg-[#1e1e1e] border border-[#2d2d2d] rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Header: Icon + Category Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${group.colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-medium text-lg leading-snug">
                      {group.label}
                    </h3>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-light text-gray-300 bg-[#262626] border border-[#383838] rounded-lg transition-colors hover:border-gray-500 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
