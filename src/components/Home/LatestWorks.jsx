"use client";
import { useRef, useEffect, useState } from "react";

export default function LatestWorks() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const videos = [
    { id: 1, src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/1.mp4?alt=media&token=86e643a5-fdbf-489c-9375-45bdd7798b00", logo: "/logos/Maono.svg" },
    { id: 2, src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/2.mp4?alt=media&token=b2fe76d9-b5bc-4cdf-8824-aa5b1a95b6cb", logo: "/logos/Maono.svg" },
    { id: 3, src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/3.mp4?alt=media&token=320a5e8f-c7a9-4819-ab34-602c3748f169", logo: "/logos/Maono.svg" },
    { id: 4, src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/4.mp4?alt=media&token=e1e377a5-dc47-41e8-87eb-de6ed80c6cba", logo: "/logos/Maono.svg" },
    { id: 5, src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/5.mp4?alt=media&token=37c265ad-7214-4998-bbc1-4d5034d11e0d", logo: "/logos/Maono.svg" },
    { id: 6, src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/6.mp4?alt=media&token=e68baaa3-b407-45f6-bc51-890e9c7b0a42", logo: "/logos/Maono.svg" },
    { id: 7, src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/7.mp4?alt=media&token=ba0ce644-149c-4bc9-9edf-64422ac99a14", logo: "/logos/Maono.svg" },
    { id: 8, src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/8.mp4?alt=media&token=c6cd4039-6dba-4c9a-8868-6f4290b4fed8", logo: "/logos/Maono.svg" },
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
