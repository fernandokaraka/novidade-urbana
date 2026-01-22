'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import type { Director } from '@/data/directors'

interface DirectorTimelineProps {
  director: Director
}

export function DirectorTimeline({ director }: DirectorTimelineProps) {
  if (!director.timeline || director.timeline.length === 0) {
    return null
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container-site px-4">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2>
            <span
              className="text-white text-[32px] lg:text-[48px]"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              EXPERIÊNCIA{' '}
            </span>
            <span
              className="text-brand-yellow text-[36px] lg:text-[56px]"
              style={{
                fontFamily: 'var(--font-yellowtail)',
                fontWeight: 400,
              }}
            >
              Profissional
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical amarela */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-brand-yellow" />

          <div className="space-y-12">
            {director.timeline.map((entry, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-brand-yellow" />

                {/* Company & Location */}
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#94969C',
                  }}
                >
                  {entry.company} – {entry.location}
                </h3>

                {/* Role & Period */}
                <p
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#94969C',
                  }}
                >
                  {entry.role} | {entry.period}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {entry.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={{
                        fontFamily: 'var(--font-tt-runs)',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.6',
                        color: '#94969C',
                      }}
                    >
                      - {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
