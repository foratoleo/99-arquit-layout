import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

/**
 * Font optimization configuration
 *
 * Playfair Display is loaded via next/font for optimal performance:
 * - subsets: ['latin'] - Only load Latin characters for PT-BR content
 * - display: 'swap' - Prevent FOIT (Flash of Invisible Text)
 * - variable: '--font-playfair' - CSS variable for consistent usage
 * - preload: true - Eagerly load for better LCP
 * - adjustFontFallback: true - Adjust fallback font to minimize CLS
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
  adjustFontFallback: true,
});

/**
 * Site URL from environment variable or default
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://re-arquitetura.com.br';

/**
 * SEO Metadata
 *
 * Optimized meta tags for search engines and social sharing.
 * Includes Open Graph, Twitter Cards, and structured data for LocalBusiness.
 */
export const metadata: Metadata = {
  title: {
    default: "RE Arquitetura & Design | Arquitetura de Alto Padrao",
    template: "%s | RE Arquitetura & Design"
  },
  description: "Escritorio de arquitetura especializado em projetos residenciais e comerciais de alto padrao. Verticalizacao, design minimalista e atencao aos detalhes.",
  keywords: ["arquitetura", "design", "alto padrao", "verticalizacao", "projetos residenciais", "projetos comerciais", "arquitetura minimalista"],
  authors: [{ name: "RE Arquitetura & Design" }],
  creator: "RE Arquitetura & Design",
  publisher: "RE Arquitetura & Design",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RE Arquitetura & Design | Arquitetura de Alto Padrao",
    description: "Escritorio de arquitetura especializado em projetos residenciais e comerciais de alto padrao. Verticalizacao, design minimalista e atencao aos detalhes.",
    url: SITE_URL,
    siteName: "RE Arquitetura & Design",
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero-bg.jpg',
        width: 1920,
        height: 1080,
        alt: 'RE Arquitetura & Design - Arquitetura de Alto Padrao',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "RE Arquitetura & Design | Arquitetura de Alto Padrao",
    description: "Escritorio de arquitetura especializado em projetos residenciais e comerciais de alto padrao.",
    images: ['/images/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'ADD_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE',
  },
};

/**
 * JSON-LD Structured Data for LocalBusiness
 *
 * Helps search engines understand the business entity for rich snippets.
 * Update the address and contact information with actual details.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ArchitectureFirm',
  name: 'RE Arquitetura & Design',
  description: 'Escritorio de arquitetura especializado em projetos residenciais e comerciais de alto padrao.',
  url: SITE_URL,
  telephone: '+55-11-9999-9999',
  email: 'contato@re-arquitetura.com.br',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'UPDATE: Street Address',
    addressLocality: 'Sao Paulo',
    addressRegion: 'SP',
    postalCode: '00000-000',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.5505,
    longitude: -46.6333,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    // 'https://instagram.com/re-arquitetura',
    // 'https://linkedin.com/company/re-arquitetura',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to Google Fonts for faster connection */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#f5f2ed" />
        {/* Viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${playfair.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
