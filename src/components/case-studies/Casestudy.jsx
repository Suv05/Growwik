"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: "luma-ai",
    image: "/ai-img.avif",
    title: "See how",
    company: "Luma AI",
    description: "transformed their digital marketing with us.",
  },
  {
    id: "maono",
    image: "/ai-img.avif",
    title: "See how",
    company: "Luma AI",
    description: "transformed their digital marketing with us.",
  },
  {
    id: "cosmos",  
    image: "/ai-img.avif",
    title: "See how",
    company: "Luma AI",
    description: "transformed their digital marketing with us.",
  },
  {
    id: "retiva",
    image: "/ai-img.avif",
    title: "See how",
    company: "Luma AI",
    description: "transformed their digital marketing with us.",
  },
];



export default function CaseStudy() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white overflow-hidden"
      style={{
        backgroundImage: "url('/our-service.png')",
      }}
    >
      <div className="min-h-screen backdrop-blur-sm">
        {/* Main Content */}
        <main className="pt-32 px-6 max-w-7xl mx-auto backdrop-blur-sm">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl font-bold mb-12 text-center"
          >
            Case Studies
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm shadow-xl"
              >
                <Link href={`/case-study/${study.id}`}>
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={study.image}
                      alt={`${study.company} case study`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-lg text-gray-300">{study.title}</p>
                    <h2 className="text-3xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                      {study.company}
                    </h2>
                    <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
                      {study.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
