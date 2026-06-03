"use client";

import { motion } from "framer-motion";

export default function Service1() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle background — soft green glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-1/4 w-[600px] h-[600px] rounded-full bg-[#48A446]/12 blur-[120px]" />
        <div className="absolute top-[20%] left-1/4 w-[500px] h-[500px] rounded-full bg-[#48A446]/10 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-gray-700 font-medium text-xl">
              Complete Technology Solutions
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight"
          >
            Crafted to{" "}
            <span className="text-[#48A446] relative inline-block">
              elevate
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#48A446]/30 origin-left rounded-full"
              />
            </span>
            ,<br />
            engineered to last.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From concept to deployment and beyond, we provide end-to-end technology solutions
            that help you navigate your virtual landscape and build exceptional digital experiences.
          </motion.p>
        </div>
      </div>
    </section>
  );
}