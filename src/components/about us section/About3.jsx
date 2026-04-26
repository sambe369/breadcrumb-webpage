"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTI2MTQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Michael Chen', role: 'CTO', image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTE3OTEzM3ww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Emily Rodriguez', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjUxNjE0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'David Kumar', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTI2MTQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Jessica Taylor', role: 'Marketing Director', image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTE3OTEzM3ww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Robert Williams', role: 'Operations Manager', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjUxNjE0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
];

export default function About3() {
  return (
    <section className="py-24 bg-[#48A446]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Meet Our Team
        </motion.h2>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-white/80">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
