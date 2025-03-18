'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if the current path matches the link
  const isActiveLink = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600">TalkMate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${isActiveLink('/') 
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${isActiveLink('/about') 
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                : 'text-gray-700 hover:text-blue-600'}`}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className={`transition-colors ${isActiveLink('/blog') 
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                : 'text-gray-700 hover:text-blue-600'}`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${isActiveLink('/contact') 
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Download App Button (Desktop) */}
          <div className="hidden md:block">
            <Link 
              href="https://apps.apple.com/vn/app/talkmate-ai-english-learning/id6736656529" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Download App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 py-4 shadow-md">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              href="/" 
              className={`text-lg py-2 ${isActiveLink('/') 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-700'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-lg py-2 ${isActiveLink('/about') 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-700'}`}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className={`text-lg py-2 ${isActiveLink('/blog') 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-700'}`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`text-lg py-2 ${isActiveLink('/contact') 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-700'}`}
            >
              Contact
            </Link>

            <Link 
              href="https://apps.apple.com/vn/app/talkmate-ai-english-learning/id6736656529" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center mt-4"
            >
              Download App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}