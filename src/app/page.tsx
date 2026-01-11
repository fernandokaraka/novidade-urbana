import { PublicLayout } from '@/components/layout'
import {
  Hero,
  FeaturedArtists,
  Recognition,
  OurStory,
  Directors,
} from '@/components/home'

export default function Home() {
  return (
    <PublicLayout>
      <Hero />
      <FeaturedArtists />
      <Recognition />
      <OurStory />
      <Directors />
    </PublicLayout>
  )
}
