'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/portfolio-data';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  allProjects: Project[];
}

export default function FullscreenModal({ isOpen, onClose, project, allProjects }: FullscreenModalProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextProject = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentProjectIndex((prev) => (prev + 1) % allProjects.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning, allProjects.length]);

  const goToPrevProject = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentProjectIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning, allProjects.length]);

  const { swipeRef } = useSwipeGesture({
    onSwipeLeft: goToNextProject,
    onSwipeRight: goToPrevProject,
    threshold: 50,
  });

  // Update current index when project changes from parent
  useEffect(() => {
    if (project) {
      const index = allProjects.findIndex((p) => p.id === project.id);
      if (index !== -1) {
        setCurrentProjectIndex(index);
      }
    }
  }, [project, allProjects]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentProject = allProjects[currentProjectIndex];
  if (!currentProject) return null;

  const mainImage = currentProject.images[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Fechar"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Navigation arrows (desktop) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevProject();
        }}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
        aria-label="Projeto anterior"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNextProject();
        }}
        className="absolute right-16 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-20"
        aria-label="Próximo projeto"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Image container with swipe gesture */}
      <div
        ref={swipeRef}
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          width={mainImage.width}
          height={mainImage.height}
          sizes="(max-width: 768px) 100vw, 90vw"
          quality={90}
          priority
          className={`max-h-[90vh] w-auto object-contain transition-opacity duration-400 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}
        />

        {/* Project info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="font-serif text-2xl text-white md:text-3xl">
            {currentProject.title}
          </h3>
          <p className="mt-1 font-serif text-base text-white/90 md:text-lg">
            {currentProject.location} · {currentProject.year}
          </p>
        </div>
      </div>

      {/* Swipe hint for mobile */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 md:hidden">
        <p className="font-serif text-sm">Deslize para navegar</p>
      </div>
    </div>
  );
}
