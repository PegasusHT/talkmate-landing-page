'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutContent() {
  return (
    <div className="bg-white">
      <div className="pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About TalkMate</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing language learning with AI technology
          </p>
        </div>
      </div>

      <div className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At TalkMate, we believe language learning should be accessible, engaging, and effective. 
                Our mission is to break down language barriers and make communication across cultures easier for everyone.
              </p>
              <p className="text-lg text-gray-600">
                We&apos;ve combined the latest advancements in artificial intelligence with proven language learning 
                methods to create an experience that helps you learn a language up to 5 times faster than 
                traditional methods.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative h-80 w-80">
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src="/pics/download/phone_screen.png" 
                    alt="TalkMate App Interface" 
                    width={240} 
                    height={400}
                    className="drop-shadow-xl w-40 h-80 -translate-y-16"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Beginning</h3>
              <p className="text-gray-600">
                TalkMate started with a simple idea: language learning should feel like having a conversation 
                with a friend, not studying from a textbook. Our founders experienced firsthand how traditional 
                methods failed to prepare them for real-world conversations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Innovation</h3>
              <p className="text-gray-600">
                By leveraging cutting-edge AI technology, we developed a platform that adapts to each learner&apos;s 
                needs, provides instant feedback, and creates personalized learning paths. TalkMate can understand 
                context, correct pronunciation, and hold natural conversations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Today & Beyond</h3>
              <p className="text-gray-600">
                Today, TalkMate helps thousands of learners around the world achieve fluency faster than ever before. 
                We continue to innovate and improve our platform, adding new languages and features to create the most 
                effective language learning experience possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to start your language journey?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Download TalkMate today and experience the future of language learning.
          </p>
          <Link 
            href="https://apps.apple.com/vn/app/talkmate-ai-english-learning/id6736656529" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Now
          </Link>
        </div>
      </div>
    </div>
  );
}