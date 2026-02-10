/**
 * Design Tokens - Centralized Exports
 *
 * All design tokens for the Quiet Luxury aesthetic
 * Import individual categories or use the combined tokens object
 */

// Re-export all token categories
export { colors, semanticColors } from './colors';
export { typography, fontFamily, fontSizes, mobileFontSizes, lineHeights, fontWeights, letterSpacing } from './typography';
export { spacing, luxurySpacing } from './spacing';

// Import for combined export
import { colors, semanticColors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

/**
 * Combined tokens object for convenience
 * Use this when you need all tokens in one place
 */
export const tokens = {
  colors,
  semanticColors,
  typography,
  spacing,
} as const;

/**
 * Type definitions for TypeScript inference
 */
export type Colors = typeof colors;
export type SemanticColors = typeof semanticColors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Tokens = typeof tokens;
