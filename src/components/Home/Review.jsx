"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const testimonials = [
  {
    name: "Dala Chan",
    role: "Overseas marketing specilist",
    company: "Hollyland",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    star: 4.8,
    quote:
      "Working with Growwik Media was a fantastic experience. Their influencer marketing campaign for our Lark M2 and M2 Max products helped us connect with audiences in India, the US, and Canada in a meaningful way. The engagement we saw was remarkable, and their attention to detail made all the difference. We’re excited about what we achieved together and look forward to collaborating again soon!",
    site: "https://www.hollyland.com/",
  },
  {
    name: "Salabh Jaishwal",
    role: "founder's office",
    company: "Punch Trade",
    image:
      "https://www.shutterstock.com/image-photo/portrait-mature-man-45-50-600nw-2089548508.jpg",
    star: 4.7,
    quote:
      "The Growwik team transformed the way we approached our meme marketing campaign for Punch. Their creativity and innovative thinking normalized the product in the market, making it feel natural and relatable without coming across as promotional. Their work brought us visibility on par with brands like Zerodha, which is no small feat. It’s rare to find such a clever and impactful approach to marketing.",
    site: "https://www.punch.trade/",
  },
  {
    name: "Prabhakar Chaudhary",
    role: "Growth manager",
    company: "Flamapp AI",
    image:
      "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?semt=ais_hybrid",
    star: 4.9,
    quote:
      "Despite the challenge of a tight budget and a one-day campaign window, Growwik Media delivered beyond our expectations for Flamapp AI. Their ability to coordinate UGC influencers with our AR newspaper ads was nothing short of seamless. The campaign ran smoothly, achieving great results and showing their expertise in handling high-pressure projects with finesse.",
    site: "https://www.flamapp.ai/",
  },
  {
    name: "Christina Cyr",
    role: "Founder & CEO",
    company: "dTooR",
    image:
      "https://www.shutterstock.com/image-photo/portrait-mature-man-45-50-600nw-2089548508.jpg",
    star: 4.7,
    quote:
      "Our collaboration with Growwik Media on Cyrcle Phone’s marketing campaign was a game-changer. They skillfully used influencers and organic conversations to highlight the sustainable and modular design of our phone. Their thoughtful approach generated excitement and helped us reach a larger audience, significantly boosting interest in our eco-friendly product.",
    site: "https://www.cyrclephone.com/",
  },
  {
    name: "Barkley",
    role: "Growth and product",
    company: "Luma AI",
    image:
      "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?semt=ais_hybrid",
    star: 5,
    quote:
      "Partnering with Growwik Media for our Luma AI influencer campaign was a pivotal moment for us. They showcased the drone shoot feature in such a compelling way that even the CSK cricket team adopted it organically. The campaign didn’t just enhance visibility but established Luma AI as a trusted and recognized name in the market.",
    site: "https://lumalabs.ai/dream-machine/creations",
  },
  {
    name: "Vera Chan",
    role: "overseas marketing director",
    company: "Maono",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    star: 4.9,
    quote:
      "The influencer marketing campaign Growwik Media executed for Maono was a resounding success. Their focus on targeted engagement helped drive sales and created genuine excitement around the brand. Their strategy amplified our message and introduced us to new audiences in an impactful way. The results were truly exceptional.",
    site: "https://www.maono.com/",
  },
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black px-14 max-[432px]:px-6 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12">
          Whats our clients says?
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-[#363636] shadow-xl rounded-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={200}
                  height={200}
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  <Link href={testimonials[currentIndex].site}>
                    {testimonials[currentIndex].company}
                  </Link>
                </div>
                <p className="mt-2 text-white">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="mt-4">
                  <p className="text-lg font-semibold">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-white">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < testimonials[currentIndex].star
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-white ml-1">
                    {testimonials[currentIndex].star.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? "bg-indigo-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
