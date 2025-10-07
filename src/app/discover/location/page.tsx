'use client';

import { motion } from 'framer-motion';
import { MapPin, Car, Train, ShoppingBag } from 'lucide-react';

const LocationPage = () => {
  return (
    <div className="w-full">
      {/* Main Content */}
      <div className="w-full">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            <span className="block">PRIME</span>
            <span className="block">LOCATION</span>
            <span className="block">BHILAI</span>
          </h1>
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center mb-5 sm:mb-6 md:mb-7 lg:mb-8 px-4 sm:px-6"
        >
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
            Strategically positioned in the heart of Bhilai, offering unparalleled access to everything the city has to offer.
          </p>
        </motion.div>

        {/* Location Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
        >
          {[
            {
              icon: MapPin,
              title: "Central Location",
              description: "Perfectly positioned in the heart of Bhilai with easy access to all major destinations."
            },
            {
              icon: Train,
              title: "Transit Hub",
              description: "Steps away from Metrotown Skytrain Station, connecting you to the entire Lower Mainland."
            },
            {
              icon: Car,
              title: "Highway Access",
              description: "Quick access to Highway 1 and major arterial roads for seamless commuting."
            },
            {
              icon: ShoppingBag,
              title: "Shopping & Dining",
              description: "Surrounded by world-class shopping, dining, and entertainment options."
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-5 sm:mt-6 md:mt-7 lg:mt-8"
        >
          <div className="bg-gray-700 rounded-2xl p-3 sm:p-4 md:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-5">Interactive Location Map</h3>
            <div className="aspect-video bg-gray-600 rounded-lg flex items-center justify-center">
              <p className="text-gray-300">Interactive Map Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LocationPage;