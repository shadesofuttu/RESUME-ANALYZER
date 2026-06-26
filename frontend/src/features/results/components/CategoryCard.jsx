import { motion } from 'framer-motion'

export function CategoryCard({ category }) {
  const Icon = category.icon

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 330, damping: 28 }}
      className="rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_90px_rgba(15,23,42,0.34),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-400/10 text-sky-200 shadow-[0_0_34px_rgba(14,165,233,0.22)]">
          <Icon size={25} />
        </div>
        <div>
          <div className="mb-3 inline-flex rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-100">
            {category.badge}
          </div>
          <h2 className="text-2xl font-semibold tracking-normal text-white">{category.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">{category.description}</p>
        </div>
      </div>
    </motion.article>
  )
}
