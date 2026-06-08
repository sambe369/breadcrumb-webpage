"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Code,
  Server,
  Zap,
  Compass,
  BarChart3,
  Palette,
  Shield,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Production-grade interfaces built for speed and clarity. We work in your preferred stack and own the entire pipeline from design handoff to launch.",
    technologies: ["React", "Next.js", "Vue", "TypeScript"],
    glow: "#48A446", // vibrant brand green
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Scalable, secure server-side architecture. Designed to handle real load, integrate with anything, and stay maintainable as your product grows.",
    technologies: ["Node.js", "Python", "PostgreSQL", "AWS"],
    glow: "#2D7A6E", // deep teal-green
  },
  {
    icon: Zap,
    title: "API Development",
    description:
      "Clean, well-documented APIs that connect your services. Built with care so other developers actually enjoy using them.",
    technologies: ["REST", "GraphQL", "WebSockets", "OpenAPI"],
    glow: "#7CB342", // lime-green
  },
  {
    icon: Compass,
    title: "IT Consultancy",
    description:
      "Honest, vendor-neutral guidance on your tech strategy. We help you choose the right tools and avoid expensive mistakes.",
    technologies: ["Strategy", "Architecture", "Audits", "Roadmaps"],
    glow: "#88A878", // sage-green
  },
  {
    icon: BarChart3,
    title: "Database & Warehousing",
    description:
      "From OLTP databases to analytics warehouses — we design schemas that perform today and scale tomorrow.",
    technologies: ["PostgreSQL", "BigQuery", "ETL", "Analytics"],
    glow: "#2E7D32", // forest-green
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces shaped by user research, refined through prototyping, and shipped as design systems your team can build with.",
    technologies: ["Figma", "Prototyping", "Research", "Design Systems"],
    glow: "#E89B6A", // warm coral — strategic accent #1
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Comprehensive testing — automated, manual, performance, security — so you can ship with confidence.",
    technologies: ["Cypress", "Playwright", "Performance", "Security"],
    glow: "#8B9D5A", // olive-green
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing care for the software we build. Monitoring, updates, performance tuning, and a direct line when something needs attention.",
    technologies: ["Monitoring", "Updates", "SLA Support", "Optimization"],
    glow: "#D4A574", // warm amber/gold — strategic accent #2
  },
];

export default function Service2() {
  const [hoveredColor, setHoveredColor] = useState(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Default subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#48A446]/6 blur-[140px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#48A446]/8 blur-[120px]" />
      </div>

      {/* Themed background wash — fades to the hovered service's color */}
      <AnimatePresence>
        {hoveredColor && (
          <motion.div
            key={hoveredColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full blur-[160px]"
              style={{ background: `${hoveredColor}10` }}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
              Full Capabilities
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-[1.1] tracking-tight"
          >
            Everything you need,{" "}
            <span className="text-[#48A446] relative inline-block">
              under one roof
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
            From the first sketch to long-term support, we cover the full
            lifecycle of building and running thoughtful software.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              onHoverStart={() => setHoveredColor(service.glow)}
              onHoverEnd={() => setHoveredColor(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, onHoverStart, onHoverEnd }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="relative group"
    >
      {/* Outer ambient halo — sits behind the card */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{
          background: `radial-gradient(circle at center, ${service.glow}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 flex flex-col h-full group-hover:border-transparent">
        {/* Themed border ring + shadow on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: `0 0 0 1.5px ${service.glow}40, 0 12px 40px -8px ${service.glow}50`,
          }}
          aria-hidden="true"
        />

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${service.glow}15`,
          }}
        >
          <service.icon
            className="w-6 h-6 transition-colors duration-300"
            style={{ color: service.glow }}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}