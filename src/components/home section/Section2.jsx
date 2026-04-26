"use client";

import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Email Love",
    description:
      "A powerful Figma plugin that streamlines email template design from concept to code. Build responsive, production-ready templates and export clean HTML that renders consistently across every major email client.",
    features:
      "Responsive email templates • One-click HTML export • Cross-client compatibility • Pre-built component library • Seamless Figma integration",
    image: "/emaillove.png",
    url: "https://emaillove.com",
  },
  {
    id: 2,
    title: "On the Case",
    description:
      "A secure, web-based case management platform built for legal firms and private investigative agencies. Organize case files, automate document generation, and access your entire practice from anywhere, all while reducing non-billable hours.",
    features:
      "Organized case management • Automated document generation • Web-based accessibility • Encrypted cloud storage • Comprehensive audits and reports",
    image: "/onthecase.png",
    url: "https://onthecase.io",
  },
  {
    id: 3,
    title: "R.I.S.E",
    description:
      "An AI-powered emotional wellness companion for introverts, overthinkers, and deep feelers. R.I.S.E. with Amber brings chat, journaling, and goal tracking into one private, ad-free space to help users manage stress and grow one small win at a time.",
    features:
      "AI chat companion • Guided journaling • Emotional dashboard • Goals and small wins tracking • End-to-end encryption",
    image: "/rise.png",
    url: "https://risewithamber.com",
  },
];

export default function Section2() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header - Left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg">
            Innovative solutions we helped build for tomorrow's challenges.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h3
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "#48A446" }}
                >
                  {product.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-gray-900 font-semibold text-xl">
                    Key Features:
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {product.features}
                  </p>
                </div>
              </div>

              {/* Image - now a clickable link */}
              <div
                className={`w-full ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                
                  <a href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${product.title} website (opens in new tab)`}
                  className="block"
                >
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
                      index % 2 === 1 ? "lg:object-left" : "lg:object-right"
                    }`}
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}