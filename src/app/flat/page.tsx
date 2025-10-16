'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import NavigationMenu from '@/components/NavigationMenu';
import { ChevronLeft, ChevronRight, Download, Phone, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const FlatCollectionPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const touchStartY = useRef(0);
  const isInView = useInView(heroRef, { once: true, margin: "-100px" });

  const handleMenuClick = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleScrollClick = () => {
    // Scroll to the next section (Kitchens Section)
    const nextSection = document.querySelector('.kitchens-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Flat collection images from the public directory
  const flatImages = [
    '/media/Residential/Flat pictures/FlatPictures (0).jpg',
    '/media/Residential/Flat pictures/FlatPictures (1).jpg',
    '/media/Residential/Flat pictures/FlatPictures (2).jpg',
    '/media/Residential/Flat pictures/FlatPictures (3).jpg',
    '/media/Residential/Flat pictures/FlatPictures (4).jpg',
    '/media/Residential/Flat pictures/FlatPictures (5).jpg',
    '/media/Residential/Flat pictures/FlatPictures (6).jpg',
    '/media/Residential/Flat pictures/FlatPictures (7).jpg',
    '/media/Residential/Flat pictures/FlatPictures (8).jpg',
    '/media/Residential/Flat pictures/FlatPictures (9).jpg',
    '/media/Residential/Flat pictures/FlatPictures (10).jpg',
  ];

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
        img.src = flatImages[i];
      }
    };
    preloadImages();
  }, []);

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
      const currentTime = Date.now();
      const timeDiff = currentTime - lastScrollTime;

      accumulatedDelta += e.deltaY;

      if (timeDiff > 200) {
        accumulatedDelta = e.deltaY;
      }

      lastScrollTime = currentTime;

      // Check if user is at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (accumulatedDelta > scrollThreshold && !showMenu && isAtBottom) {
        e.preventDefault();
        accumulatedDelta = 0;
        setShowMenu(true);
      } else if (accumulatedDelta < -scrollThreshold && showMenu) {
        e.preventDefault();
        accumulatedDelta = 0;
        setShowMenu(false);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchDelta = touchStartY.current - touchEndY;
      
      // Check if user is at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      
      if (Math.abs(touchDelta) > 50) {
        if (touchDelta > 0 && !showMenu && isAtBottom) {
          setShowMenu(true);
        } else if (touchDelta < 0 && showMenu) {
          setShowMenu(false);
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
  }, [showMenu]);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Navigation */}
      <Navigation onMenuClick={handleMenuClick} />

      {/* Menu Overlay */}
      {showMenu && (
        <div className="fixed inset-0 z-50">
          <NavigationMenu onClose={handleCloseMenu} />
        </div>
      )}

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="h-screen relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Golden Geometric Overlay */}
        <div className="absolute inset-0 opacity-30">
          {/* Large geometric shapes overlay */}
        <div className="absolute inset-0">
            {/* Top left triangle */}
            <div className="absolute top-0 left-0 w-0 h-0 border-l-[200px] border-l-transparent border-b-[150px] border-b-amber-400/40"></div>
            {/* Top right diamond */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/30 transform rotate-45 translate-x-16 -translate-y-16"></div>
            {/* Bottom left diamond */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-600/35 transform rotate-12 -translate-x-12 translate-y-12"></div>
            {/* Bottom right triangle */}
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[180px] border-r-transparent border-t-[120px] border-t-amber-500/40"></div>
            {/* Center diamond */}
            <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-amber-400/25 transform rotate-45 -translate-x-10 -translate-y-10"></div>
            {/* Additional geometric elements */}
            <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-amber-500/20 transform rotate-45"></div>
            <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-amber-600/25 transform rotate-12"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center text-center px-8 h-full">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-white" style={{ fontFamily: 'Gotham, sans-serif' }}>
              <div className="text-xl md:text-2xl font-light mb-2">the</div>
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none">FLAT</div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">COLLECTION</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Cursor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10"
        >
          <button 
            onClick={handleScrollClick}
            className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <div className="w-6 h-6 border-b-4 border-r-4 border-white scroll-indicator group-hover:animate-pulse"></div>
          </button>
        </motion.div>
      </section>

      {/* Kitchens Section */}
      <section className="kitchens-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Gotham, sans-serif' }}>
                Kitchens Made for Modern Living
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Spacious kitchens boast expertly designed interiors featuring premium appliances, 
                quartzite stone countertops, refined cabinetry and floor-to-ceiling windows 
                illuminating the nearby cityscape and natural light.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Premium stainless steel appliances</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Quartzite stone countertops</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Soft-close cabinetry</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Floor-to-ceiling windows</span>
                </div>
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
                style={{ backgroundImage: `url('${flatImages[2]}')` }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bathrooms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                style={{ backgroundImage: `url('${flatImages[6]}')` }}
              ></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Gotham, sans-serif' }}>
                Bedroom & Living Areas
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Experience comfort and luxury in thoughtfully designed bedrooms and living spaces. 
                Each area features premium finishes, ample natural light, and modern amenities 
                for contemporary living.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Spacious master bedrooms with walk-in closets</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Premium engineered hardwood flooring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Private balconies with city views</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Modern lighting and smart home features</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outdoor Living Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Gotham, sans-serif' }}>
                Modern Living Spaces
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Experience contemporary comfort with spacious living areas featuring 
                floor-to-ceiling windows, premium flooring, and modern finishes. 
                Each flat is designed for optimal natural light and city views.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Floor-to-ceiling windows</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Premium engineered flooring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Modern lighting fixtures</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Spacious open-concept layouts</span>
                </div>
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
                style={{ backgroundImage: `url('${flatImages[0]}')` }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
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
              Floor Plans & Layouts
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our comprehensive collection of layouts and detailed floor plans, 
              each designed for modern living with optimal functionality.
            </p>
          </motion.div>


          {/* Detailed Floor Plans Section */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-amber-600 text-center" style={{ fontFamily: 'Gotham, sans-serif' }}>
              Detailed Floor Plans
            </h3>
            
            <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
              {/* Flat Layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-pink-50 border-4 border-amber-600 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6 pb-4">
                  <div className="text-gray-400 text-sm font-light mb-1" style={{ fontFamily: 'sans-serif' }}>PLAN FLAT</div>
                  <div className="text-2xl font-bold text-black" style={{ fontFamily: 'sans-serif' }}>3 Bed</div>
                </div>

                {/* Floor Plan Image Section */}
                <div className="px-6 pb-3">
                  <div 
                    className="w-full h-96 bg-cover bg-center bg-white border-4 border-amber-600"
                    style={{ 
                      backgroundImage: 'url("/media/Residential/Parkview Residential layout/flat layout.PNG")',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                ></div>
            </div>
                
                {/* Golden Separator Line */}
                <div className="h-0.5 bg-amber-600 mx-6"></div>

                {/* Area Details Section */}
                <div className="p-6">
                  <div className="text-center mb-3">
                    <div className="text-lg font-bold text-black" style={{ fontFamily: 'sans-serif' }}>BUILD UP AREA 1,099.97 sqft</div>
            </div>
          </div>

                {/* Golden Separator Line */}
                <div className="h-0.5 bg-amber-600 mx-6"></div>

                {/* Action Buttons */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="/media/Residential/Parkview Residential layout/Park View Flat (Final Drawing).pdf" 
                      download
                      className="bg-amber-600 text-white py-3 px-4 text-sm font-medium hover:bg-amber-700 transition-colors text-center" 
                      style={{ fontFamily: 'sans-serif' }}
                    >
                      DOWNLOAD PDF
                    </a>
                    <button className="bg-white border border-gray-300 text-black py-3 px-4 text-sm font-medium hover:bg-gray-50 transition-colors" style={{ fontFamily: 'sans-serif' }}>
                      CONTACT US
                    </button>
                  </div>
                    </div>
              </motion.div>

              {/* Penthouse Layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-pink-50 border-4 border-amber-600 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6 pb-4">
                  <div className="text-gray-400 text-sm font-light mb-1" style={{ fontFamily: 'sans-serif' }}>PLAN PENTHOUSE</div>
                  <div className="text-2xl font-bold text-black" style={{ fontFamily: 'sans-serif' }}>3 Bed</div>
                    </div>
                  
                {/* Floor Plan Image Section */}
                <div className="px-6 pb-3">
                  <div 
                    className="w-full h-96 bg-cover bg-center bg-white border-4 border-amber-600"
                    style={{ 
                      backgroundImage: 'url("/media/Residential/Parkview Residential layout/penthouse layout.PNG")',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                ></div>
                  </div>
                  
                {/* Golden Separator Line */}
                <div className="h-0.5 bg-amber-600 mx-6"></div>

                {/* Area Details Section */}
                <div className="p-6">
                  <div className="text-center mb-3">
                    <div className="text-lg font-bold text-black" style={{ fontFamily: 'sans-serif' }}>BUILD UP AREA 1,937.08 SQ.FT</div>
                    </div>
                  </div>

                {/* Golden Separator Line */}
                <div className="h-0.5 bg-amber-600 mx-6"></div>

                {/* Action Buttons */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="/media/Residential/Parkview Residential layout/Park View PH (Final Drawing).pdf" 
                      download
                      className="bg-amber-600 text-white py-3 px-4 text-sm font-medium hover:bg-amber-700 transition-colors text-center" 
                      style={{ fontFamily: 'sans-serif' }}
                    >
                      DOWNLOAD PDF
                    </a>
                    <button className="bg-white border border-gray-300 text-black py-3 px-4 text-sm font-medium hover:bg-gray-50 transition-colors" style={{ fontFamily: 'sans-serif' }}>
                      CONTACT US
                    </button>
                  </div>
                </div>
              </motion.div>
          </div>
          </div>

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
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Floor-to-ceiling windows and modern living areas frame captivating, 
              panoramic views in every direction.
            </p>
          </motion.div>

          {/* Image Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div 
              className="h-96 bg-cover bg-center rounded-lg transition-all duration-1000 ease-in-out"
              style={{ 
                backgroundImage: `url('${flatImages[currentImageIndex]}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Gotham, sans-serif' }}>
              Ready to Make It Home?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Flat collection is available for viewing. Contact our sales team for a private tour 
              and discover your perfect home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:9109104005"
                className="flex items-center bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                9109104005
              </a>
              <a 
                href="mailto:chouhanhousing@gmail.com"
                className="flex items-center bg-gray-300 text-gray-800 px-8 py-4 rounded-full hover:bg-gray-400 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                chouhanhousing@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default FlatCollectionPage;

