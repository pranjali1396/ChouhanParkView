'use client';

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

interface NavigationProps {
  onMenuClick?: () => void;
}

const Navigation = ({ onMenuClick }: NavigationProps) => {


  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#3d4d5c', boxShadow: 'none' }}>
      <div className="max-w-full mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col leading-tight">
              <span className="font-bold text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '16px', letterSpacing: '0.12em' }}>
                CHOUHAN
              </span>
              <span className="font-bold text-white" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '16px', letterSpacing: '0.12em' }}>
                PARK VIEW
              </span>
            </Link>
          </div>

          {/* Center - Contact Info (Desktop) */}
          <div className="hidden lg:flex items-center space-x-5">
            <a href="mailto:chouhanhousing@gmail.com" className="text-white hover:opacity-80 transition-opacity" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '14px', letterSpacing: '0.05em' }}>
              CHOUHANHOUSING@GMAIL.COM
            </a>
            <span className="text-white/40" style={{ fontSize: '14px' }}>|</span>
            <a href="tel:9109104005" className="text-white hover:opacity-80 transition-opacity" style={{ fontFamily: 'Gotham, Arial, sans-serif', fontSize: '14px', letterSpacing: '0.05em' }}>
              9109104005
            </a>
          </div>

          {/* Right Side - Language and Buttons */}
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
            <button 
              onClick={onMenuClick}
              className="hidden md:block px-6 py-2.5 text-white hover:opacity-90 transition-opacity" 
              style={{ backgroundColor: '#3d4d5c', fontFamily: 'Gotham, Arial, sans-serif', fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              MENU
            </button>

            {/* Mobile - Only REGISTER button and hamburger menu */}
            <div className="md:hidden flex items-center space-x-3">
              <button className="px-4 py-2 text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#6b46c1', fontFamily: 'Gotham, Arial, sans-serif', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em' }}>
                REGISTER
              </button>
              <button
                onClick={onMenuClick}
                className="text-white hover:text-gray-300 focus:outline-none p-1"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation removed - hamburger menu now navigates to full menu page */}
    </nav>
  );
};

export default Navigation;
