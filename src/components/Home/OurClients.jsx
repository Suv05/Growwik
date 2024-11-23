"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const clients = [
  { name: "Britannia", logo: "/brands/Britannia.svg" },
  { name: "DTOOR", logo: "/brands/dTooR.svg" },
  { name: "FLIMORA", logo: "/brands/Filmora-Go.svg" },
  { name: "FLAMAPP", logo: "/brands/FlamApp.svg" },
  { name: "FREEDOM-OIL", logo: "/brands/Freedom-Oil.svg" },
  { name: "HANGOUT-HUB", logo: "/brands/Hangout-Hub.svg" },
  { name: "LUMA-AI", logo: "/brands/Luma-AI.svg" },
  { name: "MANIPAL-EDUCATION", logo: "/brands/Manipal-Education.svg" },
  { name: "MAONO", logo: "/brands/Maono.svg" },
  { name: "METASHOT", logo: "/brands/Metashot.svg" },
  { name: "MOJ", logo: "/brands/Moj.svg" },
  { name: "PUNCH TRADING", logo: "/brands/Punch-Trading.svg" },
  { name: "ROOTER", logo: "/brands/Rooter.svg" },
];

function OurClients() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState(null); // Fixed useState initialization

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Clients We've Worked With
        </motion.h1>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-2xl p-6 flex items-center justify-center h-24 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? 5 : 0,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 active:scale-95">
            Case Studies
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default OurClients;
