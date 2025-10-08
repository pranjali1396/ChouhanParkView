'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gotham, sans-serif' }}>Chouhan Park View</h3>
            <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Gotham, sans-serif' }}>
              The most anticipated masterplanned community in Bhilai. Experience luxury living with world-class amenities and breathtaking views.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Gotham, sans-serif' }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">604.488.8986</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">chouhanparkview@onni.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Bhilai, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#discover" className="text-gray-300 hover:text-white transition-colors duration-300">Discover</a></li>
              <li><a href="#tower" className="text-gray-300 hover:text-white transition-colors duration-300">Tower Collection</a></li>
              <li><a href="#penthouse" className="text-gray-300 hover:text-white transition-colors duration-300">Penthouse Collection</a></li>
              <li><a href="#commercial" className="text-gray-300 hover:text-white transition-colors duration-300">Commercial</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-300">Gallery</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About Onni</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; {currentYear} Chouhan Park View. All rights reserved.</p>
              <p className="mt-1">Rendering is artist&apos;s interpretation only. Please speak with an Onni Representative for more details. E.&O.E.</p>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <div className="flex items-center space-x-2">
                <span>EN</span>
                <span>|</span>
                <span>हिंदी</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

