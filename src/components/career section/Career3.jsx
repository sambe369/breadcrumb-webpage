"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Career3() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-5xl font-bold">Life at Breadcrumb</h2>

            <p className="text-gray-600 text-lg mb-6">
              We believe that great work happens when people feel valued, supported, 
              and inspired. Our culture is built on trust, collaboration, and a shared 
              commitment to excellence.
            </p>

            <p className="text-gray-600 text-lg">
              From team lunches to hackathons, we create opportunities for our team 
              to connect, learn, and grow together.
            </p>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1624555130296-e551faf8969b?auto=format&fit=crop&w=1080&q=80"
              alt="Diverse team meeting"
              width={1000}
              height={600}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
