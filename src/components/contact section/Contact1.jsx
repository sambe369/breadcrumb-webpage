"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }

  function showToast(type, message) {
    setToast({ type, message });
    // Auto-dismiss after 4 seconds
    setTimeout(() => setToast(null), 4000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

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
          showToast("success", "Message sent successfully. We'll be in touch soon.");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error);
          showToast("error", "Couldn't send your message. Please try again or email us directly.");
          setIsSubmitting(false);
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
              Let's transform your ideas into reality. Reach out and discover how
              we can help your business grow.
            </p>

            <div className="space-y-8">
              <ContactItem
                icon={<Mail className="w-6 h-6" />}
                label="Email us"
                value="info@breadcrumbtechnologies.com.np"
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
                  required
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
                disabled={isSubmitting}
                className="group w-full bg-[#48A446] text-white py-4 rounded-xl hover:bg-[#3d8a3b] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 max-w-sm"
          >
            <div
              className={`flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border ${
                toast.type === "success"
                  ? "bg-white/95 border-[#48A446]/30"
                  : "bg-white/95 border-red-300"
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {toast.type === "success" ? (
                  <CheckCircle2 className="w-6 h-6 text-[#48A446]" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 font-semibold text-sm mb-0.5">
                  {toast.type === "success" ? "Sent" : "Couldn't send"}
                </p>
                <p className="text-gray-600 text-sm leading-snug">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => setToast(null)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Dismiss notification"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
        required
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#48A446] focus:outline-none transition"
        {...props}
      />
    </div>
  );
}