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
  const [toast, setToast] = useState(null);

  function showToast(type, message) {
    setToast({ type, message });
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 bg-white">
      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#48A446]/10 blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-[#48A446]/8 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT – INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="text-[#48A446] font-medium text-sm tracking-widest uppercase">
                Get in Touch
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-[1.1] tracking-tight">
              Let's build something{" "}
              <span className="text-[#48A446] relative inline-block">
                meaningful
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#48A446]/30 origin-left rounded-full"
                />
              </span>
              .
            </h1>

            {/* Subhead */}
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl">
              Tell us about your project. We'll get back within 24 hours
              with thoughts, questions, or a call invitation.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="info@breadcrumbtechnologies.com.np"
                href="mailto:info@breadcrumbtechnologies.com.np"
              />
              <ContactItem
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value="(+977) 9841186190, 9765232597"
                href="tel:+9779841186190"
              />
              <ContactItem
                icon={<MapPin className="w-5 h-5" />}
                label="Office"
                value="Devinagar 10, Kathmandu, Nepal"
              />
            </div>

            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 mt-10 px-4 py-2 rounded-full bg-[#48A446]/10 border border-[#48A446]/20">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#48A446] opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#48A446]" />
              </span>
              <span className="text-[#48A446] text-sm font-medium">
                Usually respond within 24 hours
              </span>
            </div>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-gray-200/40"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              Send us a message
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Quick form, no calls until you're ready.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField
                label="Name"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <InputField
                label="Email address"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your message
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#48A446] focus:outline-none focus:ring-4 focus:ring-[#48A446]/10 transition resize-none"
                  placeholder="Tell us about your project — what you're building, what you need help with, when you'd like to start."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border-2 border-[#48A446] text-[#48A446] rounded-full overflow-hidden group hover:text-white transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Send message"}
                </span>
                {!isSubmitting && (
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
                <span className="absolute inset-0 bg-[#48A446] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
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

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="w-11 h-11 rounded-xl bg-[#48A446]/10 flex items-center justify-center text-[#48A446] group-hover:bg-[#48A446] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
          {label}
        </div>
        <div className="text-gray-900 font-medium group-hover:text-[#48A446] transition-colors duration-300">
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

function InputField({ label, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        required
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#48A446] focus:outline-none focus:ring-4 focus:ring-[#48A446]/10 transition"
        {...props}
      />
    </div>
  );
}