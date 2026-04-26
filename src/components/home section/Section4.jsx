"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  const highlights = [
    {
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#48A446] flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
      text: "Innovative digital solutions tailored to your business",
    },
    {
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#48A446] flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
          </svg>
        </div>
      ),
      text: "Expert team blending creativity & technology",
    },
    {
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#48A446] flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        </div>
      ),
      text: "Proven results across multiple industries",
    },
  ];

  return (
    <section className="w-full py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#48A446]/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#48A446]/8 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#48A446]/3 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Us
          </h2>

          <div className="lg:mt-24">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are a forward-thinking technology company dedicated to crafting
              innovative digital solutions. Our team blends creativity with
              cutting-edge technology to help businesses navigate their virtual
              landscape and build digital futures.
            </p>

            {/* Highlights list */}
            <div className="flex flex-col gap-4">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * idx }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/50 hover:shadow-md transition-all duration-300 cursor-default group"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {highlight.icon}
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {highlight.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[500px] mt-10 md:mt-20 rounded-2xl overflow-hidden shadow-lg group"
        >
          {/* Image with zoom + tilt on hover */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <Image
              src="/about-us.jpg"
              alt="About Breadcrumb Technologies"
              fill
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            />
          </div>

          {/* Gradient overlay that fades in on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#48A446]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

          {/* Subtle border ring that appears on hover */}
          <div className="absolute inset-0 rounded-2xl ring-0 ring-[#48A446]/0 group-hover:ring-4 group-hover:ring-[#48A446]/30 transition-all duration-500"></div>

          {/* Shine sweep effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000 ease-out"></div>
          </div>

          {/* Floating gradient shapes (existing) */}
          <div className="absolute -top-8 -left-8 w-28 h-28 rounded-full bg-gradient-to-r from-[#48A446]/30 via-[#48A446]/20 to-[#48A446]/40 opacity-60 blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full bg-gradient-to-r from-[#48A446]/20 via-[#48A446]/30 to-[#48A446]/25 opacity-50 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[25%] -right-6 w-20 h-20 rounded-full bg-gradient-to-r from-[#48A446]/40 via-[#48A446]/30 to-[#48A446]/35 opacity-70 blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center relative z-10"
      >
        <a
          href="/aboutUs"
          className="relative px-8 py-4 text-lg font-medium border-2 border-[#48A446] text-[#48A446] rounded-full overflow-hidden group hover:text-white transition-colors duration-300"
        >
          <span className="relative z-10 group-hover:text-white">
            Learn More About Us
          </span>
          <span className="absolute inset-0 bg-[#48A446] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        </a>
      </motion.div>
    </section>
  );
}
