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
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 pt-8 sm:pt-10 md:pt-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Gotham, sans-serif' }}>
            <span className="block">PRIME</span>
            <span className="block">LOCATION</span>
            <span className="block">IN BHILAI</span>
          </h1>
        </motion.div>


        {/* Location Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
          {[
            {
              icon: MapPin,
              title: "Central Bhilai",
              description: "Perfectly positioned in the heart of Bhilai with easy access to all major destinations including Bhilai Steel Plant and commercial centers."
            },
            {
              icon: Train,
              title: "Railway Connectivity",
              description: "Well-connected to Bhilai Railway Station and Durg Junction, providing seamless connectivity to major cities across India."
            },
            {
              icon: Car,
              title: "Highway Access",
              description: "Quick access to NH-53 and major arterial roads connecting to Raipur, Durg, and other important cities in Chhattisgarh."
            },
            {
              icon: ShoppingBag,
              title: "Shopping & Entertainment",
              description: "Surrounded by modern shopping malls, markets, restaurants, and entertainment zones including Surya Treasure Island Mall and local bazaars."
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
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: 'Gotham, sans-serif' }}>{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Gotham, sans-serif' }}>{feature.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Nearby Landmarks Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
          <div className="bg-gray-700 rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8" style={{ fontFamily: 'Gotham, sans-serif' }}>
              NEARBY LANDMARKS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  name: "Bhilai Steel Plant",
                  distance: "5 km",
                  type: "Industrial Hub"
                },
                {
                  name: "Surya Treasure Island Mall",
                  distance: "3 km",
                  type: "Shopping Center"
                },
                {
                  name: "Bhilai Railway Station",
                  distance: "4 km",
                  type: "Transportation"
                },
                {
                  name: "Durg Junction",
                  distance: "8 km",
                  type: "Railway Station"
                },
                {
                  name: "Raipur Airport",
                  distance: "25 km",
                  type: "Airport"
                },
                {
                  name: "NH-53 Highway",
                  distance: "2 km",
                  type: "Highway Access"
                }
              ].map((landmark, index) => (
                <div key={index} className="bg-gray-600 rounded-lg p-4 hover:bg-gray-500 transition-colors duration-300">
                  <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Gotham, sans-serif' }}>
                    {landmark.name}
                  </h4>
                  <p className="text-blue-400 font-semibold mb-1">{landmark.distance}</p>
                  <p className="text-gray-300 text-sm">{landmark.type}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6"
        >
          <div className="bg-gray-700 rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8" style={{ fontFamily: 'Gotham, sans-serif' }}>
              LOCATION MAP
            </h3>
            <div className="aspect-video bg-gray-600 rounded-lg overflow-hidden relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d81.31490704329705!3d21.217767450132104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d17053b5c25:0xad9cfbb981b0893e!2sChouhan%20Parkview!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chouhan Park View Location - 21.217767450132104, 81.31490704329705"
              ></iframe>
              
              {/* Modern Overlay with Action Buttons */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm mx-4">
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: 'Gotham, sans-serif' }}>
                        Chouhan Park View
                      </h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'Gotham, sans-serif' }}>
                        Junwani, Bhilai, Chhattisgarh
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Chouhan+Parkview,+Bhilai,+Chhattisgarh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <span className="font-medium" style={{ fontFamily: 'Gotham, sans-serif' }}>Get Directions</span>
                      </a>
                      
                      <a
                        href="https://www.google.com/maps/place/Chouhan+Parkview/@21.2180925,81.312426,18z/data=!4m10!1m2!2m1!1schouhan+park+view!3m6!1s0x3a293d17053b5c25:0xad9cfbb981b0893e!8m2!3d21.2180925!4d81.3146791!15sChFjaG91aGFuIHBhcmsgdmlld5IBD2hvdXNpbmdfc29jaWV0eaoBOhABMh8QASIbv4EHp4EjpEBnuNOmplAl9DroozsynP-IjRrQMhUQAiIRY2hvdWhhbiBwYXJrIHZpZXfgAQA!16s%2Fg%2F11fzf4shy1?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="font-medium" style={{ fontFamily: 'Gotham, sans-serif' }}>View on Maps</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Click anywhere overlay */}
              <div className="absolute inset-0 cursor-pointer" onClick={() => window.open('https://www.google.com/maps/place/Chouhan+Parkview/@21.2180925,81.312426,18z/data=!4m10!1m2!2m1!1schouhan+park+view!3m6!1s0x3a293d17053b5c25:0xad9cfbb981b0893e!8m2!3d21.2180925!4d81.3146791!15sChFjaG91aGFuIHBhcmsgdmlld5IBD2hvdXNpbmdfc29jaWV0eaoBOhABMh8QASIbv4EHp4EjpEBnuNOmplAl9DroozsynP-IjRrQMhUQAiIRY2hvdWhhbiBwYXJrIHZpZXfgAQA!16s%2Fg%2F11fzf4shy1?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D', '_blank')}></div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-xs" style={{ fontFamily: 'Gotham, sans-serif' }}>
                Hover over the map for quick actions • Click anywhere to open in Google Maps
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LocationPage;