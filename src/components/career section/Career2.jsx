"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Coffee, MessagesSquare, Lightbulb, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Coffee,
    title: "Calm over crunch",
    description:
      "We don't believe in heroic late nights. Steady, focused work beats burnout sprints — every time.",
    glow: "#48A446",
  },
  {
    icon: MessagesSquare,
    title: "Direct, never harsh",
    description:
      "We say what we think, kindly. Honest feedback is a gift; passive-aggression is poison. We've chosen kindness.",
    glow: "#2D7A6E",
  },
  {
    icon: Lightbulb,
    title: "Curious by default",
    description:
      "We hire for taste and judgment, then trust people to figure things out. The best ideas often come from the newest voice in the room.",
    glow: "#7CB342",
  },
  {
    icon: ShieldCheck,
    title: "Built on trust",
    description:
      "No surveillance, no time-tracking software, no asking for permission to take a break. We hire adults and treat them like adults.",
    glow: "#88A878",
  },
];

export default function Career2() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#48A446]/6 blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#48A446]/8 blur-[120px]" />
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
              How We Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-[1.1] tracking-tight"
          >
            The kind of place we're{" "}
            <span className="text-[#48A446] relative inline-block">
              building
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
            Four things we take seriously as a team. If they sound right to you,
            you'll probably fit in here.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative group"
            >
              {/* Outer halo on hover */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: `radial-gradient(circle at center, ${value.glow}, transparent 70%)`,
                }}
                aria-hidden="true"
              />

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 h-full flex flex-col group-hover:border-transparent">
                {/* Themed border ring on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 0 1.5px ${value.glow}40, 0 12px 40px -8px ${value.glow}50`,
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${value.glow}15`,
                  }}
                >
                  <value.icon
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: value.glow }}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}