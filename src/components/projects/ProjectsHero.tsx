'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const featuredProjects = [
  {
    id: 1,
    title: 'Grammy',
    description: 'Thalles Roberto teve seu trabalho reconhecido internacionalmente com indicação ao Grammy Latino, um dos prêmios mais importantes da música mundial.',
    image: '/images/projects/grammy-card-home-background.png',
    size: 'large',
  },
  {
    id: 2,
    title: 'Reveillon 2026',
    description: 'Título de Maior Réveillon do Mundo.',
    image: '/images/projects/reveillon-2026-home-card-bg.png',
    size: 'large',
  },
  {
    id: 3,
    title: 'Feat. Jorge',
    description: 'Encontro poderoso entre vozes e propósito cristão.',
    image: '/images/projects/feat-jorge-card-home-bg.png',
    size: 'small',
  },
  {
    id: 4,
    title: 'Av. do Arrependimento',
    description: 'Produção: Djuch Borges.',
    image: '/images/projects/av-do-arrependimento-card-home-bg.png',
    size: 'small',
  },
  {
    id: 5,
    title: 'DEUS GRANDE',
    description: 'MARCELO AGUIAR',
    image: '/images/projects/deus-grande-card-home-bg.png',
    size: 'small',
  },
]

export function ProjectsHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-black min-h-screen">
      <div className="container-site">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 lg:mb-16"
        >
          <span
            className="text-4xl md:text-6xl lg:text-7xl"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            Projetos{' '}
          </span>
          <span
            className="text-5xl md:text-7xl lg:text-8xl"
            style={{
              fontFamily: 'var(--font-yellowtail)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              color: '#FCFF00',
            }}
          >
            Especiais
          </span>
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Large Projects */}
          <div className="space-y-6">
            {featuredProjects.filter(p => p.size === 'large').map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{ height: '400px' }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3
                    style={{
                      fontFamily: 'var(--font-tt-runs)',
                      fontSize: '32px',
                      fontWeight: 700,
                      lineHeight: '38px',
                      color: '#FFFFFF',
                    }}
                    className="mb-3"
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-tt-runs)',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '20px',
                      color: '#CCCCCC',
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Small Projects */}
          <div className="grid grid-cols-1 gap-6">
            {featuredProjects.filter(p => p.size === 'small').map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 2) * 0.1 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{ height: '250px' }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    style={{
                      fontFamily: 'var(--font-tt-runs)',
                      fontSize: '24px',
                      fontWeight: 700,
                      lineHeight: '28px',
                      color: '#FFFFFF',
                    }}
                    className="mb-2"
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-tt-runs)',
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '18px',
                      color: '#CCCCCC',
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
