"use client";

import Image from 'next/image';
import { useEffect, useState, useRef, useCallback } from 'react';
import rolePlayImg from '@/public/features/roleplay.png';
import pronunciationImg from '@/public/features/pronunciation.png';
import chatImg from '@/public/features/chat.png';

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const handleGroupMouseEnter = useRef((e: Event) => {
    const group = e.currentTarget as HTMLElement;
    const featureBox = group.querySelector('.feature-box') as HTMLElement;
    const imageLayer = group.querySelector('.image-layer') as HTMLElement;
    const animationType = featureBox.getAttribute('data-animation-type');
    
    if (imageLayer) {
      switch (animationType) {
        case "horizontal-left-to-right":
          imageLayer.style.transform = 'translateX(-30px)';
          setTimeout(() => {
            imageLayer.style.transform = 'translateX(30px)';
          }, 50);
          break;
          
        case "vertical-bottom-to-top":
          imageLayer.style.transform = 'translateY(30px)';
          setTimeout(() => {
            imageLayer.style.transform = 'translateY(-30px)';
          }, 50);
          break;
          
        case "horizontal-right-to-left":
          imageLayer.style.transform = 'translateX(30px)';
          setTimeout(() => {
            imageLayer.style.transform = 'translateX(-30px)';
          }, 50);
          break;
          
        default:
          imageLayer.style.transform = 'translateX(-30px)';
          setTimeout(() => {
            imageLayer.style.transform = 'translateX(30px)';
          }, 50);
      }
    }
  }).current;

  const handleGroupMouseLeave = useRef((e: Event) => {
    const group = e.currentTarget as HTMLElement;
    const imageLayer = group.querySelector('.image-layer') as HTMLElement;
    if (imageLayer) {
      imageLayer.style.transform = 'translateX(0) translateY(0)';
    }
  }).current;
  
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && isMobile) {
        const featureGroup = entry.target as HTMLElement;
        
        if (!featureGroup.classList.contains('animated')) {
          featureGroup.classList.add('animated');
          
          const imageLayer = featureGroup.querySelector('.image-layer') as HTMLElement;
          const featureBox = featureGroup.querySelector('.feature-box') as HTMLElement;
          const animationType = featureBox.getAttribute('data-animation-type');
          
          if (imageLayer) {
            switch (animationType) {
              case "horizontal-left-to-right":
                imageLayer.style.transform = 'translateX(30px)';
                break;
              case "vertical-bottom-to-top":
                imageLayer.style.transform = 'translateY(-30px)';
                break;
              case "horizontal-right-to-left":
                imageLayer.style.transform = 'translateX(-30px)';
                break;
              default:
                imageLayer.style.transform = 'translateX(30px)';
            }
          }
        }
      }
      // We don't remove the animated class when scrolling away
    });
  }, [isMobile]);
  
  const handleMouseEnter = useCallback((e: Event) => {
    if (!isMobile) {
      handleGroupMouseEnter(e);
    }
  }, [isMobile, handleGroupMouseEnter]);
  
  const handleMouseLeave = useCallback((e: Event) => {
    if (!isMobile) {
      handleGroupMouseLeave(e);
    }
  }, [isMobile, handleGroupMouseLeave]);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    
    const featureGroups = document.querySelectorAll('.feature-group');
    
    featureGroups.forEach(group => {
      group.addEventListener('mouseenter', handleMouseEnter);
      group.addEventListener('mouseleave', handleMouseLeave);
    });
    
    if (typeof IntersectionObserver !== 'undefined') {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      };
      
      const observer = new IntersectionObserver(handleIntersection, observerOptions);
      
      featureGroups.forEach(group => {
        observer.observe(group);
      });
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      
      featureGroups.forEach(group => {
        group.removeEventListener('mouseenter', handleMouseEnter);
        group.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile, handleIntersection, handleMouseEnter, handleMouseLeave]);
  
  const features = [
    {
      id: 1,
      title: "Chat",
      subtitle: "Natural conversations",
      description: "Develop your English skills by chatting with our AI teacher.",
      image: chatImg,
      alt: "Chat feature illustration",
      gradient: "from-blue-400 to-indigo-500",
      animationType: "horizontal-left-to-right"
    },
    {
      id: 2,
      title: "Roleplay",
      subtitle: "Real-world scenarios",
      description: "Practice real-life English through practical, everyday scenarios.",
      image: rolePlayImg,
      alt: "Roleplay feature illustration",
      gradient: "from-purple-400 to-pink-500",
      animationType: "vertical-bottom-to-top"
    },
    {
      id: 3,
      title: "Pronunciation",
      subtitle: "Speak with Confidence",
      description: "Enhance your speech with practice and detailed audio insights.",
      image: pronunciationImg,
      alt: "Pronunciation feature illustration",
      gradient: "from-green-400 to-teal-500",
      animationType: "horizontal-right-to-left"
    }
  ];

  return (
    <div className="bg-white pt-20 pb-10 px-8" ref={featuresRef}>
      <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature) => (
          <div key={feature.id} className="feature-group mt-12 md:mt-0 flex flex-col items-center justify-center relative group">
            <h3 className="text-2xl font-bold text-gray-800 transition-all duration-300 mb-[-2rem] group-hover:-translate-y-4 md:group-hover:-translate-y-4 md:group-hover:mb-0 animated:-translate-y-4 animated:mb-0">
              {feature.title}
            </h3>
            
            <div className="opacity-0 group-hover:opacity-100 animated:opacity-100 transition-all duration-300 z-10 transform translate-y-4 group-hover:translate-y-0 animated:translate-y-0">
              <p className="text-sm text-gray-600">{feature.subtitle}</p>
            </div>
            
            <div 
              className="feature-box w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-3xl bg-gradient-to-r overflow-hidden relative cursor-pointer group-hover:scale-110 md:group-hover:scale-110 animated:scale-110 transition-all duration-300 flex flex-col justify-between mt-8"
              data-animation-type={feature.animationType}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient}`}></div>
              
              <div className="absolute w-full h-full opacity-0 group-hover:opacity-20 md:group-hover:opacity-20 animated:opacity-20 bg-white transform rotate-45 -translate-x-full -translate-y-1/4 group-hover:translate-x-full group-hover:translate-y-full md:group-hover:translate-x-full md:group-hover:translate-y-full animated:translate-x-full animated:translate-y-full transition-all duration-1000"></div>
              
              <div className="image-layer w-full absolute bottom-0 left-0 transition-transform duration-700 ease-in-out z-10">
                <div className="flex justify-center items-end h-full">
                  <Image 
                    src={feature.image} 
                    alt={feature.alt}
                    width={170}
                    height={170}
                    className="object-contain md:w-36 lg:w-40 transform group-hover:scale-110 md:group-hover:scale-110 animated:scale-110 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 animated:opacity-100 transition-all duration-500 delay-100">
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}