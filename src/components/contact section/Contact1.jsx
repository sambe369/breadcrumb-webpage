"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
  e.preventDefault();

  emailjs
    .send(
      "service_ae36lbo",
      "template_vywxals",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "VJWh8sq-GyxLxEV9Y"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error(error);
        alert("Failed to send message. Try again.");
      }
    );
}

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #48A446 0%, #3d8a3b 50%, #48A446 100%)",
              "linear-gradient(135deg, #3d8a3b 0%, #48A446 50%, #3d8a3b 100%)",
              "linear-gradient(135deg, #48A446 0%, #3d8a3b 50%, #48A446 100%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: 200 + i * 120,
              height: 200 + i * 120,
              left: `${15 + i * 25}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT – INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Start <br /> Your Project?
            </h1>

            <p className="text-lg text-white/90 mb-12 max-w-xl">
              Let’s transform your ideas into reality. Reach out and discover how
              we can help your business grow.
            </p>

            <div className="space-y-8">
              <ContactItem
                icon={<Mail className="w-6 h-6" />}
                label="Email us"
                value="breadcrumbtechnologies@gmail.com"
              />
              <ContactItem
                icon={<Phone className="w-6 h-6" />}
                label="Call us"
                value="(+977) 9841186190, 9765232597"
              />
              <ContactItem
                icon={<MapPin className="w-6 h-6" />}
                label="Visit us"
                value="Devinagar 10, Kathmandu, Nepal"
              />
            </div>

            <div className="flex items-center gap-3 mt-12 text-white/90">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span>We usually respond within 24 hours</span>
            </div>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <InputField
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <div>
                <label className="block text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#48A446] focus:outline-none transition"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-[#48A446] text-white py-4 rounded-xl hover:bg-[#3d8a3b] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-sm text-white/80">{label}</div>
        <div className="text-white font-medium">{value}</div>
      </div>
    </div>
  );
}

function InputField({ label, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#48A446] focus:outline-none transition"
        {...props}
      />
    </div>
  );
}
