'use client';
import { motion } from 'framer-motion';

export default function Section1() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[650px] flex items-center">
      
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`cube-${i}`}
            className="absolute w-16 h-16 rounded-lg shadow-lg"
            style={{
              backgroundColor: 'rgba(72, 164, 70, 0.3)',
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{ y: [-10, 10, -10], rotateX: [0, 180, 360], rotateY: [0, 180, 360] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`sphere-${i}`}
            className="absolute w-12 h-12 rounded-full shadow-lg"
            style={{
              backgroundColor: 'rgba(72, 164, 70, 0.4)',
              right: `${10 + i * 12}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{ x: [-15, 15, -15], y: [-20, 20, -20], scale: [1, 1.1, 1] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`pyramid-${i}`}
            className="absolute w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent shadow-lg"
            style={{
              borderBottomColor: 'rgba(72, 164, 70, 0.6)',
              left: `${60 + i * 10}%`,
              bottom: `${20 + i * 15}%`,
            }}
            animate={{ rotate: [0, 360], y: [-25, 25, -25] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
        
        {/* Subheading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="subhead mb-6"
        >
          <span>Navigate</span> your virtual landscape
        </motion.h1>

        {/* Headings */}
        <div className="headings flex justify-center md:justify-start gap-6 mb-6">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold"
          >
            Build
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#48A446]"
          >
            Digital
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold"
          >
            Futures
          </motion.h1>
        </div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="homePara text-lg md:text-xl max-w-3xl mx-auto md:mx-0"
        >
          We simplify navigating the modern IT landscape, providing innovative solutions
          for seamless integration and expertise, guiding businesses to success in technology.
        </motion.p>
      </div>
    </section>
  );
}



// footer //


import { FaLinkedinIn } from "react-icons/fa";

// Animation variant for staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white relative overflow-hidden">

      {/* Top "Have an Idea?" Section */}
      <div className="py-24 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Have an idea?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl mb-8"
        >
          Tell us about it — let’s bring your project to life!
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          href="/contact"
          className="relative inline-block px-8 py-4 text-lg font-medium border-2 border-white rounded-full overflow-hidden group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-900">
            Contact Us
          </span>
          <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        </motion.a>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Left: Contact Info + Address */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="flex flex-col gap-4 md:gap-6"
          >
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:info@breadcrumbtech.com"
                className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-gray-900 transition transform hover:scale-105 text-center"
              >
                info@breadcrumbtech.com
              </a>
              <a
                href="tel:+977980XXXXXXX"
                className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-gray-900 transition transform hover:scale-105 text-center"
              >
                +977 980-XXXXXXX
              </a>
            </motion.div>

            <motion.p variants={item} className="text-gray-400 mt-2">
              123 IT Street, Kathmandu, Nepal
            </motion.p>
          </motion.div>

          {/* Right: Navigation + LinkedIn */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="flex flex-col gap-6"
          >
            <motion.div variants={item} className="flex gap-12">
              {/* Navigation links columns */}
              <div className="flex flex-col gap-2">
                <a href="/about" className="hover:text-gray-300 transition transform hover:scale-105">About</a>
                <a href="/services" className="hover:text-gray-300 transition transform hover:scale-105">Services</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="/company" className="hover:text-gray-300 transition transform hover:scale-105">Company</a>
                <a href="/contact" className="hover:text-gray-300 transition transform hover:scale-105">Contact</a>
              </div>
            </motion.div>

            {/* LinkedIn icon below nav */}
            <motion.div variants={item} className="mt-4">
              <a
                href="#"
                className="hover:text-gray-300 transition text-lg transform hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            </motion.div>
          </motion.div>

        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          &copy; {new Date().getFullYear()} Breadcrumb Technologies. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
