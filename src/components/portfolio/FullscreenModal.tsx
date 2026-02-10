'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/portfolio-data';

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function FullscreenModal({ isOpen, onClose, project }: FullscreenModalProps) {
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

  if (!isOpen || !project) return null;

  const mainImage = project.images[0];

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

      {/* Image container */}
      <div
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
          className="max-h-[90vh] w-auto object-contain"
        />

        {/* Project info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="font-serif text-2xl text-white md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 font-serif text-base text-white/90 md:text-lg">
            {project.location} · {project.year}
          </p>
        </div>
      </div>
    </div>
  );
}
