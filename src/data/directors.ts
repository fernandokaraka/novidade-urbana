export interface DirectorGalleryItem {
  image: string
  caption: string
}

export interface DirectorProject {
  text: string
  image: string
  imagePosition: 'left' | 'right'
  imageCaption?: string
}

export interface DirectorPartner {
  name: string
  logo: string
}

export interface DirectorPartnersSection {
  partners: DirectorPartner[]
  customText?: string
}

// Novas interfaces para Fábio Príncipe
export interface TimelineEntry {
  company: string
  role: string
  period: string
  location: string
  items: string[]
}

export interface HighlightProject {
  title: string
  items: string[]
}

export interface TextSection {
  title: string
  items: string[]
}

export interface FeaturedArtist {
  name: string
  description: string[]
  image: string
}

// Interfaces para seções flexíveis (Marcelo Portuga)
export interface ContentSectionBase {
  id: string
  background?: 'dark' | 'light'
}

export interface TextContentSection extends ContentSectionBase {
  type: 'text'
  title?: string
  titleHighlight?: string // parte em script/amarelo
  paragraphs: string[]
  subtitle?: string
}

export interface ImageTextSection extends ContentSectionBase {
  type: 'imageText'
  title?: string
  titleHighlight?: string
  paragraphs: string[]
  image: string
  imagePosition: 'left' | 'right'
  decorativeImage?: string // imagem decorativa do lado oposto
}

export interface GalleryWithCaptionsSection extends ContentSectionBase {
  type: 'galleryWithCaptions'
  images: { src: string; caption: string }[]
}

export interface MilestonesSection extends ContentSectionBase {
  type: 'milestones'
  title: string
  image?: string
  imagePosition?: 'left' | 'right'
  items: string[]
  closingText?: string
}

export interface LogosSection extends ContentSectionBase {
  type: 'logos'
  title?: string
  titleHighlight?: string
  paragraphs?: string[]
  logos: { src: string; name: string }[]
  closingText?: string
}

export interface FestivalSection extends ContentSectionBase {
  type: 'festival'
  title: string
  titleHighlight: string
  image: string
  mainText: string // texto com nomes em negrito usando **nome**
  additionalParagraphs: string[]
}

export interface AudiovisualSection extends ContentSectionBase {
  type: 'audiovisual'
  title: string
  paragraphs: string[]
  images: string[]
}

export interface SpiritualTurnSection extends ContentSectionBase {
  type: 'spiritualTurn'
  title: string
  image: string
  introParagraph: string
  yearTitle: string
  items: string[]
}

export interface PartnershipSection extends ContentSectionBase {
  type: 'partnership'
  title: string
  titleHighlight?: string
  paragraphs: string[]
  logo?: string
  hasBottomBorder?: boolean
}

export interface LegacySection extends ContentSectionBase {
  type: 'legacy'
  title: string
  titleHighlight: string
  introParagraph: string
  highlightTitle: string
  items: string[]
  closingParagraphs: string[]
}

export type FlexibleSection =
  | TextContentSection
  | ImageTextSection
  | GalleryWithCaptionsSection
  | MilestonesSection
  | LogosSection
  | FestivalSection
  | AudiovisualSection
  | SpiritualTurnSection
  | PartnershipSection
  | LegacySection

export interface Director {
  slug: string
  name: string
  role: string
  photo: string
  instagram?: string
  shortBio: string
  fullBio: string[]
  gallery: DirectorGalleryItem[]
  projects: DirectorProject[]
  partners: DirectorPartner[]
  partnersText?: string
  backgroundImage?: string
  currentRole: {
    title: string
    description: string[]
    lightBackground?: boolean
  }
  // Campos específicos para páginas customizadas
  statementText?: string
  timeline?: TimelineEntry[]
  highlightProjects?: {
    introItems: string[]
    projects: HighlightProject[]
    galleryImages: string[]
  }
  textSections?: TextSection[]
  featuredArtist?: FeaturedArtist
  // Seções flexíveis para páginas muito customizadas (Marcelo Portuga)
  flexibleSections?: FlexibleSection[]
}

export const directors: Director[] = [
  {
    slug: 'marcos-ascena',
    name: 'Marcos Ascena',
    role: 'Produtor Executivo - Manager Artístico',
    photo: '/images/directors/marcos-sena-img-home.png',
    instagram: '@marcosascena',
    backgroundImage: '/images/backgrounds/background-doninha.png',
    shortBio: 'Atuando profissionalmente na indústria da música desde 2006, Marcos Ascena soma quase duas décadas de experiência como produtor executivo, empresário artístico e gestor de projetos musicais, com forte atuação no desenvolvimento, estruturação e execução de projetos culturais e musicais de grande porte no Brasil e no exterior.',
    fullBio: [
      'Ao longo de sua trajetória, Marcos esteve à frente e nos bastidores de produções artísticas complexas, envolvendo gestão de carreira, produção executiva de shows, coordenação de equipes técnicas e criativas, planejamento estratégico, negociações e desenvolvimento de projetos especiais, participando de centenas de shows, além de turnês nacionais e internacionais e gravações de projetos audiovisuais de grande escala, como DVDs, álbuns e registros ao vivo.',
      'Durante esse período, trabalhou com artistas de grande relevância nacional, transitando entre os gêneros gospel, pop, samba, rock e sertanejo, colaborando com nomes consagrados da música brasileira, incluindo Thalles Roberto, Restart, Sorriso Maroto, Só Pra Contrariar, Jeito Moleque, Sambô e a dupla Maria Cecília & Rodolfo, além de outros projetos artísticos e culturais realizados por meio de sua produção.',
    ],
    gallery: [
      {
        image: '/images/directors/marcos-ascena/gallery-1.jpg',
        caption: 'Marcos, Bruno Cardoso (Sorriso Maroto), San (Vocalista) e Sudu (Baterista) do grupo Sambô, Marcelo Portuga (Sócio) e parceiros em projetos musicais',
      },
      {
        image: '/images/directors/marcos-ascena/gallery-2.jpg',
        caption: 'Pe lanza ( Vocalista da banda Restart )',
      },
      {
        image: '/images/directors/marcos-ascena/gallery-3.jpg',
        caption: 'Grupo Jeito Moleque',
      },
    ],
    projects: [
      {
        text: 'Entre os principais marcos profissionais, destacam-se projetos desenvolvidos com Thalles Roberto, incluindo gravações de projetos audiovisuais de alto impacto, como o DVD "Deixa Vir – Volume 2", vencedor do Latin Grammy, no qual Marcos Ascena atuou na produção geral do projeto.',
        image: '/images/directors/marcos-ascena/projeto-1.jpg',
        imagePosition: 'right',
      },
      {
        text: 'Sua trajetória também inclui a produção de DVD gravado em estádio de futebol em Belo Horizonte, na Arena RMV, evidenciando sua capacidade de atuar em projetos de grande escala e alta complexidade operacional. Soma-se a isso a produção executiva do álbum "AV do Arrependimento", gravado em estúdio, com produção e direção musical de Dudu Borges e participação especial do cantor Jorge, da dupla Jorge & Mateus.',
        image: '/images/directors/marcos-ascena/projeto-2.jpg',
        imagePosition: 'left',
      },
      {
        text: 'Outro marco relevante de sua carreira foi a atuação na produção executiva artística de Thalles Roberto no Réveillon de Copacabana, evento reconhecido pelo site oficial do Guinness World Records como a maior virada de ano do mundo. Dentro do mesmo evento, Marcos também esteve à frente da gestão e participação artística do Grupo Marcados, artista agenciado pela Novidade Urbana, que integrou a programação oficial do Réveillon.',
        image: '/images/directors/marcos-ascena/projeto-3.jpg',
        imagePosition: 'right',
      },
      {
        text: 'Além da produção artística, Marcos possui ampla experiência na liderança de equipes multidisciplinares, envolvendo músicos, técnicos, produtores, fornecedores, patrocinadores e gestores públicos, bem como na estruturação administrativa e jurídica de projetos culturais, contratos artísticos e modelos profissionais de produção.\n\nEntre esses trabalhos, destaco minha participação no projeto "Avenida do Arrependimento", de Thalles Roberto, no qual atuei diretamente no processo de produção artística e executiva.',
        image: '/images/directors/marcos-ascena/projeto-4.jpg',
        imagePosition: 'left',
        imageCaption: 'Marcos e Aaron Sterling',
      },
      {
        text: 'Nesse projeto, trabalhei em conjunto com o renomado baterista e músico de estúdio Aaron Sterling, conhecido mundialmente por suas colaborações com artistas como Taylor Swift, Post Malone, John Mayer, Shakira, Alejandro Sanz, Selena Gomes e Miley Cyrus. Aaron foi o responsável pelas gravações de bateria do projeto, contribuindo com sua assinatura musical e excelência técnica.',
        image: '/images/directors/marcos-ascena/projeto-5.jpg',
        imagePosition: 'right',
      },
    ],
    partners: [
      {
        name: 'Warner Music',
        logo: '/images/directors/marcos-ascena/warner-music-logo.png',
      },
      {
        name: 'Sony Music',
        logo: '/images/directors/marcos-ascena/sony-music-logo.png',
      },
    ],
    currentRole: {
      title: 'Atuação Atual',
      description: [
        'Atualmente, à frente da Novidade Urbana, Marcos Ascena lidera e cuida diretamente do desenvolvimento estratégico e da gestão de carreira de artistas relevantes da música brasileira, incluindo Thalles Roberto, o Grupo Marcados e o cantor Marcelo Aguiar. Sua atuação envolve planejamento de carreira, estruturação de projetos artísticos, produção executiva, posicionamento de mercado, gestão de agenda, desenvolvimento de novos projetos e expansão nacional e internacional, sempre com uma visão contemporânea, profissional e sustentável.',
        'Seu trabalho é guiado por valores sólidos, ética, responsabilidade, compromisso com pessoas e projetos e uma busca constante por excelência, consolidando sua atuação como um profissional capaz de transformar ideias artísticas em projetos consistentes, relevantes e culturalmente impactantes.',
      ],
    },
  },
  {
    slug: 'doninha',
    name: 'Doninha',
    role: 'Produtor de eventos e empresário artístico',
    photo: '/images/directors/doninho-img-home.jpg',
    instagram: '@doninha_donis',
    backgroundImage: '/images/backgrounds/background-doninha.png',
    shortBio: 'Natural de Santo André (SP), Doninha iniciou sua trajetória na música ainda na infância. Aos 10 anos de idade, passou a tocar bateria oficialmente em uma igreja da comunidade onde morava, na zona leste de São Paulo, dando os primeiros passos em sua formação musical.',
    fullBio: [],
    gallery: [],
    projects: [
      {
        text: 'Em 2005, já atuando profissionalmente, integrou a banda gospel Praise Machine, com a qual gravou três álbuns e um DVD, além de realizar diversas apresentações e turnês por todo o Brasil.',
        image: '/images/directors/doninha/praise-machine.jpg',
        imagePosition: 'right',
      },
    ],
    partners: [
      {
        name: 'Gospel Records',
        logo: '/images/directors/doninha/gospel-records-logo.png',
      },
      {
        name: 'Sony Music',
        logo: '/images/directors/doninha/sony-music-logo.png',
      },
      {
        name: 'Graça Music',
        logo: '/images/directors/doninha/graca-music-logo.png',
      },
      {
        name: 'Onimusic',
        logo: '/images/directors/doninha/onimusic-logo.png',
      },
    ],
    partnersText: 'Paralelamente à carreira artística, Doninha passou a atuar nos bastidores da música, trabalhando com promoção e divulgação de artistas. Ao longo dos anos, colaborou com algumas das maiores gravadoras do país, como Gospel Records, Sony Music, Oni Music e Graça Music, além de gerenciar a comunicação e divulgação de dezenas de artistas independentes.',
    currentRole: {
      title: 'Atuação Atual',
      description: [
        'Desde 2011, com ampla experiência no mercado fonográfico gospel, Doninha atua no agenciamento artístico, trabalhando com grandes nomes da música Gospel.',
        'Além dessas frentes, Doninha também é empresário no segmento de realização de eventos culturais, tendo vasta experiência em eventos do setor público.',
      ],
      lightBackground: true,
    },
  },
  {
    slug: 'marcelo-portuga',
    name: 'Marcelo Portuga',
    role: 'Executivo criativo, estrategista fonográfico e arquiteto de modelos de negócio musical.',
    photo: '/images/directors/marcelo-portuga-img-home.png',
    instagram: '@marceloportuga',
    backgroundImage: '/images/backgrounds/background-doninha.png',
    shortBio: 'Marcelo Augusto Gonçalves, conhecido profissionalmente como Marcelo Portuga, é um executivo criativo, produtor musical e estrategista fonográfico brasileiro reconhecido por estruturar carreiras, escalar catálogos e transformar movimentos culturais em operações musicais sustentáveis, com atuação no Brasil e no mercado internacional.',
    fullBio: [],
    gallery: [],
    projects: [],
    partners: [],
    currentRole: {
      title: '',
      description: [],
    },
    statementText: 'Sua trajetória atravessa diferentes ciclos da indústria fonográfica do funk urbano ao gospel contemporâneo sempre orientada por processos industriais, governança, distribuição global, propriedade intelectual e visão de longo prazo.',
    flexibleSections: [
      {
        id: 'formacao-funk',
        type: 'text',
        background: 'dark',
        title: 'A formação de uma visão industrial no funk brasileiro',
        paragraphs: [
          'Marcelo Portuga iniciou sua carreira no ambiente do funk paulista, com passagem determinante pela GR6, onde consolidou sua base em gestão artística, produção musical, posicionamento de imagem e dinâmica comercial da música digital.',
          'Esse período foi fundamental para a construção de sua leitura estratégica da música como indústria escalável, guiada por dados, contratos, distribuição e controle operacional e não apenas como expressão cultural.',
        ],
      },
      {
        id: 'portuga-records',
        type: 'text',
        background: 'dark',
        title: 'Portuga Records: escala, hits e institucionalização',
        paragraphs: [
          'Em 2013, fundou a Portuga Records, gravadora independente voltada à descoberta, desenvolvimento e aceleração de talentos. Sob sua liderança, a empresa estruturou carreiras de artistas que se tornaram protagonistas da música brasileira, como Kevinho, Kekel, Jottapê, MC MM, Dani Russo, MC Hollywood, Tainá Costa, Lexa e MC Guimê.',
          'Durante esse ciclo, Portuga esteve à frente de projetos que se tornaram marcos históricos da música digital brasileira, entre eles:',
        ],
      },
      {
        id: 'portuga-records-gallery',
        type: 'galleryWithCaptions',
        background: 'dark',
        images: [
          { src: '/images/directors/marcelo-portuga/kevinho.jpg', caption: '"Olha a Explosão" : Kevinho (mais de 1 bilhão de visualizações)' },
          { src: '/images/directors/marcelo-portuga/mc-fioti.jpg', caption: '"Bum Bum Tam Tam" : MC Fioti (aprox. 1,7 bilhão de visualizações)' },
        ],
      },
      {
        id: 'portuga-records-cont',
        type: 'text',
        background: 'dark',
        paragraphs: [
          'No auge de sua operação, a Portuga Records mantinha mais de 24 estúdios próprios, operando de forma integrada, o que possibilitou uma produção industrial superior a 500 músicas por mês, com alto giro de lançamentos e domínio total do pipeline criativo.',
          'Esse modelo de escala, velocidade e controle reposicionou o funk como indústria estruturada e rendeu destaque nacional, incluindo capa da revista Veja, ao evidenciar o gênero como negócio musical consolidado.',
        ],
        subtitle: 'Shows, turnês e expansão internacional',
      },
      {
        id: 'shows-turnes',
        type: 'text',
        background: 'dark',
        paragraphs: [
          'Paralelamente à força digital, Marcelo Portuga liderou a expansão de artistas para grandes palcos e circuitos internacionais, consolidando o funk brasileiro como produto de exportação cultural.',
        ],
      },
      {
        id: 'principais-marcos',
        type: 'milestones',
        background: 'light',
        title: 'Entre os principais marcos:',
        image: '/images/directors/marcelo-portuga/show-bandeira.jpg',
        imagePosition: 'left',
        items: [
          'Palco principal da Festa do Peão de Barretos',
          'Lollapalooza Chile',
          'Turnês pela Europa, com forte presença em Portugal',
          'Kevinho realizou mais de 10 turnês em Portugal, estabelecendo presença contínua no mercado europeu.',
        ],
        closingText: 'Essa atuação integrou streaming, palco, território, marca e público, ampliando o valor das carreiras além do ambiente digital.',
      },
      {
        id: 'kondzilla-records',
        type: 'imageText',
        background: 'light',
        title: 'Kondzilla Records:',
        titleHighlight: 'governança, contratos e posicionamento global',
        paragraphs: [
          'Em 2017, Marcelo Portuga e Konrad Dantas fundaram a Kondzilla Records, estruturando o braço fonográfico do maior ecossistema de música urbana do país.',
          'Como cofundador, Portuga teve papel central na criação do modelo de negócio, na governança artística e empresarial e na institucionalização do funk dentro do mercado global, elevando padrões contratuais, artísticos e comerciais.',
        ],
        image: '/images/directors/marcelo-portuga/kondzilla-placa.jpg',
        imagePosition: 'right',
      },
      {
        id: 'marcos-estrategicos',
        type: 'logos',
        background: 'light',
        title: 'Entre os principais marcos estratégicos desse período:',
        paragraphs: [
          'Contrato milionário de distribuição global com a The Orchard',
          'Contrato editorial [publishing] com a Universal Music Publishing Group',
          'Esses acordos integraram fonograma, distribuição e publishing sob uma lógica profissional de indústria, posicionando a Kondzilla Records em patamar internacional.',
        ],
        logos: [
          { src: '/images/directors/marcelo-portuga/universal-logo.png', name: 'Universal Music Publishing Group' },
        ],
      },
      {
        id: 'publicidade-licenciamento',
        type: 'logos',
        background: 'light',
        title: 'Publicidade, licenciamento e audiovisual',
        paragraphs: [
          'Durante sua atuação na Kondzilla Records, Marcelo Portuga liderou projetos de publicidade, licenciamento e audiovisual com grandes marcas e instituições, incluindo:',
        ],
        logos: [
          { src: '/images/directors/marcelo-portuga/lg-logo.png', name: 'LG' },
          { src: '/images/directors/marcelo-portuga/casas-bahia-logo.png', name: 'Casas Bahia' },
          { src: '/images/directors/marcelo-portuga/mcdonalds-logo.png', name: "McDonald's" },
        ],
        closingText: 'Músicas do catálogo também foram utilizadas em ações institucionais do Instituto Butantan, durante a pandemia.',
      },
      {
        id: 'kondzilla-festival',
        type: 'festival',
        background: 'dark',
        title: 'KondZilla',
        titleHighlight: 'Festival',
        image: '/images/directors/marcelo-portuga/kondzilla-festival.png',
        mainText: 'O KondZilla Festival no Sambódromo do Anhembi aconteceu em 19 de novembro de 2019, sendo um grande evento de estreia que reuniu diversos nomes do funk e do pop, como **Kevin O Chris, Léo Santana, Lexa, Kevinho e o próprio Alok**, no pavilhão coberto do Anhembi, celebrando a nova geração da música brasileira com mais de 10 horas de shows.',
        additionalParagraphs: [
          'Foi a primeira edição do festival, organizado pelo produtor KondZilla, conhecido pelo maior canal de música do YouTube.',
          'O evento marcou a união de artistas do funk e outros gêneros no mesmo palco, segundo noticiado na época pelo Metrópoles e pela Veja SP.',
          'Embora o evento tenha sido em 2019, a busca pode ter vindo de interesse em edições futuras ou do histórico do festival.',
        ],
      },
      {
        id: 'audiovisual',
        type: 'audiovisual',
        background: 'dark',
        title: 'Audiovisual',
        paragraphs: [
          'No audiovisual, artistas da gravadora participaram de **produções originais da Netflix**, com contratos formais assinados, incluindo as **séries Sintonia e DNA do Crime**.',
        ],
        images: [
          '/images/directors/marcelo-portuga/sintonia.png',
        ],
      },
      {
        id: 'virada-espiritual',
        type: 'spiritualTurn',
        background: 'dark',
        title: 'Virada espiritual, propósito e reconhecimento internacional',
        image: '/images/directors/marcelo-portuga/marcelo-virada.jpg',
        introParagraph: 'Após a perda de seu pai, Marcelo Portuga viveu uma experiência espiritual profunda que resultou em sua conversão ao cristianismo evangélico e em uma reavaliação estratégica de sua atuação na indústria musical.',
        yearTitle: 'Em 2024:',
        items: [
          'Realizou a venda da Portuga Records, encerrando seu ciclo no funk secular;',
          'Foi vencedor do Grammy, ao lado de Thalles Roberto, com premiação recebida em 14 de novembro de 2024.',
        ],
      },
      {
        id: 'novidade-urbana-ahsa',
        type: 'partnership',
        background: 'dark',
        title: 'Novidade Urbana e AHSA Music:',
        titleHighlight: 'gospel em escala global',
        paragraphs: [
          'Após essa transição, fundou a Novidade Urbana e tornou-se sócio da AHSA Music, com operação no Brasil e nos Estados Unidos.',
          'No mercado americano, fechou contrato de distribuição com a Virgin Music.',
          'O casting inclui Clóvis Pinho, Emanuelles, além do projeto Marcados e do projeto infantil cristão Turma da Capivara, voltado ao público infantil, com proposta educativa e multiplataforma.',
        ],
        logo: '/images/directors/marcelo-portuga/ahsa-logo.png',
        hasBottomBorder: true,
      },
      {
        id: 'tese-legado',
        type: 'legacy',
        background: 'dark',
        title: 'Tese executiva e',
        titleHighlight: 'Legado',
        introParagraph: 'Marcelo Portuga não opera lançamentos opera sistemas.',
        highlightTitle: 'Seu diferencial está em:',
        items: [
          'Escalar produção e catálogo em nível industrial;',
          'Negociar contratos estruturantes;',
          'Transformar artistas em marcas globais;',
          'Alinhar fé, mercado, governança e impacto cultural.',
        ],
        closingParagraphs: [
          'Do funk ao gospel, sua trajetória é marcada por reinvenção estratégica, execução comprovada e visão de longo prazo.',
          'Quando Marcelo Portuga entra em um projeto, a indústria presta atenção porque estruturas são construídas e mercados se movem.',
        ],
      },
    ],
  },
  {
    slug: 'fabio-principe',
    name: 'Fabio príncipe',
    role: 'Empresário e produtor artístico',
    photo: '/images/directors/fabio-principe-img-home-nova.png',
    instagram: '@fabiouniverso',
    backgroundImage: '/images/backgrounds/background-doninha.png',
    shortBio: 'Empresário e produtor artístico com mais de 20 anos de experiência em negócios, cultura e entretenimento, especializado em produção musical, estratégia corporativa e gestão cultural de grande escala. Reconhecido internacionalmente por sua atuação como produtor e empresário do cantor Thalles Roberto, vencedor do Grammy Latino 2024 de Melhor Álbum Gospel, e por ser o responsável pelo impulsionamento da carreira do cantor Victin, maior artista de trap gospel no Brasil, além da gestão do grupo Marcados [Pagode Gospel], o maior do ritmo na América Latina.',
    fullBio: [],
    gallery: [],
    projects: [],
    partners: [],
    currentRole: {
      title: '',
      description: [],
    },
    statementText: 'Fundador de empresas líderes nos setores de varejo, atacado, produção artística e comércio internacional, com impacto direto no crescimento econômico, geração de empregos, valorização cultural e transformação social.',
    timeline: [
      {
        company: 'Novidade Urbana Produções Artísticas',
        role: 'Fundador & Diretor Executivo',
        period: '2022 – Atual',
        location: 'Brasil',
        items: [
          'Produtor e empresário do cantor Thalles Roberto, vencedor do Grammy Latino 2024 – Melhor Álbum Gospel.',
          'Responsável pelo impulsionamento e crescimento da carreira do cantor Victin, maior artista de trap gospel do Brasil.',
          'Responsável pela gestão do grupo Marcados [Pagode Gospel], o maior do ritmo na América Latina.',
          'Estruturou parcerias estratégicas com gravadoras, artistas e instituições culturais.',
        ],
      },
      {
        company: 'Tubarão Express Utilidades em Geral LTDA',
        role: 'Fundador & CEO',
        period: '2007 – fevereiro/2018',
        location: 'Brasil',
        items: [
          'Rede de varejo e atacado de grande porte, referência regional no interior de São Paulo.',
          'Responsável por negociações com multinacionais [Nestlé, Ambev, Unilever, etc].',
          'Reconhecida por projetos sociais e filantrópicos de grande impacto comunitário.',
          'Atuei como CEO até fevereiro de 2018, quando me desliguei da gestão da empresa para dedicar-me integralmente à família e aos projetos artísticos e culturais.',
        ],
      },
      {
        company: 'Atuação como Importador e Exportador',
        role: 'Empresário',
        period: '2010 – Atual',
        location: 'Brasil',
        items: [
          'Trabalhou com importação e exportação de artigos de decoração, presentes, ferramentas e utilidades em geral.',
          'Obteve grande êxito, atuando em diversos estados do Brasil.',
        ],
      },
    ],
    highlightProjects: {
      introItems: [
        'Grammy Latino 2024 – Melhor Álbum Gospel: Produção e gestão do álbum vencedor, com o cantor Thalles Roberto.',
        'Carreira do Cantor Victin – Impulsionamento e crescimento artístico do maior artista de trap gospel no Brasil.',
        'Gestão do Grupo Marcados [Pagode Gospel] – Consolidação do maior grupo de pagode gospel da América Latina.',
        'Shows e Turnês Artísticas – Produção de apresentações musicais de artistas de destaque em diferentes cidades do Brasil.',
      ],
      projects: [
        {
          title: 'ORE COMIGO FESTIVAL',
          items: [
            'Um dos organizadores do maior festival gospel da América Latina, realizado em estádios e reunindo mais de 60 mil pessoas por edição.',
            'Em uma de suas edições, reuniu em um único dia os 54 maiores nomes da música gospel, além dos principais pregadores e palestrantes cristãos.',
            'Com 14 horas ininterruptas de programação, consolidou-se como uma das maiores maratonas de música e fé do continente.',
            'Foi transmitido pela TV Globo, recebendo ampla cobertura da mídia nacional e internacional, incluindo destaque no Jornal Nacional.',
            'Reconhecido como uma das principais plataformas de expressão cultural e espiritual cristã na América Latina.',
          ],
        },
        {
          title: 'CARREIRA DE THALLES ROBERTO',
          items: [
            'Empresário e produtor responsável pelo impulsionamento da carreira de Thalles Roberto desde 2023.',
            'Vencedor do Grammy Latino 2024 – Melhor Álbum Gospel com o álbum "Deixa Vir".',
            'Presença em programas de TV de grande audiência: Domingão com Hulk, Fantástico, Estrela da Casa, É de Casa, entre outros.',
            'Produção do DVD Ao Vivo 2025 – "Uma História Escrita Pelo Dedo de Deus 2", gravado no Ore Comigo Festival [Arena MRV, Belo Horizonte], com mais de 60 mil pessoas.',
          ],
        },
        {
          title: 'DOCUMENTÁRIO – GABI: A VITÓRIA DE UM PRÍNCIPE',
          items: [
            'Um dos protagonistas do documentário "Gabi: A Vitória de um Príncipe", lançado em 2024 no YouTube.',
            'Narra a história de Gabi, declarada morta pela medicina e que, após três dias, retornou à vida.',
            'Tornou-se motivo de inspiração e esperança, com repercussão nacional e internacional.',
            'Hoje, Gabi está viva, para a glória de Deus, e acompanha sua família no projeto de mudança da família para os Estados Unidos.',
          ],
        },
      ],
      galleryImages: [
        '/images/directors/fabio-principe/ore-comigo-1.jpg',
        '/images/directors/fabio-principe/ore-comigo-2.jpg',
        '/images/directors/fabio-principe/gabi-doc.jpg',
      ],
    },
    textSections: [
      {
        title: 'RECONHECIMENTO NA MÍDIA',
        items: [
          'Reportagens sobre o Grammy Latino 2024.',
          'Matérias sobre Victin.',
          'Destaques sobre o grupo Marcados.',
          'Cobertura sobre o Ore Comigo Festival, incluindo Jornal Nacional.',
          'Presença de Thalles Roberto em programas de TV.',
          'Divulgação do documentário "Gabi: A Vitória de um Príncipe".',
        ],
      },
      {
        title: 'PRÊMIOS E HONRARIAS',
        items: [
          'Grammy Latino 2024 – Melhor Álbum Gospel.',
          'Reconhecimento por ações sociais.',
          'Destaques em empreendedorismo e cultura.',
        ],
      },
      {
        title: 'PALESTRAS & CONVITES',
        items: [
          'Palestras em congressos e igrejas.',
          'Participação em eventos culturais e corporativos.',
        ],
      },
      {
        title: 'AFILIAÇÕES PROFISSIONAIS',
        items: [
          'Colaborador em iniciativas culturais e sociais.',
          'Parcerias com gravadoras e associações cristãs.',
        ],
      },
    ],
  },
]

export function getDirectorBySlug(slug: string): Director | undefined {
  return directors.find((director) => director.slug === slug)
}

export function getAllDirectorSlugs(): string[] {
  return directors.map((director) => director.slug)
}
