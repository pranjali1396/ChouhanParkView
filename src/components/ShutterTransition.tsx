'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ShutterTransitionProps {
  isActive: boolean;
  onComplete?: () => void;
}

const ShutterTransition = ({ isActive, onComplete }: ShutterTransitionProps) => {
  const overlaysRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (isActive) {
      // Shutter opens - overlays slide up to reveal content
      gsap.to(overlaysRef.current, {
        y: '-100%',
        duration: 1.2,
        ease: 'power3.inOut',
        stagger: 0.08, // Staggered animation for each panel
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });
    } else {
      // Reset shutters
      gsap.set(overlaysRef.current, { y: '0%' });
    }
  }, [isActive, onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ 
        display: isActive ? 'block' : 'none'
      }}
    >
      {/* Create 5 vertical panels for shutter effect */}
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          ref={(el) => {
            overlaysRef.current[index] = el;
          }}
          className="absolute top-0 h-full bg-black"
          style={{
            left: `${index * 20}%`,
            width: '20%',
            transform: 'translateY(0%)'
          }}
        />
      ))}
    </div>
  );
};

export default ShutterTransition;






