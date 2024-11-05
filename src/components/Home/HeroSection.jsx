import Image from "next/image";
import Link from "next/link";
import { FiMessageCircle } from "react-icons/fi";

export default function HeroSection() {
  return (
    <>
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
        <div className="relative z-10 container mx-auto px-4 pt-16 md:pt-20">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] space-y-6">
            {/* Logo and Text */}
            <div className="text-center">
              <Image
                src="/Agency-Logo-(Tag).png"
                alt="Growwik Logo"
                width={300} // Adjusted for mobile
                height={150} // Adjusted for mobile
                className="mx-auto mb-4" // Adjusted margin
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/brand"
                className="bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-lg sm:text-xl"
              >
                I&apos;m Brand
              </Link>
              <Link
                href="/influencer"
                className="bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-lg sm:text-xl"
              >
                I&apos;m Influencer
              </Link>
            </div>
          </div>
        </div>

        {/* Fixed WhatsApp Button */}
        <Link
          href="https://wa.me/your-whatsapp-number"
          className="fixed bottom-8 right-8 z-50 bg-[#222222] text-white p-4 rounded-2xl hover:bg-gray-800 transition-colors duration-300"
          aria-label="Contact us on WhatsApp"
        >
          <FiMessageCircle className="w-6 h-6" />
        </Link>
      </div>
    </>
  );
}
