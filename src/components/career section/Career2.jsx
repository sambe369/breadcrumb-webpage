"use client";

import { motion } from "framer-motion";
import { Heart, Users, Sparkles, Award } from "lucide-react";

const values = [
  { icon: Heart, title: "We Care", description: "About our team, our customers, and our impact" },
  { icon: Users, title: "We Collaborate", description: "Great ideas come from working together" },
  { icon: Sparkles, title: "We Innovate", description: "Always pushing boundaries and trying new things" },
  { icon: Award, title: "We Deliver", description: "Excellence in everything we do" },
];

export default function Career2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-5xl font-bold">Our Values</h2>
          <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#48A446] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>

              {/* Text */}
              <h3 className="mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
