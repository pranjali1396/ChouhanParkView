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
  const heroRef = useRef<HTMLDivElement>(null);

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

  // Simple scroll-based sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Make navigation sticky when scrolled past 100vh (hero section height)
      const shouldBeSticky = scrollTop >= window.innerHeight - 100;
      
      setIsSticky(shouldBeSticky);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
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
        <section ref={heroRef} className="h-screen relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}>
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

        {/* Navigation Section - Becomes fixed when scrolling (mobile & desktop) */}
        <section 
          ref={navigationRef}
          className={`navigation-section shadow-lg transition-all duration-300 ${
            isSticky 
              ? 'fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm' 
              : 'relative bg-gray-800'
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
        {isSticky && <div className="h-16"></div>}
        

        {/* Main Heading - Only show for tabs that don't have their own headings */}
        {activeTab !== 'VISION' && activeTab !== 'LOCATION' && activeTab !== 'TRANSIT' && activeTab !== 'AMENITIES' && (
          <div className="main-heading-section text-center py-6 bg-gray-800">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Gotham, sans-serif' }}>
              <span className="block">{activeTab}</span>
            </h2>
          </div>
        )}

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-8 bg-gray-800">
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