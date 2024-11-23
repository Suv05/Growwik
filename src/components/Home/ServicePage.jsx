"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ServicePage() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const services = [
    {
      title: "Influencer Marketing",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      description:
        "Leverage influencers to reach your target audience. Connect with those who resonate with your brand to amplify your message.",
    },
    {
      title: "Meme Marketing",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      description:
        "Utilize viral memes to create engaging content, capturing attention and enhancing your brand's visibility.",
    },
    {
      title: "Content Creation",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
      description:
        "High-quality content tailored to your brand's voice, including videos, graphics, blogs, and more.",
    },
    {
      title: "Social Media Management",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-red-500 to-pink-500",
      description:
        "Manage your social presence, grow your online footprint, and foster customer relationships through strategic planning.",
    },
    {
      title: "Performance Marketing",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-teal-400 to-green-400",
      description:
        "Drive results with performance marketing strategies, optimizing campaigns for maximum ROI.",
    },
    {
      title: "SEO",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      description:
        "Boost your site's visibility on search engines, enhancing organic traffic with expert SEO techniques.",
    },
  ];

  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="bg-black text-white min-h-screen px-4 py-16 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Services We Provide
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative perspective-1000"
              onClick={() => handleCardClick(index)}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence>
                <motion.div
                  className={`rounded-3xl p-6 md:p-8 h-[200px] cursor-pointer text-center ${
                    flippedIndex === index
                      ? service.activeColor
                      : service.defaultColor
                  }`}
                  initial={false}
                  animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-semibold rounded-3xl backface-hidden"
                    initial={false}
                    animate={{ opacity: flippedIndex === index ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-lg p-4 md:p-6 font-medium rounded-3xl backface-hidden"
                    initial={{ rotateY: 180 }}
                    animate={{ opacity: flippedIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Your Brief!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicePage;
