import { PublicLayout } from '@/components/layout'
import { PartnersHero } from '@/components/partners'
import { CTAContact } from '@/components/home'

export default function SociosPage() {
  return (
    <PublicLayout>
      <PartnersHero />
      <CTAContact />
    </PublicLayout>
  )
}
