'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import type { Director } from '@/data/directors'

interface DirectorCurrentRoleProps {
  director: Director
}

export function DirectorCurrentRole({ director }: DirectorCurrentRoleProps) {
  const isLight = director.currentRole.lightBackground

  return (
    <section className={`${isLight ? 'bg-white' : ''} pt-8 lg:pt-12 pb-16 lg:pb-24`}>
      <div className="container-site px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title - only show on dark background */}
          {!isLight && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2>
                <span
                  className="text-brand-yellow text-[36px] lg:text-[56px]"
                  style={{
                    fontFamily: 'var(--font-yellowtail)',
                    fontWeight: 400,
                  }}
                >
                  Atuação{' '}
                </span>
                <span
                  className="text-white text-[32px] lg:text-[48px]"
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Atual
                </span>
              </h2>
            </motion.div>
          )}

          {/* Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {director.currentRole.description.map((paragraph, index) => (
              <p
                key={index}
                className={`${isLight ? 'text-black' : 'text-white'} text-center mb-8 last:mb-0`}
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '1.8',
                }}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
