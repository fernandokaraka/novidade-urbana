import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/animations'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'black' | 'yellow'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
}

export function Section({
  children,
  className,
  background = 'white',
  padding = 'lg',
  animated = true,
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    black: 'bg-black text-white',
    yellow: 'bg-brand-yellow',
  }

  const paddingStyles = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 lg:py-20',
    xl: 'py-20 lg:py-32',
  }

  const classes = cn(
    backgroundStyles[background],
    paddingStyles[padding],
    className
  )

  if (animated) {
    return (
      <motion.section
        className={classes}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
      >
        {children}
      </motion.section>
    )
  }

  return <section className={classes}>{children}</section>
}
