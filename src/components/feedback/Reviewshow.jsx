"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronDown, ChevronUp, Quote } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Update the StarRating component to handle numeric ratings
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

// Update the ReviewCard component to include the date
const ReviewCard = ({ review }) => {
  const cardRef = useRef(null);

  // Format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <Card
      ref={cardRef}
      className="h-full bg-gray-900 border-gray-800 overflow-hidden"
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-primary/20">
              <AvatarImage
                src={`/USER.jpg`}
                alt={review.name || "Anonymous User"}
              />
              <AvatarFallback className="bg-primary/10 text-primary">
                {review.isAnonymous
                  ? "AN"
                  : review.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-white">
                {review.isAnonymous ? "Anonymous" : review.name}
              </h3>
              <p className="text-xs text-gray-400 capitalize">
                {review.role} {review.brandName ? `${review.brandName}` : ""}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <Quote className="h-6 w-6 text-primary/40" />
            {review.createdAt && (
              <time className="text-xs text-gray-500 mt-1">
                {formatDate(review.createdAt)}
              </time>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-gray-300 text-sm line-clamp-4">{review.review}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 pt-0">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400">Satisfaction</span>
            <StarRating rating={review.satisfaction} />
          </div>
          {review.recommendationLikelihood && (
            <Badge
              variant="outline"
              className="bg-yellow-200 text-yellow-800 border-yellow-300"
            >
              {review.recommendationLikelihood}/10 would recommend
            </Badge>
          )}
        </div>
        {review.metExpectations && (
          <Badge variant="secondary" className="mt-1">
            {review.metExpectations === "Yes"
              ? "Met expectations"
              : "Did not meet expectations"}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};

function ReviewShow({ limitReviews, allReviews }) {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);

  const displayedReviews = showAll ? allReviews : limitReviews; // Use allReviews when showAll is true

  useEffect(() => {
    // Initialize GSAP animations
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll(".review-heading *"),
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }
  }, []);

  console.log("allReviews", allReviews);

  return (
    <div
      className="w-full bg-gray-950 py-16 px-4 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="review-heading text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about their experience working with us.
          </p>
        </div>

        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={false}
          >
            {displayedReviews &&
              displayedReviews.map((review) => (
                <motion.div
                  key={review._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <ReviewCard review={review} />
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {allReviews && allReviews.length > 3 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="bg-gray-900 border-gray-700 hover:bg-gray-800 text-white group"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Show All Reviews
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ReviewShow;
