'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="bg-black text-white px-4 py-16 md:px-8 lg:px-16 overflow-hidden">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h1
          className="text-white text-4xl font-bold mb-12"
          variants={itemVariants}
        >
          What We Do
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-8"
          variants={itemVariants}
        >
          Simply put, we understand how to get business results from social.
          Our content-first offering is completely bespoke for each of our
          clients, with different industries, brands, objectives, audiences
          and influencers, there is no plug &apos;n&apos; play option or
          corner cutting platform. With that in mind, we delve into our years
          of performance data and the latest cultural trends and insights to
          develop the most effective social creative strategies and campaigns
          that deliver industry-leading results for our clients.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.button
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read more
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutUs

