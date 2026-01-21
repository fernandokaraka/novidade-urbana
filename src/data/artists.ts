// Dados estáticos dos artistas para páginas individuais

export interface SocialLinks {
  instagram?: string
  youtube?: string
  spotify?: string
  tiktok?: string
  facebook?: string
}

export interface AchievementBlock {
  badge: string // "Conquista", "Sucessos", etc.
  title: string
  titleStyle?: 'script' | 'bold' // script = Yellowtail, bold = TT Runs
  text: string
  highlights?: string[] // Palavras/frases a destacar em amarelo
  image: string
  imageAlt: string
  imageAlignment?: 'bottom' | 'center' // default: bottom
}

export interface ArtistData {
  slug: string
  name: string
  bio: string[] // Array de parágrafos
  highlightedBio?: string // Parágrafo com fundo amarelo
  photo: string
  photoAlt?: string
  socialLinks: SocialLinks
  achievements?: AchievementBlock[]
  // Layout alternativo (tipo Marcados)
  layoutType?: 'default' | 'alternate' // alternate = título + parágrafo full + duas colunas
  heroImage?: string // Imagem pequena na hero (para layout alternate)
  heroImageAlt?: string
  fullWidthImage?: string // Imagem 100% no final da página
  fullWidthImageAlt?: string
}

export const artistsData: ArtistData[] = [
  {
    slug: 'thalles-roberto',
    name: 'Thalles Roberto',
    bio: [
      'Thalles Roberto é um dos principais nomes da música gospel brasileira, reconhecido por sua voz marcante, composições profundas e mensagem cristã autêntica. Com uma trajetória sólida e alcance internacional, seu ministério impacta gerações por meio de canções que falam sobre fé, arrependimento, graça e transformação.',
      'Ao longo de sua carreira, Thalles construiu projetos relevantes, colaborações importantes e um legado musical que une excelência artística e propósito, consolidando-se como referência no cenário gospel contemporâneo.'
    ],
    photo: '/images/artists/thales-roberto-img-section-1.png',
    photoAlt: 'Thalles Roberto',
    socialLinks: {
      instagram: '@thallesroberto',
      youtube: 'www.youtube.com/@thallesrobertoo',
      spotify: 'Thalles Roberto'
    },
    achievements: [
      {
        badge: 'Conquista',
        title: 'Grammy',
        titleStyle: 'script',
        text: 'Thalles Roberto conquistou o prestigiado Grammy Latino na categoria de Melhor Álbum de Música Cristã em Língua Portuguesa pelo trabalho Deixa Vir – Vol. II (Ao Vivo), reconhecendo internacionalmente sua excelência artística e contribuição significativa à música gospel.',
        highlights: ['Melhor Álbum de Música Cristã', 'Deixa Vir – Vol. II (Ao Vivo),'],
        image: '/images/artists/thales-roberto-img-section-2.png',
        imageAlt: 'Thalles Roberto e equipe no Grammy Latino'
      }
    ]
  },
  {
    slug: 'marcelo-aguiar',
    name: 'Marcelo Aguiar',
    bio: [
      'Marcelo Aguiar é cantor, compositor e uma das vozes mais marcantes do gospel nacional, reconhecido por sua trajetória à frente da banda Katsbarnea e por sua forte identidade no rock cristão brasileiro. Sua música sempre esteve ligada a mensagens diretas, intensidade espiritual e compromisso com a fé.'
    ],
    highlightedBio: 'Ao longo de sua carreira, Marcelo construiu um legado de autenticidade e impacto, influenciando gerações e mantendo uma presença sólida no cenário gospel por meio de projetos relevantes, testemunho pessoal e canções que comunicam transformação e esperança.',
    photo: '/images/artists/marcelo-aguiar-home.png',
    photoAlt: 'Marcelo Aguiar',
    socialLinks: {
      instagram: '@marceloaguiaroficial',
      youtube: 'www.youtube.com/@marceloaguiaroficial',
      spotify: 'Marcelo Aguiar'
    },
    achievements: [
      {
        badge: 'Sucessos',
        title: 'Deus Grande',
        titleStyle: 'bold',
        text: '"Escolhemos essa música por trazer uma forte mensagem sobre a importância de levar a palavra de Deus e sua mensagem de fé e perseverança; a música já está sendo cantada nas igrejas em seus grupos de louvores, esse é nosso maior termômetro da força que ela tem de elevar e emocionar as pessoas", conta Marcelo.',
        image: '/images/artists/deus-grande-secao-2.png',
        imageAlt: 'Capa do single Deus Grande',
        imageAlignment: 'center'
      }
    ]
  },
  {
    slug: 'marcados',
    name: 'Marcados',
    layoutType: 'alternate',
    bio: [
      'Marcados é um grupo gospel que expressa fé, entrega e identidade cristã por meio de canções intensas e cheias de propósito. Seu som une adoração contemporânea e mensagem profunda, criando uma conexão verdadeira com o público.',
      'Os integrantes do grupo de pagode gospel Marcados incluem Gil nos vocais, Wendell no cavaco, Léo na bateria, Edson no surdo, Dio no pandeiro, Triguinho no reco-reco, Aleks nos teclados, Brizola no baixo, Bahia na guitarra e Igor no tantan, com Luizinho no tambu, sendo um grupo que leva mensagens de fé através do pagode, surgindo de inspirações do gênero secular, mas focado no cristão.'
    ],
    photo: '/images/artists/marcados-individual.png',
    photoAlt: 'Grupo Marcados',
    heroImage: '/images/artists/marcados-hero-small.png',
    heroImageAlt: 'Grupo Marcados',
    fullWidthImage: '/images/artists/marcados-full-width.png',
    fullWidthImageAlt: 'Grupo Marcados em apresentação',
    socialLinks: {
      instagram: '@marcadospagodegospel',
      youtube: 'www.youtube.com/@marcadospagode',
      spotify: 'Marcados Gospel'
    },
    achievements: []
  }
]

export function getArtistBySlug(slug: string): ArtistData | undefined {
  return artistsData.find(artist => artist.slug === slug)
}

export function getAllArtistSlugs(): string[] {
  return artistsData.map(artist => artist.slug)
}
