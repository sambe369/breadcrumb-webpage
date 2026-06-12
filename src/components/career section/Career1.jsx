"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Career1() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/team-meeting.png"
          alt="Breadcrumb team collaborating in our Kathmandu office"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Subtle gradient overlay — much lighter than before */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/50 to-gray-900/70" />

        {/* Very subtle brand-color tint */}
        <div className="absolute inset-0 bg-[#48A446]/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-[#48A446] font-medium text-sm tracking-widest uppercase bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
            Careers at Breadcrumb
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
        >
          Build with{" "}
          <span className="text-[#48A446] relative inline-block">
            people
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#48A446]/40 origin-left rounded-full"
            />
          </span>
          ,<br />
          not just for them.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          We're a small team that takes craft seriously and people more so.
          If that sounds like your kind of place, we'd love to hear from you.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <a
            href="/contact"
            className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-medium border-2 border-white text-white rounded-full overflow-hidden group hover:text-[#48A446] transition-colors duration-300"
          >
            <span className="relative z-10">Get in touch</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </a>

          <p className="text-white/70 text-sm mt-6">
            Or email us directly at{" "}
            <a
              href="mailto:info@breadcrumbtechnologies.com.np"
              className="text-white font-medium underline decoration-white/30 hover:decoration-white transition-colors"
            >
              info@breadcrumbtechnologies.com.np
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}