import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

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
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="flex flex-col items-center md:items-start justify-center min-h-[calc(100vh-80px)]">
          {/* Logo and Text */}
          <div className="text-center md:text-left">
            <Image
              src="/Agency-Logo-(Tag).png"
              alt="Growwik Logo"
              width={500}
              height={250}
              className="mx-auto md:mx-0 mb-2" // Reduced bottom margin
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 ml-7 mb-5">
            <Link
              href="/brand"
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-xl"
            >
              I'm brand
            </Link>
            <Link
              href="/influencer"
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-xl font-bold"
            >
              I'm Influencer
            </Link>
          </div>
        </div>
      </div>

      {/* Fixed WhatsApp Button */}
      <Link
        href="https://wa.me/your-whatsapp-number"
        className="fixed bottom-8 right-8 z-50 bg-[#222222] text-white p-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </Link>
    </div>
    {/* <hr className="border-gray-400 w-auto mx-auto"/> */}
    </>
  );
}
