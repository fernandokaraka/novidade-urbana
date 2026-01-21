'use client'

import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { PublicLayout } from '@/components/layout'
import { getProjectBySlug, ContentBlock } from '@/data/projects'
import { notFound } from 'next/navigation'

// Componente para renderizar texto com nomes destacados
function HighlightedText({
  text,
  highlightedNames
}: {
  text: string
  highlightedNames?: { name: string; color?: string }[]
}) {
  if (!highlightedNames || highlightedNames.length === 0) {
    return <>{text}</>
  }

  let result = text
  const parts: React.ReactNode[] = []
  let lastIndex = 0

  // Ordena por tamanho decrescente para evitar substituições parciais
  const sortedNames = [...highlightedNames].sort((a, b) => b.name.length - a.name.length)

  // Encontra todas as ocorrências
  const matches: { start: number; end: number; name: string }[] = []

  for (const { name } of sortedNames) {
    let searchIndex = 0
    while (true) {
      const index = result.indexOf(name, searchIndex)
      if (index === -1) break
      matches.push({ start: index, end: index + name.length, name })
      searchIndex = index + 1
    }
  }

  // Ordena por posição
  matches.sort((a, b) => a.start - b.start)

  // Remove sobreposições
  const filteredMatches = matches.filter((match, i) => {
    if (i === 0) return true
    return match.start >= matches[i - 1].end
  })

  // Constrói o resultado
  for (const match of filteredMatches) {
    if (match.start > lastIndex) {
      parts.push(result.slice(lastIndex, match.start))
    }
    parts.push(
      <span key={match.start} className="text-brand-yellow">
        {match.name}
      </span>
    )
    lastIndex = match.end
  }

  if (lastIndex < result.length) {
    parts.push(result.slice(lastIndex))
  }

  return <>{parts}</>
}

// Componente de bloco de texto
function TextBlock({ block }: { block: ContentBlock }) {
  const paragraphs = block.text?.split('\n\n') || []

  return (
    <div className="space-y-6 w-full">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="leading-relaxed w-full"
          style={{ fontFamily: 'var(--font-tt-runs)', fontWeight: 400, color: '#94969C', fontSize: '20px' }}
        >
          <HighlightedText
            text={paragraph}
            highlightedNames={block.highlightedNames}
          />
        </p>
      ))}
    </div>
  )
}

// Componente de bloco de imagem
function ImageBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
      <Image
        src={block.image || ''}
        alt={block.imageAlt || ''}
        fill
        className="object-contain"
        quality={100}
      />
    </div>
  )
}

// Componente de hero images (duas imagens lado a lado)
function HeroImagesBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-6">
      {block.images?.map((img, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden"
          style={{ height: '476px' }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain"
            quality={100}
          />
        </div>
      ))}
    </div>
  )
}

// Componente de bloco texto + imagem
function TextImageBlock({ block }: { block: ContentBlock }) {
  const isImageRight = block.imagePosition === 'right'
  const paragraphs = block.text?.split('\n\n') || []
  const textSize = block.textSize || 20
  const imageHeight = block.imageHeight || undefined

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isImageRight ? '' : 'lg:grid-flow-dense'}`}>
      <div
        className={`relative rounded-2xl overflow-hidden ${isImageRight ? 'lg:col-start-2 lg:row-start-1' : ''} ${!imageHeight ? 'aspect-square' : ''}`}
        style={imageHeight ? { height: `${imageHeight}px` } : undefined}
      >
        <Image
          src={block.image || ''}
          alt={block.imageAlt || ''}
          fill
          className="object-contain"
          quality={100}
        />
      </div>
      <div className={`space-y-8 ${isImageRight ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="leading-relaxed"
            style={{ fontFamily: 'var(--font-tt-runs)', fontWeight: 400, color: '#94969C', fontSize: `${textSize}px` }}
          >
            <HighlightedText
              text={paragraph}
              highlightedNames={block.highlightedNames}
            />
          </p>
        ))}
      </div>
    </div>
  )
}

// Componente de bloco de vídeo
function VideoBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer">
      <Image
        src={block.videoThumbnail || ''}
        alt="Video thumbnail"
        fill
        className="object-cover"
        quality={100}
      />
      {/* Badge */}
      {block.videoBadge && (
        <div
          className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider"
          style={{
            backgroundColor: 'var(--color-brand-yellow)',
            color: 'var(--color-brand-black)',
            fontFamily: 'var(--font-tt-runs)'
          }}
        >
          {block.videoBadge}
        </div>
      )}
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
        </div>
      </div>
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

// Componente para renderizar cada bloco de conteúdo
function ContentBlockRenderer({ block, index }: { block: ContentBlock; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {block.type === 'text' && <TextBlock block={block} />}
      {block.type === 'image' && <ImageBlock block={block} />}
      {block.type === 'hero-images' && <HeroImagesBlock block={block} />}
      {block.type === 'text-image' && <TextImageBlock block={block} />}
      {block.type === 'image-text' && <TextImageBlock block={{ ...block, imagePosition: 'left' }} />}
      {block.type === 'video' && <VideoBlock block={block} />}
    </motion.div>
  )
}

// Componente de título reutilizável
function ProjectTitle({ project }: { project: { title: { main: string; highlight?: string }; subtitle?: string; slug: string } }) {
  // Reveillon 2026 tem estilo específico
  if (project.slug === 'reveillon-2026') {
    return (
      <h1 className="whitespace-nowrap">
        <span
          className="text-[3rem] md:text-[5rem] lg:text-[120.99px] text-white"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: '1',
          }}
        >
          {project.title.main}
        </span>
        <span
          className="text-[4rem] md:text-[8rem] lg:text-[189.05px] ml-4"
          style={{
            fontFamily: 'var(--font-yellowtail)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            color: '#FCFF00',
            lineHeight: '1',
          }}
        >
          {project.title.highlight}
        </span>
      </h1>
    )
  }

  // Feat Jorge e Deus Grande - título em UMA linha com fontes grandes
  if (project.slug === 'feat-jorge' || project.slug === 'deus-grande') {
    return (
      <h1 className="whitespace-nowrap mb-8 lg:mb-12" style={{ lineHeight: '0.9' }}>
        <span
          className="text-[5rem] md:text-[10rem] lg:text-[240px]"
          style={{
            fontFamily: 'var(--font-yellowtail)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            color: '#FCFF00',
          }}
        >
          {project.title.highlight}
        </span>
        <span
          className="text-[4rem] md:text-[8rem] lg:text-[160px] text-white italic ml-4 lg:ml-8"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          {project.title.main}
        </span>
      </h1>
    )
  }

  // Layout padrão (Grammy Latino e outros)
  return (
    <h1 style={{ lineHeight: '1.2' }}>
      <span
        className="text-[1.75rem] md:text-[2.5rem] lg:text-[60px] text-white"
        style={{
          fontFamily: 'var(--font-tt-runs)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          display: 'inline',
        }}
      >
        {project.title.main}{' '}
      </span>
      {project.title.highlight && (
        <span
          className="text-[1.75rem] md:text-[2.5rem] lg:text-[60px]"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#FCFF00',
            display: 'inline',
          }}
        >
          {project.title.highlight}
        </span>
      )}
      {project.subtitle && (
        <span
          className="text-[1.75rem] md:text-[2.5rem] lg:text-[60px] text-white"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            display: 'inline',
          }}
        >
          {' '}{project.subtitle}
        </span>
      )}
    </h1>
  )
}

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Separa a primeira imagem do resto do conteúdo para projetos com titleAfterHero
  const heroImageBlock = project.titleAfterHero
    ? project.content.find(block => block.type === 'image' || block.type === 'hero-images')
    : null
  const otherBlocks = project.titleAfterHero && heroImageBlock
    ? project.content.filter(block => block !== heroImageBlock)
    : project.content

  return (
    <PublicLayout>
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-black min-h-screen">
        <div className="container-site px-4">

          {/* Layout com título DEPOIS da imagem hero (Grammy) */}
          {project.titleAfterHero && heroImageBlock && (
            <>
              {/* Imagem Hero primeiro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
              >
                {heroImageBlock.type === 'image' && (
                  <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: '476px' }}>
                    <Image
                      src={heroImageBlock.image || ''}
                      alt={heroImageBlock.imageAlt || ''}
                      fill
                      className="object-contain"
                      quality={100}
                    />
                  </div>
                )}
                {heroImageBlock.type === 'hero-images' && <HeroImagesBlock block={heroImageBlock} />}
              </motion.div>

              {/* Título depois */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <ProjectTitle project={project} />
              </motion.div>

              {/* Resto do conteúdo */}
              <div className="space-y-12 lg:space-y-16 w-full">
                {otherBlocks.map((block, index) => (
                  <ContentBlockRenderer key={index} block={block} index={index} />
                ))}
              </div>
            </>
          )}

          {/* Layout padrão com título ANTES do conteúdo */}
          {!project.titleAfterHero && (
            <>
              {/* Título */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 lg:mb-16"
              >
                <ProjectTitle project={project} />
              </motion.div>

              {/* Conteúdo */}
              <div className="space-y-12 lg:space-y-16 w-full">
                {otherBlocks.map((block, index) => (
                  <ContentBlockRenderer key={index} block={block} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </PublicLayout>
  )
}
