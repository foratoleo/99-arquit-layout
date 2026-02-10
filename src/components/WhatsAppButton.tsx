'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * WhatsAppButton - Floating WhatsApp CTA with GSAP animations
 *
 * Primary conversion element for RE Arquitetura & Design.
 * Uses gentle bobbing animation to draw attention without being intrusive.
 */
export default function WhatsAppButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    // Initial entrance animation - scale up with elastic ease
    gsap.fromTo(
      buttonRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        delay: 1,
        ease: 'elastic.out(1, 0.5)',
      }
    );

    // Continuous bobbing animation - gentle y-axis movement
    gsap.to(buttonRef.current, {
      y: '-=4',
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.5,
    });

    // Hover scale animation
    const handleMouseEnter = () => {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const button = buttonRef.current;
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(button);
    };
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(
      'Olá, vi o site da RE Arquitetura e gostaria de conversar sobre um projeto.'
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-none shadow-lg hover:shadow-xl transition-shadow duration-200"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Entrar em contato via WhatsApp"
    >
      <svg
        width="30"
        height="24"
        viewBox="0 0 30 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M15.0002 0C6.71573 0 0 5.37258 0 12C0 14.4656 0.881471 16.7294 2.37313 18.5806L0.773539 23.0902C0.645531 23.4389 1.02512 23.7587 1.39602 23.6102L6.76597 21.5282C9.15206 22.9615 12.0046 23.8106 15.0002 23.8106C23.2847 23.8106 30.0004 18.438 30.0004 11.8106C30.0004 5.18315 23.2847 0 15.0002 0ZM22.8233 16.4645C22.6838 16.7706 22.3262 17.0145 21.9686 17.1065C21.7275 17.1686 21.4106 17.2181 20.4334 16.7852C19.2365 16.2566 18.4295 15.0597 18.3588 14.9658C18.2881 14.8718 17.7476 14.1606 17.7476 13.4494C17.7476 12.7382 18.1394 12.3897 18.2831 12.2301C18.4268 12.0704 18.5949 12.0295 18.7345 12.0295C18.8741 12.0295 19.0137 12.0295 19.1532 12.0295C19.2928 12.0295 19.5046 12.0295 19.7164 12.5015C19.9282 12.9736 20.4334 13.8926 20.5041 14.0253C20.5747 14.158 20.6101 14.3095 20.5041 14.4786C20.3981 14.6476 20.2921 14.7653 20.1484 14.9485C20.0047 15.1317 19.8472 15.2529 20.0225 15.5625C20.1978 15.8722 20.8233 16.8718 21.7557 17.6693C22.9475 18.6947 23.9325 18.9908 24.2573 19.1235C24.582 19.2562 24.7687 19.2333 24.9569 19.0248C25.1451 18.8163 25.6159 18.2734 25.8394 17.9672C26.0629 17.6611 26.2864 17.7069 26.5757 17.8137C26.8651 17.9204 27.8207 18.4038 28.1442 18.5816C28.4677 18.7594 28.6885 18.8483 28.7657 18.9908C28.8428 19.1334 28.8428 19.7056 28.6017 20.3642C28.3606 21.0228 27.4109 21.6615 26.9529 21.9222C26.495 22.1829 25.7741 22.3775 23.3441 21.4286C21.4574 20.6921 20.2179 19.0425 19.7352 18.3376C19.2525 17.6327 18.9042 16.7706 18.9042 16.4645Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
