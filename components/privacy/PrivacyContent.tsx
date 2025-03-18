'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyContent() {
  return (
    <div className="bg-white">
      <div className="pt-20 pb-8 md:pt-28 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            How TalkMate AI handles your data
          </p>
        </div>
      </div>

      <div className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 md:p-10 flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">TalkMate AI Privacy Policy</h2>
                <p className="text-sm text-gray-500">Last updated: October 11, 2024</p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">Introduction</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  TalkMate AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, and share information about you when you use our 
                  mobile application (the &quot;App&quot;).
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">Information We Collect</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We collect the following information when you use our App:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2 text-base md:text-lg text-gray-700 leading-relaxed">
                  <li>Email address</li>
                  <li>Username</li>
                  <li>Last name</li>
                </ul>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  This information is collected through the OAuth sign-in process.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">How We Use Your Information</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2 text-base md:text-lg text-gray-700 leading-relaxed">
                  <li>Provide, maintain, and improve our App</li>
                  <li>Communicate with you about your account and our services</li>
                  <li>Personalize your experience within the App</li>
                </ul>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">Sharing of Information</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We do not sell your personal information. We do not share your information with any third parties 
                  except as necessary to provide our services through the App Store or Google Play Store.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">Data Retention</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We do not have a specific data retention policy. Your information is retained as long as you 
                  maintain an active account with us. You may request deletion of your data at any time by contacting us.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">Data Security</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">Your Rights</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  You have the right to access, correct, or delete your personal information. To exercise these rights, 
                  please contact us at <a href="mailto:talkmatevvv1@gmail.com" className="text-blue-600 hover:underline">talkmatevvv1@gmail.com</a>.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">Children&apos;s Privacy</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our App is intended for use by individuals over 4 years old. We do not knowingly collect personal 
                  information from children under 4. If you are a parent or guardian and believe we may have collected 
                  information about a child under 4, please contact us.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">Changes to This Policy</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="ml-6">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Quoc Huy Bui<br />
                    Email: <a href="mailto:talkmatevvv1@gmail.com" className="text-blue-600 hover:underline">talkmatevvv1@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <Link 
                  href="/" 
                  className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}