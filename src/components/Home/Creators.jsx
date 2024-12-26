import { FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

function Creators() {
  const creators = [
    {
      id: "@creator_001",
      image:
        "https://plus.unsplash.com/premium_photo-1674389878102-fe66cd2bc29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNyZWF0b3JzfGVufDB8fDB8fHww",
    },
    {
      id: "@creator_002",
      image:
        "https://images.unsplash.com/photo-1581368076903-c20fee986735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNyZWF0b3JzfGVufDB8fDB8fHww",
    },
    {
      id: "@creator_003",
      image:
        "https://images.unsplash.com/photo-1581368039520-576f51440580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3JlYXRvcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "@creator_004",
      image:
        "https://plus.unsplash.com/premium_photo-1677171381845-c6627ed5d2ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNyZWF0b3JzfGVufDB8fDB8fHww",
    },
    {
      id: "@creator_005",
      image:
        "https://images.unsplash.com/photo-1581368129682-e2d66324045b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNyZWF0b3JzfGVufDB8fDB8fHww",
    },
    {
      id: "@creator_006",
      image:
        "https://images.unsplash.com/photo-1581368129682-e2d66324045b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNyZWF0b3JzfGVufDB8fDB8fHww",
    },
    {
      id: "@creator_006",
      image:
        "https://images.unsplash.com/photo-1581368129682-e2d66324045b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNyZWF0b3JzfGVufDB8fDB8fHww",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleCreators = showAll ? creators : creators.slice(0, 5);

  return (
    <section className="bg-black text-white px-14 max-[432px]:px-6 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12">
          Creators we have
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {visibleCreators.map((creator, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              {/* Circular Image Container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <div className="absolute inset-0 rounded-full border-4 border-white">
                  <Image
                    src={creator.image}
                    alt={`Creator ${index + 1}`}
                    fill
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Creator ID */}
              <p className="text-lg font-medium">{creator.id}</p>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
                <FaYoutube className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Explore More / Show Less Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors"
          >
            {showAll ? "Show Less" : "Explore More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Creators;
