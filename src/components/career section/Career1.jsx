"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Career1() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjU3NzIzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Team collaboration"
          fill
          priority
          className="object-cover"
        />

        {/* Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#48A446]/90 to-[#3d8a3b]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white mb-6 text-5xl font-bold"
        >
          Join Our Story
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-xl mb-8"
        >
          We're more than a company—we're a community of passionate individuals
          building something meaningful together.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 text-xl"
        >
          Feel free to reach out to us at{" "}
          <a
            href="mailto:breadcrumbtechnologies@gmail.com"
            className="text-white font-semibold hover:text-yellow-300 transition-colors"
          >
            breadcrumbtechnologies@gmail.com
          </a>
          . We'd love to hear from you.
        </motion.p>
      </div>
    </section>
  );
}
