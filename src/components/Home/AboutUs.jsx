"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutUs() {
  const [isInView, setIsInView] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-black text-white px-4 py-16 md:px-8 lg:px-16 overflow-hidden">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-white text-4xl font-bold mb-12"
          variants={itemVariants}
        >
          What We Do
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-8"
          variants={itemVariants}
        >
          At Growwik Marketing, we craft tailor-made social media strategies
          that drive business results. We specialize in creating content-first
          campaigns, designed for each client&apos;s unique industry, audience,
          and objectives. With years of performance data and a deep
          understanding of cultural trends, we develop creative strategies that
          deliver industry-leading outcomes. Having worked with over 100 brands
          and 1,000+ influencers, we ensure each campaign is a personalized
          approach, maximizing engagement and success.
        </motion.p>
        {isInView && (
          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-8"
            variants={itemVariants}
          >
            Whether you&apos;re a brand looking for meaningful engagement or an
            influencer seeking collaborations, our approach is results-driven.
            We combine data-driven insights with creative strategies, ensuring
            both brands and influencers see measurable growth and lasting impact
            in the digital landscape.
          </motion.p>
        )}

        <motion.div variants={itemVariants}>
          <motion.button
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsInView(!isInView)}
          >
            {isInView ? "Read less" : "Read more"}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutUs;
