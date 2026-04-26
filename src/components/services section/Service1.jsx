"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Service1() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#48A446]/5 via-white to-gray-50 overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-2 h-24 bg-[#48A446]/20 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-1/3 right-16 w-3 h-32 bg-[#48A446]/15 rounded-full transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#48A446]/5 blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 text-gray-700 px-6 py-3 mb-4"
          >
            
            <span className="font-medium text-xl">Complete Technology Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
          >
            Our <span className="text-[#48A446]">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From concept to deployment and beyond, we provide end-to-end technology solutions
            that help you navigate your virtual landscape and build exceptional digital experiences.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
