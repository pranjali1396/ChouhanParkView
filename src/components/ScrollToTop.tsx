'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  onScrollToMenu: () => void;
}

const ScrollToTop = ({ onScrollToMenu }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial state
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* Always visible for testing - remove this later */}
      <button
        onClick={onScrollToMenu}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 z-50 flex items-center justify-center border-2 border-white"
      >
        <ChevronUp className="w-7 h-7" />
      </button>
      
      {/* Original conditional visibility */}
      {isVisible && (
        <button
          onClick={onScrollToMenu}
          className="fixed bottom-20 right-6 w-14 h-14 bg-red-600 text-white rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 z-50 flex items-center justify-center border-2 border-white"
        >
          <ChevronUp className="w-7 h-7" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
