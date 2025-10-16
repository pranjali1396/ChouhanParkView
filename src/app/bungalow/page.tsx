'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import NavigationMenu from '@/components/NavigationMenu';
import { ChevronLeft, ChevronRight, Download, Phone, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const BungalowCollectionPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('typeA');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  const heroRef = useRef(null);
  const touchStartY = useRef(0);
  const bungalowPageRef = useRef<HTMLDivElement>(null);
  const menuPageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true, margin: "-100px" });

  // GSAP animation setup - run once on mount
  useEffect(() => {
    const bungalowPage = bungalowPageRef.current;
    const menuPage = menuPageRef.current;
    
    if (!bungalowPage || !menuPage) return;

    gsap.set(bungalowPage, { 
      y: '0vh',
      transformOrigin: 'top center'
    });

    gsap.set(menuPage, { 
      y: '0vh'
    });
    
    setIsInitialized(true);
  }, []);

  const handleScrollToMenu = useCallback(() => {
    if (!isInitialized || isTransitioning || !bungalowPageRef.current || !menuPageRef.current) return;
    
    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setShowMenu(true);
        setIsTransitioning(false);
      }
    });

    tl.to(bungalowPageRef.current, {
      y: '-100vh',
      duration: 0.8,
      ease: 'power3.inOut',
      transformOrigin: 'top center'
    });
  }, [isInitialized, isTransitioning]);

  const handleScrollToMain = useCallback(() => {
    if (!isInitialized || isTransitioning || !bungalowPageRef.current || !menuPageRef.current) return;
    
    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setShowMenu(false);
        setIsTransitioning(false);
      }
    });

    tl.to(bungalowPageRef.current, {
      y: '0vh',
      duration: 0.8,
      ease: 'power3.inOut',
      transformOrigin: 'top center'
    });
  }, [isInitialized, isTransitioning]);

  const handleMenuClick = () => {
    handleScrollToMenu();
  };

  const handleScrollClick = () => {
    const nextSection = document.querySelector('.bungalow-types-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Bungalow collection images from the public directory
  const bungalowImages = useMemo(() => [
    '/media/Residential/Parkview Bunglow pictures_/Parkview_bunglow (1).jpg',
    '/media/Residential/Parkview Bunglow pictures_/Parkview_bunglow (2).jpg',
    '/media/Residential/Parkview Bunglow pictures_/Parkview_bunglow (3).jpg',
    '/media/Residential/Parkview Bunglow pictures_/Parkview_bunglow (4).jpg',
    '/media/Residential/Parkview Bunglow pictures_/Parkview_bunglow (5).jpg',
    '/media/Residential/Parkview Bunglow pictures_/Parkview_bunglow (6).jpg',
  ], []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 6); // Only 6 images
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 6) % 6); // Only 6 images
  };

  // Preload images to prevent white flash
  useEffect(() => {
    const preloadImages = () => {
      for (let i = 0; i < 6; i++) {
        const img = new Image();
        img.src = bungalowImages[i];
        img.onerror = () => {
          console.log(`Failed to load image: ${bungalowImages[i]}`);
        };
      }
    };
    preloadImages();
  }, [bungalowImages]);

  // Auto-rotate hero carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 6);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);


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
        const bungalowPage = bungalowPageRef.current;
        if (!bungalowPage) return;
        
        const scrollTop = bungalowPage.scrollTop;
        const documentHeight = bungalowPage.scrollHeight;
        const windowHeight = bungalowPage.clientHeight;
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
          const bungalowPage = bungalowPageRef.current;
          if (!bungalowPage) return;
          
          const scrollTop = bungalowPage.scrollTop;
          const documentHeight = bungalowPage.scrollHeight;
          const windowHeight = bungalowPage.clientHeight;
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
        <NavigationMenu onClose={handleScrollToMain} />
      </div>

      {/* Bungalow Page */}
      <div 
        ref={bungalowPageRef}
        className="fixed inset-0 overflow-y-auto bg-white"
        style={{ zIndex: 20 }}
      >
    <div className="min-h-screen bg-white text-black relative">
      {/* Navigation */}
      <Navigation onMenuClick={handleMenuClick} />

          {/* Content that flows normally */}
          <div className="bg-white">

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-white text-black pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Image */}
          <div 
            className="hidden md:block w-full bg-cover bg-center bg-white"
            style={{ 
              backgroundImage: `url('/media/Residential/Parkview Bunglow pictures_/hero image bunglow.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              height: '100vh',
              marginTop: '40px'
            }}
          ></div>
          {/* Mobile Image */}
          <div 
            className="block md:hidden w-full bg-center bg-white"
            style={{ 
              backgroundImage: `url('/media/Residential/Parkview Bunglow pictures_/hero image mob.jpg')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              height: '100vh'
            }}
          ></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
        >
          <button 
            onClick={handleScrollClick}
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <div className="w-6 h-6 border-b-4 border-r-4 border-white scroll-indicator group-hover:animate-pulse"></div>
          </button>
        </motion.div>
      </section>

      {/* Bungalow Types Section */}
      <section className="bungalow-types-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Gotham, sans-serif' }}>
              Bungalow Types
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Choose from our exclusive collection of bungalows, each designed to offer 
              the perfect blend of luxury, comfort, and privacy.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('typeA')}
                className={`px-8 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'typeA'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Type A Bungalow
              </button>
              <button
                onClick={() => setActiveTab('typeB')}
                className={`px-8 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'typeB'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                Type B Bungalow
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {activeTab === 'typeA' ? (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Gotham, sans-serif' }}>
                      Type A Bungalow
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Spacious 5-bedroom bungalow featuring an open-concept living area, 
                      premium finishes, and a private garden. Perfect for families seeking 
                      luxury and comfort with modern amenities.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">5 Bedrooms with en-suite bathrooms</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">Open-concept living and dining area</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">Private garden and outdoor space</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">Premium marble and hardwood finishes</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">Modern amenities: Gym, Parking, Lift, Jacuzzi, Home Theater</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">Built-up Area: 3,291.99 sqft</span>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="/media/Residential/Parkview Residential layout/A Type Bunglow.pdf"
                        download="Type A Bungalow Layout.pdf"
                        className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Floor Plan
                      </a>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div 
                      className="h-96 bg-cover bg-center rounded-lg"
                      style={{ 
                        backgroundImage: `url('/media/Residential/Parkview Bunglow pictures_/Parkview_bunglow (1).png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    ></div>
                  </motion.div>
                </div>
                
                {/* Floor Plans & Layouts Heading */}
                <div className="mt-16 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-600" style={{ fontFamily: 'Gotham, sans-serif' }}>
                      Floor Plans & Layouts
                    </h2>
                  </motion.div>
                </div>
                
                {/* Floor Plan Section for Type A */}
                <div className="mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-pink-50 border-4 border-amber-600 rounded-lg p-6 max-w-4xl mx-auto"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-amber-600 mb-2">PLAN TYPE A</h3>
                      <p className="text-lg text-gray-700">5 Bed • BUILD UP AREA 3,291.99 SQ.FT</p>
                    </div>
                    
                    <div className="pb-3">
                      <div 
                        className="h-96 bg-cover bg-center rounded-lg border-4 border-amber-600"
                        style={{ 
                          backgroundImage: `url('/media/Residential/Parkview Residential layout/Type A layout.PNG')`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      ></div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <a
                        href="/media/Residential/Parkview Residential layout/A Type Bunglow.pdf"
                        download="Type A Bungalow Layout.pdf"
                        className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Floor Plan
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1"
                  >
                    <div 
                      className="h-96 bg-cover bg-center rounded-lg"
                      style={{ 
                        backgroundImage: `url('/media/Residential/Parkview Bunglow pictures_/Parkview_bunglow_01.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    ></div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Gotham, sans-serif' }}>
                      Type B Bungalow
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Luxurious 5-bedroom bungalow with a grand living space, 
                      premium kitchen, and expansive outdoor area. Ideal for 
                      large families and entertaining with modern amenities.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">5 Bedrooms with master suite</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">Grand living and dining hall</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">Expansive garden and patio area</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">Premium Italian marble finishes</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">Modern amenities: Gym, Parking, Lift, Jacuzzi, Home Theater</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                        <span className="text-gray-700">Built-up Area: 2,657.16 sqft</span>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="/media/Residential/Parkview Residential layout/B Type Bunglow.pdf"
                        download="Type B Bungalow Layout.pdf"
                        className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Floor Plan
                      </a>
                    </div>
                  </motion.div>
                </div>
                
                {/* Floor Plans & Layouts Heading */}
                <div className="mt-16 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-600" style={{ fontFamily: 'Gotham, sans-serif' }}>
                      Floor Plans & Layouts
                    </h2>
                  </motion.div>
                </div>
                
                {/* Floor Plan Section for Type B */}
                <div className="mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-pink-50 border-4 border-amber-600 rounded-lg p-6 max-w-4xl mx-auto"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-amber-600 mb-2">PLAN TYPE B</h3>
                      <p className="text-lg text-gray-700">5 Bed • BUILD UP AREA 2,657.16 SQ.FT</p>
                    </div>
                    
                    <div className="pb-3">
                      <div 
                        className="h-96 bg-cover bg-center rounded-lg border-4 border-amber-600"
                        style={{ 
                          backgroundImage: `url('/media/Residential/Parkview Residential layout/Type B layout.PNG')`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      ></div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <a
                        href="/media/Residential/Parkview Residential layout/B Type Bunglow.pdf"
                        download="Type B Bungalow Layout.pdf"
                        className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Floor Plan
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>


      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Gotham, sans-serif' }}>
              The View
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Floor-to-ceiling windows and spacious outdoor areas frame captivating, 
              panoramic views in every direction.
            </p>
          </motion.div>

          {/* Image Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="h-96 rounded-lg overflow-hidden relative">
              {bungalowImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    backgroundImage: `url('${image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Gotham, sans-serif' }}>
              Ready to Make It Yours?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
              Contact our sales team to schedule a private viewing or learn more about 
              our exclusive bungalow collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:sales@chouhanparkview.com"
                className="inline-flex items-center border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BungalowCollectionPage;
