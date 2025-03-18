//components/footer/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTiktok, 
  FaYoutube, 
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import DownloadBtnImg from '@/public/pics/download/download_btn.webp';
import urls from '@/public/constants/links';

const { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL, TIKTOK_URL } = urls.SOCIAL_MEDIA; 

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  
  const isActiveLink = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };
  
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">TalkMate</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className={`transition-colors ${isActiveLink('/') 
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`transition-colors ${isActiveLink('/about') 
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className={`transition-colors ${isActiveLink('/blog') 
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'}`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`transition-colors ${isActiveLink('/contact') 
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'}`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  className={`transition-colors ${isActiveLink('/privacy-policy') 
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'}`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className={`transition-colors ${isActiveLink('/terms') 
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'}`}
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <FaInstagram className="text-gray-700" size={18} />
              </Link>
              <Link href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <FaFacebookF className="text-gray-700" size={18} />
              </Link>
              <Link href={TWITTER_URL} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <FaXTwitter className="text-gray-700" size={18} />
              </Link>
              <Link href={TIKTOK_URL} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <FaTiktok className="text-gray-700" size={18} />
              </Link>
              <Link href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                <FaYoutube className="text-gray-700" size={18} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Download App</h3>
            <Link 
              href="https://apps.apple.com/vn/app/talkmate-ai-english-learning/id6736656529" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <Image 
                src={DownloadBtnImg}
                alt="Download on the App Store" 
                width={120} 
                height={120} 
                priority
                className="rounded-xl"
              />
            </Link>
          </div>
        </div>
        
        <div className="h-px bg-gray-300 my-6"></div>
        
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} TalkMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}