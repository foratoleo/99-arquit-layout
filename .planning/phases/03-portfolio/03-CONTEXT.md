# Phase 3: Portfolio - Context

**Gathered:** 2025-02-10
**Status:** Ready for planning

## Phase Boundary

Create a fullscreen modular grid gallery with mobile-first gestures and image optimization. This phase builds the portfolio gallery as the visual showcase of projects.

## Implementation Decisions

### Modular Grid Layout
- **Desktop columns**: 2 columns for balance and image size
- **Aspect ratios**: Uniform ratio — all images same ratio (e.g., 4:3 or 16:9)
- **Grid spacing**: Tight — 8-16px gaps for seamless feel
- **Mobile behavior**: Single column — 1 column fullscreen images on mobile

### Touch Gesture Behaviors
- **Swipe action**: Horizontal swipe — swipe left/right to navigate projects
- **Fullscreen view**: Tap to fullscreen — tap image to open fullscreen modal
- **Zoom gestures**: Pinch zoom enabled — pinch-to-zoom on images
- **Transition animations**: Crossfade — subtle crossfade between images

### Lazy Loading Strategy
- **Initial load**: 4-6 images immediately
- **Trigger distance**: 1 viewport before — load when within 1 viewport
- **Placeholder style**: Solid color — solid sand color while loading
- **Priority images**: First row priority — first row has priority loading

### Gallery Interaction States
- **Hover effects**: Subtle indication — subtle opacity or scale change on desktop hover
- **Project info**: Overlay on image — title, location, year overlay on image
- **Active state**: Highlight active — visual indication of current project
- **Close action**: Close button — X button visible to exit fullscreen

## Specific Ideas

- Gallery should feel premium and spacious
- Mobile swipe should be natural and responsive
- CLS-safe lazy loading is critical for performance targets
- All images auto-optimize to WebP/AVIF via next/image

## Deferred Ideas

None — discussion stayed within phase scope.

---

*Phase: 03-portfolio*
*Context gathered: 2025-02-10*
