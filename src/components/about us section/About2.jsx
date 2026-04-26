"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About2() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-3xl group"
          >
            {/* Image with slow zoom on hover */}
            <Image
              src="/our-story.jpg"
              alt="Our Story"
              fill
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            />

            {/* Brand-color gradient wash from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#48A446]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Soft green glow ring around the edges */}
            <div className="absolute inset-0 rounded-3xl ring-0 ring-[#48A446]/0 group-hover:ring-4 group-hover:ring-[#48A446]/30 transition-all duration-500"></div>

            {/* Diagonal shine sweep */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000 ease-out"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Founded in 2022, Breadcrumb Technologies was built around a
              focused vision: to help businesses move through the digital
              landscape with clarity, craft, and conviction.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed">
              We're a tight-knit team that takes on work selectively, partnering
              closely with each client to deliver solutions that are thoughtful,
              well-engineered, and built to last. Every project we ship reflects
              our commitment to quality over quantity, and a belief that great
              software is the result of attention, care, and craft.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <div className="text-5xl font-bold text-[#48A446] mb-2">
                  10+
                </div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>

              <div>
                <div className="text-5xl font-bold text-[#48A446] mb-2">
                  100%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}