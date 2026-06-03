"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About1() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background — soft green glows positioned around the hero text */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-1/4 w-[600px] h-[600px] rounded-full bg-[#48A446]/12 blur-[120px]" />
        <div className="absolute top-[20%] left-1/4 w-[500px] h-[500px] rounded-full bg-[#48A446]/10 blur-[100px]" />
      </div>

      {/* HERO TEXT — vertically centered, with text shifted up by 40px */}
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center -translate-y-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="text-gray-700 font-medium text-xl">
                Bridging creativity and technology
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight"
            >
              We define{" "}
              <span className="text-[#48A446] relative inline-block">
                trajectories
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#48A446]/30 origin-left rounded-full"
                />
              </span>
              ,<br />
              not just paths.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              A tight-knit team turning thoughtful ideas into well-crafted
              digital products — built with care, designed with intent.
            </motion.p>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION — pulled up so half peeks into the hero viewport */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full pb-20 relative z-10 -mt-[35vh]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-3xl"
        >
          <Image
            src="/connecting-bridge.png"
            alt="Bridging creativity and technology"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </motion.div>
      </div>
    </section>
  );
}