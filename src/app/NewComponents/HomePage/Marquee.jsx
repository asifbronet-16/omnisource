"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const logos = [
  { name: 'BM', src: '/logos/bm.png' },
  { name: 'Al Tayer', src: '/logos/al-tayer.png' },
  { name: 'Al-Futtaim', src: '/logos/al-futtaim.png' },
  { name: 'Acciona', src: '/logos/acciona.png' },
  { name: 'ASGC', src: '/logos/asgc.png' },
  { name: 'Siemens', src: '/logos/siemens.png' },
];

const ClientMarquee = () => {
  // 1. Counter Logic
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    // Animates from 0 to 200 over 2 seconds
    const controls = animate(count, 200, { duration: 2 });
    return rounded.on("change", (latest) => setDisplayCount(latest));
  }, []);

  return (
    <div className="bg-black py-20 overflow-hidden font-public-sans text-white">
      {/* Header with Animated Number */}
      <div className="flex flex-col items-center mb-12">
        <div className="text-3xl mb-2">
          {/* Using a simple SVG icon as seen in your image */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <h2 className="text-4xl font-light tracking-tight">
          {displayCount}+ Clients
        </h2>
      </div>

      {/* 2. Seamless Infinite Marquee */}
      <div className="relative flex border-y border-white/10 py-8">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1035], // Adjust -1035 to exactly half the width of your total logo list
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* Render the logos twice to ensure zero gaps */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-16 border-r border-white/10 h-16 min-w-[300px]"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-h-full w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientMarquee;