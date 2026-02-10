'use client';

import { projects } from '@/lib/portfolio-data';
import GalleryItem from './GalleryItem';

interface GalleryGridProps {
  onProjectClick: (projectId: string) => void;
}

export default function GalleryGrid({ onProjectClick }: GalleryGridProps) {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <GalleryItem
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project.id)}
            // First row (2 images on desktop) get priority loading
            priority={index < 2}
          />
        ))}
      </div>
    </div>
  );
}
