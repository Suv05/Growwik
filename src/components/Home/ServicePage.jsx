"use client";

import Image from "next/image";
import { useState } from "react";

function ServicePage() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const services = [
    {
      title: "Influencer Campaign Management",
      defaultImg: "/service/influencer.jpg",
      activeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      description:
        "We handle everything from planning to execution so your campaigns run smoothly and deliver the impact you’re looking for.",
    },
    {
      title: "Meme & UGC marketing",
      defaultImg: "/service/meme-marketing.jpg",
      activeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      description:
        "We create content that feels natural — memes, reels, and user videos that make people engage without feeling like ads.",
    },
    {
      title: "Content Creation",
      defaultImg: "/service/content-creation.jpg",
      activeColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
      description:
        "We design creative campaign ideas that stand out, from unique collaboration concepts to storytelling formats tailored to your brand.",
    },
    {
      title: "Influencer Discovery & Outreach",
      defaultImg: "/service/influ_dis.webp",
      activeColor: "bg-gradient-to-r from-red-500 to-pink-500",
      description:
        "We actively scout and connect you with the right creators, whether it’s through paid collaborations or barter partnerships.",
    },
    {
      title: "Brand Ambassador Program",
      defaultImg: "/service/BRAND-AMBASSADOR-1.png",
      activeColor: "bg-gradient-to-r from-teal-400 to-green-400",
      description:
        "We build long term influencer partnerships that grow into genuine brand advocacy and trust.",
    },
    {
      title: "Campaign Analytics & Reporting",
      defaultImg: "/service/campagin-analytics.webp",
      activeColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      description:
        "We track real results with clear reporting so you know exactly how your brand performed and where it grew.",
    },
  ];

  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <section className="bg-black px-14 max-[432px]:px-6 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12">
          Services We Provide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative perspective-1000 cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`relative w-full h-[250px] transform transition-transform duration-700 ${
                  flippedIndex === index ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full bg-black text-white rounded-3xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                  }}
                >
                  <Image
                    src={service.defaultImg}
                    alt={service.title}
                    fill
                    className="object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
                    <h3 className="text-xl font-bold leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className={`absolute w-full h-full flex items-center justify-center rounded-3xl text-center p-6 ${service.activeColor}`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-lg">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
