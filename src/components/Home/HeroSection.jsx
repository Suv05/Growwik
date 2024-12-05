import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "./animated-text";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Illusion-Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)]">
          {/* Left Column: Logo and Buttons */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left mb-8"
            >
              <Image
                src="/Logo-with-tag.svg"
                alt="Growwik Logo"
                width={300}
                height={150}
                className="mb-8"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/brand"
                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-lg sm:text-xl text-center"
              >
                I&apos;m a Brand
              </Link>
              <Link
                href="/influencer"
                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-lg sm:text-xl text-center"
              >
                I&apos;m an Influencer
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Animated Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:w-1/2 text-white max-[1028px]:hidden"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <AnimatedText text="FASTEST GROWING INFLUENCER MARKETING AGENCY" />
            </h2>
            <AnimatedText text="We're a global influencer marketing agency, powered by influencers. We pride ourselves in bringing together data-led performance, real human relationships, expert creative strategy, authentic engaging content, and laser-sharp paid media targeting." />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
