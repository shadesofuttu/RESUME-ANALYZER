import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
]

const MotionLink = motion.create(Link)

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-black/45 shadow-[0_18px_60px_rgba(15,23,42,0.32)] backdrop-blur-2xl'
          : 'border-white/5 bg-black/10 backdrop-blur-md'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <MotionLink
          to="/"
          className="bg-gradient-to-r from-white via-violet-100 to-sky-200 bg-clip-text text-xl font-semibold tracking-normal text-transparent"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 380, damping: 26 }}
        >
          ResumeIQ
        </MotionLink>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="group relative rounded-md px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 420, damping: 30 }}
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 to-sky-400 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>

        <div className="hidden md:block">
          <MotionLink
            to="/analyze"
            className="inline-flex h-11 items-center justify-center rounded-full border border-violet-300/20 bg-gradient-to-r from-violet-500 to-sky-500 px-5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(124,58,237,0.42)] transition-shadow hover:shadow-[0_0_46px_rgba(14,165,233,0.42)]"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 30 }}
          >
            Analyze Resume
          </MotionLink>
        </div>

        <motion.button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          whileTap={{ scale: 0.94 }}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/analyze"
                className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.35)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Analyze Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
