'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Building, Heart, Star, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Building, number: "50+", label: "Years Experience" },
    { icon: Users, number: "10,000+", label: "Happy Residents" },
    { icon: Award, number: "25+", label: "Awards Won" },
    { icon: Heart, number: "100%", label: "Customer Satisfaction" }
  ];

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering exceptional quality and attention to detail."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building vibrant communities where people can live, work, and thrive together."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing innovative design and technology to create sustainable, modern living spaces."
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
            About Onni Group
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto">
            For over 50 years, Onni Group has been creating exceptional communities that enhance the way people live, work, and play.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 1972, Onni Group has grown from a small family business to one of North America&apos;s most respected real estate development companies. Our commitment to quality, innovation, and community building has earned us a reputation for excellence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With projects spanning across major metropolitan areas, we&apos;ve created thousands of homes and commercial spaces that have become integral parts of their communities. Our approach combines visionary design with practical functionality.
            </p>
            <button className="btn-primary">
              Learn More About Our History
            </button>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl h-96 flex items-center justify-center">
            <Building className="w-32 h-32 text-white/50" />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the Onni difference. Contact our sales team today to learn more about available homes and investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Sales Team
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
