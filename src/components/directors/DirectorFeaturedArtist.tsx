'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import type { Director } from '@/data/directors'

interface DirectorFeaturedArtistProps {
  director: Director
}

export function DirectorFeaturedArtist({ director }: DirectorFeaturedArtistProps) {
  if (!director.featuredArtist) {
    return null
  }

  const { name, description, image } = director.featuredArtist

  return (
    <section className="py-16 lg:py-24">
      <div className="container-site px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col lg:flex-row gap-10 items-center"
        >
          {/* Text Content */}
          <div className="flex-1">
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700,
                lineHeight: '1.1',
              }}
            >
              {name}
            </h2>

            {description.map((paragraph, index) => (
              <p
                key={index}
                className="text-white/80 mb-4 last:mb-0"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '1.7',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image with yellow bottom border */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  width={450}
                  height={350}
                  className="object-cover"
                />
              </div>
              {/* Yellow bottom border */}
              <div
                className="absolute bottom-0 left-0 right-0 h-2"
                style={{ backgroundColor: '#FCFF00' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
