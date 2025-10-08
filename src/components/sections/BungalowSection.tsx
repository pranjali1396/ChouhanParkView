'use client';

import { motion } from 'framer-motion';

const BungalowSection = () => {
  return (
    <div className="w-full h-full relative bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-16 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="text-blue-400 text-sm font-light mb-4 animate-in" style={{ fontFamily: 'Gotham, sans-serif' }}>
            02
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-in" style={{ fontFamily: 'Gotham, sans-serif' }}>
            BUNGALOW<br />COLLECTION
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed animate-in" style={{ fontFamily: 'Gotham, sans-serif' }}>
            Sophisticated living spaces designed with meticulous attention to detail. 
            Each bungalow offers the perfect blend of modern architecture and timeless elegance.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 animate-in"
            style={{ fontFamily: 'Gotham, sans-serif' }}
          >
            EXPLORE COLLECTION
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BungalowSection;






