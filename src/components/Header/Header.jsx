'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/brands", label: "Brands" },
    { href: "/contact", label: "Contact Us" },
    { href: "/blogs", label: "Blogs" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-black py-4">
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
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors duration-200 text-lg"
                  >
                    {item.label}
                  </Link>
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
          className={`xl:hidden ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } mt-4`}
        >
          <nav>
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors duration-200 text-lg block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
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
  )
}