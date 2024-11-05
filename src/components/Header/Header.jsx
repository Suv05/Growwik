"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScroll } from "@/lib/ScrollContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScroll();

  const navItems = [
    { label: "Home", section: null },
    { label: "About Us", section: "aboutUs" },
    { label: "Our Services", section: "servicePage" },
    { label: "Brands", section: "ourClients" },
    { label: "Contact Us", section: "contactForm" },
    { label: "Blogs", section: null },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleNavClick = (section) => {
    if (section) {
      scrollToSection(section);
    }
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black py-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/Agency-Logo-(Tag).png"
                alt="Growwik Logo"
                width={150}
                height={50}
                className="h-20 w-28"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.section ? (
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="button-underline"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.label === "Blogs" ? "/blogs" : "/"}
                      className="button-underline"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* ASCI Member */}
          <div className="hidden xl:flex items-center space-x-2">
            <span className="text-white">MEMBER OF</span>
            <Image
              src="/ASCI-Logo.png"
              alt="ASCI Logo"
              width={80}
              height={30}
              className="h-14 w-20"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden ${isMobileMenuOpen ? "block" : "hidden"} mt-4`}
        >
          <nav>
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.section ? (
                    <button
                      onClick={() => handleNavClick(item.section)}
                      className="button-underline"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.label === "Blogs" ? "/blogs" : "/"}
                      className="button-underline"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex items-center space-x-2">
            <span className="text-white">MEMBER OF</span>
            <Image
              src="/ASCI-Logo.png"
              alt="ASCI Logo"
              width={80}
              height={30}
              className="h-14 w-20"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
