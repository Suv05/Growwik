"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScroll } from "@/lib/ScrollContext";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScroll();
  const router = useRouter();

  const navItems = [
    { label: "About Us", section: "aboutUs" },
    {
      label: "Our Services",
      section: "servicePage",
      sublinks: [
        { label: "BRAND", section: "/brand" },
        { label: "INFLUENCER", section: "/influencer" },
      ],
    },
    { label: "Case Study", section: null }, // Updated here
    { label: "Blogs", section: null },
    { label: "Contact Us", section: "contactForm" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section) => {
    if (section) {
      // Scroll to the section
      scrollToSection(section);
      // Close the mobile menu after a small delay to ensure the scroll action completes
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 300); // Adjust delay as needed
    } else {
      // Handle cases where section is null (e.g., navigate to external pages)
      setIsMobileMenuOpen(false);
    }
  };

  const handelSublinkClick = (section) => {
    if (section) {
      router.push(section);
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-black py-4 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              <Image
                src="/Agency-Logo-(Tag).png"
                alt="Growwik Logo"
                width={150}
                height={50}
                className="h-20 w-28"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                {item.section ? (
                  <div>
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="button-underline text-white relative overflow-hidden group"
                    >
                      {item.label}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </button>
                    {item.sublinks && (
                      <div className="absolute hidden group-hover:block pt-2 -left-4">
                        <div className="bg-black py-2 px-4 rounded shadow-lg">
                          {item.sublinks.map((sublink) => (
                            <button
                              key={sublink.label}
                              onClick={() => router.push(sublink.section)}
                              className="block whitespace-nowrap py-2 text-white hover:text-gray-300 transition-colors "
                            >
                              {sublink.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.label === "Blogs" ? "/blogs" : "/case-studies"}
                    className="button-underline text-white relative overflow-hidden group"
                  >
                    {item.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>

          {/* ASCI Member */}
          <motion.div
            className="hidden xl:flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white">MEMBER OF</span>
            <Image
              src="/ASCI-Logo.png"
              alt="ASCI Logo"
              width={80}
              height={30}
              className="h-14 w-20"
            />
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="xl:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="xl:hidden mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav>
                <ul className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.section ? (
                        <div>
                          <button
                            onClick={() => handleNavClick(item.section)}
                            className="button-underline text-white relative overflow-hidden group"
                          >
                            {item.label}
                            <motion.span
                              className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left"
                              initial={{ scaleX: 0 }}
                              whileHover={{ scaleX: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </button>
                          {item.sublinks && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.sublinks.map((sublink) => (
                                <button
                                  key={sublink.label}
                                  onClick={() =>
                                    handelSublinkClick(sublink.section)
                                  }
                                  className="block text-white hover:text-gray-300 transition-colors"
                                >
                                  {sublink.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={
                            item.label === "Blogs" ? "/blogs" : "/case-studies"
                          }
                          className="button-underline text-white relative overflow-hidden group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                          <motion.span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <motion.div
                className="mt-4 flex items-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-white">MEMBER OF</span>
                <Image
                  src="/ASCI-Logo.png"
                  alt="ASCI Logo"
                  width={80}
                  height={30}
                  className="h-14 w-20"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
