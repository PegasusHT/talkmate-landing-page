'use client';

import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactContent() {
  return (
    <div className="bg-white">
      <div className="pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>

      <div className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-10">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-5">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Email Us</h3>
                  <p className="text-gray-600 mt-2 text-lg">
                    For all inquiries, please email us at:
                  </p>
                  <a 
                    href="mailto:talkmatevvv1@gmail.com" 
                    className="text-blue-600 hover:underline text-xl font-medium mt-1 inline-flex items-center"
                  >
                    talkmatevvv1@gmail.com
                    <FaExternalLinkAlt className="ml-2 text-sm" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-5">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Office Address</h3>
                  <p className="text-gray-600 mt-2 text-lg">We currently operate remotely</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Reach Us</h3>
              <p className="text-gray-600 mb-6 text-lg">
                We&apos;re here to help with any questions you might have about TalkMate. When contacting us, please include:
              </p>
              <ul className="space-y-3 text-gray-600 mb-6 list-disc pl-5 text-lg">
                <li>A clear subject line (e.g., &quot;Technical Support,&quot; &quot;Feedback,&quot; &quot;Partnership&quot;)</li>
                <li>Details about your inquiry or issue</li>
                <li>Any relevant screenshots or information that might help us assist you better</li>
              </ul>
              <p className="text-gray-600 text-lg">
                We aim to respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          <p className="text-xl text-gray-600 mb-8">
            Follow us on social media for the latest updates, language learning tips, and more.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
      
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How quickly can I expect a response?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer technical support?</h3>
              <p className="text-gray-600">
                Yes, you can email us for technical support. Please include &quot;Technical Support&quot; in your subject line and provide as much detail as possible about the issue you&apos;re experiencing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">I have a suggestion for a new feature. How can I share it?</h3>
              <p className="text-gray-600">
                We love hearing your ideas! Please email us with &quot;Feature Suggestion&quot; in your subject line when submitting your ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}