# Project Research Summary

**Project:** Landing Page — RE Arquitetura & Design
**Domain:** Luxury Architecture Landing Page (High-Performance, Animation-Rich)
**Researched:** 2026-02-10
**Confidence:** HIGH

## Executive Summary

This is a luxury architecture landing page requiring "Quiet Luxury" aesthetics — European minimalism with sophisticated animations, premium performance (LCP < 2.5s, CLS < 0.1, PageSpeed >= 90), and WhatsApp-first conversion. Research indicates experts build these using Next.js 15 with React Server Components for performance, GSAP for timeline-based animations that convey luxury, and a server-first architecture with selective client boundaries for interactivity.

The recommended approach prioritizes performance infrastructure before visual polish: establish image optimization and font loading strategies first, build content sections from top to bottom (Hero, Manifesto, Technical Differentiator, Portfolio, Materiality, Contact), then add animations as enhancement rather than foundation. Key risks are the "Quiet Luxury contrast trap" (light gray text on white fails WCAG), lazy-loading above-fold content causing CLS violations, and animation jank on mobile devices — all mitigated by establishing accessible design tokens, reserving image space explicitly, and testing animations on real devices.

## Key Findings

### Recommended Stack

**Next.js 15 + React 19 + TypeScript** provides the optimal foundation with Partial Prerendering (PPR) for 9x faster edge functions and native image optimization. **GSAP** is recommended over Framer Motion for this use case due to superior timeline control needed for luxury-feeling motion. **Tailwind CSS** provides utility-first styling perfect for minimal luxury aesthetic with built-in purging. The stack targets specific performance metrics: LCP < 2.5s via PPR + priority image loading, CLS < 0.1 via explicit image dimensions, and PageSpeed >= 90 via RSC bundle reduction.

**Core technologies:**
- **Next.js 15** — Framework with PPR for performance; native ISR/image optimization; best-in-class edge functions
- **React 19** — Latest stable with improved Server Components; 40% load time reduction with RSC patterns
- **GSAP 3.x** — Animations for complex timeline-based motion; superior control for luxury feel; framework-agnostic
- **Tailwind CSS 4.x** — Utility-first styling; built-in purging; perfect for minimal luxury aesthetic
- **TypeScript 5.7+** — Type safety for maintainability; prevents runtime errors; strict mode recommended

### Expected Features

**Must have (table stakes):**
- **Hero Section with Visual Impact** — First impression defines credibility; visitors judge firm quality immediately
- **Portfolio/Project Gallery** — Core deliverable; clients hire architects based on past work
- **Contact Form with Anti-Spam Honeypot** — Conversion path; spam-protected without CAPTCHA disruption
- **WhatsApp Floating Button** — 98% engagement rate vs declining form submissions; preferred by 2026 luxury clients
- **Responsive Design** — 50%+ traffic from mobile; non-responsive feels dated
- **Fast Page Load (<3s)** — Luxury aesthetic doesn't excuse poor performance; image optimization essential

**Should have (competitive):**
- **Fullscreen Modular Grid Gallery** — Premium feel; showcases work without competition; European minimalism aesthetic
- **Manifesto/Philosophy Section** — Differentiates through values; attracts aligned clients; "quiet luxury" signaling
- **Technical Differentiator Section** — B2B clients need technical credibility; showcases vertical construction expertise
- **Mobile Swipe Gestures** — Native mobile experience; differentiates from static competitors
- **Project Filtering/Tags** — Large portfolios become navigable; users self-select relevant work

**Defer (v2+):**
- **Blog/Thought Leadership** — SEO benefits but requires ongoing content commitment
- **Multi-language Support** — International expansion; significant technical scope
- **Materiality/Materials Palette** — Nice-to-have demonstration; requires content strategy

### Architecture Approach

**Atomic Design component hierarchy** (Atoms -> Molecules -> Organisms -> Templates -> Pages) provides the recommended structure, organizing components into five levels for high reusability and clear separation of concerns. **Server-first with client boundaries** pattern uses Server Components by default for optimal LCP, selectively adding "use client" for interactivity. **Progressive image loading** strategy loads critical images eagerly (hero with `priority` prop, above-fold with `loading='eager'`) while deferring non-critical images (below-fold lazy loading). **Scroll-triggered animation with Intersection Observer** enables reveal effects without blocking initial render.

**Major components:**
1. **Hero Section** — First impression, value proposition, primary CTA; Server Component with static content, client-side animation
2. **Gallery Section** — Portfolio showcase, image-heavy content; Server Component with next/image optimization, lazy loading
3. **Animation Controller** — Orchestrates scroll-triggered effects; Custom hook using Intersection Observer + Framer Motion
4. **Image Loader** — Responsive images, format conversion; Next.js Image component with AVIF/WebP fallback
5. **Performance Layer** — Image/Font/Prefetch optimization; next/image, next/font, strategic preloading

### Critical Pitfalls

1. **CLS from Lazy-Loaded Above-the-Fold Content** — Never lazy load LCP/hero images; always use `next/image` with explicit `width`/`height` props; add `priority` prop to hero images in Next.js

2. **Luxury Aesthetic Killing Accessibility (Quiet Luxury Contrast Trap)** — Light gray text on white backgrounds fails WCAG 4.5:1 contrast; always validate with tools before committing designs; use darker grays (#333+) on white

3. **Hero Image Killing LCP** — Large unoptimized hero images cause LCP > 2.5s; always add `priority` prop to LCP images; use WebP/AVIF formats; compress to 70-80% quality

4. **Animation Jank on Mobile** — Smooth desktop animations become choppy on mobile; use CSS animations (GPU-accelerated) over JavaScript where possible; disable parallax on mobile; test on real devices

5. **React Strict Mode Double-Rendering Animation Bugs** — Animations trigger twice in development due to React 18's Strict Mode; write idempotent effects that can handle multiple calls; don't use `useRef` hacks to skip double rendering

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation & Design System
**Rationale:** Architecture research establishes that performance infrastructure must be built first, not added later. Design tokens, image optimization, and font loading strategies are foundational — changing them later is expensive and risky.

**Delivers:** Design system with typography, colors, spacing; Next.js project with PPR configured; image and font optimization infrastructure; base atoms (Button, Typography, Icon)

**Addresses:** Hero Section, Responsive Design (infrastructure), Fast Page Load (infrastructure)

**Avoids:** CLS from lazy loading, Font loading FOUT/FOIT, Luxury contrast trap

### Phase 2: Core Content Sections
**Rationale:** Build content sections from top to bottom per architecture recommendations. Hero section is LCP-critical path and must be performant before adding polish.

**Delivers:** Hero section with LCP optimization; About/Manifesto section; Technical Differentiator section; basic content structure

**Uses:** Next.js 15 PPR, next/image with priority loading, React Server Components

**Implements:** Hero Section, About/Manifesto Section, Technical Differentiator Section

### Phase 3: Portfolio & Gallery
**Rationale:** Image-heavy section requires dedicated optimization phase. Gallery is the core deliverable but complex due to lazy loading strategy and mobile swipe gestures.

**Delivers:** Portfolio gallery with modular grid; fullscreen views; project filtering; lazy loading strategy; mobile swipe gestures

**Addresses:** Portfolio/Project Gallery, Fullscreen Modular Grid Gallery, Project Filtering/Tags, Mobile Swipe Gestures

**Avoids:** Lazy loading LCP images, CLS from unreserved image space

### Phase 4: Conversion & Interactivity
**Rationale:** Add interactivity after content is performant. CTA strategy directly affects business metrics, and WhatsApp button placement must be tested for conversion.

**Delivers:** Contact form with anti-spam honeypot; WhatsApp floating button with proper positioning; Server Actions for form submission

**Addresses:** Contact Form with Anti-Spam Honeypot, WhatsApp Floating Button

**Avoids:** WhatsApp button placement hurting conversions

### Phase 5: Animation & Polish
**Rationale:** Animations are enhancement, not foundation per architecture anti-patterns research. Add after content is performant and functional.

**Delivers:** Scroll-triggered reveals using Intersection Observer; hover effects; page transitions; GSAP timeline animations

**Uses:** GSAP for complex timeline-based animations; Framer Motion for simple UI transitions; custom hooks (useReveal, useScrollTrigger)

**Avoids:** Animation jank on mobile, animations blocking initial render, React Strict Mode double-render bugs

### Phase 6: Performance Validation & Deployment
**Rationale:** Validate performance targets are met. Architecture research emphasizes testing on real devices, not dev tools.

**Delivers:** Lighthouse audit (target: LCP < 2.5s, CLS < 0.1, PageSpeed >= 90); real device testing; image compression check; deployment to Vercel/Netlify

**Avoids:** Performance regression from third-party scripts, overengineering for "cool factor"

### Phase Ordering Rationale

- **Foundation first**: Research consistently shows performance infrastructure (image optimization, font loading, design tokens) must be established early. Changing these later is expensive and risks breaking the entire application.
- **Top-to-bottom content**: Architecture recommendations explicitly state to build content sections from Hero (LCP-critical) down to Contact. This ensures the most performance-sensitive content is optimized first.
- **Performance before polish**: Multiple sources emphasize animations are enhancement, not foundation. Adding animations before content is performant leads to performance regression that's hard to fix.
- **Interactivity last**: Forms and CTAs require client boundaries. Adding them after server-side content is rendered maintains optimal bundle size and LCP.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 3 (Portfolio & Gallery):** Complex lazy loading strategy with touch gestures; PhotoSwipe vs lightGallery library choice needs specific research for Next.js 15 + RSC compatibility
- **Phase 4 (Conversion & Interactivity):** Anti-spam honeypot implementation with Server Actions needs validation; WhatsApp click tracking analytics integration requires research

Phases with standard patterns (skip research-phase):
- **Phase 1 (Foundation):** Well-documented patterns for Next.js 15, Tailwind 4.x, design system setup
- **Phase 2 (Core Content):** Standard Server Component patterns, image optimization is well-documented
- **Phase 5 (Animation):** GSAP + Intersection Observer patterns are established; Framer Motion has excellent documentation
- **Phase 6 (Deployment):** Vercel/Netlify deployment is automated and well-documented

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Official Next.js 15 docs, GSAP benchmarks, Tailwind best practices all HIGH confidence |
| Features | MEDIUM | Architecture website features from web search (MEDIUM); competitor analysis from direct observation (HIGH); WhatsApp trend data (MEDIUM) |
| Architecture | HIGH | Next.js App Router guides (HIGH), Atomic Design methodology (HIGH), performance optimization guides (HIGH) |
| Pitfalls | HIGH | Official Google web.dev docs (HIGH), Next.js image optimization docs (HIGH), GSAP vs Motion comparison (HIGH) |

**Overall confidence:** HIGH

All critical areas (stack, architecture, pitfalls) are backed by official documentation or high-confidence sources. Feature research has some MEDIUM confidence sources but is validated by competitor analysis. No blocking gaps identified.

### Gaps to Address

- **GSAP vs Framer Motion for this specific use case:** Research recommends GSAP for luxury animations but notes Framer Motion is 2.5x faster for unknown values. Decision may need validation during Phase 5 planning based on actual animation complexity.

- **Touch gesture library compatibility:** PhotoSwipe and lightGallery both recommended for mobile swipe gestures, but Next.js 15 + RSC compatibility needs verification during Phase 3 planning.

- **Tailwind CSS 4.x availability:** Research mentions Tailwind 4.x (late 2025 release). If not yet stable at implementation time, fall back to Tailwind 3.x with minimal impact.

## Sources

### Primary (HIGH confidence)
- **Next.js Official Documentation** — App Router, PPR, Image Optimization
- **GSAP Official Benchmarks** — GSAP vs Framer Motion performance comparison
- **web.dev (Google)** — CLS optimization, Core Web Vitals, image optimization
- **Tailwind CSS Official** — Best practices, utility-first methodology
- **React.dev** — Strict Mode, Server Components documentation

### Secondary (MEDIUM confidence)
- **Architecture website features** — Multiple web search sources on 2026 trends
- **Luxury brand anti-patterns** — LinkedIn, marketing articles on luxury website mistakes
- **WhatsApp lead generation** — 2026 strategy articles, engagement rate statistics
- **Component architecture** — Medium, Dev.to articles on Atomic Design in 2025-2026

### Tertiary (LOW confidence)
- **Specific competitor analysis** — Single-source observations of Gensler, Herzog & de Meuron
- **Typography trends** — Design blog articles on luxury typography

---
*Research completed: 2026-02-10*
*Ready for roadmap: yes*
