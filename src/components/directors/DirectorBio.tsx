'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import type { Director } from '@/data/directors'

interface DirectorBioProps {
  director: Director
}

export function DirectorBio({ director }: DirectorBioProps) {
  if (director.fullBio.length === 0 && director.gallery.length === 0) {
    return null
  }

  return (
    <section className="pt-0 pb-16 lg:pb-24">
      <div className="container-site px-4">
        {/* Full Bio Text */}
        {director.fullBio.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto mb-16"
          >
            {director.fullBio.map((paragraph, index) => (
              <p
                key={index}
                className="text-white mb-6 last:mb-0"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '1.7',
                }}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        )}

        {/* Gallery */}
        {director.gallery.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {director.gallery.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  className="text-white text-center"
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontSize: '13px',
                    fontWeight: 400,
                    lineHeight: '1.5',
                  }}
                >
                  {item.caption}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
