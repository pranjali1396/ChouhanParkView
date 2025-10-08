'use client';

import { motion } from 'framer-motion';
import { Building2, Coffee, Dumbbell, Briefcase, ShoppingBag } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const AmenitiesPage = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

  const scrollLeft = () => {
    if (galleryRef.current) {
      const newPosition = Math.max(0, currentPosition - 320);
      setCurrentPosition(newPosition);
      galleryRef.current.style.transform = `translateX(-${newPosition}px)`;
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      const maxScroll = (28 * 320) - (galleryRef.current.parentElement?.clientWidth || 0);
      const newPosition = Math.min(maxScroll, currentPosition + 320);
      setCurrentPosition(newPosition);
      galleryRef.current.style.transform = `translateX(-${newPosition}px)`;
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentPosition(prev => {
          const maxScroll = (28 * 320) - 800; // Approximate container width
          return prev >= maxScroll ? 0 : prev + 1; // Reset to 0 when reaching end
        });
      }, 20); // Move 1px every 20ms for faster movement

      return () => clearInterval(interval);
    }
  }, [isPaused]);
  return (
    <div className="w-full">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 pt-8 sm:pt-10 md:pt-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Gotham, sans-serif' }}>
            <span className="block">WORLD-CLASS</span>
            <span className="block">AMENITIES</span>
            <span className="block">& LIFESTYLE</span>
          </h1>
        </motion.div>

        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6 sm:mb-8" style={{ fontFamily: 'Gotham, sans-serif' }}>
            Premium Living and Commercial Spaces in Bhilai
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'Gotham, sans-serif' }}>
            Chouhan Park View, a prestigious project by Chouhan Group, is located on Junwani Road, Bhilai, offering a blend of luxurious bungalows, premium 3 BHK flats, and modern commercial complexes. Designed to meet the needs of both residential and commercial buyers, Park View focuses on providing unmatched quality, comfort, and convenience. The residential spaces reflect a modern lifestyle with high-end amenities, while the commercial complex ensures a thriving business environment. Whether you&apos;re looking for a dream home or a prime business location, Chouhan Park View is the ultimate destination for premium living and commercial success in Bhilai.
          </p>
        </motion.div>

        {/* Image Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-10" style={{ fontFamily: 'Gotham, sans-serif' }}>
            INTERIOR GALLERY
          </h2>
          
          {/* Horizontal Sliding Gallery */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-800 p-4 shadow-2xl">
            <div className="h-64 relative overflow-hidden rounded-xl">
              <div 
                ref={galleryRef}
                className="flex gap-4 transition-transform duration-300 ease-in-out"
                onMouseEnter={togglePause}
                onMouseLeave={togglePause}
                style={{
                  width: `${28 * 320 + (27 * 16)}px`, // 28 images * 320px + 27 gaps * 16px
                  transform: `translateX(-${currentPosition}px)`
                }}
              >
                {/* All Flat Images (1, 2, 3, 4, 5, 6, 7, 8, 9) */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <div key={`flat-${num}`} className="flex-shrink-0 w-80 h-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={`/media/Residential/Flat pictures/FlatPictures (${num}).jpg`}
                      alt={`Flat Interior ${num}`}
                      width={320}
                      height={256}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.log(`Failed to load: /media/Residential/Flat pictures/FlatPictures (${num}).jpg`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
                {/* All Bungalow Images (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19) */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((num) => (
                  <div key={`bungalow-${num}`} className="flex-shrink-0 w-80 h-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={`/media/Residential/Parkview Bunglow pictures_/Parkview_bunglow (${num}).jpg`}
                      alt={`Bungalow Interior ${num}`}
                      width={320}
                      height={256}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.log(`Failed to load: /media/Residential/Parkview Bunglow pictures_/Parkview_bunglow (${num}).jpg`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop - All Flat Images */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <div key={`dup-flat-${num}`} className="flex-shrink-0 w-80 h-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={`/media/Residential/Flat pictures/FlatPictures (${num}).jpg`}
                      alt={`Flat Interior ${num}`}
                      width={320}
                      height={256}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.log(`Failed to load: /media/Residential/Flat pictures/FlatPictures (${num}).jpg`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop - All Bungalow Images */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((num) => (
                  <div key={`dup-bungalow-${num}`} className="flex-shrink-0 w-80 h-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={`/media/Residential/Parkview Bunglow pictures_/Parkview_bunglow (${num}).jpg`}
                      alt={`Bungalow Interior ${num}`}
                      width={320}
                      height={256}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.log(`Failed to load: /media/Residential/Parkview Bunglow pictures_/Parkview_bunglow (${num}).jpg`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={scrollLeft}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 rounded-full p-3 transition-all duration-300 z-10 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={scrollRight}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 rounded-full p-3 transition-all duration-300 z-10 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {[
            {
              icon: Building2,
              title: "Banks",
              description: "Convenient banking facilities and financial services right at your doorstep for all your banking needs."
            },
            {
              icon: Coffee,
              title: "Cafes",
              description: "Premium cafes and coffee shops offering delicious beverages and light meals in a comfortable setting."
            },
            {
              icon: Dumbbell,
              title: "Gym",
              description: "State-of-the-art fitness center with modern equipment and professional trainers for your health and wellness."
            },
            {
              icon: Briefcase,
              title: "Offices",
              description: "Modern office spaces and business centers providing professional work environments for commercial activities."
            },
            {
              icon: ShoppingBag,
              title: "Retail Store",
              description: "Curated retail spaces featuring essential shopping, lifestyle products, and local business outlets."
            }
          ].map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: 'Gotham, sans-serif' }}>{amenity.title}</h3>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base" style={{ fontFamily: 'Gotham, sans-serif' }}>{amenity.description}</p>
              </div>
            );
          })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
          <div className="bg-gray-700 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8" style={{ fontFamily: 'Gotham, sans-serif' }}>
                  LIFESTYLE AMENITIES
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'Gotham, sans-serif' }}>Residential Amenities</h4>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base" style={{ fontFamily: 'Gotham, sans-serif' }}>
                  <li>• Swimming pool and deck area</li>
                  <li>• Children&apos;s play area</li>
                  <li>• Community hall for events</li>
                  <li>• Landscaped gardens</li>
                  <li>• 24/7 security and CCTV</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'Gotham, sans-serif' }}>Commercial Amenities</h4>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base" style={{ fontFamily: 'Gotham, sans-serif' }}>
                  <li>• Modern office spaces</li>
                  <li>• Retail and shopping areas</li>
                  <li>• Banking and financial services</li>
                  <li>• Food courts and cafes</li>
                  <li>• Parking facilities</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AmenitiesPage;
