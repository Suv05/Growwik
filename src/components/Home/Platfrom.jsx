"use client"

import { useState } from "react";
import { FaInstagram,FaYoutube, FaSnapchat,FaTiktok,FaSquareThreads,FaFacebookF } from "react-icons/fa6";

function Platform({}) {
  const [activePlatform, setActivePlatform] = useState(null);

  const platforms = [
    {
      name: "Instagram",
      icon: <FaInstagram className="w-12 h-12" />,
      bgColor: "from-[#F58529] via-[#DD2A7B] to-[#515BD4] ...",
      defaultBg: "bg-gray-600",
      textColor: "text-white",
    },
    {
      name: "Youtube",
      icon: <FaYoutube className="w-12 h-12" />,
      bgColor: "from-[#FF0000] to-[#C4302B] ...",
      defaultBg: "bg-gray-600",
      textColor: "text-white",
    },
    {
      name: "Snapchat",
      icon:< FaSnapchat className="w-12 h-12" /> ,
      bgColor: "from-yellow-300 to-yellow-400",
      defaultBg: "bg-gray-600",
      textColor: "text-black",
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="w-12 h-12" />,
      bgColor: "from-[#00f2ea] to-[#ff0050] ...",
      defaultBg: "from-black via-gray-900 to-black",
      textColor: "text-white",
    },
    {
      name: "Instagram Reels",
      icon: <FaFacebookF className="w-12 h-12" />,
      bgColor: "from-[#1877F2] to-[#3b5998] ...",
      defaultBg: "bg-gray-600",
      textColor: "text-white",
    },
    {
      name: "Youtube Shorts",
      icon: <FaSquareThreads className="w-12 h-12" />,
      bgColor: "from-[#000000] via-[#1A1A1A] to-[#333333] ...",
      defaultBg: "bg-gray-600",
      textColor: "text-white",
    },
  ];

  return (
    <>
      <section
        className={`transition-colors duration-500 px-4 py-16 md:px-8 lg:px-16
      ${
        activePlatform
          ? `bg-gradient-to-r ${platforms[activePlatform].bgColor}`
          : "bg-black"
      }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16
          ${
            activePlatform ? platforms[activePlatform].textColor : "text-white"
          }`}
          >
            Platforms we used
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {platforms.map((platform, index) => (
              <div
                key={index}
                onClick={() => setActivePlatform(index)}
                className={`
                aspect-square
                ${
                  index === activePlatform
                    ? `bg-gradient-to-r ${platform.bgColor} shadow-xl`
                    : `${platform.defaultBg}`
                }
                rounded-3xl
                flex flex-col items-center justify-center
                cursor-pointer
                transition-all duration-300
                hover:scale-105
                relative
              `}
              >
                <div
                  className={`
                transition-colors duration-300
                ${index === activePlatform ? platform.textColor : "text-white"}
              `}
                >
                  {platform.icon}
                </div>

                {index === activePlatform && (
                  <div className="absolute -right-1 -bottom-1 w-6 h-6">
                    <div className="relative w-full h-full">
                      <div className="absolute rotate-45 border-4 border-white rounded-sm"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Platform;
