# Landing Page — RE Arquitetura & Design

## What This Is

A one-page landing page for RE Arquitetura & Design, a high-end architecture firm targeting AAA clients. The site positions the firm with "Quiet Luxury" aesthetics — European minimalism inspired by Studio MK27, Fran Silvestre Arquitectos, and Pitsou Kedem. The design emphasizes materiality (joinery and stonework macro photography), technical authority in vertical construction, and premium performance. Primary conversion goal is direct WhatsApp contact.

## Core Value

**WhatsApp conversations with qualified high-end leads.** Everything else serves this — portfolio showcase, technical authority, materiality demonstration. The page must feel premium enough that AAA clients want to discuss their projects.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] One-page layout with Hero, Manifesto, Technical Differentiator (verticalization), Portfolio (gallery), Materiality, and Contact sections
- [ ] Quiet Luxury aesthetic: European minimalism with greige, sand, and matte black color palette
- [ ] Fine serif typography (Canela/Playfair Display) for luxury feel
- [ ] Macro photography showcasing joinery and stonework craftsmanship
- [ ] Premium fullscreen gallery with modular grid layout
- [ ] Lazy loading with WebP/AVIF image optimization
- [ ] Floating custom WhatsApp button for primary conversion
- [ ] Contact form with anti-spam protection
- [ ] Basic technical SEO
- [ ] Performance targets: LCP < 2.5s, CLS < 0.1, PageSpeed ≥ 90
- [ ] Mobile-first design with swipe gestures in gallery
- [ ] Rich animations using GSAP or Framer Motion
- [ ] Placeholder content (Lorem Ipsum, placeholder images)
- [ ] Deployment-ready for Vercel or Netlify

### Out of Scope

- Blog — Content marketing not needed for positioning
- Complex CMS — Simple portfolio updates can be added later
- Multilíngue — PT-BR only for initial launch
- Extensive institutional content — One-page minimalist approach
- E-commerce or payment processing — Lead generation only

## Context

**Target Audience:** High-net-worth individuals and commercial clients seeking premium residential and commercial architecture services. Clients expect sophistication, technical expertise, and material excellence.

**Brand References:**
- Studio MK27 — Brazilian modernism with material warmth
- Fran Silvestre Arquitectos — European precision and pure geometry
- Pitsou Kedem — Minimalist luxury with textured detailing

**Technical Authority:** The firm differentiates through expertise in vertical construction (multi-story residential towers), requiring specialized structural knowledge and coordination.

**Conversion Strategy:** Direct WhatsApp contact prioritizes immediate conversation over form filling, matching the expectations of high-end clients who want personal interaction.

**Content Status:** Placeholder content needed — actual copy, project photos, and craftsmanship photography will be provided later.

## Constraints

- **Performance**: LCP < 2.5s, CLS < 0.1, PageSpeed ≥ 90 — Mobile scores must meet these targets
- **Aesthetic**: Must align with Quiet Luxury positioning — no flashy effects, premium subtlety
- **Mobile First**: Mobile experience must be superior to desktop (primary traffic expected on mobile)
- **Hosting**: Must deploy to Vercel or Netlify (static hosting, CI/CD)
- **Timeline**: Flexible — quality and performance take precedence over speed
- **Language**: PT-BR only — no multilíngue requirements
- **Budget**: Not specified — prioritize performance and maintainability

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| WhatsApp as primary CTA | High-end clients prefer direct conversation over forms | — Pending |
| Rich animations (GSAP/Framer Motion) | Premium feel requires sophisticated motion without being flashy | — Pending |
| Vercel/Netlify hosting | Modern static hosting with built-in performance optimization | — Pending |
| Placeholder content | Content creation separate from technical implementation | — Pending |
| CMS decision deferred | Simple updates can be flat file or direct edits — decide based on needs | — Pending |

---
*Last updated: 2025-02-10 after initialization*
