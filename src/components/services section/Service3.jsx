"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView, useScroll, useSpring } from "framer-motion";
import { Search, Map, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery",
    desc: "We dig into your goals, users, and constraints — the messy human stuff that makes or breaks a project.",
    deliverable: "Project brief, success criteria, fixed scope",
    duration: "1-2 weeks",
  },
  {
    step: "02",
    icon: Map,
    title: "Planning",
    desc: "We map the technical approach, define the architecture, and surface risks before they become problems.",
    deliverable: "Architecture diagram, technical roadmap, timeline",
    duration: "1-2 weeks",
  },
  {
    step: "03",
    icon: Code2,
    title: "Development",
    desc: "We build in clear sprints with constant feedback loops. You see progress weekly, not at the end.",
    deliverable: "Working software, weekly demos, transparent updates",
    duration: "Project-dependent",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Delivery",
    desc: "We ship carefully, monitor closely, and stick around. Launch is a milestone, not a finish line.",
    deliverable: "Production launch, documentation, support handoff",
    duration: "Ongoing",
  },
];

export default function Service3() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  // Scroll progress for the timeline line
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.3", "end 0.7"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#48A446]/6 blur-[140px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#48A446]/8 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="max-w-2xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[#48A446] font-medium text-sm tracking-widest uppercase">
              How We Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-[1.1] tracking-tight"
          >
            A process that{" "}
            <span className="text-[#48A446] relative inline-block">
              respects your time
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
            No mystery, no months-long radio silence. Here's exactly how we move
            from idea to shipped product.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          {/* Static gray background line */}
          <div className="absolute left-7 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

          {/* Animated green progress line */}
          <motion.div
            className="absolute left-7 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#48A446] via-[#48A446] to-[#48A446]/40 origin-top"
            style={{ scaleY }}
          />

          {/* Steps */}
          <div className="space-y-16">
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-20 md:pl-24"
              >
                {/* Step circle on timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute left-0 top-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#48A446] flex items-center justify-center z-10 shadow-lg shadow-[#48A446]/20"
                >
                  <span className="text-[#48A446] font-bold text-lg">
                    {process.step}
                  </span>
                </motion.div>

                {/* Card content */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:border-[#48A446]/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <process.icon
                      className="w-5 h-5 text-[#48A446]"
                      strokeWidth={2.5}
                    />
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                      {process.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {process.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                        Deliverables
                      </span>
                      <p className="text-sm text-gray-700 leading-snug">
                        {process.deliverable}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                        Timeline
                      </span>
                      <p className="text-sm text-gray-700">{process.duration}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}