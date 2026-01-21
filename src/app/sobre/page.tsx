import { Metadata } from 'next'
import { PublicLayout } from '@/components/layout'
import { AboutHero, AboutVideo, AboutNumbers } from '@/components/about'

export const metadata: Metadata = {
  title: 'Sobre Nós | Novidade Urbana',
  description: 'Conheça a história da Novidade Urbana, selo e produtora gospel que apoia e promove artistas cristãos com foco em profissionalização e projetos colaborativos.',
}

export default function SobrePage() {
  return (
    <PublicLayout>
      <AboutHero />
      <AboutVideo />
      <AboutNumbers />
    </PublicLayout>
  )
}
