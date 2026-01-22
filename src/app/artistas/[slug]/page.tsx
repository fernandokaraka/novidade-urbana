'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { PublicLayout } from '@/components/layout'
import { getArtistBySlug, ArtistData, AchievementBlock } from '@/data/artists'
import { notFound } from 'next/navigation'

// Ícone do Spotify customizado
function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )
}

// Função para renderizar texto com destaques em amarelo
function renderTextWithHighlights(text: string, highlights?: string[]) {
  if (!highlights || highlights.length === 0) {
    return text
  }

  let result: (string | React.ReactElement)[] = [text]

  highlights.forEach((highlight, idx) => {
    const newResult: (string | React.ReactElement)[] = []
    result.forEach((part, partIdx) => {
      if (typeof part === 'string') {
        const parts = part.split(highlight)
        parts.forEach((p, i) => {
          if (p) newResult.push(p)
          if (i < parts.length - 1) {
            newResult.push(
              <span key={`${idx}-${partIdx}-${i}`} style={{ color: '#FCFF00', fontWeight: 700 }}>
                {highlight}
              </span>
            )
          }
        })
      } else {
        newResult.push(part)
      }
    })
    result = newResult
  })

  return result
}

// Componente de seção de conquistas/sucessos
function AchievementSection({ achievement, imagePosition = 'right' }: { achievement: AchievementBlock; imagePosition?: 'left' | 'right' }) {
  const isImageRight = imagePosition === 'right'

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Background decorativo - alinhado ao bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 lg:h-80">
        <Image
          src="/images/artists/background-bottom-artistas.png"
          alt=""
          fill
          className="object-cover object-bottom"
          quality={100}
        />
      </div>

      <div className="container-site px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-stretch" style={{ gap: '30px', minHeight: '550px' }}>
          {/* Coluna do texto */}
          <div className={`flex-1 flex items-center py-16 ${isImageRight ? 'order-1' : 'order-2'}`}>
            <motion.div
              initial={{ opacity: 0, x: isImageRight ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ maxWidth: '500px' }}
            >
              {/* Badge */}
              <div
                className="inline-block px-4 py-2 mb-4"
                style={{
                  backgroundColor: '#FCFF00',
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#000000'
                }}
              >
                {achievement.badge}
              </div>

              {/* Título */}
              <h2
                className="mb-6"
                style={{
                  fontFamily: achievement.titleStyle === 'script' ? 'var(--font-yellowtail)' : 'var(--font-tt-runs)',
                  fontSize: achievement.titleStyle === 'script' ? '90px' : '48px',
                  fontWeight: achievement.titleStyle === 'script' ? 400 : 700,
                  lineHeight: '1',
                  color: '#FFFFFF'
                }}
              >
                {achievement.title}
              </h2>

              {/* Texto */}
              <p
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: '#FFFFFF'
                }}
              >
                {renderTextWithHighlights(achievement.text, achievement.highlights)}
              </p>
            </motion.div>
          </div>

          {/* Coluna da imagem */}
          <motion.div
            initial={{ opacity: 0, x: isImageRight ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex-1 hidden lg:flex ${achievement.imageAlignment === 'center' ? 'items-center' : 'items-end'} ${isImageRight ? 'order-2' : 'order-1'}`}
          >
            <div className="relative w-full h-[450px]">
              <Image
                src={achievement.image}
                alt={achievement.imageAlt}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Imagem mobile */}
      <div className="lg:hidden relative h-[400px]">
        <Image
          src={achievement.image}
          alt={achievement.imageAlt}
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>
    </section>
  )
}

// Hero Section para layout alternativo (tipo Marcados)
function AlternateHeroSection({ artist }: { artist: ArtistData }) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/artists/background-top-artistas.png"
          alt=""
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container-site relative z-10 px-4">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontSize: 'clamp(2.5rem, 6vw, 90px)',
            fontWeight: 400,
            lineHeight: '1',
            color: '#FFFFFF',
            letterSpacing: '-0.02em'
          }}
        >
          {artist.name}
        </motion.h1>

        {/* Primeiro parágrafo - largura total */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '1.6',
            color: '#94969C'
          }}
        >
          {artist.bio[0]}
        </motion.p>

        {/* Duas colunas: texto esquerda, imagem direita */}
        <div className="flex flex-col lg:flex-row lg:items-start" style={{ gap: '30px' }}>
          {/* Texto à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            {artist.bio.slice(1).map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: '#94969C'
                }}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Imagem à direita */}
          {artist.heroImage && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex-shrink-0 self-start"
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ width: '550px', height: '360px' }}
              >
                <Image
                  src={artist.heroImage}
                  alt={artist.heroImageAlt || artist.name}
                  fill
                  className="object-contain"
                  style={{ top: '-10px' }}
                  quality={100}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

// Seção de imagem/vídeo full width (tipo Marcados)
function FullWidthMediaSection({ artist }: { artist: ArtistData }) {
  if (!artist.fullWidthImage && !artist.fullWidthVideoId) return null

  return (
    <section className="relative bg-black overflow-hidden pb-24 lg:pb-32">
      {/* Background decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-64 lg:h-80">
        <Image
          src="/images/artists/background-bottom-artistas.png"
          alt=""
          fill
          className="object-cover object-bottom"
          quality={100}
        />
      </div>

      <div className="container-site px-4 relative z-10 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          {artist.fullWidthVideoId ? (
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${artist.fullWidthVideoId}?rel=0`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : artist.fullWidthImage ? (
            <div className="relative w-full" style={{ height: '500px' }}>
              <Image
                src={artist.fullWidthImage}
                alt={artist.fullWidthImageAlt || artist.name}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}

// Ícone do Instagram com gradiente
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="25%" stopColor="#FCAF45" />
          <stop offset="50%" stopColor="#F77737" />
          <stop offset="75%" stopColor="#F56040" />
          <stop offset="90%" stopColor="#C13584" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instagram-gradient)" />
    </svg>
  )
}

// Ícone do YouTube
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF0000">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

// Componente de seção de redes sociais (separada)
function SocialLinksSection({ artist }: { artist: ArtistData }) {
  return (
    <section className="py-12 lg:py-16 bg-black border-t border-b border-white/10">
      <div className="container-site px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-16">
          {artist.socialLinks.instagram && (
            <Link
              href={`https://instagram.com/${artist.socialLinks.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              <InstagramIcon className="w-8 h-8" />
              <span
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '20px',
                  fontWeight: 500
                }}
              >
                {artist.socialLinks.instagram}
              </span>
            </Link>
          )}

          {artist.socialLinks.youtube && (
            <Link
              href={`https://${artist.socialLinks.youtube}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              <YoutubeIcon className="w-8 h-8" />
              <span
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '20px',
                  fontWeight: 500
                }}
              >
                {artist.socialLinks.youtube}
              </span>
            </Link>
          )}

          {artist.socialLinks.spotify && (
            <Link
              href={artist.socialLinks.spotify.startsWith('http') ? artist.socialLinks.spotify : `https://open.spotify.com/search/${encodeURIComponent(artist.socialLinks.spotify)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              <SpotifyIcon className="w-8 h-8 text-[#1DB954]" />
              <span
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '20px',
                  fontWeight: 500
                }}
              >
                Spotify
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

// Hero Section padrão (tipo Thalles Roberto)
function DefaultHeroSection({ artist }: { artist: ArtistData }) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/artists/background-top-artistas.png"
          alt=""
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container-site relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center" style={{ gap: '30px' }}>
          {/* Foto do artista à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative flex-shrink-0"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ width: '400px', height: '500px' }}
            >
              <Image
                src={artist.photo}
                alt={artist.photoAlt || artist.name}
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </motion.div>

          {/* Info do artista à direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Nome */}
            <h1
              className="mb-8 whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: 'clamp(2.5rem, 6vw, 90px)',
                fontWeight: 400,
                lineHeight: '1',
                color: '#FFFFFF',
                letterSpacing: '-0.02em'
              }}
            >
              {artist.name}
            </h1>

            {/* Bio */}
            <div className="space-y-6">
              {artist.bio.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontFamily: 'var(--font-tt-runs)',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    color: '#94969C'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Parágrafo destacado com fundo amarelo */}
            {artist.highlightedBio && (
              <div
                className="mt-6 p-4"
                style={{
                  backgroundColor: '#FCFF00',
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: '#000000'
                }}
              >
                {artist.highlightedBio}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function ArtistPage() {
  const params = useParams()
  const slug = params.slug as string
  const artist = getArtistBySlug(slug)

  if (!artist) {
    notFound()
  }

  const isAlternateLayout = artist.layoutType === 'alternate'

  return (
    <PublicLayout>
      <div className="bg-black">
        {/* Hero Section - layout condicional */}
        {isAlternateLayout ? (
          <AlternateHeroSection artist={artist} />
        ) : (
          <DefaultHeroSection artist={artist} />
        )}

        {/* Seção de redes sociais */}
        <SocialLinksSection artist={artist} />

        {/* Seções de conquistas/sucessos (layout padrão) */}
        {!isAlternateLayout && artist.achievements && artist.achievements.length > 0 && (
          artist.achievements.map((achievement, index) => (
            <AchievementSection
              key={index}
              achievement={achievement}
              imagePosition={index % 2 === 0 ? 'right' : 'left'}
            />
          ))
        )}

        {/* Imagem/vídeo full width (layout alternativo) */}
        {isAlternateLayout && <FullWidthMediaSection artist={artist} />}
      </div>
    </PublicLayout>
  )
}
