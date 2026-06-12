"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const highlights = [
  {
    label: "Where we are",
    value: "Kathmandu, Nepal",
    detail: "Fully in-office — we believe in working side by side",
  },
  {
    label: "Team size",
    value: "Small and growing",
    detail: "Selective hiring, real ownership of work",
  },
  {
    label: "How we work",
    value: "Calmly, deliberately",
    detail: "Weekly syncs, no slack-at-midnight culture",
  },
];

export default function Career3() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#48A446]/8 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#48A446]/6 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT SECTION */}
          <div ref={headingRef}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-[#48A446] font-medium text-sm tracking-widest uppercase">
                Life at Breadcrumb
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-[1.1] tracking-tight"
            >
              Work that{" "}
              <span className="text-[#48A446] relative inline-block">
                feels good
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={headingInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#48A446]/30 origin-left rounded-full"
                />
              </span>
              .
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              We're not optimizing for the most projects, the largest team, or
              the fastest growth. We're optimizing for the kind of work we're
              proud of — and the kind of place we actually want to spend our
              days.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 mb-10"
            >
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={headingInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  className="border-l-2 border-[#48A446]/30 pl-4"
                >
                  <div className="text-xs font-semibold text-[#48A446] uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-gray-900 font-semibold mb-0.5">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 leading-snug">
                    {item.detail}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a
                href="mailto:info@breadcrumbtechnologies.com.np"
                className="group inline-flex items-center gap-2 text-[#48A446] font-medium text-base hover:gap-3 transition-all duration-300"
              >
                <span className="border-b border-[#48A446]/30 group-hover:border-[#48A446] transition-colors duration-300">
                  Send us a hello
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden group"
          >
            <Image
              src="/team-collab.png"
              alt="The Breadcrumb team at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />

            {/* Subtle bottom gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#48A446]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}