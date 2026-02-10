export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  category: 'residential' | 'commercial';
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: 'casa-lago',
    title: 'Casa do Lago',
    location: 'São Paulo, SP',
    year: 2023,
    category: 'residential',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Casa do Lago - Vista frontal da arquitetura contemporânea'
      }
    ]
  },
  {
    id: 'residencial-jardins',
    title: 'Residencial Jardins',
    location: 'São Paulo, SP',
    year: 2023,
    category: 'residential',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Residencial Jardins - Fachada minimalista com pedra natural'
      }
    ]
  },
  {
    id: 'edificio-corporativo',
    title: 'Edifício Corporativo Vértice',
    location: 'São Paulo, SP',
    year: 2022,
    category: 'commercial',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Edifício Corporativo Vértice - Torre de escritórios vertical'
      }
    ]
  },
  {
    id: 'casa-mata',
    title: 'Casa da Mata',
    location: 'Campos do Jordão, SP',
    year: 2022,
    category: 'residential',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Casa da Mata - Integracao com paisagem natural'
      }
    ]
  },
  {
    id: 'loft-industrial',
    title: 'Loft Industrial',
    location: 'São Paulo, SP',
    year: 2022,
    category: 'residential',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Loft Industrial - Espaco aberto com estrutura aparente'
      }
    ]
  },
  {
    id: 'galeria-arte',
    title: 'Galeria de Arte Contemporânea',
    location: 'Rio de Janeiro, RJ',
    year: 2021,
    category: 'commercial',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Galeria de Arte - Espaco expositivo minimalista'
      }
    ]
  },
  {
    id: 'casa-praia',
    title: 'Casa da Praia',
    location: 'Guarujá, SP',
    year: 2021,
    category: 'residential',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Casa da Praia - Vista panorâmica do mar'
      }
    ]
  },
  {
    id: 'escritorio-moderno',
    title: 'Escritório Modular',
    location: 'São Paulo, SP',
    year: 2021,
    category: 'commercial',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80',
        width: 800,
        height: 600,
        alt: 'Escritório Modular - Layout flexivel e colaborativo'
      }
    ]
  }
];
