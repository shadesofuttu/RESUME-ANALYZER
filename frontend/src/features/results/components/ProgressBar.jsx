import { motion } from 'framer-motion'
import { AnimatedNumber } from './AnimatedNumber.jsx'

export function ProgressBar({ label, value, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-400/10 text-sky-200">
            <Icon size={18} />
          </div>
          <p className="text-sm font-semibold text-white">{label}</p>
        </div>
        <p className="text-sm font-semibold text-sky-100">
          <AnimatedNumber value={value} suffix="%" duration={1.1} />
        </p>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/[0.07]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-sky-400 shadow-[0_0_26px_rgba(14,165,233,0.35)]"
        />
      </div>
    </div>
  )
}
