# Architecture Research

**Domain:** High-Performance Landing Pages
**Researched:** February 10, 2026
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Presentation Layer                             │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐          │
│  │   Hero     │  │  Gallery   │  │   About    │  │  Contact   │          │
│  │  Section   │  │  Section   │  │  Section   │  │  Section   │          │
│  └──────┬─────┘  └──────┬─────┘  └──────┬─────┘  └──────┬─────┘          │
│         │               │               │               │                   │
├─────────┴───────────────┴───────────────┴───────────────┴───────────────────┤
│                              Component Layer                                │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    Reusable UI Components (Atoms/Molecules)          │    │
│  │  Buttons │ Cards │ Typography │ Images │ Form Inputs │ Animations   │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
├───────────────────────────────────────────────────────────────────────────────┤
│                              Animation Layer                                 │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    Animation Controller (Framer Motion)              │    │
│  │  Scroll-triggered │ Hover effects │ Page transitions │ Micro-interactions│
│  └─────────────────────────────────────────────────────────────────────┘    │
├───────────────────────────────────────────────────────────────────────────────┤
│                              Performance Layer                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │  Image Loader   │  │  Font Loader    │  │  Prefetcher     │              │
│  │  (next/image)   │  │  (next/font)    │  │  (Strategy)     │              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| **Hero Section** | First impression, value proposition, primary CTA | Server Component with static content, client-side animation |
| **Gallery Section** | Portfolio showcase, image-heavy content | Server Component with next/image optimization, lazy loading |
| **About Section** | Company story, team information | Server Component with static content |
| **Contact Section** | Lead capture, user communication | Client Component (form), Server Action for submission |
| **Navigation** | Site navigation, scroll behavior | Sticky client component with scroll animation |
| **Animation Controller** | Orchestrates scroll-triggered effects | Custom hook using Intersection Observer + Framer Motion |
| **Image Loader** | Responsive images, format conversion | Next.js Image component with AVIF/WebP fallback |

## Recommended Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (fonts, metadata, providers)
│   ├── page.tsx           # Landing page (main entry point)
│   └── globals.css        # Global styles, Tailwind directives
│
├── components/            # React components (Atomic Design hierarchy)
│   ├── atoms/             # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Typography.tsx
│   │   ├── Icon.tsx
│   │   └── Image.tsx
│   │
│   ├── molecules/         # Simple combinations of atoms
│   │   ├── Section.tsx
│   │   ├── Card.tsx
│   │   ├── FormInput.tsx
│   │   └── CTA.tsx
│   │
│   ├── organisms/         # Complex UI sections
│   │   ├── Hero.tsx
│   │   ├── Gallery.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Navigation.tsx
│   │
│   └── templates/         # Page-level layouts (if needed)
│       └── LandingPage.tsx
│
├── lib/                   # Utility functions
│   ├── animations.ts      # Animation variants, presets
│   ├── utils.ts           # General utilities
│   └── constants.ts       # Design tokens, config
│
├── hooks/                 # Custom React hooks
│   ├── use-scroll-trigger.ts  # Scroll-based animation trigger
│   ├── use-reveal.ts          # Reveal on scroll
│   └── use-preload.ts         # Asset preloading
│
├── styles/                # Additional styles
│   └── animations.css     # Custom animation keyframes
│
└── types/                 # TypeScript types
    └── index.ts
```

### Structure Rationale

- **app/**: Next.js 15 App Router - Server Components by default for optimal performance
- **components/atoms/**: Smallest reusable units (buttons, typography) - highly composable
- **components/molecules/**: Simple combinations (cards, form inputs) - commonly reused patterns
- **components/organisms/**: Major sections (hero, gallery) - page-level building blocks
- **lib/animations.ts**: Centralized animation configuration using Framer Motion variants
- **hooks/**: Custom hooks for scroll-based animations, preloading, and performance optimization

## Architectural Patterns

### Pattern 1: Atomic Design Component Hierarchy

**What:** Organize components into five levels: Atoms → Molecules → Organisms → Templates → Pages

**When to use:** For any landing page requiring maintainable, scalable component architecture

**Trade-offs:**
- ✅ Highly reusable, consistent design system
- ✅ Easy to maintain and scale
- ✅ Clear separation of concerns
- ⚠️ Initial setup overhead
- ⚠️ May feel over-engineered for very simple pages

**Example:**
```typescript
// Atom: Basic button
// components/atoms/Button.tsx
export function Button({ children, variant = 'primary' }) {
  return (
    <button className={`btn btn-${variant}`}>
      {children}
    </button>
  )
}

// Molecule: Button with icon
// components/molecules/IconButton.tsx
export function IconButton({ icon, label }) {
  return (
    <Button variant='secondary'>
      <Icon name={icon} />
      {label}
    </Button>
  )
}

// Organism: Hero section with CTA
// components/organisms/Hero.tsx
export function Hero({ title, subtitle, cta }) {
  return (
    <section className='hero'>
      <Typography variant='h1'>{title}</Typography>
      <Typography variant='subtitle'>{subtitle}</Typography>
      <IconButton icon='arrow' label={cta} />
    </section>
  )
}
```

### Pattern 2: Server-First with Client Boundaries

**What:** Use Server Components by default, selectively add "use client" for interactivity

**When to use:** For landing pages with optimal LCP but requiring animations/forms

**Trade-offs:**
- ✅ Faster initial page load (smaller JS bundle)
- ✅ Better SEO (content rendered server-side)
- ✅ Reduced client-side JavaScript
- ⚠️ Requires careful boundary planning
- ⚠️ Server components can't use hooks/context

**Example:**
```typescript
// Server Component (default)
// components/organisms/Gallery.tsx
import { Image } from '@/components/atoms/Image'

export async function Gallery() {
  const images = await getImages() // Server-side data fetching

  return (
    <section className='gallery'>
      {images.map((img) => (
        <Image key={img.id} src={img.src} alt={img.alt} />
      ))}
    </section>
  )
}

// Client Component for animations
// components/molecules/AnimatedCard.tsx
'use client'

import { motion } from 'framer-motion'

export function AnimatedCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
```

### Pattern 3: Progressive Image Loading

**What:** Load critical images eagerly, defer non-critical images

**When to use:** For image-heavy landing pages (portfolio, architecture sites)

**Trade-offs:**
- ✅ Dramatically improves LCP
- ✅ Reduces initial bandwidth
- ✅ Better perceived performance
- ⚠️ Requires careful prioritization
- ⚠️ Slight delay for non-critical images

**Example:**
```typescript
// LCP image (hero background) - EAGER loading
<Image
  src='/hero.jpg'
  alt='RE Arquitetura Featured Project'
  priority // Forces eager loading
  fill
  className='hero-background'
/>

// Above-fold images - Eager loading
<Image
  src='/project-1.jpg'
  alt='Project 1'
  loading='eager'
  width={800}
  height={600}
/>

// Below-fold gallery - Lazy loading (default)
<Image
  src='/project-5.jpg'
  alt='Project 5'
  loading='lazy' // or omit (lazy is default)
  width={800}
  height={600}
/>
```

### Pattern 4: Scroll-Triggered Animation with Intersection Observer

**What:** Animate elements as they enter the viewport using Intersection Observer

**When to use:** For reveal effects, parallax, and scroll-based storytelling

**Trade-offs:**
- ✅ Engaging user experience
- ✅ Doesn't block initial render
- ✅ Works with server components (client boundary at hook level)
- ⚠️ Can be overused (animation fatigue)
- ⚠️ Requires cleanup to prevent memory leaks

**Example:**
```typescript
// hooks/use-reveal.ts
'use client'

import { useEffect, useRef, useState } from 'react'

export function useReveal() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Trigger once
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Usage in component
'use client'

import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/use-reveal'

export function RevealSection({ children }) {
  const { ref, isVisible } = useReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

## Data Flow

### Page Load Flow

```
[User Request]
    ↓
[Next.js Server] → [Server Components Render]
    ↓                    ↓
[HTML + Critical CSS] → [Initial LCP]
    ↓
[Client Hydration] → [Interactivity Enabled]
    ↓
[Scroll Events] → [Intersection Observer Triggers Animations]
```

### Form Submission Flow

```
[User Submits Form]
    ↓
[Client Component] → [Server Action]
    ↓                   ↓
[Validation] ← [Server Processes]
    ↓                   ↓
[Success/Error State] ← [Database/API Call]
```

### Image Loading Flow

```
[Page Load]
    ↓
[Hero Image] → [Priority Load (LCP Candidate)]
    ↓
[Above-Fold Images] → [Eager Load]
    ↓
[Scroll]
    ↓
[Below-Fold Images Enter Viewport] → [Lazy Load on Demand]
```

### Key Data Flows

1. **LCP Optimization:** Hero image loads first with `priority` prop → Text content renders → LCP achieved
2. **Animation Trigger:** User scrolls → Intersection Observer detects entry → Framer Motion applies animation
3. **Form Submission:** User submits → Client validation → Server Action processes → Returns success/error → UI updates

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| Single landing page | Monolithic Next.js app with Server Components is optimal |
| 2-5 landing pages | Share components across pages, consider route groups for organization |
| 5+ landing pages | Extract design system to separate package, consider headless CMS for content |
| Multi-language | Add i18n routing, consider static generation per language |

### Scaling Priorities

1. **First bottleneck:** Image optimization
   - Fix: Use next/image with proper priority/eager/lazy loading
   - Target: All images < 500KB, LCP image < 200KB

2. **Second bottleneck:** Animation performance
   - Fix: Use CSS transforms (GPU-accelerated), avoid layout thrashing
   - Target: 60fps animations, no layout shifts during animations

3. **Third bottleneck:** Bundle size
   - Fix: Code splitting, dynamic imports for non-critical features
   - Target: < 100KB initial JS bundle

## Anti-Patterns

### Anti-Pattern 1: Lazy Loading LCP Images

**What people do:** Add `loading="lazy"` to all images, including the hero/above-fold images

**Why it's wrong:** Delays LCP by deferring the largest contentful paint. Lazy loading is ONLY for below-fold content.

**Do this instead:**
```typescript
// ✅ CORRECT: LCP candidate (hero background)
<Image
  src='/hero.jpg'
  alt='Hero'
  priority // Eager loading, preloads
  fill
/>

// ✅ CORRECT: Above-fold content
<Image
  src='/featured.jpg'
  alt='Featured'
  loading='eager' // Explicit eager
  width={800}
  height={600}
/>

// ✅ CORRECT: Below-fold gallery
<Image
  src='/gallery-1.jpg'
  alt='Gallery item'
  loading='lazy' // Default, can omit
  width={400}
  height={300}
/>
```

### Anti-Pattern 2: Animations Blocking Initial Render

**What people do:** Use heavy animation libraries or complex animations that block the main thread

**Why it's wrong:** Increases LCP, creates janky scrolling, poor UX on slower devices

**Do this instead:**
```typescript
// ❌ WRONG: Heavy animation on mount
useEffect(() => {
  gsap.timeline().to('.hero', { duration: 2, opacity: 0 })
}, [])

// ✅ CORRECT: Defer non-critical animations
useEffect(() => {
  // Use requestIdleCallback for non-critical animations
  requestIdleCallback(() => {
    // Animate after page is interactive
  })
}, [])

// ✅ BETTER: Use CSS transitions for simple effects
<div className='fade-in'> // CSS handles the animation
  Content
</div>
```

### Anti-Pattern 3: Client-Side Only Rendering

**What people do:** Make everything a Client Component or use SPA routing for a static landing page

**Why it's wrong:** Defers content rendering, hurts SEO, increases initial JS bundle

**Do this instead:**
```typescript
// ❌ WRONG: Entire page as client component
'use client'
export default function Page() {
  return <Hero /> // All content rendered client-side
}

// ✅ CORRECT: Server component with selective client boundaries
// Server component (default)
export default function Page() {
  return (
    <>
      <Hero /> // Static HTML
      <ContactForm /> // Client component only where needed
    </>
  )
}
```

### Anti-Pattern 4: Ignoring Layout Shift (CLS)

**What people do:** Don't reserve space for images, fonts, or dynamic content

**Why it's wrong:** Causes layout shift, hurts CLS score, poor UX

**Do this instead:**
```typescript
// ❌ WRONG: No dimensions
<img src='/project.jpg' alt='Project' />

// ✅ CORRECT: Explicit dimensions (prevents CLS)
<Image
  src='/project.jpg'
  alt='Project'
  width={1200}
  height={800}
/>

// ✅ CORRECT: Reserve space for dynamic content
<div className='min-h-[400px]'> // Minimum height reserved
  <DynamicContent />
</div>
```

### Anti-Pattern 5: Over-Engineering for Simple Pages

**What people do:** Use Redux, complex state management, or heavy frameworks for a single landing page

**Why it's wrong:** Unnecessary complexity, larger bundle sizes, harder to maintain

**Do this instead:**
```typescript
// ❌ WRONG: Redux for simple form
const store = configureStore({ reducer: formReducer })

// ✅ CORRECT: Server Actions + useState
'use client'
const [status, setStatus] = useState('idle')

async function handleSubmit(formData) {
  setStatus('pending')
  const result = await submitForm(formData) // Server Action
  setStatus(result.success ? 'success' : 'error')
}
```

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| **Vercel/Netlify** | Git-based deployment, automatic previews | Both optimized for Next.js. Vercel has better Next.js integration; Netlify has more generous free tier |
| **Image CDN** | next/image with custom loader | Not needed if using Vercel (built-in optimization) |
| **Analytics** | Client component with load deferment | Load analytics after page becomes interactive |
| **Form Service** | Server Actions → external API | Keeps forms functional without client-side JS |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| **Server ↔ Client Components** | Props (data down), Server Actions (data up) | Keep client boundaries minimal for optimal performance |
| **Organism ↔ Organism** | Direct composition (parent includes children) | Avoid shared state between top-level sections |
| **Animation Controller ↔ Components** | Custom hooks (useReveal, useScrollTrigger) | Centralized animation config, distributed trigger logic |

## Performance Target Architecture

### Achieving LCP < 2.5s

```
Critical Path:
1. HTML Document (Server Rendered) → < 100ms
2. Critical CSS (Inline) → < 50ms
3. Hero Image (Priority + AVIF) → < 800ms
4. Font Display (Swap) → < 100ms
5. JavaScript Hydration → < 500ms

Total LCP Budget: ~1.5s (leaving 1s buffer for network variations)
```

### Achieving CLS < 0.1

```
Layout Stability Strategy:
1. All images have explicit width/height
2. Fonts use font-display: swap with fallback metrics
3. Dynamic content reserves space (min-height)
4. Ads/embeds have pre-sized containers
5. No DOM insertions above existing content
```

### Animation Performance Strategy

```
60fps Target:
1. Use CSS transforms (translate, scale, rotate) - GPU accelerated
2. Avoid animating width, height, padding - triggers layout
3. Use will-change sparingly for complex animations
4. Prefer Framer Motion's layout prop for FLIP animations
5. Test on mobile (lower-end devices)
```

## Build Order Implications

### Recommended Build Sequence

Based on component dependencies and performance impact:

1. **Phase 1: Foundation** (Atoms + Core Layout)
   - Typography, colors, spacing tokens
   - Basic atoms (Button, Typography, Icon)
   - Root layout with fonts and metadata
   - *Rationale: Establishes design system, lowest complexity*

2. **Phase 2: Performance Infrastructure** (Optimization Layer)
   - Image loading configuration (next/image)
   - Font loading strategy (next/font)
   - Basic page structure without content
   - *Rationale: Performance must be built in, not added later*

3. **Phase 3: Content Sections** (Organisms)
   - Hero section (LCP critical path)
   - About section
   - Gallery section (image-heavy)
   - *Rationale: Build content sections from top to bottom*

4. **Phase 4: Interactivity** (Client Components)
   - Navigation with scroll behavior
   - Contact form with Server Actions
   - *Rationale: Add interactivity after content is performant*

5. **Phase 5: Animation Layer** (Polish)
   - Scroll-triggered reveals
   - Hover effects
   - Page transitions
   - *Rationale: Animations are enhancement, not foundation*

6. **Phase 6: Optimization & Testing**
   - Lighthouse audit
   - Real device testing
   - Image compression check
   - *Rationale: Validate performance targets are met*

### Dependency Graph

```
Atoms (Button, Typography, Image)
    ↓
Molecules (Card, FormInput, CTA)
    ↓
Organisms (Hero, Gallery, Contact)
    ↓
Page (Landing Page Assembly)
    ↓
Animation Layer (Enhancement, independent)
    ↓
Performance Testing (Validation)
```

## Sources

### Architecture & Structure
- [Next.js App Router: Guides](https://nextjs.org/docs/app/guides) - Official Next.js documentation (June 2025)
- [Modern Full Stack Application Architecture Using Next.js 15+](https://softwaremill.com/modern-full-stack-application-architecture-using-next-js-15/) - Software Mill (June 2025)
- [Building a Production-Ready Next.js App Router Architecture](https://dev.to/yukionishi1129/building-a-production-ready-nextjs-app-router-architecture-a-complete-playbook-3f3h) - Dev.to (October 2025)
- [How to Set Up a Scalable Next.js 15 App Router Project Structure](https://levelup.gitconnected.com/how-to-set-up-a-scalable-nextjs-15-app-router-project-structure-pro-tips-3c42778cd737) - Level Up (June 2025)

### Component Architecture
- [Atomic Design Methodology in UX/UI Design](https://medium.com/@qamarjafari1717/atomic-design-methodology-in-ux-ui-design-from-atoms-to-pages-a9f20ab12841) - Medium (August 2025)
- [Best Atomic UI Component Frameworks for Lightning-Fast Web Development in 2026](https://dev.to/ninarao/best-atomic-ui-component-frameworks-for-lightning-fast-web-development-in-2026-3894) - Dev.to (January 2026)
- [Building better UIs with Atomic Design principles](https://www.justinmind.com/ui-design/atomic-design) - Justinmind (January 2025)

### Performance & Optimization
- [Image Optimization - Next.js](https://nextjs.org/docs/13/app/building-your-application/optimizing/images) - Official Next.js documentation
- [Optimizing Image Performance in Next.js: Best Practices](https://geekyants.com/blog/optimizing-image-performance-in-nextjs-best-practices-for-fast-visual-web-apps) - GeekyAnts (June 2025)
- [Page Speed Optimization Guide For 2026](https://replo.app/blog/page-speed-optimization) - Replo (January 2026)
- [The most effective ways to improve Core Web Vitals](https://web.dev/articles/top-cwv) - web.dev (October 2024)
- [Performance | 2024 | The Web Almanac by HTTP Archive](https://almanac.httparchive.org/en/2024/performance) - HTTP Archive (November 2024)
- [A faster web in 2024](https://rviscomi.dev/2023/11/a-faster-web-in-2024/) - Rick Viscomi (November 2023)

### Animation Libraries
- [Comparing the best React animation libraries for 2026](https://blog.logrocket.com/best-react-animation-libraries/) - LogRocket (2026)
- [Framer vs GSAP: Which Animation Library Should You Choose?](https://pentaclay.com/blog/framer-vs-gsap-which-animation-library-should-you-choose) - Pentaclay (July 2025)
- [GSAP vs. Framer Motion: A Deep Dive](https://artekia.com/en/blog/gsap-vs-framer-motion) - Artekia (October 2025)

### Mobile-First & Responsive Design
- [Mobile-First Approach and Responsive Design: What's New](https://atlant.digital/en/blog-en/mobile-first-responsive-design-updates-3) - Atlant Digital (January 2026)
- [Responsive Design in 2026: What's New and What's Next](https://medium.com/@netizens_technologies/responsive-design-in-2026-whats-new-and-whats-next-137285d4f0c6) - Medium (November 2025)
- [Responsive Web Design Best Practices in 2026](https://www.blushush.co.uk/blogs/responsive-web-design-best-practices-in-2026) - Blushush (January 2026)

### Deployment
- [Vercel vs Netlify: Choosing the right one in 2026](https://northflank.com/blog/vercel-vs-netlify-choosing-the-deployment-platform-in-2026) - Northflank (April 2025)
- [Vercel vs Netlify vs Cloudflare Pages in 2026](https://www.devtoolreviews.com/reviews/vercel-vs-netlify-vs-cloudflare-pages-2026) - DevToolReviews (February 2026)

### Anti-Patterns & Mistakes
- [13 common landing page mistakes in 2026 and how to fix them](https://www.zoho.com/landingpage/landing-page-mistakes.html) - Zoho (2026)
- [6 UX Mistakes to Avoid in 2026 Website Design](https://www.webmoghuls.com/ux-mistakes-avoid-2026-website-design/) - WebMoghuls (2026)

---
*Architecture research for: High-Performance Landing Pages*
*Researched: February 10, 2026*
