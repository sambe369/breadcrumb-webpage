"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Sparkles, MessageCircle, HeartHandshake } from "lucide-react";

const benefits = [
  {
    title: "Built around your goals",
    description:
      "We don't push templates or pet stacks. Every project starts with your problem — then we choose the right tools for it, not the other way around.",
    icon: Sparkles,
    detail: "Tailored architecture",
  },
  {
    title: "Transparent throughout",
    description:
      "Weekly demos, open communication, no jargon walls. You always know what we're working on, why, and what's coming next.",
    icon: MessageCircle,
    detail: "Weekly progress demos",
  },
  {
    title: "Here for the long haul",
    description:
      "We don't disappear after launch. Real maintenance, real support, real people you can reach. Your software is a relationship, not a transaction.",
    icon: HeartHandshake,
    detail: "Ongoing partnership",
  },
];

export default function Service4() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#48A446]/6 blur-[140px]" />
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
              Why Breadcrumb
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-[1.1] tracking-tight"
          >
            What sets our work{" "}
            <span className="text-[#48A446] relative inline-block">
              apart
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
            Three things we take seriously — and the reasons clients keep coming back.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="relative group"
            >
              {/* Glow halo on hover */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#48A446]/30"
                aria-hidden="true"
              />

              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#48A446]/30 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#48A446]/10 flex items-center justify-center mb-6 group-hover:bg-[#48A446] transition-colors duration-300">
                  <benefit.icon
                    className="w-7 h-7 text-[#48A446] group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {benefit.description}
                </p>

                {/* Detail tag */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-[#48A446] uppercase tracking-wider">
                    {benefit.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}