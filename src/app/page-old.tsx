'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SmoothScroll from '@/components/SmoothScroll';
import ChatWidget from '@/components/ChatWidget';
import NavigationMenu from '@/components/NavigationMenu';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const handleScrollToMenu = () => {
    setShowMenu(true);
  };

  const handleScrollToMain = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    let isTransitioning = false;

    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning) return;
      
      if (e.deltaY > 0 && !showMenu) {
        // Scrolling down from main page - slide main page up to reveal menu
        e.preventDefault();
        isTransitioning = true;
        handleScrollToMenu();
        setTimeout(() => { isTransitioning = false; }, 1000);
      } else if (e.deltaY < 0 && showMenu) {
        // Scrolling up from menu page - slide main page down to hide menu (curtain effect)
        e.preventDefault();
        isTransitioning = true;
        handleScrollToMain();
        setTimeout(() => { isTransitioning = false; }, 1000);
      }
      // Allow normal scrolling within menu when scrolling down on menu page
    };

    // Handle scroll events for keyboard navigation
    const handleScroll = () => {
      if (isTransitioning) return;
      
      const scrollY = window.scrollY;
      
      // When on main page - scroll down to show menu
      if (scrollY > window.innerHeight * 0.7 && !showMenu) {
        isTransitioning = true;
        handleScrollToMenu();
        setTimeout(() => { isTransitioning = false; }, 1000);
      } 
      // When on menu page - scroll up to show main page
      else if (scrollY < 100 && showMenu) {
        isTransitioning = true;
        handleScrollToMain();
        setTimeout(() => { isTransitioning = false; }, 1000);
      }
      // When on menu page - scroll down to stay on menu (like Gilmore Place)
      else if (scrollY > 100 && showMenu) {
        // Keep menu open, just scroll within menu
        return;
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchDelta = touchStartY - touchEndY;
      
      if (Math.abs(touchDelta) > 50) {
        if (touchDelta > 0 && !showMenu) {
          // Swiping up from main page - show menu (curtain opens)
          isTransitioning = true;
          handleScrollToMenu();
          setTimeout(() => { isTransitioning = false; }, 1000);
        } else if (touchDelta < 0 && showMenu) {
          // Swiping down from menu page - show main page (curtain closes)
          isTransitioning = true;
          handleScrollToMain();
          setTimeout(() => { isTransitioning = false; }, 1000);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [showMenu]);

  return (
    <div className="relative">
      {/* Navigation Menu Page - Always positioned underneath */}
      <div 
        className={`fixed inset-0 transition-all duration-800 ease-in-out ${
          showMenu ? 'z-30' : 'z-10'
        }`}
        style={{
          transform: 'translateY(0%)',
          transition: 'z-index 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <NavigationMenu />
      </div>

      {/* Main Page - Acts as a cover that slides up */}
      <div 
        className="fixed inset-0 z-20"
        style={{
          transform: showMenu ? 'translateY(-100%)' : 'translateY(0%)',
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          filter: 'none',
          WebkitBoxShadow: 'none',
          MozBoxShadow: 'none',
          opacity: showMenu ? 0 : 1
        }}
      >
        <main className="min-h-screen" style={{ boxShadow: 'none', filter: 'none' }}>
          <SmoothScroll />
          <Navigation />
          <div className="pt-16">
            <HeroSection />
          </div>
          <ChatWidget />
        </main>
      </div>
    </div>
  );
}