"use client";
import { useRef, useEffect } from "react";

export default function LatestWorks() {
  const scrollRef = useRef(null);

  const videos = [
    { id: 1, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
    { id: 2, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
    { id: 3, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
    { id: 4, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
    { id: 5, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
    { id: 6, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
    { id: 7, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
    { id: 8, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
    { id: 9, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
    { id: 10, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
    { id: 11, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
    { id: 12, src: "/video/1.mp4", logo: "/logos/Maono.svg", brand: "Jockey" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollInterval = setInterval(() => {
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      // Check if the scroll is at the end
      if (scrollContainer.scrollLeft >= maxScrollLeft) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" }); // Adjust 300px to the width of one card
      }
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, []);

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

  return (
    <div className="bg-black px-14 max-[432px]:px-6 py-16 relative overflow-hidden ">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12">Our Latest Work</h2>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide "
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[300px] h-[500px] rounded-xl overflow-hidden shadow-lg"
            >
              <video
                className="w-full h-full object-cover"
                src={video.src}
                autoPlay
                muted
                loop
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
