'use client';

import { motion } from 'framer-motion';

const DiscoverSection = () => {
  return (
    <div className="w-full h-full relative bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6 animate-in" style={{ fontFamily: 'Gotham, sans-serif' }}>
            DISCOVER
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed animate-in" style={{ fontFamily: 'Gotham, sans-serif' }}>
            Experience luxury living in the heart of the city. 
            Chouhan Park View offers unparalleled elegance and comfort.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 1.5 } }}
          className="absolute bottom-12 animate-in"
        >
          <div className="text-white text-sm font-light">SCROLL DOWN</div>
          <div className="w-px h-16 bg-white/50 mx-auto mt-2" />
        </motion.div>
      </div>
    </div>
  );
};

export default DiscoverSection;






