'use client';

import { motion } from 'framer-motion';
import { Train, Bus, Bike, Car } from 'lucide-react';

const TransitPage = () => {
  return (
    <div className="w-full">
      {/* Main Content */}
      <div className="w-full">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 pt-8 sm:pt-10 md:pt-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Gotham, sans-serif' }}>
            <span className="block">SEAMLESS</span>
            <span className="block">TRANSIT</span>
            <span className="block">CONNECTIVITY</span>
          </h1>
        </motion.div>


        {/* Transit Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
          {[
            {
              icon: Train,
              title: "Railway Station",
              description: "Bhilai Railway Station and Durg Junction provide excellent connectivity to major cities across India.",
              time: "4 km"
            },
            {
              icon: Bus,
              title: "Bus Routes",
              description: "Multiple bus routes serving all major destinations in Bhilai, Durg, and surrounding areas.",
              time: "2 km"
            },
            {
              icon: Bike,
              title: "Local Transport",
              description: "Auto-rickshaws, cycle-rickshaws, and local transport options for convenient local commuting.",
              time: "On-site"
            },
            {
              icon: Car,
              title: "Highway Access",
              description: "Quick access to NH-53 and major arterial roads connecting to Raipur, Durg, and other cities.",
              time: "2 km"
            }
          ].map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2" style={{ fontFamily: 'Gotham, sans-serif' }}>{option.title}</h3>
                <p className="text-blue-400 text-xs sm:text-sm font-medium mb-3">{option.time}</p>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm" style={{ fontFamily: 'Gotham, sans-serif' }}>{option.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Transit Times */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
          <div className="bg-gray-700 rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8" style={{ fontFamily: 'Gotham, sans-serif' }}>
              TRANSIT TIMES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="space-y-4 text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'Gotham, sans-serif' }}>To Raipur</h4>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base" style={{ fontFamily: 'Gotham, sans-serif' }}>
                  <li>• By Road: 25 minutes</li>
                  <li>• By Bus: 35 minutes</li>
                  <li>• By Train: 20 minutes</li>
                </ul>
              </div>
              <div className="space-y-4 text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-white" style={{ fontFamily: 'Gotham, sans-serif' }}>To Durg</h4>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base" style={{ fontFamily: 'Gotham, sans-serif' }}>
                  <li>• By Road: 15 minutes</li>
                  <li>• By Bus: 20 minutes</li>
                  <li>• By Train: 10 minutes</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TransitPage;