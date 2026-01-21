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

  // Verifica se é uma página customizada (Fábio Príncipe)
  const hasCustomLayout = director.timeline || director.highlightProjects

  return (
    <PublicLayout>
      <div
        className="relative"
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

        {hasCustomLayout ? (
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
