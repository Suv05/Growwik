"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Users, Eye, ThumbsUp, Globe, Target, TrendingUp } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

function Maono({}) {
    const statsRef = useRef(null)
    const resultsRef = useRef(null)
  
    useEffect(() => {
      // GSAP animation for stats
      gsap.from(statsRef.current, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top center',
          end: 'bottom center',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2
      })
  
      // GSAP animation for results
      gsap.from(resultsRef.current, {
        scrollTrigger: {
          trigger: resultsRef.current,
          start: 'top center',
          end: 'bottom center',
        },
        opacity: 0,
        x: -50,
        duration: 1
      })
    }, [])
  
    const fadeInUp = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    }
  
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative h-screen">
          <Image
            src="/header.jpg"
            alt="Maono Case Study Header"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-400">
                  Maono
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  Global leader in audio technology since 2014
                </p>
              </motion.div>
            </div>
          </div>
        </div>
  
        {/* Description Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="container mx-auto px-4">
            <motion.p {...fadeInUp} className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              Maono, founded in 2014, is a global leader in audio technology, specializing in microphones, sound cards, and headphones for content creators, podcasters, and professionals. Operating in over 153 countries, it focuses on innovative design and advanced technology to deliver high-quality audio solutions.
            </motion.p>
          </div>
        </motion.section>
  
        {/* Campaign Overview */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-amber-400">Campaign Overview</h2>
                <div className="space-y-6">
                  <Card className="p-6 bg-gray-800 border-none">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Globe className="text-amber-400" />
                      Influencer Partnerships
                    </h3>
                    <p className="text-gray-300">
                      Collaborated with 200+ influencers on YouTube and Instagram to showcase Maono&apos;s high-quality microphones and audio equipment.
                    </p>
                  </Card>
                  <Card className="p-6 bg-gray-800 border-none">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Target className="text-amber-400" />
                      Target Audience
                    </h3>
                    <p className="text-gray-300">
                      Content creators, Tech, Gaming, and video producers requiring top-notch audio equipment for their projects, focusing on markets in USA and Canada.
                    </p>
                  </Card>
                </div>
              </div>
  
              {/* Stats Section */}
              <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="p-6 bg-gray-800 border-none text-center">
                  <Users className="w-8 h-8 mb-4 mx-auto text-amber-400" />
                  <h4 className="text-3xl font-bold text-white mb-2">18.5M</h4>
                  <p className="text-gray-400">Total Reach</p>
                </Card>
                <Card className="p-6 bg-gray-800 border-none text-center">
                  <Eye className="w-8 h-8 mb-4 mx-auto text-amber-400" />
                  <h4 className="text-3xl font-bold text-white mb-2">32.4M</h4>
                  <p className="text-gray-400">Total Views</p>
                </Card>
                <Card className="p-6 bg-gray-800 border-none text-center">
                  <ThumbsUp className="w-8 h-8 mb-4 mx-auto text-amber-400" />
                  <h4 className="text-3xl font-bold text-white mb-2">1.25M</h4>
                  <p className="text-gray-400">Engagements</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
  
        {/* Campaign Videos */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-amber-400">Campaign Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "https://www.youtube.com/embed/8NrHzCm9jqw?si=jmyxg-kHM-z3zPH4",
                "https://www.youtube.com/embed/htAyMlthLGA?si=cHy_D3EFuF-fbHEJ"
              ].map((url, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="aspect-video">
                    <iframe
                      src={url}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Results Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              ref={resultsRef}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-12 text-amber-400">Results & Insights</h2>
              <div className="space-y-8">
                <Card className="p-6 bg-gray-800 border-none">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="text-amber-400" />
                    Increased Visibility
                  </h3>
                  <p className="text-gray-300">
                    The campaign generated over 32 million views, significantly boosting awareness for Maono&apos;s product lineup.
                  </p>
                </Card>
                <Card className="p-6 bg-gray-800 border-none">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <ThumbsUp className="text-amber-400" />
                    High Engagement
                  </h3>
                  <p className="text-gray-300">
                    The content resonated well with the audience, with over 1.2 million likes and comments on the influencer posts.
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
  
        {/* Influencer Highlights */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-amber-400">Influencer Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "ShortCircuit",
                  views: "10.5M",
                  likes: "500K",
                  description: "Product review video with over 500,000 likes."
                },
                {
                  name: "Tech Source",
                  views: "8.9M",
                  likes: "N/A",
                  description: "Tutorial video featuring Maono's microphones, generating high engagement and interest."
                },
                {
                  name: "Toasty bro",
                  views: "6.8M",
                  likes: "400K",
                  description: "Showcasing the use of Maono products in real-world content creation."
                }
              ].map((influencer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 bg-gray-800 border-none h-full">
                    <h3 className="text-xl font-bold mb-4 text-amber-400">{influencer.name}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-300">
                        <span className="font-semibold">Views:</span> {influencer.views}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-semibold">Likes:</span> {influencer.likes}
                      </p>
                    </div>
                    <p className="text-gray-400">{influencer.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
}

export default Maono;
