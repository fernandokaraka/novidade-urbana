'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import type { Director } from '@/data/directors'

interface DirectorHighlightProjectsProps {
  director: Director
}

export function DirectorHighlightProjects({ director }: DirectorHighlightProjectsProps) {
  if (!director.highlightProjects) {
    return null
  }

  const { introItems, projects, galleryImages } = director.highlightProjects

  return (
    <section className="py-16 lg:py-24 bg-white">
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
              className="text-black text-[32px] lg:text-[48px]"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              PROJETOS DE{' '}
            </span>
            <span
              className="text-brand-yellow text-[36px] lg:text-[56px] px-2"
              style={{
                fontFamily: 'var(--font-yellowtail)',
                fontWeight: 400,
                backgroundColor: '#FCFF00',
                color: '#000',
              }}
            >
              Destaque
            </span>
          </h2>
        </motion.div>

        {/* Intro Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <ul className="space-y-2">
            {introItems.map((item, index) => (
              <li
                key={index}
                className="text-black"
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
        </motion.div>

        {/* Highlight Projects */}
        <div className="space-y-10 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {/* Project Title Box */}
              <div
                className="inline-block px-4 py-2 mb-4"
                style={{
                  backgroundColor: '#FCFF00',
                }}
              >
                <h3
                  className="text-black"
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontSize: '16px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Project Items */}
              <ul className="space-y-2">
                {project.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-black"
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
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Projeto ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
