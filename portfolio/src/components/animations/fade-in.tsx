'use client'

import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
}: FadeInProps) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  const isVisible = entry?.isIntersecting

  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={directionVariants[direction]}
      animate={isVisible ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}
