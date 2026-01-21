'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import type { Director } from '@/data/directors'

interface DirectorTextSectionsProps {
  director: Director
}

export function DirectorTextSections({ director }: DirectorTextSectionsProps) {
  if (!director.textSections || director.textSections.length === 0) {
    return null
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container-site px-4">
        <div className="max-w-3xl mx-auto space-y-16">
          {director.textSections.map((section, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center"
            >
              {/* Title */}
              <h3
                className="text-brand-yellow mb-6"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '24px',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                }}
              >
                {section.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-white/80"
                    style={{
                      fontFamily: 'var(--font-tt-runs)',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '1.6',
                    }}
                  >
                    - {item}
                  </li>
                ))}
              </ul>

              {/* Separator line (except for last item) */}
              {index < director.textSections!.length - 1 && (
                <div className="mt-12 border-t border-white/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
