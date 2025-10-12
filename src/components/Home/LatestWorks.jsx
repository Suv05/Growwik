"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function LatestWorks() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const videos = [
    {
      id: 1,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/9New.mp4",
      logo: "/logos/Hollyland.svg",
    },
    {
      id: 2,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/11New.mp4",
      logo: "/logos/Voyage.svg",
    },
    {
      id: 3,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/7-converted.mp4",
      logo: "/logos/Maono.svg",
    },
    {
      id: 4,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/10New.mp4",
      logo: "/logos/Hollyland.svg",
    },
    {
      id: 5,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/12New.mp4",
      logo: "/logos/Revlon.png",
    },
    {
      id: 6,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/1-converted.mp4",
      logo: "/logos/Maono.svg",
    },
    {
      id: 7,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/2-converted.mp4",
      logo: "/logos/FlamApp.svg",
    },

    {
      id: 8,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/3-converted.mp4",
      logo: "/logos/Hangout-Hub.svg",
    },
    {
      id: 9,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/6-converted.mp4",
      logo: "/logos/Maono.svg",
    },
    {
      id: 10,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/4-converted.mp4",
      logo: "/logos/Punch-Trading.svg",
    },
    {
      id: 11,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/5-converted.mp4",
      logo: "/logos/Luma-AI.svg",
    },

    {
      id: 12,
      src: "https://9mz6bxf3klptyi9o.public.blob.vercel-storage.com/videos/8-converted.mp4",
      logo: "/logos/Maono.svg",
    },
  ];

  // Observe if the LatestWorks section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (isPaused || !isInView) return; // Scroll only when section is in view

      const nextIndex = (activeIndex + 1) % videos.length;
      setActiveIndex(nextIndex);

      // Scroll active video into view for small screens
      if (window.innerWidth <= 768) {
        const videoElements = scrollContainer.children;
        const activeVideo = videoElements[nextIndex];
        if (activeVideo) {
          activeVideo.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        }
      } else {
        // Default scroll behavior for larger devices
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (scrollContainer.scrollLeft >= maxScrollLeft) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    };

    const scrollInterval = setInterval(scroll, 10000);

    return () => clearInterval(scrollInterval);
  }, [isPaused, activeIndex, isInView]);

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
    const walk = (x - slider.startX) * 2;
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  const handleMouseUp = () => {
    const slider = scrollRef.current;
    slider.isDown = false;
  };

  const handleVideoInteraction = (isInteracting) => {
    setIsPaused(isInteracting);
  };

  return (
    <div className="relative overflow-hidden" ref={sectionRef}>
      {/* Gradient blending into the zebra illusion */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Black Section */}
      <div className="bg-black px-14 max-[432px]:px-6 py-16 relative z-20">
        <section className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-bold mb-12">
            Our Latest Work
          </h2>
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
                className={`relative flex-shrink-0 w-[300px] h-[500px] rounded-3xl overflow-hidden shadow-lg`}
              >
                <video
                  className="w-full h-full object-cover"
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  onMouseEnter={() => handleVideoInteraction(true)}
                  onMouseLeave={() => handleVideoInteraction(false)}
                  onTouchStart={() => handleVideoInteraction(true)}
                  onTouchEnd={() => handleVideoInteraction(false)}
                ></video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={video.logo}
                    alt={`Logo ${index}`}
                    width={20}
                    height={20}
                    className="h-24 w-32"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
