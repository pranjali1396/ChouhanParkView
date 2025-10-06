'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import NavigationMenu from '@/components/NavigationMenu';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const menuOpenedViaButtonRef = useRef(false);
  const mainPageRef = useRef<HTMLDivElement>(null);
  const menuPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mainPage = mainPageRef.current;
    const menuPage = menuPageRef.current;
    
    if (!mainPage || !menuPage) return;

    gsap.set(mainPage, { 
      y: '0vh',
      transformOrigin: 'top center'
    });

    gsap.set(menuPage, { 
      y: '0vh'
    });

    setIsInitialized(true);

    return () => {
      if (mainPage) {
        gsap.killTweensOf(mainPage);
      }
      if (menuPage) {
        gsap.killTweensOf(menuPage);
      }
    };
  }, []);

  const handleScrollToMenu = useCallback((openedViaButton = false) => {
    if (!isInitialized || isTransitioning || !mainPageRef.current || !menuPageRef.current) return;
    
    setIsTransitioning(true);
    menuOpenedViaButtonRef.current = openedViaButton;

    const tl = gsap.timeline({
      onComplete: () => {
        setShowMenu(true);
        setIsTransitioning(false);
      }
    });

    tl.to(mainPageRef.current, {
      y: '-100vh',
      duration: 0.8,
      ease: 'power3.inOut',
      transformOrigin: 'top center'
    });
  }, [isInitialized, isTransitioning]);

  const handleScrollToMain = useCallback(() => {
    if (!isInitialized || isTransitioning || !mainPageRef.current || !menuPageRef.current) return;
    
    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setShowMenu(false);
        setIsTransitioning(false);
        menuOpenedViaButtonRef.current = false;
      }
    });

    tl.to(mainPageRef.current, {
      y: '0vh',
      duration: 0.8,
      ease: 'power3.inOut',
      transformOrigin: 'top center'
    });
  }, [isInitialized, isTransitioning]);

  useEffect(() => {
    let lastScrollTime = 0;
    const scrollThreshold = 50;
    let accumulatedDelta = 0;

    const handleWheel = (e: WheelEvent) => {
      if (!isInitialized || isTransitioning) {
        e.preventDefault();
        return;
      }

      const currentTime = Date.now();
      const timeDiff = currentTime - lastScrollTime;

      accumulatedDelta += e.deltaY;

      if (timeDiff > 200) {
        accumulatedDelta = e.deltaY;
      }

      lastScrollTime = currentTime;

      if (accumulatedDelta > scrollThreshold && !showMenu) {
        e.preventDefault();
        accumulatedDelta = 0;
        handleScrollToMenu(false); // false = opened via scroll, not button
      } else if (accumulatedDelta < -scrollThreshold && showMenu && !menuOpenedViaButtonRef.current) {
        e.preventDefault();
        accumulatedDelta = 0;
        handleScrollToMain();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [showMenu, isTransitioning, isInitialized, handleScrollToMenu, handleScrollToMain]);

  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isInitialized || isTransitioning) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchDelta = touchStartY - touchEndY;
      
      if (Math.abs(touchDelta) > 50) {
        if (touchDelta > 0 && !showMenu) {
          handleScrollToMenu(false); // false = opened via touch, not button
        } else if (touchDelta < 0 && showMenu && !menuOpenedViaButtonRef.current) {
          handleScrollToMain();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [showMenu, isTransitioning, isInitialized, handleScrollToMenu, handleScrollToMain]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Menu Page */}
      <div 
        ref={menuPageRef}
        className="fixed inset-0"
        style={{ zIndex: 10 }}
      >
        <NavigationMenu onClose={handleScrollToMain} />
      </div>

      {/* Main Page */}
      <div 
        ref={mainPageRef}
        className="fixed inset-0 overflow-hidden"
        style={{ zIndex: 20 }}
      >
        <main className="h-screen">
          <Navigation onMenuClick={() => handleScrollToMenu(true)} />
          <div className="pt-16 h-full">
            <HeroSection />
          </div>
          <ChatWidget />
        </main>
        </div>

      {/* Removed scroll down button - menu can only be opened via MENU button */}
    </div>
  );
}
