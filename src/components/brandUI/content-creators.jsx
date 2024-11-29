"use client";

import { motion } from "framer-motion";

const categories = [
  "Nano",
  "Micro",
  "Macro",
  "Mega",
  "Mega A+",
  "Celebrities",
  "Platinum Celebrities",
];

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
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "rgba(75, 75, 75, 0.9)",
    transition: {
      duration: 0.2,
    },
  },
};

export default function ContentCreators() {
  return (
    <section className=" ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto"
      >
        <motion.h1
          className="text-3xl max-[680px]:text-xl font-bold tracking-wider mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          DISCOVER YOUR CONTENT CREATORS
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              variants={itemVariants}
              whileHover="hover"
              className="relative group"
            >
              <div className="bg-neutral-800 rounded-2xl p-6 h-full flex items-center justify-center cursor-pointer transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-white/10">
                <h2 className="text-white text-center font-medium text-lg md:text-xl">
                  {category}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
