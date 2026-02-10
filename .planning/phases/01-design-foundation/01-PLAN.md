---
phase: 01-design-foundation
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - tailwind.config.ts
  - src/lib/tokens/colors.ts
  - src/lib/tokens/spacing.ts
  - src/lib/tokens/typography.ts
  - src/lib/tokens/index.ts
autonomous: true
user_setup: []

must_haves:
  truths:
    - Design tokens deliver Quiet Luxury aesthetic with warm greige, sand, and matte black
    - All color combinations meet WCAG AA contrast standards (4.5:1 for normal text, 3:1 for large text)
    - Typography system uses fine serif fonts with proper hierarchy (H1: 64px, H2: 48px, H3: 32px, H4: 24px)
    - Design tokens are documented and reusable across components via centralized exports
  artifacts:
    - path: "tailwind.config.ts"
      provides: "Tailwind integration with design tokens"
      contains: "colors.*, spacing.*, fontFamily.*"
    - path: "src/lib/tokens/colors.ts"
      provides: "Color palette with WCAG compliance"
      exports: ["colors", "semanticColors"]
    - path: "src/lib/tokens/typography.ts"
      provides: "Typography scale with luxury feel"
      exports: ["fontSizes", "lineHeights", "fontWeights"]
    - path: "src/lib/tokens/spacing.ts"
      provides: "4px base spacing scale"
      exports: ["spacing"]
    - path: "src/lib/tokens/index.ts"
      provides: "Centralized token exports"
      exports: ["colors", "typography", "spacing"]
  key_links:
    - from: "tailwind.config.ts"
      to: "src/lib/tokens"
      via: "ES imports"
      pattern: "import.*from '@/lib/tokens"
    - from: "components"
      to: "src/lib/tokens"
      via: "Tailwind classes using token values"
      pattern: "text-(h1|h2|h3|h4)|bg-(sand|greige|black)"
---

<objective>
Create the design token system that establishes the Quiet Luxury visual identity with WCAG AA compliant colors, fine serif typography, and a 4px-based spacing scale.

Purpose: This is the foundation for all UI components. Design tokens ensure consistency, enable quick iterations, and provide a single source of truth for the visual language.

Output: A complete design token system integrated with Tailwind CSS, ready for component consumption.
</objective>

<execution_context>
@/Users/forato/.claude/get-shit-done/workflows/execute-plan.md
@/Users/forato/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/STATE.md
@.planning/phases/01-design-foundation/01-CONTEXT.md
@.planning/research/STACK.md
@.planning/research/ARCHITECTURE.md
@.planning/REQUIREMENTS.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Initialize Next.js project with TypeScript and Tailwind CSS</name>
  <files>
    package.json
    tsconfig.json
    next.config.ts
    tailwind.config.ts
    postcss.config.mjs
    src/app/layout.tsx
    src/app/globals.css
  </files>
  <action>
    Initialize Next.js 15 project with:
    - `npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"` (use current directory)
    - Accept all defaults for TypeScript, ESLint, Tailwind CSS, App Router
    - Create `src/` directory structure if not created by default
    - Configure Tailwind for 4.x (check version, configure accordingly)
    - Ensure `src/app/layout.tsx` and `src/app/globals.css` exist

    DO NOT install additional packages yet (GSAP, etc.) - only core Next.js dependencies.
  </action>
  <verify>
    - `ls -la package.json tsconfig.json next.config.* tailwind.config.*` shows all config files exist
    - `cat package.json | grep "next"` shows Next.js 15.x
    - `cat package.json | grep "typescript"` shows TypeScript installed
    - `cat package.json | grep "tailwindcss"` shows Tailwind CSS 4.x (or latest 3.x if 4.x not available)
    - `npm run build` completes without errors (dry-run build check)
  </verify>
  <done>
    Next.js 15 project initialized with TypeScript, Tailwind CSS, and App Router configured. Base project structure ready.
  </done>
</task>

<task type="auto">
  <name>Task 2: Create color tokens with WCAG AA compliance</name>
  <files>src/lib/tokens/colors.ts</files>
  <action>
    Create `src/lib/tokens/colors.ts` with:

    **Primary palette (per user decisions):**
    - `sand`: Dominant background (warm, light) - hex #F5F3F0 or similar warm sand
    - `greige`: Warm greige with yellow undertones - hex #B8B2A7 or similar
    - `black`: Matte black for supporting elements - hex #1A1A1A (not pure #000)

    **Semantic colors (derived, ensure WCAG AA):**
    - `text.primary`: Black on sand background (verify 4.5:1+)
    - `text.secondary`: Greige on sand background (verify 4.5:1+, may need darker greige)
    - `text.inverted`: Sand on black background (verify 4.5:1+)
    - `bg.primary`: Sand
    - `bg.secondary`: Greige
    - `bg.tertiary`: Black
    - `border.subtle`: Greige with opacity

    **Structure:**
    ```typescript
    export const colors = {
      sand: { ... },
      greige: { ... },
      black: { ... },
      // ... scales for each
    } as const

    export const semanticColors = {
      text: { primary, secondary, inverted },
      bg: { primary, secondary, tertiary },
      border: { subtle }
    } as const

    // WCAG ratio documentation in comments
    ```

    **IMPORTANT:** Calculate and document contrast ratios in comments. If sand/greige combo fails WCAG AA, adjust greige to be darker (e.g., #9B9590 or #8C8680). Use online WCAG checker or similar tool for validation.

    Export both `colors` and `semanticColors`.
  </action>
  <verify>
    - `cat src/lib/tokens/colors.ts | grep -c "export const"` shows at least 2 exports (colors, semanticColors)
    - `cat src/lib/tokens/colors.ts | grep -i "wcag\|contrast"` shows contrast documentation
    - File has TypeScript type annotations (`as const`)
  </verify>
  <done>
    Color palette defined with warm greige, sand, and matte black. All color combinations documented with WCAG AA contrast ratios. Tokens exported for Tailwind integration.
  </done>
</task>

<task type="auto">
  <name>Task 3: Create typography tokens with fine serif hierarchy</name>
  <files>src/lib/tokens/typography.ts</files>
  <action>
    Create `src/lib/tokens/typography.ts` with:

    **Font family (per user decisions):**
    - `fontFamily.primary`: "Canela, 'Playfair Display', serif" (Canela from Adobe Fonts, fallback to Playfair Display)
    - Note: We'll add Adobe Fonts integration in a later phase or use Google Fonts Playfair Display

    **Font sizes (desktop, per user decisions):**
    - `h1`: 64px (4rem)
    - `h2`: 48px (3rem)
    - `h3`: 32px (2rem)
    - `h4`: 24px (1.5rem)
    - `body`: 16px (1rem)
    - `small`: 14px (0.875rem)

    **Line heights (per user decisions - tight luxury feel):**
    - `headings`: 1.1-1.2
    - `body`: 1.2 (tighter than typical 1.5)

    **Font weights:**
    - `light`: 300
    - `regular`: 400
    - `medium`: 500
    - `bold`: 700

    **Letter spacing:**
    - Tight for headings (default or -0.01em)
    - Normal for body

    **Mobile scale (responsive):**
    - Reduce sizes proportionally on mobile (e.g., h1: 48px on mobile)

    Export as `typography` object with `fontSizes`, `lineHeights`, `fontWeights`, `letterSpacing`.
  </action>
  <verify>
    - `cat src/lib/tokens/typography.ts | grep "export const typography"` shows export
    - `cat src/lib/tokens/typography.ts | grep -E "64|48|32|24"` shows heading sizes
    - File includes mobile-responsive font sizes
  </verify>
  <done>
    Typography tokens defined with fine serif font family, dramatic heading scale (64px to 24px), and tight line heights (1.1-1.2) for luxury feel. Mobile-responsive sizes included.
  </done>
</task>

<task type="auto">
  <name>Task 4: Create spacing tokens with 4px base scale</name>
  <files>src/lib/tokens/spacing.ts</files>
  <action>
    Create `src/lib/tokens/spacing.ts` with:

    **Base scale (per user decisions - 4px base):**
    ```typescript
    export const spacing = {
      0: '0',
      1: '4px',   // 0.25rem
      2: '8px',   // 0.5rem
      3: '12px',  // 0.75rem
      4: '16px',  // 1rem
      5: '20px',  // 1.25rem (added for flexibility)
      6: '24px',  // 1.5rem
      8: '32px',  // 2rem
      10: '40px', // 2.5rem
      12: '48px', // 3rem
      16: '64px', // 4rem
      24: '96px', // 6rem
    } as const
    ```

    **Section spacing (for luxury whitespace):**
    - `section`: 96px (6rem) - large vertical spacing between sections
    - `container`: 128px (8rem) - max-width container padding

    Export as `spacing` object.
  </action>
  <verify>
    - `cat src/lib/tokens/spacing.ts | grep "export const spacing"` shows export
    - `cat src/lib/tokens/spacing.ts | grep -E "4px|8px|96px"` shows base scale and luxury spacing
  </verify>
  <done>
    Spacing tokens defined with 4px base scale (4, 8, 12, 16, 24, 32, 48, 64, 96) and luxury section spacing (96px) for abundant whitespace.
  </done>
</task>

<task type="auto">
  <name>Task 5: Create centralized token exports and integrate with Tailwind</name>
  <files>
    src/lib/tokens/index.ts
    tailwind.config.ts
  </files>
  <action>
    **Step 1: Create `src/lib/tokens/index.ts`**
    ```typescript
    export { colors, semanticColors } from './colors'
    export { typography } from './typography'
    export { spacing } from './spacing'

    // Combined tokens object for convenience
    export const tokens = {
      colors,
      semanticColors,
      typography,
      spacing,
    } as const
    ```

    **Step 2: Update `tailwind.config.ts`**
    Import tokens and extend Tailwind theme:
    ```typescript
    import type { Config } from 'tailwindcss'
    import { colors, semanticColors, typography, spacing } from './src/lib/tokens'

    export default {
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          colors: {
            ...colors,
            ...semanticColors,
          },
          fontFamily: {
            sans: typography.fontFamily.primary, // Using serif as "sans" for simplicity, or use "serif" key
          },
          fontSize: typography.fontSizes,
          lineHeight: typography.lineHeights,
          letterSpacing: typography.letterSpacing,
          spacing: spacing,
          borderRadius: {
            'none': '0px', // Sharp corners per user decision
          },
          boxShadow: {
            'subtle': '0 1px 3px rgba(0,0,0,0.05)', // Minimal shadow
          },
        },
      },
      plugins: [],
    } satisfies Config
    ```

    **Note:** If Tailwind 4.x is installed, adjust config format accordingly (Tailwind 4 uses CSS-based configuration).

    Add `@type` comments for TypeScript inference in Tailwind classes.
  </action>
  <verify>
    - `cat src/lib/tokens/index.ts | grep "export.*from"` shows all tokens re-exported
    - `cat tailwind.config.ts | grep "from.*tokens"` shows token imports
    - `cat tailwind.config.ts | grep -E "colors:|fontFamily:|fontSize:|spacing:"` shows theme extensions
    - `npm run build` completes without TypeScript or Tailwind errors
  </verify>
  <done>
    All design tokens centralized in `src/lib/tokens/index.ts`. Tailwind config extended with colors, typography, spacing, and minimal shadows. Sharp corners (0px border radius) configured. Build passes without errors.
  </done>
</task>

</tasks>

<verification>
After all tasks complete, verify:
1. All token files exist with TypeScript exports (`src/lib/tokens/*.ts`)
2. Tailwind config imports and extends tokens successfully
3. `npm run build` runs without errors
4. Contrast ratios are documented in color token comments
5. Typography scale matches user decisions (H1: 64px, H2: 48px, etc.)
6. Spacing scale follows 4px base with luxury section spacing (96px)
</verification>

<success_criteria>
1. Design token system is complete and centralized
2. All tokens are properly typed with TypeScript
3. Tailwind integration is functional (build passes)
4. Color palette meets WCAG AA standards with documented contrast ratios
5. Typography hierarchy matches specified scale (64px to 24px)
6. Spacing follows 4px base with luxury whitespace values
7. Tokens are ready for component consumption in Phase 2
</success_criteria>

<output>
After completion, create `.planning/phases/01-design-foundation/01-01-SUMMARY.md`
</output>
