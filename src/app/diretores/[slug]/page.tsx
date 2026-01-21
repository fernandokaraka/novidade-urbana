import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PublicLayout } from '@/components/layout'
import {
  DirectorHero,
  DirectorBio,
  DirectorProjects,
  DirectorPartners,
  DirectorCurrentRole,
  DirectorStatement,
  DirectorTimeline,
  DirectorHighlightProjects,
  DirectorTextSections,
  DirectorFeaturedArtist,
  DirectorFlexibleSections,
} from '@/components/directors'
import { getDirectorBySlug, getAllDirectorSlugs } from '@/data/directors'

interface DirectorPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllDirectorSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: DirectorPageProps): Promise<Metadata> {
  const { slug } = await params
  const director = getDirectorBySlug(slug)

  if (!director) {
    return {
      title: 'Diretor não encontrado | Novidade Urbana',
    }
  }

  return {
    title: `${director.name} | Novidade Urbana`,
    description: director.shortBio,
  }
}

export default async function DirectorPage({ params }: DirectorPageProps) {
  const { slug } = await params
  const director = getDirectorBySlug(slug)

  if (!director) {
    notFound()
  }

  // Verifica o tipo de layout customizado
  const hasFabioLayout = director.timeline || director.highlightProjects
  const hasFlexibleLayout = director.flexibleSections && director.flexibleSections.length > 0

  return (
    <PublicLayout>
      <div
        className="relative"
        style={{
          backgroundImage: director.backgroundImage && !hasFlexibleLayout
            ? `url(${director.backgroundImage})`
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Hero com background para Marcelo */}
        {hasFlexibleLayout ? (
          <div
            style={{
              backgroundImage: director.backgroundImage
                ? `url(${director.backgroundImage})`
                : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          >
            <DirectorHero director={director} />
            <DirectorStatement director={director} />
          </div>
        ) : (
          <DirectorHero director={director} />
        )}

        {hasFlexibleLayout ? (
          <DirectorFlexibleSections director={director} />
        ) : hasFabioLayout ? (
          <>
            <DirectorStatement director={director} />
            <DirectorTimeline director={director} />
            <DirectorHighlightProjects director={director} />
            <DirectorTextSections director={director} />
            <DirectorFeaturedArtist director={director} />
          </>
        ) : (
          <>
            <DirectorBio director={director} />
            <DirectorProjects director={director} />
            <DirectorPartners director={director} />
            <DirectorCurrentRole director={director} />
          </>
        )}
      </div>
    </PublicLayout>
  )
}
