"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Link from "next/link";

export default function ThankYouPage() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-3xl w-full px-6 py-12 bg-[#17153B] rounded-2xl shadow-xl border border-gray-800">
        <div ref={textRef} className="text-center space-y-6 mb-12">
          <h1 className="text-4xl font-bold text-white">Thank You!</h1>
          <p className="text-xl text-gray-300">
            We&apos;ve received your campaign details and we&apos;re excited to work with
            you.
          </p>
          <p className="text-lg text-gray-400">
            Our team will be in touch with you soon to discuss the next steps.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <AnimatedButton href="/" label="Home" />
          <AnimatedButton href="/blog" label="Blog" />
          <AnimatedButton href="/case-studies" label="Case Studies" />
        </div>
      </div>
    </div>
  );
}

function AnimatedButton({ href, label }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-800 transition duration-300 ease-in-out"
      >
        {label}
      </Link>
    </motion.div>
  );
}
