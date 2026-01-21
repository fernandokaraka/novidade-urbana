'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import type { Director } from '@/data/directors'

interface DirectorProjectsProps {
  director: Director
}

export function DirectorProjects({ director }: DirectorProjectsProps) {
  if (director.projects.length === 0) {
    return null
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container-site px-4">
        <div className="space-y-16">
          {director.projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                project.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <p
                  className="text-white"
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '1.8',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {project.text}
                </p>
              </div>

              {/* Image */}
              <div className="flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.imageCaption || `Projeto ${index + 1}`}
                  width={450}
                  height={420}
                  className="object-cover"
                  style={{ borderRadius: '24px' }}
                />
                {project.imageCaption && (
                  <p
                    className="text-white text-center mt-3"
                    style={{
                      fontFamily: 'var(--font-tt-runs)',
                      fontSize: '14px',
                      fontWeight: 600,
                    }}
                  >
                    {project.imageCaption}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
