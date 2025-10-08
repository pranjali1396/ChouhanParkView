'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className="relative min-h-screen flex items-start justify-start overflow-hidden pt-20">
      {/* Background with rooftop pool image */}
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Geometric Triangle Overlays - Matching Gilmore Place */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left - Blue Triangle */}
        <div 
          className="absolute"
          style={{
            top: '-15%',
            left: '-10%',
            width: '50%',
            height: '60%',
            background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.7) 0%, rgba(88, 86, 214, 0.6) 100%)',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            transform: 'rotate(0deg)'
          }}
        />
        
        {/* Bottom Left - Purple Triangle */}
        <div 
          className="absolute"
          style={{
            bottom: '-20%',
            left: '-5%',
            width: '45%',
            height: '55%',
            background: 'linear-gradient(135deg, rgba(88, 86, 214, 0.65) 0%, rgba(126, 87, 194, 0.7) 100%)',
            clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
            transform: 'rotate(0deg)'
          }}
        />

        {/* Center Right - Blue Diamond */}
        <div 
          className="absolute"
          style={{
            top: '15%',
            right: '20%',
            width: '400px',
            height: '400px',
            background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.6) 0%, rgba(88, 86, 214, 0.55) 100%)',
            transform: 'rotate(45deg)'
          }}
        />

        {/* Bottom Right - Large Purple Diamond */}
        <div 
          className="absolute"
          style={{
            bottom: '-15%',
            right: '10%',
            width: '500px',
            height: '500px',
            background: 'linear-gradient(135deg, rgba(126, 87, 194, 0.65) 0%, rgba(88, 86, 214, 0.6) 100%)',
            transform: 'rotate(45deg)'
          }}
        />

        {/* Top Right - Small Blue Square */}
        <div 
          className="absolute"
          style={{
            top: '40%',
            right: '35%',
            width: '250px',
            height: '250px',
            background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.5) 0%, rgba(88, 86, 214, 0.5) 100%)',
            transform: 'rotate(45deg)'
          }}
        />
      </div>

      {/* Main Content - Left Aligned */}
      <div className="relative z-10 text-white max-w-2xl ml-16 mr-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-left" style={{ fontFamily: 'Gotham, sans-serif', fontWeight: '700' }}>
            MOVE IN TODAY
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-10"
        >
          <p className="text-base md:text-lg font-light leading-relaxed text-left" style={{ fontFamily: 'Gotham, sans-serif', fontWeight: '300' }}>
            The most anticipated masterplanned community<br />
            in Bhilai. Final Homes in Phase 1 Now Selling!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-left"
        >
          <button className="bg-white text-black px-10 py-4 text-xs md:text-sm font-bold tracking-wider hover:bg-gray-100 transition-all duration-300" style={{ fontFamily: 'Gotham, sans-serif', letterSpacing: '0.15em' }}>
            BOOK AN APPOINTMENT
          </button>
        </motion.div>
      </div>

      {/* "MORE PLAY" Text on Right */}
      <div className="absolute right-12 md:right-24 top-1/2 transform -translate-y-1/2 z-10 text-white text-center hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Gotham, sans-serif', letterSpacing: '0.05em' }}>
            MORE
          </div>
          <div className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Gotham, sans-serif', letterSpacing: '0.05em' }}>
            PLAY
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white cursor-pointer opacity-80 hover:opacity-100"
          onClick={() => {
            // Trigger wheel event to activate the smooth scroll transition
            const wheelEvent = new WheelEvent('wheel', {
              deltaY: 1,
              bubbles: true,
              cancelable: true
            });
            window.dispatchEvent(wheelEvent);
          }}
        >
          <div className="w-6 h-6 border-b-4 border-r-4 border-white scroll-indicator"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
