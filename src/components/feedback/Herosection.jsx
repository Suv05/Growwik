"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Herosection({}) {
  const reviewCardsRef = useRef(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  useEffect(() => {
    if (reviewCardsRef.current) {
      gsap.to(".review-card", {
        y: "random(-20, 20)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 1,
          from: "random",
        },
      });
    }
    // Load rating from localStorage on mount
    const storedRating = localStorage.getItem("userRating");
    if (storedRating) {
      setSelectedRating(parseInt(storedRating, 10));
    }
  }, []);

  useEffect(() => {
    // Save rating to localStorage whenever it changes
    if (selectedRating > 0) {
      localStorage.setItem("userRating", selectedRating.toString());
    }
  }, [selectedRating]);

  const starVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, rotate: 180 },
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleStarHover = (rating) => {
    setHoveredRating(rating);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const getStarColor = (starIndex) => {
    if (selectedRating >= starIndex || hoveredRating >= starIndex) {
      return "text-yellow-400";
    }
    return "text-gray-400";
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold">
                Rating and Reviews
              </h1>
              <p className="text-gray-400 text-lg">
                Worked with Us? Share your thought!
              </p>
            </div>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  variants={starVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ duration: 0.2, delay: star * 0.1 }}
                  className={`${getStarColor(star)} transition-colors`}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => handleStarHover(star)}
                  onMouseLeave={handleStarLeave}
                >
                  <Star className="w-8 h-8 stroke-[1.5]" />
                </motion.button>
              ))}
            </div>

            <button className="text-yellow-400 hover:text-yellow-300 text-lg font-medium transition-colors">
              Write a review
            </button>

            <div className="space-y-2">
              <div className="text-6xl sm:text-7xl font-bold">4.2</div>
              <div className="text-gray-400">17 Reviews</div>
            </div>
          </div>

          <div ref={reviewCardsRef} className="relative h-[500px]">
            <Image
              src="/Rating and Reviews.svg"
              alt="Reviews illustration"
              width={700}
              height={600}
              className="w-full h-full object-contain"
            />

            {[1, 2, 3].map((card, index) => (
              <motion.div
                key={card}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`review-card absolute bg-gray-800 rounded-lg p-4 w-48 ${
                  index === 0
                    ? "top-12 right-12"
                    : index === 1
                    ? "top-1/2 right-24"
                    : "bottom-12 right-16"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full" />
                  <div className="flex gap-1">
                    {Array(4)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-green-500 text-green-500"
                        />
                      ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-600 rounded w-3/4" />
                  <div className="h-2 bg-gray-600 rounded w-full" />
                  <div className="h-2 bg-gray-600 rounded w-2/3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;