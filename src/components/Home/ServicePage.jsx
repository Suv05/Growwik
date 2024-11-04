"use client";
import { useState } from "react";

function ServicePage({}) {
  const [activeIndex, setActiveIndex] = useState(4); // Performance Marketing active by default

  const services = [
    {
      title: "Influencer Marketing",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "Meme Marketing",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      title: "Content Creation",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
    {
      title: "Influencer Marketing",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-red-500 to-pink-500",
    },
    {
      title: "Performance Marketing",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-teal-400 to-green-400",
    },
    {
      title: "Search Engine Optimization",
      defaultColor: "bg-gray-600",
      activeColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className="bg-black text-white min-h-screen px-4 py-16 md:px-8 lg:px-16 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Services we provides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`
                ${
                  index === activeIndex
                    ? service.activeColor
                    : service.defaultColor
                }
                rounded-3xl p-6 md:p-8
                flex items-center justify-center
                text-center text-xl md:text-2xl font-semibold
                min-h-[120px] transition-all duration-300
                hover:scale-105 cursor-pointer
                ${index === activeIndex ? "relative z-10 shadow-xl" : ""}
              `}
              >
                {service.title}
                {index === activeIndex && (
                  <div className="absolute -right-1 -bottom-1 w-6 h-6">
                    <div className="relative w-full h-full">
                      <div className="absolute rotate-45 border-4 border-white rounded-sm"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors">
              Submit Your Brief!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePage;
