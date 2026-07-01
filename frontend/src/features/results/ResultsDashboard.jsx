import { motion } from 'framer-motion'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import { ProgressBar } from './components/ProgressBar.jsx'
import { RecommendationCard } from './components/RecommendationCard.jsx'
import { ScoreCard } from './components/ScoreCard.jsx'
import { ScoreRing } from './components/ScoreRing.jsx'
import { SkillPill } from './components/SkillPill.jsx'
import { VerdictCard } from './components/VerdictCard.jsx'
import { CategoryCard } from './components/CategoryCard.jsx'
import { mapApiToDashboard } from './mapper'

const sectionReveal = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.62, ease: 'easeOut' },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export function ResultsDashboard({ data }) {
  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#03040a] text-white">
        <h1 className="text-2xl font-semibold">
          No analysis data found.
        </h1>
      </main>
    )
  }
  const dashboardData = mapApiToDashboard(data)
  return (
    <main className="relative isolate overflow-hidden bg-[#03040a] px-4 py-12 text-white sm:px-6 lg:px-8">
      <ResultsBackground />

      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
            AI analysis report
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
            Resume Analysis Complete
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Your resume has been evaluated across ATS readiness, semantic alignment,
            skill coverage, and role fit using dummy dashboard data.
          </p>
        </motion.header>

        <motion.section
          variants={stagger}
          initial="initial"
          animate="animate"
          className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {dashboardData.stats.map((stat) => (
            <ScoreCard key={stat.label} {...stat} />
          ))}
        </motion.section>

        <motion.section
          {...sectionReveal}
          transition={{ ...sectionReveal.transition, delay: 0.1 }}
          className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <ScoreRing score={dashboardData.stats[0].value} />
          <div className="grid gap-6">
            <CategoryCard category={dashboardData.category} />
            <VerdictCard verdict={dashboardData.verdict} />
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          transition={{ ...sectionReveal.transition, delay: 0.16 }}
          className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]"
        >
          <SkillsPanel title="Detected Skills" skills={dashboardData.skills} variant="neutral" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
            <SkillsPanel title="Matching Skills" skills={dashboardData.matchingSkills} variant="match" />
            <SkillsPanel title="Missing Skills" skills={dashboardData.missingSkills} variant="missing" />
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          transition={{ ...sectionReveal.transition, delay: 0.22 }}
          className="mt-6"
        >
          <SectionTitle
            title="Recommendations"
            description="Prioritized improvements that can make the next resume version stronger."
          />
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dashboardData.recommendations.map((recommendation, index) => (
              <RecommendationCard
                key={index}
                recommendation={recommendation}
                index={index}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          transition={{ ...sectionReveal.transition, delay: 0.28 }}
          className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_24px_90px_rgba(15,23,42,0.36),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl sm:p-7"
        >
          <SectionTitle
            title="Analysis Breakdown"
            description="A detailed view of the scoring signals used by the dashboard."
          />
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            {dashboardData.breakdown.map((item) => (
              <ProgressBar key={item.label} {...item} />
            ))}
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          transition={{ ...sectionReveal.transition, delay: 0.34 }}
          className="mt-6"
        >
          <LoadingScreen />
        </motion.section>
      </div>
    </main>
  )
}

function SkillsPanel({ title, skills, variant }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 330, damping: 28 }}
      className="rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_24px_90px_rgba(15,23,42,0.34),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl sm:p-7"
    >
      <h2 className="text-xl font-semibold tracking-normal text-white">{title}</h2>
      <div className="mt-5 flex flex-wrap gap-2.5">
        {skills.map((skill, index) => (
          <SkillPill key={skill} skill={skill} variant={variant} index={index} />
        ))}
      </div>
    </motion.article>
  )
}

function SectionTitle({ title, description }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-normal text-white">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{description}</p>
    </div>
  )
}

function ResultsBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(124,58,237,0.24),transparent_28%),radial-gradient(circle_at_84%_14%,rgba(14,165,233,0.2),transparent_30%),radial-gradient(circle_at_50%_95%,rgba(168,85,247,0.12),transparent_34%)]" />
      <div className="absolute left-1/2 top-10 h-[28rem] w-[58rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/18 via-fuchsia-500/10 to-sky-500/18 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_74%)]" />
    </div>
  )
}
