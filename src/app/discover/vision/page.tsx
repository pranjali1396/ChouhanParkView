'use client';

import { motion } from 'framer-motion';

const VisionPage = () => {
  return (
    <div className="w-full">
      
      {/* Main Content */}
      <div className="w-full">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            <span className="block">MORE</span>
            <span className="block">OF EVERYTHING</span>
            <span className="block">YOU CAN IMAGINE</span>
          </h1>
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4 sm:px-6"
        >
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
            Chouhan Park View is a magnificent location offering homes, shops, dining, and office space within the Bhilai community. 
            A masterpiece of lifestyle, commerce, recreation, and much more.
          </p>
        </motion.div>

        {/* Vision Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {[
            {
              title: "Luxury Living",
              description: "Premium residential units with modern amenities and stunning city views."
            },
            {
              title: "Retail Excellence",
              description: "Curated retail spaces featuring local and international brands."
            },
            {
              title: "Culinary Delights",
              description: "Diverse dining options from casual cafes to fine dining restaurants."
            },
            {
              title: "Office Spaces",
              description: "Modern office spaces designed for productivity and collaboration."
            },
            {
              title: "Recreation Hub",
              description: "Comprehensive recreational facilities for all ages and interests."
            },
            {
              title: "Community Focus",
              description: "Building connections and fostering a vibrant community spirit."
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-700 rounded-2xl p-4 sm:p-5 md:p-6 h-full">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VisionPage;