/**
 * Spacing Tokens - 4px Base Scale
 *
 * Consistent spacing system built on 4px increments
 * Luxury section spacing for abundant whitespace
 */

export const spacing = {
  // Base scale - 4px increments
  0: '0',
  0.5: '2px',
  1: '4px',     // 0.25rem - Base unit
  1.5: '6px',
  2: '8px',     // 0.5rem
  2.5: '10px',
  3: '12px',    // 0.75rem
  3.5: '14px',
  4: '16px',    // 1rem
  5: '20px',    // 1.25rem
  6: '24px',    // 1.5rem
  7: '28px',
  8: '32px',    // 2rem
  9: '36px',
  10: '40px',   // 2.5rem
  11: '44px',
  12: '48px',   // 3rem
  14: '56px',
  16: '64px',   // 4rem
  18: '72px',
  20: '80px',
  24: '96px',   // 6rem - Luxury section spacing
  28: '112px',
  32: '128px',  // 8rem - Container padding
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
} as const;

/**
 * Luxury spacing presets for specific use cases
 * These use the base scale but provide semantic meaning
 */
export const luxurySpacing = {
  // Section spacing - abundant whitespace for luxury feel
  section: {
    sm: spacing[16],   // 64px - Smaller sections
    md: spacing[24],   // 96px - Standard section spacing
    lg: spacing[32],   // 128px - Large sections
    xl: spacing[40],   // 160px - Hero sections
  },

  // Container padding
  container: {
    sm: spacing[8],    // 32px - Small screens
    md: spacing[12],   // 48px - Medium screens
    lg: spacing[16],   // 64px - Large screens
    xl: spacing[24],   // 96px - Extra large screens
  },

  // Element spacing
  element: {
    xs: spacing[2],    // 8px - Tightly related elements
    sm: spacing[3],    // 12px - Small gaps
    md: spacing[4],    // 16px - Standard gaps
    lg: spacing[6],    // 24px - Large gaps
    xl: spacing[8],    // 32px - Extra large gaps
  },
} as const;
