'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, TreePine, Car, ShoppingBag, GraduationCap } from 'lucide-react';

const DiscoverSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Strategically located in the heart of Burnaby with easy access to major highways and transit."
    },
    {
      icon: TreePine,
      title: "Green Living",
      description: "Surrounded by beautiful parks and green spaces for a healthy, active lifestyle."
    },
    {
      icon: Car,
      title: "Easy Commute",
      description: "Minutes away from downtown Vancouver and major employment centers."
    },
    {
      icon: ShoppingBag,
      title: "Shopping & Dining",
      description: "World-class shopping, dining, and entertainment options right at your doorstep."
    },
    {
      icon: GraduationCap,
      title: "Top Schools",
      description: "Access to excellent schools and educational institutions in the area."
    }
  ];

  return (
    <div ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Discover Chouhan Park View
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of urban convenience and natural beauty in one of Burnaby&apos;s most sought-after locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Location Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Location Map
          </h3>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Interactive map will be displayed here</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DiscoverSection;
