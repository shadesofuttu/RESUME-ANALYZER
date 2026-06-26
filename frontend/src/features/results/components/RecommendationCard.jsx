import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function RecommendationCard({ recommendation, index }) {
  const Icon = recommendation.icon || Sparkles

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.06, duration: 0.48, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_24px_90px_rgba(15,23,42,0.34),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl transition-colors hover:border-violet-300/25 hover:bg-white/[0.075]"
    >
      <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-500/20 to-sky-500/12 text-violet-100 shadow-[0_0_34px_rgba(124,58,237,0.2)]">
        <Icon size={23} />
      </div>
      <h3 className="text-lg font-semibold tracking-normal text-white">{recommendation.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{recommendation.description}</p>
    </motion.article>
  )
}
