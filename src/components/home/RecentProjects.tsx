'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container, Section } from '@/components/layout'
import { ProjectCard } from './ProjectCard'
import { staggerContainer } from '@/lib/animations'

// Mock data - será substituído por dados do banco
const recentProjects = [
  {
    title: 'Festival de Verão 2024',
    slug: 'festival-verao-2024',
    excerpt:
      'O maior festival de música urbana do país reuniu mais de 50 mil pessoas em três dias de shows.',
    featuredImage: undefined,
    publishedAt: new Date('2024-01-15'),
    categories: ['Festivais', 'Shows'],
  },
  {
    title: 'Turnê Internacional Europa',
    slug: 'turne-internacional-europa',
    excerpt:
      'Nossos artistas levaram a música brasileira para 10 países europeus em uma turnê histórica.',
    featuredImage: undefined,
    publishedAt: new Date('2024-02-10'),
    categories: ['Turnês'],
  },
  {
    title: 'Lançamento Álbum Coletivo',
    slug: 'lancamento-album-coletivo',
    excerpt:
      'Projeto colaborativo reuniu 15 artistas da casa em um álbum de impacto cultural.',
    featuredImage: undefined,
    publishedAt: new Date('2024-03-05'),
    categories: ['Lançamentos'],
  },
]

export function RecentProjects() {
  return (
    <Section background="gray" padding="xl">
      <Container>
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-yellow uppercase tracking-wider text-sm font-bold mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Nosso Trabalho
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-h2"
            >
              Projetos <span className="text-brand-yellow">Recentes</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase text-black hover:text-brand-yellow transition-colors"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ver Todos
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {recentProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </motion.div>

        {/* Mobile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center md:hidden"
        >
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase text-black hover:text-brand-yellow transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ver Todos os Projetos
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}
