'use client'

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    name: "Cherry Lee",
    role: "Head Of Partnerships",
    company: "Hollyland Tech",
    image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21pbGluZyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    quote: "Simply put, we understand how to get business results from social. Our content-first offering is completely bespoke for each of our clients, with different industries, brands, objectives, audiences and influencers, there is no plug 'n' play opti",
  },
  {
    name: "Alex Johnson",
    role: "Marketing Director",
    company: "Innovate Media",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtaWxpbmclMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
    quote: "Our goal is to create impactful strategies that resonate with audiences. We leverage data-driven insights to craft campaigns that are both engaging and effective, tailored uniquely for each client.",
  },
  {
    name: "Samantha Chen",
    role: "Chief Creative Officer",
    company: "Bright Ideas Co.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtaWxpbmclMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
    quote: "Creativity is about breaking boundaries, and at Bright Ideas, we go beyond traditional methods to spark inspiration. Every project is a fresh start, where we push to bring new perspectives and exciting outcomes.",
  },
]

export default function Review() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-4xl md:text-6xl font-bold text-center mb-16"
        >
          What our clients say?
        </motion.h1>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/10 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/10 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Testimonials Slider */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-3xl p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#ACFF33] shadow-xl">
                      <Image
                        src={testimonials[currentSlide].image}
                        alt={testimonials[currentSlide].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex-1 space-y-4"
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {testimonials[currentSlide].name}
                      </h3>
                      <p className="text-xl md:text-2xl font-semibold text-gray-700">
                        {testimonials[currentSlide].role}
                      </p>
                      <p className="text-xl md:text-2xl font-bold text-[#ACFF33]">
                        {testimonials[currentSlide].company}
                      </p>
                    </div>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                      {testimonials[currentSlide].quote}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative p-2"
              >
                <span
                  className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-[#ACFF33]"
                      : "bg-white/50 group-hover:bg-white/75"
                  }`}
                />
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

