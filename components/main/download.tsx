//components/main/download.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DownloadBtnImg from '@/public/pics/download/download_btn.webp'
import PhoneScreenImg from '@/public/pics/download/phone_screen.png'

export default function Download() {
  return (
    <div className="bg-white py-8 px-4 md:py-24 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:mr-8 items-center">
        <div className="w-full md:w-3/5 md:ml-6 ">
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
        
        <div className="w-full md:w-1/5 relative h-80 md:h-96 flex items-center justify-center md:ml-24">
          <div className="absolute bottom-0 w-48 h-48 md:w-56 md:h-56 lg:h-76 lg:h-76 rounded-full bg-blue-600 z-0"></div>
          
          <div className="absolute z-10 transform ">
            <Image 
              src={PhoneScreenImg}
              alt="TalkMate App" 
              width={240}
              height={240}
              className="w-28 md:w-32 drop-shadow-xl translate-y-6"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}