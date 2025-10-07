'use client';

import React, { useState, useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import NavigationMenu from '@/components/NavigationMenu';
import VisionPage from './vision/page';
import LocationPage from './location/page';
import TransitPage from './transit/page';
import AmenitiesPage from './amenities/page';

const DiscoverPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('VISION'); // VISION, LOCATION, TRANSIT, AMENITIES
  const [isSticky, setIsSticky] = useState(false);
  
  const navigationRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleScrollClick = () => {
    // Scroll to navigation section
    const navigationSection = document.querySelector('.navigation-section');
    if (navigationSection) {
      navigationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Use Intersection Observer for stable sticky detection
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Make sticky on both mobile and desktop, but only after hero image
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px' // Account for top navigation height (80px for both mobile and desktop)
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const tabs = [
    { id: 'VISION', label: 'Vision' },
    { id: 'LOCATION', label: 'Location' },
    { id: 'TRANSIT', label: 'Transit' },
    { id: 'AMENITIES', label: 'Amenities' }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // Optional: Scroll to content smoothly
    setTimeout(() => {
      const mainHeading = document.querySelector('.main-heading-section');
      if (mainHeading) {
        mainHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Navigation */}
      <Navigation onMenuClick={handleMenuClick} />

      {/* Navigation Menu */}
      {showMenu && (
        <NavigationMenu onClose={handleCloseMenu} />
      )}

      {/* Content that flows normally */}
      <div className="bg-gray-800">

        {/* Hero Section - DISCOVER with background first */}
        <section className="h-screen relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}>
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl" style={{ fontFamily: 'Arial, sans-serif' }}>
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

        {/* Sentinel element for intersection observer */}
        <div ref={sentinelRef} className="h-0 w-full"></div>

        {/* Navigation Section - Becomes fixed when scrolling (desktop only) */}
        <section 
          ref={navigationRef}
          className={`navigation-section bg-gray-800 shadow-lg transition-all duration-300 ${
            isSticky ? 'fixed top-20 left-0 right-0 z-30' : 'relative'
          }`}
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

        {/* Spacer to maintain layout when navigation becomes fixed */}
        {isSticky && <div className="h-20"></div>}

        {/* Main Heading */}
        <div className="main-heading-section text-center py-6 bg-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            <span className="block">MORE</span>
            <span className="block">{activeTab}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white mt-3 max-w-md mx-auto px-2" style={{ fontFamily: 'Arial, sans-serif' }}>
            {activeTab === 'VISION' && "Chouhan Park View is a magnificent location offering homes, shops, dining, and office space within the Bhilai community."}
            {activeTab === 'LOCATION' && "Strategically positioned in the heart of Bhilai, offering unparalleled access to everything the city has to offer."}
            {activeTab === 'TRANSIT' && "Connected to the entire Lower Mainland with multiple transit options right at your doorstep."}
            {activeTab === 'AMENITIES' && "With over 75,000 square feet of life-enriching amenities, it's not hard to"}
          </p>
        </div>

        {/* Tab Content */}
        <div className="max-w-xl mx-auto px-2 sm:px-6 lg:px-8 py-8 bg-gray-800">
          {activeTab === 'VISION' && <VisionPage />}
          {activeTab === 'LOCATION' && <LocationPage />}
          {activeTab === 'TRANSIT' && <TransitPage />}
          {activeTab === 'AMENITIES' && <AmenitiesPage />}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;