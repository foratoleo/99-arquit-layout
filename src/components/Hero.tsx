'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Initial state
    gsap.set(content, { opacity: 0, y: 40 });

    // Fade in + subtle vertical slide on load
    const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

    timeline.to(content, {
      opacity: 1,
      y: 0,
      duration: 1.4,
      delay: 0.2,
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Fullscreen background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Arquitetura de alto padrao - RE Arquitetura & Design"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Centered content - minimal 4 elements */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {/* Logo */}
        <div className="mb-8">
          <h2 className="text-xl font-serif tracking-[0.3em] text-white">
            RE ARQUITETURA
          </h2>
        </div>

        {/* Headline */}
        <h1 className="mb-6 max-w-3xl text-5xl font-serif leading-tight text-white md:text-6xl lg:text-7xl">
          Arquitetura que
          <br />
          transforma sonhos
        </h1>

        {/* Subheadline */}
        <p className="mb-12 max-w-xl text-lg font-serif text-white/90 md:text-xl">
          Projetos residenciais e comerciais de alto padrao
        </p>

        {/* CTA Button */}
        <a
          href="#contato"
          className="inline-block border-2 border-white px-12 py-4 font-serif text-sm tracking-widest text-white transition-all hover:bg-white hover:text-gray-900"
        >
          CONVERSE CONOSCO
        </a>
      </div>
    </div>
  );
}
