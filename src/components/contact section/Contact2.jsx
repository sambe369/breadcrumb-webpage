"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export default function Contact2() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const visitInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Devinagar 10, Kathmandu",
      detail: "Bagmati Province, Nepal",
    },
    {
      icon: Clock,
      label: "Office hours",
      value: "Mon – Fri",
      detail: "10:00 AM – 6:00 PM",
    },
  ];

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-[#48A446]/8 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#48A446]/6 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[#48A446] font-medium text-sm tracking-widest uppercase">
              Visit Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-[1.1] tracking-tight"
          >
            We're in the heart of{" "}
            <span className="text-[#48A446] relative inline-block">
              Kathmandu
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
            Drop by, schedule a meeting, or just say hello. We're easy to find
            and always happy to host a conversation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-gray-100"
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

          {/* Visit info sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {visitInfo.map((info, idx) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#48A446]/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#48A446]/10 flex items-center justify-center group-hover:bg-[#48A446] transition-colors duration-300 flex-shrink-0">
                    <info.icon
                      className="w-5 h-5 text-[#48A446] group-hover:text-white transition-colors duration-300"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      {info.label}
                    </div>
                    <div className="text-gray-900 font-semibold mb-0.5">
                      {info.value}
                    </div>
                    <div className="text-sm text-gray-600">{info.detail}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}