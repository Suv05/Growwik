"use client";
import { useRef, useEffect, useState } from "react";

export default function LatestWorks() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const videos = [
    { id: 1, src: "/video/1.mp4", logo: "/logos/Maono.svg" },
    { id: 2, src: "/video/2.mp4", logo: "/logos/Maono.svg" },
    { id: 3, src: "/video/3.mp4", logo: "/logos/Maono.svg" },
    { id: 4, src: "/video/4.mp4", logo: "/logos/Maono.svg" },
    { id: 5, src: "/video/5.mp4", logo: "/logos/Maono.svg" },
    { id: 6, src: "/video/6.mp4", logo: "/logos/Maono.svg" },
    { id: 7, src: "/video/7.mp4", logo: "/logos/Maono.svg" },
    { id: 8, src: "/video/8.mp4", logo: "/logos/Maono.svg" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Interval function
    const scroll = () => {
      if (isPaused) return;

      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft >= maxScrollLeft) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" }); // Adjust 300px to match card width
      }
    };

    const scrollInterval = setInterval(scroll, 10000); // Auto-scroll every 5 seconds

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, [isPaused]); // React to `isPaused` state changes

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const slider = scrollRef.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 2; // Adjust scrolling speed
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  const handleMouseUp = () => {
    const slider = scrollRef.current;
    slider.isDown = false;
  };

  // Pause auto-scroll when interacting with a video
  const handleVideoInteraction = (isInteracting) => {
    setIsPaused(isInteracting);
  };

  return (
    <div className="bg-black px-14 max-[432px]:px-6 py-16 relative overflow-hidden">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12">Our Latest Work</h2>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[300px] h-[500px] rounded-3xl overflow-hidden shadow-lg"
            >
              <video
                className="w-full h-full object-cover"
                src={video.src}
                autoPlay
                muted
                loop
                onMouseEnter={() => handleVideoInteraction(true)} // Pause auto-scroll on hover
                onMouseLeave={() => handleVideoInteraction(false)} // Resume auto-scroll on hover exit
                onTouchStart={() => handleVideoInteraction(true)} // Pause auto-scroll on touch
                onTouchEnd={() => handleVideoInteraction(false)} // Resume auto-scroll on touch end
              ></video>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={video.logo}
                  alt={`Logo ${index}`}
                  className="h-20 w-20"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
