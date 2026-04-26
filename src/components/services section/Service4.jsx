'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Settings } from 'lucide-react';

export default function Service4() {
  const benefits = [
    {
      title: "Proven Expertise",
      description: "Years of experience delivering successful projects across various industries and technologies.",
      icon: Shield,
    },
    {
      title: "Modern Technologies",
      description: "We use the latest tools and frameworks to ensure your solutions are future-proof and scalable.",
      icon: Zap,
    },
    {
      title: "Dedicated Support",
      description: "Ongoing support and maintenance to keep your applications running smoothly and efficiently.",
      icon: Settings,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8"> {/* aligned with navbar */}
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each service is designed with your success in mind, backed by proven methodologies and cutting-edge technologies
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-gray-200 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#48A446]/20 flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-[#48A446]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
