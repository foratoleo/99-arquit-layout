import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import TechnicalDifferentiator from '@/components/TechnicalDifferentiator';
import Materiality from '@/components/Materiality';
import ContactForm from '@/components/ContactForm';
import SocialProof from '@/components/SocialProof';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Manifesto />
      <TechnicalDifferentiator />
      <Materiality />
      <SocialProof />

      {/* Contact Section */}
      <section id="contato" className="relative bg-white px-6 py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl text-gray-900 md:text-5xl">
              Vamos Conversar?
            </h2>
            <p className="font-serif text-lg text-gray-600">
              Entre em contato para iniciar seu projeto de alto padrão
            </p>
            <div className="mx-auto mt-8 h-0.5 w-24 bg-greige-400" />
          </div>
          <ContactForm />
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}
