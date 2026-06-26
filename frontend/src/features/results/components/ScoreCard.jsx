import { motion } from 'framer-motion'
import { AnimatedNumber } from './AnimatedNumber.jsx'

export function ScoreCard({ label, value, suffix, icon: Icon }) {
  return (
    <motion.article
      variants={{
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 330, damping: 28 }}
      className="group rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_24px_90px_rgba(15,23,42,0.34),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl transition-colors hover:border-sky-300/25 hover:bg-white/[0.075]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-400">{label}</p>
          <div className="mt-3 bg-gradient-to-r from-white via-violet-100 to-sky-200 bg-clip-text text-4xl font-semibold tracking-normal text-transparent">
            <AnimatedNumber value={value} suffix={suffix} />
          </div>
        </div>
        <div className="flex size-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-500/20 to-sky-500/12 text-violet-100 shadow-[0_0_34px_rgba(124,58,237,0.22)]">
          <Icon size={23} />
        </div>
      </div>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.article>
  )
}
