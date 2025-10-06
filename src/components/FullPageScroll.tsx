'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Section {
  id: string;
  component: ReactNode;
}

interface FullPageScrollProps {
  sections: Section[];
}

const FullPageScroll = ({ sections }: FullPageScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up smooth scrolling with GSAP
    const ctx = gsap.context(() => {
      // Enable smooth scrolling
      gsap.set(containerRef.current, {
        scrollBehavior: 'smooth'
      });

      // Create scroll-snap effect for each section
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          snap: {
            snapTo: 1,
            duration: { min: 0.5, max: 0.8 },
            ease: 'power1.inOut',
          },
          onEnter: () => {
            // Fade in animation
            gsap.fromTo(
              section.querySelectorAll('.animate-in'),
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
            );
          },
        });
      });

      // Enable smooth wheel scrolling
      ScrollTrigger.normalizeScroll(true);
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [sections]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen overflow-y-scroll scroll-smooth"
      style={{
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        overscrollBehavior: 'none'
      }}
    >
      {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          className="w-full h-screen relative"
          style={{
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always'
          }}
        >
          {section.component}
        </div>
      ))}
    </div>
  );
};

export default FullPageScroll;




