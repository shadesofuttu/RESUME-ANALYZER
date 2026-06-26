import { ArrowRight, Brain, CheckCircle2, Play, Sparkles, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const skills = ['Python', 'FastAPI', 'Machine Learning', 'React']

const metrics = [
  { label: 'Resume Score', value: '92/100', accent: 'from-violet-400 to-fuchsia-300' },
  { label: 'ATS Match', value: '88%', accent: 'from-sky-400 to-cyan-300' },
  { label: 'Semantic Match', value: '94%', accent: 'from-indigo-300 to-blue-300' },
]

const MotionLink = motion.create(Link)

const particles = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${8 + index * 7}%`,
  top: `${18 + (index % 5) * 13}%`,
  delay: index * 0.28,
}))

export function Hero() {
  return (
    <main className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#03040a]">
      <AuroraBackground />

      <section className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease: 'easeOut' }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
          >
            <Sparkles size={16} className="text-violet-300" />
            AI resume intelligence for modern job seekers
          </motion.div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Land More Interviews with{' '}
            <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-sky-200 bg-clip-text text-transparent">
              AI Resume Intelligence
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            ResumeIQ analyzes your resume using ATS scoring, semantic AI matching,
            and personalized recommendations so you can apply with confidence.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6, ease: 'easeOut' }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <MotionLink
              to="/analyze"
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-6 text-sm font-semibold text-white shadow-[0_0_45px_rgba(124,58,237,0.44)] transition-shadow hover:shadow-[0_0_58px_rgba(14,165,233,0.44)]"
            >
              Analyze Resume
              <ArrowRight size={18} />
            </MotionLink>

            <motion.a
              href="#demo"
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-colors hover:bg-white/[0.09]"
            >
              <Play size={17} />
              See Demo
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.75, ease: 'easeOut' }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative rounded-[2rem] border border-white/12 bg-white/[0.07] p-3 shadow-[0_30px_120px_rgba(15,23,42,0.55)] backdrop-blur-2xl"
          >
            <div className="rounded-[1.45rem] border border-white/10 bg-[#070914]/92 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-6">
              <DashboardHeader />

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                <DetectedSkills />
                <RecommendationCard />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

function AuroraBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(124,58,237,0.26),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(14,165,233,0.22),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(168,85,247,0.16),transparent_32%)]" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/25 via-fuchsia-500/12 to-sky-500/25 blur-3xl" />
      <div className="absolute -left-32 top-36 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-sky-500/16 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute size-1 rounded-full bg-sky-200/45"
          style={{ left: particle.left, top: particle.top }}
          animate={{ opacity: [0.16, 0.62, 0.16], y: [0, -14, 0] }}
          transition={{
            delay: particle.delay,
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function DashboardHeader() {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
          <Brain size={16} className="text-violet-300" />
          ResumeIQ Analysis
        </div>
        <h2 className="mt-2 text-xl font-semibold tracking-normal text-white">
          Senior AI Engineer Resume
        </h2>
      </div>
      <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
        Ready
      </div>
    </div>
  )
}

function MetricCard({ label, value, accent }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
      className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
    >
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <div className={`mt-3 bg-gradient-to-r ${accent} bg-clip-text text-3xl font-semibold text-transparent`}>
        {value}
      </div>
    </motion.div>
  )
}

function DetectedSkills() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
      className="rounded-2xl border border-white/10 bg-white/[0.055] p-5"
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <Target size={17} className="text-sky-300" />
        Detected Skills
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-sm font-medium text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function RecommendationCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
      className="rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-500/12 to-sky-500/10 p-5"
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <CheckCircle2 size={17} className="text-violet-200" />
        AI Recommendation
      </div>
      <p className="mt-4 text-base leading-7 text-slate-200">
        "Improve ATS keywords for better recruiter visibility."
      </p>
    </motion.div>
  )
}
