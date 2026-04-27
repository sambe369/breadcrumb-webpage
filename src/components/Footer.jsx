"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

// Animation variant for staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements with brand color */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#48A446]/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#48A446]/5 blur-3xl"></div>

      {/* Top "Have an Idea?" Section */}
      <div className="py-24 text-center relative overflow-hidden">
        {/* GIF Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif"
            alt="Digital particles background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            style={{ filter: "hue-rotate(90deg) brightness(0.8)" }}
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gray-900/75"></div>
          <div className="absolute inset-0 bg-[#48A446]/5"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Have an idea?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-8 text-gray-300"
          >
            Tell us about it — let's bring your project to life!
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            href="/contact"
            className="relative inline-block px-8 py-4 text-lg font-medium border-2 border-[#48A446] text-[#48A446] rounded-full overflow-hidden group hover:text-white transition-colors duration-300"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Contact Us
            </span>
            <span className="absolute inset-0 bg-[#48A446] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </motion.a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Contact Info + Address */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="flex flex-col gap-4 md:gap-6"
          >
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="mailto:breadcrumbtechnologies@gmail.com"
                className="px-6 py-3 border border-gray-600 rounded-full hover:bg-[#48A446] hover:border-[#48A446] hover:text-white transition transform hover:scale-105 text-center"
              >
                breadcrumbtechnologies@gmail.com
              </a>
              <a
                href="tel:+9779841186190"
                className="px-6 py-3 border border-gray-600 rounded-full hover:bg-[#48A446] hover:border-[#48A446] hover:text-white transition transform hover:scale-105 text-center"
              >
                +977 9841186190
              </a>
            </motion.div>

            <motion.p variants={item} className="text-gray-400 mt-2">
              Devinagar 10, Kathmandu, Nepal
            </motion.p>
          </motion.div>

          {/* Right: Navigation + LinkedIn */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="flex flex-col gap-6"
          >
            <motion.div variants={item} className="flex gap-12">
              <div className="flex flex-col gap-2">
                <a
                  href="/aboutUs"
                  className="hover:text-[#48A446] transition transform hover:scale-105"
                >
                  About Us
                </a>
                <a
                  href="/services"
                  className="hover:text-[#48A446] transition transform hover:scale-105"
                >
                  Services
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="/career"
                  className="hover:text-[#48A446] transition transform hover:scale-105"
                >
                  Career
                </a>
                <a
                  href="/contact"
                  className="hover:text-[#48A446] transition transform hover:scale-105"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            {/* LinkedIn icon */}
            <motion.div variants={item} className="mt-4">
              <a
                href="https://np.linkedin.com/company/breadcrumbtechnologies"
                className="hover:text-[#48A446] transition text-xl transform hover:scale-110 inline-block" target="blank"
              >
                <Linkedin />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          &copy; {new Date().getFullYear()} Breadcrumb Technologies. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
