"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About1() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen flex flex-col justify-center relative overflow-hidden py-20">

      {/* HERO TEXT (Matches Home Hero Position & Style) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">

        

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-24 mb-32 leading-[1.2] sm:leading-[1.25] md:leading-[1.3]">
            
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Bridging{" "}
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Creativity
              <br />and&nbsp; 
            </motion.span>


            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#48A446]"
            >
              Technology
            </motion.span>

          </h1>

        </div>
      </div>

      {/* IMAGE SECTION (Perfectly aligned to Navbar width) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-3xl"
        >
          <Image
            src="/connecting-bridges.jpg"
            alt="Connecting Bridges"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

    </section>
  );
}
