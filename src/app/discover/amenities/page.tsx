'use client';

import { motion } from 'framer-motion';
import { Dumbbell, TreePine, Users, Coffee, ShoppingBag, Car } from 'lucide-react';

const AmenitiesPage = () => {
  return (
    <div className="w-full px-6 sm:px-8 md:px-0">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            <span className="block">WORLD-CLASS</span>
            <span className="block">AMENITIES</span>
            <span className="block">& LIFESTYLE</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16 px-6 sm:px-8"
        >
          <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
            Over 50,000 sq ft of unparalleled private indoor and outdoor spaces designed to enhance your lifestyle and well-being.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-6 sm:px-8"
        >
          {[
            {
              icon: Dumbbell,
              title: "Fitness Center",
              description: "State-of-the-art fitness facility with modern equipment and personal training services."
            },
            {
              icon: TreePine,
              title: "Rooftop Garden",
              description: "Beautiful landscaped rooftop gardens with stunning city views and relaxation areas."
            },
            {
              icon: Users,
              title: "Community Lounge",
              description: "Spacious community spaces for socializing, events, and building connections."
            },
            {
              icon: Coffee,
              title: "Coffee Bar",
              description: "Premium coffee bar with barista service and comfortable seating areas."
            },
            {
              icon: ShoppingBag,
              title: "Retail Spaces",
              description: "Curated retail spaces featuring local businesses and essential services."
            },
            {
              icon: Car,
              title: "Concierge Services",
              description: "24/7 concierge services to assist with your daily needs and requests."
            }
          ].map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{amenity.title}</h3>
                <p className="text-gray-300 leading-relaxed">{amenity.description}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 md:mt-16 px-6 sm:px-8"
        >
          <div className="bg-gray-700 rounded-2xl p-4 md:p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Indoor Amenities</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Co-working spaces with high-speed internet</li>
                  <li>• Private meeting rooms</li>
                  <li>• Library and quiet study areas</li>
                  <li>• Children&apos;s play area</li>
                  <li>• Pet grooming station</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Outdoor Amenities</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Outdoor swimming pool</li>
                  <li>• BBQ and entertainment areas</li>
                  <li>• Walking trails and green spaces</li>
                  <li>• Outdoor fitness equipment</li>
                  <li>• Community garden plots</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AmenitiesPage;
