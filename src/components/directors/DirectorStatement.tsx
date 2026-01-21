'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import type { Director } from '@/data/directors'

interface DirectorStatementProps {
  director: Director
}

export function DirectorStatement({ director }: DirectorStatementProps) {
  if (!director.statementText) {
    return null
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="container-site px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex items-center justify-between gap-8"
        >
          <p
            className="text-white max-w-3xl"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '1.7',
            }}
          >
            {director.statementText}
          </p>

          {/* Ícone de setas amarelas */}
          <div className="flex-shrink-0 hidden lg:block">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Seta central */}
              <path
                d="M60 10 L60 70 M40 50 L60 70 L80 50"
                stroke="#FCFF00"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="rotate(180 60 40)"
              />
              {/* Seta esquerda */}
              <path
                d="M30 30 L30 90 M10 70 L30 90 L50 70"
                stroke="#FCFF00"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="rotate(180 30 60)"
              />
              {/* Seta direita */}
              <path
                d="M90 30 L90 90 M70 70 L90 90 L110 70"
                stroke="#FCFF00"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="rotate(180 90 60)"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
