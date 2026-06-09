"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

export default function About2() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const stats = [
    { value: "10+", label: "Projects delivered" },
    { value: "100%", label: "Client satisfaction" },
    { value: "2022", label: "Year founded" },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#48A446]/8 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#48A446]/6 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl group"
          >
            <Image
              src="/our-story.jpg"
              alt="Our Story"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />

            {/* Subtle bottom gradient — appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#48A446]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.div>

          {/* Text Content */}
          <div ref={headingRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-[#48A446] font-medium text-sm tracking-widest uppercase">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight"
            >
              Small team,{" "}
              <span className="text-[#48A446] relative inline-block">
                serious craft
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={headingInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#48A446]/30 origin-left rounded-full"
                />
              </span>
              .
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              Founded in 2022, Breadcrumb Technologies was built around a focused
              vision: to help businesses move through the digital landscape with
              clarity, craft, and conviction.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base text-gray-600 mb-12 leading-relaxed"
            >
              We're a tight-knit team that takes on work selectively, partnering
              closely with each client to deliver solutions that are thoughtful,
              well-engineered, and built to last. Every project we ship reflects
              our commitment to quality over quantity — and a belief that great
              software is the result of attention, care, and craft.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={headingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#48A446] mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}