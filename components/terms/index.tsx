'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsContent() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white">
      <div className="pt-20 pb-8 md:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms and Conditions</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using TalkMate AI
          </p>
        </div>
      </div>

      <div className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 md:p-10 flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Terms of Use</h2>
                <p className="text-sm text-gray-500">Last updated: {currentDate}</p>
              </div>
              
              <div className="flex flex-col gap-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Please read these terms of use (&quot;Terms&quot;) carefully before using the TalkMate AI application (&quot;App&quot;) 
                  operated by Quoc Huy Bui (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  By downloading, accessing, or using our App, you agree to be bound by these Terms. If you disagree 
                  with any part of the terms, then you may not access or use the App.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">2. License Grant</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license 
                  to use the App on any Apple-branded products that you own or control and as permitted by the Usage Rules 
                  set forth in the App Store Terms of Service.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">3. Restrictions</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  You agree not to, and you will not permit others to:
                </p>
                <div className="pl-6 flex flex-col gap-2 text-base md:text-lg text-gray-700 leading-relaxed">
                  <p>a) License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise 
                  commercially exploit the App or make the App available to any third party.</p>
                  
                  <p>b) Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any 
                  part of the App.</p>
                  
                  <p>c) Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) 
                  of the App or its affiliates, partners, suppliers or the licensors of the App.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">4. Intellectual Property</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  The App and its original content, features, and functionality are and will remain the exclusive property 
                  of Quoc Huy Bui and its licensors. The App is protected by copyright, trademark, and other laws of both 
                  the United States and foreign countries.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">5. Termination</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason 
                  whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use 
                  the App will immediately cease.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">6. Limitation of Liability</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  In no event shall Quoc Huy Bui, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential or punitive damages, including without 
                  limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access 
                  to or use of or inability to access or use the App.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">7. Changes</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
                  is material we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-gray-900">8. Contact Us</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
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