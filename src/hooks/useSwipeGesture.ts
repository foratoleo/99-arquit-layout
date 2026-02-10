'use client';

import { useRef, useCallback, useEffect } from 'react';

export interface UseSwipeGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
}

export interface UseSwipeGestureReturn {
  swipeRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Custom hook for detecting horizontal swipe gestures on touch devices.
 *
 * @param options - Configuration object with callbacks and threshold
 * @param options.onSwipeLeft - Callback when swipe left is detected (swiping left = content moves left = next)
 * @param options.onSwipeRight - Callback when swipe right is detected (swiping right = content moves right = previous)
 * @param options.threshold - Minimum swipe distance in pixels to trigger gesture (default: 50px)
 *
 * @example
 * ```tsx
 * const swipeRef = useSwipeGesture({
 *   onSwipeLeft: () => nextProject(),
 *   onSwipeRight: () => prevProject()
 * });
 *
 * return <div ref={swipeRef}>Swipeable content</div>
 * ```
 */
export function useSwipeGesture({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
}: UseSwipeGestureOptions = {}): UseSwipeGestureReturn {
  const swipeRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) {
      return;
    }

    const swipeDistance = touchStartX.current - touchEndX.current;

    // Swipe left: touchStart > touchEnd (finger moved left, content should move left = show next)
    if (swipeDistance > threshold) {
      onSwipeLeft?.();
    }

    // Swipe right: touchEnd > touchStart (finger moved right, content should move right = show previous)
    if (swipeDistance < -threshold) {
      onSwipeRight?.();
    }

    // Reset for next gesture
    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [onSwipeLeft, onSwipeRight, threshold]);

  useEffect(() => {
    const element = swipeRef.current;
    if (!element) {
      return;
    }

    // Add touch event listeners
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return { swipeRef };
}
