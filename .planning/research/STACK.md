# Stack Research

**Domain:** Luxury Architecture Landing Page (High-Performance, Animation-Rich)
**Researched:** 2025-02-10
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **Next.js** | 15.x | Framework with App Router | Native PPR (Partial Prerendering) for performance; 9x faster edge functions; best-in-class ISR and image optimization; created by Next.js team for optimal integration |
| **React** | 19.x | UI Library | Latest stable with improved Server Components; 40% load time reduction reported with RSC patterns; enhanced concurrent rendering |
| **TypeScript** | 5.7+ | Type Safety | Industry standard for maintainability; enhanced DX; prevents runtime errors; strict mode recommended |
| **Tailwind CSS** | 4.x (late 2025) | Styling | Utility-first for rapid development; excellent performance; built-in purging; perfect for minimal luxury aesthetic; variable font support |
| **GSAP** | 3.x (latest) | Animations | Superior for complex, timeline-based animations; framework-agnostic; granular control; best-in-class performance for luxury-feeling motion |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **next-themes** | latest | Dark/Light mode | For theme switching without FOUC; system preference detection; syncs across tabs |
| **next/image** | built-in | Image optimization | Automatic WebP/AVIF conversion; 40-70% Sharp compression; responsive sizing; use for all images |
| **shadcn/ui** | latest | Component primitives | Copy-paste components (not npm install); built on Radix UI + Tailwind; 60+ themes including luxury-compatible options |
| **React Hook Form** | 7.x | Form management | Minimal re-renders; uncontrolled components; best performance for contact forms |
| **Zod** | latest | Schema validation | End-to-end type safety; TypeScript-first; integrates perfectly with React Hook Form |
| **lucide-react** | latest | Icons | Tree-shakable; low memory usage; SVG components; performance-optimized for Next.js |
| **clsx** | latest | Conditional classes | For conditional className logic; combine with tailwind-merge for conflict resolution |
| **tailwind-merge** | latest | Class deduplication | Resolves Tailwind class conflicts; essential with clsx |
| **cn utility** | custom | Combined function | Merges clsx + tailwind-merge; use for all conditional Tailwind classes |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| **ESLint** | Code linting | Use flat config (`eslint.config.mjs`); `eslint-config-next` for Next.js rules |
| **Prettier** | Code formatting | Configurable; integrate with ESLint to avoid conflicts |
| **TypeScript strict mode** | Type checking | Enable all strict flags; prevents runtime errors |

### Deployment

| Platform | Notes |
|----------|-------|
| **Vercel** | Primary recommendation for Next.js; ~70ms TTFB vs ~90ms Netlify; native ISR/middleware; created by Next.js team |
| **Netlify** | Alternative if multi-framework portfolio; more generous free bandwidth; simpler pricing |

## Installation

```bash
# Core framework
npx create-next-app@latest 99-lp-minimalista --typescript --tailwind --app

# Animation library
npm install gsap

# Theme management
npm install next-themes

# Form handling (for WhatsApp lead capture)
npm install react-hook-form zod @hookform/resolvers

# Icons
npm install lucide-react

# Class utilities
npm install clsx tailwind-merge

# Component primitives (shadcn/ui - manual setup, not npm install)
npx shadcn@latest init

# Dev dependencies
npm install -D @types/node
```

```bash
# Optional: Animation-specific GSAP plugins
npm install @gsap/react

# Note: WhatsApp integration uses native wa.me links (no library needed)
# Example: https://wa.me/5511999999999?text=Hello
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| **GSAP** | Framer Motion | Choose Framer Motion for simple UI transitions; choose GSAP for complex, timeline-based animations and luxury-feeling motion |
| **Next.js 15** | Next.js 14 | Only if specific blocking issue with 15; PPR in 15 is game-changing for performance |
| **Vercel** | Netlify | Choose Netlify for multi-framework projects or when free bandwidth is primary concern |
| **shadcn/ui** | Headless UI, Radix UI directly | shadcn/ui provides better DX with Tailwind; alternatives if you prefer npm-based component packages |
| **React Hook Form + Zod** | Formik, Yup | RHF + Zod is 2025 standard for type-safe, performant forms |
| **next-themes** | Custom theme implementation | next-themes handles FOUC, system detection, tab sync out of the box |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| **Framer Motion** (for this use case) | Less granular control than GSAP; React-specific limits | GSAP for luxury, timeline-based animations |
| **CSS-in-JS** (styled-components, emotion) | Runtime overhead; conflicts with Next.js RSC; larger bundles | Tailwind CSS for utility-first styling |
| **Next.js 14 or older** | Missing PPR (Partial Prerendering); performance improvements in 15 | Next.js 15 for optimal performance |
| ** CRA (Create React App)** | Deprecated; no SSR; poor SEO for landing pages | Next.js for SEO + performance |
| **Webpack custom config** | Next.js 15 has optimized defaults; complexity overhead | Next.js built-in optimization |
| **Traditional form libraries** (Formik) | More re-renders; heavier bundles | React Hook Form for minimal re-renders |
| **FontAwesome** | Large bundle; not tree-shakeable efficiently | lucide-react for tree-shakable SVG icons |
| **Bootstrap / component libraries** | Conflicts with minimal luxury aesthetic; heavy | shadcn/ui primitives + Tailwind for custom look |

## Stack Patterns by Variant

**If targeting maximum PageSpeed scores (90+):**
- Use Next.js 15 PPR for static shell + dynamic content
- Implement next/image for all images with priority loading for above-fold
- Use GSAP ScrollTrigger with minimal markers
- Lazy load all below-fold components
- Enable automatic WebP/AVIF in next/image config
- Consider ISR for cacheable content

**If prioritizing luxury animation feel:**
- GSAP over Framer Motion for timeline control
- Implement custom easing functions (power2, power3, or custom)
- Use ScrollTrigger for scroll-based animations
- Add subtle parallax and magnetic effects
- Implement smooth scroll (lenis-like) if appropriate
- Performance budget: 60fps maintained on mid-range mobile

**If building WhatsApp-first conversion:**
- Use wa.me link scheme (no API needed for outbound)
- Implement floating WhatsApp button with GSAP animations
- Pre-fill message with URL parameters
- Track WhatsApp clicks with analytics events
- Consider WhatsApp Business API if automated responses needed

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| Next.js 15 | React 19 | Full support for RSC and PPR |
| next-themes | Next.js 15 | Confirmed working; handles FOUC |
| GSAP 3.x | Next.js 15 | Use @gsap/react for cleanup hooks |
| Tailwind 4.x | Next.js 15 | Late 2025 release; verify before migration |
| shadcn/ui | Next.js 15 + Tailwind | Full compatibility |

## Performance Targets by Technology

| Metric | Target | How This Stack Achieves It |
|--------|--------|---------------------------|
| **LCP** | < 2.5s | Next.js PPR + next/image priority + font optimization |
| **CLS** | < 0.1 | next/image with explicit sizes; reserved space for dynamic content |
| **PageSpeed** | ≥ 90 | RSC reduces JS bundle; PPR provides static shell; automatic optimization |
| **TTFB** | < 100ms | Vercel Edge (~70ms average); PPR static shell serves immediately |
| **Animation FPS** | 60 FPS | GSAP performance; will-change transforms; GPU acceleration |

## Design System Configuration

### Typography (Luxury Minimal)
- **Bold, oversized headings** for statement pieces
- **Variable fonts** for adaptive rendering and performance
- **Maximum 2 typefaces** for true minimalism
- **Fluid typography** scaling smoothly across breakpoints
- **Kinetic typography** options for dynamic text effects

### Color Palette (Quiet Luxury)
- European minimalism: restrained, sophisticated
- Limited palette (3-4 core colors)
- High contrast for accessibility
- Dark mode via next-themes with smooth transitions

### Spacing & Layout
- Abundant white space as luxury indicator
- Flexible grid systems (CSS Grid + Flexbox via Tailwind)
- Mobile-first: design for mobile, scale up to desktop
- Strategic breakpoint planning (Tailwind defaults work well)

## Sources

### Core Framework
- [Next.js 15 Official Documentation - Partial Prerendering](https://nextjs.org/docs/15/app/getting-started/partial-prerendering) — HIGH confidence, official docs
- [Next.js Best Practices in 2025](https://medium.com/@GoutamSingha/next-js-best-practices-in-2025-build-faster-cleaner-scalable-apps-7efbad2c3820) — MEDIUM confidence, verified guide
- [My Next.js App Setup Checklist (2025 Edition)](https://medium.com/@quicksilversel/my-ultimate-next-js-setup-checklist-2025-edition-7f14c931560f) — MEDIUM confidence

### Performance & Optimization
- [How to Optimize Core Web Vitals in NextJS App Router for 2025](https://makersden.io/blog/optimize-web-vitals-in-nextjs-2025) — HIGH confidence
- [Next.js Image Optimization: Ultimate Guide 2025](https://utsavdesai26.medium.com/next-js-image-optimization-ultimate-guide-to-next-image-2025-edition-1aefb479e674) — HIGH confidence
- [React Server Components: Do They Really Improve Performance?](https://www.developerway.com/posts/react-server-components-performance) — MEDIUM confidence

### Animation Libraries
- [GSAP vs Framer Motion: A Deep Dive](https://artekia.com/en/blog/gsap-vs-framer-motion) — HIGH confidence, recent comparison
- [Pentaclay: Framer vs GSAP Guide](https://pentaclay.com/blog/framer-vs-gsap-which-animation-library-should-you-choose) — MEDIUM confidence

### Styling & Components
- [Tailwind CSS Best Practices 2025-2026](https://www.frontendtools.tech/blog/tailwind-css-best-practices-design-system-patterns) — HIGH confidence
- [shadcn/ui Official Documentation](https://ui.shadcn.com/) — HIGH confidence, official
- [How Shadcn's New Components Redefine Modern UI Design (2025)](https://medium.com/@hashbyt/how-shadcns-new-components-redefine-modern-ui-design-d3621786855e) — MEDIUM confidence

### Theming & Dark Mode
- [next-themes GitHub Repository](https://github.com/pacocoursey/next-themes) — HIGH confidence, official
- [Next.js + TailwindCSS v4: Dark/Light Theme with next-themes](https://dev.to/khanrabiul/nextjs-tailwindcss-v4-how-to-add-darklight-theme-with-next-themes-3c6l) — MEDIUM confidence

### Forms & Validation
- [Ultimate React Hook Form With Zod Validation](https://medium.com/@marufrahmanbd08/ultimate-react-hook-form-with-zod-validation-with-best-examples-04007526b3b1) — HIGH confidence, recent
- [9 Best Practices for Using Zod in 2025](https://javascript.plainenglish.io/9-best-practices-for-using-zod-in-2025-31ee7418062e) — MEDIUM confidence

### Icons & Utilities
- [Lucide React Official Documentation](https://lucide.dev/guide/packages/lucide-react) — HIGH confidence, official
- [Wtf is clsx, twmerge, cn in TailwindCSS](https://ayberkyavas.com/blogs/wtf-is-clsx-twmerge-cn-in-tailwindcss) — MEDIUM confidence, recent

### Design & Typography
- [Optimal Typography For Web Design In 2025](https://www.elegantthemes.com/blog/design/optimal-typography-for-web-design) — MEDIUM confidence
- [Typography Trends 2025](https://sunbposolutions.com/typography-trends-2025-in-graphic-design/) — MEDIUM confidence
- [8 Effective Practices of Ultra-Minimalist Web Design](https://blog.icons8.com/articles/minimalist-web-design/) — MEDIUM confidence

### Deployment
- [Vercel vs Netlify 2025 Comparison](https://www.netlify.com/guides/netlify-vs-vercel/) — HIGH confidence, official comparison
- [Vercel vs Netlify 2025: Edge Computing Performance](https://dev.to/dataformathub/vercel-vs-netlify-2025-the-truth-about-edge-computing-performance-2oa0) — MEDIUM confidence

### Mobile-First Design
- [Responsive Design Best Practices for 2025: Mobile-First Imperative](https://www.adicator.com/post/responsive-design-best-practices) — MEDIUM confidence
- [Premium Guide to Mobile-First Web Design in 2025](https://www.dbeta.co.uk/blog/premium-guide-to-mobile-first-web-design-2025.html) — MEDIUM confidence

### Development Tools
- [Next.js ESLint Configuration](https://nextjs.org/docs/app/api-reference/config/eslint) — HIGH confidence, official
- [Setup ESLint and Prettier in Next.js](https://medium.com/@prhmhoseyni/setup-eslint-and-prettier-in-next-js-e00ef68c162d) — MEDIUM confidence

---
*Stack research for: Luxury Architecture Landing Page*
*Researched: 2025-02-10*
