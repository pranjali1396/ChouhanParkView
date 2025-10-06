'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, ShoppingBag, Coffee, Briefcase, ArrowRight } from 'lucide-react';

const CommercialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const commercialSpaces = [
    {
      icon: ShoppingBag,
      title: "Retail Spaces",
      description: "Prime ground-level retail spaces perfect for restaurants, cafes, and boutique shops.",
      size: "500-2,000 sq ft",
      features: ["High foot traffic", "Street frontage", "Flexible layouts"]
    },
    {
      icon: Briefcase,
      title: "Office Suites",
      description: "Modern office spaces with stunning views and premium amenities for businesses.",
      size: "1,000-5,000 sq ft",
      features: ["City views", "Modern amenities", "Flexible terms"]
    },
    {
      icon: Coffee,
      title: "Food & Beverage",
      description: "Perfect spaces for restaurants, cafes, and food service establishments.",
      size: "800-3,000 sq ft",
      features: ["Kitchen facilities", "Outdoor seating", "High visibility"]
    }
  ];

  return (
    <div ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Commercial Spaces
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
            Join our vibrant commercial community with premium retail and office spaces in the heart of Burnaby.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {commercialSpaces.map((space, index) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <space.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {space.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {space.description}
              </p>
              <div className="mb-6">
                <p className="text-lg font-semibold text-blue-600 mb-3">
                  Size: {space.size}
                </p>
                <ul className="space-y-2">
                  {space.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Investment opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center"
        >
          <Building2 className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Investment Opportunity</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of Burnaby&apos;s most exciting commercial development. Limited spaces available for lease and purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              View Available Spaces
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Schedule Tour
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommercialSection;
