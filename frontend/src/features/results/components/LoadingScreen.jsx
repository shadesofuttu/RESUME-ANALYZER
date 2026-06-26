import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_90px_rgba(15,23,42,0.34),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl sm:p-7">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="text-center lg:text-left">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            className="mx-auto flex size-16 items-center justify-center rounded-full border border-violet-300/20 bg-violet-500/10 text-violet-100 shadow-[0_0_40px_rgba(124,58,237,0.35)] lg:mx-0"
          >
            <Loader2 size={30} />
          </motion.div>
          <motion.h2
            animate={{ opacity: [0.62, 1, 0.62] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-5 text-2xl font-semibold tracking-normal text-white"
          >
            Analyzing Resume...
          </motion.h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Placeholder loading state for the future FastAPI processing flow.
          </p>
        </div>

        <div className="grid gap-3">
          {[0, 1, 2, 3].map((item) => (
            <motion.div
              key={item}
              animate={{ opacity: [0.35, 0.75, 0.35] }}
              transition={{ delay: item * 0.15, duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="h-16 rounded-2xl border border-white/8 bg-gradient-to-r from-white/[0.045] via-white/[0.08] to-white/[0.045]"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
