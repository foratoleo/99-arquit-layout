# Phase 1: Design Foundation - Context

**Gathered:** 2025-02-10
**Status:** Ready for planning

## Phase Boundary

Establish the Quiet Luxury visual identity with accessible, performance-ready design infrastructure. This phase defines colors, typography, spacing, shadows, and accessibility standards that all components will use.

## Implementation Decisions

### Color Palette Specifics
- **Greige tone**: Warm greige (yellow undertones, not cool/neutral)
- **Sand usage**: Dominant background color — primary use on large sections
- **Black role**: Supporting elements (text, lines, borders, subtle UI)
- **Color ratios**: Light dominant — approximately 80% light/sand, rest medium/greige and black

### Typography Hierarchy
- **Primary heading font**: Canela (if available via Adobe Fonts), otherwise Playfair Display
- **Body text**: Same serif font as headings (pure luxury feel, no sans-serif mixing)
- **Heading scale (desktop)**: Large dramatic — H1: 64px, H2: 48px, H3: 32px, H4: 24px
- **Line heights**: Tight luxury feel — 1.1-1.2 for headings and body text (less whitespace)

### WCAG Compliance Approach
- **Target level**: AA standard (4.5:1 for normal text, 3:1 for large text)
- **Validation method**: Tool-assisted (automated tool + manual review of borderline cases)
- **Light text handling**: Adjust background (use darker greige/sand) when light text needed
- **Documentation**: Token-level docs — color tokens include contrast ratio in names/docs

### Design Token Structure
- **Spacing scale**: 4px base — 4, 8, 12, 16, 24, 32, 48, 64, 96
- **Shadows**: Minimal shadows — very subtle, barely visible depth
- **Border radius**: 0px (no radius) — sharp corners, pure minimalism
- **Token organization**: By category — `tokens/{category}/{token-name}` (color, space, type)

## Specific Ideas

- Quiet Luxury aesthetic inspired by Studio MK27, Fran Silvestre Arquitectos, Pitsou Kedem
- European minimalism with restraint — nothing flashy or attention-grabbing
- All color combinations must pass WCAG AA — no "luxury contrast trap"

## Deferred Ideas

None — discussion stayed within phase scope.

---

*Phase: 01-design-foundation*
*Context gathered: 2025-02-10*
