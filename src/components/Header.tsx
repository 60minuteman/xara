'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Report from './Report';

interface HeaderProps {
  variant?: 'light' | 'dark';
}

const Header = ({ variant = 'light' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const isDark = variant === 'dark';
  const logoSrc = isDark ? "/logo/logo-white.png" : "/logo/logo.png";
  const textColor = isDark ? "text-white" : "text-black";
  const buttonBg = isDark ? "bg-white" : "bg-[#E6EFF4]";
  const buttonHoverBg = isDark ? "hover:bg-gray-100" : "hover:bg-[#d9e5ec]";
  const buttonTextColor = "text-black";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-transparent"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-16 sm:w-20 h-6 z-50">
            <Image
              src={logoSrc}
              alt="Xara Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${textColor} p-2 z-50`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/faq" className={`${textColor} hover:text-gray-300 transition-colors font-medium flex items-center`}>
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
              FAQ
            </Link>
            <button 
              onClick={() => setIsContactOpen(true)}
              className={`px-6 py-2 ${buttonBg} ${buttonTextColor} rounded-full ${buttonHoverBg} transform hover:scale-105 transition-all duration-300 ease-in-out font-medium`}
            >
              Report an Issue
            </button>
          </div>

          {/* Mobile Menu - Fullscreen */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed inset-0 bg-white flex flex-col items-center justify-center z-40 md:hidden"
              >
                <motion.div 
                  className="flex flex-col items-center space-y-8 -mt-20"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                    <Link 
                      href="/faq" 
                      className={`px-8 py-3 ${buttonBg} ${buttonTextColor} rounded-full ${buttonHoverBg} transform hover:scale-105 transition-all duration-300 ease-in-out text-xl font-medium flex items-center`}
                    >
                      <svg 
                        className="w-6 h-6 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                        />
                      </svg>
                      FAQ
                    </Link>
                  </motion.div>
                  <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                    <button 
                      onClick={() => setIsContactOpen(true)}
                      className={`px-8 py-3 ${buttonBg} ${buttonTextColor} rounded-full ${buttonHoverBg} transform hover:scale-105 transition-all duration-300 ease-in-out text-xl font-medium`}
                    >
                      Report an Issue
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      <Report 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
};

export default Header;