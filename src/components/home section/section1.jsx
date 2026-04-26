
'use client';
import { motion } from 'framer-motion';

export default function Section1() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center justify-center pb-60 relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bigger Cubes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`cube-${i}`}
            className="absolute w-20 h-20 rounded-lg bg-white/80 shadow-2xl backdrop-blur-sm"
            style={{ left: `${10 + i * 18}%`, top: `${15 + (i % 3) * 22}%` }}
            animate={{
              y: [-15, 15, -15],
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          />
        ))}

        {/* Bigger Spheres */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`sphere-${i}`}
            className="absolute w-16 h-16 rounded-full bg-white/80 shadow-2xl backdrop-blur-sm"
            style={{ right: `${12 + i * 14}%`, top: `${20 + i * 18}%` }}
            animate={{
              x: [-20, 20, -20],
              y: [-25, 25, -25],
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          />
        ))}

        {/* Pyramids */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`pyramid-${i}`}
            className="absolute w-0 h-0 border-l-[14px] border-r-[14px] border-b-[28px] border-l-transparent border-r-transparent shadow-xl"
            style={{ borderBottomColor: 'rgba(255,255,255,0.85)', left: `${50 + i * 12}%`, bottom: `${18 + i * 18}%` }}
            animate={{
              rotate: [0, 360],
              y: [-20, 20, -20],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 9 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          />
        ))}

        {/* Tiny scattered triangles (accent shapes) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`triangle-${i}`}
            className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent"
            style={{
              borderBottomColor: 'rgba(255,255,255,0.7)',
              left: `${5 + i * 15}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 360],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-20 relative z-10 text-center">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-gray-700 font-medium text-xl">
            Navigate your virtual landscape
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build{' '}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#48A446]"
          >
            Digital
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#48A446]"
          >
            Futures
          </motion.span>
        </h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-gray-600 text-lg sm:text-xl leading-relaxed"
        >
          We simplify navigating the modern IT landscape, providing innovative solutions 
          for seamless integration and expertise, guiding businesses to success in technology.
        </motion.p>
      </div>
    </section>
  );
}


