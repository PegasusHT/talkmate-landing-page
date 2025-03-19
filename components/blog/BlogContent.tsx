'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import heroPic from '@/public/pics/blog/thinking_boy.jpg';

export default function BlogContent() {
  return (
    <div className="bg-white">
      <div className="pt-20 pb-12 md:pt-28 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">TalkMate Blog</h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and success stories to help you master English
          </p>
        </div>
      </div>

      <div className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative h-72 md:h-96 w-full bg-blue-100">
              <Image 
                src={heroPic}
                alt="Person practicing English speaking" 
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                placeholder="blur"
                priority={true}
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
            
            <div className="p-3 md:p-6 lg:p-10 flex flex-col">
              <div className="flex flex-wrap gap-4 text-xs md:text-sm text-gray-500 mb-8">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  <span>March 13, 2025</span>
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  <span>TalkMate Team</span>
                </div>
                <div className="flex items-center">
                  <FaTag className="mr-2" />
                  <span>Speaking Skills</span>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Breaking the Silent Barrier: Why Most English Learners Struggle with Speaking</h2>
              
              <div className="flex flex-col gap-4 md:gap-8 md:text-lg lg:text-xl text-gray-700">
                <p className="leading-relaxed">
                  You know the feeling: your thoughts in English are clear, but when it&apos;s time to speak, everything becomes awkward and unnatural.
                </p>
                
                <p className="leading-relaxed">
                  Or perhaps you understand native speakers perfectly, but can&apos;t respond quickly enough in conversation.
                </p>
                
                <p className="leading-relaxed">
                  Maybe you have an impressive vocabulary stored in your mind, but when faced with real communication situations, your mind suddenly goes blank.
                </p>
                
                <p className="leading-relaxed">
                  And most commonly, the fear of pronunciation mistakes and judgment from listeners leads you to choose silence over practice.
                </p>
                
                <div className="flex flex-col gap-6 mt-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">The Gap Between Knowledge and Communication</h3>
                  
                  <p className="leading-relaxed">
                    I understand these feelings deeply because they mirror my own experiences while living and working abroad. Having knowledge of grammar and vocabulary isn&apos;t enough—the most important thing is to practice communication regularly and overcome the fear of making mistakes.
                  </p>
                  
                  <p className="leading-relaxed">
                    This is exactly why we created TalkMate. Built from real-world experiences, TalkMate is a smart application integrated with artificial intelligence (AI) that helps you practice speaking every day with ease, without fear of judgment.
                  </p>
                </div>
                
                <div className="flex flex-col gap-6 mt-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">The Magic of Roleplay: Practice That Feels Real</h3>
                  
                  <p className="leading-relaxed">
                    One of TalkMate&apos;s most exciting features is &quot;Roleplay,&quot; which allows you to:
                  </p>
                  
                  <ul className="flex flex-col gap-4 pl-6 list-disc">
                    <li className="leading-relaxed">Practice communication in countless everyday situations (ordering at a restaurant, job interviews, phone calls, conversations at the airport...)</li>
                    <li className="leading-relaxed">Create your own custom scenarios: imagine meeting your favorite celebrity, a character from a movie you admire, or practice for events happening in your daily life</li>
                  </ul>
                  
                  <p className="leading-relaxed">
                    Whatever communication scenario you can imagine—TalkMate is there to help you practice!
                  </p>
                </div>
                
                <div className="flex flex-col gap-6 mt-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Just a Few Minutes a Day Can Transform Your English</h3>
                  
                  <p className="leading-relaxed">
                    By spending just a few minutes each day conversing with your TalkMate &quot;AI friend,&quot; you&apos;ll quickly:
                  </p>
                  
                  <ul className="flex flex-col gap-2 md:gap-4 pl-6 list-disc">
                    <li className="leading-relaxed">Upgrade your communication skills</li>
                    <li className="leading-relaxed">Develop more natural responses</li>
                    <li className="leading-relaxed">Improve your pronunciation accuracy</li>
                    <li className="leading-relaxed">Most importantly, gain confidence to communicate in English anywhere!</li>
                  </ul>
                  
                  <p className="leading-relaxed">
                    Why hesitate? Try it today!
                  </p>
                </div>
                
                <div className="flex justify-center my-6">
                  <Link 
                    href="https://apps.apple.com/vn/app/talkmate-ai-english-learning/id6736656529" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Download TalkMate Free
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-gray-900">More Posts Coming Soon</h2>
          <p className="text-lg text-gray-600">
            We&apos;re working on more helpful articles about language learning techniques, success stories,
            and tips to make your English learning journey more effective.
          </p>
          <div>
            <Link 
              href="/" 
              className="inline-block bg-white border border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}