"use client";
import { useState } from "react";
import { motion } from "framer-motion";

function ServicePage() {
  const [flippedIndex, setFlippedIndex] = useState(null); // Track which card is flipped

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
        "Utilize viral memes to create engaging content, capturing attention and enhancing your brand’s visibility.",
    },
    {
      title: "Content Creation",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
      description:
        "High-quality content tailored to your brand’s voice, including videos, graphics, blogs, and more.",
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
        "Boost your site’s visibility on search engines, enhancing organic traffic with expert SEO techniques.",
    },
  ];

  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index); // Toggle flip state
  };

  return (
    <section className="bg-black text-white min-h-screen px-4 py-16 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Services We Provide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative perspective-1000"
              onClick={() => handleCardClick(index)}
              onHoverStart={() => handleCardClick(index)}
              style={{ perspective: "1000px" }} // Set perspective for 3D effect
            >
              <motion.div
                className={`rounded-3xl p-6 md:p-8 min-h-[120px] cursor-pointer text-center transition-all duration-500 transform-style-3d ${
                  flippedIndex === index ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Front Side */}
                <div
                  className={`absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-semibold rounded-3xl ${
                    flippedIndex === index
                      ? service.activeColor
                      : service.defaultColor
                  }`}
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  {service.title}
                </div>

                {/* Back Side */}
                <div
                  className={`absolute inset-0 flex items-center justify-center text-lg p-4 md:p-6 font-medium rounded-3xl ${service.activeColor}`}
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {service.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors">
            Submit Your Brief!
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
