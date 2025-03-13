'use client';

import React, { useState } from 'react';
import { FaAngleRight, FaPlus, FaMinus } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface QuestionContainerProps {
  faq: FAQItem;
  isOpen: boolean;
  toggleOpen: (id: number) => void;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({ faq, isOpen, toggleOpen }) => {
  const icon = isOpen ? <FaMinus /> : <FaPlus />;
  
  return (
    <div className="mb-4 rounded-lg shadow-md overflow-hidden">
      <div 
        className="flex flex-row items-start bg-gray-100 px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors duration-200" 
        onClick={() => toggleOpen(faq.id)}
      >
        <h2 className="font-semibold text-black text-sm lg:text-lg flex items-start"> 
          <FaAngleRight className={`mr-2 mt-1 lg:text-lg transition-transform duration-200 ${isOpen ? 'transform rotate-90' : ''}`} />
          {faq.question}
        </h2>
        <div className="ml-auto text-sm lg:text-lg mt-1">
          {icon}
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="mt-1 p-4 pt-2 text-sm lg:text-base bg-white">
          <p>{faq.answer}</p>
        </div>
      </Transition>
    </div>
  );
};

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How is TalkMate different from other language learning apps?",
      answer: "Unlike other language learning apps, TalkMate uses the most advanced AI to create an interactive, fun and engaging language learning experience. Artificial Intelligence lets users achieve fluency with an active learning approach. TalkMate imitates real-life scenarios where users learn by interacting with native speakers."
    },
    {
      id: 2,
      question: "What subscription options does TalkMate offer?",
      answer: "TalkMate offers a free subscription with limited features and TalkMate Premium, which comes with no limitations and more advanced features. TalkMate Premium includes monthly or yearly payment options."
    },
    {
      id: 3,
      question: "Can I cancel my TalkMate Premium subscription anytime?",
      answer: "Yes, you can cancel your TalkMate Premium subscription at any time. After the cancelation, the subscription will end at the end of the subscription period."
    }
  ];
  
  return (
    <div className="bg-white pt-12 pb-4 px-4 md:px-8">
      <div className="max-w-4xl md:ml-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 ml-2 md:mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {faqData.map((faq) => (
            <QuestionContainer 
              key={faq.id}
              faq={faq}
              isOpen={openFAQ === faq.id}
              toggleOpen={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
}