'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Section1() {
  // Typing animation state
  const fullText = "Navigate your virtual landscape";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 58);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setIsTyping(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [displayedText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle background — soft green glows only */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#48A446]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#48A446]/8 blur-[100px]" />
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 relative z-10 text-center">
        {/* Subtitle with typing animation */}
        <div className="mb-8 min-h-[1.75rem]">
          <span className="text-gray-700 font-medium text-xl">
            {displayedText}
            {isTyping && (
              <span className="inline-block w-[2px] h-5 bg-gray-700 ml-1 align-middle" />
            )}
          </span>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight"
        >
          Building{' '}
          <span className="text-[#48A446] relative inline-block">
            digital futures
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 3 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#48A446]/30 origin-left rounded-full"
            />
          </span>
          ,<br />
          one project at a time.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          We design and build thoughtful software, intuitive interfaces,
          and robust APIs — helping businesses navigate technology with clarity and craft.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/services"
            className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-medium border-2 border-[#48A446] text-[#48A446] rounded-full overflow-hidden group hover:text-white transition-colors duration-300"
          >
            <span className="relative z-10">Explore our services</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 bg-[#48A446] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </a>

          <a
            href="/contact"
            className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-medium border-2 border-[#48A446] text-[#48A446] rounded-full overflow-hidden group hover:text-white transition-colors duration-300"
          >
            <span className="relative z-10">Get in touch</span>
            <span className="absolute inset-0 bg-[#48A446] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}