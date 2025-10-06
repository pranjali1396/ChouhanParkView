'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, X } from 'lucide-react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

interface NavigationMenuProps {
  onClose?: () => void;
}

const NavigationMenu = ({ onClose }: NavigationMenuProps) => {
  const router = useRouter();
  
  const navItems = [
    { number: '01', name: 'Discover', href: '/discover' },
    { number: '02', name: 'Tower Collection', href: '#tower' },
    { number: '03', name: 'Penthouse Collection', href: '#penthouse' },
    { number: '04', name: 'Commercial', href: '#commercial' },
    { number: '05', name: 'Gallery', href: '#gallery' },
    { number: '06', name: 'About Chouhan', href: '#about' },
  ];

  const contactItem = { name: 'Contact Us', href: '#contact' };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Handle navigation to discover page
    if (href === '/discover') {
      // Navigate immediately without closing menu first
      router.push('/discover');
      return;
    }
    
    // Use GSAP for smooth section transitions (Gilmore Place style)
    const sectionId = href.replace('#', '');
    
    // Trigger shutter transition
    if ((window as unknown as { triggerSectionTransition?: (id: string) => void }).triggerSectionTransition) {
      (window as unknown as { triggerSectionTransition: (id: string) => void }).triggerSectionTransition(sectionId);
    }
    
    // Close menu with GSAP animation
    if (onClose) {
      // Animate menu items out before closing
      const menuItems = document.querySelectorAll('.menu-item');
      gsap.to(menuItems, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in',
        onComplete: () => {
          onClose();
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-black/80 backdrop-blur-sm relative overflow-hidden" style={{ boxShadow: 'none', filter: 'none' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Geometric Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-600/20 transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-600/15 transform rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-blue-500/15 transform rotate-12"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-purple-500/10 transform rotate-45"></div>
        <div className="absolute top-1/3 left-1/2 w-28 h-28 bg-blue-700/20 transform rotate-12"></div>
        <div className="absolute bottom-1/2 right-1/4 w-36 h-36 bg-purple-700/15 transform rotate-45"></div>
      </div>

      {/* Logo - Top Left */}
      <div className="absolute top-8 left-8 z-20">
        {/* Desktop Logo with Border */}
        <div className="hidden md:block border-2 border-white p-4" style={{ boxShadow: 'none' }}>
          <h1 className="text-white text-base font-bold tracking-widest text-center" style={{ fontFamily: 'Gotham, Arial, sans-serif', letterSpacing: '0.1em' }}>
            <div className="mb-3">&nbsp;</div>
            <div>CHOUHAN</div>
            <div>PARK VIEW</div>
          </h1>
        </div>
        
        {/* Mobile Logo without Border */}
        <div className="md:hidden">
          <h1 className="text-white text-xl font-bold tracking-widest" style={{ fontFamily: 'Gotham, Arial, sans-serif', letterSpacing: '0.1em' }}>
            <div>CHOUHAN</div>
            <div>PARK VIEW</div>
          </h1>
        </div>
      </div>

      {/* Social Media Icons and Close Button - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex items-center space-x-3">
          {/* Mobile Social Media Icons */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
              <Facebook className="w-7 h-7 text-black" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
              <Twitter className="w-7 h-7 text-black" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
              <Instagram className="w-7 h-7 text-black" strokeWidth={2} />
            </a>
          </div>
          
          {/* Close Button */}
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors duration-300 p-3"
          aria-label="Close menu"
        >
          <X className="w-10 h-10" strokeWidth={2} />
        </button>
        </div>
      </div>


      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col px-8 pt-32 pb-16 md:flex-row md:items-start md:justify-start md:pl-72 md:pt-24 md:pb-20">
        {/* Main Navigation Menu */}
        <div className="flex-1 md:flex-none">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-1 md:space-y-4"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="menu-item group block text-white transition-all duration-300 cursor-pointer"
                style={{ fontFamily: 'Gotham, Arial, sans-serif' }}
              >
                <span className="inline-flex items-baseline">
                  <span className="text-white group-hover:text-blue-400 font-light italic mr-4 md:mr-3 transition-colors duration-300 text-base md:text-xs" style={{ fontWeight: '300', fontStyle: 'italic' }}>{item.number}</span>
                  <span className="font-bold group-hover:text-blue-400 transition-colors duration-300 relative text-4xl md:text-4xl" style={{ fontWeight: '700', letterSpacing: '0' }}>
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </span>
              </motion.a>
            ))}
            
            {/* Contact Us - Separate larger item */}
            <motion.a
              href={contactItem.href}
              onClick={(e) => handleNavClick(e, contactItem.href)}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: navItems.length * 0.1 }}
              className="menu-item group block text-white transition-all duration-300 cursor-pointer mt-2"
              style={{ fontFamily: 'Gotham, Arial, sans-serif' }}
            >
              <span className="inline-flex items-baseline">
                <span className="text-white group-hover:text-blue-400 font-light italic mr-4 md:hidden transition-colors duration-300 text-base md:text-xs" style={{ fontWeight: '300', fontStyle: 'italic' }}>07</span>
                <span className="font-bold group-hover:text-blue-400 transition-colors duration-300 relative text-4xl md:text-4xl" style={{ fontWeight: '700', letterSpacing: '0' }}>
                  {contactItem.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </span>
            </motion.a>
          </motion.div>

          {/* Desktop Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden md:block mt-6 space-y-1 text-left"
          >
            <div className="text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '11px', letterSpacing: '0.05em' }}>
              9109104005
            </div>
            <div className="text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '11px', letterSpacing: '0.05em' }}>
              CHOUHANHOUSING@GMAIL.COM
            </div>
          </motion.div>
        </div>

        {/* Mobile-only bottom content */}
        <div className="md:hidden mt-8">
          {/* Chouhan Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-2"
          >
            <div className="text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
              <div className="font-bold" style={{ fontSize: '18px', letterSpacing: '0.05em' }}>CHOUHAN</div>
              <div className="font-light" style={{ fontSize: '12px', letterSpacing: '0.15em' }}>GROUP</div>
            </div>
          </motion.div>

          {/* Language Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-2"
          >
            <div className="text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '14px', letterSpacing: '0.05em' }}>
              <span className="font-bold" style={{ color: '#5dade2' }}>EN</span>
              <span className="mx-2 text-white/40">|</span>
              <span>हिंदी</span>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-0.5 mb-2"
          >
            <div className="text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '18px', letterSpacing: '0.05em' }}>
              9109104005
            </div>
            <div className="text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '16px', letterSpacing: '0.05em' }}>
              CHOUHANHOUSING@GMAIL.COM
            </div>
          </motion.div>

          {/* Legal Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white mb-2 ml-6"
            style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '10px', lineHeight: '1.4' }}
          >
            <p className="mb-1">Rendering is artist&apos;s interpretation only. Please speak with a Chouhan Representative for more details. E.&O.E.</p>
            <p>
              <a href="#" className="hover:opacity-70 transition-opacity duration-300 underline text-white">
                Privacy Policy
              </a>
            </p>
          </motion.div>
        </div>

        {/* Desktop - Right Side - Social Media, Logo, Language */}
        <div className="hidden md:flex absolute right-8 md:right-12 lg:right-16 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-10">
          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-5"
          >
            <a href="#" className="bg-white rounded-full p-2.5 hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
              <Facebook className="w-6 h-6 text-black" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" className="bg-white rounded-full p-2.5 hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
              <Twitter className="w-6 h-6 text-black" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" className="bg-white rounded-full p-2.5 hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
              <Instagram className="w-6 h-6 text-black" strokeWidth={2} />
            </a>
          </motion.div>

          {/* Company Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
              <div className="font-bold" style={{ fontSize: '18px', letterSpacing: '0.05em' }}>CHOUHAN</div>
              <div className="font-light" style={{ fontSize: '11px', letterSpacing: '0.15em' }}>GROUP</div>
            </div>
          </motion.div>

          {/* Language Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '11px', letterSpacing: '0.05em' }}>
              <span className="font-bold" style={{ color: '#5dade2' }}>EN</span>
              <span className="mx-1.5 text-white/40">|</span>
              <span>हिंदी</span>
            </div>
          </motion.div>

          {/* Legal Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center text-white"
            style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '9px', lineHeight: '1.5', maxWidth: '200px' }}
          >
            <p className="mb-1">Rendering is artist&apos;s interpretation only. Please speak with a Chouhan Representative for more details. E.&O.E.</p>
            <p>
              <a href="#" className="hover:opacity-70 transition-opacity duration-300 underline">
                Privacy Policy
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="absolute bottom-6 right-6 z-20 md:block">
        <button className="w-12 h-12 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center" style={{ boxShadow: 'none' }}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavigationMenu;
