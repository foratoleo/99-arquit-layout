# Domain Pitfalls

**Domain:** High-performance luxury landing pages
**Researched:** 2026-02-10
**Confidence:** MEDIUM

## Critical Pitfalls

### Pitfall 1: CLS from Lazy-Loaded Above-the-Fold Content

**What goes wrong:**
Lazy loading images without reserving space causes Cumulative Layout Shift (CLS), violating the 0.1 threshold. Content jumps as images load, creating visual instability.

**Why it happens:**
Developers apply lazy loading universally without reserving dimensions for images. When lazy-loaded hero or above-the-fold images load, they push content down, causing layout shifts.

**How to avoid:**
- Never lazy load above-the-fold/LCP images
- Always use `next/image` with explicit `width` and `height` props
- Add `priority` prop to LCP (hero) images in Next.js
- Reserve space in CSS with `aspect-ratio` for below-fold lazy images

**Warning signs:**
- Layout shifts when scrolling
- Lighthouse CLS score > 0.1
- Jumping content during image loading

**Phase to address:**
Phase 1 (Foundation) — Image optimization strategy is foundational to performance targets

---

### Pitfall 2: Animation Jank on Mobile

**What goes wrong:**
Smooth animations on desktop become choppy and janky on mobile devices, creating a "broken" feel instead of premium experience. Frame rates drop below 60fps.

**Why it happens:**
Mobile browsers limit script execution during scroll events to conserve battery. Complex animations, parallax effects, and heavy JavaScript fail to respect these constraints. Parallax is especially problematic—most mobile browsers don't support it properly.

**How to avoid:**
- Use CSS animations (GPU-accelerated) over JavaScript where possible
- Implement `prefers-reduced-motion` media query for accessibility
- Test animations on actual mobile devices (not dev tools)
- Disable parallax on mobile—use static fallback
- Use `requestAnimationFrame` for JavaScript animations
- Prefer Framer Motion for React (2.5x faster than GSAP for unknown values)

**Warning signs:**
- Choppy scrolling on iOS/Android
- Animations feel "heavy" or sluggish
- Battery drain on mobile
- Parallax doesn't work on touch devices

**Phase to address:**
Phase 2 (Core Features) — Animation architecture must be mobile-first

---

### Pitfall 3: Luxury Aesthetic Killing Accessibility (Quiet Luxury Contrast Trap)

**What goes wrong:**
Light gray text on white backgrounds, thin typography, and subtle UI elements fail WCAG contrast requirements (4.5:1 for normal text). The "quiet luxury" aesthetic directly conflicts with accessibility standards.

**Why it happens:**
Designers prioritize aesthetic minimalism over readability. The "quiet luxury" trend relies on muted palettes, thin fonts, and subtle interactions—all of which hurt accessibility and usability.

**How to avoid:**
- Always validate contrast ratios with tools before committing to designs
- Use darker grays (#333 or darker) on white, not light grays
- Maintain minimum font sizes (16px body, larger for headings)
- Never rely on color alone to convey meaning
- Test with actual users, not just designer eyes
- Consider WCAG AAA for truly premium (luxury should be usable by everyone)

**Warning signs:**
- Text harder to read in different lighting
- Designers say "it looks clean" but users struggle
- Light gray text on white/light backgrounds
- Thin fonts on light backgrounds

**Phase to address:**
Phase 1 (Foundation) — Design system must establish accessible baseline

---

### Pitfall 4: Hero Image Killing LCP

**What goes wrong:**
Large, unoptimized hero images cause Largest Contentful Paint (LCP) to exceed 2.5s, failing performance targets and Core Web Vitals.

**Why it happens:**
Hero images are the largest visual element and often loaded without optimization. Missing the `priority` prop in Next.js, no preloading, or using full-resolution uncompressed images all contribute.

**How to avoid:**
- Always add `priority` prop to LCP/hero images in Next.js
- Use `next/image` component with optimized quality settings
- Compress images before upload (ImageOptim, squoosh)
- Use WebP/AVIF formats with JPEG fallbacks
- Preload critical fonts with `fetchpriority="high"`
- Consider reducing hero image quality to 70-80% for performance

**Warning signs:**
- Lighthouse LCP > 2.5s
- Hero image takes >1s to load on 3G
- Large image file sizes (>200KB uncompressed)

**Phase to address:**
Phase 1 (Foundation) — Hero section is first impression; performance is non-negotiable

---

### Pitfall 5: Animation Library Bloat

**What goes wrong:**
Including a heavy animation library (full GSAP, multiple animation packages) adds hundreds of KB to the bundle for a landing page that only needs basic transitions.

**Why it happens:**
Developers import entire libraries instead of specific utilities. "We might need it later" thinking leads to carrying unused code.

**How to avoid:**
- Choose lightweight libraries: Framer Motion (~25KB gzipped) over full GSAP
- Import only what you need: `import { motion } from 'framer-motion'`
- Consider CSS-only animations for simple effects
- Use bundle analyzer (`@next/bundle-analyzer`) to identify bloat
- Lazy load animation libraries if not critical for initial render

**Warning signs:**
- Bundle size > 100KB for a single-page app
- Lighthouse "Reduce unused JavaScript" warning
- Animation library takes >50KB of bundle

**Phase to address:**
Phase 1 (Foundation) — Bundle size decisions are hard to change later

---

### Pitfall 6: React Strict Mode Double-Rendering Animation Bugs

**What goes wrong:**
Animations trigger twice or behave erratically in development due to React 18's Strict Mode double-mounting, leading developers to build "fixes" that break production or disable Strict Mode entirely.

**Why it happens:**
React 18 Strict Mode intentionally mounts, unmounts, and remounts components in development to find bugs. Effects and animations that assume single-mount behavior fail.

**How to avoid:**
- Write idempotent effects that can handle multiple calls
- Use cleanup functions in `useEffect` properly
- Don't use `useRef` hacks to skip double rendering (React team considers this a bug)
- Test in production mode (`npm run build && npm start`) to verify behavior
- Design animations to be restartable, not one-time-only

**Warning signs:**
- Animations "jitter" or restart in development
- useEffect runs twice in console logs
- Using `if (firstRender.current) return` pattern

**Phase to address:**
Phase 2 (Core Features) — Animation architecture must handle React's lifecycle correctly

---

### Pitfall 7: WhatsApp Button Placement Hurting Conversions

**What goes wrong:**
WhatsApp button is hidden, hard to find, placed below the fold, or competes with other CTAs—reducing conversion rates instead of improving them.

**Why it happens:**
Designers hide conversion elements for "aesthetic" reasons or place multiple CTAs hoping to capture all paths. This creates analysis paralysis.

**How to avoid:**
- Place floating WhatsApp button in bottom-right corner (most familiar position)
- Use clear WhatsApp branding (green color, recognizable icon)
- Don't compete with primary CTA—WhatsApp should complement, not confuse
- Ensure visibility on all pages without obstructing content
- Position near high-intent content (pricing, portfolio, contact)
- Make it responsive and easily clickable on mobile

**Warning signs:**
- WhatsApp button is subtle/buried for aesthetic reasons
- Multiple CTAs competing above the fold
- Users have to hunt for contact options
- Low click-through rates on WhatsApp button

**Phase to address:**
Phase 3 (Conversion Focus) — CTA strategy directly affects business metrics

---

### Pitfall 8: Font Loading Causing FOUT/FOIT

**What goes wrong:**
Text flashes invisible (FOIT) or switches from system font to custom font (FOUT) during page load, creating jarring visual shifts and hurting the premium feel.

**Why it happens:**
Fonts load asynchronously without proper display strategy. Custom web fonts add significant load time, especially for luxury typography with multiple weights.

**How to avoid:**
- Use `next/font` for automatic font optimization
- Prefer `font-display: swap` (FOUT over FOIT—better UX)
- Subset fonts to include only characters used
- Load only necessary weights (don't load entire font family)
- Consider `font-display: optional` for non-critical fonts
- Use system font stack for body text, custom for headings only

**Warning signs:**
- Text invisible for >1 second during load
- Font switches mid-sentence
- Multiple font weights loaded (300, 400, 500, 600, 700, 800)

**Phase to address:**
Phase 1 (Foundation) — Typography strategy affects perceived performance

---

### Pitfall 9: Overengineering "Quiet Luxury"

**What goes wrong:**
Complex animations, hidden navigation, and excessive minimalism make the site hard to use—defeating the purpose of a landing page. Features built for "cool factor" hurt conversion.

**Why it happens:**
Developer/designer ego—"impressing other designers" rather than serving users. The quiet luxury aesthetic is taken to extremes that harm usability.

**How to avoid:**
- Keep navigation visible and discoverable (no hidden menus)
- Prioritize content over clever animations
- Test with real users, not just design peers
- Remember: luxury means effortless experience, not confusing interface
- Every element should serve a conversion or UX purpose
- "Simplicity" should not mean "hard to use"

**Warning signs:**
- Users can't find navigation
- Animations distract from content
- "Where do I click?" confusion
- Designers praise it, users struggle

**Phase to address:**
Phase 2 (Core Features) — UX patterns must be validated before animation polish

---

### Pitfall 10: Third-Party Script Overload

**What goes wrong:**
Analytics, chat widgets, tracking scripts, and social embeds bloat the page and hurt Core Web Vitals scores, especially on mobile.

**Why it happens:**
Marketing requirements add scripts without performance consideration. Each "harmless" widget compounds into significant slowdown.

**How to avoid:**
- Audit every third-party script: Is it essential for MVP?
- Load non-critical scripts with `defer` or async
- Consider server-side tracking where possible
- Use lightweight alternatives (e.g., simple analytics vs. full GA4)
- Bundle analytics scripts yourself instead of multiple tags
- Test with scripts disabled to establish performance baseline

**Warning signs:**
- More than 3 third-party scripts on a landing page
- Network waterfall shows many external domains
- Lighthouse "Reduce impact of third-party code" warning
- TTI blocked by unrelated domains

**Phase to address:**
Phase 3 (Conversion Focus) — Add conversion tracking only after performance baseline is established

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Inline styles for quick iterations | Fast prototyping | Hard to maintain, cache issues | Never (even in prototyping) |
| `useRef` hack for Strict Mode | Stops double-render in dev | Breaks when React removes workaround | Never |
| Disabling Strict Mode | "Fixes" double-render bugs | Misses real bugs, production issues | Never |
| Lazy loading everything | Perceived faster initial load | CLS issues, janky scrolling | Only for below-fold content |
| Full library imports | Faster development | Bundle bloat, slower loads | Never in production |
| Skipping accessibility for aesthetics | Meets design requirements | Excludes users, legal risk, bad UX | Never |
| Heavy animations for "wow factor" | Impresses in demos | Hurts performance, distracts from content | Rarely, and only if tested on real devices |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Next.js Image | Lazy loading hero images | Use `priority` prop for LCP images |
| Framer Motion | Animating on every scroll | Use `useReducedMotion` check, throttle scroll handlers |
| next/font | Loading all font weights | Load only used weights (e.g., 400, 600) |
| WhatsApp API | Overly complex chat widgets | Simple floating button with click-to-chat URL |
| Analytics | Loading blocking scripts | Use `defer` or load after page interactive |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Parallax on mobile | Janky scrolling, broken effect | Disable parallax on mobile, use static fallback | Immediately on touch devices |
| Large hero images | LCP > 2.5s, slow first impression | `priority` prop, WebP compression, quality 70-80% | On slow connections (3G) |
| Too many animations | Jank, battery drain | Limit to 2-3 per section, use CSS over JS | On mobile, low-end devices |
| Unoptimized fonts | FOUT/FOIT, layout shift | `next/font`, font-display: swap, subset fonts | Slow connections |
| Third-party scripts | TTI blocked, slow CLS | Defer non-critical, audit necessity | Always adds overhead |

## Security Mistakes

| Mistake | Risk | Prevention |
|---------|------|------------|
| Exposed API keys in frontend | API abuse, billing charges | Never expose secret keys, use server-side proxy |
| WhatsApp phone number exposed (minor) | Spam calls | Acceptable for landing pages—direct contact is the goal |
| Input sanitization skipped | XSS if adding forms later | Sanitize all user inputs, even for "simple" forms |
| Unvalidated external content | Security if pulling dynamic content | Validate and sanitize all external data |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Hidden navigation for aesthetics | Users can't find content | Keep navigation visible, even in minimal design |
| No clear value proposition above fold | Visitors leave without understanding | Communicate what/who/why in 3 seconds |
| Multiple competing CTAs | Analysis paralysis, lower conversion | One clear CTA, repeat it but don't compete |
| Light text on light backgrounds | Unreadable content, exits | Maintain 4.5:1 contrast minimum |
| Over-animating | Distraction from message | Animate with purpose, not for "cool" |
| No mobile testing | Broken experience for 50%+ of traffic | Test on real devices, not dev tools |

## "Looks Done But Isn't" Checklist

- [ ] **Hero section**: Often missing `priority` prop on LCP image — verify LCP < 2.5s
- [ ] **Animations**: Often fail on mobile devices — test on iOS/Android real devices
- [ ] **Contrast**: Often fails WCAG in "quiet luxury" designs — validate with contrast checker
- [ ] **Fonts**: Often loading unused weights — audit loaded fonts in Network tab
- [ ] **WhatsApp button**: Often placed poorly for aesthetics — verify bottom-right visibility
- [ ] **Lazy loading**: Often applied to above-fold content — never lazy load hero/LCP images
- [ ] **Bundle size**: Often includes unused library code — run `@next/bundle-analyzer`
- [ ] **CLS**: Often caused by unreserved image space — check Lighthouse CLS score
- [ ] **Reduced motion**: Often missing for accessibility — test with `prefers-reduced-motion`
- [ ] **Form inputs**: Often skipped in "minimal" design but needed for conversion — verify lead capture

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| CLS from lazy loading | MEDIUM | Add explicit dimensions to all images, remove lazy from above-fold |
| Animation jank | HIGH | Rewrite with CSS animations, test on mobile, reduce complexity |
| Poor contrast | LOW | Darken text colors, may require design adjustments |
| Bundle bloat | MEDIUM | Run bundle analyzer, tree-shake imports, replace heavy libraries |
| LCP issues | MEDIUM | Add `priority` to hero image, compress/optimize, reduce quality |
| WhatsApp conversion issues | LOW | Move to bottom-right, ensure visibility, remove competing CTAs |
| FOUT/FOIT | LOW | Use `next/font`, add `font-display: swap` |
| Overengineered minimalism | HIGH | Simplify navigation, make CTAs clear, user testing required |

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| CLS from lazy loading | Phase 1 (Foundation) | Lighthouse CLS < 0.1, no layout shift on scroll |
| Animation jank on mobile | Phase 2 (Core Features) | 60fps on real iOS/Android devices |
| Luxury contrast trap | Phase 1 (Foundation) | WCAG AA contrast validation on all text |
| Hero image killing LCP | Phase 1 (Foundation) | Lighthouse LCP < 2.5s |
| Animation library bloat | Phase 1 (Foundation) | Bundle analyzer < 100KB total |
| Strict Mode double-render bugs | Phase 2 (Core Features) | Animations work correctly in production build |
| WhatsApp button placement | Phase 3 (Conversion Focus) | Click-through rate > 3%, visible on all pages |
| Font loading FOUT/FOIT | Phase 1 (Foundation) | No invisible text or font flashes |
| Overengineering quiet luxury | Phase 2 (Core Features) | User testing confirms findability and usability |
| Third-party script overload | Phase 3 (Conversion Focus) | Baseline performance established before adding tracking |

## Sources

### Performance & Core Web Vitals
- [Optimize CLS - web.dev](https://web.dev/articles/optimize-cls) (HIGH confidence - official Google documentation)
- [How To Fix CLS Issues - Smashing Magazine](https://www.smashingmagazine.com/2021/06/how-to-fix-cumulative-layout-shift-issues/) (HIGH confidence - reputable source)
- [7 Common Performance Mistakes in Next.js - Medium](https://medium.com/full-stack-forge/7-common-performance-mistakes-in-next-js-and-how-to-fix-them-edd355e2f9a9) (MEDIUM confidence)
- [Core Web Vitals Optimization Guide 2026 - Sky SEO Digital](https://skyseodigital.com/core-web-vitals-optimization-complete-guide-for-2026/) (MEDIUM confidence - current 2026)
- [Fix LCP in Next.js - YouTube](https://www.youtube.com/watch?v=owKXh_OsBkQ) (MEDIUM confidence)
- [Next.js Image Optimization - DebugBear](https://www.debugbear.com/blog/next-js-image-optimization) (HIGH confidence)
- [Optimizing The Image Element LCP - Smashing Magazine](https://www.smashingmagazine.com/2023/01/optimizing-image-element-lcp/) (HIGH confidence)

### Animation & Libraries
- [GSAP vs Motion Comparison - motion.dev](https://motion.dev/docs/gsap-vs-motion) (HIGH confidence - official benchmarks)
- [Comparing React Animation Libraries 2026 - LogRocket](https://blog.logrocket.com/best-react-animation-libraries/) (MEDIUM confidence - current 2026)
- [React Animation Libraries 2026 - Syncfusion](https://www.syncfusion.com/blogs/post/top-react-animation-libraries) (MEDIUM confidence)
- [Common Website Animations Mistakes - Strikingly](https://www.strikingly.com/blog/posts/common-website-animations-mistakes) (LOW confidence - single source)
- [Smooth Jank-Free Animations - Dev.to](https://dev.to/anisubhra_sarkar/smooth-jank-free-animations-with-css-and-javascript-performance-best-practices-46ff) (MEDIUM confidence)

### Mobile & Parallax Issues
- [Why Doesn't Parallax Scrolling Work on Mobile? - Astra Theme](https://wpastra.com/docs/parallax-not-working-on-mobile/) (HIGH confidence - documentation)
- [React scroll Parallax jittery on phone - Stack Overflow](https://stackoverflow.com/questions/72949537/react-scroll-parallax-image-are-jittery-on-phone) (MEDIUM confidence - community discussion)
- [Parallax Scroll Animation - GSAP Forums](https://gsap.com/community/forums/topic/44690-parallax-scroll-animation-%25E2%2580%2593-layout-breaking-laggy-transitions/) (MEDIUM confidence)

### Typography & Fonts
- [Optimizing Web Fonts: FOIT vs FOUT - Talent500](https://talent500.com/blog/optimizing-fonts-foit-fout-font-display-strategies/) (MEDIUM confidence)
- [You're Loading Fonts Wrong - Jono Alderson](https://www.jonoalderson.com/performance/youre-loading-fonts-wrong/) (HIGH confidence - performance expert)
- [Font Loading Strategies FOIT and FOUT - DEV Community](https://dev.to/ibn_abubakre/font-loading-strategies-foit-and-fout-393b) (MEDIUM confidence)
- [Ultimate Guide to Font Performance - DebugBear](https://www.debugbear.com/blog/website-font-performance) (HIGH confidence)

### Accessibility & Contrast
- [Common Colour Contrast Accessibility Errors - Accessibility Assistant](https://accessibilityassistant.com/blog/accessibility-insights/common-colour-contrast-accessibility-errors/) (HIGH confidence)
- [3 Color Contrast Mistakes Designers Make - UXDesign.cc](https://uxdesign.cc/3-color-contrast-mistakes-designers-still-make-68cc224735b3) (MEDIUM confidence)
- [7 Common Mistakes Made By Luxury Websites - LinkedIn](https://www.linkedin.com/pulse/7-common-mistakes-made-luxury-websites-florine-eppe-beauloye) (LOW confidence - single source)
- [Top 10 Accessibility Mistakes in UX/UI Design - Visual Soldiers](https://visualsoldiers.com/top-10-accessibility-mistakes-in-uxui-design-to-avoid/) (MEDIUM confidence)

### React & Next.js Specific
- [React StrictMode - React.dev](https://react.dev/reference/react/StrictMode) (HIGH confidence - official docs)
- [useEffect called twice in Strict Mode - GitHub Issue](https://github.com/facebook/react/issues/24553) (HIGH confidence - official GitHub)
- [Common Next.js Mistakes That Hurt Core Web Vitals - Pagepro](https://pagepro.co/blog/common-nextjs-mistakes-core-web-vitals/) (MEDIUM confidence)
- [5 Common Mistakes with Next.js Image - JavaScript Plain English](https://javascript.plainenglish.io/5-common-mistakes-developers-make-with-next-js-image-optimization-and-how-to-fix-them-98bcaaf9a81b) (MEDIUM confidence)

### Landing Page Conversion
- [17 Most Common Landing Page Mistakes - KlientBoost](https://www.klientboost.com/landing-pages/landing-page-mistakes/) (MEDIUM confidence)
- [Landing Pages: What Do You Really Need Above The Fold? - Disruptive Advertising](https://disruptiveadvertising.com/blog/conversion-rate-optimization/landing-pages-above-fold/) (MEDIUM confidence)
- [13 Common Landing Page Mistakes 2026 - Zoho](https://www.zoho.com/landingpage/landing-page-mistakes.html) (MEDIUM confidence - current 2026)
- [WhatsApp Integration Mistakes - Chatondesk](https://www.chatondesk.com/whatsapp-integration-shopify-mistakes/) (LOW confidence - single source, Shopify-specific)

### Overengineering & Minimalism
- [The Hidden Drawbacks Behind Minimalist Web Design - Crescentic Digital](https://www.crescenticdigital.com/blog/the-hidden-drawbacks-behind-minimalist-web-design-trends) (MEDIUM confidence)
- [Over-Engineered: Is Your Website So Impressive It Hurts? - Boldist](https://boldist.co/web-design/overengineering-vs-simplified-website-design/) (MEDIUM confidence)
- [The Problem with the Minimalist Web - Eric Murphy](https://ericmurphy.xyz/blog/minimalist-web/) (MEDIUM confidence)
- [Web Development Is Getting Too Complex - Smashing Magazine](https://www.smashingmagazine.com/2024/02/web-development-getting-too-complex/) (HIGH confidence - reputable source)

### Luxury Performance Case Studies
- [Zadig&Voltaire Performance Case Study - Imgix](https://www.imgix.com/customers/zadigandvoltaire) (HIGH confidence - verified case study)
- [Farfetch Core Web Vitals Case Study - web.dev](https://web.dev/case-studies/farfetch) (HIGH confidence - official Google case study)
- [Luxury Skincare Brand Performance - KN Digital](https://kndigital.co/helping-a-luxury-skincare-brand-scale-globally-with-45-faster-site-performance/) (MEDIUM confidence - agency case study)

---
*Pitfalls research for: High-performance luxury landing pages*
*Researched: 2026-02-10*
