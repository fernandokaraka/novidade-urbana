import { PublicLayout } from '@/components/layout'
import { ArtistsHero } from '@/components/artists'
import { CTAContact } from '@/components/home'

export default function ArtistasPage() {
  return (
    <PublicLayout>
      <ArtistsHero />
      <CTAContact />
    </PublicLayout>
  )
}
