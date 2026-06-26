import { motion } from 'framer-motion'

const variants = {
  neutral: 'border-white/10 bg-white/[0.07] text-slate-200 hover:border-sky-300/30',
  match: 'border-emerald-300/20 bg-emerald-400/10 text-emerald-100 hover:border-emerald-200/40',
  missing: 'border-orange-300/20 bg-orange-500/10 text-orange-100 hover:border-orange-200/40',
}

export function SkillPill({ skill, variant = 'neutral', index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.32, ease: 'easeOut' }}
      whileHover={{ y: -2, scale: 1.04 }}
      className={`inline-flex rounded-full border px-3.5 py-2 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors ${variants[variant]}`}
    >
      {skill}
    </motion.span>
  )
}
