'use client';

import SectionWrapper from './SectionWrapper';
import Image from 'next/image';

export default function Materiality() {
  const materials = [
    {
      id: 1,
      title: 'Marcenaria Artesanal',
      description: 'Cada junta e precisa. Cada encaixe, perfeito. A madeira conta historias atraves do trabalho manual que transforma materia em arte.',
      image: '/materiality-1.jpg',
    },
    {
      id: 2,
      title: 'Pedra Natural',
      description: 'A pedra bruta da lugar a superficies que convidam ao toque. Veios que desenham paisagens, texturas que guardam a memoria da terra.',
      image: '/materiality-2.jpg',
    },
    {
      id: 3,
      title: 'Detalhe que Diferencia',
      description: 'Na sutileza do acabamento esta a excelencia. O que parece simples e o resultado de decadas de dominio tecnico e sensibilidade estetica.',
      image: '/materiality-3.jpg',
    },
  ];

  return (
    <SectionWrapper
      id="materialidade"
      className="relative bg-sand-50 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-serif text-4xl text-gray-900 md:text-5xl lg:text-6xl">
            Materialidade
          </h2>
          <p className="mx-auto max-w-2xl font-serif text-lg text-gray-600 md:text-xl">
            A excelencia esta nos detalhes que poucos veem, mas todos sentem.
          </p>
          <div className="mx-auto mt-8 h-0.5 w-24 bg-greige-400" />
        </div>

        {/* Material showcase grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <div
              key={material.id}
              className="group flex flex-col overflow-hidden bg-white"
            >
              {/* Image with explicit aspect ratio to prevent CLS */}
              <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
                <Image
                  src={material.image}
                  alt={material.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col justify-center p-8">
                <h3 className="mb-4 font-serif text-2xl text-gray-900">
                  {material.title}
                </h3>
                <p className="font-serif text-base leading-relaxed text-gray-600">
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <p className="font-serif text-lg text-greige-600">
            Cada material e escolhido com proposito. Cada detalhe, executado com intencao.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
