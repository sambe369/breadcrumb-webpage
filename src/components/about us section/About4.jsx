"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Clock, Eye, Compass, Heart } from "lucide-react";

const promises = [
  {
    icon: Clock,
    title: "We respect your time",
    description:
      "No three-week delays for a status update. Weekly demos, fast email replies, and clear timelines from day one.",
  },
  {
    icon: Eye,
    title: "We work in the open",
    description:
      "Every decision documented. Every line of code yours to keep. No black boxes, no surprises — ever.",
  },
  {
    icon: Compass,
    title: "We tell you the truth",
    description:
      "If your idea has flaws, we say so. If a feature isn't worth building, we'll push back. Honest counsel, not yes-people.",
  },
  {
    icon: Heart,
    title: "We stay invested",
    description:
      "Launch isn't goodbye. Real support, real maintenance, real people you can reach long after the project ends.",
  },
];

export default function About4() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#48A446]/6 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#48A446]/8 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[#48A446] font-medium text-sm tracking-widest uppercase">
              How We Show Up
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-[1.1] tracking-tight"
          >
            Four promises we{" "}
            <span className="text-[#48A446] relative inline-block">
              keep
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
            className="text-lg text-gray-600 leading-relaxed"
          >
            Beyond the tech and the design choices, here's how we actually
            work — what every client can expect from us.
          </motion.p>
        </div>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{
                duration: 0.7,
                delay: (index % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative group"
            >
              {/* Soft glow on hover */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#48A446]/30"
                aria-hidden="true"
              />

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-[#48A446]/30 transition-all duration-300 h-full">
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#48A446]/10 flex items-center justify-center group-hover:bg-[#48A446] transition-colors duration-300">
                    <promise.icon
                      className="w-6 h-6 text-[#48A446] group-hover:text-white transition-colors duration-300"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-5xl font-bold text-[#48A446]/15 tracking-tighter">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {promise.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {promise.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}