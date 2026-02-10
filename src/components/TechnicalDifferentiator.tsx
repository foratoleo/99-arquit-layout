import SectionWrapper from './SectionWrapper';

export default function TechnicalDifferentiator() {
  return (
    <SectionWrapper
      id="diferencial-tecnico"
      className="relative bg-white px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Text side - Problem-solution format */}
          <div className="flex flex-col justify-center space-y-12">
            {/* Section title */}
            <div>
              <h2 className="mb-4 font-serif text-4xl text-gray-900 md:text-5xl">
                Verticalização
                <br />
                <span className="text-greige-600">de Excelência</span>
              </h2>
              <div className="h-0.5 w-24 bg-greige-400" />
            </div>

            {/* Problem */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-greige-700 md:text-2xl">
                O Desafio
              </h3>
              <p className="font-serif text-lg leading-relaxed text-gray-700">
                Construções verticais demandam precisão milimétrica. Cada laje,
                cada pilar, cada sistema hidráulico e elétrico deve ser
                perfeitamente coordenado. O erro de cálculo em um pavimento
                se multiplica em todos os demais.
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-greige-700 md:text-2xl">
                Nossa Solução
              </h3>
              <p className="font-serif text-lg leading-relaxed text-gray-700">
                Integramos arquitetura, engenharia e construção desde o
                primeiro traço. Nossa experiência em projetos de múltiplos
                pavimentos garante a coordenação perfeita entre estrutura,
                instalações e acabamentos — resultando em obras mais eficientes,
                com menos desperdício e qualidade superior.
              </p>
            </div>

            {/* Outcome */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-greige-700 md:text-2xl">
                O Resultado
              </h3>
              <p className="font-serif text-lg leading-relaxed text-gray-700">
                Edifícios que respiram funcionalidade em cada detalhe. Espaços
                que funcionam perfeitamente para quem vive e trabalha neles,
                com a durabilidade e a sofisticação que apenas a expertise
                técnica profunda pode proporcionar.
              </p>
            </div>
          </div>

          {/* Visual side - Technical diagram placeholder */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full overflow-hidden rounded-none bg-sand-100 lg:aspect-[4/5]">
              {/* Placeholder overlay if no image */}
              <div className="absolute inset-0 flex items-center justify-center bg-greige-50">
                <div className="text-center">
                  <p className="font-serif text-2xl text-greige-400">
                    Diagrama Técnico
                  </p>
                  <p className="mt-2 font-serif text-sm text-greige-500">
                    (Placeholder para visual técnico)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
