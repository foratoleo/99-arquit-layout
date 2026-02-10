# Requirements: RE Arquitetura & Design Landing Page

**Defined:** 2025-02-10
**Core Value:** WhatsApp conversations with qualified high-end leads

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Design System

- [ ] **DSGN-01**: Quiet Luxury aesthetic with European minimalism (Studio MK27, Fran Silvestre, Pitsou Kedem references)
- [ ] **DSGN-02**: Premium color palette (greige, sand, matte black)
- [ ] **DSGN-03**: Fine serif typography (Canela/Playfair Display) for luxury feel
- [ ] **DSGN-04**: Color contrast meets WCAG AA standards despite light aesthetics

### Content Sections

- [ ] **CONT-01**: Hero section with fullscreen layout and subtle GSAP motion
- [ ] **CONT-02**: Manifesto/About section communicating design philosophy
- [ ] **CONT-03**: Technical differentiator section highlighting vertical construction expertise
- [ ] **CONT-04**: Materiality section showcasing joinery and stonework with macro photography

### Portfolio Gallery

- [ ] **GALL-01**: Fullscreen modular grid gallery for project showcase
- [ ] **GALL-02**: Mobile swipe gestures for touch-based project navigation
- [ ] **GALL-03**: CLS-safe lazy loading with explicit image dimensions
- [ ] **GALL-04**: Automatic WebP/AVIF optimization using next/image

### Conversion

- [ ] **CNV-01**: Floating WhatsApp button as primary CTA with GSAP animations
- [ ] **CNV-02**: Honeypot anti-spam protection on contact form
- [ ] **CNV-03**: Contact form as alternative conversion path
- [ ] **CNV-04**: Social proof display (awards, credentials, project highlights)

### Performance & Technical

- [ ] **PERF-01**: LCP < 2.5s on mobile and desktop
- [ ] **PERF-02**: CLS < 0.1 on mobile and desktop
- [ ] **PERF-03**: PageSpeed score >= 90 on both mobile and desktop
- [ ] **PERF-04**: Mobile experience superior to desktop (primary traffic focus)

### Deployment

- [ ] **DEPL-01**: Site deployed to Vercel with CI/CD
- [ ] **DEPL-02**: Custom domain configured (Google domain already active)
- [ ] **DEPL-03**: Basic technical SEO implemented (meta tags, structured data, sitemap)

### Content

- [ ] **CNT-01**: All placeholder content replaced with final copy (PT-BR)
- [ ] **CNT-02**: All placeholder images replaced with actual project photography
- [ ] **CNT-03**: Macro photography of joinery and stonework integrated

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Enhanced Features

- **GALL-05**: Project filtering by category (residential/commercial)
- **GALL-06**: Project detail modal with expanded image galleries
- **ANIM-01**: Advanced scroll-triggered animations throughout
- **ANIM-02**: Video backgrounds for hero section

### Content Expansion

- **BLOG-01**: Blog/journal section for thought leadership
- **PRSS-01**: Press and awards section
- **TEAM-01**: Team profiles and bios

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Multilingual support | PT-BR only for initial launch |
| Complex CMS | Simple file-based updates sufficient for v1 |
| E-commerce/payments | Lead generation model, not direct sales |
| User authentication | Not needed for public landing page |
| Dark mode toggle | Conflicts with Quiet Luxury aesthetic |
| Chatbot | WhatsApp direct contact preferred by luxury clients |
| Splash/intro screens | Anti-pattern for luxury sites, hurts performance |
| Background music | Distracting, accessibility concern |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| DSGN-01 | Phase 1 | Pending |
| DSGN-02 | Phase 1 | Pending |
| DSGN-03 | Phase 1 | Pending |
| DSGN-04 | Phase 1 | Pending |
| CONT-01 | Phase 2 | Pending |
| CONT-02 | Phase 2 | Pending |
| CONT-03 | Phase 2 | Pending |
| CONT-04 | Phase 2 | Pending |
| GALL-01 | Phase 3 | Pending |
| GALL-02 | Phase 3 | Pending |
| GALL-03 | Phase 3 | Pending |
| GALL-04 | Phase 3 | Pending |
| CNV-01 | Phase 4 | Pending |
| CNV-02 | Phase 4 | Pending |
| CNV-03 | Phase 4 | Pending |
| CNV-04 | Phase 4 | Pending |
| PERF-01 | Phase 4 | Pending |
| PERF-02 | Phase 4 | Pending |
| PERF-03 | Phase 4 | Pending |
| PERF-04 | Phase 4 | Pending |
| DEPL-01 | Phase 4 | Pending |
| DEPL-02 | Phase 4 | Pending |
| DEPL-03 | Phase 4 | Pending |
| CNT-01 | Phase 4 | Pending |
| CNT-02 | Phase 4 | Pending |
| CNT-03 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 24 total
- Mapped to phases: 24
- Unmapped: 0 ✓

---
*Requirements defined: 2025-02-10*
*Last updated: 2025-02-10 after roadmap creation*
