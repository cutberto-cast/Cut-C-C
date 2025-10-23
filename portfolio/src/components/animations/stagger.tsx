'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  duration?: number
}

export function Stagger({
  children,
  className,
  staggerDelay = 0.1,
  duration = 0.6,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0,
          },
        },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
