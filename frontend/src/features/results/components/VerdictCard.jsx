import { ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export function VerdictCard({ verdict }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 330, damping: 28 }}
      className="rounded-[1.8rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-400/10 via-white/[0.055] to-sky-500/10 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.34),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-200 shadow-[0_0_34px_rgba(16,185,129,0.18)]">
          <ShieldCheck size={25} />
        </div>
        <div>
          <div className="mb-3 inline-flex rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-100">
            {verdict.badge}
          </div>
          <h2 className="text-2xl font-semibold tracking-normal text-white">{verdict.label}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">{verdict.summary}</p>
        </div>
      </div>
    </motion.article>
  )
}
