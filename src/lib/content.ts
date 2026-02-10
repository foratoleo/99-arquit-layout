/**
 * Content Data Structure
 *
 * Centralizes all copy content and project data for easy updates.
 * Import and use these throughout components to maintain consistency.
 *
 * TODO: Replace placeholder content with final PT-BR copy from client
 * TODO: Update image paths when project photography is provided
 */

// ============================================================================
// SITE CONTENT - PT-BR Copy
// ============================================================================

export const siteContent = {
  // Navigation
  nav: {
    logo: 'RE ARQUITETURA',
    links: [
      { label: 'Manifesto', href: '#manifesto' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contato', href: '#contato' },
    ],
  },

  // Hero Section
  hero: {
    logo: 'RE ARQUITETURA',
    headline: 'Arquitetura que transforma espacos em experiencias',
    subheadline: 'Projetos residenciais e comerciais de alto padrao com atencao aos detalhes',
    cta: 'CONVERSE CONOSCO',
    backgroundAlt: 'Arquitetura de alto padrao - RE Arquitetura & Design',
  },

  // Manifesto Section
  manifesto: {
    paragraphs: [
      'Acreditamos que a arquitetura nasce do dialogo entre a luz, o material e o silencio.',
      'Cada projeto e uma busca pela essencia, onde o superfluo da lugar ao essencial.',
      'Na quietude dos espacos, encontramos a beleza que transforma a vida cotidiana em experiencia extraordinaria.',
      'Menos e sempre mais, quando cada detalhe e executado com intencao e excelencia.',
    ],
  },

  // Technical Differentiator (Verticalization)
  technical: {
    title: 'Verticalizacao',
    subtitle: 'Expertise tecnica em projetos de grande porte',
    description: 'Dominio tecnico em obras verticalizadas, desde a concepcao estrutural ate a entrega final.',
    challenge: 'Construcoes verticais demandam precisao milimetrica. Cada laje, cada pilar, cada sistema hidraulico e eletrico deve ser perfeitamente coordenado.',
    solution: 'Integramos arquitetura, engenharia e construcao desde o primeiro traco. Nossa experiencia em projetos de multiplos pavimentos garante a coordenacao perfeita entre estrutura, instalacoes e acabamentos.',
    outcome: 'Edificios que respiram funcionalidade em cada detalhe. Espacos que funcionam perfeitamente para quem vive e trabalha neles, com durabilidade e sofisticacao.',
    points: [
      {
        title: 'Coordenacao Estrutural',
        description: 'Integracao completa entre arquitetura e engenharia para obras de multi-pavimentos.',
      },
      {
        title: 'Gestao de Obras',
        description: 'Acompanhamento rigoroso de cronogramas e orcamentos em projetos complexos.',
      },
      {
        title: 'Normativas e Seguranca',
        description: 'Conformidade total com legislacao brasileira e normas de seguranca vigentes.',
      },
      {
        title: 'Solucoes Customizadas',
        description: 'Projetos sob medida que atendem as necessidades especificas de cada cliente.',
      },
    ],
    visualLabel: 'Especialidade',
  },

  // Portfolio Section
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Projetos selecionados',
    viewAll: 'Ver todos',
    categories: {
      residential: 'Residencial',
      commercial: 'Comercial',
      interior: 'Interiores',
    },
  },

  // Materiality Section
  materiality: {
    title: 'Materialidade',
    subtitle: 'O detalhe faz a diferenca',
    description: 'A excelencia esta nos detalhes - na junta perfeita, na pedra lapidada, no acabamento impecavel.',
    cards: [
      {
        title: 'Marcenaria',
        description: 'Execucao precisionista em madeiras selecionadas.',
        image: '/images/materiality-1.jpg',
        imageAlt: 'Marcenaria de alto padrao - detalhe do acabamento',
      },
      {
        title: 'Pedras Naturais',
        description: 'Curadoria de granitos, marmores e quartzitas.',
        image: '/images/materiality-2.jpg',
        imageAlt: 'Pedras naturais - texturas e acabamentos',
      },
      {
        title: 'Artesanato',
        description: 'Parcerias com mestres artesaos nacionais.',
        image: '/images/materiality-3.jpg',
        imageAlt: 'Artesanato brasileiro em detalhes arquitetonicos',
      },
    ],
  },

  // Social Proof Section
  socialProof: {
    title: 'Reconhecimento e Credenciais',
    awards: [
      { title: 'Premio Brazil Architecture', year: '2024' },
      { title: 'Mencao Honrosa ArchDaily', year: '2023' },
      // TODO: Add actual awards from client
    ],
    credentials: [
      { label: 'CAU-SP', value: '123456' }, // TODO: Update with actual CAU number
      { label: 'Experiencia', value: '12 anos' },
    ],
    highlights: [
      { label: 'Projetos entregues', value: '50+' },
      { label: 'Especialidade', value: 'Verticalizacao' },
    ],
  },

  // Contact Section
  contact: {
    title: 'Vamos Conversar?',
    subtitle: 'Entre em contato para iniciar seu projeto de alto padrao',
    form: {
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      namePlaceholder: 'Seu nome completo',
      emailPlaceholder: 'seu@email.com',
      messagePlaceholder: 'Conte-nos sobre seu projeto. Qual o tipo de imovel? Localizacao? Visao geral?',
      submit: 'Enviar Mensagem',
      submitting: 'Enviando...',
      success: 'Obrigado pelo contato. Retornaremos em breve.',
    },
    whatsapp: {
      label: 'Ou converse diretamente via WhatsApp',
      phoneNumber: '5511999999999', // TODO: Update with actual WhatsApp number
      buttonText: 'Iniciar Conversa no WhatsApp',
    },
  },

  // Footer
  footer: {
    brand: 'RE Arquitetura & Design',
    address: {
      street: 'Rua Exemplo, 123', // TODO: Update with actual address
      city: 'Sao Paulo',
      state: 'SP',
      zip: '01234-567',
    },
    contact: {
      email: 'contato@re-arquitetura.com.br', // TODO: Update with actual email
      phone: '+55 11 9999-9999', // TODO: Update with actual phone
    },
    social: {
      instagram: 'https://instagram.com/re-arquitetura', // TODO: Update with actual handle
      linkedin: 'https://linkedin.com/company/re-arquitetura', // TODO: Update with actual URL
    },
    copyright: '© 2024 RE Arquitetura & Design. Todos os direitos reservados.',
  },
};

// ============================================================================
// PROJECTS DATA
// ============================================================================

export interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'residential' | 'commercial' | 'interior';
  images: ProjectImage[];
  year: string;
  location: string;
  area?: string;
}

/**
 * Portfolio Projects
 *
 * Professional placeholder projects demonstrating the firm's capabilities.
 * TODO: Replace with actual project data and photography when provided by client.
 *
 * Image preparation specs:
 * - Format: JPG or PNG (Next.js will convert to WebP/AVIF)
 * - Resolution: 1920px width for desktop, 1080px for mobile (minimum)
 * - Quality: 80-90% to balance file size and visual quality
 * - Naming: project-name-01.jpg, project-name-02.jpg for organization
 * - Delivery: Google Drive, Dropbox, or WeTransfer link
 */
export const projects: Project[] = [
  {
    id: 'residencial-jardins',
    title: 'Residencial Jardins',
    description: 'Casa de alto padrao nos Jardins com integracao total entre areas internas e externas. Design minimalista com materiais nobres e acabamentos de excelencia.',
    category: 'residential',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85',
        alt: 'Residencial Jardins - Fachada principal',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=85',
        alt: 'Residencial Jardins - Sala de estar integrada',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85',
        alt: 'Residencial Jardins - Detalhe de acabamento',
        width: 800,
        height: 600,
      },
    ],
    year: '2023',
    location: 'Jardins, Sao Paulo - SP',
    area: '450m²',
  },
  {
    id: 'edificio-corporativo-pinheiros',
    title: 'Edificio Corporativo Pinheiros',
    description: 'Edificio corporativo de 12 pavimentos com fachada em vidro e concreto aparente. Projeto de verticalizacao com eficiencia energetica e espaços de convivencia integrados.',
    category: 'commercial',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85',
        alt: 'Edificio Pinheiros - Fachada',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85',
        alt: 'Edificio Pinheiros - Lobby e recepcao',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=85',
        alt: 'Edificio Pinheiros - Terraço panorâmico',
        width: 800,
        height: 600,
      },
    ],
    year: '2022',
    location: 'Pinheiros, Sao Paulo - SP',
    area: '8.500m²',
  },
  {
    id: 'apartamento-higienopolis',
    title: 'Apartamento Higienopolis',
    description: 'Reforma completa de apartamento classicista dos anos 70, mantendo a autenticidade do periodo com linguagem contemporanea. Marcenaria sob medida e integracao espacial.',
    category: 'interior',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=85',
        alt: 'Higienopolis - Cozinha integrada',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85',
        alt: 'Higienopolis - Suite master',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=85',
        alt: 'Higienopolis - Sala de estar',
        width: 800,
        height: 600,
      },
    ],
    year: '2023',
    location: 'Higienopolis, Sao Paulo - SP',
    area: '180m²',
  },
  {
    id: 'casa-vinhedo',
    title: 'Casa do Vinhedo',
    description: 'Residencia de campo com integracao total com a paisagem. Materiais naturais, grandes vãos envidracados e transicoes fluidas entre interior e exterior.',
    category: 'residential',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85',
        alt: 'Casa do Vinhedo - Fachada externa',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=85',
        alt: 'Casa do Vinhedo - Varanda gourmet',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=85',
        alt: 'Casa do Vinhedo - Vista panorâmica',
        width: 800,
        height: 600,
      },
    ],
    year: '2022',
    location: 'Vinhedo - SP',
    area: '380m²',
  },
  {
    id: 'loft-vila-madalena',
    title: 'Loft Vila Madalena',
    description: 'Interiores de loft com estrutura aparente e acabamentos minimalistas. Conceito open-plan com flexibilidade de usos e materiais industriais refinados.',
    category: 'interior',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=85',
        alt: 'Loft Vila Madalena - Sala integrada',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=85',
        alt: 'Loft Vila Madalena - Detalhe estrutural',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85',
        alt: 'Loft Vila Madalena - Area de trabalho',
        width: 800,
        height: 600,
      },
    ],
    year: '2021',
    location: 'Vila Madalena, Sao Paulo - SP',
    area: '220m²',
  },
  {
    id: 'torre-office-itaim',
    title: 'Torre Office Itaim',
    description: 'Torre de escritorios de 18 pavimentos com terraço-jardim no topo. Certificacao LEED Silver, projeto de eficiencia ambiental e espaços de bem-estar.',
    category: 'commercial',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85',
        alt: 'Torre Itaim - Vista aerea',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=85',
        alt: 'Torre Itaim - Terraço-jardim',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85',
        alt: 'Torre Itaim - Facilidades corporativas',
        width: 800,
        height: 600,
      },
    ],
    year: '2021',
    location: 'Itaim Bibi, Sao Paulo - SP',
    area: '12.000m²',
  },
  {
    id: 'casa-lago-das-acacias',
    title: 'Casa Lago das Acacias',
    description: 'Residencia de frente para o lago com grandes vãos envidracados. Privacidade e vistas panorâmicas com diseño contemporâneo de linhas puras.',
    category: 'residential',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=85',
        alt: 'Casa Lago - Vista do lago',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=85',
        alt: 'Casa Lago - Sala de estar com vista',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85',
        alt: 'Casa Lago - Area externa',
        width: 800,
        height: 600,
      },
    ],
    year: '2020',
    location: 'Campinas - SP',
    area: '520m²',
  },
  {
    id: 'galeria-contemporanea',
    title: 'Galeria de Arte Contemporanea',
    description: 'Espaco expositivo com iluminacao controlada, fluxo continuo e ambientes intimistas. Design neutro que valoriza as obras expostas.',
    category: 'commercial',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=85',
        alt: 'Galeria - Interior principal',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=85',
        alt: 'Galeria - Sala de exposicao',
        width: 800,
        height: 600,
      },
      {
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85',
        alt: 'Galeria - Recepcao e loja',
        width: 800,
        height: 600,
      },
    ],
    year: '2023',
    location: 'Jardins, Sao Paulo - SP',
    area: '650m²',
  },
];

// ============================================================================
// SEO DATA
// ============================================================================

export const seo = {
  home: {
    title: 'RE Arquitetura & Design | Arquitetura de Alto Padrao',
    description: 'Escritorio de arquitetura especializado em projetos residenciais e comerciais de alto padrao. Verticalizacao, design minimalista e atencao aos detalhes.',
  },
  portfolio: {
    title: 'Portfolio | RE Arquitetura & Design',
    description: 'Conheca nossos projetos de arquitetura residencial e comercial em Sao Paulo.',
  },
  contact: {
    title: 'Contato | RE Arquitetura & Design',
    description: 'Entre em contato para iniciar seu projeto de arquitetura.',
  },
};

// ============================================================================
// CONTENT DELIVERY DOCUMENTATION
// ============================================================================

/**
 * CONTENT DELIVERY PROCESS FOR CLIENT
 *
 * When the client provides final copy and images:
 *
 * 1. Copy Delivery:
 *    - Send copy via Google Doc or email (contato@re-arquitetura.com.br)
 *    - Organize by section (Hero, Manifesto, Technical, etc.)
 *    - Include character counts for headlines (keep concise)
 *
 * 2. Image Delivery:
 *    - Format: JPG or PNG (Next.js will convert to WebP/AVIF)
 *    - Resolution: 1920px width for desktop, 1080px for mobile (minimum)
 *    - Quality: 80-90% to balance file size and visual quality
 *    - Naming: project-name-01.jpg, project-name-02.jpg for organization
 *    - Delivery: Google Drive, Dropbox, or WeTransfer link
 *
 * 3. Image Structure:
 *    public/images/
 *    ├── hero/
 *    │   └── hero-bg.jpg
 *    ├── portfolio/
 *    │   ├── residencial-jk-01.jpg
 *    │   ├── residencial-jk-02.jpg
 *    │   └── ...
 *    └── materiality/
 *        ├── marcenaria.jpg
 *        ├── pedras.jpg
 *        └── artesanato.jpg
 *
 * 4. Revision Process:
 *    - Two rounds of content revisions included
 *    - Additional revisions billed separately
 *    - Allow 3-5 business days for content integration
 */
