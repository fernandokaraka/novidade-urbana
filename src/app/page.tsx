import { PublicLayout } from '@/components/layout'
import {
  Hero,
  FeaturedArtists,
  Recognition,
} from '@/components/home'

export default function Home() {
  return (
    <PublicLayout>
      <Hero />
      <FeaturedArtists />
      <Recognition />
    </PublicLayout>
  )
}
