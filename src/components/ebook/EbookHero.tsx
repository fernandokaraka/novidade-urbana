'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideInLeft, slideInRight } from '@/lib/animations'
import { ebook } from '@/data/ebook'
import { AmazonButton } from './AmazonButton'

export function EbookHero() {
  return (
    <section className="relative bg-black pt-32 lg:pt-40 pb-12 lg:pb-20 overflow-hidden">
      <div className="container-site relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={slideInLeft}>
            <h1>
              <span
                className="block text-white"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 600,
                  fontSize: 'clamp(26px, 3.6vw, 44px)',
                  lineHeight: '1.1',
                }}
              >
                <span className="text-brand-yellow">Disponível agora</span> na
              </span>
              <span className="sr-only">Amazon</span>
              <Image
                src={ebook.amazonLogo}
                alt=""
                aria-hidden
                width={603}
                height={182}
                className="mt-2 w-[230px] sm:w-[300px] lg:w-[400px] h-auto"
                priority
              />
            </h1>
            <AmazonButton size="lg" className="mt-6 lg:mt-8" />
          </motion.div>

          <motion.a
            href={ebook.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Comprar o livro A Resposta na Amazon"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative block w-full max-w-[640px] mx-auto lg:mr-0 aspect-[1020/960] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_72%)]"
          >
            <Image
              src={ebook.mockup}
              alt="Livro A Resposta em tablet e celular"
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-contain"
              priority
            />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
