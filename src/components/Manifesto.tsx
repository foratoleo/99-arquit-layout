import SectionWrapper from './SectionWrapper';

export default function Manifesto() {
  return (
    <SectionWrapper
      id="manifesto"
      className="relative min-h-screen flex items-center justify-center bg-sand-50 px-6 py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div className="space-y-12 text-center">
          {/* Large, spacious serif typography */}
          <p className="font-serif text-3xl leading-relaxed text-greige-800 md:text-4xl lg:text-5xl">
            Acreditamos que a arquitetura nasce do diálogo
            <br />
            entre a luz, o material e o silêncio.
          </p>

          <p className="font-serif text-2xl leading-relaxed text-greige-600 md:text-3xl">
            Cada projeto é uma busca pela essência,
            <br />
            onde o supérfluo dá lugar ao essencial.
          </p>

          <p className="font-serif text-xl leading-relaxed text-greige-700 md:text-2xl">
            Na quietude dos espaços, encontramos a beleza
            <br />
            que transforma a vida cotidiana em experiência extraordinária.
          </p>

          <p className="font-serif text-lg leading-relaxed text-greige-800 md:text-xl">
            Menos é sempre mais, quando cada detalhe
            <br />
            é executado com intenção e excelência.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
