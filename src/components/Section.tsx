'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue' | 'dark';
}

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const backgroundClasses = {
    white: 'bg-white text-gray-900',
    gray: 'bg-gray-50 text-gray-900',
    blue: 'bg-blue-600 text-white',
    dark: 'bg-gray-900 text-white'
  };

  return (
    <section 
      id={id}
      ref={ref}
      className={`section-padding ${backgroundClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
