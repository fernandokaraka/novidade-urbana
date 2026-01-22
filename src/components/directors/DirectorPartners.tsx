'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import type { Director } from '@/data/directors'

interface DirectorPartnersProps {
  director: Director
}

export function DirectorPartners({ director }: DirectorPartnersProps) {
  if (director.partners.length === 0) {
    return null
  }

  const isGrid = director.partners.length > 2

  return (
    <section className="py-8 lg:py-12">
      <div className="container-site px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-6 lg:gap-10"
        >
          {/* Partner Logos */}
          <div className={isGrid ? 'grid grid-cols-2 gap-4' : 'flex items-center gap-6 lg:gap-10'}>
            {director.partners.map((partner, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden p-3"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={100}
                  className="object-contain w-[100px] h-[100px]"
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <p
            className="flex-1 min-w-[280px]"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '1.7',
              color: '#94969C',
            }}
          >
            {director.partnersText || (
              <>
                Colaborou dentro de projetos em parceria com gravadoras conhecidas mundialmente como:{' '}
                <span style={{ color: '#94969C', fontWeight: 700 }}>
                  {director.partners.map((p) => p.name).join(', ').replace(/, ([^,]*)$/, ' e $1')}.
                </span>
              </>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
