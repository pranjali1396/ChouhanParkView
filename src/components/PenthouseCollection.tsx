'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Crown, Star, ArrowRight, Eye } from 'lucide-react';

const PenthouseCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const penthouseUnits = [
    {
      id: 1,
      name: "Sky Penthouse",
      floor: "45th Floor",
      bedrooms: "4 BR",
      bathrooms: "4 BA",
      sqft: "3,200 sq ft",
      price: "From $2,999,900",
      features: ["360° city views", "Private elevator", "Rooftop terrace", "Wine cellar"],
      image: "placeholder"
    },
    {
      id: 2,
      name: "Executive Penthouse",
      floor: "42nd Floor",
      bedrooms: "3 BR",
      bathrooms: "3 BA",
      sqft: "2,800 sq ft",
      price: "From $2,499,900",
      features: ["Panoramic windows", "Chef's kitchen", "Home office", "Spa bathroom"],
      image: "placeholder"
    },
    {
      id: 3,
      name: "Signature Penthouse",
      floor: "40th Floor",
      bedrooms: "5 BR",
      bathrooms: "5 BA",
      sqft: "4,000 sq ft",
      price: "From $3,999,900",
      features: ["Private garden", "Butler's pantry", "Library", "Gym"],
      image: "placeholder"
    }
  ];

  return (
    <div ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Crown className="w-12 h-12 text-yellow-400 mr-4" />
            <h2 className="text-4xl md:text-6xl font-bold">
              Penthouse Collection
            </h2>
          </div>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-300">
            Experience the pinnacle of luxury living with our exclusive penthouse collection featuring unparalleled views and world-class amenities.
          </p>
        </motion.div>

        <div className="space-y-16">
          {penthouseUnits.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="h-96 bg-gradient-to-br from-blue-600 to-purple-700 relative">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Eye className="w-24 h-24 text-white/30" />
                    </div>
                    <div className="absolute top-6 left-6 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold">
                      {unit.price}
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                      {unit.floor}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <h3 className="text-3xl font-bold">{unit.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-gray-300 text-sm">Bedrooms</p>
                    <p className="text-xl font-semibold">{unit.bedrooms}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-gray-300 text-sm">Bathrooms</p>
                    <p className="text-xl font-semibold">{unit.bathrooms}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 col-span-2">
                    <p className="text-gray-300 text-sm">Size</p>
                    <p className="text-xl font-semibold">{unit.sqft}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Luxury Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {unit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 flex items-center group">
                  View Virtual Tour
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exclusive access section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12"
        >
          <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Exclusive Access</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Penthouse collection is available by appointment only. Contact our luxury sales team for a private viewing.
          </p>
          <button className="btn-secondary">
            Schedule Private Viewing
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PenthouseCollection;
