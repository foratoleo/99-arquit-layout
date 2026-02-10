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
 * SEO Metadata
 *
 * Optimized meta tags for search engines and social sharing.
 */
export const metadata: Metadata = {
  title: "RE Arquitetura & Design",
  description: "Arquitetura de alto padrão especializada em verticalização",
  keywords: ["arquitetura", "design", "verticalização", "alto padrão", "residencial", "comercial"],
  authors: [{ name: "RE Arquitetura & Design" }],
  openGraph: {
    title: "RE Arquitetura & Design",
    description: "Arquitetura de alto padrão especializada em verticalização",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </head>
      <body className={`${playfair.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
