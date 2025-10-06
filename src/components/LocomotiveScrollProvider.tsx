'use client';

import { useEffect, useRef, ReactNode } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface LocomotiveScrollProviderProps {
  children: ReactNode;
  onScrollToMenu?: () => void;
}

const LocomotiveScrollProvider = ({ children, onScrollToMenu }: LocomotiveScrollProviderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize Locomotive Scroll (exact config like Gilmore Place)
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: false, // Disable on mobile to prevent issues
      lerp: 0.1, // Slightly faster response (was too slow at 0.08)
      multiplier: 1.0, // Scroll speed
      class: 'is-inview',
      scrollFromAnywhere: false, // Prevent conflicting scroll events
      touchMultiplier: 1.5,
      reloadOnContextChange: true,
      smartphone: {
        smooth: false, // Disable smooth scroll on mobile
        breakpoint: 0
      },
      tablet: {
        smooth: true,
        breakpoint: 1024
      }
    });

    // Listen for scroll events
    locomotiveScrollRef.current.on('scroll', (args: any) => {
      // Check if scrolled past first section
      if (args.scroll.y > window.innerHeight * 0.5 && onScrollToMenu) {
        onScrollToMenu();
      }
    });

    // Update on window resize
    const handleResize = () => {
      locomotiveScrollRef.current?.update();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      locomotiveScrollRef.current?.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, [onScrollToMenu]);

  // Expose scrollTo method globally
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      (window as any).locomotiveScroll = locomotiveScrollRef.current;
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveScrollProvider;
