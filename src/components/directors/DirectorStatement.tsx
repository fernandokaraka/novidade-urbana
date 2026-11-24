'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import type { Director } from '@/data/directors'

interface DirectorStatementProps {
  director: Director
}

const paragraphStyle = {
  fontFamily: 'var(--font-tt-runs)',
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '1.7',
  color: '#94969C',
} as const

function ArrowsIcon() {
  return (
    <div className="flex-shrink-0 hidden lg:block">
      <Image
        src="/images/directors/fabio-principe/setas.svg"
        alt="Setas decorativas"
        width={180}
        height={180}
      />
    </div>
  )
}

export function DirectorStatement({ director }: DirectorStatementProps) {
  const paragraphs =
    director.statementParagraphs && director.statementParagraphs.length > 0
      ? director.statementParagraphs
      : director.statementText
        ? [director.statementText]
        : []

  if (paragraphs.length === 0) {
    return null
  }

  const lastIndex = paragraphs.length - 1

  return (
    <section className="py-12 lg:py-16">
      <div className="container-site px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-10 lg:space-y-14"
        >
          {paragraphs.map((text, index) =>
            index === lastIndex ? (
              // Ícone de setas amarelas ao lado do último parágrafo
              <div key={index} className="flex items-center gap-12">
                <p className="max-w-3xl" style={paragraphStyle}>
                  {text}
                </p>
                <ArrowsIcon />
              </div>
            ) : (
              <p key={index} className="max-w-3xl" style={paragraphStyle}>
                {text}
              </p>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
