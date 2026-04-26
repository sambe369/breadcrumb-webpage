"use client";

import { motion } from "framer-motion";

const processSteps = [
  { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
  { step: "02", title: "Planning", desc: "Strategic planning and architecture design" },
  { step: "03", title: "Development", desc: "Building your solution with best practices" },
  { step: "04", title: "Delivery", desc: "Testing, deployment, and ongoing support" },
];

export default function Service3() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure successful project delivery
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#48A446] text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                {process.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {process.title}
              </h3>
              <p className="text-gray-600">{process.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
