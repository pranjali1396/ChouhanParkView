'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Bed, Bath, Square, ArrowRight } from 'lucide-react';

const TowerCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const towerUnits = [
    {
      id: 1,
      name: "Tower A - Premium Suites",
      image: "placeholder",
      bedrooms: "1-3 BR",
      bathrooms: "1-2 BA",
      sqft: "650-1,200 sq ft",
      price: "From $599,900",
      features: ["Floor-to-ceiling windows", "Premium finishes", "Balcony access"]
    },
    {
      id: 2,
      name: "Tower B - Executive Collection",
      image: "placeholder",
      bedrooms: "2-4 BR",
      bathrooms: "2-3 BA",
      sqft: "900-1,500 sq ft",
      price: "From $799,900",
      features: ["Spacious layouts", "High-end appliances", "City views"]
    },
    {
      id: 3,
      name: "Tower C - Signature Series",
      image: "placeholder",
      bedrooms: "3-5 BR",
      bathrooms: "2-4 BA",
      sqft: "1,200-2,000 sq ft",
      price: "From $1,199,900",
      features: ["Luxury finishes", "Private terraces", "Premium location"]
    }
  ];

  return (
    <div ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Tower Collection
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
            Discover our stunning tower collection featuring modern design, premium finishes, and breathtaking views.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {towerUnits.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
            >
              {/* Property Image */}
              <div 
                className="h-64 bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-${index === 0 ? '1560448204-e02f11c3d0e2' : index === 1 ? '1564013799919-b7d3c85c5911' : '1560448075-61c3a3b16b50'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {unit.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {unit.name}
                </h3>

                {/* Unit specs */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Bed className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Bedrooms</p>
                    <p className="font-semibold text-gray-900">{unit.bedrooms}</p>
                  </div>
                  <div className="text-center">
                    <Bath className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Bathrooms</p>
                    <p className="font-semibold text-gray-900">{unit.bathrooms}</p>
                  </div>
                  <div className="text-center">
                    <Square className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Size</p>
                    <p className="font-semibold text-gray-900">{unit.sqft}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {unit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 group-hover:scale-105 transform transition-transform">
                  View Details
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-12 py-4">
            Schedule a Tower Tour
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TowerCollection;
