import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import TechnicalDifferentiator from '@/components/TechnicalDifferentiator';
import Materiality from '@/components/Materiality';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Manifesto />
      <TechnicalDifferentiator />
      <Materiality />

      {/* Placeholder Portfolio Section */}
      <section id="portfolio" className="relative min-h-screen flex items-center justify-center bg-white px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-gray-900 mb-8">Portfolio</h2>
          <p className="font-serif text-xl text-gray-600">Em construção...</p>
        </div>
      </section>

      {/* Placeholder Contato Section */}
      <section id="contato" className="relative min-h-screen flex items-center justify-center bg-sand-50 px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-gray-900 mb-8">Contato</h2>
          <p className="font-serif text-xl text-gray-600">Em construção...</p>
        </div>
      </section>
    </main>
  );
}
