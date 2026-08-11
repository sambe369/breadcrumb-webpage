"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Email Love",
    tagline: "Figma Plugin",
    description:
      "A powerful Figma plugin that streamlines email template design from concept to code. Build responsive, production-ready templates and export clean HTML that renders consistently across every major email client.",
    features: [
      "Responsive email templates",
      "One-click HTML export",
      "Cross-client compatibility",
      "Pre-built component library",
      "Seamless Figma integration",
    ],
    image: "/emaillove.png",
    url: "https://emaillove.com/figma-plugin",
    // Pink/coral — playful, creative, design-tool energy
    theme: {
      accent: "#E11D6F",
      glow: "rgba(236, 72, 153, 0.15)",
      bandFrom: "rgba(253, 242, 248, 0.6)",
      bandVia: "#ffffff",
      bandTo: "rgba(253, 242, 248, 0.6)",
      pillBg: "rgba(236, 72, 153, 0.08)",
      pillBorder: "rgba(236, 72, 153, 0.2)",
    },
  },
  {
    id: 2,
    title: "On the Case",
    tagline: "Case Management Platform",
    description:
      "A secure, web-based case management platform built for legal firms and private investigative agencies. Organize case files, automate document generation, and access your entire practice from anywhere, all while reducing non-billable hours.",
    features: [
      "Organized case management",
      "Automated document generation",
      "Web-based accessibility",
      "Encrypted cloud storage",
      "Comprehensive audits and reports",
    ],
    image: "/onthecase.png",
    url: "https://onthecase.io",
    // Deep blue — trust, legal, professional, secure
    theme: {
      accent: "#1E40AF",
      glow: "rgba(59, 130, 246, 0.15)",
      bandFrom: "rgba(239, 246, 255, 0.6)",
      bandVia: "#ffffff",
      bandTo: "rgba(239, 246, 255, 0.6)",
      pillBg: "rgba(59, 130, 246, 0.08)",
      pillBorder: "rgba(59, 130, 246, 0.2)",
    },
  },
  {
    id: 3,
    title: "R.I.S.E",
    tagline: "Emotional Wellness App",
    description:
      "An AI-powered emotional wellness companion for introverts, overthinkers, and deep feelers. R.I.S.E. with Amber brings chat, journaling, and goal tracking into one private, ad-free space to help users manage stress and grow one small win at a time.",
    features: [
      "AI chat companion",
      "Guided journaling",
      "Emotional dashboard",
      "Goals and small wins tracking",
      "End-to-end encryption",
    ],
    image: "/rise.png",
    url: "https://risewithamber.com",
    // Warm amber/orange — warmth, care, wellness, golden hour
    theme: {
      accent: "#D97706",
      glow: "rgba(245, 158, 11, 0.18)",
      bandFrom: "rgba(255, 251, 235, 0.7)",
      bandVia: "#ffffff",
      bandTo: "rgba(255, 251, 235, 0.7)",
      pillBg: "rgba(245, 158, 11, 0.08)",
      pillBorder: "rgba(245, 158, 11, 0.2)",
    },
  },
];

export default function Section2() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-block mb-4">
            <span className="text-[#48A446] font-medium text-sm tracking-widest uppercase">
              Our Work
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            Featured projects
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Real products we've helped design, build, and ship — each one solving
            a different kind of problem.
          </p>
        </motion.div>
      </div>

      {/* Projects */}
      {products.map((product, index) => {
        const isOdd = index % 2 === 1;
        return (
          <ProjectRow
            key={product.id}
            product={product}
            index={index}
            isOdd={isOdd}
          />
        );
      })}
    </section>
  );
}

function ProjectRow({ product, index, isOdd }) {
  const { theme } = product;

  return (
    <div
      className="relative py-24"
      style={{
        background: `linear-gradient(to bottom, ${theme.bandFrom}, ${theme.bandVia}, ${theme.bandTo})`,
      }}
    >
      {/* Decorative background glow — themed per project */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute w-[600px] h-[600px] rounded-full blur-[140px] ${
            isOdd ? "-bottom-32 -right-32" : "-top-32 -left-32"
          }`}
          style={{ background: theme.glow }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className={`space-y-6 ${isOdd ? "lg:order-2" : "lg:order-1"}`}>
            {/* Tagline pill — themed */}
            <div
              className="inline-flex items-center px-3 py-1 rounded-full border"
              style={{
                backgroundColor: theme.pillBg,
                borderColor: theme.pillBorder,
              }}
            >
              <span
                className="text-xs font-medium tracking-wide uppercase"
                style={{ color: theme.accent }}
              >
                {product.tagline}
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {product.title}
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Features list with themed checkmarks */}
            <ul className="space-y-3 pt-2">
              {product.features.map((feature, fIdx) => (
                <motion.li
                  key={fIdx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + fIdx * 0.06 }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <Check
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: theme.accent }}
                    strokeWidth={2.5}
                  />
                  <span className="text-base leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Visit Website CTA — themed */}
            <div className="pt-4">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-medium text-base hover:gap-3 transition-all duration-300"
                style={{ color: theme.accent }}
              >
                <span
                  className="border-b transition-colors duration-300"
                  style={{ borderColor: `${theme.accent}50` }}
                >
                  Visit {product.title}
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Image with hover effect */}
          <div className={`w-full ${isOdd ? "lg:order-1" : "lg:order-2"}`}>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${product.title} website (opens in new tab)`}
              className="block group relative"
            >
              {/* External link icon overlay — themed, anchored to image edge */}
              <div
                className={`absolute top-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ${
                  isOdd ? "left-4" : "right-4"
                }`}
              >
                <ArrowUpRight
                  className="w-5 h-5"
                  style={{ color: theme.accent }}
                />
              </div>

              <motion.img
                src={product.image}
                alt={product.title}
                whileHover={{
                  y: [0, -12, 0, -12, 0],
                  scale: 1.03,
                }}
                transition={{
                  y: {
                    duration: 2.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                  scale: { duration: 0.3, ease: "easeOut" },
                }}
                className={`w-full h-auto max-h-[800px] object-contain ${
                  isOdd ? "lg:object-left" : "lg:object-right"
                }`}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}