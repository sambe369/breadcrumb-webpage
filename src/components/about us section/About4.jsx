"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Example testimonials data
const testimonials = [
  { name: 'Jennifer White', company: 'Tech Innovations Inc.', text: 'Breadcrumb Technologies transformed our digital infrastructure. Their expertise and dedication are unmatched.', rating: 5 },
  { name: 'Robert Martinez', company: 'Global Solutions Ltd.', text: 'Outstanding service! They delivered beyond our expectations and continue to support our growth.', rating: 5 },
  { name: 'Lisa Anderson', company: 'Future Systems Corp.', text: 'Professional, reliable, and innovative. The best IT partner we\'ve ever worked with.', rating: 5 },
  { name: 'James Thompson', company: 'Digital Ventures', text: 'Their team\'s technical knowledge and customer service are exceptional. Highly recommended!', rating: 5 },
];

export default function About4() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#48A446] mb-6" />

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {testimonial.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#48A446] text-[#48A446]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

