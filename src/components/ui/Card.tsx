import { HTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardHover } from '@/lib/animations'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  children: ReactNode
}

export function Card({
  children,
  className,
  hover = false,
  ...props
}: CardProps) {
  const baseStyles =
    'bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden'

  if (hover) {
    return (
      <motion.div
        className={cn(baseStyles, className)}
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={cn(baseStyles, className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-6 py-4 border-b border-gray-200', className)} {...props}>
      {children}
    </div>
  )
}

export function CardBody({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-6 py-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('px-6 py-4 border-t border-gray-200 bg-gray-50', className)}
      {...props}
    >
      {children}
    </div>
  )
}
