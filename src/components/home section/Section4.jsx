"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const highlights = [
    "Innovative digital solutions tailored to your business",
    "Expert team blending creativity & technology",
    "Proven results across multiple industries",
  ];

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#48A446]/8 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#48A446]/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="text-[#48A446] font-medium text-sm tracking-widest uppercase">
                About Us
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Built on{" "}
              <span className="text-[#48A446] relative inline-block">
                trust
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#48A446]/30 origin-left rounded-full"
                />
              </span>
              ,<br />
              driven by craft.
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We're a forward-thinking technology team dedicated to crafting
              innovative digital solutions. Blending creativity with cutting-edge
              technology, we help businesses navigate their virtual landscape and
              build digital futures.
            </p>

            {/* Highlights list */}
            <ul className="space-y-3 mb-10">
              {highlights.map((text, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <Check
                    className="w-5 h-5 text-[#48A446] flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-base leading-relaxed">{text}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA — inline learn more link, more refined than a full button */}
            <div>
              <a
                href="/aboutUs"
                className="group inline-flex items-center gap-2 text-[#48A446] font-medium text-base hover:gap-3 transition-all duration-300"
              >
                <span className="border-b border-[#48A446]/30 group-hover:border-[#48A446] transition-colors duration-300">
                  Learn more about us
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden group"
          >
            <Image
              src="/about-us.jpg"
              alt="About Breadcrumb Technologies"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />

            {/* Subtle bottom gradient — appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#48A446]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}