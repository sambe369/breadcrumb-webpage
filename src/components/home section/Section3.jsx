"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Section3() {
  const services = [
    {
      title: "Custom development",
      description:
        "Tailored software solutions to meet the unique needs of your business.",
      image: "/custom-development.png",
      aspect: "aspect-[4/5]",
      offsetClass: "lg:mt-24",
    },
    {
      title: "AI-enhanced UX/UI design",
      description:
        "Harnessing AI to create intuitive, adaptive, and user-centric digital experiences.",
      image: "/uiux-design.png",
      aspect: "aspect-[4/3]",
      offsetClass: "",
    },
    {
      title: "API Development",
      description:
        "Strategic design and creation of robust APIs and backend systems for seamless integration.",
      image: "/api-development.png",
      aspect: "aspect-[4/3]",
      offsetClass: "",
    },
  ];

  // Heading triggers on its own
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Heading */}
        <div ref={headingRef}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-left"
          >
            Our services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-gray-600 max-w-lg mb-16 text-left"
          >
            From product design to AI-powered products – we design and build
            interfaces for the future.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-24 gap-y-8">
          {/* Left Large Card */}
          <ServiceCard service={services[0]} isLarge={true} />

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <ServiceCard service={services[1]} isLarge={false} />
            <ServiceCard service={services[2]} isLarge={false} />
          </div>
        </div>

        {/* CTA */}
        <CTA />
      </div>
    </section>
  );
}

// Separate component so each card has its own ref & inView tracker
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
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#48A446]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
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
      className="mt-16 flex justify-start"
    >
      
        <a href="/services"
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