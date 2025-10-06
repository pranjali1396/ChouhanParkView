'use client';

import { useState, useEffect } from 'react';
import LocomotiveScrollProvider from '@/components/LocomotiveScrollProvider';
import Navigation from '@/components/Navigation';
import NavigationMenu from '@/components/NavigationMenu';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  // Scroll to specific section
  const scrollToSection = (sectionId: string) => {
    const locomotiveScroll = (window as any).locomotiveScroll;
    if (locomotiveScroll) {
      const target = document.querySelector(`#${sectionId}`);
      if (target) {
        locomotiveScroll.scrollTo(target, {
          duration: 1000,
          easing: [0.25, 0.0, 0.35, 1.0]
        });
      }
    }
  };

  return (
    <LocomotiveScrollProvider>
      {/* Navigation - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Section 1: Hero/Main Page */}
      <section 
        id="hero"
        data-scroll-section
        className="min-h-screen relative flex items-center justify-center"
        style={{ backgroundColor: '#000' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          data-scroll
          data-scroll-speed="-0.5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            opacity: 0.4
          }}
        />
        
        <div className="relative z-10 text-center text-white px-8">
          <h1 
            className="text-7xl md:text-8xl font-bold mb-6"
            style={{ fontFamily: 'Gotham, Arial, sans-serif' }}
          >
            CHOUHAN<br />PARK VIEW
          </h1>
          <p 
            className="text-xl md:text-2xl font-light mb-12"
            style={{ fontFamily: 'Gotham, Arial, sans-serif' }}
          >
            Luxury Living Redefined
          </p>
          
          <button
            onClick={() => scrollToSection('menu')}
            className="text-white text-sm animate-bounce"
          >
            <div className="mb-2">SCROLL DOWN</div>
            <div className="w-px h-16 bg-white/50 mx-auto" />
          </button>
        </div>
      </section>

      {/* Section 2: Menu/Navigation Page (Like Gilmore Place) */}
      <section 
        id="menu"
        data-scroll-section
        className="min-h-screen"
      >
        <NavigationMenu />
      </section>

      {/* Section 3: Discover */}
      <section 
        id="discover"
        data-scroll-section
        className="min-h-screen relative flex items-center justify-center bg-black"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          data-scroll
          data-scroll-speed="-0.3"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 text-white px-16">
          <div className="text-blue-400 text-sm mb-4" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>01</div>
          <h2 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            DISCOVER
          </h2>
          <p className="text-xl font-light max-w-2xl" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            Experience unparalleled luxury in every detail. Chouhan Park View sets a new standard for sophisticated living.
          </p>
        </div>
      </section>

      {/* Section 4: Bungalow Collection */}
      <section 
        id="bungalow"
        data-scroll-section
        className="min-h-screen relative flex items-center justify-center bg-black"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          data-scroll
          data-scroll-speed="-0.3"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`
          }}
        />
        
        <div className="relative z-10 text-white px-16">
          <div className="text-blue-400 text-sm mb-4" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>02</div>
          <h2 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            BUNGALOW COLLECTION
          </h2>
          <p className="text-xl font-light max-w-2xl" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            Sophisticated living spaces designed with meticulous attention to detail.
          </p>
        </div>
      </section>

      {/* Section 5: Plot Collection */}
      <section 
        id="plot"
        data-scroll-section
        className="min-h-screen relative flex items-center justify-center bg-black"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          data-scroll
          data-scroll-speed="-0.3"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 text-white px-16 text-right ml-auto">
          <div className="text-blue-400 text-sm mb-4" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>03</div>
          <h2 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            PLOT COLLECTION
          </h2>
          <p className="text-xl font-light max-w-2xl ml-auto" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            Build your dream home on premium plots with world-class amenities.
          </p>
        </div>
      </section>

      {/* Section 6: Flat Collection */}
      <section 
        id="flat"
        data-scroll-section
        className="min-h-screen relative flex items-center justify-center bg-black"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          data-scroll
          data-scroll-speed="-0.3"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 text-white px-16">
          <div className="text-blue-400 text-sm mb-4" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>04</div>
          <h2 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            FLAT COLLECTION
          </h2>
          <p className="text-xl font-light max-w-2xl" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            Modern apartments with stunning views and premium finishes throughout.
          </p>
        </div>
      </section>

      {/* Section 7: Commercial Complex */}
      <section 
        id="commercial"
        data-scroll-section
        className="min-h-screen relative flex items-center justify-center bg-black"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          data-scroll
          data-scroll-speed="-0.3"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 text-white px-16">
          <div className="text-blue-400 text-sm mb-4" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>05</div>
          <h2 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            COMMERCIAL COMPLEX
          </h2>
          <p className="text-xl font-light max-w-2xl" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            Prime commercial spaces in strategic locations for your business.
          </p>
        </div>
      </section>

      {/* Section 8: Gallery */}
      <section 
        id="gallery"
        data-scroll-section
        className="min-h-screen relative flex items-center justify-center bg-black"
      >
        <div className="relative z-10 text-white text-center">
          <div className="text-blue-400 text-sm mb-4" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>06</div>
          <h2 className="text-6xl font-bold mb-12" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            GALLERY
          </h2>
          <div className="grid grid-cols-3 gap-4 px-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="aspect-square bg-white/10 hover:bg-white/20 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: About */}
      <section 
        id="about"
        data-scroll-section
        className="min-h-screen relative flex items-center justify-center bg-black"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          data-scroll
          data-scroll-speed="-0.3"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`
          }}
        />
        
        <div className="relative z-10 text-white text-center px-16 max-w-4xl">
          <div className="text-blue-400 text-sm mb-4" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>07</div>
          <h2 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            ABOUT CHOUHAN GROUP
          </h2>
          <p className="text-xl font-light leading-relaxed" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            With decades of excellence in real estate development, Chouhan Group has established itself as a trusted name in creating landmark properties that define modern living.
          </p>
        </div>
      </section>

      {/* Section 10: Contact */}
      <section 
        id="contact"
        data-scroll-section
        className="min-h-screen relative flex items-center justify-center bg-black"
      >
        <div className="relative z-10 text-white text-center">
          <div className="text-blue-400 text-sm mb-4" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>08</div>
          <h2 className="text-6xl font-bold mb-12" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            CONTACT US
          </h2>
          <div className="space-y-4">
            <p className="text-xl" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>9109104005</p>
            <p className="text-xl" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>CHOUANHOUSING@GMAIL.COM</p>
          </div>
        </div>
      </section>
    </LocomotiveScrollProvider>
  );
}
