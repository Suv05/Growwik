"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FaInstagram,
  FaYoutube,
  FaSnapchat,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import ContentCreators from "./content-creators";

const platforms = [
  {
    id: "instagram",
    name: "Instagram",
    icon: <FaInstagram size={35} />,
    activeColor: "linear-gradient(to right, #F58529, #DD2A7B, #515BD4)",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: <FaYoutube size={35} />,
    activeColor: "linear-gradient(to right, #FF0000, #C4302B)",
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: <FaSnapchat size={35} />,
    activeColor: "linear-gradient(to right, #f7ff00, #ffe600)",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: <FaFacebook size={35} />,
    activeColor: "linear-gradient(to right, #1877F2, #3b5998)",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: <FaLinkedin size={35} />,
    activeColor: "linear-gradient(to right, #007bb5, #0077b5)",
  },
  {
    id: "x",
    name: "X",
    icon: <FaXTwitter size={35} />,
    activeColor: "linear-gradient(to right, #1d9bf0, #1da1f2)",
  },
];

const objectives = [
  "Generate Sales",
  "Website Traffic",
  "App Downloads",
  "Brand awareness",
  "Content creation",
  "Local Store visits",
];

const genres = [
  {
    id: "beauty",
    name: "Beauty & Fashion",
    icon: "/geners/make-up.png",
  },
  {
    id: "entertainment",
    name: "Entertainment & Comedy",
    icon: "/geners/video.png",
  },
  {
    id: "travel",
    name: "Travel",
    icon: "/geners/world.png",
  },
  {
    id: "tech",
    name: "Technology",
    icon: "/geners/project-management.png",
  },
  {
    id: "wellness",
    name: "Motivational",
    icon: "/geners/motivation.png",
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: "/geners/console.png",
  },
  {
    id: "fitness",
    name: "Health & Fitness",
    icon: "/geners/dumbbell.png",
  },
  {
    id: "business",
    name: "Business & Finance",
    icon: "/geners/business-and-finance.png",
  },
  {
    id: "music",
    name: "Music",
    icon: "/geners/wave-sound.png",
  },
  {
    id: "food",
    name: "Food",
    icon: "/geners/fast-food.png",
  },
];

function Influencer() {
  const { register, handleSubmit } = useForm();
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [hoveredPlatform, setHoveredPlatform] = useState("");
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [hoveredCampaign, setHoveredCampaign] = useState("");
  const [hoveredGenre, setHoveredGenre] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const onSubmit = (data) => {
    console.log({ ...data });
  };

  return (
    <>
      <div className="bg-black bg-[url('/marketing-bg.png')] bg-cover bg-center bg-no-repeat text-white p-8 min-[810px]:px-20 mt-20 lg:mt-24">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* content section */}
        <div className="space-y-12 relative z-10">
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We&apos;re thrilled to have you with us. Please share the details of
            your brief and someone from our team will get in touch with you
            shortly.
          </motion.h1>

          {/* Animated Arrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="mt-12 flex justify-start max-[810px]:justify-center"
          >
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="48"
                height="120"
                viewBox="0 0 48 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M24 0L24 116M24 116L44 96M24 116L4 96"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* input section */}
          <div className="space-y-12 bg-[#3e3e3e]/30 backdrop-blur-sm rounded-xl px-4 py-10">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <label className="text-2xl font-light block">Brand Name:</label>
              <Input
                name="brandName"
                placeholder="Enter your brand name"
                className="bg-transparent border-b border-t-0 border-x-0 rounded-none text-lg placeholder:text-gray-500 focus-visible:ring-0 focus-visible:border-white"
              />
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <label className="text-2xl font-light block">
                Describe your campaign:
              </label>
              <Textarea
                name="campaign"
                placeholder="Describe your campaign"
                className="bg-transparent border-b border-t-0 border-x-0 rounded-none text-lg placeholder:text-gray-500 focus-visible:ring-0 focus-visible:border-white resize-none min-h-[100px]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* here the form UI starts from */}
      <div className="bg-black min-[810px]:px-20 text-white p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="mx-4 space-y-40">
          {/* Platform Selection */}
          <div className="space-y-16">
            <h2 className="text-3xl max-[680px]:text-xl font-bold tracking-wider">
              SELECT INFLUENCER MARKETING PLATFORMS
            </h2>
            <div
              className="grid gap-6 
            max-[340px]:grid-cols-1
               max-[680px]:grid-cols-2
               max-[1022px]:grid-cols-3 
               lg:grid-cols-5 
               mx-auto justify-items-center"
            >
              {platforms.map((platform) => (
                <motion.button
                  key={platform.id}
                  type="button"
                  onClick={() => setSelectedPlatform(platform.id)}
                  onHoverStart={() => setHoveredPlatform(platform.id)}
                  onHoverEnd={() => setHoveredPlatform("")}
                  className={`flex flex-col items-center justify-center 
                    w-32 h-32 rounded-lg text-white
                    ${
                      platform.id === selectedPlatform
                        ? "text-white"
                        : "text-gray-200"
                    }
                    transition-transform duration-200 hover:scale-105 active:scale-95`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background:
                      platform.id === selectedPlatform ||
                      platform.id === hoveredPlatform
                        ? platform.activeColor
                        : "#3e3e3e",
                  }}
                >
                  {platform.icon}
                  <span className="mt-2 text-sm font-medium">
                    {platform.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
          {/* KEY CAMPAIGN OBJECTIVES */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="text-3xl max-[680px]:text-xl font-bold tracking-wider mb-16">
              KEY CAMPAIGN OBJECTIVES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map((objective, index) => (
                <motion.button
                  key={objective}
                  type="button"
                  className={`p-4 rounded-full border border-white/20 hover:border-white/40 bg-black/20 backdrop-blur-sm transition-all duration-300  ${
                    index === selectedCampaign ? "text-black" : "text-white"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  onClick={() => setSelectedCampaign(index)}
                  // onHoverStart={() => setHoveredCampaign(index)}
                  // onHoverEnd={() => setHoveredCampaign("")}
                  style={{
                    background:
                      index === selectedCampaign ? "#ffffff" : "bg-black/20",
                  }}
                >
                  <span className="text-xl font-light">{objective}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* DISCOVER YOUR CONTENT CREATORS */}
          <ContentCreators />

          {/* INDUSTRY */}
          <div className="space-y-16">
            <h2 className="text-3xl max-[680px]:text-xl font-bold tracking-wider">
              INDUSTRY
            </h2>
            <div
              className="grid gap-6
            max-[340px]:grid-cols-1
               max-[680px]:grid-cols-2
               max-[1022px]:grid-cols-3 
               lg:grid-cols-5 
               mx-auto justify-items-center"
            >
              {genres.map((genre) => (
                <motion.button
                  key={genre.id}
                  type="button"
                  onClick={() => setSelectedGenre(genre.id)}
                  onMouseEnter={() => setHoveredGenre(genre.id)}
                  onMouseLeave={() => setHoveredGenre("")}
                  className={`
                  flex items-center justify-center p-4 rounded-xl
                  ${
                    genre.id === selectedGenre
                      ? genre.gradient
                        ? "bg-gradient-to-br from-purple-500 to-orange-500"
                        : "bg-purple-500"
                      : "bg-[#4E4E4E]"
                  }
                  transition-colors duration-200
                `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {hoveredGenre === genre.id ? (
                    <h3 className="text-white text-xl font-semibold">
                      {genre.name}
                    </h3>
                  ) : (
                    <Image
                      src={genre.icon}
                      alt={genre.name}
                      width={150}
                      height={100}
                      className="rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* A RELEVANT BUDGET IN YOUR MIND */}
          <div className="space-y-10">
            <h2 className="text-3xl max-[680px]:text-xl font-bold tracking-wider">
              A RELEVANT BUDGET IN YOUR MIND
            </h2>
            <div className="relative flex items-center border-b-2 border-[#ffffff] pb-2 focus-within:border-gray-400 max-w-3xl">
              <span className="text-gray-300 text-xl mr-4">
                {/* YouTube Icon */}
                <FaMoneyCheck size={25} />
              </span>
              <input
                {...register("followersCount")}
                type="text"
                placeholder="Write in Numbers only"
                className=" bg-transparent  focus:outline-none  placeholder-gray-300 font-light text-xl tracking-wider"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-xl font-extrabold mb-8 max-w-2xl tracking-wider">
              Kindly drop in your contact details so we can start working on
              building a concrete campaign for your Brand.{" "}
            </h3>
            <div className="mx-auto bg-[#323232] rounded-xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label
                    className="text-lg font-light tracking-wider pb-5"
                    htmlFor="email"
                  >
                    Email ID
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    type="text"
                    placeholder="xyz@gmail.com"
                    className="w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-xl focus:outline-none focus:border-gray-400 placeholder-gray-500 font-light"
                  />
                </div>
                <div className="relative">
                  <label
                    className="text-lg font-light tracking-wider pb-5"
                    htmlFor="phoneNo"
                  >
                    Your Contact Number
                  </label>
                  <input
                    {...register("phoneNo", {
                      required: true,
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    type="text"
                    placeholder="Mobile Number"
                    className="w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-xl focus:outline-none focus:border-gray-400 placeholder-gray-500 font-light"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="bg-white text-black px-12 py-3 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Influencer;
