import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'

export function AnimatedNumber({ value, suffix = '', duration = 1.25 }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    })

    return () => controls.stop()
  }, [duration, value])

  return (
    <>
      {displayValue}
      {suffix}
    </>
  )
}
