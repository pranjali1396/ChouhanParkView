'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SectionTransitionProps {
  sectionId: string;
  onTransitionComplete?: () => void;
}

// Individual section component with GSAP entrance animations
const SectionTransition = ({ onTransitionComplete }: SectionTransitionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Cinematic entrance animation
    const tl = gsap.timeline({
      onComplete: onTransitionComplete
    });

    // Fade in section content
    tl.from(sectionRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    })
    .from('.section-title', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.3')
    .from('.section-content', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.6');

  }, [onTransitionComplete]);

  return (
    <div ref={sectionRef} className="w-full h-full">
      {/* Content will be injected by parent */}
    </div>
  );
};

export default SectionTransition;




