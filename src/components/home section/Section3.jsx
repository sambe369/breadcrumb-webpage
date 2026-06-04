"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Custom development",
    description:
      "End-to-end software built around your business — web platforms, mobile apps, internal tools, and everything between. We code with care and ship with confidence.",
    label: "Engineering",
    image: "/custom-development.png",
    aspect: "aspect-[4/5]",
    offsetClass: "lg:mt-24",
  },
  {
    title: "AI-enhanced UX/UI design",
    description:
      "Interfaces shaped by data, refined by craft. We blend AI-driven insights with thoughtful design to create experiences that feel intuitive from the first click.",
    label: "Design",
    image: "/uiux-design.png",
    aspect: "aspect-[4/3]",
    offsetClass: "",
  },
  {
    title: "API Development",
    description:
      "Robust, scalable backends and APIs designed to grow with you. Clean architecture, strong documentation, and built for systems that need to last.",
    label: "Integration",
    image: "/api-development.png",
    aspect: "aspect-[4/3]",
    offsetClass: "",
  },
];

export default function Section3() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#48A446]/8 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[#48A446] font-medium text-sm tracking-widest uppercase">
              What We Do
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-[1.1] tracking-tight"
          >
            Services that{" "}
            <span className="text-[#48A446] relative inline-block">
              ship
              <motion.span
                initial={{ scaleX: 0 }}
                animate={headingInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#48A446]/30 origin-left rounded-full"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            From product design to AI-powered products — we design and build
            interfaces for the future.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8">
          {/* Left Large Card */}
          <ServiceCard service={services[0]} isLarge={true} />

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <ServiceCard service={services[1]} isLarge={false} />
            <ServiceCard service={services[2]} isLarge={false} />
          </div>
        </div>

        <CTA />
      </div>
    </section>
  );
}

function ServiceCard({ service, isLarge }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={service.offsetClass}
    >
      <div className="flex flex-col h-full">
        {/* Image with overlay */}
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)", scale: 1.1 }}
          animate={
            isInView ? { clipPath: "inset(0 0 0% 0)", scale: 1 } : {}
          }
          transition={{
            duration: isLarge ? 1.2 : 1.1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative rounded-3xl overflow-hidden group mb-6 w-full ${service.aspect}`}
        >
          {/* Service label badge */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm shadow-sm">
            <span className="text-gray-900 text-xs font-medium tracking-wide uppercase">
              {service.label}
            </span>
          </div>

          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#48A446]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 tracking-tight">
            {service.title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CTA() {
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ctaRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-20 flex justify-start"
    >
      <a
        href="/services"
        className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-medium border-2 border-[#48A446] text-[#48A446] rounded-full overflow-hidden group hover:text-white transition-colors duration-300"
      >
        <span className="relative z-10">View all services</span>
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
        <span className="absolute inset-0 bg-[#48A446] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
      </a>
    </motion.div>
  );
}