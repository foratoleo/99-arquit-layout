'use client';

import { useState } from 'react';
import GalleryGrid from '@/components/portfolio/GalleryGrid';
import FullscreenModal from '@/components/portfolio/FullscreenModal';
import { projects } from '@/lib/portfolio-data';

export default function PortfolioPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null);
  };

  return (
    <>
      <main className="min-h-screen bg-sand-50">
        {/* Page header */}
        <section className="relative bg-white px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="font-serif text-4xl text-black-400 md:text-5xl lg:text-6xl">
              Portfolio
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-serif text-lg text-greige-600 md:text-xl">
              Projetos que transformam espaços e elevam o cotidiano.
            </p>
            <div className="mx-auto mt-8 h-0.5 w-24 bg-greige-400" />
          </div>
        </section>

        {/* Gallery grid */}
        <section className="px-6 py-16 md:py-24">
          <GalleryGrid onProjectClick={handleProjectClick} />
        </section>
      </main>

      {/* Fullscreen modal */}
      <FullscreenModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        allProjects={projects}
      />
    </>
  );
}
