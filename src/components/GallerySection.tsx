'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, title: "Lobby Entrance", category: "Interior", gradient: "from-blue-400 to-blue-600" },
    { id: 2, title: "City Views", category: "Views", gradient: "from-purple-400 to-purple-600" },
    { id: 3, title: "Modern Kitchen", category: "Interior", gradient: "from-green-400 to-green-600" },
    { id: 4, title: "Rooftop Terrace", category: "Amenities", gradient: "from-yellow-400 to-orange-500" },
    { id: 5, title: "Living Room", category: "Interior", gradient: "from-pink-400 to-pink-600" },
    { id: 6, title: "Building Exterior", category: "Exterior", gradient: "from-indigo-400 to-indigo-600" },
    { id: 7, title: "Gym Facility", category: "Amenities", gradient: "from-red-400 to-red-600" },
    { id: 8, title: "Balcony View", category: "Views", gradient: "from-teal-400 to-teal-600" },
    { id: 9, title: "Master Bedroom", category: "Interior", gradient: "from-cyan-400 to-cyan-600" }
  ];

  const categories = ["All", "Interior", "Exterior", "Views", "Amenities"];

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
            Gallery
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
            Explore our stunning collection of images showcasing the beauty and luxury of Chouhan Park View.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(index)}
            >
              <div className={`aspect-square bg-gradient-to-br ${image.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white/50 group-hover:text-white/80 transition-colors duration-300" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {image.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Virtual Tour Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white text-center"
        >
          <Play className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Virtual Tour</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take a virtual tour of our show suites and common areas from the comfort of your home.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Start Virtual Tour
          </button>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 aspect-video rounded-lg flex items-center justify-center">
              <Play className="w-24 h-24 text-white/50" />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">
                {galleryImages[selectedImage]?.title}
              </h3>
              <p className="text-gray-300">
                {galleryImages[selectedImage]?.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default GallerySection;
