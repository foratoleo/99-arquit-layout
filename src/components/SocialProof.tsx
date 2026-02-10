import { Award, Shield, Building2 } from 'lucide-react';

/**
 * SocialProof - Awards, credentials, and project highlights display
 *
 * Builds credibility through third-party recognition and credentials.
 * Server Component with extensible data structure for easy content updates.
 */

interface Award {
  title: string;
  year: string;
}

interface Credential {
  label: string;
  value: string;
}

interface Highlight {
  label: string;
  value: string;
}

interface SocialProofData {
  awards: Award[];
  credentials: Credential[];
  highlights: Highlight[];
}

const socialProofData: SocialProofData = {
  awards: [
    { title: 'Prêmio Brazil Architecture', year: '2024' },
    { title: 'Menção Honrosa ArchDaily', year: '2023' },
  ],
  credentials: [
    { label: 'CAU-SP', value: '123456' },
    { label: 'Experiência', value: '12 anos' },
  ],
  highlights: [
    { label: 'Projetos entregues', value: '50+' },
    { label: 'Especialidade', value: 'Verticalização' },
  ],
};

export default function SocialProof() {
  return (
    <section className="bg-gray-50 py-16 px-4 lg:py-24 lg:px-8" aria-labelledby="social-proof-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="social-proof-heading" className="sr-only">
          Reconhecimento e Credenciais
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Awards Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-greige-700">
              <Award className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-sm font-normal uppercase tracking-wide">Prêmios</h3>
            </div>
            <ul className="space-y-2">
              {socialProofData.awards.map((award, index) => (
                <li key={index} className="text-sm text-greige-600">
                  <span className="font-medium text-black-400">{award.title}</span>
                  {' · '}{award.year}
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-greige-700">
              <Shield className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-sm font-normal uppercase tracking-wide">Credenciais</h3>
            </div>
            <ul className="space-y-2">
              {socialProofData.credentials.map((credential, index) => (
                <li key={index} className="text-sm text-greige-600">
                  <span className="font-medium text-black-400">{credential.label}:</span>
                  {' '}{credential.value}
                </li>
              ))}
            </ul>
          </div>

          {/* Project Highlights Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-greige-700">
              <Building2 className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-sm font-normal uppercase tracking-wide">Destaques</h3>
            </div>
            <ul className="space-y-2">
              {socialProofData.highlights.map((highlight, index) => (
                <li key={index} className="text-sm text-greige-600">
                  <span className="font-medium text-black-400">{highlight.label}:</span>
                  {' '}{highlight.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
