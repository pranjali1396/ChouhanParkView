'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const VisionPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full">
      
      {/* Main Content */}
      <div className="w-full">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 pt-8 sm:pt-10 md:pt-12"
        >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Gotham, sans-serif' }}>
            <span className="block">MORE</span>
            <span className="block">OF EVERYTHING</span>
            <span className="block">YOU CAN IMAGINE</span>
          </h1>
        </motion.div>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
            >
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6" style={{ fontFamily: 'Gotham, sans-serif' }}>
                Chouhan Group, a leading real estate developer in Bhilai, Chhattisgarh, has been shaping the city's residential and commercial landscapes with iconic buildings since its establishment. Founded in 1998 by Mr. Ajay Chouhan, the group has earned its reputation as the most reliable real estate developer in Central India through an unwavering commitment to quality, timely delivery, and customer trust. Our legacy of excellence spans over two decades, marked by a steadfast belief that homes are the foundation of joyful lives and aspirations.
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'Gotham, sans-serif' }}>
                Expanding our commitment to excellence, Chouhan Group has diversified into the automotive and hospitality sectors. Chouhan Automobiles, featuring the exclusive Maruti Suzuki ARENA and NEXA showrooms, is a leading dealership in Chhattisgarh. Additionally, our hospitality ventures, including Empyrean Hotels and Empyrean Lake Resorts, reflect our dedication to providing comprehensive services that meet diverse lifestyle needs.
              </p>
            </motion.div>

        {/* Future Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-800/30 rounded-2xl p-6 sm:p-8 border border-blue-500/20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-4 sm:mb-5" style={{ fontFamily: 'Gotham, sans-serif' }}>
                  OUR GLOBAL VISION
                </h2>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'Gotham, sans-serif' }}>
              Chouhan Group envisions crossing boundaries and creating sustainable destinations that redefine life experiences globally. With a commitment to innovation and excellence, we aspire to be at the forefront of transformative real estate, automotive, and hospitality solutions, shaping a future where every endeavor reflects our dedication to exceeding expectations.
            </p>
          </div>
        </motion.div>

        {/* Video Section - Reel Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="w-full mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
          <div className="relative w-full h-96 sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              preload="metadata"
              poster="/media/Park View.mp4"
              muted={isMuted}
              loop
              onClick={togglePlay}
            >
              <source src="/media/Park View.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Custom Play Button */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"
                onClick={togglePlay}
              >
                <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            )}
            
            {/* Zoom Controls */}
            <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
              <button className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </button>
              <button className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
            
            {/* Volume Control */}
            <div className="absolute bottom-4 left-4">
              <button 
                onClick={toggleMute}
                className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-300"
              >
                {isMuted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6.343 6.343L4.93 4.93A1 1 0 003.515 6.343V17.657a1 1 0 001.414 1.414l1.414-1.414" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8" style={{ fontFamily: 'Gotham, sans-serif' }}>
                WHY CHOOSE US
              </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {[
            {
                title: "CREDAI & RERA Approved",
                description: "Member of CREDAI & RERA Approved ensuring credibility and adherence to industry standards.",
                icon: "🏢"
            },
            {
                title: "Save Up to ₹2.67L Under PMAY",
                description: "Offering significant savings through the Pradhan Mantri Awas Yojana scheme.",
                icon: "💰"
            },
            {
                title: "20+ Years of Experience",
                description: "Demonstrating a longstanding commitment to quality and trust in the industry.",
                icon: "⭐"
            },
            {
                title: "High Standard Construction",
                description: "High standard detailing in construction with meticulous attention to every detail.",
                icon: "🔨"
            },
            {
                title: "1 Year FREE Maintenance",
                description: "One year of FREE maintenance services (*Terms & Conditions Applied) for added value.",
                icon: "🛠️"
            },
            {
                title: "Flexible Financing",
                description: "Loan & EMI facility available to facilitate flexible financing options for our clients.",
                icon: "💳"
            }
            ].map((item, index) => (
            <div key={index} className="text-center">
                <div className="bg-gray-700 rounded-2xl p-4 sm:p-5 h-full hover:bg-gray-600 transition-colors duration-300">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
            </div>
        </motion.div>

        {/* Image Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6 pt-8 sm:pt-10 md:pt-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: 'Gotham, sans-serif' }}>
            CHOUHAN PARK VIEW
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Gotham, sans-serif' }}>
            Experience the future of urban living with our masterfully designed commercial and residential spaces that redefine modern architecture and lifestyle.
          </p>
        </motion.div>

        {/* Park View Image Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-4 sm:mt-6 md:mt-8"
        >
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden shadow-2xl">
            <img
              src="/media/Commercial_/Commercial layout/chouhan_park_view_4.webp"
              alt="Chouhan Park View"
              className="w-full h-full object-contain"
            />
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default VisionPage;