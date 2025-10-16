'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import Navigation from '@/components/Navigation';
import NavigationMenu from '@/components/NavigationMenu';
import VisionPage from './vision/page';
import LocationPage from './location/page';
import TransitPage from './transit/page';
import AmenitiesPage from './amenities/page';

const DiscoverPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('VISION'); // VISION, LOCATION, TRANSIT, AMENITIES
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const discoverPageRef = useRef<HTMLDivElement>(null);
  const menuPageRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  const handleMenuClick = () => {
    handleScrollToMenu();
  };

  const handleCloseMenu = () => {
    handleScrollToMain();
  };

  // GSAP animation setup - run once on mount
  useEffect(() => {
    const discoverPage = discoverPageRef.current;
    const menuPage = menuPageRef.current;
    
    if (!discoverPage || !menuPage) {
      return;
    }

    gsap.set(discoverPage, { 
      y: '0vh',
      transformOrigin: 'top center'
    });

    gsap.set(menuPage, { 
      y: '0vh'
    });
    
    setIsInitialized(true);
  }, []); // Empty dependency array - run once on mount

  const handleScrollToMenu = useCallback(() => {
    if (!isInitialized || isTransitioning || !discoverPageRef.current || !menuPageRef.current) {
      return;
    }
    
    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setShowMenu(true);
        setIsTransitioning(false);
      }
    });

    tl.to(discoverPageRef.current, {
      y: '-100vh',
      duration: 0.8,
      ease: 'power3.inOut',
      transformOrigin: 'top center'
    });
  }, [isInitialized, isTransitioning]);

  const handleScrollToMain = useCallback(() => {
    if (!isInitialized || isTransitioning || !discoverPageRef.current || !menuPageRef.current) {
      return;
    }
    
    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setShowMenu(false);
        setIsTransitioning(false);
      }
    });

    tl.to(discoverPageRef.current, {
      y: '0vh',
      duration: 0.8,
      ease: 'power3.inOut',
      transformOrigin: 'top center'
    });
  }, [isInitialized, isTransitioning]);

  const handleScrollClick = () => {
    // Scroll to navigation section
    const navigationSection = document.querySelector('.navigation-section');
    if (navigationSection) {
      navigationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };



  const tabs = [
    { id: 'VISION', label: 'Vision' },
    { id: 'LOCATION', label: 'Location' },
    { id: 'TRANSIT', label: 'Transit' },
    { id: 'AMENITIES', label: 'Amenities' }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // Scroll to content smoothly when tab is clicked
    setTimeout(() => {
      const tabContent = document.querySelector('.tab-content-section');
      if (tabContent) {
        tabContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };


  // Wheel and touch event handlers for menu navigation (same as main page)
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

      if (showMenu) {
        // When menu is open, scroll up should return to main page
        if (accumulatedDelta < -scrollThreshold) {
          e.preventDefault();
          accumulatedDelta = 0;
          handleScrollToMain();
        }
      } else {
        // When on main page, check if user is at the bottom
        const discoverPage = discoverPageRef.current;
        if (!discoverPage) return;
        
        const scrollTop = discoverPage.scrollTop;
        const documentHeight = discoverPage.scrollHeight;
        const windowHeight = discoverPage.clientHeight;
        const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
        
        // Only open menu if user is at the bottom (within 10px) and scrolling down
        if (accumulatedDelta > scrollThreshold && distanceFromBottom <= 10) {
          e.preventDefault();
          accumulatedDelta = 0;
          handleScrollToMenu();
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isInitialized || isTransitioning) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchDelta = touchStartY.current - touchEndY;
      
      if (Math.abs(touchDelta) > 50) {
        if (showMenu) {
          // When menu is open, swipe down should return to main page
          if (touchDelta < 0) {
            handleScrollToMain();
          }
        } else {
          // When on main page, check if user is at the bottom
          const discoverPage = discoverPageRef.current;
          if (!discoverPage) return;
          
          const scrollTop = discoverPage.scrollTop;
          const documentHeight = discoverPage.scrollHeight;
          const windowHeight = discoverPage.clientHeight;
          const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
          
          // Only open menu if user is at the bottom (within 10px) and swiping up
          if (touchDelta > 0 && distanceFromBottom <= 10) {
            handleScrollToMenu();
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [showMenu, isTransitioning, isInitialized, handleScrollToMenu, handleScrollToMain]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Menu Page - Always rendered for GSAP animation */}
      <div 
        ref={menuPageRef}
        className="fixed inset-0"
        style={{ 
          zIndex: 10,
          visibility: (showMenu || isTransitioning) ? 'visible' : 'hidden'
        }}
      >
        <NavigationMenu onClose={handleCloseMenu} />
      </div>

      {/* Discover Page */}
      <div 
        ref={discoverPageRef}
        className="fixed inset-0 overflow-y-auto bg-black"
        style={{ zIndex: 20 }}
      >
    <div className="min-h-screen bg-black text-white relative">
      {/* Navigation */}
      <Navigation onMenuClick={handleMenuClick} />

      {/* Content that flows normally */}
      <div className="bg-gray-800">

        {/* Hero Section - DISCOVER with background first */}
        <section ref={heroRef} className="h-screen relative bg-cover bg-center bg-no-repeat pt-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundColor: '#1a1a1a' }}>
          {/* Geometric overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-800/50 to-blue-700/60">
            <div className="absolute inset-0 opacity-30">
              {/* Geometric shapes overlay */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-8 w-20 h-20 bg-blue-500/20 transform rotate-45"></div>
                <div className="absolute top-20 right-12 w-16 h-16 bg-purple-500/20 transform rotate-12"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-600/20 transform -rotate-12"></div>
                <div className="absolute bottom-10 right-1/3 w-18 h-18 bg-purple-600/20 transform rotate-45"></div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* DISCOVER Text */}
            <div className="pt-32 px-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl" style={{ fontFamily: 'Gotham, sans-serif' }}>
                DISCOVER
              </h1>
            </div>

            {/* Bottom elements */}
            <div className="flex justify-center items-end pb-16 px-8">
              {/* Scroll indicator */}
              <button 
                onClick={handleScrollClick}
                className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer group"
              >
                <div className="w-6 h-6 border-b-4 border-r-4 border-white scroll-indicator group-hover:animate-pulse"></div>
              </button>
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section 
          ref={navigationRef}
          className="navigation-section sticky top-0 z-30 bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-2 sm:space-x-16 lg:space-x-24 py-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative font-medium transition-all duration-300 pb-2 px-2 py-2 ${
                    activeTab === tab.id
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-white hover:text-gray-300 hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>


        {/* Main Heading - Only show for tabs that don't have their own headings */}
        {activeTab !== 'VISION' && activeTab !== 'LOCATION' && activeTab !== 'TRANSIT' && activeTab !== 'AMENITIES' && (
          <div className="main-heading-section text-center py-6 bg-gray-800">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Gotham, sans-serif' }}>
              <span className="block">{activeTab}</span>
            </h2>
          </div>
        )}

        {/* Tab Content */}
        <div className="tab-content-section max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-8 bg-gray-800">
          {activeTab === 'VISION' && <VisionPage />}
          {activeTab === 'LOCATION' && <LocationPage />}
          {activeTab === 'TRANSIT' && <TransitPage />}
          {activeTab === 'AMENITIES' && <AmenitiesPage />}
        </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;