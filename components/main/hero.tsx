"use client";

import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import heroImage from '@/public/pics/hero.png';
import bgLayer1 from '@/public/pics/bg1.jpeg';
import logo from '@/public/pics/logo.png';

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const background = document.querySelector("[data-type='parallax-bg']") as HTMLElement;
        const foreground = document.querySelector("[data-type='parallax-fg']") as HTMLElement;
        
        if (background && foreground) {
          background.style.transform = `translateY(${scrolled * 0.2}px)`;
          foreground.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900">
      <div className="h-[36rem] relative overflow-hidden bg-gray-800">
        <Image 
          src={bgLayer1}
          alt='background layer 1'
          className='h-full w-full object-cover'
          width={1000} height={1000}
        />
        <div 
          data-type="parallax-bg"
          className="absolute inset-0 transition-transform duration-100 ease-out will-change-transform"
        >
          <div className="absolute inset-0 -rotate-6"></div>
        </div>
        <div 
          data-type="parallax-fg"
          className="absolute bottom-0 right-10 transition-transform duration-100 ease-out will-change-transform"
        >
          <div className="">
            <Image 
              src={heroImage}
              alt="Hero Image" 
              className=" md:mr-16 lg:mr-28 mb-[-1rem] opacity-95
                w-52 md:w-64 lg:w-76"
              width={240} height={180}
            />
          </div>
        </div>
      </div>
      <div className="h-62 flex items-center justify-center p-8">
        <div className="text-center">
          <div className='flex items-center justify-center mb-6 gap-4'>
            <Image 
              src={logo}
              alt="TalkMate Logo" 
              className="w-14 h-14"
              width={32} height={32}
            /> 
            <h1 className="text-4xl font-bold text-white">
              TalkMate
            </h1>
          </div>
          <p className="text-xl text-gray-200 mb-8">
            Practice conversations with AI-powered language partners
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 mx-auto hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Start Speaking Now
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}