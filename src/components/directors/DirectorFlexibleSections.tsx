'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import type {
  Director,
  FlexibleSection,
  TextContentSection,
  ImageTextSection,
  GalleryWithCaptionsSection,
  MilestonesSection,
  LogosSection,
  FestivalSection,
  AudiovisualSection,
  SpiritualTurnSection,
  PartnershipSection,
  LegacySection,
} from '@/data/directors'

interface DirectorFlexibleSectionsProps {
  director: Director
}

// Função para renderizar texto com **negrito**
function renderTextWithBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <strong key={index} style={{ color: '#94969C', fontWeight: 700 }}>
          {part}
        </strong>
      )
    }
    return part
  })
}

// Componente para seção de texto simples
function TextSection({ section }: { section: TextContentSection }) {
  const isDark = section.background !== 'light'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mb-12"
    >
      {section.title && (
        <h3
          className={`${isDark ? 'text-brand-yellow' : 'text-brand-yellow'} mb-6`}
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontSize: '20px',
            fontWeight: 700,
          }}
        >
          {section.title}
        </h3>
      )}
      {section.paragraphs.map((p, i) => (
        <p
          key={i}
          className={`${isDark ? 'text-white' : 'text-black'} mb-4 last:mb-0`}
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '1.7',
          }}
        >
          {p}
        </p>
      ))}
      {section.subtitle && (
        <h4
          className={`${isDark ? 'text-white' : 'text-black'} mt-8 mb-4`}
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontSize: '20px',
            fontWeight: 700,
          }}
        >
          {section.subtitle}
        </h4>
      )}
    </motion.div>
  )
}

// Componente para seção com imagem e texto
function ImageTextSectionComponent({ section }: { section: ImageTextSection }) {
  const isDark = section.background !== 'light'
  const isImageRight = section.imagePosition === 'right'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={`flex flex-col lg:flex-row gap-8 items-center mb-12 ${
        isImageRight ? '' : 'lg:flex-row-reverse'
      }`}
    >
      <div className="flex-1">
        {(section.title || section.titleHighlight) && (
          <h3 className="mb-6">
            {section.title && (
              <span
                className={`text-brand-yellow ${!isDark ? 'bg-black px-2 py-1' : ''}`}
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: isDark ? '20px' : '36px',
                  fontWeight: 700,
                }}
              >
                {section.title}
              </span>
            )}
            {section.titleHighlight && (
              <span
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontSize: isDark ? '20px' : '36px',
                  fontWeight: 700,
                  color: isDark ? '#fff' : '#545454',
                }}
              >
                {' '}{section.titleHighlight}
              </span>
            )}
          </h3>
        )}
        {section.paragraphs.map((p, i) => (
          <p
            key={i}
            className="mb-4 last:mb-0"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontSize: isDark ? '18px' : '20px',
              fontWeight: 400,
              lineHeight: '1.7',
              color: isDark ? '#fff' : '#545454',
            }}
          >
            {p}
          </p>
        ))}
      </div>
      <div className="flex-shrink-0 w-full lg:w-auto">
        <Image
          src={section.image}
          alt=""
          width={350}
          height={300}
          className="object-cover rounded-2xl"
        />
      </div>
    </motion.div>
  )
}

// Componente para galeria com legendas
function GalleryWithCaptionsSectionComponent({ section }: { section: GalleryWithCaptionsSection }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
    >
      {section.images.map((img, i) => (
        <div key={i} className="text-center">
          <div className="rounded-2xl overflow-hidden mb-4">
            <Image
              src={img.src}
              alt={img.caption}
              width={350}
              height={350}
              className="w-full object-cover"
            />
          </div>
          <p
            className="text-white"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            {img.caption}
          </p>
        </div>
      ))}
    </motion.div>
  )
}

// Componente para seção de marcos/milestones
function MilestonesSectionComponent({ section }: { section: MilestonesSection }) {
  const isImageLeft = section.imagePosition === 'left'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={`flex flex-col lg:flex-row gap-8 items-center mb-12 ${
        isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {section.image && (
        <div className="flex-shrink-0 w-full lg:w-[30%]">
          <Image
            src={section.image}
            alt=""
            width={400}
            height={300}
            className="object-cover rounded-2xl w-full"
          />
        </div>
      )}
      <div className="flex-1">
        <h3
          className="mb-6"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontSize: '36px',
            fontWeight: 700,
            color: '#545454',
          }}
        >
          {section.title}
        </h3>
        <ul className="space-y-2 mb-6">
          {section.items.map((item, i) => (
            <li
              key={i}
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#545454',
              }}
            >
              - {item}
            </li>
          ))}
        </ul>
        {section.closingText && (
          <p
            className="text-black/80"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.6',
            }}
          >
            {section.closingText}
          </p>
        )}
      </div>
    </motion.div>
  )
}

// Componente para seção de logos
function LogosSectionComponent({ section }: { section: LogosSection }) {
  const isDark = section.background !== 'light'
  const textColor = isDark ? '#fff' : '#545454'
  const isSingleLogo = section.logos.length === 1

  // Layout especial para 1 logo: logo à esquerda (30%), texto à direita (70%)
  if (isSingleLogo) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-col lg:flex-row gap-8 items-start mb-12"
      >
        <div className="flex-shrink-0 w-full lg:w-[30%]">
          <Image
            src={section.logos[0].src}
            alt={section.logos[0].name}
            width={150}
            height={150}
            className="object-cover w-full"
          />
        </div>
        <div className="flex-1">
          {section.title && (
            <h3
              className="mb-6"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: isDark ? '20px' : '36px',
                fontWeight: 700,
                color: textColor,
              }}
            >
              {section.title}
            </h3>
          )}
          {section.paragraphs?.map((p, i) => (
            <p
              key={i}
              className="mb-4"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: isDark ? '16px' : '20px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: textColor,
              }}
            >
              {p}
            </p>
          ))}
          {section.closingText && (
            <p
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontSize: isDark ? '16px' : '20px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: isDark ? 'rgba(255,255,255,0.8)' : '#545454',
              }}
            >
              {section.closingText}
            </p>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mb-12"
    >
      {section.title && (
        <h3
          className="mb-6"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontSize: isDark ? '20px' : '36px',
            fontWeight: 700,
            color: textColor,
          }}
        >
          {section.title}
          {section.titleHighlight && (
            <span className="text-brand-yellow"> {section.titleHighlight}</span>
          )}
        </h3>
      )}
      {section.paragraphs?.map((p, i) => (
        <p
          key={i}
          className="mb-4"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontSize: isDark ? '16px' : '20px',
            fontWeight: 400,
            lineHeight: '1.6',
            color: textColor,
          }}
        >
          {p}
        </p>
      ))}
      <div className="flex items-center justify-between my-8">
        {section.logos.map((logo, i) => (
          <Image key={i} src={logo.src} alt={logo.name} width={180} height={80} className="object-contain h-[60px] lg:h-[80px]" />
        ))}
      </div>
      {section.closingText && (
        <p
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontSize: '22px',
            fontWeight: 400,
            lineHeight: '1.6',
            color: isDark ? '#94969C' : '#545454',
          }}
        >
          {section.closingText}
        </p>
      )}
    </motion.div>
  )
}

// Componente para seção do festival
function FestivalSectionComponent({ section }: { section: FestivalSection }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mb-12"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center mb-8">
        <div className="flex-shrink-0 w-full lg:w-[40%]">
          <Image
            src={section.image}
            alt={section.title}
            width={400}
            height={350}
            className="object-cover rounded-2xl w-full h-auto"
          />
        </div>
        <div className="flex-1 lg:w-[60%] flex flex-col justify-center">
          <h3 className="mb-4">
            <span
              className="text-3xl sm:text-4xl lg:text-[57px]"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              {section.title}{' '}
            </span>
            <span
              className="text-4xl sm:text-5xl lg:text-[76px]"
              style={{
                fontFamily: 'var(--font-yellowtail)',
                fontWeight: 400,
                color: '#FCFF00',
              }}
            >
              {section.titleHighlight}
            </span>
          </h3>
          <p
            className="text-base sm:text-lg lg:text-[22px]"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontWeight: 400,
              lineHeight: '1.7',
              color: '#94969C',
            }}
          >
            {renderTextWithBold(section.mainText)}
          </p>
        </div>
      </div>
      {section.additionalParagraphs.map((p, i) => (
        <p
          key={i}
          className="mb-4 text-base sm:text-lg lg:text-[22px]"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontWeight: 400,
            lineHeight: '1.6',
            color: '#94969C',
          }}
        >
          {p}
        </p>
      ))}
    </motion.div>
  )
}

// Componente para seção audiovisual
function AudiovisualSectionComponent({ section }: { section: AudiovisualSection }) {
  const isSingleImage = section.images.length === 1

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mb-12"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className={isSingleImage ? 'w-full lg:w-[35%] text-left' : 'flex-1'}>
          <h3
            className="mb-4 lg:mb-6 text-3xl sm:text-4xl lg:text-[57px]"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontWeight: 700,
              color: '#FCFF00',
            }}
          >
            {section.title}
          </h3>
          {section.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mb-4 text-base sm:text-lg lg:text-[22px]"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 400,
                lineHeight: '1.7',
                color: '#94969C',
              }}
            >
              {renderTextWithBold(p)}
            </p>
          ))}
        </div>
        <div className={isSingleImage ? 'w-full lg:w-[45%] lg:ml-auto' : 'flex gap-4 flex-shrink-0'}>
          {section.images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt=""
              width={isSingleImage ? 480 : 180}
              height={isSingleImage ? 350 : 260}
              className={isSingleImage ? 'object-cover rounded-lg w-full h-auto' : 'object-cover rounded-lg'}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Componente para seção de virada espiritual
function SpiritualTurnSectionComponent({ section }: { section: SpiritualTurnSection }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mb-12"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        <div className="flex-shrink-0 w-full lg:w-[45%]">
          <Image
            src={section.image}
            alt=""
            width={450}
            height={450}
            className="object-cover rounded-2xl w-full h-auto"
          />
        </div>
        <div className="flex-1 lg:w-[55%]">
          <h3
            className="mb-4 lg:mb-6 text-xl sm:text-2xl lg:text-[32px]"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontWeight: 700,
              color: '#FCFF00',
            }}
          >
            {section.title}
          </h3>
          <p
            className="mb-4 lg:mb-6 text-base sm:text-lg lg:text-[22px]"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontWeight: 400,
              lineHeight: '1.7',
              color: '#94969C',
            }}
          >
            {section.introParagraph}
          </p>
          <h4
            className="mb-3 lg:mb-4 text-xl sm:text-2xl lg:text-[32px]"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontWeight: 700,
              color: '#94969C',
            }}
          >
            {section.yearTitle}
          </h4>
          <ul className="space-y-2">
            {section.items.map((item, i) => (
              <li
                key={i}
                className="text-base sm:text-lg lg:text-[22px]"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: '#94969C',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

// Componente para seção de parceria
function PartnershipSectionComponent({ section }: { section: PartnershipSection }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mb-12"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
        <div className="flex-1 lg:w-[55%]">
          <h3 className="mb-4 lg:mb-6">
            <span
              className="block text-xl sm:text-2xl lg:text-[32px]"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 700,
                color: '#94969C',
              }}
            >
              {section.title}
            </span>
            {section.titleHighlight && (
              <span
                className="block text-xl sm:text-2xl lg:text-[32px]"
                style={{
                  fontFamily: 'var(--font-tt-runs)',
                  fontWeight: 700,
                  color: '#FCFF00',
                }}
              >
                {section.titleHighlight}
              </span>
            )}
          </h3>
          {section.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mb-4 text-base sm:text-lg lg:text-[22px]"
              style={{
                fontFamily: 'var(--font-tt-runs)',
                fontWeight: 400,
                lineHeight: '1.7',
                color: '#94969C',
              }}
            >
              {p}
            </p>
          ))}
        </div>
        {section.logo && (
          <div className="flex-shrink-0 w-full lg:w-[45%]">
            <Image
              src={section.logo}
              alt=""
              width={400}
              height={400}
              className="object-contain w-full h-auto max-w-[280px] mx-auto lg:max-w-none"
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}

// Componente para seção de legado
function LegacySectionComponent({ section }: { section: LegacySection }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mb-12"
    >
      <h3 className="mb-4 lg:mb-6">
        <span
          className="text-3xl sm:text-4xl lg:text-[64px]"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontWeight: 700,
            color: '#FFFFFF',
          }}
        >
          {section.title}{' '}
        </span>
        <span
          className="text-4xl sm:text-5xl lg:text-[96px]"
          style={{
            fontFamily: 'var(--font-yellowtail)',
            fontWeight: 400,
            color: '#FCFF00',
          }}
        >
          {section.titleHighlight}
        </span>
      </h3>
      <p
        className="mb-4 lg:mb-6 text-base sm:text-lg lg:text-[22px]"
        style={{
          fontFamily: 'var(--font-tt-runs)',
          fontWeight: 400,
          lineHeight: '1.7',
          color: '#94969C',
        }}
      >
        {section.introParagraph}
      </p>
      <h4
        className="mb-3 lg:mb-4 text-base sm:text-lg lg:text-[22px]"
        style={{
          fontFamily: 'var(--font-tt-runs)',
          fontWeight: 700,
          color: '#FCFF00',
        }}
      >
        {section.highlightTitle}
      </h4>
      <ul className="space-y-2 mb-4 lg:mb-6">
        {section.items.map((item, i) => (
          <li
            key={i}
            className="text-base sm:text-lg lg:text-[22px]"
            style={{
              fontFamily: 'var(--font-tt-runs)',
              fontWeight: 400,
              lineHeight: '1.6',
              color: '#94969C',
            }}
          >
            - {item}
          </li>
        ))}
      </ul>
      {section.closingParagraphs.map((p, i) => (
        <p
          key={i}
          className="mb-4 text-base sm:text-lg lg:text-[22px]"
          style={{
            fontFamily: 'var(--font-tt-runs)',
            fontWeight: 400,
            lineHeight: '1.7',
            color: '#94969C',
          }}
        >
          {p}
        </p>
      ))}
    </motion.div>
  )
}

// Componente principal que renderiza todas as seções
export function DirectorFlexibleSections({ director }: DirectorFlexibleSectionsProps) {
  if (!director.flexibleSections || director.flexibleSections.length === 0) {
    return null
  }

  // Agrupa seções por background para renderizar em containers separados
  const groupedSections: { background: 'dark' | 'light'; sections: FlexibleSection[]; backgroundImage?: string }[] = []
  let currentGroup: { background: 'dark' | 'light'; sections: FlexibleSection[]; backgroundImage?: string } | null = null

  director.flexibleSections.forEach((section) => {
    const bg = section.background || 'dark'
    if (!currentGroup || currentGroup.background !== bg) {
      currentGroup = { background: bg, sections: [], backgroundImage: undefined }
      // Se for a segunda seção preta (KondZilla Festival em diante), usa o background específico
      if (bg === 'dark' && groupedSections.filter(g => g.background === 'dark').length === 1) {
        currentGroup.backgroundImage = '/images/directors/marcelo-portuga/background-section-2-black.png'
      }
      groupedSections.push(currentGroup)
    }
    currentGroup.sections.push(section)
  })

  const renderSection = (section: FlexibleSection) => {
    switch (section.type) {
      case 'text':
        return <TextSection key={section.id} section={section} />
      case 'imageText':
        return <ImageTextSectionComponent key={section.id} section={section} />
      case 'galleryWithCaptions':
        return <GalleryWithCaptionsSectionComponent key={section.id} section={section} />
      case 'milestones':
        return <MilestonesSectionComponent key={section.id} section={section} />
      case 'logos':
        return <LogosSectionComponent key={section.id} section={section} />
      case 'festival':
        return <FestivalSectionComponent key={section.id} section={section} />
      case 'audiovisual':
        return <AudiovisualSectionComponent key={section.id} section={section} />
      case 'spiritualTurn':
        return <SpiritualTurnSectionComponent key={section.id} section={section} />
      case 'partnership':
        return <PartnershipSectionComponent key={section.id} section={section} />
      case 'legacy':
        return <LegacySectionComponent key={section.id} section={section} />
      default:
        return null
    }
  }

  return (
    <>
      {groupedSections.map((group, groupIndex) => (
        <section
          key={groupIndex}
          className={`py-16 lg:py-24 ${group.background === 'light' ? 'bg-white' : 'bg-black'}`}
          style={
            group.backgroundImage
              ? {
                  backgroundImage: `url(${group.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#000',
                }
              : undefined
          }
        >
          <div className="container-site px-4">
            {group.sections.map((section) => renderSection(section))}
          </div>
        </section>
      ))}
    </>
  )
}
