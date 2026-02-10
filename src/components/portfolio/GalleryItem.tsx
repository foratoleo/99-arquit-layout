'use client';

import Image from 'next/image';
import { Project } from '@/lib/portfolio-data';

interface GalleryItemProps {
  project: Project;
  onClick: () => void;
}

export default function GalleryItem({ project, onClick }: GalleryItemProps) {
  const mainImage = project.images[0];

  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden bg-sand-100"
      style={{ aspectRatio: '4 / 3' }}
    >
      <Image
        src={mainImage.src}
        alt={mainImage.alt}
        width={mainImage.width}
        height={mainImage.height}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNFNUU0RDEiLz48L3N2Zz4="
        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
        style={{ opacity: 0.9 }}
      />

      {/* Project info overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 transition-opacity duration-300 group-hover:from-black/80">
        <h3 className="font-serif text-xl text-white md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1 font-serif text-sm text-white/90 md:text-base">
          {project.location} · {project.year}
        </p>
      </div>
    </div>
  );
}
