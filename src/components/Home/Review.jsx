"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Cherry Lee",
    role: "Head Of Partnerships",
    company: "Hollyland Tech",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    star: 4,
    quote:
      "Simply put, we understand how to get business results from social. Our content-first offering is completely bespoke for each of our clients, with different industries, brands, objectives, audiences and influencers, there is no plug 'n' play opti",
  },
  {
    name: "Alex Johnson",
    role: "Marketing Director",
    company: "Innovate Media",
    image:
      "https://www.shutterstock.com/image-photo/portrait-mature-man-45-50-600nw-2089548508.jpg",
    star: 5,
    quote:
      "Our goal is to create impactful strategies that resonate with audiences. We leverage data-driven insights to craft campaigns that are both engaging and effective, tailored uniquely for each client.",
  },
  {
    name: "Samantha Chen",
    role: "Chief Creative Officer",
    company: "Bright Ideas Co.",
    image:
      "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?semt=ais_hybrid",
    star: 5,
    quote:
      "Creativity is about breaking boundaries, and at Bright Ideas, we go beyond traditional methods to spark inspiration. Every project is a fresh start, where we push to bring new perspectives and exciting outcomes.",
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
                  {testimonials[currentIndex].company}
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
                <div className="mt-2 flex">
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
