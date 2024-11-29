'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const AnimatedContactButtons = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="mb-2"
            >
              <Link
                href="mailto:your-email@example.com"
                className="bg-[#222222] text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
                aria-label="Send us an email"
              >
                <FiMail className="w-6 h-6" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mb-2"
            >
              <Link
                href="https://wa.me/your-whatsapp-number"
                className="bg-[#222222] text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <motion.button
        className="bg-[#222222] text-white p-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <FiMessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  )
}

export default AnimatedContactButtons
