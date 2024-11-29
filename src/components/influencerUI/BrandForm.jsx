"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FaInstagram,
  FaYoutube,
  FaSnapchat,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import { SlUserFollow } from "react-icons/sl";

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

export default function BrandForm() {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [hoveredPlatform, setHoveredPlatform] = useState("");
  const [hoveredGenre, setHoveredGenre] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log({ ...data, platform: selectedPlatform, genre: selectedGenre });
  };

  return (
    <div className="bg-black min-[810px]:px-20 text-white p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-4 space-y-40">
        {/* Name Input */}
        <div className="space-y-8">
          <h2 className="max-[680px]:text-lg text-xl font-medium tracking-wider">
            YOUR NAME:
          </h2>
          <div className="relative">
            <input
              {...register("name")}
              type="text"
              placeholder="Enter Your Name"
              className=" mt-2 w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-2xl focus:outline-none focus:border-gray-400 placeholder-gray-300 font-normal max-w-3xl px-4"
            />
          </div>
        </div>

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

        {/* Social Handles */}
        <div className="space-y-10">
          <h2 className="text-3xl max-[680px]:text-xl font-bold tracking-wider">
            LINK TO YOUR KEY CHANNELS/ HANDLES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Instagram ID Input */}
            <div className="relative flex items-center border-b-2 border-[#ffffff] pb-2 focus-within:border-gray-400">
              <span className="text-gray-300 text-xl mr-4">
                {/* Instagram Icon */}
                <FaInstagram size={25} />
              </span>
              <input
                {...register("instaId")}
                type="text"
                placeholder="Enter your Instagram ID"
                className="w-full bg-transparent focus:outline-none placeholder-gray-300 font-light text-xl tracking-wider"
              />
            </div>

            {/* YouTube ID Input */}
            <div className="relative flex items-center border-b-2 border-[#ffffff] pb-2 focus-within:border-gray-400">
              <span className="text-gray-300 text-xl mr-4">
                {/* YouTube Icon */}
                <FaYoutube size={25} />
              </span>
              <input
                {...register("youtubeId")}
                type="text"
                placeholder="Enter your YouTube ID"
                className="w-full bg-transparent focus:outline-none placeholder-gray-300 font-light text-xl tracking-wider"
              />
            </div>
          </div>
        </div>

        {/* Followers/Subscribers Count */}
        <div className="space-y-10">
          <h2 className="text-3xl max-[680px]:text-xl font-bold tracking-wider">
            FOLLOWER / SUBSCRIBER COUNT
          </h2>
          <div className="relative flex items-center border-b-2 border-[#ffffff] pb-2 focus-within:border-gray-400">
            <span className="text-gray-300 text-xl mr-4">
              {/* YouTube Icon */}
              <SlUserFollow size={25} />
            </span>
            <input
              {...register("followersCount")}
              type="text"
              placeholder="Write in Numbers only"
              className="w-full bg-transparent  focus:outline-none  placeholder-gray-300 font-light text-xl tracking-wider"
            />
          </div>
        </div>

        {/* Genre Selection */}
        <div className="space-y-16">
          <h2 className="text-3xl max-[680px]:text-xl font-bold tracking-wider">
            GENRE
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

        {/* Contact Information */}
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
  );
}
