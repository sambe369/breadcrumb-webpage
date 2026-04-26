"use client";

import { motion } from "framer-motion";

export default function Contact2() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Us Here
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visit our office in the heart of Kathmandu
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3532.5873520690748!2d85.33240910014963!3d27.699145994908534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdevinagar%2010%20kathmandu!5e0!3m2!1sen!2snp!4v1777219749315!5m2!1sen!2snp"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Breadcrumb Technologies Office Location"
          />
        </motion.div>

      </div>
    </section>
  );
}
