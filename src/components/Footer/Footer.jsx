import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="col-span-1">
            <Link href="/">
              <Image
                src="/Agency-Logo-(Tag).png" // Replace with your actual logo path
                alt="Growwik Logo"
                width={200}
                height={80}
                className="w-44 h-32"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="text-red-500 text-xl font-semibold mb-4">Navigation Link</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300 transition-colors duration-200">
                  <span className="mr-2">{'>'}</span>Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300 transition-colors duration-200">
                  <span className="mr-2">{'>'}</span>About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300 transition-colors duration-200">
                  <span className="mr-2">{'>'}</span>Services
                </Link>
              </li>
              <li>
                <Link href="/creators" className="hover:text-gray-300 transition-colors duration-200">
                  <span className="mr-2">{'>'}</span>Creators
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="col-span-1">
            <h3 className="text-red-500 text-xl font-semibold mb-4">Other Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/case-studies" className="hover:text-gray-300 transition-colors duration-200">
                  <span className="mr-2">{'>'}</span>Case Studies
                </Link>
              </li>
              <li>
                <Link href="/statiks-tools" className="hover:text-gray-300 transition-colors duration-200">
                  <span className="mr-2">{'>'}</span>Statiks Tools
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors duration-200">
                  <span className="mr-2">{'>'}</span>Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-red-500 text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Link href="tel:+917760519545" className="hover:text-gray-300 transition-colors duration-200">
                  +91 7760519545
                </Link>
              </li>
              <li className="flex items-start">
                <Link href="mailto:Contact@growwik.com" className="hover:text-gray-300 transition-colors duration-200">
                  Contact@growwik.com
                </Link>
              </li>
              <li>Bangalore, Karnataka</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}