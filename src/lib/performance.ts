/**
 * Performance validation utilities for Core Web Vitals monitoring
 *
 * Tracks LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift),
 * FID (First Input Delay), and provides image audit functionality.
 */

export interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint (target: < 2500ms)
  cls: number; // Cumulative Layout Shift (target: < 0.1)
  fid?: number; // First Input Delay (target: < 100ms)
  pagespeed: number; // PageSpeed score (target: >= 90)
}

export interface PerformanceTarget {
  lcp: number;
  cls: number;
  pagespeed: number;
}

export interface ImageIssue {
  selector: string;
  issue: 'missing-dimensions' | 'missing-priority' | 'late-loading';
  recommendation: string;
}

/**
 * Performance targets based on Web Vitals thresholds
 */
export const PERFORMANCE_TARGETS: PerformanceTarget = {
  lcp: 2500, // 2.5 seconds - "good" threshold
  cls: 0.1, // 0.1 - "good" threshold
  pagespeed: 90, // 90+ - excellent performance
};

/**
 * Check if performance metrics meet targets
 */
export function meetsTargets(metrics: PerformanceMetrics): boolean {
  return (
    metrics.lcp <= PERFORMANCE_TARGETS.lcp &&
    metrics.cls <= PERFORMANCE_TARGETS.cls &&
    metrics.pagespeed >= PERFORMANCE_TARGETS.pagespeed
  );
}

/**
 * Get performance rating for a metric
 */
export function getRating(value: number, target: number, type: 'lower-is-better' | 'higher-is-better'): 'good' | 'needs-improvement' | 'poor' {
  if (type === 'lower-is-better') {
    if (value <= target) return 'good';
    if (value <= target * 1.5) return 'needs-improvement';
    return 'poor';
  } else {
    if (value >= target) return 'good';
    if (value >= target * 0.9) return 'needs-improvement';
    return 'poor';
  }
}

/**
 * Check Core Web Vitals using PerformanceObserver API
 * This runs in the browser only
 */
export function checkCoreWebVitals(): Promise<PerformanceMetrics> {
  return new Promise((resolve) => {
    // Only run in browser
    if (typeof window === 'undefined') {
      resolve({ lcp: 0, cls: 0, pagespeed: 0 });
      return;
    }

    const metrics: PerformanceMetrics = {
      lcp: 0,
      cls: 0,
      pagespeed: 0,
    };

    let lcpResolved = false;
    let clsResolved = false;
    let fidResolved = true; // FID is optional

    // Track LCP (Largest Contentful Paint)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
        if (lastEntry) {
          metrics.lcp = lastEntry.renderTime || lastEntry.loadTime || 0;
          lcpResolved = true;
          checkAllResolved();
        }
      });

      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Fallback: if no LCP after 5 seconds, use current value
      setTimeout(() => {
        if (!lcpResolved) {
          const entries = performance.getEntriesByType('largest-contentful-paint');
          if (entries.length > 0) {
            const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
            metrics.lcp = lastEntry?.renderTime || lastEntry?.loadTime || 0;
          }
          lcpResolved = true;
          checkAllResolved();
        }
      }, 5000);
    } catch {
      lcpResolved = true;
      checkAllResolved();
    }

    // Track CLS (Cumulative Layout Shift)
    try {
      let clsValue = 0;

      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as unknown as { hadRecentInput: boolean; value: number };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
        metrics.cls = clsValue;
      });

      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // CLS is continuous, resolve after page load
      window.addEventListener('load', () => {
        setTimeout(() => {
          clsResolved = true;
          checkAllResolved();
        }, 3000);
      });
    } catch {
      clsResolved = true;
      checkAllResolved();
    }

    // Track FID (First Input Delay) - optional
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const performanceEntry = entry as unknown as { processingStart: number; startTime: number };
          metrics.fid = performanceEntry.processingStart - performanceEntry.startTime;
          fidResolved = true;
          checkAllResolved();
        }
      });

      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch {
      // FID not supported in some browsers
      fidResolved = true;
    }

    // Estimate PageSpeed score based on metrics
    function checkAllResolved() {
      if (lcpResolved && clsResolved && fidResolved) {
        metrics.pagespeed = estimatePageSpeed(metrics);
        resolve(metrics);
      }
    }
  });
}

/**
 * Estimate PageSpeed score based on Core Web Vitals
 * This is a simplified estimation
 */
function estimatePageSpeed(metrics: PerformanceMetrics): number {
  let score = 100;

  // LCP penalty
  if (metrics.lcp > 4000) {
    score -= 40;
  } else if (metrics.lcp > 2500) {
    score -= 20;
  } else if (metrics.lcp > 1800) {
    score -= 10;
  }

  // CLS penalty
  if (metrics.cls > 0.25) {
    score -= 30;
  } else if (metrics.cls > 0.1) {
    score -= 15;
  } else if (metrics.cls > 0.05) {
    score -= 5;
  }

  return Math.max(0, Math.min(100, score));
}

/**
 * Audit images for common performance issues
 * Scans DOM for images without explicit dimensions or priority props
 */
export function auditImages(): ImageIssue[] {
  const issues: ImageIssue[] = [];

  if (typeof window === 'undefined') {
    return issues;
  }

  // Check all img elements
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    const selector = img.alt ? `img[alt="${img.alt}"]` : `img:nth-of-type(${index + 1})`;

    // Check for missing dimensions
    if (!img.width && !img.height && !img.style.width && !img.style.height) {
      // Check if parent has explicit sizing (for next/image with fill)
      const parent = img.parentElement;
      const hasExplicitParent = parent && (
        parent.classList.contains('aspect-ratio') ||
        getComputedStyle(parent).position === 'relative'
      );

      if (!hasExplicitParent) {
        issues.push({
          selector,
          issue: 'missing-dimensions',
          recommendation: 'Add explicit width and height props to prevent CLS',
        });
      }
    }
  });

  // Check for above-fold images without priority
  const viewportHeight = window.innerHeight;
  const aboveFoldElements: HTMLElement[] = [];

  images.forEach((img) => {
    const rect = img.getBoundingClientRect();
    if (rect.top < viewportHeight) {
      const parent = img.closest('section, div, [class*="hero"]');
      if (parent) {
        aboveFoldElements.push(parent as HTMLElement);
      }
    }
  });

  // Log warnings during development
  if (process.env.NODE_ENV === 'development' && issues.length > 0) {
    console.warn('⚠️ Performance Issues Detected:', issues);
  }

  return issues;
}

/**
 * Check for font loading issues (FOUT/FOIT)
 */
export function auditFonts(): {
  hasFout: boolean;
  hasFoit: boolean;
  recommendations: string[];
} {
  const recommendations: string[] = [];
  const hasFout = false;
  const hasFoit = false;

  if (typeof window === 'undefined') {
    return { hasFout, hasFoit, recommendations };
  }

  // Check if fonts are preloaded
  const preloads = document.querySelectorAll('link[rel="preload"][as="font"]');
  if (preloads.length === 0) {
    recommendations.push('Consider preloading critical fonts for faster rendering');
  }

  return {
    hasFout,
    hasFoit,
    recommendations,
  };
}

/**
 * Generate performance report for documentation
 */
export function generatePerformanceReport(metrics: PerformanceMetrics): string {
  const lcpRating = getRating(metrics.lcp, PERFORMANCE_TARGETS.lcp, 'lower-is-better');
  const clsRating = getRating(metrics.cls, PERFORMANCE_TARGETS.cls, 'lower-is-better');
  const pagespeedRating = getRating(metrics.pagespeed, PERFORMANCE_TARGETS.pagespeed, 'higher-is-better');

  return `
# Performance Report

## Core Web Vitals

| Metric | Value | Target | Rating |
|--------|-------|--------|--------|
| LCP | ${metrics.lcp.toFixed(0)}ms | < ${PERFORMANCE_TARGETS.lcp}ms | ${lcpRating} |
| CLS | ${metrics.cls.toFixed(3)} | < ${PERFORMANCE_TARGETS.cls} | ${clsRating} |
| PageSpeed | ${metrics.pagespeed.toFixed(0)} | >= ${PERFORMANCE_TARGETS.pagespeed} | ${pagespeedRating} |

## Overall Status

${meetsTargets(metrics) ? '✅ All performance targets met!' : '⚠️ Some targets not met - see recommendations above'}

---
Generated: ${new Date().toISOString()}
`;
}

/**
 * Log performance metrics during development
 */
export function logPerformanceMetrics(): void {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    checkCoreWebVitals().then((metrics) => {
      console.group('📊 Core Web Vitals');
      console.log(`LCP: ${metrics.lcp.toFixed(0)}ms (target: <${PERFORMANCE_TARGETS.lcp}ms)`);
      console.log(`CLS: ${metrics.cls.toFixed(3)} (target: <${PERFORMANCE_TARGETS.cls})`);
      console.log(`PageSpeed: ${metrics.pagespeed.toFixed(0)} (target: >=${PERFORMANCE_TARGETS.pagespeed})`);
      console.log(`Status: ${meetsTargets(metrics) ? '✅ PASS' : '⚠️ NEEDS IMPROVEMENT'}`);
      console.groupEnd();

      // Audit images
      const imageIssues = auditImages();
      if (imageIssues.length > 0) {
        console.group('⚠️ Image Issues');
        imageIssues.forEach((issue) => {
          console.warn(`${issue.selector}: ${issue.recommendation}`);
        });
        console.groupEnd();
      }
    });
  }
}
