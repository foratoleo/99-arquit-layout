# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2025-02-10)

**Core value:** WhatsApp conversations with qualified high-end leads
**Current focus:** Phase 4 - Conversion & Launch

## Current Position

Phase: 4 of 4 (Conversion & Launch)
Plan: 3 of 3 in current phase
Status: In progress
Last activity: 2026-02-10 — Completed 04-03 Deployment, SEO, and Final Content

Progress: [██████████] 56% (9/16 plans complete)

## Performance Metrics

**Velocity:**
- Total plans completed: 9
- Average duration: 3.2 min
- Total execution time: 0.5 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1. Design Foundation | 1 | 1 | 4 min |
| 2. Core Sections | 4 | 6 | 2.5 min |
| 3. Portfolio | 2 | 2 | 3.5 min |
| 4. Conversion & Launch | 3 | 3 | 3 min |

**Recent Trend:**
- Last 5 plans: 03-01 (4 min), 03-02 (3 min), 04-01 (4 min), 04-02 (5 min), 04-03 (7 min)
- Trend: Consistent execution, 04-03 included deployment documentation

*Updated after each plan completion*

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

**Design System (Phase 1):**
- Tailwind CSS 4.x with @tailwindcss/postcss plugin (separate package required for v4)
- Warm greige with yellow undertones for Quiet Luxury aesthetic
- Canela/Playfair Display serif font for all text (no sans-serif mixing)
- Sharp corners (0px border radius) for pure minimalism
- 4px base spacing scale aligned to pixel grid
- Dramatic heading scale: H1 (64px), H2 (48px), H3 (32px), H4 (24px)
- Tight line heights (1.1-1.2) for luxury feel

**Animation & Configuration (Phase 2):**
- GSAP 3.14.2 for timeline-based scroll animations
- Tailwind 4.x @theme syntax (native, better performance than token imports)
- Playfair Display via next/font/google for optimized loading
- PPR disabled (requires Next.js canary version)

**Content Style (Phase 2 - Manifesto):**
- Ultra-short content: 3-4 poetic sentences per section
- Tone: "Whisper, not a shout" - contemplative philosophy, not aggressive marketing
- Large serif typography with spacious layout (space-y-12 between elements)

**Section Layouts (Phase 2):**
- Technical Differentiator: Split layout (text left, visual right) using CSS Grid
- Problem-solution content format for accessible technical explanations
- Materiality: 3-card responsive grid (1/2/3 columns) with 4:5 vertical aspect ratio for macro photography
- Image placeholder overlays ensure graceful degradation when actual images aren't available yet

**Portfolio Gallery (Phase 3 - Plan 01):**
- 2-column modular grid on desktop (1 column on mobile) with 16px gap
- 4:3 aspect ratio for all images (800x600) to ensure consistent layout and CLS prevention
- Subtle hover effects: opacity 0.9→1.0 and scale-105 for premium feel
- Fullscreen modal with escape/close handlers, body scroll lock
- 8 placeholder projects using Unsplash architecture images (to be replaced with actual project photography)
- External Unsplash URLs used for placeholder content (will migrate to local optimized images)

**Lazy Loading & Mobile Gestures (Phase 3 - Plan 02):**
- First row (2 images) use priority+eager loading for LCP optimization
- Remaining images use lazy loading with 1-viewport trigger
- useSwipeGesture custom hook for touch navigation with 50px threshold
- Mobile swipe left/right to navigate projects in fullscreen modal
- 400ms crossfade transitions between projects with wraparound
- Desktop navigation arrows for non-touch users

**Conversion Elements (Phase 4):**
- WhatsApp button positioned bottom-right (24px from edges) for optimal visibility
- GSAP animations: 1s delay before entrance, then continuous 2s bobbing cycle
- Honeypot field named "website" with -9999px left positioning for spam detection
- Contact form with inline success message (no redirect/modal)
- No email sending in v1 - console logging only (TODO: Resend/SendGrid integration)
- Social proof component with extensible data structure for awards/credentials

**Performance Optimization (Phase 4 - Plan 02):**
- AVIF/WebP format cascade for 50% smaller images vs JPEG
- Hero image priority prop for LCP optimization (< 2.5s target)
- next/font with preload and adjustFontFallback to minimize CLS (< 0.1 target)
- Quality 85 for balance between visual quality and file size
- Preconnect to Google Fonts for faster connection establishment
- Performance monitoring utilities with PerformanceObserver API
- All images use next/image with explicit dimensions or aspect-ratio parents

**Deployment & SEO (Phase 4 - Plan 03):**
- Vercel deployment configuration with security headers (X-Frame-Options, HSTS, CSP)
- Next.js Metadata API for comprehensive SEO (Open Graph, Twitter Cards)
- JSON-LD structured data for ArchitectureFirm schema
- Dynamic sitemap and robots.txt generation
- Centralized content.ts for easy copy updates
- Professional PT-BR content throughout (placeholder for client customization)
- Organized image structure with delivery documentation
- Deployment guide for client execution

### Pending Todos

**Client Actions Required:**
1. Review and finalize content in src/lib/content.ts
2. Provide project photography (24 images: 8 projects × 3-4 images each)
3. Provide materiality photography (3 macro shots: joinery, stone, craftsmanship)
4. Compress hero-bg.jpg to <200KB (currently 465KB)
5. Execute deployment using 04-03-DEPLOYMENT-GUIDE.md
6. Configure custom domain DNS records
7. Update JSON-LD with actual business address and CAU number
8. Set up Google Search Console verification

### Blockers/Concerns

**Before Production Launch:**
- hero-bg.jpg is 465KB (should be <200KB) - needs compression
- Materiality placeholder images are 0-byte files - need actual photography
- WhatsApp number is placeholder (5511999999999) - update before production
- JSON-LD address is "UPDATE: Street Address" - requires actual address
- CAU-SP number is placeholder (123456) - requires actual registration

**Technical Debt:**
- PPR requires Next.js canary version (not stable) - may enable later for LCP optimization
- Actual Lighthouse scores require production URL testing
- Pinch-to-zoom enhancement deferred (not in 03-02 scope but mentioned in context)

**Content Delivery:**
- All portfolio images use external Unsplash URLs (works but not optimal for production)
- Contact form only logs to console - no email sending (Resend/SendGrid TODO)

## Session Continuity

Last session: 2026-02-10T15:42:41Z
Stopped at: Completed Phase 4 Plan 03 - Deployment, SEO, and Final Content
Resume file: None

## Decisions Log

**Plan 04-03 Decisions:**
1. **Security Headers:** Implemented X-Frame-Options, HSTS, Referrer-Policy for production-ready security
2. **SEO Metadata:** Full Metadata API with Open Graph, Twitter Cards, JSON-LD ArchitectureFirm schema
3. **Content Architecture:** Centralized content.ts for easy updates without code changes
4. **Image Documentation:** Comprehensive delivery guide to prevent back-and-forth with client
5. **Deployment Approach:** Created guide instead of automated deployment (requires client authentication and DNS access)
