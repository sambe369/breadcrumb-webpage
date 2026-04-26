"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Code,
  Database,
  Cpu,
  Palette,
  Shield,
  Settings,
} from "lucide-react";

// Services array
const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Creating stunning, responsive user interfaces that captivate and engage your audience with modern technologies.",
    technologies: ["React", "Vue.js", "Angular", "TypeScript"],
    step: "01",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Building robust, scalable server-side solutions that power your applications with reliability and performance.",
    technologies: ["Node.js", "Python", "PHP", "Cloud Services"],
    step: "02",
  },
  {
    icon: Zap,
    title: "API Development",
    description:
      "Designing and implementing powerful APIs that seamlessly connect your applications and services.",
    technologies: ["REST", "GraphQL", "WebSockets", "Microservices"],
    step: "03",
  },
  {
    icon: Cpu,
    title: "IT Consultancy",
    description:
      "Providing strategic guidance to optimize your technology stack and drive digital transformation.",
    technologies: ["Strategy", "Architecture", "Planning", "Optimization"],
    step: "04",
  },
  {
    icon: Database,
    title: "Database Warehousing",
    description:
      "Implementing comprehensive data solutions for analytics, reporting, and business intelligence.",
    technologies: ["SQL", "NoSQL", "ETL", "Analytics"],
    step: "05",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive, beautiful designs that enhance user experience and drive engagement.",
    technologies: ["Figma", "Prototyping", "User Research", "Design Systems"],
    step: "06",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Ensuring your applications meet the highest standards through comprehensive testing strategies.",
    technologies: ["Automated Testing", "Manual QA", "Performance", "Security"],
    step: "07",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description:
      "Providing ongoing support to keep your applications running smoothly and securely.",
    technologies: ["Monitoring", "Updates", "Support", "Optimization"],
    step: "08",
  },
];

export default function Service2() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#48A446] via-[#48A446]/50 to-[#48A446]/20"></div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-[#48A446] rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-300">
                    {/* Step number */}
                    <div className="inline-flex items-center gap-3 mb-6">
                      <span className="text-3xl font-bold text-[#48A446]/30">
                        {service.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#48A446]/10 flex items-center justify-center group-hover:bg-[#48A446] transition-colors duration-300">
                        <service.icon className="w-6 h-6 text-[#48A446] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#48A446]/10 text-[#48A446] rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* <button className="inline-flex items-center gap-2 text-[#48A446] font-medium hover:gap-3 transition-all duration-300">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button> */}
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
