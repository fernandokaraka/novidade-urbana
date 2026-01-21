'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Play } from 'lucide-react'

export function AboutVideo() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container-site px-4">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
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
              Lorem{' '}
            </span>
            <span
              className="text-brand-yellow text-[36px] lg:text-[56px]"
              style={{
                fontFamily: 'var(--font-yellowtail)',
                fontWeight: 400,
              }}
            >
              ipsum
            </span>
          </h2>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative mb-12 lg:mb-16"
        >
          <div
            className="relative w-full aspect-video bg-[#3a3a3a] rounded-2xl flex items-center justify-center cursor-pointer group overflow-hidden"
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            {/* Play Button */}
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
              <Play className="w-6 h-6 lg:w-8 lg:h-8 text-black ml-1" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-12 lg:mb-16"
        >
          <p
            className="text-white text-center"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.7',
            }}
          >
            Foi criada por profissionais experientes do meio musical — incluindo o{' '}
            <span className="text-brand-yellow font-bold">
              produtor Doninha em parceria com nomes como Marquinhos Acena, Fábio Príncipe e Marcelo Portuga
            </span>{' '}
            (ex-sócio da KondZilla) — com a missão de desenvolver carreiras, lançar projetos relevantes e dar visibilidade estratégica aos artistas do seu casting.
          </p>
        </motion.div>

        {/* Two Columns with Trophy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto"
        >
          {/* Left Column */}
          <motion.div variants={fadeInUp} className="text-white">
            <p
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.7',
              }}
            >
              <span className="text-brand-yellow font-bold">
                Representamos talentos como Thalles Roberto, Marcelo Aguiar e Marcados Gospel,
              </span>{' '}
              e têm se destacado por projetos especiais e colaborações artísticas.
            </p>
          </motion.div>

          {/* Center - Trophy Icon */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-brand-yellow"
            >
              {/* Trophy */}
              <path
                d="M55 15H25V25C25 33.284 31.716 40 40 40C48.284 40 55 33.284 55 25V15Z"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              {/* Left Handle */}
              <path
                d="M25 20H20C17.239 20 15 22.239 15 25V28C15 32.418 18.582 36 23 36H25"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              {/* Right Handle */}
              <path
                d="M55 20H60C62.761 20 65 22.239 65 25V28C65 32.418 61.418 36 57 36H55"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              {/* Stem */}
              <path
                d="M40 40V50"
                stroke="currentColor"
                strokeWidth="3"
              />
              {/* Base */}
              <path
                d="M30 50H50V55C50 57.761 47.761 60 45 60H35C32.239 60 30 57.761 30 55V50Z"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              {/* Bottom Base */}
              <path
                d="M25 60H55V65H25V60Z"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              {/* Star */}
              <path
                d="M40 22L41.5 26H45.5L42.5 28.5L43.5 32.5L40 30L36.5 32.5L37.5 28.5L34.5 26H38.5L40 22Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={fadeInUp} className="text-white">
            <p
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.7',
              }}
            >
              A Novidade Urbana tem um papel estratégico no reposicionamento da música cristã no Brasil,{' '}
              <span className="text-brand-yellow font-bold">
                dialogando com a cultura jovem, periférica e digital.
              </span>{' '}
              Sua importância vai muito além de lançar músicas: ela abre caminhos, legitima linguagens e cria oportunidades.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
