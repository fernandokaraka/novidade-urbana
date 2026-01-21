// Dados estáticos dos projetos para páginas individuais

export interface ContentBlock {
  type: 'text' | 'image' | 'text-image' | 'image-text' | 'video' | 'hero-images'
  text?: string
  highlightedNames?: { name: string; color?: string }[]
  image?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  videoThumbnail?: string
  videoBadge?: string
  // Para hero-images (duas imagens lado a lado)
  images?: { src: string; alt: string }[]
  // Customizações opcionais
  textSize?: number
  imageHeight?: number
}

export interface ProjectData {
  slug: string
  title: {
    main: string
    highlight?: string
    highlightFont?: 'script' | 'yellowtail'
  }
  subtitle?: string
  titleAfterHero?: boolean // Se true, título vem depois das imagens hero
  content: ContentBlock[]
}

export const projectsData: ProjectData[] = [
  {
    slug: 'grammy-latino',
    title: {
      main: 'Passense Thalles Roberto vence',
      highlight: 'Grammy Latino',
      highlightFont: 'yellowtail'
    },
    subtitle: 'de música cristã',
    titleAfterHero: true,
    content: [
      {
        type: 'image',
        image: '/images/artists/grammy-individual-img-1.png',
        imageAlt: 'Thalles Roberto no Grammy Latino'
      },
      {
        type: 'text',
        text: 'Thalles Roberto conquistou o Grammy Latino 2024 na categoria Melhor Álbum de Música Cristã em Língua Portuguesa com o projeto Deixa Vir – Vol II [Ao Vivo], um dos reconhecimentos mais importantes da música latina e referente à excelência artística e impacto cultural de sua obra. Essa conquista internacional celebra sua mensagem de fé e a relevância do seu trabalho no cenário gospel contemporâneo.',
        highlightedNames: [{ name: 'Thalles Roberto' }]
      },
      {
        type: 'image-text',
        text: 'O álbum Deixa Vir – Vol II [Ao Vivo], lançado pela Sony Music, reúne músicas gravadas ao vivo com participações especiais e um conceito espiritual marcante, e foi escolhido entre trabalhos de grandes artistas como Bruna Karla, Rosa de Saron, Eli Soares e Vocal Livre na mesma categoria.\n\nEssa conquista reforça a relevância do ministério de Thalles Roberto no cenário gospel nacional e internacional, reconhecendo não apenas o talento do artista, mas também o trabalho de toda equipe envolvida na produção, gravação e direção desse projeto premiado.',
        image: '/images/artists/grammy-individual-img-2.png',
        imageAlt: 'Thalles Roberto equipe Grammy',
        imagePosition: 'left'
      }
    ]
  },
  {
    slug: 'reveillon-2026',
    title: {
      main: 'Reveillon',
      highlight: '2026',
      highlightFont: 'yellowtail'
    },
    content: [
      {
        type: 'text-image',
        text: 'Thalles Roberto foi um dos grandes destaques do Réveillon 2026 no Rio de Janeiro, apresentando-se em Copacabana, um dos cenários mais simbólicos do país, diante de milhares de pessoas que celebravam a virada do ano. Sua participação integrou a programação oficial do evento, levando música, fé e uma mensagem de esperança a um público diverso, em uma das maiores celebrações de Ano Novo do mundo.',
        image: '/images/artists/reveillon2026-individual-img-1.png',
        imageAlt: 'Thalles Roberto no Reveillon 2026',
        imagePosition: 'right',
        highlightedNames: [{ name: 'Thalles Roberto' }],
        textSize: 23,
        imageHeight: 460
      },
      {
        type: 'image-text',
        text: 'Ao lado do Marcados, a apresentação ganhou ainda mais força e significado, unindo vozes, adoração e intensidade espiritual em um momento marcante da noite. O encontro no palco reforçou a relevância da música gospel no cenário cultural nacional e consolidou a presença dos artistas em eventos de grande projeção, conectando propósito, arte e impacto social.',
        image: '/images/artists/reveillon2026-individual-img-2.png',
        imageAlt: 'Marcados no Reveillon 2026',
        imagePosition: 'left',
        highlightedNames: [{ name: 'Marcados' }],
        textSize: 23,
        imageHeight: 460
      }
    ]
  },
  {
    slug: 'feat-jorge',
    title: {
      main: 'Jorge',
      highlight: 'Feat.',
      highlightFont: 'yellowtail'
    },
    content: [
      {
        type: 'text-image',
        text: 'O feat entre Jorge e Thalles Roberto representa um encontro marcante entre duas vozes de grande relevância no cenário gospel nacional. A colaboração une talentos consolidados, estilos musicais profundos e uma mensagem central de fé, arrependimento e transformação, traduzida em uma obra de forte impacto espiritual e artístico.\n\nMais do que uma parceria musical, o projeto simboliza a convergência de propósitos, a maturidade artística de ambos os artistas, ampliando o alcance da mensagem cristã e fortalecendo o diálogo da música gospel com diferentes públicos. O feat reafirma a importância de colaborações estratégicas dentro do segmento, consolidando-se como um marco relevante na música gospel contemporânea.',
        image: '/images/artists/feat-jorge-individual-img-1.png',
        imageAlt: 'Jorge e Thalles Roberto',
        imagePosition: 'right',
        highlightedNames: [{ name: 'Jorge' }, { name: 'Thalles Roberto' }]
      },
      {
        type: 'image-text',
        text: 'Avenida do Arrependimento é uma canção marcante que se consolidou como uma das obras mais profundas e emblemáticas da música gospel brasileira. Interpretada por Thalles Roberto em parceria com Jorge, a música carrega uma mensagem direta sobre arrependimento, retorno aos princípios da fé e reconciliação espiritual.\n\nCom uma narrativa forte e emocional, Avenida do Arrependimento transcende o formato musical e se torna um verdadeiro testemunho, impactando ouvintes por sua honestidade, intensidade e devoção espiritual. O projeto se destaca pela união de vozes, propósito e maturidade artística, reforçando a importância da música como instrumento de transformação e reflexão no cenário gospel contemporâneo.',
        image: '/images/artists/feat-jorge-individual-img-2.png',
        imageAlt: 'Avenida do Arrependimento',
        imagePosition: 'left',
        highlightedNames: [{ name: 'Avenida do Arrependimento' }]
      }
    ]
  },
  {
    slug: 'deus-grande',
    title: {
      main: 'Grande',
      highlight: 'Deus',
      highlightFont: 'yellowtail'
    },
    content: [
      {
        type: 'video',
        videoThumbnail: '/images/artists/deus-e-grande-individual-img-1.png',
        videoBadge: 'AO VIVO'
      },
      {
        type: 'text',
        text: 'Deus é Grande, interpretada por Marcelo Aguiar, é uma das canções mais emblemáticas e emocionantes do repertório do cantor. Marcada por um momento de forte afirmação da música cristã no país, a canção se tornou um verdadeiro hino de exaltação, destacando a soberania, o poder e a grandeza de Deus com uma linguagem direta e impactante.',
        highlightedNames: [{ name: 'Deus é Grande, interpretada por Marcelo Aguiar,' }]
      },
      {
        type: 'text',
        text: 'A música marcou gerações, ultrapassou barreiras dentro do segmento gospel e ajudou a consolidar Marcelo Aguiar como uma das vozes mais relevantes do cenário cristão nacional. Deus é Grande soma milhões de reproduções nas plataformas digitais, além de forte presença história em cultos, eventos e apresentações ao vivo, mantendo-se atual mesmo após anos de lançamento. Sua importância está não apenas nos números expressivos, mas no legado espiritual e cultural que a canção carrega até hoje.'
      }
    ]
  }
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(project => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map(project => project.slug)
}
