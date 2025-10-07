'use client';

import { motion } from 'framer-motion';

const PlotSection = () => {
  return (
    <div className="w-full h-full relative bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-end px-16 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl text-right"
        >
          <div className="text-blue-400 text-sm font-light mb-4 animate-in" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            03
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-in" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            PLOT<br />COLLECTION
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed animate-in" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
            Build your dream home on premium plots with world-class amenities. 
            Strategic locations offering the perfect canvas for your vision.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 animate-in"
            style={{ fontFamily: 'Gotham, Arial, sans-serif' }}
          >
            VIEW PLOTS
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PlotSection;






