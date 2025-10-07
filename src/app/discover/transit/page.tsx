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
          className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            <span className="block">SEAMLESS</span>
            <span className="block">TRANSIT</span>
            <span className="block">CONNECTIVITY</span>
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
            Connected to the entire Lower Mainland with multiple transit options right at your doorstep.
          </p>
        </motion.div>

        {/* Transit Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
        >
          {[
            {
              icon: Train,
              title: "Skytrain Station",
              description: "Metrotown Station just steps away, connecting you to downtown Vancouver and beyond.",
              time: "2 min walk"
            },
            {
              icon: Bus,
              title: "Bus Routes",
              description: "Multiple bus routes serving all major destinations in Bhilai and surrounding areas.",
              time: "1 min walk"
            },
            {
              icon: Bike,
              title: "Bike Lanes",
              description: "Dedicated bike lanes and bike-sharing programs for eco-friendly commuting.",
              time: "On-site"
            },
            {
              icon: Car,
              title: "Highway Access",
              description: "Quick access to Highway 1 and major arterial roads for car commuting.",
              time: "5 min drive"
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
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{option.title}</h3>
                <p className="text-blue-400 text-xs sm:text-sm font-medium mb-3">{option.time}</p>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">{option.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Transit Times */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-5 sm:mt-6 md:mt-7 lg:mt-8"
        >
          <div className="bg-gray-700 rounded-2xl p-3 sm:p-4 md:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-5">Transit Times</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-white">To Downtown Vancouver</h4>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <li>• Skytrain: 25 minutes</li>
                  <li>• Bus: 35 minutes</li>
                  <li>• Car: 20 minutes</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-white">To Airport</h4>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <li>• Skytrain: 45 minutes</li>
                  <li>• Car: 30 minutes</li>
                  <li>• Taxi: 25 minutes</li>
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