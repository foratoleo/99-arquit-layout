# Roadmap: RE Arquitetura & Design Landing Page

## Overview

A journey from design system foundations to a performant luxury landing page that converts high-end architecture leads. We establish the Quiet Luxury visual identity first, build core content sections top-to-bottom, create an optimized portfolio gallery, then complete with conversion elements, performance validation, and deployment.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Design Foundation** - Visual identity and design infrastructure
- [ ] **Phase 2: Core Sections** - Main content structure with performance optimization
- [ ] **Phase 3: Portfolio** - Image gallery with optimization and mobile gestures
- [ ] **Phase 4: Conversion & Launch** - CTAs, forms, deployment, and final content

## Phase Details

### Phase 1: Design Foundation

**Goal**: Establish the Quiet Luxury visual identity with accessible, performance-ready design infrastructure

**Depends on**: Nothing (first phase)

**Requirements**: DSGN-01, DSGN-02, DSGN-03, DSGN-04

**Success Criteria** (what must be TRUE):
  1. Design system delivers Quiet Luxury aesthetic matching Studio MK27/Fran Silvestre references
  2. All color combinations meet WCAG AA contrast standards (no luxury contrast trap)
  3. Typography system uses fine serif fonts for headings with proper hierarchy
  4. Design tokens are documented and reusable across components

**Plans**: 1 plan in 1 wave

Plans:
- [ ] 01-01: Design token system with colors, typography, and spacing integrated with Tailwind CSS

### Phase 2: Core Sections

**Goal**: Build the main content sections from top to bottom with LCP optimization

**Depends on**: Phase 1

**Requirements**: CONT-01, CONT-02, CONT-03, CONT-04

**Success Criteria** (what must be TRUE):
  1. Hero section displays fullscreen with subtle motion that feels premium not flashy
  2. Manifesto section communicates design philosophy clearly
  3. Technical differentiator section highlights vertical construction expertise
  4. Materiality section showcases joinery and stonework (with placeholder for macro photography)

**Plans**: TBD

Plans:
- [ ] 02-01: TBD
- [ ] 02-02: TBD

### Phase 3: Portfolio

**Goal**: Create a fullscreen modular grid gallery with mobile-first gestures and image optimization

**Depends on**: Phase 2

**Requirements**: GALL-01, GALL-02, GALL-03, GALL-04

**Success Criteria** (what must be TRUE):
  1. Gallery displays in fullscreen modular grid layout
  2. Mobile users can swipe through projects with touch gestures
  3. Images lazy load without causing CLS violations
  4. Images auto-optimize to WebP/AVIF formats

**Plans**: 2 plans in 2 waves

Plans:
- [ ] 03-01-PLAN.md — Portfolio page with modular grid layout, hover effects, and fullscreen modal
- [ ] 03-02-PLAN.md — CLS-safe lazy loading strategy and mobile swipe gesture navigation

### Phase 4: Conversion & Launch

**Goal**: Complete conversion paths, validate performance targets, deploy to production with final content

**Depends on**: Phase 3

**Requirements**: CNV-01, CNV-02, CNV-03, CNV-04, PERF-01, PERF-02, PERF-03, PERF-04, DEPL-01, DEPL-02, DEPL-03, CNT-01, CNT-02, CNT-03

**Success Criteria** (what must be TRUE):
  1. Floating WhatsApp button is visible and functional with GSAP animations
  2. Contact form submits successfully with honeypot anti-spam protection
  3. Social proof displays awards, credentials, and project highlights
  4. LCP < 2.5s, CLS < 0.1, PageSpeed >= 90 on both mobile and desktop
  5. Site is deployed to Vercel with custom domain and technical SEO implemented
  6. All placeholder content replaced with final PT-BR copy and project photography

**Plans**: TBD

Plans:
- [ ] 04-01: TBD
- [ ] 04-02: TBD
- [ ] 04-03: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Design Foundation | 0/1 | Ready to execute | - |
| 2. Core Sections | 0/0 | Not started | - |
| 3. Portfolio | 0/2 | Ready to execute | - |
| 4. Conversion & Launch | 0/0 | Not started | - |
