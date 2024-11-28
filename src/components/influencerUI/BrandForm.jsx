"use client";

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
import {
  Smile,
  Globe2,
  Cog,
  Brain,
  Gamepad2,
  Bike,
  TrendingUp,
  Music2,
  Utensils,
} from "lucide-react";

const platforms = [
  {
    id: "instagram",
    name: "Instagram",
    icon: <FaInstagram size={35} />,
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: <FaYoutube size={35} />,
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: <FaSnapchat size={35} />,
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: <FaFacebook size={35} />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: <FaLinkedin size={35} />,
  },
];

const genres = [
  {
    id: "beauty",
    name: "Beauty & Fashion",
    icon: <Smile className="w-8 h-8" />,
  },
  {
    id: "entertainment",
    name: "Entertainment & Comedy",
    icon: <Smile className="w-8 h-8" />,
    gradient: true,
  },
  {
    id: "travel",
    name: "Travel",
    icon: <Globe2 className="w-8 h-8" />,
  },
  {
    id: "tech",
    name: "Technology",
    icon: <Cog className="w-8 h-8" />,
  },
  {
    id: "wellness",
    name: "Wellness",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: <Gamepad2 className="w-8 h-8" />,
  },
  {
    id: "fitness",
    name: "Fitness",
    icon: <Bike className="w-8 h-8" />,
  },
  {
    id: "business",
    name: "Business",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    id: "music",
    name: "Music",
    icon: <Music2 className="w-8 h-8" />,
  },
  {
    id: "food",
    name: "Food",
    icon: <Utensils className="w-8 h-8" />,
  },
];

export default function BrandForm() {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("entertainment");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log({ ...data, platform: selectedPlatform, genre: selectedGenre });
  };

  return (
    <div className="bg-black p-8 text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-4 space-y-12"
      >
        {/* Name Input */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-wider">YOUR NAME:</h2>
          <div className="relative">
            <input
              {...register("name")}
              type="text"
              placeholder="Enter Your Name"
              className="w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-lg focus:outline-none focus:border-gray-400 placeholder-gray-600"
            />
          </div>
        </div>

        {/* Platform Selection */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-wider">
            SELECT INFLUENCER MARKETING PLATFORM:
          </h2>
          <div className="flex gap-4">
            {platforms.map((platform) => (
              <motion.button
                key={platform.id}
                type="button"
                onClick={() => setSelectedPlatform(platform.id)}
                className={`
                  flex items-center justify-center w-44 h-24 rounded-xl
                  ${
                    platform.id === selectedPlatform ||
                    (platform.id === "youtube" && !selectedPlatform)
                      ? "bg-red-500"
                      : "bg-gray-700"
                  }
                  transition-colors duration-200
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {platform.icon}
                <span className="sr-only">{platform.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Social Handles */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-wider">Social Handles:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <input
                {...register("instaId")}
                type="text"
                placeholder="Enter Your Insta id"
                className="w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-lg focus:outline-none focus:border-gray-400 placeholder-gray-600"
              />
            </div>
            <div className="relative">
              <input
                {...register("youtubeId")}
                type="text"
                placeholder="Enter Your Youtube id"
                className="w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-lg focus:outline-none focus:border-gray-400 placeholder-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Followers/Subscribers Count */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-wider">
            Followers/Subscribers Count:
          </h2>
          <div className="relative">
            <input
              {...register("followersCount")}
              type="text"
              placeholder="Write in Numbers only"
              className="w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-lg focus:outline-none focus:border-gray-400 placeholder-gray-600"
            />
          </div>
        </div>

        {/* Genre Selection */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-wider">Genre:</h2>
          <div className="grid grid-cols-5 gap-4">
            {genres.map((genre) => (
              <motion.button
                key={genre.id}
                type="button"
                onClick={() => setSelectedGenre(genre.id)}
                className={`
                  flex items-center justify-center p-6 rounded-xl
                  ${
                    genre.id === selectedGenre
                      ? genre.gradient
                        ? "bg-gradient-to-br from-purple-500 to-orange-500"
                        : "bg-purple-500"
                      : "bg-gray-700"
                  }
                  transition-colors duration-200
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {genre.icon}
                {genre.gradient && (
                  <span className="absolute bottom-2 text-[10px] text-center leading-tight">
                    Entertainment & Comedy
                  </span>
                )}
                <span className="sr-only">{genre.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-wider">
            Enter Contact Number/Email Id:
          </h2>
          <div className="relative">
            <input
              {...register("contact", {
                required: true,
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$|^\d{10}$/,
                  message: "Please enter a valid email or phone number",
                },
              })}
              type="text"
              placeholder="Enter Contact details"
              className="w-full bg-transparent border-b-2 border-[#ffffff] pb-2 text-lg focus:outline-none focus:border-gray-400 placeholder-gray-600"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <motion.button
            type="submit"
            className="bg-white text-black px-12 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
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
