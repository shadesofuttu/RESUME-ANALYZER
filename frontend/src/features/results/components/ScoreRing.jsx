import { motion } from 'framer-motion'
import { AnimatedNumber } from './AnimatedNumber.jsx'

export function ScoreRing({ score }) {
  const radius = 94
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      className="flex min-h-96 flex-col items-center justify-center rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-7 text-center shadow-[0_24px_90px_rgba(15,23,42,0.36),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl"
    >
      <div className="relative flex size-64 items-center justify-center">
        <div className="absolute inset-8 rounded-full bg-violet-500/10 blur-3xl" />
        <svg className="relative size-64 -rotate-90" viewBox="0 0 240 240">
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="15"
          />
          <motion.circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="url(#scoreGradient)"
            strokeLinecap="round"
            strokeWidth="15"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.35, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="55%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute text-center">
          <p className="text-sm font-medium text-slate-400">Resume Score</p>
          <div className="mt-2 text-5xl font-semibold tracking-normal text-white">
            <AnimatedNumber value={score} suffix="/100" duration={1.35} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}
