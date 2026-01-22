'use client'

import Image from 'next/image'
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
          className="flex items-center gap-12"
        >
          <p
            className="max-w-3xl"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '1.7',
              color: '#94969C',
            }}
          >
            {director.statementText}
          </p>

          {/* Ícone de setas amarelas */}
          <div className="flex-shrink-0 hidden lg:block">
            <Image
              src="/images/directors/fabio-principe/setas.svg"
              alt="Setas decorativas"
              width={180}
              height={180}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
