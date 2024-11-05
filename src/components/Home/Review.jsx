"use client";

import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Cherry Lee",
    role: "Head Of Partnerships",
    company: "Hollyland Tech",
    image:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21pbGluZyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    quote:
      "Simply put, we understand how to get business results from social. Our content-first offering is completely bespoke for each of our clients, with different industries, brands, objectives, audiences and influencers, there is no plug 'n' play opti",
  },
  {
    name: "Alex Johnson",
    role: "Marketing Director",
    company: "Innovate Media",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtaWxpbmclMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
    quote:
      "Our goal is to create impactful strategies that resonate with audiences. We leverage data-driven insights to craft campaigns that are both engaging and effective, tailored uniquely for each client.",
  },
  {
    name: "Samantha Chen",
    role: "Chief Creative Officer",
    company: "Bright Ideas Co.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtaWxpbmclMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
    quote:
      "Creativity is about breaking boundaries, and at Bright Ideas, we go beyond traditional methods to spark inspiration. Every project is a fresh start, where we push to bring new perspectives and exciting outcomes.",
  },
  // Add more testimonials as needed
];

export default function Review() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Automatically transition to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-16">
        Whats our clients says?
      </h1>

      <div className="relative w-full max-w-4xl">
        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
          onClick={prevSlide}
        >
          <AiOutlineLeft className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
          onClick={nextSlide}
        >
          <AiOutlineRight className="h-8 w-8" />
        </Button>

        {/* Testimonial Card with smooth-slide class */}
        <div className="bg-white rounded-3xl p-6 md:p-8 relative smooth-slide">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#ACFF33]">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold">
                {testimonials[currentSlide].name}
              </h3>
              <p className="text-xl font-semibold">
                {testimonials[currentSlide].role}
              </p>
              <p className="text-xl font-bold mb-4">
                {testimonials[currentSlide].company}
              </p>
              <p className="text-red-500 text-lg leading-relaxed">
                {testimonials[currentSlide].quote}
              </p>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
