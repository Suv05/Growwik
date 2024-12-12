'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function Lumaai() {
  const statsRef = useRef(null)

  useEffect(() => {
    // GSAP animation for stats
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/5194072.jpg"
          alt="Luma AI Banner"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Luma AI
            <span className="text-purple-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-300">
            Revolutionizing 3D content creation with Neural Radiance Fields (NeRF) technology
          </p>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">About Luma AI</h2>
            <p className="text-gray-300 mb-6">
              Founded in 2021, Luma AI focuses on AI-powered 3D content creation using Neural Radiance Fields (NeRF) technology, catering to industries like architecture, product design, and digital art.
            </p>
            <div className="space-y-4">
              {['Enhance brand visibility', 'Expand user base', 'Highlight cutting-edge capabilities'].map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400">
                    Goal {index + 1}
                  </Badge>
                  <span>{goal}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">Priorities</h3>
              <p className="text-gray-300">
                Advancing immersive 3D experiences and making professional-grade tools accessible to content creators and businesses.
              </p>
            </Card>
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">Challenges</h3>
              <p className="text-gray-300">
                Standing out in a competitive AI market, showcasing innovative features, and expanding their user base with organic growth.
              </p>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">100M+</h3>
              <p className="text-gray-300 mt-2">Total Reach</p>
            </div>
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">400K</h3>
              <p className="text-gray-300 mt-2">App Downloads</p>
            </div>
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">100K</h3>
              <p className="text-gray-300 mt-2">Follower Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Approach Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Campaign Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">Collaboration</h3>
              <p className="text-gray-300">
                Partnered with Growwik Media to execute an influencer marketing campaign.
              </p>
            </Card>
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">Strategy</h3>
              <p className="text-gray-300">
                Collaborated with 45+ influencers across niches like technology, food, travel, and content creation.
              </p>
            </Card>
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">Execution</h3>
              <p className="text-gray-300">
                Influencers utilized Luma&apos;s keyframe features to create immersive content, such as drone-like shots and interactive 3D models.
              </p>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* High-Profile Collaborations Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">High-Profile Collaborations</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="p-6 bg-black/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">CSK Team</h3>
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.instagram.com/reel/C5gpEcCS3je/embed"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                  />
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Posts Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Key Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { influencer: "Nayan Shelke", post_reach: "16M+", post_url: "https://www.instagram.com/reel/CzLN8uFLy8T/" },
              { influencer: "Tejas Gowda", post_reach: "6M+", post_url: "https://www.instagram.com/reel/C1yhRo7PWLb/" }
            ].map((post, index) => (
              <Card key={index} className="p-6 bg-zinc-900/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-2 text-[#FFB200]">{post.influencer}</h3>
                <p className="text-gray-300 mb-4">Reach: {post.post_reach}</p>
                <a
                  href={post.post_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Post <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Videos Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Top Performing Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "https://www.instagram.com/reel/CzLN8uFLy8T/",
            "https://www.instagram.com/reel/C365LH-pzcR/",
            "https://www.instagram.com/reel/C2jbLLFRvfP/",
            "https://www.instagram.com/reel/C01IX-4LeUH/",
            "https://www.instagram.com/reel/C4NFRijRBOt/"
          ].map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-[9/16] relative"
            >
              <iframe
                src={`${url}embed`}
                className="absolute inset-0 w-full h-full rounded-lg"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Takeaways Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
            <p className="text-gray-300 text-lg">
              The campaign demonstrated the impact of strategic partnerships and authentic influencer content in amplifying brand awareness and driving substantial user engagement without paid advertising.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-zinc-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Want to Know More About This Case Study?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact our team to get more details on how we can help you
              achieve similar results for your brand.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Lumaai

