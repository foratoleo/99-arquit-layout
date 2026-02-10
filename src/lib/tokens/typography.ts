/**
 * Typography Tokens - Fine Serif Hierarchy
 *
 * Primary font: Canela (Adobe Fonts) with Playfair Display fallback
 * Tight line heights for luxury, premium feel
 * Dramatic heading scale for visual impact
 */

export const typography = {
  // Font family
  fontFamily: {
    primary: "'Canela', 'Playfair Display', Georgia, serif",
  },

  // Font sizes (desktop) - dramatic scale for luxury feel
  fontSizes: {
    // Display
    'display-xl': ['5.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 88px
    'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],   // 64px - H1

    // Headings
    h1: ['4rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],     // 64px
    h2: ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],    // 48px
    h3: ['2rem', { lineHeight: '1.2', letterSpacing: '-0.005em' }],    // 32px
    h4: ['1.5rem', { lineHeight: '1.2', letterSpacing: '0' }],         // 24px
    h5: ['1.25rem', { lineHeight: '1.2', letterSpacing: '0' }],        // 20px

    // Body
    body: ['1rem', { lineHeight: '1.2', letterSpacing: '0.005em' }],   // 16px
    bodyLg: ['1.125rem', { lineHeight: '1.2', letterSpacing: '0.005em' }], // 18px
    bodySm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.01em' }], // 14px

    // Small
    caption: ['0.75rem', { lineHeight: '1.3', letterSpacing: '0.02em' }], // 12px
    overline: ['0.625rem', { lineHeight: '1.2', letterSpacing: '0.05em', textTransform: 'uppercase' }], // 10px
  },

  // Mobile responsive font sizes (applied via media queries)
  mobileFontSizes: {
    'display-xl': ['3.5rem', { lineHeight: '1.1' }], // 56px
    'display-lg': ['3rem', { lineHeight: '1.1' }],   // 48px
    h1: ['3rem', { lineHeight: '1.1' }],             // 48px (was 64px)
    h2: ['2.25rem', { lineHeight: '1.15' }],         // 36px (was 48px)
    h3: ['1.5rem', { lineHeight: '1.2' }],           // 24px (was 32px)
    h4: ['1.25rem', { lineHeight: '1.2' }],          // 20px (was 24px)
    h5: ['1.125rem', { lineHeight: '1.2' }],         // 18px (was 20px)
  },

  // Line heights - tight luxury feel
  lineHeights: {
    tight: '1.1',
    snug: '1.15',
    normal: '1.2',    // Tighter than typical 1.5 for luxury feel
    relaxed: '1.3',
  },

  // Font weights
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.02em',
    tight: '-0.015em',
    normal: '0',
    wide: '0.01em',
    wider: '0.02em',
    widest: '0.05em',
  },
} as const;

// Export individual components for easier imports
export const { fontFamily, fontSizes, mobileFontSizes, lineHeights, fontWeights, letterSpacing } = typography;
