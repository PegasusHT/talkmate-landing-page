'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DownloadBtnImg from '@/public/download/download_btn.webp'
import PhoneScreenImg from '@/public/download/phone_screen.png'

export default function Download() {
  return (
    <div className="bg-white py-8 px-4 md:py-24 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-2/3 md:ml-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Learn a Language With AI 5x Faster
          </h2>
          
          <p className="lg:text-lg mb-14 max-w-lg">
            TalkMate is an AI-powered language tutor. It&apos;s the most efficient way to learn a 
            language. Chat about an unlimited amount of interesting topics either by 
            writing or speaking while receiving messages with realistic voice.
          </p>
          
          <div className="flex justify-center space-x-12 mb-8">
            <Image 
              src="/download/qr.png" 
              alt="TalkMate QR Code" 
              width={120} 
              height={120}
              priority
              className=''
            />
          </div>
          
          <div className="flex justify-center">
            <Link 
              href="https://apps.apple.com/vn/app/talkmate-ai-english-learning/id6736656529" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
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
        
        <div className="w-full md:w-1/3 relative h-96 flex items-center justify-center">
          <div className="absolute bottom-0 w-64 h-64 md:w- lg:h-76 lg:h-76 rounded-full bg-blue-600 z-0"></div>
          
          <div className="absolute z-10 transform -translate-y-6">
            <Image 
              src={PhoneScreenImg}
              alt="TalkMate App" 
              width={280}
              height={560}
              className="w-40 drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}