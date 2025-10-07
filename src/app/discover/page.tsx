'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Navigation from '@/components/Navigation';
import NavigationMenu from '@/components/NavigationMenu';
import VisionPage from './vision/page';
import LocationPage from './location/page';
import TransitPage from './transit/page';
import AmenitiesPage from './amenities/page';
import { 
  MapPin, 
  TreePine, 
  Car, 
  ShoppingBag, 
  Users,
  Train,
  Bike,
  Coffee,
  Briefcase,
  Dumbbell,
  GraduationCap
} from 'lucide-react';

const DiscoverPage = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('VISION'); // VISION, LOCATION, TRANSIT, AMENITIES
  const [currentSection, setCurrentSection] = useState('hero'); // hero, content, menu
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const menuOpenedViaButtonRef = useRef(false);
  const mainPageRef = useRef<HTMLDivElement>(null);
  const menuPageRef = useRef<HTMLDivElement>(null);

  const hotspots = [
    {
      id: 1,
      title: "Metrotown Skytrain Station",
      description: "Integrated at the heart of the community, seamlessly connecting you to the rest of the Lower Mainland",
      icon: Train,
      position: { x: 45, y: 30 }
    },
    {
      id: 2,
      title: "Unrivaled Amenities",
      description: "Over 50,000 sq ft. of unparalleled private indoor and outdoor spaces",
      icon: Dumbbell,
      position: { x: 25, y: 60 }
    },
    {
      id: 3,
      title: "Vibrant Urban Hub",
      description: "An impressive mix of retail shops, restaurants, and services right outside your door",
      icon: ShoppingBag,
      position: { x: 70, y: 45 }
    },
    {
      id: 4,
      title: "Lively Open-Air Plazas",
      description: "Stroll through inviting plazas and pedestrian mews, interconnected throughout the community",
      icon: Users,
      position: { x: 50, y: 70 }
    },
    {
      id: 5,
      title: "Convenient Connectivity",
      description: "Connect to the extensive bike path network and major highways",
      icon: Bike,
      position: { x: 15, y: 40 }
    },
    {
      id: 6,
      title: "Dynamic Office Spaces",
      description: "A vibrant urban energy will radiate from new creative talent, from small businesses to corporate headquarters",
      icon: Briefcase,
      position: { x: 80, y: 25 }
    }
  ];

  const features = [
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Strategically located in the heart of Bhilai with easy access to major highways and transit."
    },
    {
      icon: TreePine,
      title: "Green Living",
      description: "Surrounded by beautiful parks and green spaces for a healthy, active lifestyle."
    },
    {
      icon: Car,
      title: "Easy Commute",
      description: "Minutes away from downtown Vancouver and major employment centers."
    },
    {
      icon: ShoppingBag,
      title: "Shopping & Dining",
      description: "World-class shopping, dining, and entertainment options right at your doorstep."
    },
    {
      icon: GraduationCap,
      title: "Top Schools",
      description: "Access to excellent schools and educational institutions in the area."
    },
    {
      icon: Coffee,
      title: "Urban Lifestyle",
      description: "Experience the perfect blend of urban convenience and natural beauty."
    }
  ];

  // Initialize GSAP animations after component mounts
  useEffect(() => {
    const initializePages = () => {
      const pages = [
        { name: 'mainPage', ref: mainPageRef.current },
        { name: 'menuPage', ref: menuPageRef.current }
      ];
      
      console.log('Checking page refs:', pages.map(p => ({ name: p.name, exists: !!p.ref })));
      
      const missingPages = pages.filter(page => !page.ref);
      if (missingPages.length > 0) {
        console.log('Missing page refs:', missingPages.map(p => p.name));
        return false;
      }

      pages.forEach(page => {
        gsap.set(page.ref, { 
      y: '0vh',
      transformOrigin: 'top center'
    });
    });

      console.log('GSAP initialized, all pages ready');
    setIsInitialized(true);
      return true;
    };

    // Wait for the next tick to ensure DOM is ready
    const timer = setTimeout(() => {
      if (!initializePages()) {
        // If still not ready, try again after a longer delay
        setTimeout(() => {
          initializePages();
        }, 1000);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleScrollToContent = useCallback(() => {
    console.log('handleScrollToContent called', { 
      isTransitioning, 
      mainPageRef: !!mainPageRef.current,
      currentSection 
    });
    if (isTransitioning) {
      console.log('Blocked - already transitioning');
      return;
    }
    
    setIsTransitioning(true);
    console.log('Starting scroll to content animation');

    const tl = gsap.timeline({
      onComplete: () => {
        console.log('Scroll to content animation complete');
        setCurrentSection('content');
        setIsTransitioning(false);
        if (!isInitialized) {
          setIsInitialized(true);
        }
      }
    });

    if (mainPageRef.current) {
      console.log('Animating main page to -100vh');
      tl.to(mainPageRef.current, {
        y: '-100vh',
        duration: 0.8,
        ease: 'power3.inOut',
        transformOrigin: 'top center'
      });
    } else {
      console.log('No main page ref found!');
      setIsTransitioning(false);
    }
  }, [isTransitioning, isInitialized, currentSection]);

  const handleScrollToMenu = useCallback((openedViaButton = false) => {
    console.log('handleScrollToMenu called');
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    menuOpenedViaButtonRef.current = openedViaButton;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSection('menu');
        setShowMenu(true);
        setIsTransitioning(false);
      }
    });

    if (mainPageRef.current) {
      tl.to(mainPageRef.current, {
        y: '-200vh',
        duration: 0.6,
        ease: 'power2.inOut',
        transformOrigin: 'top center'
      });
    }
  }, [isTransitioning]);

  const handleScrollToHero = useCallback(() => {
    console.log('handleScrollToHero called');
    if (isTransitioning) return;
    
    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSection('hero');
        setIsTransitioning(false);
      }
    });

    if (mainPageRef.current) {
    tl.to(mainPageRef.current, {
        y: '0vh',
      duration: 0.8,
      ease: 'power3.inOut',
      transformOrigin: 'top center'
    });
    }
  }, [isTransitioning]);

  const handleScrollToMain = useCallback(() => {
    console.log('handleScrollToMain called');
    if (isTransitioning) return;
    
    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSection('content');
        setShowMenu(false);
        setIsTransitioning(false);
        menuOpenedViaButtonRef.current = false;
      }
    });

    if (mainPageRef.current) {
    tl.to(mainPageRef.current, {
        y: '-100vh',
      duration: 0.8,
      ease: 'power3.inOut',
      transformOrigin: 'top center'
    });
    }
  }, [isTransitioning]);

  // Handle scroll events
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollThreshold = 50; // More reasonable threshold for mobile
    let accumulatedDelta = 0;

    const handleWheel = (e: WheelEvent) => {
      console.log('Wheel event:', { 
        isInitialized, 
        isTransitioning, 
        currentSection,
        showMenu, 
        deltaY: e.deltaY,
        accumulatedDelta,
        scrollThreshold 
      });
      
      if (isTransitioning) {
        console.log('Blocked scroll - transitioning');
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

      console.log('Accumulated delta:', accumulatedDelta);

      if (accumulatedDelta > scrollThreshold) {
        e.preventDefault();
        accumulatedDelta = 0;
        console.log('Scrolling down, current section:', currentSection);
        if (currentSection === 'hero') {
          handleScrollToContent();
        } else if (currentSection === 'content') {
          handleScrollToMenu();
        }
      } else if (accumulatedDelta < -scrollThreshold && !menuOpenedViaButtonRef.current) {
        e.preventDefault();
        accumulatedDelta = 0;
        console.log('Scrolling up, current section:', currentSection);
        if (currentSection === 'menu') {
        handleScrollToMain();
        } else if (currentSection === 'content') {
          // Scroll back to hero
          handleScrollToHero();
        }
      }
    };

    // Handle regular scroll events for mobile
    const handleScroll = () => {
      if (isTransitioning || !isInitialized) return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // If user scrolls down significantly, trigger section transition
      if (scrollY > windowHeight * 0.2 && currentSection === 'hero') {
        handleScrollToContent();
      } else if (scrollY < windowHeight * 0.1 && currentSection === 'content') {
        handleScrollToHero();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection, showMenu, isTransitioning, isInitialized, handleScrollToContent, handleScrollToMenu, handleScrollToMain, handleScrollToHero]);

  // Handle touch events
  useEffect(() => {
    let touchStartY = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
      console.log('Touch start:', touchStartY);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isInitialized || isTransitioning) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchDelta = touchStartY - touchEndY;
      const touchDuration = Date.now() - touchStartTime;
      
      console.log('Touch end:', {
        touchStartY,
        touchEndY,
        touchDelta,
        touchDuration,
        currentSection,
        isTransitioning
      });
      
      // More sensitive threshold for mobile
      if (Math.abs(touchDelta) > 30 && touchDuration < 1000) {
        if (touchDelta > 0) {
          console.log('Swipe down detected, current section:', currentSection);
          if (currentSection === 'hero') {
            handleScrollToContent();
          } else if (currentSection === 'content') {
            handleScrollToMenu();
          }
        } else if (touchDelta < 0 && !menuOpenedViaButtonRef.current) {
          console.log('Swipe up detected, current section:', currentSection);
          if (currentSection === 'menu') {
            handleScrollToMain();
          } else if (currentSection === 'content') {
            handleScrollToHero();
          }
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Only prevent default if we're in a transition to avoid conflicts
      if (isTransitioning) {
        e.preventDefault();
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isTransitioning, isInitialized, handleScrollToContent, handleScrollToMenu, handleScrollToMain, handleScrollToHero]);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Menu Page */}
      {showMenu && (
      <div 
        ref={menuPageRef}
        className="fixed inset-0 bg-black"
        style={{ zIndex: 10 }}
      >
        <NavigationMenu onClose={handleScrollToMain} />
      </div>
      )}


      {/* Main Page */}
      <div 
        ref={mainPageRef}
        className="fixed inset-0 overflow-hidden"
        style={{ zIndex: 20, height: '200vh', touchAction: 'pan-y' }}
      >
        <div className="min-h-[200vh] bg-white">
          <Navigation onMenuClick={() => handleScrollToMenu(true)} />
      
          {/* Hero Section with City Skyline Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* City Skyline Background */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            />
            
            {/* Geometric Overlays - Matching the image */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Large Blue Square - Top Left */}
              <div 
                className="absolute"
                style={{
                  top: '10%',
                  left: '5%',
                  width: '35%',
                  height: '40%',
                  background: 'rgba(59, 130, 246, 0.4)',
                  transform: 'rotate(0deg)'
                }}
              />
              
              {/* Large Purple Square - Center */}
              <div 
                className="absolute"
                style={{
                  top: '25%',
                  left: '25%',
                  width: '45%',
                  height: '50%',
                  background: 'rgba(147, 51, 234, 0.5)',
                  transform: 'rotate(0deg)'
                }}
              />

              {/* Blue Triangle - Top Right */}
              <div 
                className="absolute"
                style={{
                  top: '5%',
                  right: '10%',
                  width: '30%',
                  height: '35%',
                  background: 'rgba(59, 130, 246, 0.3)',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transform: 'rotate(0deg)'
                }}
              />

              {/* Purple Triangle - Bottom Right */}
              <div 
                className="absolute"
                style={{
                  bottom: '10%',
                  right: '5%',
                  width: '35%',
                  height: '40%',
                  background: 'rgba(147, 51, 234, 0.4)',
                  clipPath: 'polygon(0 100%, 100% 100%, 50% 0)',
                  transform: 'rotate(0deg)'
                }}
              />
        </div>
        
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        
            {/* DISCOVER Text - Upper Left Quadrant */}
            <div className="absolute top-32 left-16 z-20 text-white">
          <motion.div
                initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
          >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '700', letterSpacing: '0.02em' }}>
              DISCOVER
            </h1>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center text-white cursor-pointer opacity-80 hover:opacity-100"
                onClick={() => {
                  console.log('Scroll indicator clicked');
                  handleScrollToContent();
                }}
              >
                <div className="text-sm font-light mb-2">SCROLL DOWN</div>
                <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
              </motion.div>
        </motion.div>

      </section>

      {/* Tabbed Content Section */}
      <section className="min-h-screen bg-slate-800 flex flex-col relative">
        {/* Header - Show for all tabs */}
        {(
          <div className="w-full bg-gray-700 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
                <div className="flex items-center">
                  <div className="flex flex-col leading-tight">
                    <span className="font-bold text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '16px', letterSpacing: '0.12em' }}>
                      CHOUHAN
                    </span>
                    <span className="font-bold text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '16px', letterSpacing: '0.12em' }}>
                      PARK VIEW
                    </span>
                  </div>
              </div>
              
                {/* Center - Contact Info (Desktop) */}
                <div className="hidden lg:flex items-center space-x-5">
                  <span className="text-white hover:opacity-80 transition-opacity" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '14px', letterSpacing: '0.05em' }}>
                    CHOUHANHOUSING@GMAIL.COM
                  </span>
                  <span className="text-white/40" style={{ fontSize: '14px' }}>|</span>
                  <span className="text-white hover:opacity-80 transition-opacity" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '14px', letterSpacing: '0.05em' }}>
                    9109104005
                  </span>
                </div>
                
                {/* Right Side - Buttons */}
                <div className="flex items-center space-x-4">
                  {/* Desktop - Language and Buttons */}
                  <div className="hidden md:flex items-center space-x-3 text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
                    <span className="font-bold cursor-pointer hover:opacity-80 transition-opacity" style={{ color: '#5dade2', fontSize: '14px', letterSpacing: '0.05em' }}>EN</span>
                    <span className="text-white/40" style={{ fontSize: '14px' }}>|</span>
                    <span className="cursor-pointer hover:opacity-80 transition-opacity" style={{ fontSize: '14px', letterSpacing: '0.05em' }}>हिंदी</span>
                  </div>
                  <button className="hidden md:block px-6 py-2.5 text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#6b46c1', fontFamily: 'Gotham, Arial, sans-serif', fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em' }}>
                    REGISTER
                  </button>
                  <button className="hidden md:block px-6 py-2.5 text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#3d4d5c', fontFamily: 'Gotham, Arial, sans-serif', fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', border: '1px solid rgba(255,255,255,0.2)' }}>
                    MENU
                  </button>

                  {/* Mobile - REGISTER button and hamburger menu */}
                  <div className="md:hidden flex items-center space-x-3">
                    <button className="px-4 py-2 text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#6b46c1', fontFamily: 'Gotham, Arial, sans-serif', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em' }}>
                  REGISTER
                </button>
                    <button className="text-white hover:text-gray-300 focus:outline-none p-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Spacing after header - 40px */}
        <div style={{ height: '40px' }}></div>

        {/* Navigation Tabs */}
        <div className="pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="flex space-x-12">
                {['VISION', 'LOCATION', 'TRANSIT', 'AMENITIES'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-white font-medium text-sm tracking-wider pb-2 relative ${
                      activeTab === tab ? 'border-b-2 border-blue-400' : 'hover:border-b-2 hover:border-blue-400/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            {/* Dark shiny line below tabs - only spans the width of the tabs */}
            <div className="flex justify-center mt-4">
              <div 
                className="relative"
                style={{ width: 'calc(4 * 80px + 3 * 48px)' }}
              >
                {/* Main dark line */}
                <div className="border-b border-gray-600 h-px"></div>
                {/* Shiny highlight on top */}
                <div className="absolute top-0 left-0 right-0 border-b border-white/30 h-px"></div>
                {/* Subtle shadow below */}
                <div className="absolute top-px left-0 right-0 border-b border-black/20 h-px"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {activeTab === 'VISION' && <VisionPage />}
            {activeTab === 'LOCATION' && <LocationPage />}
            {activeTab === 'TRANSIT' && <TransitPage />}
            {activeTab === 'AMENITIES' && <AmenitiesPage />}
          </div>
        </div>

        {/* Chat Widget */}
        <div className="absolute bottom-6 right-6 z-10">
          <button className="w-12 h-12 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Site Map
            </h2>
            <p className="text-gray-600 text-lg">
              Pan to view site map and explore the community
            </p>
          </motion.div>

          {/* Map Container */}
          <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              {/* Map Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                }}
              />
              
              {/* Hotspots on Map */}
              {hotspots.map((hotspot) => {
                const IconComponent = hotspot.icon;
                return (
                  <motion.button
                    key={hotspot.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: hotspot.id * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
                    onMouseEnter={() => setHoveredHotspot(hotspot.id)}
                    onMouseLeave={() => setHoveredHotspot(null)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeHotspot === hotspot.id 
                        ? 'bg-blue-600 text-white scale-125' 
                        : hoveredHotspot === hotspot.id
                        ? 'bg-blue-500 text-white scale-110'
                        : 'bg-white text-blue-600 hover:bg-blue-50'
                    }`}
                    style={{
                      left: `${hotspot.position.x}%`,
                      top: `${hotspot.position.y}%`
                    }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Map Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {hotspots.map((hotspot) => {
              const IconComponent = hotspot.icon;
              return (
                <div key={hotspot.id} className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <IconComponent className="w-2 h-2 text-white" />
                  </div>
                  <span>{hotspot.id}. {hotspot.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Chouhan Park View
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Experience the perfect blend of urban convenience and natural beauty in one of Bhilai&apos;s most sought-after locations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Chouhan Park View</h3>
            <p className="text-gray-400 mb-8">
              The most anticipated masterplanned community in Bhilai
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>Vision</span>
              <span>Location</span>
              <span>Transit</span>
              <span>Amenities</span>
            </div>
          </div>
        </div>
      </footer>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;