import type { Config } from "tailwindcss";
import { colors, semanticColors, typography, spacing } from "./src/lib/tokens";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Color palette - Quiet Luxury with warm greige, sand, and matte black
      colors: {
        // Primary palette
        sand: colors.sand,
        greige: colors.greige,
        black: colors.black,

        // Semantic colors for quick access
        text: semanticColors.text,
        bg: semanticColors.bg,
        border: semanticColors.border,
        ui: semanticColors.ui,
      },

      // Typography - Fine serif with dramatic scale
      fontFamily: {
        serif: typography.fontFamily.primary,
      },

      // Font sizes with line height and letter spacing built in
      fontSize: typography.fontSizes,

      // Line heights - tight luxury feel
      lineHeight: typography.lineHeights,

      // Letter spacing
      letterSpacing: typography.letterSpacing,

      // Font weights
      fontWeight: typography.fontWeights,

      // Spacing - 4px base scale
      spacing: spacing,

      // Border radius - sharp corners for minimalism
      borderRadius: {
        none: "0px",
      },

      // Box shadows - minimal, subtle
      boxShadow: {
        subtle: "0 1px 3px rgba(26, 26, 26, 0.05)",
        medium: "0 2px 8px rgba(26, 26, 26, 0.08)",
        luxury: "0 4px 24px rgba(26, 26, 26, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
