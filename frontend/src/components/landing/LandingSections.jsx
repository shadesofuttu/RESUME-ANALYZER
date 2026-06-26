import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Download,
  Layers3,
  Link2,
  MessageSquareText,
  Radar,
  ScanSearch,
  Sparkles,
  Tags,
  UploadCloud,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionLink = motion.create(Link)

const features = [
  {
    title: 'ATS Analysis',
    description: 'Measure how closely your resume aligns with job-screening systems and recruiter filters.',
    icon: ScanSearch,
  },
  {
    title: 'Semantic AI Matching',
    description: 'Compare meaning, context, and relevance beyond simple keyword overlap.',
    icon: Brain,
  },
  {
    title: 'Skill Detection',
    description: 'Automatically identify technical skills, frameworks, tools, and role signals.',
    icon: Tags,
  },
  {
    title: 'Resume Score',
    description: 'Get a clear readiness score that summarizes the strength of your profile.',
    icon: BarChart3,
  },
  {
    title: 'AI Recommendations',
    description: 'Receive practical next steps to improve visibility and interview conversion.',
    icon: Sparkles,
  },
  {
    title: 'Resume Categorization',
    description: 'Understand which role family your resume currently maps to most strongly.',
    icon: Layers3,
  },
]

const steps = [
  {
    title: 'Upload Resume',
    description: 'Start with a PDF resume so ResumeIQ can extract and evaluate your content.',
    icon: UploadCloud,
  },
  {
    title: 'Paste Job Description',
    description: 'Add the target job description to compare against real role requirements.',
    icon: MessageSquareText,
  },
  {
    title: 'AI Analysis',
    description: 'ResumeIQ evaluates ATS fit, semantic match, detected skills, and profile strength.',
    icon: Brain,
  },
  {
    title: 'Download Results',
    description: 'Use the final report to refine your resume and apply with stronger positioning.',
    icon: Download,
  },
]

const comparisons = [
  {
    label: 'Traditional Checkers',
    points: ['Keyword counting', 'Generic resume tips', 'Limited job context'],
    muted: true,
  },
  {
    label: 'ResumeIQ',
    points: ['ATS and semantic scoring', 'Role-aware recommendations', 'Clear skill and category intelligence'],
    muted: false,
  },
]

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.58, ease: 'easeOut' },
}

export function LandingSections() {
  return (
    <main className="relative overflow-hidden bg-[#03040a] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[34rem] w-[62rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/12 via-fuchsia-500/8 to-sky-500/12 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.026)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]" />
      </div>

      <FeaturesSection />
      <HowItWorksSection />
      <WhyResumeIqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
        <Sparkles size={15} className="text-violet-300" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
        {description}
      </p>
    </motion.div>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Intelligence layer"
          title="Everything your resume checker should understand"
          description="ResumeIQ combines structured ATS feedback with semantic AI signals so your resume is evaluated like a modern hiring workflow."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }) {
  const Icon = feature.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.28),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl transition-colors hover:border-violet-300/25 hover:bg-white/[0.075]"
    >
      <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-500/20 to-sky-500/12 text-violet-100 shadow-[0_0_34px_rgba(124,58,237,0.22)]">
        <Icon size={23} />
      </div>
      <h3 className="text-xl font-semibold tracking-normal text-white">{feature.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{feature.description}</p>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.article>
  )
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Workflow"
          title="From upload to action plan in four steps"
          description="A focused analysis flow that turns a resume and job description into clear optimization guidance."
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-violet-400/0 via-violet-300/40 to-sky-300/0 lg:left-1/2 lg:block" />
          <div className="grid gap-6">
            {steps.map((step, index) => (
              <TimelineStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineStep({ step, index }) {
  const Icon = step.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
      className={`relative grid items-center gap-5 lg:grid-cols-2 ${isEven ? '' : 'lg:[&>article]:col-start-2'}`}
    >
      <motion.article
        whileHover={{ y: -4 }}
        className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.28),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl"
      >
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 text-white shadow-[0_0_34px_rgba(14,165,233,0.25)]">
            <Icon size={22} />
          </div>
          <div>
            <p className="text-sm font-semibold text-sky-200">Step {index + 1}</p>
            <h3 className="mt-1 text-xl font-semibold tracking-normal text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{step.description}</p>
          </div>
        </div>
      </motion.article>

      <div className="absolute left-6 top-1/2 hidden size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-sky-300 shadow-[0_0_28px_rgba(14,165,233,0.55)] lg:left-1/2 lg:block" />
    </motion.div>
  )
}

function WhyResumeIqSection() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why ResumeIQ"
          title="Built for modern hiring, not generic resume advice"
          description="Traditional resume checkers stop at surface-level suggestions. ResumeIQ focuses on job-specific signal quality."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {comparisons.map((comparison, index) => (
            <ComparisonCard key={comparison.label} comparison={comparison} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonCard({ comparison, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08, duration: 0.52, ease: 'easeOut' }}
      whileHover={{ y: -5 }}
      className={`rounded-[1.8rem] border p-7 shadow-[0_24px_90px_rgba(15,23,42,0.32),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl ${
        comparison.muted
          ? 'border-white/10 bg-white/[0.045]'
          : 'border-violet-300/24 bg-gradient-to-br from-violet-500/14 to-sky-500/10'
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-normal text-white">{comparison.label}</h3>
        {!comparison.muted && (
          <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
            Recommended
          </div>
        )}
      </div>

      <div className="mt-7 space-y-4">
        {comparison.points.map((point) => (
          <div key={point} className="flex items-center gap-3">
            <CheckCircle2
              size={19}
              className={comparison.muted ? 'text-slate-500' : 'text-sky-200'}
            />
            <p className={comparison.muted ? 'text-slate-400' : 'text-slate-100'}>{point}</p>
          </div>
        ))}
      </div>
    </motion.article>
  )
}

function CtaSection() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        {...reveal}
        className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.065] p-8 text-center shadow-[0_30px_120px_rgba(15,23,42,0.52),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-12"
      >
        <div className="absolute left-1/2 top-0 h-44 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/20 to-sky-500/20 blur-3xl" />
        <div className="relative">
          <div className="mx-auto mb-5 flex size-13 items-center justify-center rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-500/20 to-sky-500/15 text-violet-100">
            <Radar size={25} />
          </div>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl">
            Ready to improve your next application?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Upload your resume, compare it to a target job, and get a clearer path to a stronger application.
          </p>
          <MotionLink
            to="/analyze"
            whileHover={{ y: -2, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-6 text-sm font-semibold text-white shadow-[0_0_48px_rgba(124,58,237,0.42)] transition-shadow hover:shadow-[0_0_60px_rgba(14,165,233,0.42)]"
          >
            Analyze Resume
            <ArrowRight size={18} />
          </MotionLink>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            to="/"
            className="bg-gradient-to-r from-white via-violet-100 to-sky-200 bg-clip-text text-xl font-semibold tracking-normal text-transparent"
          >
            ResumeIQ
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            AI-powered resume intelligence for ATS alignment, semantic matching, and clearer job-search decisions.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-3">
            <a
              href="#github"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition-colors hover:bg-white/[0.09] hover:text-white"
              aria-label="GitHub placeholder"
            >
              <Link2 size={18} />
            </a>
            <a
              href="#linkedin"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition-colors hover:bg-white/[0.09] hover:text-white"
              aria-label="LinkedIn placeholder"
            >
              <Link2 size={18} />
            </a>
          </div>
          <p className="text-sm text-slate-500">© 2026 ResumeIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
